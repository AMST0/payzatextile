import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    const { name, email, company, phone, orderType, quantity, message } = req.body

    // Validate required fields
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email and message are required' })
    }

    try {
        const data = await resend.emails.send({
            from: 'Payza Textile <noreply@payzatextile.com>',
            to: ['info@payzatextile.com'],
            replyTo: email,
            subject: `New Inquiry from ${name} - ${company || 'Individual'}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #0A1628; border-bottom: 2px solid #C9A962; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
                        </tr>
                        ${company ? `
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Company:</strong></td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${company}</td>
                        </tr>
                        ` : ''}
                        ${phone ? `
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone}</td>
                        </tr>
                        ` : ''}
                        ${orderType ? `
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Order Type:</strong></td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${orderType}</td>
                        </tr>
                        ` : ''}
                        ${quantity ? `
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Expected Quantity:</strong></td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${quantity}</td>
                        </tr>
                        ` : ''}
                    </table>
                    
                    <h3 style="color: #0A1628; margin-top: 20px;">Message:</h3>
                    <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; line-height: 1.6;">
                        ${message.replace(/\n/g, '<br>')}
                    </p>
                    
                    <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                    <p style="color: #888; font-size: 12px;">
                        This message was sent from the Payza Textile website contact form.
                    </p>
                </div>
            `
        })

        return res.status(200).json({ success: true, data })
    } catch (error) {
        console.error('Resend error:', error)
        return res.status(500).json({ error: 'Failed to send email' })
    }
}
