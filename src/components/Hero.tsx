import React from 'react';
import { ArrowDown, Sparkles, Layers, BookOpen, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenContact: () => void;
  onSelectProject: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onOpenContact,
  onSelectProject,
}) => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="about" className="pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-[#EAE4DC]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Split Grid: Left Typography, Right Layered Visual Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            {/* Unboxed Kicker metadata */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-[#7A5C45]">
              <span className="font-mono text-[11px] bg-[#EAE4DC] px-2 py-0.5 rounded text-[#4A423A]">Atelier Portfolio</span>
              <span aria-hidden="true" className="text-[#C5BDB2]">·</span>
              <span>Knitwear & Pattern Drafting</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#1F1D1A] leading-[1.15] tracking-tight [text-wrap:balance]">
              실의 물성과 편물 구조를 탐구하는 니트 디자이너,{' '}
              <span className="text-[#7A5C45] italic font-normal">이슬비</span>입니다.
            </h1>

            {/* Description */}
            <p className="text-[#5C554D] text-base sm:text-lg leading-relaxed [text-wrap:pretty]">
              5년간 대바늘 뜨개를 지속하며 실과 편물의 고유한 특성을 탐구해 왔습니다. 
              체계적인 니팅 이론과 탑다운 방식을 바탕으로 입체 다트와 아이코드 등 정교한 기법을 연구하며, 
              신체 실루엣을 살리는 독창적인 니트웨어와 누구나 이해하고 따라 뜰 수 있는 정확한 도안을 설계합니다.
            </p>

            {/* Action Buttons (Matching reference CTA layout) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreProjects}
                className="px-7 py-3.5 text-sm font-semibold text-[#FAF8F5] bg-[#1F1D1A] rounded-full hover:bg-[#38332E] active:scale-[0.98] transition-all shadow-md flex items-center gap-2"
              >
                <span>주요 작품 보기</span>
                <ArrowDown className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 text-sm font-semibold text-[#1F1D1A] bg-[#FFFFFF] border border-[#D5CDC2] rounded-full hover:bg-[#F5F2EB] hover:border-[#BDB3A5] active:scale-[0.98] transition-all shadow-sm"
              >
                도안 및 협업 문의
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-[#EAE4DC] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#7A7369]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A5C45]" />
                <span className="font-medium text-[#2E2A25]">대바늘 뜨개 5년차</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A5C45]" />
                <span className="font-medium text-[#2E2A25]">바늘아카데미 31기 수료</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A5C45]" />
                <span className="font-medium text-[#2E2A25]">편물 기술 자격증 보유</span>
              </div>
            </div>
          </div>

          {/* Right Column (col-span-6): Floating Layered Showcase Grid */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[560px] lg:max-w-none">
              {/* Decorative Atelier Frame */}
              <div className="grid grid-cols-2 gap-4">
                {/* Visual Card 1: Late Summer Knit Dress */}
                <div
                  onClick={() => onSelectProject('late-summer-dress')}
                  className="group relative bg-[#FFFFFF] p-2.5 rounded-2xl shadow-md border border-[#E5DFD5] hover:shadow-xl hover:border-[#C8BFB2] transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#ECE7DE]">
                    <img
                      src="/src/assets/images/knitwear_hero_dress_1793101164739.jpg"
                      alt="늦여름의 니트 드레스"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] font-semibold text-[#1F1D1A]">
                      2026 졸업작품
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-serif font-bold text-sm text-[#1F1D1A] group-hover:text-[#7A5C45] transition-colors">
                      늦여름의 니트 드레스
                    </h3>
                    <p className="text-[11px] text-[#7A7369] mt-0.5">다트 & 아이코드 기법</p>
                  </div>
                </div>

                {/* Visual Card 2: Asymmetric Aran Cardigan */}
                <div
                  onClick={() => onSelectProject('aran-cardigan')}
                  className="group relative bg-[#FFFFFF] p-2.5 rounded-2xl shadow-md border border-[#E5DFD5] hover:shadow-xl hover:border-[#C8BFB2] transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1 mt-6"
                >
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#ECE7DE]">
                    <img
                      src="/src/assets/images/knitwear_aran_cardigan_1793101204676.jpg"
                      alt="비대칭 하이넥 아란 가디건"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#1F1D1A]/85 text-[#FAF8F5] px-2.5 py-1 rounded text-[10px] font-semibold">
                      도안 개발 중
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-serif font-bold text-sm text-[#1F1D1A] group-hover:text-[#7A5C45] transition-colors">
                      비대칭 하이넥 아란 가디건
                    </h3>
                    <p className="text-[11px] text-[#7A7369] mt-0.5">케이블 조직 & 비대칭 여밈</p>
                  </div>
                </div>
              </div>

              {/* Floating Gauge & Swatch Badge */}
              <div className="absolute -bottom-4 -left-4 sm:left-4 bg-[#FAF8F5]/95 backdrop-blur-md border border-[#DCD5C9] shadow-lg rounded-xl p-3 max-w-[240px] hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#E2DBD0] shrink-0">
                  <img
                    src="/src/assets/images/knitwear_swatch_blueprint_1793101204043.jpg"
                    alt="게이지 스와치"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-mono tracking-wider text-[#8A8177]">Gauge Verification</span>
                  <span className="text-xs font-bold text-[#1F1D1A]">18 sts × 24 rows</span>
                  <span className="block text-[10px] text-[#5C554D]">표준 게이지 검증 완료</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Metrics Strip (Below the Split Hero) */}
        <div className="mt-16 pt-10 border-t border-[#EAE4DC] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-1">
            <span className="font-mono text-3xl md:text-4xl font-bold text-[#1F1D1A] tabular-nums">5년</span>
            <p className="text-xs font-semibold text-[#7A5C45] uppercase tracking-wider">대바늘 뜨개 실무</p>
            <p className="text-xs text-[#7A7369]">수천 시간 축적된 균일한 손땀과 편물 텐션 조절</p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-3xl md:text-4xl font-bold text-[#1F1D1A] tabular-nums">31기</span>
            <p className="text-xs font-semibold text-[#7A5C45] uppercase tracking-wider">바늘아카데미 디자이너</p>
            <p className="text-xs text-[#7A7369]">대바늘 이론·탑다운·강사·디자이너 전문과정 수료</p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-3xl md:text-4xl font-bold text-[#1F1D1A] tabular-nums">10종+</span>
            <p className="text-xs font-semibold text-[#7A5C45] uppercase tracking-wider">체계적 편물 기법</p>
            <p className="text-xs text-[#7A7369]">입체 다트, 아이코드, 경사뜨기, 복합 아란 케이블</p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-3xl md:text-4xl font-bold text-[#1F1D1A] tabular-nums">100%</span>
            <p className="text-xs font-semibold text-[#7A5C45] uppercase tracking-wider">도안 재현성 추구</p>
            <p className="text-xs text-[#7A7369]">누구나 따라 뜰 수 있는 명확한 기호 도안 및 검증</p>
          </div>
        </div>
      </div>
    </section>
  );
};
