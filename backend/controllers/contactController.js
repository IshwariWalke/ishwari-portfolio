import Contact from "../models/Contact.js";
import transporter from "../config/mailer.js";

export const submitContact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "All fields required" });
  }

  try {
    // Save to DB
    const contact = await Contact.create({ name, email, message });

    // 📧 Admin Notification
    await transporter.sendMail({
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    });

    // 📩 Auto Reply
    await transporter.sendMail({
      to: email,
      subject: "Thanks for contacting me!",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! I’ve received your message and will reply soon.</p>
        <br/>
        <p>— Ishwari</p>
      `,
    });

    res.status(201).json({ msg: "Message sent successfully" });

  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
};

// ADMIN VIEW
export const getMessages = async (req, res) => {
  const messages = await Contact.find().sort({ createdAt: -1 });
  res.json(messages);
};
