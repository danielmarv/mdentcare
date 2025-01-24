export default async function sendEmail(Email: any) {
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: Email,
          subject: "Thank you for Subscribing to our Newsletter",
          text:  "We are Glad to Have you Become part of Our Community at MDENTCARE \n You will Continuously receive updates on our latest news and offers. \n Unsubscribe anytime",
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
      } else {
        console.log(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('An error occurred while sending the email.');
      console.error(error);
    }
  };

