import React, { useState } from 'react';
import { ArrowUpRight, Filter, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsArchiveProps {
  onSelectProject: (id: string) => void;
  onOpenContact: () => void;
}

export const ProjectsArchive: React.FC<ProjectsArchiveProps> = ({
  onSelectProject,
  onOpenContact,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'finished' | 'in_progress' | 'technique'>('all');

  const { projects } = PORTFOLIO_DATA;

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE4DC]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#7A5C45]">
            <span className="font-mono text-[11px] bg-[#EAE4DC] px-2 py-0.5 rounded text-[#4A423A]">Portfolio Archive</span>
            <span aria-hidden="true" className="text-[#C5BDB2]">·</span>
            <span>Masterpieces & Pattern Studies</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-bold text-[#1F1D1A] tracking-tight [text-wrap:balance]">
            주요 프로젝트 및 기술 아카이브
          </h2>
          <p className="text-[#5C554D] text-base leading-relaxed [text-wrap:pretty]">
            콘셉트 기획부터 원사 배합, 편물 검증, 니팅 도안 완성까지 
            디자이너 이슬비의 체계적인 작업 여정과 결과물을 확인해 보세요.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: '전체 보기 (All)' },
              { id: 'finished', label: '완성작 (Finished)' },
              { id: 'in_progress', label: '도안 개발 중 (In Development)' },
              { id: 'technique', label: '편물 기법 연구 (Technique)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all whitespace-nowrap shrink-0 ${
                  activeFilter === tab.id
                    ? 'bg-[#1F1D1A] text-[#FAF8F5] shadow-sm'
                    : 'bg-[#FFFFFF] text-[#6B645B] border border-[#E5DFD5] hover:bg-[#F2EDE4] hover:text-[#1F1D1A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="group bg-[#FFFFFF] rounded-2xl p-4 border border-[#E5DFD5] shadow-sm hover:shadow-xl hover:border-[#C8BFB2] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Mockup Frame / Showcase container */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F0EBE1] border border-[#ECE6DC]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                    <span className="bg-[#FAF8F5]/90 backdrop-blur-xs text-[10px] font-mono font-semibold text-[#1F1D1A] px-2 py-0.5 rounded shadow-2xs">
                      {project.categoryLabel}
                    </span>
                    <span className="bg-[#1F1D1A]/80 text-[#FAF8F5] text-[10px] font-mono px-2 py-0.5 rounded">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Meta & Typography */}
                <div className="px-1 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-[#7A5C45] font-medium">
                    <span>{project.type}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-[11px] text-[#8A8177]">{project.period.split('–')[0].trim()}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#1F1D1A] group-hover:text-[#7A5C45] transition-colors leading-snug flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8A8177] group-hover:text-[#7A5C45] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                  </h3>
                  <p className="text-xs text-[#6B645B] line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="pt-3 mt-4 border-t border-[#F0EBE3] flex items-center justify-between text-[11px] text-[#8A8177]">
                <div className="flex items-center gap-1.5 truncate max-w-[200px]">
                  {project.keywords.slice(0, 3).map((kw, i) => (
                    <React.Fragment key={kw}>
                      <span>#{kw}</span>
                      {i < 2 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
                <span className="font-semibold text-[#1F1D1A] group-hover:underline">
                  상세 보기
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered Button */}
        <div className="text-center mt-14">
          <button
            onClick={onOpenContact}
            className="px-8 py-3.5 text-sm font-semibold text-[#1F1D1A] bg-[#FFFFFF] border border-[#D5CDC2] rounded-full hover:bg-[#F2EDE4] active:scale-[0.98] transition-all shadow-sm inline-flex items-center gap-2"
          >
            <span>도안 개발 및 샘플 편직 문의하기</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
