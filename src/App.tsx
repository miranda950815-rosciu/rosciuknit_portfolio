import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoreDimensions } from './components/CoreDimensions';
import { ProjectsArchive } from './components/ProjectsArchive';
import { FeatureSpotlights } from './components/FeatureSpotlights';
import { EducationAndCredentials } from './components/EducationAndCredentials';
import { SkillsAndCharts } from './components/SkillsAndCharts';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { DesignSystemSummaryModal } from './components/DesignSystemSummaryModal';
import { PORTFOLIO_DATA } from './data/portfolioData';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isDesignSystemModalOpen, setIsDesignSystemModalOpen] = useState(false);

  const selectedProject = selectedProjectId
    ? PORTFOLIO_DATA.projects.find((p) => p.id === selectedProjectId) || null
    : null;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#24211E] font-sans selection:bg-[#E8DCCF] selection:text-[#1F1D1A]">
      {/* Top Header Contract */}
      <Header
        onOpenContact={() => setIsContactModalOpen(true)}
        onOpenDesignSystem={() => setIsDesignSystemModalOpen(true)}
      />

      <main>
        {/* Split Hero Section */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onOpenContact={() => setIsContactModalOpen(true)}
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        {/* Core Principles & Bento Highlight (Matching "What is included") */}
        <CoreDimensions
          onSelectProject={(id) => setSelectedProjectId(id)}
          onExploreProjects={() => scrollToSection('projects')}
        />

        {/* 3-Column Structured Showcase Grid (Matching "Main pages") */}
        <ProjectsArchive
          onSelectProject={(id) => setSelectedProjectId(id)}
          onOpenContact={() => setIsContactModalOpen(true)}
        />

        {/* 5 Alternating Zig-Zag Feature Spotlights (Matching "Template surprises") */}
        <FeatureSpotlights
          onSelectProject={(id) => setSelectedProjectId(id)}
          onOpenContact={() => setIsContactModalOpen(true)}
        />

        {/* Professional Training & Credentials (Matching "Utility pages") */}
        <EducationAndCredentials />

        {/* Skills Matrix & Progress Comparison Charts (Section 4 & Section 9) */}
        <SkillsAndCharts />

        {/* High-Impact Contact Banner & Action Modal */}
        <ContactSection
          isOpenModal={isContactModalOpen}
          onOpenModal={() => setIsContactModalOpen(true)}
          onCloseModal={() => setIsContactModalOpen(false)}
          onExploreProjects={() => scrollToSection('projects')}
        />
      </main>

      {/* Structured Footer */}
      <Footer
        onOpenDesignSystem={() => setIsDesignSystemModalOpen(true)}
        onOpenContact={() => setIsContactModalOpen(true)}
        onSelectProject={(id) => setSelectedProjectId(id)}
      />

      {/* Case Study Deep-Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
        onOpenContact={() => {
          setSelectedProjectId(null);
          setIsContactModalOpen(true);
        }}
      />

      {/* Design System Specifications Modal */}
      <DesignSystemSummaryModal
        isOpen={isDesignSystemModalOpen}
        onClose={() => setIsDesignSystemModalOpen(false)}
      />
    </div>
  );
}
