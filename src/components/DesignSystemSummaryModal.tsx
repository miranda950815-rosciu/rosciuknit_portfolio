import React, { useEffect } from 'react';
import { X, Sparkles, Layers, Palette, Type, Sliders, Monitor, Check } from 'lucide-react';

interface DesignSystemSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignSystemSummaryModal: React.FC<DesignSystemSummaryModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#D5CDC2] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#FAF8F5]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-[#EAE4DC] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[#1F1D1A] text-[#FAF8F5] flex items-center justify-center font-mono text-xs font-bold">
              DS
            </span>
            <div>
              <h2 className="font-serif font-bold text-lg text-[#1F1D1A]">
                참고한 설계 시스템 요약표 및 원본 대비 매핑 분석
              </h2>
              <p className="text-[11px] text-[#7A7369]">
                참고 사이트(Brandingfolio X) 설계 언어 재현 및 독자적 니트웨어 아틀리에 테마 변환 스펙
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#5C554D] hover:text-[#1F1D1A] hover:bg-[#EAE4DC] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 max-h-[80vh] overflow-y-auto space-y-8 text-xs sm:text-sm">
          {/* One-Line Summary Box (Deliverable 3) */}
          <div className="p-5 bg-[#1F1D1A] text-[#FAF8F5] rounded-2xl border border-[#38332E] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D5CDC2] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#D5CDC2]" />
              <span>원본 대비 변경점 한 줄 요약</span>
            </div>
            <p className="text-sm font-medium leading-relaxed text-[#FAF8F5]">
              “원작(Brandingfolio X)의 3단 그리드·지그재그 교차 피처·비대칭 분할 히어로 구조 패턴을 100% 계승하되, 
              IT 템플릿의 형광 옐로/블랙 색채와 산세리프 폰트를 따뜻한 캐시미어 뉴트럴 팔레트(알라바스터·오트밀·월넛)와 
              서정적인 에디토리얼 세리프(Fraunces) 및 정밀한 니트웨어 도안·기법 콘텐츠로 완전히 독자 재설계했습니다.”
            </p>
          </div>

          {/* Design System Specification Table (Deliverable 2) */}
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F1D1A] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#7A5C45]" />
              <span>설계 시스템 세부 요약표 (Design System Specifications)</span>
            </h3>

            {/* Table */}
            <div className="overflow-x-auto rounded-2xl border border-[#E5DFD5] bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F5F2EB] border-b border-[#E5DFD5] text-[#1F1D1A] font-semibold text-xs">
                    <th className="py-3 px-4 w-36">항목 (Category)</th>
                    <th className="py-3 px-4">규격 및 스펙 (Specifications)</th>
                    <th className="py-3 px-4">적용 의도 및 설계 원칙</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE4DC] text-xs">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-[#1F1D1A]">간격 스케일 (Spacing Scale)</td>
                    <td className="py-3 px-4 font-mono text-[#7A5C45]">
                      Container max: 1440px<br />
                      Section Y: py-20 (80px) ~ py-28 (112px)<br />
                      Grid Gap: gap-6 (24px) ~ gap-12 (48px)<br />
                      Card Padding: p-6 (24px) ~ p-8 (32px)<br />
                      Button Padding: px-6 py-3 (2:1 비율)
                    </td>
                    <td className="py-3 px-4 text-[#5C554D]">
                      광활한 여백을 통한 럭셔리 패션 매거진의 시각적 호흡감 확보 및 요소 간 위계 명확화
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3 px-4 font-semibold text-[#1F1D1A]">타이포 스케일 (Typography)</td>
                    <td className="py-3 px-4 font-mono text-[#7A5C45]">
                      Hero Display: clamp(2.25rem, 4vw, 3.5rem) Fraunces<br />
                      Section Title: 32px ~ 42px Bold<br />
                      Card Title: 18px ~ 22px Fraunces/Sans<br />
                      Body Text: 14px ~ 16px Plus Jakarta Sans (1.6-1.7 lh)<br />
                      Technical/Gauge: 11px ~ 12px JetBrains Mono
                    </td>
                    <td className="py-3 px-4 text-[#5C554D]">
                      우아하고 따뜻한 크래프트 감성의 Fraunces 세리프와 고가독성 기하학 산세리프의 조화
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3 px-4 font-semibold text-[#1F1D1A]">색상 팔레트 (60-30-10)</td>
                    <td className="py-3 px-4">
                      <div className="space-y-1">
                        <div><strong>60% 캔버스:</strong> #FAF8F5 (Alabaster Ivory), #F5F2EB (Oatmeal)</div>
                        <div><strong>30% 표면/보더:</strong> #FFFFFF (Pure White Card), #E5DFD5 (Hairline Border)</div>
                        <div><strong>10% 악센트:</strong> #1F1D1A (Espresso Charcoal), #7A5C45 (Hazelnut Tan)</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-[#5C554D]">
                      원작의 고채도 형광 노랑 대신 천연 울·린넨 섬유의 온화한 어스 톤(Earth Tone) 구축
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3 px-4 font-semibold text-[#1F1D1A]">인터랙션 스펙 (Interactions)</td>
                    <td className="py-3 px-4 font-mono text-[#7A5C45]">
                      Card Hover: translateY(-4px), shadow-xl, scale(1.05 img)<br />
                      Transition Duration: 200ms ~ 300ms<br />
                      Easing Curve: cubic-bezier(0.16, 1, 0.3, 1)<br />
                      Active Button: scale(0.98), active:opacity-95<br />
                      Compositor Only: transform & opacity 애니메이션
                    </td>
                    <td className="py-3 px-4 text-[#5C554D]">
                      레이아웃 흔들림 없는 즉각적이고 매끄러운 피드백 및 모달 기반 딥다이브 탐색
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3 px-4 font-semibold text-[#1F1D1A]">반응형 브레이크포인트 (Breakpoints)</td>
                    <td className="py-3 px-4 font-mono text-[#7A5C45]">
                      Mobile (sm: &lt; 640px): 1-column stack, sticky 모바일 바 15% 이하<br />
                      Tablet (md: 768px): 2-column cards, 4-column metric wrap<br />
                      Desktop (lg: 1024px ~ 1440px): 3-column grid, Split 6:6 Hero, 12-col bento
                    </td>
                    <td className="py-3 px-4 text-[#5C554D]">
                      어떤 해상도에서도 카드 잘림이나 글자 넘침 없이 정갈하게 유지되는 반응형 적응
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mapping Comparison Table */}
          <div className="space-y-4 pt-2">
            <h3 className="font-serif font-bold text-base sm:text-lg text-[#1F1D1A] flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#7A5C45]" />
              <span>원작 구조 패턴 vs 이슬비 포트폴리오 콘텐츠 1:1 매핑 표</span>
            </h3>

            <div className="overflow-x-auto rounded-2xl border border-[#E5DFD5] bg-white">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#F5F2EB] border-b border-[#E5DFD5] text-[#1F1D1A] font-semibold">
                    <th className="py-2.5 px-4 w-40">원작 섹션 (Reference)</th>
                    <th className="py-2.5 px-4">추출된 설계 언어 패턴</th>
                    <th className="py-2.5 px-4">포트폴리오 적용 구현 (Knitwear Portfolio)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE4DC]">
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#1F1D1A]">Hero Section</td>
                    <td className="py-2.5 px-4 text-[#5C554D]">비대칭 2단 분할 + 우측 썸네일 플로팅 콜라주 + 하단 4분할 지표</td>
                    <td className="py-2.5 px-4 text-[#1F1D1A] font-medium">
                      5년차 대바늘 소개 타이포그래피 + 늦여름 드레스/아란 가디건 카드 + 4개 핵심 지표 바
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#1F1D1A]">What is included</td>
                    <td className="py-2.5 px-4 text-[#5C554D]">상단 3카드 그리드 + 하단 2개의 대형 와이드 벤토 카드 + 중앙 CTA</td>
                    <td className="py-2.5 px-4 text-[#1F1D1A] font-medium">
                      3대 핵심 축 (5년 손땀, 다트/아이코드, 도안화) + 졸업작품 벤토 & 신작 아란 벤토 + CTA
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#1F1D1A]">Main pages (3열 그리드)</td>
                    <td className="py-2.5 px-4 text-[#5C554D]">상단 헤더 + 3열 모크업 프레임 카드 + 하단 레이블</td>
                    <td className="py-2.5 px-4 text-[#1F1D1A] font-medium">
                      필터 탭(완성작/진행중/기법) + 6종 작품 및 기술 아카이브 카드 + 클릭 시 상세 모달
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#1F1D1A]">Utility pages</td>
                    <td className="py-2.5 px-4 text-[#5C554D]">기능성 보조 페이지 2-3단 정갈한 카드 구성</td>
                    <td className="py-2.5 px-4 text-[#1F1D1A] font-medium">
                      바늘아카데미 3대 정규 전문과정 (이론, 탑다운, 31기) + 편물 기술 자격증 4종 그리드
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#1F1D1A]">5 Features (Surprises)</td>
                    <td className="py-2.5 px-4 text-[#5C554D]">5개의 번호 붙은 지그재그 교차(좌 텍스트/우 미디어) 레이아웃</td>
                    <td className="py-2.5 px-4 text-[#1F1D1A] font-medium">
                      5대 설계 철학 (01.입체 다트, 02.아이코드 마감, 03.재현 도안, 04.원사 믹스, 05.5년 축적)
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#1F1D1A]">Contact us today! Banner</td>
                    <td className="py-2.5 px-4 text-[#5C554D]">고대비 와이드 배너 + 우측 CTA 버튼 군</td>
                    <td className="py-2.5 px-4 text-[#1F1D1A] font-medium">
                      에스프레소 블랙 배너 + 원클릭 이메일 복사 + 실시간 협업 문의 폼 모달
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-semibold text-[#1F1D1A]">Footer</td>
                    <td className="py-2.5 px-4 text-[#5C554D]">4열 정보 구조 + 뉴스레터 인풋 + 카피라이트</td>
                    <td className="py-2.5 px-4 text-[#1F1D1A] font-medium">
                      디자이너 브랜드 소개 + 사이트 링크 + 신작 도안 알림 신청 + 연락처/노션 링크
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[#FAF8F5]/95 backdrop-blur-md px-6 sm:px-8 py-4 border-t border-[#EAE4DC] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold text-[#FAF8F5] bg-[#1F1D1A] rounded-full hover:bg-[#38332E] transition-colors"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
