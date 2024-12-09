import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import Header from '../components/Header';
import StudentsActionHeader from '../components/StudentsActionHeader';
import StudentsList from '../components/StudentsList';
import AddButton from '../components/AddButton';
import DetailInfoModal from '../components/DetailInfoModal';

const Students = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.headers}>
          <Header />
          <StudentsActionHeader />
        </View>
        <StudentsList />
      </View>
      <AddButton />
      <DetailInfoModal />
    </SafeAreaView>
  );
};

export default Students;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 20,
  },
  headers: {
    gap: 30,
  },
});
