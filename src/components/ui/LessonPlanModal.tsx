import { Button, Group, Modal } from '@mantine/core';

interface Props {
  content: any;
  open: () => void;
  close: () => void;
  modalIsOpened: boolean;
}

export default function LessonPlanModal({
  content,
  open,
  close,
  modalIsOpened,
}: Props) {
  return (
    <>
      <Modal opened={modalIsOpened} onClose={close} title={content[0].title}>
        <ul style={{ listStyleType: 'disc', margin: '20px' }}>
          {content.map((item: any) => {
            return <li key={item.feature}>{item.feature}</li>;
          })}
        </ul>
      </Modal>

      <Group position='center'>
        <Button
          onClick={open}
          className='text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900'
        >
          Learn More
        </Button>
      </Group>
    </>
  );
}
