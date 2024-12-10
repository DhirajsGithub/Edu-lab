import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import {Colors} from '../theme/Colors';
import {Guardian, Student} from '../utils/types';

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

const DetailInfoCard = ({person}: {person: Student | Guardian}) => {
  console.log(person?.name)
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.avaName}>
          <Avatar width={50} height={50} uri={person?.profile_picture} />
          <Text style={styles.nameText}>{person?.name}</Text>
        </View>
      </View>

      <View style={styles.metaDetails}>
        {person?.registration_number && (
          <MetaDetail
            label="Registration Number"
            value={person?.registration_number}
          />
        )}
        {person?.age && (
          <MetaDetail label="Age" value={`${person?.age} years`} />
        )}
        {person?.class && <MetaDetail label="Classes" value={person?.class} />}
      </View>
    </View>
  );
};

export default DetailInfoCard;

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
});
