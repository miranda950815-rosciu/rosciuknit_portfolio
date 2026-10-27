import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FeatureSpotlightsProps {
  onSelectProject: (id: string) => void;
  onOpenContact: () => void;
}

export const FeatureSpotlights: React.FC<FeatureSpotlightsProps> = ({
  onSelectProject,
  onOpenContact,
}) => {
  const { designPillars } = PORTFOLIO_DATA;

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#EAE4DC] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#7A5C45]">
            <span className="font-mono text-[11px] bg-[#EAE4DC] px-2 py-0.5 rounded text-[#4A423A]">Atelier Details</span>
            <span aria-hidden="true" className="text-[#C5BDB2]">·</span>
            <span>Craft & Methodology</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-bold text-[#1F1D1A] tracking-tight [text-wrap:balance]">
            작품의 완성도를 결정짓는 5가지 설계 철학
          </h2>
          <p className="text-[#5C554D] text-base leading-relaxed [text-wrap:pretty]">
            단순한 장식을 넘어, 편물의 물성과 착용자의 움직임을 고려한 
            이슬비 디자이너의 구조적 접근 방식을 만나보세요.
          </p>
        </div>

        {/* 5 Alternating Zig-Zag Rows (Matching reference template pattern) */}
        <div className="space-y-24 md:space-y-32">
          {designPillars.map((pillar, index) => {
            const isImageLeft = pillar.imagePosition === 'left';

            return (
              <div
                key={pillar.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isImageLeft ? '' : ''
                }`}
              >
                {/* Text Block */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isImageLeft ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#FAF8F5] bg-[#1F1D1A] px-2.5 py-0.5 rounded">
                        {pillar.number}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#7A5C45]">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-[34px] font-bold text-[#1F1D1A] leading-tight [text-wrap:balance]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-[#8A8177] tracking-wider uppercase">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-[#5C554D] text-sm sm:text-base leading-relaxed [text-wrap:pretty]">
                    {pillar.description}
                  </p>

                  {/* Bullet points with checkmark */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#403A34]">
                    {pillar.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#7A5C45] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action button */}
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        if (pillar.id === 'pillar-1') onSelectProject('sculptural-dart');
                        else if (pillar.id === 'pillar-2') onSelectProject('icord-finish');
                        else if (pillar.id === 'pillar-3') onSelectProject('aran-cardigan');
                        else if (pillar.id === 'pillar-4') onSelectProject('yarn-color-mix');
                        else onOpenContact();
                      }}
                      className="px-6 py-3 text-xs md:text-sm font-semibold text-[#1F1D1A] bg-[#FAF8F5] border border-[#D5CDC2] rounded-full hover:bg-[#F2EDE4] active:scale-[0.98] transition-all flex items-center gap-2 shadow-2xs"
                    >
                      <span>연구 상세 기록 확인하기</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Media Container Block */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
                  }`}
                >
                  <div className="relative group p-3 bg-[#FAF8F5] rounded-3xl border border-[#E5DFD5] shadow-sm hover:shadow-lg transition-all">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#ECE7DE] relative">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 bg-[#1F1D1A]/80 backdrop-blur-xs text-[#FAF8F5] text-[10px] font-mono px-3 py-1 rounded-full">
                        Atelier Craft · {pillar.number}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
