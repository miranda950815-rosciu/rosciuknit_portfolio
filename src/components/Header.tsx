import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
  onOpenDesignSystem: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact, onOpenDesignSystem }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '소개', href: '#about' },
    { label: '프로젝트', href: '#projects' },
    { label: '설계 철학', href: '#philosophy' },
    { label: '전문 교육', href: '#education' },
    { label: '기술 매트릭스', href: '#skills' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE4DC] transition-colors">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <span className="w-8 h-8 rounded-full bg-[#1F1D1A] text-[#FAF8F5] flex items-center justify-center font-serif text-sm font-semibold tracking-tighter">
            이
          </span>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg md:text-xl text-[#1F1D1A] tracking-tight group-hover:text-[#7A5C45] transition-colors whitespace-nowrap">
              이슬비
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#8A8177] font-medium -mt-1 hidden sm:block whitespace-nowrap">
              Knitwear & Pattern
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (single-line, clean text links) */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#5C554D]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#1F1D1A] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1F1D1A] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenDesignSystem}
            className="flex items-center gap-1.5 text-xs text-[#7A5C45] hover:text-[#1F1D1A] font-semibold bg-[#F2EDE4] hover:bg-[#EAE4DC] px-2.5 py-1 rounded transition-colors whitespace-nowrap shrink-0"
            title="참고한 설계 시스템 요약표 보기"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>설계 시스템 요약표</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 text-xs md:text-sm font-semibold text-[#FAF8F5] bg-[#1F1D1A] rounded-full hover:bg-[#38332E] active:scale-[0.98] transition-all duration-200 whitespace-nowrap shadow-sm flex items-center gap-1.5"
          >
            <span>도안 & 협업 문의</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#5C554D] hover:text-[#1F1D1A] rounded-lg hover:bg-[#F2EDE4] transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#EAE4DC] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#24211E] hover:text-[#7A5C45] py-2 border-b border-[#F0EAE1]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDesignSystem();
              }}
              className="text-left text-sm font-semibold text-[#7A5C45] py-2 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>설계 시스템 요약표 확인</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
