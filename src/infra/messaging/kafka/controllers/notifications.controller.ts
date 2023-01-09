import { SendNotification } from '@application/use-cases/send-notification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SendNotificationPayload } from '../dtos/create-notification-body';

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(@Payload() payload: SendNotificationPayload) {
    const { content, category, recipientId } = payload;

    await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });
  }
}
