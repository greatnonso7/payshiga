import React from 'react';
import { Box } from 'design-system';
import { Icon } from 'shared';
import { FlatList } from 'react-native';
import { flagList } from 'data';
import Modal from 'react-native-modal';

interface CountryListProps {
  isVisible: boolean;
  onClose: () => void;
}

export const CountryList = ({ isVisible, onClose }: CountryListProps) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <Box>
        <FlatList
          data={flagList}
          renderItem={({ item, index }) => {
            return (
              <Box key={index}>
                <Icon name={item.flag} />
              </Box>
            );
          }}
        />
      </Box>
    </Modal>
  );
};
