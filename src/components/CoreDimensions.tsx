import React from 'react';
import { ArrowRight, Compass, Scissors, FileText, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CoreDimensionsProps {
  onSelectProject: (id: string) => void;
  onExploreProjects: () => void;
}

export const CoreDimensions: React.FC<CoreDimensionsProps> = ({
  onSelectProject,
  onExploreProjects,
}) => {
  return (
    <section id="philosophy" className="py-20 md:py-28 bg-[#F5F2EB] border-b border-[#EAE4DC]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header (Centered in Reference Style) */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#7A5C45]">
            <span className="font-mono text-[11px] bg-[#EAE4DC] px-2 py-0.5 rounded text-[#4A423A]">Core Principles</span>
            <span aria-hidden="true" className="text-[#C5BDB2]">·</span>
            <span>Design Methodology</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-bold text-[#1F1D1A] tracking-tight [text-wrap:balance]">
            니트웨어 디자인과 도안 개발의 3가지 핵심 축
          </h2>
          <p className="text-[#5C554D] text-base leading-relaxed [text-wrap:pretty]">
            단순한 평면 편물을 넘어, 인체 곡선에 순응하는 입체 조형미와 
            누구나 이해하고 재현할 수 있는 체계적인 패턴 공학을 함께 추구합니다.
          </p>
        </div>

        {/* 3-Column Cards Grid (Matching the 3 top cards in Brandingfolio X) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Handknitting Mastery */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5DFD5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#EFEAE2] relative group">
                <img
                  src="/src/assets/images/knitwear_designer_portrait_1793101166704.jpg"
                  alt="대바늘 니팅 5년"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#1F1D1A]/85 text-[#FAF8F5] text-[10px] font-mono px-2 py-0.5 rounded">
                  Craft · 5 Years
                </div>
              </div>
              <div>
                <span className="font-mono text-2xl font-bold text-[#1F1D1A]">5년의 대바늘 축적</span>
                <h3 className="font-serif font-bold text-lg text-[#1F1D1A] mt-1">균일한 손땀과 텐션의 통제</h3>
                <p className="text-xs text-[#6B645B] mt-2 leading-relaxed">
                  수천 시간의 편직 경험으로 원사의 신축성과 세탁 후 게이지 변화를 직관적으로 예측하며 안정적인 편물 퀄리티를 유지합니다.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-[#F0EBE3] flex items-center justify-between text-xs font-semibold text-[#7A5C45]">
              <span>대바늘 실무 5년차</span>
              <span className="font-mono text-[11px]">100% Handknit</span>
            </div>
          </div>

          {/* Card 2: Dart & I-Cord Precision */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5DFD5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#EFEAE2] relative group">
                <img
                  src="/src/assets/images/knitwear_craft_detail_1793101167046.jpg"
                  alt="입체 다트와 아이코드"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#7A5C45] text-[#FAF8F5] text-[10px] font-mono px-2 py-0.5 rounded">
                  Structure & Detail
                </div>
              </div>
              <div>
                <span className="font-mono text-2xl font-bold text-[#1F1D1A]">입체 다트 & 아이코드</span>
                <h3 className="font-serif font-bold text-lg text-[#1F1D1A] mt-1">인체 곡선에 맞춘 조형 설계</h3>
                <p className="text-xs text-[#6B645B] mt-2 leading-relaxed">
                  평면의 편물에 자연스러운 굴곡을 불어넣는 입체 다트와, 끝말림 없이 견고하게 정돈되는 아이코드 마감으로 완성도를 극대화합니다.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-[#F0EBE3] flex items-center justify-between text-xs font-semibold text-[#7A5C45]">
              <span>핵심 기법 2종+ 융합</span>
              <span className="font-mono text-[11px]">Seamless Fit</span>
            </div>
          </div>

          {/* Card 3: Systematic Pattern Drafting */}
          <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E5DFD5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#EFEAE2] relative group">
                <img
                  src="/src/assets/images/knitwear_swatch_blueprint_1793101204043.jpg"
                  alt="체계적 니팅 도안"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#1F1D1A]/85 text-[#FAF8F5] text-[10px] font-mono px-2 py-0.5 rounded">
                  Pattern Blueprint
                </div>
              </div>
              <div>
                <span className="font-mono text-2xl font-bold text-[#1F1D1A]">체계적 니팅 도안화</span>
                <h3 className="font-serif font-bold text-lg text-[#1F1D1A] mt-1">누구나 따라 뜰 수 있는 표준화</h3>
                <p className="text-xs text-[#6B645B] mt-2 leading-relaxed">
                  표준 기호 차트와 상세한 텍스트 가이드, 다중 사이즈 그레이딩을 통해 디자이너의 작품을 모든 니터가 온전히 재현할 수 있도록 돕습니다.
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-[#F0EBE3] flex items-center justify-between text-xs font-semibold text-[#7A5C45]">
              <span>도안 개발 프로젝트 진행</span>
              <span className="font-mono text-[11px]">Grading & Charts</span>
            </div>
          </div>
        </div>

        {/* 2 Wide Bento Feature Blocks (Matching the wide Bento cards in Brandingfolio X) */}
        <div className="space-y-6 mb-12">
          {/* Bento 1: Late Summer Knit Dress (Left text, Right image) */}
          <div className="bg-[#FFFFFF] rounded-3xl p-8 md:p-12 border border-[#E5DFD5] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#7A5C45] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#7A5C45]" />
                <span>Featured Masterpiece · 졸업작품</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1D1A] leading-tight">
                늦여름의 니트 드레스: 계절의 감성과 입체 조형의 완성
              </h3>
              <p className="text-[#5C554D] text-sm leading-relaxed">
                늦여름 특유의 따뜻함과 차분함을 올리브와 오커 톤의 린넨·울·실크 혼방사로 표현했습니다. 
                신체 굴곡을 따라 자연스럽게 안착되는 입체 다트와 말림 현상을 차단한 정교한 아이코드 엣지 마감으로, 
                대바늘 의류의 조형적 한계를 극복하고 완성도 높은 실루엣을 구현했습니다.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EAE4DC]">
                  <span className="text-[#8A8177] block text-[11px]">적용 기법</span>
                  <span className="font-semibold text-[#1F1D1A]">입체 다트 & 아이코드</span>
                </div>
                <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EAE4DC]">
                  <span className="text-[#8A8177] block text-[11px]">주요 성과</span>
                  <span className="font-semibold text-[#1F1D1A]">강사·디자이너 31기 졸업작품</span>
                </div>
              </div>
              <div>
                <button
                  onClick={() => onSelectProject('late-summer-dress')}
                  className="px-6 py-3 text-xs md:text-sm font-semibold text-[#FAF8F5] bg-[#1F1D1A] rounded-full hover:bg-[#38332E] active:scale-[0.98] transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>작품 상세 분석 & 도안 기록 보기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div
                onClick={() => onSelectProject('late-summer-dress')}
                className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#ECE7DE] cursor-pointer group relative shadow-md"
              >
                <img
                  src="/src/assets/images/knitwear_hero_dress_1793101164739.jpg"
                  alt="늦여름의 니트 드레스"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-xs font-semibold">클릭하여 프로젝트 케이스 스터디 열기 →</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento 2: Asymmetric Aran Cardigan (Left image, Right text) */}
          <div className="bg-[#FFFFFF] rounded-3xl p-8 md:p-12 border border-[#E5DFD5] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div
                onClick={() => onSelectProject('aran-cardigan')}
                className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#ECE7DE] cursor-pointer group relative shadow-md"
              >
                <img
                  src="/src/assets/images/knitwear_aran_cardigan_1793101204676.jpg"
                  alt="비대칭 하이넥 아란 가디건"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-xs font-semibold">클릭하여 도안 및 샘플링 스터디 열기 →</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#7A5C45] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#7A5C45]" />
                <span>Pattern In Progress · 도안 개발 프로젝트</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1D1A] leading-tight">
                비대칭 하이넥 아란 가디건: 케이블 조직의 현대적 변주
              </h3>
              <p className="text-[#5C554D] text-sm leading-relaxed">
                전통적인 아란 조직의 입체감에 사선으로 흐르는 비대칭 여밈과 목선을 감싸는 하이넥을 결합했습니다. 
                복잡한 케이블 조직의 두께감과 비대칭 앞판의 밸런스를 고려하여 편물의 하중을 분산시키고, 
                단계별 체크리스트와 기호 차트로 구성된 재현 가능한 도안을 개발하고 있습니다.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
                <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EAE4DC]">
                  <span className="text-[#8A8177] block text-[11px]">핵심 구조</span>
                  <span className="font-semibold text-[#1F1D1A]">아란 케이블 + 비대칭 여밈</span>
                </div>
                <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#EAE4DC]">
                  <span className="text-[#8A8177] block text-[11px]">개발 단계</span>
                  <span className="font-semibold text-[#1F1D1A]">1차 도안 & 샘플링 검증 중</span>
                </div>
              </div>
              <div>
                <button
                  onClick={() => onSelectProject('aran-cardigan')}
                  className="px-6 py-3 text-xs md:text-sm font-semibold text-[#1F1D1A] bg-[#FAF8F5] border border-[#D5CDC2] rounded-full hover:bg-[#F2EDE4] active:scale-[0.98] transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>도안 기획 및 게이지 분석 보기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Centered CTA Button matching reference layout */}
        <div className="text-center pt-4">
          <button
            onClick={onExploreProjects}
            className="px-8 py-4 text-sm font-semibold text-[#FAF8F5] bg-[#1F1D1A] rounded-full hover:bg-[#38332E] active:scale-[0.98] transition-all shadow-md inline-flex items-center gap-2"
          >
            <span>전체 포트폴리오 아카이브 탐색하기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
