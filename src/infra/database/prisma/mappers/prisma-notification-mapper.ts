import { Notification as PrismaNotification } from '@prisma/client';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      category: notification.category,
      content: notification.content.value,
      createdAt: notification.createdAt,
      readAt: notification.readAt,
    };
  }

  static toDomain(notification: PrismaNotification) {
    return new Notification(
      {
        recipientId: notification.recipientId,
        category: notification.category,
        content: new Content(notification.content),
        createdAt: notification.createdAt,
        readAt: notification.readAt,
        canceledAt: notification.canceledAt,
      },
      notification.id,
    );
  }
}
