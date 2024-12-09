import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Plus} from 'lucide-react-native';
import {Colors} from '../theme/Colors';

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Plus color={Colors.white} size={40} />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%',
    padding: 10,
    backgroundColor: Colors.darkGray,
    zIndex: 99,
    position: 'absolute',
    bottom: '5%',
    right: '5%',
  },
});
