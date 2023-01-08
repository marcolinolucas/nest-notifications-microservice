import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-id' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-id' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'example-id-two' }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example-id',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-id' }),
        expect.objectContaining({ recipientId: 'example-id' }),
      ]),
    );
  });
});
