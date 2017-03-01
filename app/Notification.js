import PushNotification from 'react-native-push-notification';

PushNotification.configure({onNotification: notification => {
  // Perform actions based on notification
  notification.received = true;
}});

const Notification = notification => {
  PushNotification.localNotification(notification);
};

export default Notification;
