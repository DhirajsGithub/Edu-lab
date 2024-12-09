import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import Header from '../components/Header';
import StudentsActionHeader from '../components/StudentsActionHeader';

const Students = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.headers}>
          <Header />
          <StudentsActionHeader />
        </View>

        <ScrollView></ScrollView>
      </View>
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
