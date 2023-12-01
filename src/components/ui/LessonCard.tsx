import LessonPlanModal from './LessonPlanModal';

interface Props {
  lessonContent: any;
  lessonDetails: any;
  bestValue?: any;
  open: any;
  close: any;
  modalIsOpened: any;
}

export default function LessonCard({
  lessonContent,
  lessonDetails,
  bestValue,
  open,
  close,
  modalIsOpened,
}: Props) {
  return (
    <div className='border rounded-lg shadow-md bg-slate-800 border-gray-700'>
      <p className='py-4 text-2xl font-black bg-gray-300 rounded-t-lg'>
        {lessonDetails.title}
      </p>
      <div className='p-5 relative h-full lg:mb-24'>
        <div>
          <h5 className='mb-2 text-4xl font-bold tracking-tight text-white'>
            {lessonDetails.price} <em className='text-sm'>{bestValue}</em>
          </h5>
          <p
            className='text-xl mb-3 font-normal text-gray-400'
            dangerouslySetInnerHTML={{ __html: lessonDetails.description }}
          ></p>
        </div>
        <LessonPlanModal
          content={lessonContent}
          open={open}
          close={close}
          modalIsOpened={modalIsOpened}
        ></LessonPlanModal>
      </div>
    </div>
  );
}
