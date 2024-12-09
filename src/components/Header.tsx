import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ArrowLeft, FilterIcon, SearchIcon} from 'lucide-react-native';
import {Colors} from '../theme/Colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity>
          <ArrowLeft color={Colors.darkGray} size={24} />
        </TouchableOpacity>
        <Text style={styles.headText}>🧑🏻‍🎓 Student List</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity>
          <SearchIcon color={Colors.darkGray} size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FilterIcon color={Colors.darkGray} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },
  headText: {
    fontSize: 18,
    color: Colors.text,
    fontFamily: 'AvenirNextCyr-Medium',
  },
});
