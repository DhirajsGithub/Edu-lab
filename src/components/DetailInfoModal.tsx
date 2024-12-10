import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import {Student} from '../utils/types';
import {Colors} from '../theme/Colors';
import {PencilIcon, UserPlus} from 'lucide-react-native';
import DetailInfoCard from './DetailInfoCard';

const {height} = Dimensions.get('window');

const DetailInfoModal = ({
  isVisible,
  onModalClose,
  selectedStudent,
}: {
  isVisible: boolean;
  onModalClose: () => void;
  selectedStudent: Student | null;
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
              <View style={styles.head}>
                <Text style={styles.headText}>Personal Information</Text>
                <View style={styles.rowView}>
                  <TouchableOpacity>
                    <PencilIcon size={20} color={Colors.text} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <UserPlus size={20} color={Colors.text} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.infoCard}>
                <DetailInfoCard person={selectedStudent} />
              </View>
             <View style={{marginTop: 30}}>
             <Text style={styles.headText}>Guardian Information</Text>
             <View style={styles.infoCard}>
                <DetailInfoCard person={selectedStudent} />
              </View>
             </View>
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
  headText: {
    fontSize: 20,
    fontFamily: 'AvenirNextCyr-Demi',
    color: Colors.text,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowView: {
    flexDirection: 'row',
    gap: 20,
  },
  infoCard: {
    marginTop: 20,
  },
});
