import React, {useRef} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {Guardian, Student} from '../utils/types';
import {Colors} from '../theme/Colors';
import {PencilIcon, UserPlus} from 'lucide-react-native';
import DetailInfoCard from './DetailInfoCard';
import {Modalize} from 'react-native-modalize';
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
  const modalizeRef = useRef<Modalize>(null);
  React.useEffect(() => {
    if (isVisible) {
      modalizeRef.current?.open();
    } else {
      modalizeRef.current?.close();
    }
  }, [isVisible]);

  if (!selectedStudent) return null;

  return (
    <>
      {isVisible && (
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="dark"
          blurAmount={4}
          reducedTransparencyFallbackColor="white"
        />
      )}
      <Modalize
        ref={modalizeRef}
        onClosed={onModalClose}
        modalHeight={height * 0.9}
        snapPoint={height * 0.7}
        modalTopOffset={80}
        handlePosition="outside"
        adjustToContentHeight={false}
        closeSnapPointStraightEnabled={false}
        scrollViewProps={{showsVerticalScrollIndicator: false}}
        overlayStyle={{backgroundColor: 'transparent'}}>
        <View style={styles.modalContent}>
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
              {Object.values(selectedStudent?.guardians).map(
                (guardian: Guardian) => (
                  <DetailInfoCard key={guardian.id} person={guardian} />
                ),
              )}
            </View>
          </View>
        </View>
      </Modalize>
    </>
  );
};

export default DetailInfoModal;

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    gap: 10,
  },
});
