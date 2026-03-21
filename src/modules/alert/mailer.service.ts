import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
}

interface SendGridPersonalization {
  to: Array<{ email: string }>;
}

interface SendGridContent {
  type: string;
  value: string;
}

interface SendGridFrom {
  email: string;
  name: string;
}

interface SendGridPayload {
  personalizations: SendGridPersonalization[];
  from: SendGridFrom;
  subject: string;
  content: SendGridContent[];
}

@Injectable()
export class MailerService {
  private readonly logger = new Logger(MailerService.name);

  constructor(
    private readonly config: ConfigService,
    private readonly http: HttpService,
  ) {}

  async send(options: SendEmailOptions): Promise<void> {
    const apiKey = this.config.getOrThrow<string>('SENDGRID_API_KEY');
    const fromEmail = this.config.get<string>(
      'FROM_EMAIL',
      'alerts@stocksense.app',
    );

    const payload: SendGridPayload = {
      personalizations: [{ to: [{ email: options.to }] }],
      from: { email: fromEmail, name: 'StockSense' },
      subject: options.subject,
      content: [{ type: 'text/html', value: options.html }],
    };

    try {
      await firstValueFrom(
        this.http.post('https://api.sendgrid.com/v3/mail/send', payload, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }),
      );
    } catch (err: unknown) {
      this.logger.error(`Failed to send email to ${options.to}`, err);
    }
  }
}
