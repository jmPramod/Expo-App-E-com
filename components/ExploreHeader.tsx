import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { Octicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import Colors from '../constants/Colors';

const category = [
  { name: 'electronic', icon: 'Tiny homes' },
  { name: 'Popular', icon: 'Tiny homes' },
  { name: 'Cloths', icon: 'Tiny homes' },
  { name: 'Food', icon: 'Tiny homes' },
];
export default function ExploreHeader() {
  const itemRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const selectCategory = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.actionRows}>
          <Link href={'/(modals)/Booking'} asChild>
            <TouchableOpacity style={styles.searchButton}>
              <Octicons name="search" size={24} color="black" />
              <View>
                <Text>Search anything?</Text>
              </View>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.filterBtn}>
            <Octicons name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{
            alignItems: 'center',
            gap: 20,
            paddingHorizontal: 16,
          }}
        >
          {category.map((val, ind) => (
            <TouchableOpacity
              onPress={() => selectCategory(ind)}
              key={ind}
              ref={(el) => (itemRef.current[ind] = el)}
              style={
                activeIndex === ind
                  ? styles.categoryBtnActive
                  : styles.categoryBtn
              }
            >
              <Octicons
                name="search"
                size={24}
                color={activeIndex === ind ? 'red' : 'black'}
              />
              <Text style={{ color: activeIndex === ind ? 'red' : 'black' }}>
                {val.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // flex: 1,
    height: 150,
  },
  actionRows: {
    flexDirection: 'row',
    marginTop: 48,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    gap: 10,
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 24,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderColor: '#c2c2c2',
    borderWidth: StyleSheet.hairlineWidth,
    elevation: 2,
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOpacity: 0.12,
    borderRadius: 30,
    shadowRadius: 8,
    shadowOffset: { width: 1, height: 1 },
    flex: 1,
    padding: 10,
  },
  categoryBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    paddingBottom: 8,
  },
  categoryBtnActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
});
