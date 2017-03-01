import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onNotification: function() {
    // console.log( 'NOTIFICATION:', notification );
  }
});

const Notification = {
  notify: (notification) => {
    PushNotification.localNotification(notification);
  }
};

export default Notification;
