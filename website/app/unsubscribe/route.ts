import { NextRequest, NextResponse } from 'next/server';
import { databases } from '@/lib/appwrite'; // Replace with your actual Appwrite database logic
import { Query } from 'appwrite';
import { appwriteconfig } from '@/lib/config';
import { DeleteDocument } from '@/lib/utils';
import { sendDismissalEmail } from '@/lib/email';

export  async function POST(req: NextRequest,) {
        const body = await req.json();
        const { email } = body;

  if (!email) {
        return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  try {
    // Search for the user document by email
    const user = await databases.listDocuments(
         appwriteconfig.databaseId,
        appwriteconfig.news_letter_collection_id,
        [Query.equal('Email', [email])]
        );

    if (!user.documents.length) {
        return NextResponse.json({ message: 'Email not found' }, { status: 404 });
    }else{
        await sendDismissalEmail(email)
        DeleteDocument(user.documents[0].$id)
    }

    return NextResponse.json({ message: 'You have successfully unsubscribed.' });
  } catch (error) {
    console.error('Error unsubscribing user:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
  

  
}
