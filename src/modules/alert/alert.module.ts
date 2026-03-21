import { Module } from '@nestjs/common';
import { AlertService } from './alert.service';
import { MailerService } from './mailer.service';
import { AlertCronService } from './alert-cron.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [AlertService, MailerService, AlertCronService],
  exports: [AlertService],
})
export class AlertModule {}
