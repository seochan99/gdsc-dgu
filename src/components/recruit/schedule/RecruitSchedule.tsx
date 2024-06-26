import RecruitScheduleBox from '@/components/recruit/schedule/RecruitScheduleBox';
import { RECRUIT_SCHEDULE } from '@/constants/recruit/recruitSchedule';

const RecruitSchedule = () => {
  return (
    <section className="w-full bg-[#F7F8FA] flex-col justify-start items-center gap-2.5 inline-flex">
      <div className="w-4/5 px-10 py-40 bg-gray-50">
        <div className="flex-col items-center gap-2.5 flex">
          <div className="self-stretch flex-col flex">
            <div className="px-1 pb-10">
              <p className="text-black text-5xl leading-10">Schedule</p>
            </div>
            <section className="gap-5 inline-flex">
              <RecruitScheduleBox schedules={RECRUIT_SCHEDULE['document']} />
              <RecruitScheduleBox
                schedules={RECRUIT_SCHEDULE['firstPresentation']}
              />
              <RecruitScheduleBox schedules={RECRUIT_SCHEDULE['interview']} />
              <RecruitScheduleBox
                schedules={RECRUIT_SCHEDULE['finalPresentation']}
              />
              <RecruitScheduleBox schedules={RECRUIT_SCHEDULE['orientation']} />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RecruitSchedule;
