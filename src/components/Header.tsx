import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ArrowLeft, FilterIcon, SearchIcon, XIcon} from 'lucide-react-native';
import {Colors} from '../theme/Colors';

const Header = ({onSearchChange}: {onSearchChange: (val: string) => void}) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity>
          <ArrowLeft color={Colors.darkGray} size={24} />
        </TouchableOpacity>
        {!showInput && <Text style={styles.headText}>🧑🏻‍🎓 Student List</Text>}
      </View>
      <View style={styles.content}>
        <View>
          {showInput && (
            <TextInput
              onChangeText={text => onSearchChange(text)}
              style={styles.textInput}
              placeholder="Search"
            />
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            setShowInput(!showInput);
            if (showInput) {
              onSearchChange('');
            }
          }}>
          {!showInput && <SearchIcon color={Colors.darkGray} size={24} />}
          {showInput && <XIcon color={Colors.darkGray} size={24} />}
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
    height: 30,
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
  textInput: {
    width: 150,
    borderRadius: 10,
    fontSize: 14,
    padding: 5,
    fontFamily: 'AvenirNextCyr-Regular',
    backgroundColor: Colors.borderColor,
  },
});
