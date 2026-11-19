
import emailjs from "@emailjs/browser";

export const sendContactEmail = async (form) => {
  return emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    },
    {
      publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
    }
  );
};
