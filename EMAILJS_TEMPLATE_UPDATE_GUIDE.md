# EmailJS Template Update Guide

## Current Situation

**Your EmailJS Template Currently Uses:**
- `{{title}}` - for subject
- `{{name}}` - for sender name
- `{{email}}` - for reply-to email
- `{{time}}` - for timestamp
- `{{message}}` - for message content

**Your Code Currently Sends:**
- `from_name` - sender's name
- `from_email` - sender's email
- `subject` - message subject
- `message` - message content
- `phone` - phone number
- `company` - company name
- `service` - selected service
- `submitted_at` - timestamp

## Solution: Two Options

### Option 1: Update Code to Match Template (Quick Fix)
Update the code to use the variable names your template already expects.

### Option 2: Update Template to Show All Data (Recommended)
Update your EmailJS template to display all form fields properly.

---

## Option 1: Quick Fix - Update Code

I'll update your code to match your current template variables, then you can enhance the template later.

**Changes needed:**
- `from_name` → `name`
- `from_email` → `email`
- `subject` → `title`
- `submitted_at` → `time`
- Keep: `message`, `phone`, `company`, `service` (for future template enhancement)

---

## Option 2: Recommended - Update Template

Update your EmailJS template to show all the form data.

### Step 1: Update Subject Line

**Current:**
```
Contact Us: {{title}}
```

**Change to:**
```
Contact Us: {{subject}}
```

### Step 2: Update From Name

**Current:**
```
{{name}}
```

**Change to:**
```
    {{from_name}}
```

### Step 3: Update Reply To

**Current:**
```
{{email}}
```

**Change to:**
```
{{from_email}}
```

### Step 4: Update Email Body Content

**Current template shows:**
```
A message by {{name}} has been received. Kindly respond at your earliest convenience.

[Message display with {{name}}, {{time}}, {{message}}]
```

**Option A: Plain Text Template**

```
New Contact Form Submission

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUBJECT: {{subject}}

SERVICE INTERESTED IN: {{service}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitted at: {{submitted_at}}
```

**Option B: HTML Template (Recommended - Better Formatting)**

