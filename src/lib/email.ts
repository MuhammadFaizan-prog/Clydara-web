import emailjs from "@emailjs/browser";

export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  service: string;
};

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendContactEmail = async (payload: ContactFormPayload) => {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS environment variables are not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY."
    );
  }

  return emailjs.send(serviceId, templateId, payload, {
    publicKey,
  });
};

