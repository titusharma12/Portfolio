import transporter from "../config/mail.js";
import whatsappClient from "../config/whatsapp.js";

export const sendEmailAndWhatsApp = async (req, res) => {
  const { name, email, message ,phone} = req.body;

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
     subject: `New Contact Form Submission – ${name}`,
      html: `
        <h3>New Contact</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
        <p><b>Phone:</b> ${phone}</p>
      `,
    });

    await whatsappClient.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM,
      to: process.env.WHATSAPP_TO,
      body: `📩 New Contact\n👤 ${name}\n📧 ${email}\n💬 ${message}\n📞 ${phone}`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};
