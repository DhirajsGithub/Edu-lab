import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import BriefInfoCard from './BriefInfoCard';

const StudentsList = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{gap: 20, paddingBottom: 100, marginTop: 20}}>
      <BriefInfoCard />
      <BriefInfoCard />
      <BriefInfoCard />
      <BriefInfoCard />
      <BriefInfoCard />
      <BriefInfoCard />
      <BriefInfoCard />
      <BriefInfoCard />
      <BriefInfoCard />
      <BriefInfoCard />
      <BriefInfoCard />
      <BriefInfoCard />
      <BriefInfoCard />
      <BriefInfoCard />
    </ScrollView>
  );
};

export default StudentsList;

const styles = StyleSheet.create({
  container: {},
});
