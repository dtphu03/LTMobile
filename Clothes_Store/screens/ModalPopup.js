import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ModalPopup = ({ visible, onClose, children }) => {
  return (
    <Modal transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={[styles.modalContainer]}>
          {children}
          <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
            <Text style={{ color: '#4280EF', fontSize: 16 }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 20,
  },
});

export default ModalPopup;