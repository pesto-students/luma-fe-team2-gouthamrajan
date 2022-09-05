import React from 'react';
import { Input as InputM } from '@mantine/core';

export default function Input({ label, ...otherProps }) {
  return (
    <>
      <InputM.Wrapper label={label}>
        <InputM {...otherProps} />
      </InputM.Wrapper>
    </>
  );
}
