import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../theme/Colors';
import CustomCheckBox from './CustomCheckBox';
import {Trash2} from 'lucide-react-native';

const StudentsActionHeader = () => {
  const [isSelected, setSelection] = useState(false);

  const onValueChange = () => {
    setSelection(!isSelected);
  };
  return (
    <View style={styles.container}>
      <View style={styles.selected}>
        <Text style={styles.headText}>All Students</Text>
        <View style={styles.selectedView}>
          <Text style={styles.selectedText}>40</Text>
        </View>
      </View>
      <View style={styles.rightView}>
        <TouchableOpacity>
          <Text style={styles.inviteText}>Invite</Text>
        </TouchableOpacity>
        <CustomCheckBox isSelected={isSelected} onValueChange={onValueChange} />
        <TouchableOpacity>
        <Trash2 size={24} color={Colors.darkGray} />

        </TouchableOpacity>
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
  selected: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  selectedView: {
    backgroundColor: Colors.darkGray,
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedText: {
    fontSize: 14,
    color: Colors.white,
    fontFamily: 'AvenirNextCyr-Medium',
  },
  inviteText: {
    fontSize: 14,
    color: Colors.brightBlue,
    fontFamily: 'AvenirNextCyr-Demi',
  },
  rightView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
