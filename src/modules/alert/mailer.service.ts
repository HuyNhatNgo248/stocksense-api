import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as sgMail from '@sendgrid/mail';

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class MailerService {
  private readonly logger = new Logger(MailerService.name);

  constructor(private readonly config: ConfigService) {
    const apiKey = this.config.getOrThrow<string>('SENDGRID_API_KEY');
    sgMail.setApiKey(apiKey);
  }

  async send(options: SendEmailOptions): Promise<void> {
    const fromEmail = this.config.getOrThrow<string>('SENDGRID_FROM_EMAIL');

    const payload = {
      to: [{ email: options.to }],
      from: { email: fromEmail, name: 'Stocksense' },
      subject: options.subject,
      html: options.html,
    };

    try {
      await sgMail.send(payload);
    } catch (err: unknown) {
      this.logger.error(`Failed to send email to ${options.to}`, err);
    }
  }
}
