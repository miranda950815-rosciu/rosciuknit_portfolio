import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Sparkles, Calendar, User, Compass, Tag } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#D5CDC2] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-10 bg-[#FAF8F5]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#EAE4DC] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs bg-[#EAE4DC] px-2.5 py-1 rounded text-[#4A423A] font-semibold">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-[#7A7369] hidden sm:inline">
              {project.period}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#5C554D] hover:text-[#1F1D1A] hover:bg-[#EAE4DC] rounded-full transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 md:p-10 max-h-[80vh] overflow-y-auto space-y-8">
          {/* Hero Banner inside Modal */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7A5C45]">
                {project.type}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1D1A] leading-tight">
                {project.title}
              </h2>
              <p className="text-[#5C554D] text-sm leading-relaxed">
                {project.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 pt-2 text-xs text-[#7A7369]">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#7A5C45]" />
                  <span>역할: {project.role}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#7A5C45]" />
                  <span>상태: {project.status}</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#ECE7DE] shadow-md border border-[#E5DFD5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#FFFFFF] rounded-2xl border border-[#E5DFD5]">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center p-2">
                <span className="block text-[11px] text-[#8A8177] font-medium">{metric.label}</span>
                <span className="font-mono text-sm sm:text-base font-bold text-[#1F1D1A] mt-0.5 block">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Technical Specs if available */}
          {project.technicalSpecs && (
            <div className="bg-[#F2EDE4] p-5 rounded-2xl border border-[#E5DFD5] space-y-3">
              <h3 className="font-serif font-bold text-sm text-[#1F1D1A] flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#7A5C45]" />
                <span>테크니컬 스펙 및 편물 규격 (Technical Specifications)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                {project.technicalSpecs.yarn && (
                  <div>
                    <span className="text-[#8A8177] block text-[11px]">사용 원사 (Yarn)</span>
                    <span className="font-semibold text-[#1F1D1A]">{project.technicalSpecs.yarn}</span>
                  </div>
                )}
                {project.technicalSpecs.needles && (
                  <div>
                    <span className="text-[#8A8177] block text-[11px]">권장 바늘 (Needles)</span>
                    <span className="font-semibold text-[#1F1D1A]">{project.technicalSpecs.needles}</span>
                  </div>
                )}
                {project.technicalSpecs.gauge && (
                  <div>
                    <span className="text-[#8A8177] block text-[11px]">표준 게이지 (Gauge)</span>
                    <span className="font-mono font-semibold text-[#1F1D1A]">{project.technicalSpecs.gauge}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Background & Purpose */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#1F1D1A]">기획 배경 및 프로젝트 목적</h3>
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5DFD5] space-y-4 text-xs sm:text-sm text-[#5C554D] leading-relaxed">
              <p>{project.background}</p>
              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EAE4DC]">
                <strong className="text-[#1F1D1A]">프로젝트 목적: </strong>
                <span>{project.purpose}</span>
              </div>
            </div>
          </div>

          {/* Goals and Role Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5DFD5] space-y-3">
              <h4 className="font-serif font-bold text-base text-[#1F1D1A] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7A5C45]" />
                <span>주요 목표 (Goals)</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#5C554D]">
                {project.goals.map((g, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#7A5C45] font-bold">·</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5DFD5] space-y-3">
              <h4 className="font-serif font-bold text-base text-[#1F1D1A] flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#7A5C45]" />
                <span>수행 업무 및 역할 (Roles)</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#5C554D]">
                {project.roleDetails.map((r, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#7A5C45] font-bold">·</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#1F1D1A]">문제 해결 과정 (Problem & Solution)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem */}
              <div className="bg-[#FFF9F5] p-6 rounded-2xl border border-[#F2DDD0] space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#A84A25] uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>직면한 난제 (Problems)</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#6E4233]">
                  {project.problems.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-bold text-[#A84A25]">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="bg-[#F5F9F6] p-6 rounded-2xl border border-[#D5E8DB] space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#2F6B43] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>해결 방법 (Solutions)</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#275338]">
                  {project.solutions.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-bold text-[#2F6B43]">✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Takeaways & Growth */}
          <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#E5DFD5] space-y-3">
            <h4 className="font-serif font-bold text-base text-[#1F1D1A] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#7A5C45]" />
              <span>배운 점과 느낀 점 (Key Learnings)</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5C554D] leading-relaxed">
              {project.takeaways.map((t, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#7A5C45] font-bold">·</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Bottom Action Footer */}
        <div className="sticky bottom-0 bg-[#FAF8F5]/95 backdrop-blur-md px-6 sm:px-8 py-4 border-t border-[#EAE4DC] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#7A7369]">
            <span>해당 프로젝트 도안 문의 및 샘플 제작 협업이 가능합니다.</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-[#5C554D] hover:text-[#1F1D1A] hover:bg-[#EAE4DC] rounded-full transition-colors"
            >
              닫기
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-6 py-2.5 text-xs font-semibold text-[#FAF8F5] bg-[#1F1D1A] rounded-full hover:bg-[#38332E] transition-all shadow-sm"
            >
              도안 및 협업 문의하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
