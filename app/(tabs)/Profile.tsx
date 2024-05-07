import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

export default function Profile() {
  const { signOut, isSignedIn } = useAuth();
  return (
    <View>
      <Link href={'/(modals)/Booking'}>Booking</Link>
      {isSignedIn && <Button title="Logout" onPress={() => signOut()}></Button>}
      {!isSignedIn && <Link href={'/(modals)/login'}>login</Link>}
    </View>
  );
}
