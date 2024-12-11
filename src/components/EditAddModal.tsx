import React, {useEffect, useState} from 'react';
import {
  Modal,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Colors} from '../theme/Colors';
import {BlurView} from '@react-native-community/blur';
import {CircleXIcon, UserPlus} from 'lucide-react-native';
import Avatar from './Avatar';
import InputField from './InputField';
import EditInputLableWrapper from './EditInputLableWrapper';
import CustomDropDown from './CustomDropDown';
import ClassesData from '../assets/classes.json';
import {Guardian, Student} from '../utils/types';
const {height} = Dimensions.get('window');

const GuardianEditInfo = ({
  guardian,
  onChange,
  
}: {
  guardian: Guardian;
  onChange: (key: string, value: string) => void;
}) => {
  return (
    <View style={styles.modalContent}>
      <EditInputLableWrapper label="Full Name">
            <InputField
              placeholder="ex: Dhiraj Borse"
              value={guardian.name}
              onChangeText={text => onChange('name', text)}
            />
          </EditInputLableWrapper>
      <EditInputLableWrapper label="Email">
            <InputField
              placeholder="ex: example@email.com"
              value={guardian.email}
              onChangeText={text => onChange('email', text)}
            />
          </EditInputLableWrapper>
      <EditInputLableWrapper label="Phone Number">
        <InputField
          placeholder="ex: 1234567890"
          value={guardian.mobile_number}
          onChangeText={text => onChange('mobile_number', text)}
        />
      </EditInputLableWrapper>
    </View>
  );
};

interface EditAddModalProps {
  isVisible: boolean;
  onClose: () => void;
  studentInfo?: Student | null;
  handleSaveChangePress: (student: Student) => void;
  
}

const EditAddModal: React.FC<EditAddModalProps> = ({
  isVisible,
  onClose,
  studentInfo,
    handleSaveChangePress,
}) => {
  const [formState, setFormState] = useState<Student | null>(
    studentInfo || null,
  );
  const [guardians, setGuardians] = useState<{[key: string]: Guardian}>(
    studentInfo?.guardians || {},
  );

  const handleInputChange = (key: keyof Student, value: string) => {
    console.log(key, value)
    setFormState(prev => (prev ? {...prev, [key]: value} : null));
  };

  useEffect(() => {
    if (studentInfo) {
      setFormState(studentInfo);
      setGuardians(studentInfo.guardians);
    }
  }, [studentInfo]);

  const handleGuardianChange = (
    guardianKey: string,
    field: string,
    value: string,
  ) => {
    setGuardians(prev => ({
      ...prev,
      [guardianKey]: {
        ...prev[guardianKey],
        [field]: value,
      },
    }));
  };

  const addMoreGuardian = () => {
    const newKey = `guardian_${Object.keys(guardians).length + 1}`;
    setGuardians(prev => ({
      ...prev,
      [newKey]: {
        id: newKey,
        profile_picture: '',
        name: '',
        email: '',
        mobile_number: '',
      },
    }));
  };

  

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
      animationType="fade">
      <View style={styles.modalOverlay}>
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="dark"
          blurAmount={3}
          reducedTransparencyFallbackColor="white"
        />
        <View style={[styles.editAddModal]}>
          <View style={styles.head}>
            <Text style={styles.modalTitle}>Edit School Details</Text>
            <TouchableOpacity onPress={onClose}>
              <CircleXIcon size={24} color={Colors.error} />
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={styles.modalContent}
            showsVerticalScrollIndicator={true}
            bounces={true}>
            <Avatar
              uri={
                formState?.profile_picture ||
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
              }
              width={80}
              height={80}
            />
            <EditInputLableWrapper label="Full name">
              <InputField
                placeholder="ex: Rahul"
                value={formState?.name || ''}
                onChangeText={text => handleInputChange('name', text)}
              />
            </EditInputLableWrapper>
            <EditInputLableWrapper label="Registration Number">
              <InputField
                placeholder="ex: 123456"
                value={formState?.registration_number || ''}
                onChangeText={text =>
                  handleInputChange('registration_number', text)
                }
              />
            </EditInputLableWrapper>
            <EditInputLableWrapper label="Phone Number">
              <InputField
                placeholder="ex: 1234567890"
                value={formState?.mobile_number || ''}
                onChangeText={text => handleInputChange('mobile_number', text)}
              />
            </EditInputLableWrapper>
            <EditInputLableWrapper label="Email">
              <InputField
                placeholder="ex: example@email.com"
                value={formState?.email || ''}
                onChangeText={text => handleInputChange('email', text)}
              />
            </EditInputLableWrapper>
            <EditInputLableWrapper label="Date of Birth">
              <InputField
                placeholder="ex: Aug 22, 1998"
                value={formState?.dob || ''}
                onChangeText={text => handleInputChange('dob', text)}
              />
            </EditInputLableWrapper>
            <CustomDropDown
              onChange={value => handleInputChange('class', value)}
              value={formState?.class || ''}
              labelText="Select Class"
              data={ClassesData.ClassesData}
            />
            <View style={styles.line} />
            <View style={{gap: 15}}>
              <Text style={styles.modalTitle}>Family Members</Text>
              {Object.entries(guardians).map(([key, guardian]) => (
                <View key={key}>
                  <Text style={styles.guardianKey}>{key}</Text>
                  <GuardianEditInfo
                    guardian={guardian}
                    onChange={(field, value) =>
                      handleGuardianChange(key, field, value)
                    }
                  />
                  <View style={styles.line} />
                </View>
              ))}
              <TouchableOpacity
                onPress={addMoreGuardian}
                style={[styles.cancelBtn, {flexDirection: 'row', gap: 8, alignItems: "center"}]}>
                <UserPlus size={20} color={Colors.darkGray} />
                <Text style={styles.cancelText}>Add More</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footerBtn}>
              <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> handleSaveChangePress({...formState, guardians : guardians})} style={styles.saveChangesBtn}>
                <Text style={styles.saveChangesBtnText}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editAddModal: {
    borderRadius: 20,
    padding: 20,
    maxHeight: height * 0.8,
    width: '90%',
    backgroundColor: Colors.white,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'AvenirNextCyr-Demi',
  },
  modalContent: {
    gap: 20,
  },
  line: {
    height: 1,
    backgroundColor: '#E1E1E1',
    marginVertical: 10,
  },
  footerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelText: {
    color: Colors.darkGray,
    fontSize: 14,
    fontFamily: 'Montserrat',
    textAlign: 'center',
  },
  cancelBtn: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderColor: Colors.darkGray,
    flexGrow: 1,
    maxWidth: '40%',
  },
  saveChangesBtnText: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 14,
    fontFamily: 'Montserrat',
  },
  saveChangesBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.darkGray,
    borderRadius: 10,
    maxWidth: '55%',
    flexGrow: 1,
  },
  guardianKey: {
    fontSize: 14,
    fontFamily: 'AvenirNextCyr-Regular',
    color: Colors.subText,
    marginBottom: 10,
  },
});

export default EditAddModal;
