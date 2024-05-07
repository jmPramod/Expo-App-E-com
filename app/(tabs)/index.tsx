import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View>
      <Link href={'/product/1337'}>Go to the product </Link>
    </View>
  );
};

export default index;
