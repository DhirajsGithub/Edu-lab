import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import CustomCheckBox from './CustomCheckBox';
import {Colors} from '../theme/Colors';
import classRowData from '../assets/classes.json';
import {ClassData} from '../utils/types';
import {CircleXIcon} from 'lucide-react-native';

const {height} = Dimensions.get('window');

interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
  onApply: (selectedValues: string[]) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isVisible,
  onClose,
  onApply,
}) => {
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);

  const classData: ClassData[] = classRowData.ClassesData;
  const toggleClassSelection = (value: string) => {
    if (selectedClasses.includes(value)) {
      setSelectedClasses(prev => prev.filter(item => item !== value));
    } else {
      setSelectedClasses(prev => [...prev, value]);
    }
  };

  const handleApply = () => {
    onApply(selectedClasses);
  };
  const handleLocalClose = () => {
    onClose();
    setSelectedClasses([]);
  };

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={handleLocalClose}
      animationType="fade">
      <View style={styles.modalOverlay}>
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="dark"
          blurAmount={3}
          reducedTransparencyFallbackColor="white"
        />
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.title}>Filter Classes</Text>
            <TouchableOpacity onPress={handleLocalClose}>
              <CircleXIcon size={24} color={Colors.error} />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {classData.map(item => (
              <View key={item.value} style={styles.checkboxContainer}>
                <CustomCheckBox
                  isSelected={selectedClasses.includes(item.value)}
                  onValueChange={() => toggleClassSelection(item.value)}
                />
                <Text style={styles.classLabel}>{item.label}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.footerButtons}>
            <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleLocalClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
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
  modalContainer: {
    width: '90%',
    maxHeight: height * 0.8,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'AvenirNextCyr-Medium',
    color: Colors.text,
  },
  closeText: {
    fontSize: 16,
    color: Colors.error,
  },
  scrollContent: {
    gap: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  classLabel: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'AvenirNextCyr-Regular',
    color: Colors.text,
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 20,
  },
  applyButton: {
    backgroundColor: Colors.darkGray,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexGrow: 0.7,
  },
  applyButtonText: {
    color: Colors.white,
    fontFamily: 'Montserrat',
    fontSize: 14,
    textAlign: 'center',
  },
  cancelButton: {
    borderWidth: 0.5,
    borderColor: Colors.borderColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexGrow: 0.5,
  },
  cancelButtonText: {
    color: Colors.darkGray,
    fontFamily: 'Montserrat',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default FilterModal;
