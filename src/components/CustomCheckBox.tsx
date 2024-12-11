import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const CustomCheckBox = ({
  isSelected,
  onValueChange,
}: {
  isSelected: boolean;
  onValueChange: (val: boolean) => void;
}) => {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        isChecked={isSelected}
        disableText
        fillColor={Colors.darkGray}
        innerIconStyle={{
          borderRadius: 5,
          borderWidth: 2,
          borderColor: isSelected ? Colors.darkGray : Colors.tintColor,
        }}
        size={20}
        useBuiltInState={false}
        iconStyle={{borderRadius: 5, borderWidth: 2}}
        onPress={(checked: boolean) => {
          console.log(checked);
          onValueChange(!isSelected);
        }}
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
