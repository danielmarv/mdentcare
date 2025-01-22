import imag from "../../public/images/do.jpg"
import imag1 from "../../public/images/doc.avif"
import imag2 from "../../public/images/doct.jpg"

export const slides = [
  {
    image: imag,
    title: "Holding you through the crucial times",
    description: "We are a centre for patients, we are always with you through the most crucial times of your health",
  },
  {
    image: imag1,
    title: "Holding you through the crucial times",
    description: "We are a centre for patients, we are always with you through the most crucial times of your health",
  },
  {
    image: imag2,
    title: "Holding you through the crucial times",
    description: "We are a centre for patients, we are always with you through the most crucial times of your health",
  },
]

export const stats = [
  {
    icon: () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 8.71429V20H5V8.71429M21 5H3L12 2L21 5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: 25,
    suffix: "+",
    label: "Patients Beds",
  },
  {
    icon: () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21M9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7C13 9.20914 11.2091 11 9 11ZM23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7C19.0078 8.82201 17.7699 10.4168 16 10.87"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: 10000,
    suffix: "+",
    label: "Dialysis",
  },
  {
    icon: () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.5 13.5L21 12M19.5 10.5L21 12M21 12H3M12 15.5V14.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 19H15.5M10.5 19V22M13.5 19V22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: 100,
    suffix: "+",
    label: "Doctors & Nurses",
  },
  {
    icon: () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    value: 12,
    suffix: "+",
    label: "Years of Experience",
  },
]

