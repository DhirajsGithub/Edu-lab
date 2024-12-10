import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Avatar from './Avatar';
import {Colors} from '../theme/Colors';
import {Guardian, Student} from '../utils/types';

const MetaDetail = ({label, value}: {label: string; value: string}) => {
  const isMobileOrEmail = label === 'Mobile' || label === 'Email Address';

  const valueStyle = isMobileOrEmail
    ? {color: Colors.brightBlue, textDecorationLine: 'underline'}
    : {};

  return (
    <View style={styles.metaDetail}>
      <Text numberOfLines={1} style={styles.label}>
        {label}
      </Text>
      <Text style={[styles.value, valueStyle]}>
        {value}
      </Text>
    </View>
  );
};

const DetailInfoCard = ({person}: {person: Student | Guardian}) => {
  const row2 = person?.registration_number || person?.dob || person?.class;
  return (
    <View style={[[styles.container, {gap: row2 ? 20 : 10}]]}>
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
        {person?.dob && <MetaDetail label="Age" value={`${person?.dob}`} />}
        {person?.class && <MetaDetail label="Classes" value={person?.class} />}
      </View>
      <View style={styles.metaDetails}>
        {person?.mobile_number && (
          <MetaDetail label="Mobile" value={person?.mobile_number} />
        )}
        {person?.email && (
          <MetaDetail label="Email Address" value={`${person?.email}`} />
        )}
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
    maxWidth: '70%',
    gap: 5,
  },
  label: {
    fontSize: 12,
    color: Colors.subText,
    fontFamily: 'AvenirNextCyr-Regular',
  },
  value: {
    maxWidth: '100%',
    fontSize: 14,
    color: Colors.text,
    fontFamily: 'AvenirNextCyr-Medium',
  },
  metaDetails: {
    width: '100%',
    flexDirection: 'row',
    alignItems: "flex-start",
    gap: 20,
  },
});
