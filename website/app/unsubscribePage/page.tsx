"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
// import 

const UnsubscribePage = () => {
  const searchParams = useSearchParams(); // Replaces useRouter
  const router = useRouter(); // For redirection
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const email = searchParams.get('email'); // Extracts 'email' from the URL query string
    if (email) {
      const decodedEmail = decodeURIComponent(email);
      console.log("Decoded email:", decodedEmail);

      setEmail(decodedEmail);
      unsubscribeUser(decodedEmail);
    }
  }, [searchParams]);

  const unsubscribeUser = async (decodedEmail: string) => {
    try {
      const response = await fetch('/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: decodedEmail }), // Send 'email' key in the body
      });

//       const data = await response.json();

      if (response.ok) {
        setMessage('You have successfully unsubscribed.');
        setTimeout(() => {
                router.push('/'); // Redirect to the home page after 3 seconds
              }, 3000); // Wait 3 seconds before redirecting
      } else {
        setMessage('An error occurred while unsubscribing.');
      }
    } catch (error) {
      console.error('Error unsubscribing:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>{message && <p>You Have Unsubscribed from Our NewsLetter You'll be Redirecting you to the home page...</p>}</h1>
    </div>
  );
};

export default UnsubscribePage;