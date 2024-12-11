import React from 'react';
import { StyleSheet, TextInput, View, TextInputProps } from 'react-native';
import { Colors } from '../theme/Colors';

type InputFieldProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
} & TextInputProps;

const InputField: React.FC<InputFieldProps> = ({ placeholder, value, onChangeText, ...rest }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={Colors.subText}
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    
  },
  input: {
    padding: 18,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'rgba(196, 196, 196, 0.50)',
    color: Colors.text,
    fontFamily: 'AvenirNextCyr-Regular',
    fontSize: 14,
  },
});
