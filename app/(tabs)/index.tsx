import { View, Text } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import ExploreHeader from './../../components/ExploreHeader';
import Listing from './../../components/Listing';

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Link href={'/product/1337'}>Go to the product </Link> */}
      <Stack.Screen
        options={{ header: () => <ExploreHeader /> }}
      ></Stack.Screen>
      {/* <Listing /> */}
    </View>
  );
};

export default index;
