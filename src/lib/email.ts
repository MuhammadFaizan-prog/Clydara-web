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

// Get EmailJS configuration from environment variables
const getEmailJSConfig = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS environment variables are not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file."
    );
  }

  return { serviceId, templateId, publicKey };
};

// Note: EmailJS v4+ doesn't require explicit initialization
// The publicKey is passed directly to the send method

/**
 * Validates the contact form payload
 */
const validatePayload = (payload: ContactFormPayload): void => {
  if (!payload.name || payload.name.trim().length === 0) {
    throw new Error("Name is required");
  }
  if (!payload.email || payload.email.trim().length === 0) {
    throw new Error("Email is required");
  }
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(payload.email)) {
    throw new Error("Please enter a valid email address");
  }
  if (!payload.subject || payload.subject.trim().length === 0) {
    throw new Error("Subject is required");
  }
  if (!payload.message || payload.message.trim().length === 0) {
    throw new Error("Message is required");
  }
};

/**
 * Formats the payload for EmailJS template
 * EmailJS expects template parameters as key-value pairs
 * 
 * Sends both old variable names (for current template compatibility) 
 * and new variable names (for enhanced template)
 */
const formatPayloadForEmailJS = (payload: ContactFormPayload): Record<string, string> => {
  const timestamp = new Date().toLocaleString();
  
  return {
    // New variable names (recommended for template update)
    from_name: payload.name.trim(),
    from_email: payload.email.trim(),
    phone: payload.phone?.trim() || "Not provided",
    company: payload.company?.trim() || "Not provided",
    subject: payload.subject.trim(),
    message: payload.message.trim(),
    service: payload.service || "Not specified",
    submitted_at: timestamp,
    
    // Old variable names (for current template compatibility)
    name: payload.name.trim(),        // Maps to {{name}} in current template
    email: payload.email.trim(),      // Maps to {{email}} in current template
    title: payload.subject.trim(),    // Maps to {{title}} in current template
    time: timestamp,                  // Maps to {{time}} in current template
    // message is already included above
  };
};

/**
 * Sends a contact form email using EmailJS
 * @param payload - The contact form data
 * @returns Promise that resolves when email is sent successfully
 * @throws Error if configuration is missing, validation fails, or sending fails
 */
export const sendContactEmail = async (payload: ContactFormPayload): Promise<{ status: number; text: string }> => {
  try {
    // Validate payload
    validatePayload(payload);

    // Get configuration
    const { serviceId, templateId, publicKey } = getEmailJSConfig();

    // Format payload for EmailJS template
    const templateParams = formatPayloadForEmailJS(payload);

    // Send email (EmailJS v4+ passes publicKey in options)
    const response = await emailjs.send(serviceId, templateId, templateParams, {
      publicKey,
    });

    // Log success (optional, can be removed in production)
    console.log("Email sent successfully:", response);

    return response;
  } catch (error) {
    // Enhanced error handling
    if (error instanceof Error) {
      // Re-throw validation and configuration errors as-is
      if (error.message.includes("environment variables") || error.message.includes("required")) {
        throw error;
      }
      // EmailJS specific errors
      if (error.message.includes("EmailJS")) {
        throw new Error("Failed to send email. Please check your EmailJS configuration.");
      }
      // Network or other errors
      throw new Error(`Failed to send email: ${error.message}`);
    }
    // Unknown error type
    throw new Error("An unexpected error occurred while sending the email. Please try again later.");
  }
};

