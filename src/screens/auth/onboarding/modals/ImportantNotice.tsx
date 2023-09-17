import { Box, Button } from 'design-system';
import React from 'react';
import { BaseModal, Icon } from 'shared';
import theme from 'theme';
import { wp } from 'utils';

interface ImportantNoticeProps {
  isVisible: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export const ImportantNotice = ({
  isVisible,
  onClose,
  onComplete,
}: ImportantNoticeProps) => {
  return (
    <BaseModal
      visible={isVisible}
      showHeader
      onClose={onClose}
      headerText="Important Notice">
      <Box paddingBottom={40} paddingTop={30}>
        <Box mx={wp(32)} mb={40}>
          <Icon name="gradient" />
        </Box>
        <Button
          isNotBottom
          width={311}
          borderRadius={100}
          title="I Understand"
          backgroundColor={theme.colors.YELLOW}
          alignSelf={'center'}
          onPress={onComplete}
        />
      </Box>
    </BaseModal>
  );
};
