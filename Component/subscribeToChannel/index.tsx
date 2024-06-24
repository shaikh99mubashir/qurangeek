import Pusher from 'pusher-js/react-native';

// Initialize Pusher only once
const pusher = new Pusher('fe0719382f9cae62f3f7', {
  cluster: 'ap2',
  // encrypted: true, // Ensure encrypted is set to true for secure connections
});

const subscribeToChannel = ({channelName, eventName, callback}:any) => {
  const channel = pusher.subscribe(channelName);
  channel.bind(eventName, callback);
  
  return () => {
    channel.unbind_all();
    pusher.unsubscribe(channelName);
  };
};

export default subscribeToChannel;
