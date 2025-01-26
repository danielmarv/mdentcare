"use server";

import { revalidatePath } from "next/cache";
import { ID, Query } from "node-appwrite";

import {
  APPOINTMENT_COLLECTION_ID,
  DATABASE_ID,
  databases,
  messaging,
} from "../appwrite.config";
import { formatDateTime, parseStringify } from "../utils";

import { Appointment } from "@/types/appwrite.types";

//  CREATE APPOINTMENT
export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  try {
    const newAppointment = await databases.createDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      ID.unique(),
      appointment
    );

    revalidatePath("/admin");
    return parseStringify(newAppointment);
  } catch (error) {
    console.error("An error occurred while creating a new appointment:", error);
  }
};

//  GET RECENT APPOINTMENTS
export const getRecentAppointmentList = async () => {
  try {
    const appointments = await databases.listDocuments(DATABASE_ID!, APPOINTMENT_COLLECTION_ID!, [
      Query.orderDesc("$createdAt"),
    ])

    const initialCounts = {
      scheduledCount: 0,
      pendingCount: 0,
      cancelledCount: 0,
      completedCount: 0,
    }

    const counts = (appointments.documents as Appointment[]).reduce((acc, appointment) => {
      switch (appointment.status) {
        case "scheduled":
          acc.scheduledCount++
          break
        case "pending":
          acc.pendingCount++
          break
        case "cancelled":
          acc.cancelledCount++
          break
        case "completed":
          acc.completedCount++
          break
      }
      return acc
    }, initialCounts)

    const data = {
      totalCount: appointments.total,
      ...counts,
      documents: appointments.documents,
    }

    return parseStringify(data)
  } catch (error) {
    console.error("An error occurred while retrieving the recent appointments:", error)
  }
}

//  SEND SMS NOTIFICATION
export const sendSMSNotification = async (userId: string, content: string) => {
  try {
    const message = await messaging.createSms(
      ID.unique(),
      content,
      [],
      [userId]
    );
    return parseStringify(message);
  } catch (error) {
    console.error("An error occurred while sending sms:", error);
  }
};

export const sendEmailNotifircation = async (
  userId: string,
  content: string,
  subject: string
) => {
  try {
    const message = await messaging.createEmail(
      ID.unique(),
      subject,
      content,
      ["appointment_updates"],
      [userId],
      [],
      [],
      [],
      [],
      false,
      true
    );
    return parseStringify(message);
  } catch (error) {
    console.error("An error occurred while sending email:", error);
  }
};

//  UPDATE APPOINTMENT
export const updateAppointment = async ({ appointmentId, userId, appointment, type }: UpdateAppointmentParams) => {
  try {
    const updatedAppointment = await databases.updateDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId,
      appointment,
    )

    if (!updatedAppointment) throw Error

    const smsMessage = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
        <h2 style="color: #444;">Greetings from M-Dental Clinic,</h2>
        <p>${
          type === "schedule"
            ? `We are pleased to inform you that your appointment is confirmed for <strong>${formatDateTime(appointment.schedule!).dateTime}</strong> with Dr. <strong>${appointment.primaryPhysician}</strong>.`
            : type === "cancel"
              ? `We regret to inform you that your appointment for <strong>${formatDateTime(appointment.schedule!).dateTime}</strong> has been cancelled.`
              : `We are pleased to inform you that your appointment on <strong>${formatDateTime(appointment.schedule!).dateTime}</strong> with Dr. <strong>${appointment.primaryPhysician}</strong> has been completed.`
        }</p>
        ${type === "cancel" ? `<p><strong>Reason for cancellation:</strong> ${appointment.cancellationReason}</p>` : ""}
        <p>Thank you for choosing M-Dental Clinic. If you have any questions or need further assistance, please don't hesitate to contact us.</p>
        <p style="margin-top: 20px;">
          Best regards,<br />
          <strong>M-Dental Clinic Team</strong><br />
          <a href="https://mdentalclinic.com" style="color: #0066cc; text-decoration: none;">www.mdentalclinic.com</a>
        </p>
      </div>
    `

    await sendSMSNotification(userId, smsMessage)
    await sendEmailNotifircation(
      userId,
      smsMessage,
      type === "schedule"
        ? "Appointment Confirmation"
        : type === "cancel"
          ? "Appointment Cancellation"
          : "Appointment Completed",
    )

    revalidatePath("/admin")
    return parseStringify(updatedAppointment)
  } catch (error) {
    console.error("An error occurred while updating an appointment:", error)
  }
}

// GET APPOINTMENT
export const getAppointment = async (appointmentId: string) => {
  try {
    const appointment = await databases.getDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId
    );

    return parseStringify(appointment);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the existing patient:",
      error
    );
  }
};
