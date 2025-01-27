import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {databases, ID} from '@/lib/appwrite'
import { appwriteconfig } from "./config"
import { Query } from "appwrite"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const CreateEmail = async (email:string) => {

        const existing = await databases.listDocuments(
                appwriteconfig.databaseId,
                appwriteconfig.news_letter_collection_id,
                [Query.equal("Email", [email])],
        )

        
        const create_email =  databases.createDocument(
                appwriteconfig.databaseId,
                appwriteconfig.news_letter_collection_id,
                ID.unique(),
                {"Email":email},
        )
        if (existing.total > 0) {
                return { success: true, };
                // throw Error("Email already exists")
                
        } else{
                create_email
                return { success: false, };
        }
        
}