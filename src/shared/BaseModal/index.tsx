import React from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './style';
import { BaseModalProps } from './types';
import { Box, Text } from 'design-system';
import { Icon } from 'shared/Icon';
import theme from 'theme';

export const BaseModal = ({
  visible,
  children,
  onClose,
  containerStyles,
  removeBackTap,
  showHeader,
  headerText,
}: BaseModalProps) => {
  return (
    <Modal
      isVisible={visible}
      hasBackdrop={true}
      animationOut="slideOutDown"
      animationOutTiming={400}
      animationIn="slideInUp"
      onSwipeComplete={onClose}
      swipeDirection="down"
      style={[styles.container, containerStyles]}
      propagateSwipe={true}
      backdropOpacity={0.8}
      onBackdropPress={removeBackTap ? () => {} : onClose}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
          style={styles.generalContainer}
          pointerEvents="box-none">
          <Box style={[styles.dialogContainer]}>
            <Box style={styles.barModalContainer} />
            {showHeader ? (
              <Box style={styles.closeButtonContainer}>
                <Text
                  variant="headerMedium"
                  fontSize={22}
                  fontFamily={theme.font.SFProRoundedSemibold}
                  color={theme.colors.WHITE}>
                  {headerText}
                </Text>
                <Box
                  onPress={onClose}
                  as={TouchableOpacity}
                  activeOpacity={0.8}>
                  <Icon name="close" />
                </Box>
              </Box>
            ) : null}
            {children}
          </Box>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
