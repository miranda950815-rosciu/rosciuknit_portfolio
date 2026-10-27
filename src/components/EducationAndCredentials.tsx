import React from 'react';
import { Award, GraduationCap, CheckCircle2, BookOpen, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationAndCredentials: React.FC = () => {
  const { education, certifications } = PORTFOLIO_DATA;

  const academicCourses = education.filter((e) => e.type === '전문 교육');

  return (
    <section id="education" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE4DC]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#7A5C45]">
            <span className="font-mono text-[11px] bg-[#EAE4DC] px-2 py-0.5 rounded text-[#4A423A]">Credentials</span>
            <span aria-hidden="true" className="text-[#C5BDB2]">·</span>
            <span>Education & Certificates</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-bold text-[#1F1D1A] tracking-tight [text-wrap:balance]">
            전문 교육 및 공인 자격 체계
          </h2>
          <p className="text-[#5C554D] text-base leading-relaxed [text-wrap:pretty]">
            체계적인 대바늘 이론과 탑다운 구조학, 그리고 강사·디자이너 과정을 수료하며 
            실무 감각과 학문적 정밀성을 단단하게 다졌습니다.
          </p>
        </div>

        {/* 3-Column Professional Education Cards (Matching "Utility pages" layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {academicCourses.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5DFD5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#7A5C45] bg-[#F2EDE4] px-2.5 py-1 rounded font-semibold">
                    Step 0{index + 1}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#2F6B43] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.status}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-[#8A8177] block font-mono">{item.institution}</span>
                  <h3 className="font-serif font-bold text-xl text-[#1F1D1A] mt-1">
                    {item.course}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#7A5C45] font-mono mt-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-xs text-[#5C554D] leading-relaxed">
                  {item.description}
                </p>

                {/* Course Syllabus Highlights */}
                <div className="space-y-2 pt-2 border-t border-[#F0EBE3]">
                  <span className="text-[11px] font-semibold text-[#1F1D1A] block">주요 학습 내용:</span>
                  <ul className="space-y-1.5 text-xs text-[#6B645B]">
                    {item.details.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-[#7A5C45] font-bold">·</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F0EBE3] flex items-center justify-between text-xs text-[#7A7369]">
                <span>교육 기관: {item.institution}</span>
                <span className="font-semibold text-[#1F1D1A]">정규 과정</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Qualifications Grid */}
        <div className="bg-[#FFFFFF] rounded-3xl p-8 md:p-10 border border-[#E5DFD5] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#F0EBE3]">
            <div>
              <h3 className="font-serif font-bold text-xl text-[#1F1D1A] flex items-center gap-2">
                <Award className="w-5 h-5 text-[#7A5C45]" />
                <span>자격증 및 공인 인증 내역 (Certifications)</span>
              </h3>
              <p className="text-xs text-[#7A7369] mt-1">
                대바늘 니팅 및 편물 기술 분야의 공식 수료증과 공인 자격증 목록입니다.
              </p>
            </div>
            <div className="text-xs font-mono text-[#7A5C45] bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-[#EAE4DC] self-start sm:self-auto">
              공식 인증 4건 완료
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="bg-[#FAF8F5] p-4 rounded-xl border border-[#EAE4DC] hover:border-[#D5CDC2] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A5C45] block">
                    {cert.badge}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-[#1F1D1A]">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-[#6B645B]">{cert.organization}</p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#EAE4DC] flex items-center justify-between text-[11px] text-[#8A8177] font-mono">
                  <span>취득: {cert.date}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2F6B43]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
