import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Pusher from 'pusher-js/react-native';

const TestScreen = () => {
    useEffect(() => {
        // Initialize Pusher
        const pusher = new Pusher('fe0719382f9cae62f3f7', {
          cluster: 'ap2',
        //   encrypted: true, // Ensure encrypted is set to true for secure connections
        });
        
        
        // Subscribe to channel
        const channel = pusher.subscribe('ticket-created');
        console.log("channel",channel);
    
        // Listen to events
        channel.bind('App\\Events\\TicketCreated', function(data:any) {
          console.log('Event received:', data);
          // Handle the event data as needed
        });
    
        return () => {
          // Clean up (unsubscribe) when component unmounts
          // channel.unbind();
          // pusher.disconnect();
          channel.unbind_all();
            pusher.unsubscribe('ticket-created');
            pusher.disconnect();
        };
      }, []);
    
  return (
    <View>
      <Text>TestScreen</Text>
    </View>
  )
}

export default TestScreen