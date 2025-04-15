import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "vinaypandey.hbs@gmail.com",
        pass: "lpmixbmnthiyetqq", // Consider using environment variables in production
    },
});

export async function contactformsend({ name, email, phone, company, message }) {
    try {
        const info = await transporter.sendMail({
            from: '"Beveromatic" <vinaypandey.hbs@gmail.com>',
            to: "mks957678@gmail.com",
            subject: "New Enquiry",
            html: `
         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #4b2514; padding: 20px; color: white; text-align: center;">
        <h1 style="margin: 0;">New Enquiry</h1>
        <p style="margin: 5px 0 0;">You have received a new contact form submission.</p>
      </div>
      <div style="padding: 20px; background-color: #fafafa;">
        <p style="font-size: 16px;"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
        <p style="font-size: 16px;"><strong>Phone:</strong> ${phone}</p>
        <p style="font-size: 16px;"><strong>Company:</strong> ${company}</p>
        <p style="font-size: 16px;"><strong>Message:</strong><br>${message}</p>
      </div>
      <div style="background-color: #eeeeee; padding: 15px; text-align: center; font-size: 14px; color: #666;">
        <p style="margin: 0;">This message was sent from the Beveromatic website contact form.</p>
      </div>
    </div>
      `,
        });

        console.log("Email sent:", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

// home contact form

export async function homecontactsend({ name, email, message }) {
  try {
      const info = await transporter.sendMail({
          from: '"Beveromatic" <vinaypandey.hbs@gmail.com>',
          to: "mks957678@gmail.com",
          subject: "New Enquiry",
          html: `
       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
    <div style="background-color: #4b2514; padding: 20px; color: white; text-align: center;">
      <h1 style="margin: 0;">New Enquiry</h1>
      <p style="margin: 5px 0 0;">You have received a new contact form submission.</p>
    </div>
    <div style="padding: 20px; background-color: #fafafa;">
      <p style="font-size: 16px;"><strong>Name:</strong> ${name}</p>
      <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
      <p style="font-size: 16px;"><strong>Message:</strong><br>${message}</p>
    </div>
    <div style="background-color: #eeeeee; padding: 15px; text-align: center; font-size: 14px; color: #666;">
      <p style="margin: 0;">This message was sent from the Beveromatic website contact form.</p>
    </div>
  </div>
    `,
      });

      console.log("Email sent:", info.messageId);
  } catch (error) {
      console.error("Error sending email:", error);
  }
}
