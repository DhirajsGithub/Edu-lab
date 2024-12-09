import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {Colors} from '../theme/Colors';
import CheckBox from '@react-native-community/checkbox';

const StudentsActionHeader = () => {
    const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headText}>All Students</Text>
        {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        /> */}
      </View>
    </View>
  );
};

export default StudentsActionHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headText: {
    fontSize: 20,
    fontFamily: 'AvenirNextCyr-Demi',
    color: Colors.text,
  },
});
