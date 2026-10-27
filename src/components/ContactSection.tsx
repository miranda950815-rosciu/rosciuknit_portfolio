import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Copy, Check, Send, Sparkles, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  isOpenModal: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
  onExploreProjects: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  isOpenModal,
  onOpenModal,
  onCloseModal,
  onExploreProjects,
}) => {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '도안 개발',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', category: '도안 개발', message: '' });
    onCloseModal();
  };

  return (
    <>
      {/* High-Impact Contact Banner (Matching "Contact us today!" banner in reference) */}
      <section id="contact" className="py-20 md:py-28 bg-[#FAF8F5]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="relative rounded-3xl overflow-hidden bg-[#1F1D1A] text-[#FAF8F5] p-8 sm:p-12 md:p-16 shadow-xl border border-[#38332E]">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#7A5C45]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Heading and info */}
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D5CDC2]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5BDB2]" />
                  <span>Collaboration & Inquiries</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-white leading-tight">
                  새로운 니트웨어 프로젝트나 도안 개발을 계획 중이신가요?
                </h2>
                <p className="text-[#C5BDB2] text-sm sm:text-base leading-relaxed max-w-2xl">
                  독창적인 실루엣의 니트웨어 디자인, 누구나 따라 뜰 수 있는 체계적인 도안 개발, 
                  샘플 편직 및 협업 제안을 언제나 환영합니다.
                </p>

                {/* Direct Contact Pills */}
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2E2A25] hover:bg-[#3E3832] transition-colors text-[#FAF8F5] border border-[#4A423A]"
                  >
                    <Mail className="w-4 h-4 text-[#C5BDB2]" />
                    <span>{profile.contact.email}</span>
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-[#8A8177] ml-1" />
                    )}
                  </button>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2E2A25] text-[#FAF8F5] border border-[#4A423A]">
                    <Phone className="w-4 h-4 text-[#C5BDB2]" />
                    <span>{profile.contact.phone}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: CTA Buttons */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <button
                  onClick={onOpenModal}
                  className="px-8 py-4 text-sm font-semibold text-[#1F1D1A] bg-[#FAF8F5] rounded-full hover:bg-white active:scale-[0.98] transition-all shadow-md text-center"
                >
                  문의 메시지 보내기
                </button>
                <button
                  onClick={onExploreProjects}
                  className="px-8 py-4 text-sm font-semibold text-[#FAF8F5] bg-transparent border border-[#5C554D] rounded-full hover:bg-[#2E2A25] active:scale-[0.98] transition-all text-center"
                >
                  프로젝트 둘러보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Modal */}
      {isOpenModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div
            className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#D5CDC2] overflow-hidden p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE4DC]">
              <div>
                <h3 className="font-serif font-bold text-xl text-[#1F1D1A]">
                  도안 및 협업 문의하기
                </h3>
                <p className="text-xs text-[#7A7369] mt-0.5">
                  디자이너 이슬비에게 메시지를 전달합니다.
                </p>
              </div>
              <button
                onClick={onCloseModal}
                className="p-1.5 text-[#5C554D] hover:text-[#1F1D1A] hover:bg-[#EAE4DC] rounded-full transition-colors"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#1F1D1A]">
                  문의가 성공적으로 전달되었습니다!
                </h4>
                <p className="text-xs text-[#5C554D] max-w-xs mx-auto leading-relaxed">
                  작성해 주신 연락처({formData.email})로 확인 후 신속히 회신드리겠습니다. 감사합니다.
                </p>
                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 text-xs font-semibold text-[#FAF8F5] bg-[#1F1D1A] rounded-full hover:bg-[#38332E] transition-colors"
                  >
                    확인 및 창 닫기
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1F1D1A] mb-1">
                    성함 또는 기업/브랜드명 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="예: 홍길동 (또는 아틀리에/브랜드명)"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#D5CDC2] bg-white focus:outline-none focus:ring-1 focus:ring-[#1F1D1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F1D1A] mb-1">
                    회신받으실 이메일 주소 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@domain.com"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#D5CDC2] bg-white focus:outline-none focus:ring-1 focus:ring-[#1F1D1A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F1D1A] mb-1">
                    협업 및 문의 분야
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#D5CDC2] bg-white focus:outline-none focus:ring-1 focus:ring-[#1F1D1A]"
                  >
                    <option value="도안 개발">니팅 도안 및 패턴 개발</option>
                    <option value="니트웨어 디자인">니트웨어 제품/의류 디자인</option>
                    <option value="샘플 편직 및 검증">샘플 편직 및 게이지/물성 검증</option>
                    <option value="니팅 클래스/콘텐츠">워크숍, 강의 및 니팅 콘텐츠 제작</option>
                    <option value="기타 제안">기타 제안 및 문의</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F1D1A] mb-1">
                    문의 내용 <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="프로젝트 일정, 제작 수량, 구상 중인 아이디어 등을 자유롭게 남겨주세요."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#D5CDC2] bg-white focus:outline-none focus:ring-1 focus:ring-[#1F1D1A] resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onCloseModal}
                    className="px-4 py-2 text-xs font-semibold text-[#5C554D] hover:text-[#1F1D1A] transition-colors"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold text-[#FAF8F5] bg-[#1F1D1A] rounded-full hover:bg-[#38332E] transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <span>문의 전송하기</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
