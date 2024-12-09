import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../theme/Colors';
import Avatar from './Avatar';
import CustomCheckBox from './CustomCheckBox';

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

const BriefInfoCard = () => {
  const [isSelected, setIsSelected] = useState(false);
  const onValueChange = () => {
    setIsSelected(!isSelected);
  };
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.avaName}>
          <Avatar />
          <Text style={styles.nameText}>Anjali Topno</Text>
        </View>
        <View>
          <CustomCheckBox
            onValueChange={onValueChange}
            isSelected={isSelected}
          />
        </View>
      </View>
      <View style={styles.metaDetails}>
        <MetaDetail label="Registration Number" value="24ART00016" />
        <MetaDetail label="Age" value="2y 4m" />
        <MetaDetail label="Classes" value="Varun, Perk" />
      </View>
      <View style={styles.familyMembersView}>
        <Text numberOfLines={1} style={styles.label}>
          Family Members
        </Text>
        <View style={styles.familyAvatars}>
          <Avatar width={25} height={25} />
          <Avatar width={25} height={25} />
          <Avatar width={25} height={25} />
        </View>
      </View>
    </View>
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
    gap: 5,
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
    gap: 5,
    flexWrap: 'wrap',
  },
  familyMembersView: {
    gap: 5,
  },
});
