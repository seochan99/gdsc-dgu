'use client';
import LeadIntro from '@/components/member/introduce/LeadIntro';
import MemberIntro from '@/components/member/introduce/MemberIntro';
import TimeLine from '@/components/member/timeline/TimeLine';
import { useState } from 'react';
import RecruitHeader from '@/components/recruit/header/RecruitHeader';

const GenerationPage = () => {
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(1);

  return (
    <div>
      {/* -----------------------------------------------*/}
      {/* -------------------- 타임라인 --------------------*/}
      {/* -----------------------------------------------*/}
      <TimeLine onSelectIndex={setSelectedTimelineIndex} />

      {selectedTimelineIndex === 2 ? (
        <div>
          {/* -----------------------------------------------*/}
          {/* -------------------- 모집 페이지 --------------------*/}
          {/* -----------------------------------------------*/}
          <RecruitHeader />
        </div>
      ) : (
        <div>
          {/* -----------------------------------------------*/}
          {/* -------------------- 리드 소개 --------------------*/}
          {/* -----------------------------------------------*/}
          <LeadIntro />
          {/* -----------------------------------------------*/}
          {/* -------------------- DevRel --------------------*/}
          {/* -----------------------------------------------*/}
          <MemberIntro title="DevRel" />
          {/* -----------------------------------------------*/}
          {/* -------------------- Web/App --------------------*/}
          {/* -----------------------------------------------*/}
          <MemberIntro title="Web/App" />
          {/* -----------------------------------------------*/}
          {/* -------------------- Server/Cloud --------------------*/}
          {/* -----------------------------------------------*/}
          <MemberIntro title="Server/Cloud" />
          {/* -----------------------------------------------*/}
          {/* -------------------- Al/ML --------------------*/}
          {/* -----------------------------------------------*/}
          <MemberIntro title="AI/ML" />
        </div>
      )}
    </div>
  );
};

export default GenerationPage;
