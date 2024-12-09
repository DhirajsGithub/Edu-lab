import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import { Student } from '../utils/types';

const {height} = Dimensions.get('window');

const DetailInfoModal = ({
  isVisible,
  onModalClose,
  selectedStudent,
}: {
  isVisible: boolean;
  onModalClose: () => void;
  selectedStudent: Student  | null;
}) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={onModalClose}
      animationType="slide">
      <TouchableWithoutFeedback onPress={onModalClose}>
        <View style={styles.modalOverlay}>
          <BlurView
            style={StyleSheet.absoluteFill}
            blurType="dark"
            blurAmount={4}
            reducedTransparencyFallbackColor="white"
          />
          <TouchableWithoutFeedback>
            <View style={styles.modelContent}>
              <Text>Hello there</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default DetailInfoModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modelContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: height * 0.6,
    width: '100%',
  },
});
