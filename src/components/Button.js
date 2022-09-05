import React from 'react';
import { Button as ButtonM } from '@mantine/core';

export default function Button({ children, buttonType, ...otherProps }) {
  return <ButtonM {...otherProps}>{children}</ButtonM>;
}
