<?php
// MetricWave Contact Form Handler
// Sends form submissions to mikheil@metricwave.net

// Set headers for JSON response
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get form data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['firstName', 'lastName', 'email', 'message'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Please fill in all required fields']);
        exit;
    }
}

// Sanitize inputs
$firstName = htmlspecialchars(trim($data['firstName']));
$lastName = htmlspecialchars(trim($data['lastName']));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(trim($data['phone'] ?? ''));
$company = htmlspecialchars(trim($data['company'] ?? ''));
$companySize = htmlspecialchars(trim($data['companySize'] ?? 'Not specified'));
$service = htmlspecialchars(trim($data['service'] ?? 'Not specified'));
$budget = htmlspecialchars(trim($data['budget'] ?? 'Not specified'));
$timeline = htmlspecialchars(trim($data['timeline'] ?? 'Not specified'));
$message = htmlspecialchars(trim($data['message']));
$newsletter = isset($data['newsletter']) && $data['newsletter'] ? 'Yes' : 'No';

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Email configuration
$to = 'mikheil@metricwave.net';
$subject = 'New Contact Form Submission - MetricWave';

// Build email body
$email_body = "
New Contact Form Submission from MetricWave Website
=====================================================

CONTACT INFORMATION:
-------------------
Name: {$firstName} {$lastName}
Email: {$email}
Phone: " . ($phone ?: 'Not provided') . "
Company: " . ($company ?: 'Not provided') . "

PROJECT DETAILS:
--------------
Company Size: {$companySize}
Service Interested In: {$service}
Budget Range: {$budget}
Timeline: {$timeline}

MESSAGE:
--------
{$message}

ADDITIONAL:
----------
Newsletter Subscription: {$newsletter}

---
This message was sent from the MetricWave contact form.
Submission time: " . date('Y-m-d H:i:s') . " UTC
IP Address: " . $_SERVER['REMOTE_ADDR'] . "
";

// Email headers
$headers = [
    'From: MetricWave Website <noreply@metricwave.net>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8'
];

// Send email
$mail_sent = mail($to, $subject, $email_body, implode("\r\n", $headers));

if ($mail_sent) {
    // Success response
    echo json_encode([
        'success' => true,
        'message' => 'Thank you for your message! We\'ll get back to you within 24 hours.'
    ]);

    // Optional: Send confirmation email to user
    $user_subject = 'Thank you for contacting MetricWave';
    $user_body = "
Hello {$firstName},

Thank you for reaching out to MetricWave! We've received your message and will get back to you within 24 business hours.

Here's a summary of what you submitted:
---------------------------------------
Service: {$service}
Timeline: {$timeline}
Budget: {$budget}

Your Message:
{$message}

If you have any urgent questions, feel free to contact us directly at:
Phone: +32 (472) 440551
Email: mikheil@metricwave.net

Best regards,
The MetricWave Team

---
This is an automated confirmation email.
";

    $user_headers = [
        'From: MetricWave <mikheil@metricwave.net>',
        'Reply-To: mikheil@metricwave.net',
        'X-Mailer: PHP/' . phpversion(),
        'Content-Type: text/plain; charset=UTF-8'
    ];

    mail($email, $user_subject, $user_body, implode("\r\n", $user_headers));

} else {
    // Error response
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send message. Please try again or email us directly at mikheil@metricwave.net'
    ]);
}
?>
