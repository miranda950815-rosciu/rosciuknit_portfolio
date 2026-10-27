import React, { useState } from 'react';
import { Star, BarChart3, CheckSquare, Layers, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsAndCharts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'status' | 'cross'>('matrix');
  const [skillCategory, setSkillCategory] = useState<string>('all');

  const { skills, comparisonCharts } = PORTFOLIO_DATA;

  const filteredSkills = skillCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === skillCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#EAE4DC]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#7A5C45]">
            <span className="font-mono text-[11px] bg-[#EAE4DC] px-2 py-0.5 rounded text-[#4A423A]">Core Competency</span>
            <span aria-hidden="true" className="text-[#C5BDB2]">·</span>
            <span>Skill Evaluation & Comparison</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-bold text-[#1F1D1A] tracking-tight [text-wrap:balance]">
            기술 역량 및 프로젝트 비교 매트릭스
          </h2>
          <p className="text-[#5C554D] text-base leading-relaxed [text-wrap:pretty]">
            대바늘 실무 5년과 체계적인 아카데미 교육을 통해 구축한 10대 핵심 기술 숙련도와 
            프로젝트별 기술 적용 현황을 다각도로 분석했습니다.
          </p>

          {/* Interactive Navigation Segmented Control */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'matrix', label: '10대 핵심 기술 역량' },
              { id: 'status', label: '프로젝트 진행 현황 & 단계' },
              { id: 'cross', label: '기술별 프로젝트 적용 매트릭스' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 text-xs md:text-sm font-semibold rounded-full transition-all whitespace-nowrap shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-[#1F1D1A] text-[#FAF8F5] shadow-sm'
                    : 'bg-[#FAF8F5] text-[#6B645B] border border-[#E5DFD5] hover:bg-[#F2EDE4] hover:text-[#1F1D1A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: Skills Matrix */}
        {activeTab === 'matrix' && (
          <div className="space-y-6 animate-fade-in">
            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#FAF8F5] rounded-2xl border border-[#EAE4DC]">
              <span className="text-xs font-semibold text-[#1F1D1A]">기술 분류 필터:</span>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'all', label: '전체 (10)' },
                  { id: '기법', label: '기법 (3)' },
                  { id: '설계', label: '구조/설계 (3)' },
                  { id: '소재/분석', label: '소재/분석 (2)' },
                  { id: '도안/문서화', label: '도안/문서화 (2)' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSkillCategory(cat.id)}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                      skillCategory === cat.id
                        ? 'bg-[#1F1D1A] text-[#FAF8F5]'
                        : 'bg-[#FFFFFF] text-[#6B645B] hover:bg-[#EAE4DC]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredSkills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5DFD5] shadow-2xs hover:border-[#C8BFB2] transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-base text-[#1F1D1A]">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-mono text-[#7A5C45] bg-[#F2EDE4] px-2 py-0.5 rounded">
                        {skill.focus}
                      </span>
                    </div>
                    <p className="text-xs text-[#5C554D] leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Rating Meter */}
                  <div className="pt-4 mt-3 border-t border-[#F0EBE3] flex items-center justify-between">
                    <span className="text-[11px] text-[#8A8177]">숙련도 수준</span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-3.5 h-3.5 ${
                            star <= skill.rating
                              ? 'text-[#7A5C45] fill-[#7A5C45]'
                              : 'text-[#DCD5C9]'
                          }`}
                        />
                      ))}
                      <span className="font-mono text-xs font-bold text-[#1F1D1A] ml-1.5">
                        {skill.rating}/5
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-right text-[11px] text-[#8A8177]">
              * 숙련도는 5년간의 대바늘 실무 및 바늘아카데미 전문과정 이수를 바탕으로 작성한 자기평가 초안입니다.
            </p>
          </div>
        )}

        {/* Tab 2: Project Status & Milestones (Charts 1 & 2) */}
        {activeTab === 'status' && (
          <div className="space-y-8 animate-fade-in">
            {/* Chart 1: Status Table */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#EAE4DC]">
              <h3 className="font-serif font-bold text-xl text-[#1F1D1A] mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#7A5C45]" />
                <span>차트 1. 프로젝트별 진행 현황 및 성과</span>
              </h3>
              <div className="space-y-4">
                {comparisonCharts.chart1_status.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5DFD5] space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-xs font-mono text-[#7A5C45] uppercase">
                          {item.category}
                        </span>
                        <h4 className="font-serif font-bold text-lg text-[#1F1D1A]">
                          {item.project}
                        </h4>
                      </div>
                      <span className="inline-flex self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-[#F2EDE4] text-[#1F1D1A]">
                        {item.status}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-[#8A8177]">
                        <span>진행도</span>
                        <span className="font-mono font-bold text-[#1F1D1A]">{item.progress}%</span>
                      </div>
                      <div className="w-full bg-[#EAE4DC] h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-[#7A5C45] h-full rounded-full transition-all duration-700"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                    <p className="text-xs text-[#5C554D]">
                      <strong className="text-[#1F1D1A]">핵심 성과: </strong> {item.result}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart 2: Timeline & Stages */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#EAE4DC]">
              <h3 className="font-serif font-bold text-xl text-[#1F1D1A] mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#7A5C45]" />
                <span>차트 2. 프로젝트 진행 기간 및 단계별 마일스톤</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {comparisonCharts.chart2_stages.map((stageItem, sIdx) => (
                  <div
                    key={sIdx}
                    className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5DFD5] space-y-4"
                  >
                    <div>
                      <h4 className="font-serif font-bold text-lg text-[#1F1D1A]">
                        {stageItem.project}
                      </h4>
                      <span className="text-xs font-mono text-[#7A5C45]">
                        {stageItem.period}
                      </span>
                    </div>
                    <div className="space-y-3 pt-2">
                      {stageItem.stages.map((stg, stgIdx) => (
                        <div key={stgIdx} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-[#F2EDE4] text-[#7A5C45] font-mono text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                            {stgIdx + 1}
                          </span>
                          <span className="text-xs sm:text-sm text-[#403A34]">{stg}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Technical Cross Comparison (Chart 3) */}
        {activeTab === 'cross' && (
          <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#EAE4DC] animate-fade-in overflow-hidden">
            <h3 className="font-serif font-bold text-xl text-[#1F1D1A] mb-4 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-[#7A5C45]" />
              <span>차트 3. 주요 기술별 프로젝트 적용 현황 매트릭스</span>
            </h3>
            <p className="text-xs text-[#7A7369] mb-6">
              완성작(늦여름의 니트 드레스)과 개발 중인 신작(비대칭 하이넥 아란 가디건) 간의 기술 적용 방식을 비교합니다.
            </p>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-[#D5CDC2] text-[#1F1D1A] font-serif font-bold">
                    <th className="py-3 px-4 bg-[#F2EDE4] rounded-l-xl">핵심 기술 영역</th>
                    <th className="py-3 px-4 bg-[#F2EDE4]">늦여름의 니트 드레스 (완성작)</th>
                    <th className="py-3 px-4 bg-[#F2EDE4] rounded-r-xl">비대칭 하이넥 아란 가디건 (진행 중)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE4DC]">
                  {comparisonCharts.chart3_skillsApplication.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-[#FFFFFF]/60 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-[#1F1D1A] whitespace-nowrap">
                        {row.skill}
                      </td>
                      <td className="py-3.5 px-4 text-[#5C554D]">
                        <span className="inline-block px-2 py-0.5 rounded bg-[#F2EDE4] text-[#2E2A25] text-xs mr-1">
                          완료
                        </span>
                        {row.dress}
                      </td>
                      <td className="py-3.5 px-4 text-[#5C554D]">
                        <span className="inline-block px-2 py-0.5 rounded bg-[#EAE4DC] text-[#4A423A] text-xs mr-1">
                          개발 중
                        </span>
                        {row.cardigan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
