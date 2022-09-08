import React from 'react';
import { Button as ButtonM } from '@mantine/core';

export default function Button({ children, ...otherProps }) {
  return (
    <ButtonM color='violet' {...otherProps}>
      {children}
    </ButtonM>
  );
}
