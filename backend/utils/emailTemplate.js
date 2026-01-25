export const contactEmailTemplate = ({ name, email, message, phone }) => `
  <h2>New Contact</h2>
  <p><b>Name:</b> ${name}</p>
  <p><b>Email:</b> ${email}</p>
  <p><b>Message:</b> ${message}</p>
  <p><b>Phone:</b> ${phone}</p>
`;
