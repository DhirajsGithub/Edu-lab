import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Colors} from '../theme/Colors';

type CustomDropDownProps = {
  labelText: string;
  data: {label: string; value: string}[];
  value: string;
  onChange: (value: string) => void;
};

const CustomDropDown: React.FC<CustomDropDownProps> = ({
  labelText,
  data,
  value,
  onChange,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{labelText}</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        dropdownPosition="top"
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => onChange(item.value)}
      />
    </View>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingHorizontal: 5,
  },
  dropdown: {
    padding: 18,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'rgba(196, 196, 196, 0.50)',
    color: Colors.text,
    fontFamily: 'AvenirNextCyr-Regular',
  },
  label: {
    fontSize: 16,
    fontFamily: 'AvenirNextCyr-Medium',
    color: Colors.text,
    marginBottom: 10,
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: 'AvenirNextCyr-Regular',
    color: Colors.subText,
  },
  selectedTextStyle: {
    fontFamily: 'AvenirNextCyr-Regular',
    color: Colors.text,
    fontSize: 14,
  },
  inputSearchStyle: {
    fontSize: 14,
  },
});
