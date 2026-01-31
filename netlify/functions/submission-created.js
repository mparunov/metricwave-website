// Netlify Function: Auto-reply to form submissions
// Triggered automatically when a form is submitted

const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only run on form submissions
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const payload = JSON.parse(event.body);
    const { payload: formData } = payload;

    // Extract form details
    const formName = formData.form_name;
    const email = formData.data.email;
    const firstName = formData.data.firstName || formData.data.name || '';

    // Skip if no email provided
    if (!email) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'No email to send to' })
      };
    }

    // Determine email content based on form type
    let subject, htmlContent, textContent;

    if (formName === 'contact') {
      subject = 'Thank You for Contacting MetricWave';
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
            .teal { color: #14B8A6; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
            .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 14px; color: #6b7280; border-radius: 0 0 8px 8px; }
            .button { display: inline-block; background: #14B8A6; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 600; margin: 20px 0; }
            h2 { color: #1a1a1a; margin-top: 0; }
            .info-box { background: #f0fdfa; border-left: 4px solid #14B8A6; padding: 15px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Metric<span class="teal">Wave</span></div>
              <p style="margin: 0;">Data-Driven Decision Making</p>
            </div>
            <div class="content">
              <h2>Thank You for Reaching Out!</h2>
              <p>Hi ${firstName || 'there'},</p>
              <p>We have successfully received your inquiry and want to thank you for considering MetricWave for your data analytics needs.</p>

              <div class="info-box">
                <strong>What happens next?</strong>
                <ul style="margin: 10px 0; padding-left: 20px;">
                  <li>Our team will review your message carefully</li>
                  <li>You'll receive a personalized response within 24 hours</li>
                  <li>We'll schedule a consultation at your convenience</li>
                </ul>
              </div>

              <p>In the meantime, feel free to explore our resources:</p>
              <ul>
                <li><a href="https://metricwave.net/services.html" style="color: #14B8A6;">Our Services</a> - Discover how we can help</li>
                <li><a href="https://metricwave.net/blog.html" style="color: #14B8A6;">Blog</a> - Data analytics insights and tips</li>
                <li><a href="https://metricwave.net/industries.html" style="color: #14B8A6;">Industries</a> - See our industry expertise</li>
              </ul>

              <p><strong>Questions?</strong> You can reach us directly at:</p>
              <p style="margin-left: 20px;">
                📧 <a href="mailto:mikheil@metricwave.net" style="color: #14B8A6;">mikheil@metricwave.net</a><br>
                📞 +32 (472) 440551
              </p>

              <p>We're excited to help you transform your data into actionable insights!</p>

              <p>Best regards,<br>
              <strong>The MetricWave Team</strong></p>
            </div>
            <div class="footer">
              <p>MetricWave - Thrive Performance Coaching<br>
              Brussels, Belgium<br>
              <a href="https://metricwave.net" style="color: #14B8A6;">metricwave.net</a></p>
              <p style="font-size: 12px; color: #9ca3af; margin-top: 15px;">
                This email was sent because you submitted a contact form at metricwave.net.<br>
                If you didn't make this request, please disregard this email.
              </p>
            </div>
          </div>
        </body>
        </html>
      `;
      textContent = `Hi ${firstName || 'there'},

We have successfully received your inquiry and want to thank you for considering MetricWave for your data analytics needs.

What happens next?
- Our team will review your message carefully
- You'll receive a personalized response within 24 hours
- We'll schedule a consultation at your convenience

Questions? Reach us at:
Email: mikheil@metricwave.net
Phone: +32 (472) 440551

Best regards,
The MetricWave Team

---
MetricWave - Thrive Performance Coaching
Brussels, Belgium
https://metricwave.net`;

    } else if (formName === 'newsletter') {
      subject = 'Welcome to the MetricWave Newsletter!';
      htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
            .teal { color: #14B8A6; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
            .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 14px; color: #6b7280; border-radius: 0 0 8px 8px; }
            h2 { color: #1a1a1a; margin-top: 0; }
            .highlight-box { background: linear-gradient(135deg, #14B8A6 0%, #0d9488 100%); color: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; }
            .icon { font-size: 48px; margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Metric<span class="teal">Wave</span></div>
              <p style="margin: 0;">Data-Driven Decision Making</p>
            </div>
            <div class="content">
              <div class="icon">📬</div>
              <h2>Thanks for Signing Up!</h2>
              <p>Welcome to the MetricWave newsletter community!</p>

              <div class="highlight-box">
                <h3 style="margin-top: 0;">We'll Make Sure You Don't Miss Anything Important</h3>
                <p style="margin-bottom: 0;">Get ready for data insights, analytics tips, and industry trends delivered straight to your inbox.</p>
              </div>

              <p><strong>Here's what you can expect:</strong></p>
              <ul>
                <li>📊 <strong>Data Analytics Tips</strong> - Practical insights you can use right away</li>
                <li>📈 <strong>Industry Trends</strong> - Stay ahead with the latest in data & BI</li>
                <li>💡 <strong>Case Studies</strong> - Real success stories from businesses like yours</li>
                <li>🎯 <strong>Exclusive Content</strong> - Subscriber-only resources and guides</li>
                <li>🚀 <strong>Product Updates</strong> - Be first to know about new services</li>
              </ul>

              <p><strong>Don't forget to:</strong></p>
              <ul>
                <li>Add <a href="mailto:mikheil@metricwave.net" style="color: #14B8A6;">mikheil@metricwave.net</a> to your contacts</li>
                <li>Follow us on <a href="https://www.linkedin.com/company/metricwave" style="color: #14B8A6;">LinkedIn</a> for daily insights</li>
                <li>Explore our <a href="https://metricwave.net/blog.html" style="color: #14B8A6;">blog</a> for more content</li>
              </ul>

              <p>Have questions or topics you'd like us to cover? Just reply to this email!</p>

              <p>Cheers,<br>
              <strong>The MetricWave Team</strong></p>
            </div>
            <div class="footer">
              <p>MetricWave - Thrive Performance Coaching<br>
              Brussels, Belgium<br>
              <a href="https://metricwave.net" style="color: #14B8A6;">metricwave.net</a></p>
              <p style="font-size: 12px; color: #9ca3af; margin-top: 15px;">
                You're receiving this because you signed up for our newsletter at metricwave.net.<br>
                <a href="#" style="color: #6b7280;">Unsubscribe</a> | <a href="#" style="color: #6b7280;">Manage Preferences</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `;
      textContent = `Welcome to the MetricWave Newsletter!

Thanks for signing up! We'll make sure you don't miss anything important.

Here's what you can expect:
- Data Analytics Tips - Practical insights you can use right away
- Industry Trends - Stay ahead with the latest in data & BI
- Case Studies - Real success stories from businesses like yours
- Exclusive Content - Subscriber-only resources and guides
- Product Updates - Be first to know about new services

Don't forget to:
- Add mikheil@metricwave.net to your contacts
- Follow us on LinkedIn for daily insights
- Explore our blog for more content: https://metricwave.net/blog.html

Have questions or topics you'd like us to cover? Just reply to this email!

Cheers,
The MetricWave Team

---
MetricWave - Thrive Performance Coaching
Brussels, Belgium
https://metricwave.net`;
    }

    // Note: Netlify doesn't support sending emails directly from functions without external service
    // You need to use a service like SendGrid, Mailgun, or AWS SES
    // For now, we'll return success and you'll need to configure email service

    console.log('Email would be sent to:', email);
    console.log('Subject:', subject);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Auto-reply processed (email service needs to be configured)',
        email: email,
        subject: subject
      })
    };

  } catch (error) {
    console.error('Error processing form submission:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process submission' })
    };
  }
};
