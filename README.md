"# Clydara-web" 
"# Clydara-web" 

## Environment

Create a `.env` file at the project root (or update your existing one) with the following EmailJS entries:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The contact forms on `/contact` and the homepage use these variables at runtime. Do not hardcode the actual keys in source control.