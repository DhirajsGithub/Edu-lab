import {FlatList} from 'react-native';
import React from 'react';
import BriefInfoCard from './BriefInfoCard';
import {Student} from '../utils/types';

const StudentsList = ({
  handleStudentPress,
  students,
  handlSelectStudentPress,
  selectAllToggle,
  selectedStudents,
}: {
  handleStudentPress: (student: Student) => void;
  students: Student[];
  handlSelectStudentPress: (student: Student, selected: boolean) => void;
  selectAllToggle: boolean;
  selectedStudents: Student[];
}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{gap: 20, paddingBottom: 100, marginTop: 20}}
      data={students}
      renderItem={({item}: {item: Student}) => (
        <BriefInfoCard
          selectAllToggle={selectAllToggle}
          handlSelectStudentPress={handlSelectStudentPress}
          onPress={() => handleStudentPress(item)}
          student={item}
          isSelected={selectedStudents.some(s => s.id === item.id)}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default StudentsList;
