import { Modal as ModalM, Center } from '@mantine/core';

export default function Modal({ children, opened, setOpened }) {
  return (
    <>
      <ModalM
        opened={opened}
        onClose={() => setOpened(false)}
        title={<Center>Login in or sign up in</Center>}
        centered={true}
      >
        {children}
      </ModalM>
    </>
  );
}
