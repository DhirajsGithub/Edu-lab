import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Avatar from './Avatar';
import CustomCheckBox from './CustomCheckBox';
import {Guardian, Student} from '../utils/types';
import {Colors} from '../theme/Colors';

const MetaDetail = ({label, value}: {label: string; value: string}) => {
  return (
    <View style={styles.metaDetail}>
      <Text numberOfLines={1} style={styles.label}>
        {label}
      </Text>
      <Text numberOfLines={1} style={styles.value}>
        {value}
      </Text>
    </View>
  );
};

const BriefInfoCard = ({
  student,
  onPress,
  handlSelectStudentPress,
  isSelected,
}: {
  student: Student;
  onPress: (student: Student) => void;
  handlSelectStudentPress: (student: Student, selected: boolean) => void;
  selectAllToggle: boolean;
  isSelected: boolean;
}) => {
  const [localIsSelected, setLocalIsSelected] = useState(isSelected);

  useEffect(() => {
    setLocalIsSelected(isSelected);
  }, [isSelected]);

  const onValueChange = (val: boolean) => {
    handlSelectStudentPress(student, val);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress(student)}
      style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.avaName}>
          <Avatar uri={student.profile_picture} />
          <Text style={styles.nameText}>{student.name}</Text>
        </View>
        <TouchableOpacity accessibilityRole="checkbox">
          <CustomCheckBox
            onValueChange={onValueChange}
            isSelected={localIsSelected}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.metaDetails}>
        <MetaDetail
          label="Registration Number"
          value={student.registration_number}
        />
        <MetaDetail label="Age" value={`${student.age} years`} />
        <MetaDetail label="Classes" value={student.class} />
      </View>

      <View style={styles.familyMembersView}>
        <Text numberOfLines={1} style={styles.label}>
          Family Members
        </Text>
        <View style={styles.familyAvatars}>
          {Object.values(student.guardians).map((guardian: Guardian) => (
            <Avatar
              key={guardian.id}
              uri={guardian.profile_picture}
              width={25}
              height={25}
            />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BriefInfoCard;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.white,
    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.05)',
    elevation: 5,
    gap: 20,
  },
  avaName: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  nameText: {
    fontSize: 16,
    fontFamily: 'AvenirNextCyr-Demi',
    color: Colors.text,
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaDetail: {
    gap: 5,
  },
  label: {
    fontSize: 12,
    color: Colors.subText,
    fontFamily: 'AvenirNextCyr-Regular',
  },
  value: {
    maxWidth: 100,
    fontSize: 14,
    color: Colors.text,
    fontFamily: 'AvenirNextCyr-Medium',
  },
  metaDetails: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  familyAvatars: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  familyAvatar: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  familyMembersView: {
    gap: 5,
  },
});
