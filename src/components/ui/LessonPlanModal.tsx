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
            if (item.subFeature) {
              return (
                <ul>
                  <li key={item.feature}>{item.feature}</li>{' '}
                  <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
                    <li>{item.subFeature}</li>
                  </ul>
                </ul>
              );
            } else {
              return <li key={item.feature}>{item.feature}</li>;
            }
          })}
        </ul>
      </Modal>

      <Group position='center'>
        <Button
          onClick={open}
          className='lg:absolute lg:bottom-24 lg:w-56 text-white block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900'
          // className='py-2.5 px-5 lg:absolute lg:bottom-24 lg:left-1/2 lg:transform lg:-translate-x-1/2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-700 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-700 w-56'
        >
          Learn More
        </Button>
      </Group>
    </>
  );
}
