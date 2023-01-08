import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'example-id',
      category: 'social',
      content: new Content('You receive a new friend request'),
    });

    expect(notification).toBeTruthy();
  });
});
