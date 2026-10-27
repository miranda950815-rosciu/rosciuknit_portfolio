import React, { useState } from 'react';
import { Mail, ArrowUpRight, Sparkles, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenDesignSystem: () => void;
  onOpenContact: () => void;
  onSelectProject: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDesignSystem,
  onOpenContact,
  onSelectProject,
}) => {
  const { profile } = PORTFOLIO_DATA;
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribedEmail) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#191715] text-[#DCD5C9] pt-16 pb-12 border-t border-[#2E2A25]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#FAF8F5] text-[#191715] flex items-center justify-center font-serif text-sm font-semibold">
                이
              </span>
              <div>
                <span className="font-serif font-bold text-lg text-white block">
                  이슬비
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#8A8177] block -mt-0.5">
                  Knitwear & Pattern Design
                </span>
              </div>
            </div>
            <p className="text-xs text-[#A8A096] leading-relaxed max-w-sm">
              5년간 대바늘 뜨개를 통해 실과 편물의 본질을 탐구하고, 
              체계적인 탑다운 이론과 입체 조형 기법으로 누구나 완성할 수 있는 니팅 도안을 설계합니다.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenDesignSystem}
                className="inline-flex items-center gap-1.5 text-xs text-[#C5BDB2] hover:text-white bg-[#262320] px-3 py-1.5 rounded-lg border border-[#38332E] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>참고한 설계 시스템 요약표 보기</span>
              </button>
            </div>
          </div>

          {/* Quick Nav Links (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A096]">
              <li><a href="#about" className="hover:text-white transition-colors">소개 (About)</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">작품 아카이브 (Works)</a></li>
              <li><a href="#philosophy" className="hover:text-white transition-colors">설계 철학 (Philosophy)</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">전문 교육 (Education)</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">기술 매트릭스 (Skills)</a></li>
            </ul>
          </div>

          {/* Projects Archive Links (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Featured Works
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A096]">
              <li>
                <button
                  onClick={() => onSelectProject('late-summer-dress')}
                  className="hover:text-white text-left transition-colors"
                >
                  늦여름의 니트 드레스 (졸업작품)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectProject('aran-cardigan')}
                  className="hover:text-white text-left transition-colors"
                >
                  비대칭 하이넥 아란 가디건 (신작 도안)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectProject('sculptural-dart')}
                  className="hover:text-white text-left transition-colors"
                >
                  입체 다트(Dart) 실루엣 연구
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectProject('icord-finish')}
                  className="hover:text-white text-left transition-colors"
                >
                  아이코드(I-Cord) 엣지 피니싱 기법
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Pattern Updates (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Pattern Release News
            </h4>
            <p className="text-xs text-[#A8A096] leading-relaxed">
              새로운 니팅 도안 발행 및 테스트 니팅 참가자 모집 소식을 전해드립니다.
            </p>
            {subscribed ? (
              <div className="p-3 bg-[#262320] border border-[#38332E] rounded-xl text-xs text-[#DCD5C9] flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>도안 소식 알림 신청이 완료되었습니다.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={subscribedEmail}
                    onChange={(e) => setSubscribedEmail(e.target.value)}
                    placeholder="이메일 입력"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#262320] border border-[#38332E] text-white focus:outline-none focus:border-[#C5BDB2]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold bg-[#FAF8F5] text-[#191715] rounded-xl hover:bg-white shrink-0 transition-colors"
                  >
                    신청
                  </button>
                </div>
              </form>
            )}
            <div className="pt-2 text-[11px] text-[#8A8177]">
              <span>문의: {profile.contact.email} · {profile.contact.phone}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-[#2E2A25] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7369]">
          <p>© 2026 이슬비 (Lee Seul-bi). Handcrafted Knitwear & Pattern Drafting Atelier.</p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenContact} className="hover:text-white transition-colors">
              협업 제안
            </button>
            <a
              href={profile.contact.notion}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Notion Portfolio</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