Copy the HTML code from `EMAILJS_HTML_TEMPLATE.html` file, or use this HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
  
  <div style="background-color: #ffffff; border: 2px solid #000000; padding: 30px; box-shadow: 4px 4px 0px #000000;">
    
    <!-- Header -->
    <div style="background-color: #1e40af; color: #ffffff; padding: 20px; margin: -30px -30px 30px -30px; border-bottom: 4px solid #000000;">
      <h1 style="margin: 0; font-size: 24px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">
        New Contact Form Submission
      </h1>
    </div>
    
    <!-- From Section -->
    <div style="background-color: #f9fafb; border: 2px solid #000000; padding: 20px; margin-bottom: 20px;">
      <h2 style="margin: 0 0 15px 0; font-size: 18px; font-weight: bold; text-transform: uppercase; color: #1e40af; border-bottom: 2px solid #000000; padding-bottom: 10px;">
        Contact Information
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #000000;">Name:</td>
          <td style="padding: 8px 0; color: #333;">{{from_name}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #000000;">Email:</td>
          <td style="padding: 8px 0;">
            <a href="mailto:{{from_email}}" style="color: #1e40af; text-decoration: none;">{{from_email}}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #000000;">Phone:</td>
          <td style="padding: 8px 0; color: #333;">{{phone}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #000000;">Company:</td>
          <td style="padding: 8px 0; color: #333;">{{company}}</td>
        </tr>
      </table>
    </div>
    
    <!-- Subject & Service Section -->
    <div style="background-color: #ffffff; border: 2px solid #000000; padding: 20px; margin-bottom: 20px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #000000;">Subject:</td>
          <td style="padding: 8px 0; color: #333; font-weight: bold;">{{subject}}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold; color: #000000;">Service:</td>
          <td style="padding: 8px 0; color: #333;">
            <span style="background-color: #fbbf24; color: #000000; padding: 4px 12px; border: 2px solid #000000; font-weight: bold; display: inline-block;">
              {{service}}
            </span>
          </td>
        </tr>
      </table>
    </div>
    
    <!-- Message Section -->
    <div style="background-color: #f9fafb; border: 2px solid #000000; padding: 20px; margin-bottom: 20px;">
      <h2 style="margin: 0 0 15px 0; font-size: 18px; font-weight: bold; text-transform: uppercase; color: #1e40af; border-bottom: 2px solid #000000; padding-bottom: 10px;">
        Message
      </h2>
      <div style="background-color: #ffffff; border: 1px solid #000000; padding: 15px; min-height: 100px; white-space: pre-wrap; color: #333;">
        {{message}}
      </div>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #000000; color: #ffffff; padding: 15px; margin: 20px -30px -30px -30px; text-align: center; border-top: 4px solid #1e40af;">
      <p style="margin: 0; font-size: 12px; color: #9ca3af;">
        Submitted at: <strong style="color: #ffffff;">{{submitted_at}}</strong>
      </p>
      <p style="margin: 10px 0 0 0; font-size: 11px; color: #6b7280;">
        Email sent via EmailJS.com
      </p>
    </div>
    
  </div>
  
</body>
</html>
```

**Note:** EmailJS automatically detects HTML. Just paste the HTML code into the content editor and it will render as a formatted email.

### Step 5: Update Template Settings

In the right sidebar:

1. **From Name:** Change from `{{name}}` to `{{from_name}}`
2. **Reply To:** Change from `{{email}}` to `{{from_email}}`
3. **To Email:** Keep as `clydara1@gmail.com`

---

## Step-by-Step Instructions for EmailJS Dashboard

1. **Go to EmailJS Dashboard**
   - Navigate to: https://dashboard.emailjs.com/admin/templates/6j2gn73
   - Or go to Email Templates → Your template

2. **Update Subject Field**
   - Find "Subject *" field
   - Change: `Contact Us: {{title}}`
   - To: `Contact Us: {{subject}}`

3. **Update Email Body**
   - Click "Edit Content" button
   - Delete the current content
   - **For HTML (Recommended):** Paste the HTML code from `EMAILJS_HTML_TEMPLATE.html` file
   - **For Plain Text:** Paste the text template (from Step 2 above)
   - EmailJS will automatically detect HTML format
   - Save

4. **Update Right Sidebar Settings**
   - **From Name:** Change `{{name}}` to `{{from_name}}`
   - **Reply To:** Change `{{email}}` to `{{from_email}}`
   - **From Email:** Keep as default
   - **To Email:** Keep as `clydara1@gmail.com`

5. **Save Template**
   - Click "Save" button

6. **Test**
   - Submit a test form from your website
   - Check your email to verify all fields are displayed

---

## Visual Guide for Template Update

### Current Template Structure:
```
Subject: Contact Us: {{title}}

Body:
A message by {{name}} has been received...
[Shows: {{name}}, {{time}}, {{message}}]

Settings:
From Name: {{name}}
Reply To: {{email}}
```

### Updated Template Structure:
```
Subject: Contact Us: {{subject}}

Body:
New Contact Form Submission
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FROM:
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUBJECT: {{subject}}
SERVICE INTERESTED IN: {{service}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MESSAGE:
{{message}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted at: {{submitted_at}}

Settings:
From Name: {{from_name}}
Reply To: {{from_email}}
```

---

## Important Notes

✅ **Variable names are case-sensitive** - Use exact names as shown
✅ **Use double curly braces** - `{{variable_name}}` not `{variable_name}`
✅ **Save after each change** - Don't forget to save the template
✅ **Test after updating** - Submit a test form to verify

---

## What You'll See After Update

Your emails will now show:
- ✅ Full name of the sender
- ✅ Email address
- ✅ Phone number (or "Not provided")
- ✅ Company name (or "Not provided")
- ✅ Subject line
- ✅ Selected service
- ✅ Complete message
- ✅ Submission timestamp

All form fields will be properly displayed in your email!

