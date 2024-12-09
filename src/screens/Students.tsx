import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Student} from '../utils/types';
import data from '../assets/data.json';
import Header from '../components/Header';
import StudentsActionHeader from '../components/StudentsActionHeader';
import StudentsList from '../components/StudentsList';
import AddButton from '../components/AddButton';
import DetailInfoModal from '../components/DetailInfoModal';
import {Colors} from '../theme/Colors';
import debounce from '../utils/debounce';

const Students = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [students, setStudents] = useState<Student[]>(
    data.students as Student[],
  );
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(students);
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [selectAllToggle, setSelectAllToggle] = useState(false);

  const onModalClose = () => {
    setIsModalVisible(false);
    setSelectedStudent(null);
  };

  const handleStudentPress = (student: Student) => {
    setSelectedStudent(student);
    setIsModalVisible(true);
  };

  const handleFilterdStudents = (query: string) => {
    setFilteredStudents(
      students.filter(student =>
        student.name.toLowerCase().includes(query.toLowerCase()),
      ),
    );
  };

  const debouncedFilterStudents = useCallback(
    debounce(handleFilterdStudents, 500),
    [],
  );
  const onSearchChange = (text: string) => {
    debouncedFilterStudents(text);
  };

  const handleSelectStudentPress = (student: Student, selected: boolean) => {
    setSelectedStudents(prev =>
      selected ? [...prev, student] : prev.filter(s => s.id !== student.id),
    );
  };

  const handleDeletePress = () => {
    setStudents(prev =>
      prev.filter(student => !selectedStudents.some(s => s.id === student.id)),
    );
    setSelectedStudents([]);
  };

  const handleAllStudentsSelected = (isSelected: boolean) => {
    setSelectAllToggle(isSelected);
    setSelectedStudents(isSelected ? students : []);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.headers}>
          <Header onSearchChange={onSearchChange} />
          <StudentsActionHeader
            allStudentsSelected={selectedStudents.length === students.length}
            selectAllStudents={handleAllStudentsSelected}
            handleDeletePress={handleDeletePress}
            studentsLength={selectedStudents.length}
          />
        </View>
        <StudentsList
          selectAllToggle={selectAllToggle}
          handlSelectStudentPress={handleSelectStudentPress}
          students={filteredStudents}
          handleStudentPress={handleStudentPress}
          selectedStudents={selectedStudents}
        />
      </View>
      <AddButton />
      <DetailInfoModal
        selectedStudent={selectedStudent}
        onModalClose={onModalClose}
        isVisible={isModalVisible}
      />
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
