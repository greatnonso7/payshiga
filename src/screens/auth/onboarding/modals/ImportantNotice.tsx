import { Box, Button } from 'design-system';
import React from 'react';
import { BaseModal, Icon } from 'shared';
import theme from 'theme';
import { wp } from 'utils';

interface ImportantNoticeProps {
  isVisible: boolean;
  onClose: () => void;
}

export const ImportantNotice = ({
  isVisible,
  onClose,
}: ImportantNoticeProps) => {
  return (
    <BaseModal
      visible={isVisible}
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
        />
      </Box>
    </BaseModal>
  );
};
