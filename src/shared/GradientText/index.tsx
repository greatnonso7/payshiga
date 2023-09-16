/* eslint-disable react-native/no-inline-styles */
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { Text } from 'design-system';

interface GradientTextProps {
  children: string;
}

export const GradientText = ({ children }: GradientTextProps) => {
  return (
    <MaskedView
      style={{ height: 24, backgroundColor: 'red' }}
      maskElement={<Text variant="headerMedium">{children}</Text>}>
      <LinearGradient
        colors={['rgba(75, 146, 247, 44)', 'rgba(151, 71, 255, 73.88)']}
        angle={264}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={{ flex: 1 }}
      />
    </MaskedView>
  );
};
