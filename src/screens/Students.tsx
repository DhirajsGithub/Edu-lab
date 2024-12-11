import React, {useCallback, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {Student} from '../utils/types';
import data from '../assets/data.json';
import Header from '../components/Header';
import StudentsActionHeader from '../components/StudentsActionHeader';
import StudentsList from '../components/StudentsList';
import AddButton from '../components/AddButton';
import DetailInfoModal from '../components/DetailInfoModal';
import {Colors} from '../theme/Colors';
import debounce from '../utils/debounce';
import EditAddModal from '../components/EditAddModal';
import FilterByClassModal from '../components/FilterByClassModal';

const Students = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [students, setStudents] = useState<Student[]>(
    data.students as Student[],
  );
  const [filteredStudents, setFilteredStudents] = useState<Student[]>(students);
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [selectAllToggle, setSelectAllToggle] = useState(false);
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const [editStudentInfo, setEditStudentInfo] = useState<Student | null>(null);
  const [isVisibleFilterModal, setIsVisibleFilterModal] = useState(false);

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
    let p = students.filter(
      student => !selectedStudents.some(s => s.id === student.id),
    );
    setStudents(p);
    setFilteredStudents(p);
    setSelectedStudents([]);
  };

  const handleAllStudentsSelected = (isSelected: boolean) => {
    setSelectAllToggle(isSelected);
    setSelectedStudents(isSelected ? students : []);
  };

  const handleCloseEditModal = () => {
    setEditModalVisibility(false);
    setEditStudentInfo(null);
  };
  const handleEditStudentPress = (student: Student) => {
    setEditStudentInfo(student);
    setEditModalVisibility(true);
  };
  const handleSaveChangePress = (student: Student) => {
    setStudents(prev => prev.map(s => (s.id === student.id ? student : s)));
    setFilteredStudents(prev =>
      prev.map(s => (s.id === student.id ? student : s)),
    );
    setSelectedStudent(student);
    setEditModalVisibility(false);
    setEditStudentInfo(null);
  };

  const handleFilterModalClose = () => {
    setIsVisibleFilterModal(false);
  };
  const handleClassFilterApply = (selectedClasses: string[]) => {
    if (selectedClasses.length !== 0) {
      setFilteredStudents(
        students.filter(student => selectedClasses.includes(student.class)),
      );
    }else{
      setFilteredStudents(students);
    }
    setIsVisibleFilterModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={styles.wrapper}>
        <View style={styles.headers}>
          <Header
            handleFilterPress={() => setIsVisibleFilterModal(true)}
            onSearchChange={onSearchChange}
          />
          <StudentsActionHeader
            allStudentsSelected={selectedStudents.length === students.length}
            selectAllStudents={handleAllStudentsSelected}
            handleDeletePress={handleDeletePress}
            studentsLength={filteredStudents.length}
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
        handleEditStudentPress={handleEditStudentPress}
        selectedStudent={selectedStudent}
        onModalClose={onModalClose}
        isVisible={isModalVisible}
      />
      <EditAddModal
        handleSaveChangePress={handleSaveChangePress}
        studentInfo={editStudentInfo}
        onClose={handleCloseEditModal}
        isVisible={editModalVisibility}
      />
      <FilterByClassModal
        isVisible={isVisibleFilterModal}
        onClose={handleFilterModalClose}
        onApply={handleClassFilterApply}
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
