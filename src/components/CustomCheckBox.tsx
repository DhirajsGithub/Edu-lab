import {StyleSheet, View} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {Colors} from '../theme/Colors';

const CustomCheckBox = ({
  isSelected,
  onValueChange,
}: {
  isSelected: boolean;
  onValueChange: () => void;
}) => {
  return (
    <View style={styles.container}>
      <CheckBox
        animationDuration={0.1}
        style={styles.checkbox}
        value={isSelected}
        onValueChange={onValueChange}
        boxType="square"
        tintColor={Colors.tintColor}
        onTintColor={Colors.white}
        onFillColor={Colors.darkGray}
        onCheckColor={Colors.white}
      />
    </View>
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
  },
  checkbox: {
    transform: [{scale: 0.75}],

    left: '12%',
    top: '10%',
  },
});
