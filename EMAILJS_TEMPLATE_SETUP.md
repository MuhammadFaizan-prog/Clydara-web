# EmailJS Template Configuration Guide

## Problem
You're receiving emails with generic text instead of the actual form data because your EmailJS template isn't using the correct variable names.

## Solution
Update your EmailJS template to use the variables listed below.

## Variables Being Sent

Your contact form sends these variables to EmailJS:

| Variable Name | Description | Example |
|--------------|-------------|---------|
| `{{from_name}}` | User's full name | "John Doe" |
| `{{from_email}}` | User's email address | "john@example.com" |
| `{{phone}}` | Phone number | "+1 234-567-8900" or "Not provided" |
| `{{company}}` | Company name | "Acme Corp" or "Not provided" |
| `{{subject}}` | Message subject | "How can we help?" |
| `{{message}}` | Message content | "I need help with..." |
| `{{service}}` | Selected service | "AI & Automation" |
| `{{submitted_at}}` | Submission timestamp | "12/9/2024, 1:49:00 AM" |

## EmailJS Template Example

Copy and paste this template into your EmailJS template editor:

```
Subject: Contact Us: {{subject}}

---

New Contact Form Submission

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Subject: {{subject}}
Service Interested In: {{service}}

Message:
{{message}}

---

Submitted at: {{submitted_at}}
```

## Step-by-Step Instructions

1. **Go to EmailJS Dashboard**
   - Navigate to https://dashboard.emailjs.com/admin
   - Go to "Email Templates" section
   - Click on your template (template_cvxf8le)

2. **Update the Template**
   - Replace the current template content with the example above
   - Make sure to use double curly braces: `{{variable_name}}`
   - Save the template

3. **Test the Form**
   - Submit a test message from your contact form
   - Check your email to verify all fields are displayed correctly

## Alternative Template (HTML Format)

If you prefer HTML formatting, use this:

```html
<h2>New Contact Form Submission</h2>

<p><strong>From:</strong> {{from_name}}<br>
<strong>Email:</strong> {{from_email}}<br>
<strong>Phone:</strong> {{phone}}<br>
<strong>Company:</strong> {{company}}</p>

<p><strong>Subject:</strong> {{subject}}<br>
<strong>Service Interested In:</strong> {{service}}</p>

<p><strong>Message:</strong><br>
{{message}}</p>

<hr>
<p><small>Submitted at: {{submitted_at}}</small></p>
```

## Important Notes

- Variable names are case-sensitive: Use `{{from_name}}` not `{{From_Name}}`
- All variables use double curly braces: `{{variable_name}}`
- Optional fields (phone, company) will show "Not provided" if left empty
- The template must match exactly the variable names listed above

## Verification

After updating your template, test by:
1. Filling out the contact form with test data
2. Submitting the form
3. Checking your email to ensure all fields are populated correctly

If you still see generic messages, double-check that:
- Variable names match exactly (case-sensitive)
- You're using double curly braces `{{}}`
- The template is saved in EmailJS dashboard


