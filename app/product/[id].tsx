import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';

const item = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  useEffect(() => {
    console.log('id', id);
  }, [id]);
  return (
    <View>
      <Text>item</Text>
    </View>
  );
};

export default item;
