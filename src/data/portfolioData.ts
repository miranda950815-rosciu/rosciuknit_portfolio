export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'finished' | 'in_progress' | 'technique';
  categoryLabel: string;
  type: string;
  period: string;
  theme?: string;
  concept?: string;
  role: string;
  status: '제작 완료' | '도안 제작 진행 중' | '연구 및 검증 완료';
  statusBadge: string;
  image: string;
  aspectRatio?: string;
  keywords: string[];
  summary: string;
  metrics: { label: string; value: string }[];
  background: string;
  purpose: string;
  goals: string[];
  roleDetails: string[];
  problems: string[];
  solutions: string[];
  takeaways: string[];
  technicalSpecs?: {
    yarn?: string;
    needles?: string;
    gauge?: string;
    techniques?: string[];
  };
}

export interface SkillItem {
  name: string;
  category: '기법' | '설계' | '소재/분석' | '도안/문서화';
  rating: number; // 1 to 5
  description: string;
  focus: string;
}

export interface EducationItem {
  id: string;
  type: '전문 교육' | '실무 경험';
  institution: string;
  course: string;
  period: string;
  status: string;
  description: string;
  details: string[];
}

export interface CertificationItem {
  name: string;
  date: string;
  organization: string;
  badge: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: '이슬비',
    nameEn: 'Lee Seul-bi',
    title: '니트 디자이너 (Knitwear Designer)',
    titleEn: 'Knitwear & Knitting Pattern Designer',
    experienceYears: '5년차 대바늘 뜨개 · 1년차 니팅 도안 개발',
    avatar: '/src/assets/images/knitwear_designer_portrait_1793101166704.jpg',
    specialties: ['대바늘 니팅', '니트웨어 디자인', '니팅 도안 제작', '탑다운 설계', '입체 다트 & 아이코드'],
    interestAreas: ['아란 니트', '구조적인 실루엣', '독창적인 디테일', '니팅 패턴 개발'],
    collaborationAreas: ['니트웨어 디자인', '니팅 도안 개발', '샘플 제작 및 검증', '니팅 콘텐츠 제작'],
    contact: {
      email: 'lsb8208@naver.com',
      phone: '010-3808-8206',
      notion: 'https://notion.so/portfolio-leeseulbi',
      location: '대한민국 서울',
    },
    bio: '5년간 대바늘 뜨개를 지속하며 실과 편물의 특성을 탐구하고, 나만의 디자인을 구현해 온 니트 디자이너 이슬비입니다. 1년간 개인 프로젝트를 통해 니팅 도안을 제작하며 아이디어를 실제 편물로 구현하는 역량을 키우고 있습니다. 다양한 색상과 소재의 실, 다트와 아이코드 등 여러 기법을 활용해 실루엣과 디테일이 돋보이는 니트웨어를 디자인합니다. 체계적인 니팅 이론과 탑다운 제작 방식을 바탕으로 디자인의 완성도와 실용성을 함께 추구하며, 독창적인 디자인을 누구나 이해하고 따라 뜰 수 있는 도안으로 발전시키는 것을 목표로 합니다.',
    shortBio: '실과 편물의 구조적 특성을 탐구하며, 독창적인 실루엣과 누구나 쉽게 뜰 수 있는 체계적인 니팅 도안을 만듭니다.',
  },

  projects: [
    {
      id: 'late-summer-dress',
      title: '늦여름의 니트 드레스',
      subtitle: '계절감의 정취와 입체적 다트 실루엣을 담은 졸업작품',
      category: 'finished',
      categoryLabel: '완성작 (졸업작품)',
      type: '강사·디자이너 과정 졸업작품',
      period: '2026/06/01 – 2026/09/30',
      theme: '늦여름 (Late Summer)',
      role: '콘셉트 기획, 니트웨어 디자인, 편물 제작 전 과정',
      status: '제작 완료',
      statusBadge: '완성작 · 졸업작품 1점',
      image: '/src/assets/images/knitwear_hero_dress_1793101164739.jpg',
      keywords: ['니트 드레스', '계절감', '컬러 믹스', '소재 실험', '입체적 실루엣', '다트', '아이코드'],
      summary: '여름의 따스한 온기와 계절의 차분한 감성이 교차하는 늦여름의 뉘앙스를 올리브와 오커 톤의 천연 혼방사로 표현하고, 다트와 아이코드로 인체 실루엣을 입체적으로 구현한 드레스입니다.',
      metrics: [
        { label: '완성 성과', value: '졸업작품 1점 완성' },
        { label: '핵심 기법', value: '2종 이상 (다트, 아이코드)' },
        { label: '소재 연구', value: '린넨·울·실크 혼방사' },
        { label: '제작 기간', value: '4개월 집중 기획/제작' },
      ],
      background: '늦여름은 여름의 따뜻한 분위기와 계절이 바뀌기 직전의 차분한 감성이 공존하는 시기입니다. 이 계절의 분위기를 니트웨어로 표현하기 위해 색상과 소재의 조화를 중심으로 디자인을 기획했습니다. 니트는 실의 종류와 편물 조직에 따라 표면감과 드레이프가 달라지므로 소재 선택이 작품의 전체적인 인상을 결정합니다. 단순한 직선 형태의 니트웨어에서 벗어나 신체의 형태를 고려한 입체적인 실루엣을 구현하고자 했습니다.',
      purpose: '늦여름의 색감과 분위기를 다양한 원사 및 대바늘 기법으로 표현하고, 입체적인 실루엣을 가진 니트 드레스를 제작합니다.',
      goals: [
        '늦여름의 분위기를 반영한 독창적인 드레스 실루엣 구현',
        '서로 다른 색상과 소재의 실을 활용한 시각적 질감 표현',
        '다트와 아이코드 등 고급 기법을 활용한 형태 및 디테일 개발',
        '디자인 콘셉트부터 실제 완성작 제작까지 전 과정 주도적 완수',
      ],
      roleDetails: [
        '늦여름이라는 주제를 중심으로 작품의 디자인 방향과 전체적인 분위기 설정',
        '콘셉트에 어울리는 색상과 소재의 실을 탐색하고 최적의 혼방 조합 테스트',
        '신체 곡선과 착용 형태를 고려하여 다트의 위치와 각도 설계',
        '아이코드 기법을 적용해 밑단과 넥라인의 말림 없는 견고한 마감 완성',
        '제작 과정에서 편물의 드레이프와 텐션을 지속적으로 모니터링하여 최종 작품 완성',
      ],
      problems: [
        '니트 드레스는 편물의 신축성과 무게로 인해 아래로 처지거나 형태가 무너질 위험이 큼',
        '서로 다른 소재와 색상의 실을 조합할 때 텍스처와 수축률 차이로 균형을 맞추기 어려움',
        '평면 편물을 인체에 안착되는 입체적 실루엣으로 구현할 때 곡선 처리가 까다로움',
        '다트 기법 적용 시 불필요한 주름이나 어색한 각도가 생기지 않도록 정밀 계산 필요',
      ],
      solutions: [
        '사용할 실의 색상과 소재 특성을 다각도로 테스트하여 게이지와 드레이프 안정성 확보',
        '편물의 중량감을 고려하여 허리선과 스커트 라인의 실루엣을 세밀하게 분할 설계',
        '다트 기법을 계산적으로 적용하여 가슴과 허리 라인에 자연스러운 입체감 부여',
        '가장자리에 아이코드를 적용하여 말림 현상을 방지하고 고급스러운 엣지 디테일 구축',
        '샘플 단계별 착용 테스트를 통해 디자인 의도가 결과물에 충실히 반영되도록 보정',
      ],
      takeaways: [
        '니트 디자인은 단순한 심미적 선택을 넘어 편물의 물성과 중력을 계산하는 구조 공학임을 체득',
        '다트와 아이코드 같은 기법의 원리를 깊이 이해하고 적재적소에 배치했을 때 작품의 완성도가 극대화됨',
        '콘셉트 도출부터 원사 믹스, 샘플링, 완성에 이르는 전 과정을 성공적으로 완수하며 실무 디자이너로서의 자신감 확보',
      ],
      technicalSpecs: {
        yarn: '내추럴 올리브 & 골든 오커 천연 울/린넨 블렌드',
        needles: '대바늘 3.5mm ~ 4.0mm 조립식 원형바늘',
        gauge: '21 sts × 29 rows (10cm × 10cm 메리야스 편물)',
        techniques: ['탑다운 방식', '입체 다트(Dart)', '아이코드(I-Cord) 엣지', '원사 믹싱'],
      },
    },

    {
      id: 'aran-cardigan',
      title: '비대칭 하이넥 아란 가디건',
      subtitle: '구조적인 아란 케이블 조직과 비대칭 여밈의 현대적 재해석',
      category: 'in_progress',
      categoryLabel: '도안 개발 프로젝트',
      type: '개인 디자인 및 니팅 도안 개발 프로젝트',
      period: '2026/10/01 – 진행 중',
      concept: '구조적인 아란 조직과 비대칭 여밈의 조화',
      role: '디자인 기획, 니트웨어 설계, 니팅 도안 작성 및 샘플링',
      status: '도안 제작 진행 중',
      statusBadge: '신작 도안 개발 중',
      image: '/src/assets/images/knitwear_aran_cardigan_1793101204676.jpg',
      keywords: ['아란 니트', '케이블 조직', '비대칭 여밈', '하이넥 가디건', '니팅 도안', '게이지', '편물 검증'],
      summary: '전통적인 아란 니트의 풍부한 케이블 조직에 대담한 사선 비대칭 여밈과 목선을 우아하게 감싸는 하이넥을 결합하여, 현대적인 건축적 실루엣을 지닌 가디건과 초보자도 뜰 수 있는 도안을 개발 중입니다.',
      metrics: [
        { label: '개발 현황', value: '디자인 및 도안 1건 진행 중' },
        { label: '핵심 요소', value: '3종 적용 (비대칭, 하이넥, 케이블)' },
        { label: '도안 규격', value: 'XS - XL 다중 사이즈 그레이딩' },
        { label: '검증 단계', value: '게이지 및 1차 샘플링 완료' },
      ],
      background: '아란 니트는 입체적인 케이블 조직과 풍부한 표면감이 특징인 니트웨어입니다. 전통적인 아란 조직의 매력을 유지하면서 현대적인 디자인 요소를 더하면 새로운 스타일을 제안할 수 있습니다. 이번 프로젝트에서는 비대칭 여밈을 디자인의 핵심 요소로 설정해 일반적인 가디건과 차별화하고자 했습니다. 하이넥 디자인을 함께 적용해 목선을 감싸는 구조적인 실루엣을 구상했습니다.',
      purpose: '아란 조직, 비대칭 여밈, 하이넥을 결합한 독창적인 가디건을 디자인하고 실제 제작이 가능한 니팅 도안을 개발합니다.',
      goals: [
        '비대칭 여밈을 중심으로 한 차별화된 현대적 니트웨어 실루엣 구현',
        '아란 조직의 밀도와 하이넥 칼라의 편안한 착용감 간의 균형 설계',
        '누구나 쉽게 이해하고 재현할 수 있는 체계적인 니팅 차트 및 텍스트 도안 작성',
        '실제 샘플 제작과 테스트 니팅을 통한 도안의 정밀도와 완성도 검증',
      ],
      roleDetails: [
        '가디건의 전체 실루엣과 비대칭 랩 구조의 시각적 중심점 설계',
        '아란 케이블 패턴의 좌우 대칭/비대칭 배치를 조화롭게 기획',
        '목을 부드럽게 감싸면서도 형태가 무너지지 않는 하이넥 게이지 계산',
        '실제 뜨개 과정에서 혼란이 없도록 기호 도안과 단별 안내문 문서화',
        '샘플링 과정에서 발생하는 오차를 지속적으로 도안에 피드백 반영',
      ],
      problems: [
        '아란 케이블 조직은 편물의 두께와 무게가 커져 핏이 둔탁해질 수 있음',
        '비대칭 여밈은 좌우 앞판의 코수와 증감 타이밍이 달라 도안 설명이 복잡해질 우려',
        '하이넥은 목 둘레의 신축성과 칼라의 자립성이 동시에 요구됨',
        '복잡한 조직을 제3자가 편하게 이해하고 뜰 수 있는 표준화된 표기법 정립 필요',
      ],
      solutions: [
        '케이블의 교차 주기와 고무단 비율을 정밀하게 조절하여 편물의 무게 분산 최적화',
        '비대칭 앞판의 사선 라인을 명확한 차트와 체크리스트 형식으로 도안화',
        '하이넥 부분에 적절한 텐션의 편모 조직을 적용해 목에 닿는 편안함과 구조적 힘 동시 구현',
        '치수별 상세 도표와 기호 설명을 직관적으로 다듬어 도안의 가독성 극대화',
      ],
      takeaways: [
        '디자인의 독창성과 실제 착용성, 그리고 도안의 전달력은 3위 일체로 작동해야 함을 깨달음',
        '복잡한 비대칭 구조일수록 도안 작성자의 엄밀한 수치 계산과 논리적 기술이 필수적임',
        '자신만의 독창적 디자인을 타인이 재현할 수 있는 도안 상품으로 패키징하는 전문성 축적 중',
      ],
      technicalSpecs: {
        yarn: '오트밀 베이지 100% 퓨어 메리노 울 (DK / Aran Weight)',
        needles: '대바늘 4.5mm ~ 5.0mm 원형바늘',
        gauge: '18 sts × 24 rows (10cm × 10cm 아란 케이블 조직)',
        techniques: ['복합 아란 케이블', '비대칭 사선 여밈', '일체형 하이넥', '게이지 보정'],
      },
    },

    {
      id: 'sculptural-dart',
      title: '입체 다트(Dart) 편물 실루엣 연구',
      subtitle: '평면의 편물을 인체 곡선에 맞추는 입체 조형 테크닉',
      category: 'technique',
      categoryLabel: '편물 기법 연구',
      type: '기법 심화 및 조형 연구',
      period: '2026/05 – 진행 중',
      role: '편물 역학 연구, 다트 각도별 실루엣 테스트',
      status: '연구 및 검증 완료',
      statusBadge: '핵심 기법 라이브러리',
      image: '/src/assets/images/knitwear_craft_detail_1793101167046.jpg',
      keywords: ['입체 다트', '경사뜨기', '코늘림·코줄임', '실루엣 연구', '피팅감'],
      summary: '직물 재단에서 주로 쓰이는 다트(Dart) 기법을 대바늘 뜨개 조직에 직접 도입하여, 가슴과 허리 라인에 불필요한 솔기 없이 자연스러운 입체 볼륨을 부여하는 연구입니다.',
      metrics: [
        { label: '테스트 편물', value: '12개 각도별 샘플' },
        { label: '적용 작품', value: '늦여름 니트 드레스' },
        { label: '주요 기술', value: '단축뜨기 & 입체 감목' },
        { label: '결과 개선', value: '허리 들뜸 100% 해소' },
      ],
      background: '기존 대바늘 의류는 직선형 튜블러 구조가 많아 여성의 인체 곡선에 완벽히 밀착되지 못하는 한계가 있었습니다. 이를 해결하기 위해 봉제선 없이 편물 자체에서 각도를 꺾는 입체 다트 기법을 심층 연구했습니다.',
      purpose: '편물의 탄성을 해치지 않으면서 실루엣을 정밀하게 보정하는 니팅 다트 공식 정립',
      goals: ['다트 각도별 실루엣 곡률 데이터화', '신축성 있는 울/실크 원사에서의 표면 왜곡 방지'],
      roleDetails: ['다양한 각도의 다트 샘플 편물 편직 및 스팀 블로킹 후 치수 측정'],
      problems: ['경사뜨기 회전 부위에서 구멍(Hole)이나 요철이 발생하는 문제'],
      solutions: ['독일식 경사뜨기(German Short Rows)와 랩앤턴 변형을 교차 적용하여 매끄러운 단차 구현'],
      takeaways: ['니팅은 신체와 중력을 다루는 입체 조각 작업이라는 확신을 얻음'],
    },

    {
      id: 'icord-finish',
      title: '아이코드(I-Cord) 엣지 마감 테크닉',
      subtitle: '말림 현상을 방지하고 구조적 안정감을 더하는 테두리 공법',
      category: 'technique',
      categoryLabel: '편물 기법 연구',
      type: '엣지 피니싱 연구',
      period: '2026/04 – 2026/08',
      role: '마감 기법 비교 분석 및 강도 측정',
      status: '연구 및 검증 완료',
      statusBadge: '완성도 향상 기법',
      image: '/src/assets/images/knitwear_swatch_blueprint_1793101204043.jpg',
      keywords: ['아이코드', '엣지 마감', '말림 방지', '넥라인', '밑단 피니싱'],
      summary: '메리야스 편물의 자연스러운 끝 말림 현상을 깔끔하게 정돈하고, 세탁 후에도 네크라인과 단추 여밈선이 늘어지지 않도록 보호하는 3코·4코 아이코드 마감 공법입니다.',
      metrics: [
        { label: '마감 강도', value: '기존 고무단 대비 +40% 안정성' },
        { label: '형태 유지', value: '다회 착용 후 변형 최소화' },
        { label: '적용 부위', value: '넥라인, 암홀, 밑단' },
        { label: '외관 완성도', value: '하이엔드 기성복 수준' },
      ],
      background: '가볍고 얇은 여름/간절기 편물은 엣지가 말려 들어가는 현상이 빈번합니다. 고무단은 자칫 투박해질 수 있어, 미니멀하면서도 단단한 아이코드 바인드오프를 체계화했습니다.',
      purpose: '단단하면서도 탄력적인 아이코드 마감으로 고급스러운 디테일과 내구성 확보',
      goals: ['넥라인 파임 방지', '앞여밈 밴드 일체형 편직 기술 확보'],
      roleDetails: ['아이코드 코수별 텐션 테스트 및 드레스 전 부위 적용'],
      problems: ['아이코드 바인드오프 시 코가 너무 당겨져 편물 가장자리가 울어버리는 현상'],
      solutions: ['0.5mm 굵은 바늘을 사용해 적정 텐션을 유지하는 도안 가이드라인 수립'],
      takeaways: ['작은 마감 디테일 하나가 작품 전체의 완성도와 상업적 가치를 결정함을 실감함'],
    },

    {
      id: 'yarn-color-mix',
      title: '원사 소재 분석 & 늦여름 컬러 믹스',
      subtitle: '서로 다른 섬유의 수축률과 광택을 조율하는 마테리얼 팔레트',
      category: 'technique',
      categoryLabel: '소재 및 컬러 기획',
      type: '소재 연구 및 팔레트 개발',
      period: '2026/06 – 2026/09',
      role: '원사 소싱, 스와치 편직, 세탁 후 게이지 변화 추적',
      status: '연구 및 검증 완료',
      statusBadge: '소재 라이브러리',
      image: '/src/assets/images/knitwear_hero_dress_1793101164739.jpg',
      keywords: ['원사 분석', '컬러 믹스', '린넨·울', '실크', '게이지 스와치'],
      summary: '쿨한 청량감의 린넨과 부드러운 드레이프의 실크, 형태를 잡아주는 메리노 울을 교차 배합하여 늦여름 특유의 온화하면서도 통기성 있는 편물을 완성한 소재 프로젝트입니다.',
      metrics: [
        { label: '테스트 원사', value: '14종의 천연 원사' },
        { label: '컬러 톤', value: '어스 톤 & 늦여름 옐로' },
        { label: '물성 검증', value: '세탁 전/후 게이지 비교' },
        { label: '최종 선택', value: '3중 섬유 블렌드' },
      ],
      background: '단일 원사로는 표현하기 어려운 복합적인 질감과 온도를 연출하기 위해, 굵기와 소재가 서로 다른 실들을 합사하거나 구간별로 전환하는 방식을 시도했습니다.',
      purpose: '계절의 시각적·촉각적 분위기를 극대화하는 독자적인 원사 조합 레시피 구축',
      goals: ['이종 원사 세탁 수축률 동기화', '광택감과 매트함의 시각적 리듬 형성'],
      roleDetails: ['원사별 성분 분석표 작성 및 게이지 스와치 데이터베이스화'],
      problems: ['린넨과 울의 수축률 차이로 세탁 후 편물이 비틀어질 위험'],
      solutions: ['사전 스팀 처리와 혼방 비율(60:30:10) 조정을 통해 세탁 안정성 확보'],
      takeaways: ['원사에 대한 과학적 이해가 디자이너의 표현 영역을 무한히 넓혀준다는 통찰을 얻음'],
    },

    {
      id: 'top-down-blueprint',
      title: '탑다운(Top-Down) 구조 설계 & 게이지',
      subtitle: '위에서 아래로 이어지는 무봉제 니트웨어 아키텍처',
      category: 'technique',
      categoryLabel: '구조 설계',
      type: '의류 구조학 및 도안화',
      period: '2025/09 – 2026/04',
      role: '바늘아카데미 탑다운 과정 수료 및 설계 실습',
      status: '연구 및 검증 완료',
      statusBadge: '구조 설계 마스터',
      image: '/src/assets/images/knitwear_swatch_blueprint_1793101204043.jpg',
      keywords: ['탑다운 니팅', '요크 설계', '래글런 증감', '게이지 계산', '무봉제'],
      summary: '목선에서 시작해 소매와 몸판으로 자연스럽게 분할되는 탑다운 기법을 통해, 별도의 봉제선 없이 착용감이 우수하고 편직 도중 핏을 실시간으로 수정할 수 있는 설계 체계를 정립했습니다.',
      metrics: [
        { label: '구조 타입', value: '래글런 & 라운드 요크' },
        { label: '봉제 공정', value: '0% (완전 일체형)' },
        { label: '사이즈 보정', value: '실시간 피팅 가능' },
        { label: '교육 수료', value: '탑다운 니팅 전문과정' },
      ],
      background: '전통적인 바텀업 방식은 앞판, 뒤판, 소매를 따로 떠서 꿰매야 해 초보자에게 진입장벽이 높고 시접 부위가 투박해질 수 있습니다. 현대 니팅의 주류인 탑다운 구조를 마스터했습니다.',
      purpose: '실용성과 심미성을 동시에 만족시키는 탑다운 패턴 설계 프로세스 구축',
      goals: ['인체 치수 기반의 래글런 증감선 정밀 계산법 습득', '초보자 친화적 튜토리얼 도안 구성'],
      roleDetails: ['요크 각도에 따른 암홀 깊이와 가슴둘레 상관계수 수식화'],
      problems: ['탑다운 특유의 목 뒷부분 처짐 및 목둘레 들뜸 현상'],
      solutions: ['뒷목 숏로우(Short Row) 테크닉을 필수 편입해 완벽한 네크라인 핏 완성'],
      takeaways: ['수학적이고 논리적인 계산이 뒷받침될 때 비로소 편안한 옷이 탄생한다는 원리를 익힘'],
    },
  ] as Project[],

  skills: [
    { name: '대바늘 니팅', category: '기법', rating: 5, description: '5년간 축적한 뜨개 경험을 바탕으로 균일한 텐션의 고품질 편물 제작', focus: '5년차 실무' },
    { name: '니트웨어 디자인', category: '설계', rating: 4, description: '콘셉트 기획부터 실루엣, 디테일 구성 및 의류 형태 완성', focus: '조형미 & 실용성' },
    { name: '대바늘 이론', category: '설계', rating: 4, description: '바늘아카데미 전문과정을 통한 편물 역학과 조직 구조의 이론적 체계화', focus: '아카데미 수료' },
    { name: '탑다운 니팅', category: '설계', rating: 4, description: '탑다운 방식의 의류 구조 이해 및 무봉제 일체형 패턴 설계', focus: '래글런/요크 설계' },
    { name: '원사 및 소재 분석', category: '소재/분석', rating: 4, description: '다양한 색상과 천연 소재의 실을 조화롭게 배합하는 마테리얼 기획', focus: '원사 믹싱 & 수축률' },
    { name: '편물 형태 및 실루엣 분석', category: '소재/분석', rating: 4, description: '다트 등의 입체 기법을 활용한 여성 인체 라인 최적화', focus: '입체 다트 조형' },
    { name: '니팅 기법 응용', category: '기법', rating: 4, description: '다트, 아이코드, 경사뜨기 등 고급 세부 기법의 정밀 적용', focus: '완성도 높은 마감' },
    { name: '아란 조직 및 케이블', category: '기법', rating: 3, description: '복합 케이블 조직 연구 및 비대칭 가디건 프로젝트를 통한 패턴 개발', focus: '입체 텍스처' },
    { name: '니팅 도안 제작', category: '도안/문서화', rating: 3, description: '개인 프로젝트를 통한 기호 도안 작성 및 초보자 친화적 서술', focus: '도안 개발 1년차' },
    { name: '작업 기록 및 도안 문서화', category: '도안/문서화', rating: 3, description: '제작 전 과정과 게이지, 수정 이력을 체계적으로 정리하는 아카이빙', focus: '기록 & 검증' },
  ] as SkillItem[],

  education: [
    {
      id: 'edu-1',
      type: '전문 교육',
      institution: '바늘아카데미',
      course: '대바늘 이론 과정',
      period: '2025/02 – 2025/07',
      status: '수료 완료',
      description: '대바늘 니팅의 기본 원리와 편물 구조를 이해하고 디자인 및 도안 제작에 필요한 기초를 체계적으로 학습한 교육 과정입니다.',
      details: [
        '편물 조직(메리야스, 고무단, 가터 등)의 탄성과 장력 역학 분석',
        '원사와 바늘 호수별 게이지 환산 및 치수 계산법 훈련',
        '기호 도안 독해 및 오류 검증 프로토콜 습득',
      ],
    },
    {
      id: 'edu-2',
      type: '전문 교육',
      institution: '바늘아카데미',
      course: '탑다운 니팅 과정',
      period: '2025/09 – 2026/04',
      status: '수료 완료',
      description: '탑다운 방식의 니트웨어 제작 원리를 학습하고, 의류 구조와 제작 과정을 이해하는 데 중점을 둔 전문 심화 과정입니다.',
      details: [
        '목선부터 시작하는 무봉제 일체형 니트웨어 설계 프로세스',
        '래글런 및 라운드 요크 증감목 계산과 암홀 분할 테크닉',
        '실제 착용 시 편안함을 보장하는 독일식 경사뜨기 넥라인 설계',
      ],
    },
    {
      id: 'edu-3',
      type: '전문 교육',
      institution: '바늘아카데미',
      course: '강사·디자이너 31기 과정',
      period: '2026/06 – 2026/09',
      status: '수료 완료',
      description: '니트 디자인과 제작을 최고급 단계로 심화 학습하고, 졸업작품 기획부터 완성까지 주도적으로 수행한 디자이너 양성 과정입니다.',
      details: [
        '독창적 콘셉트 기획 및 무드보드, 컬러 팔레트 구축',
        '늦여름을 주제로 한 하이엔드 니트 드레스 졸업작품 1점 제작 완수',
        '다트와 아이코드 등 고급 마감 기법의 융합 및 실전 전시 참가',
      ],
    },
    {
      id: 'edu-4',
      type: '실무 경험',
      institution: '개인 아틀리에 & 프로젝트',
      course: '대바늘 뜨개 실무 및 편물 탐구',
      period: '5년차 (2021 – 현재)',
      status: '지속 탐구 중',
      description: '다양한 원사와 편물 특성을 직접 편직하며 손끝의 텐션과 구조를 체화한 실무 제작 경험입니다.',
      details: ['수십 점의 실물 의류 편직', '원사별 마테리얼 아카이브 구축'],
    },
    {
      id: 'edu-5',
      type: '실무 경험',
      institution: '개인 아틀리에 & 프로젝트',
      course: '니팅 도안 및 패턴 개발',
      period: '1년차 (2025 – 현재)',
      status: '도안 발행 준비 중',
      description: '아이디어를 타인이 재현할 수 있는 표준화된 니팅 도안으로 문서화하고 실제 검증하는 도안 개발 프로젝트입니다.',
      details: ['비대칭 하이넥 아란 가디건 도안 개발', '사이즈 그레이딩 및 테스트 니팅 프로세스 진행'],
    },
  ] as EducationItem[],

  certifications: [
    {
      name: '편물 기술 자격 제35회',
      date: '2025/04',
      organization: '편물 기술 자격 검정원',
      badge: '국가 공인/협회 자격',
    },
    {
      name: '대바늘 이론 과정 수료',
      date: '2025/07',
      organization: '바늘아카데미',
      badge: '전문 교육 수료',
    },
    {
      name: '탑다운 니팅 과정 수료',
      date: '2026/04',
      organization: '바늘아카데미',
      badge: '전문 교육 수료',
    },
    {
      name: '강사·디자이너 31기 과정 수료',
      date: '2026/09',
      organization: '바늘아카데미',
      badge: '최고급 디자이너 과정',
    },
  ] as CertificationItem[],

  // Design Pillars (5 zig-zag features matching the reference site)
  designPillars: [
    {
      id: 'pillar-1',
      number: '01',
      title: '평면에서 입체로 — 신체를 감싸는 다트(Dart) 설계',
      subtitle: 'Sculptural Dart Architecture',
      description: '대바늘 편물은 신축성이 뛰어나지만, 직선적인 원통형 구조만으로는 여성의 부드러운 흉곽과 허리 굴곡을 완벽하게 담아내기 어렵습니다. 재단선 없이 편물 진행 중에 경사뜨기와 증감목으로 각도를 조절하는 입체 다트 기법을 도입하여, 늘어짐 없이 인체에 자연스럽게 감기는 실루엣을 완성합니다.',
      features: [
        '가슴과 허리 라인에 무봉제 입체 볼륨 형성',
        '원사의 신축성과 드레이프를 계산한 맞춤형 다트 각도',
        '착용 시 불필요한 가로 주름과 들뜸 현상 완벽 방지',
      ],
      image: '/src/assets/images/knitwear_craft_detail_1793101167046.jpg',
      imagePosition: 'right', // left text, right image
      badge: '입체 조형 공학',
    },
    {
      id: 'pillar-2',
      number: '02',
      title: '디테일의 완성 — 견고하고 유려한 아이코드(I-Cord) 마감',
      subtitle: 'Refined I-Cord Edge Finishing',
      description: '니트웨어의 퀄리티는 가장자리 마감에서 결정됩니다. 쉽게 말려 올라가는 메리야스 편물의 넥라인과 밑단에 일체형 아이코드(I-Cord) 바인드오프를 적용하여, 세탁과 잦은 착용에도 변형되지 않는 둥글고 정돈된 테두리를 구현합니다.',
      features: [
        '말림 현상(Rolling edge)을 원천 차단하는 원통형 엣지',
        '네크라인이 늘어지는 것을 지지하는 텐션 보강 효과',
        '군더더기 없는 미니멀하고 고급스러운 하이엔드 감성',
      ],
      image: '/src/assets/images/knitwear_swatch_blueprint_1793101204043.jpg',
      imagePosition: 'left', // left image, right text
      badge: '하이엔드 피니싱',
    },
    {
      id: 'pillar-3',
      number: '03',
      title: '누구나 따라 뜰 수 있는 — 재현 가능한 니팅 도안 개발',
      subtitle: 'Clear, Reproducible Knitting Patterns',
      description: '디자이너의 감각이 담긴 옷이라도, 니터가 이해할 수 없다면 온전한 도안이라 할 수 없습니다. 이슬비의 도안은 명확한 격자 기호 차트와 직관적인 서술형 텍스트, 그리고 단계별 체크리스트를 결합하여 초보자부터 숙련자까지 헤매지 않고 작품을 완성할 수 있도록 체계적으로 설계됩니다.',
      features: [
        '글로벌 표준 니팅 기호와 한국어 직관적 설명 병기',
        'XS부터 XL까지 정밀한 게이지 보정 다중 사이즈 그레이딩',
        '샘플 테스터들의 피드백을 반영한 오류 없는 검증 프로세스',
      ],
      image: '/src/assets/images/knitwear_aran_cardigan_1793101204676.jpg',
      imagePosition: 'right', // left text, right image
      badge: '패턴 아키텍처',
    },
    {
      id: 'pillar-4',
      number: '04',
      title: '색과 촉감의 서사 — 서로 다른 원사가 빚어내는 계절감',
      subtitle: 'Sensory Yarn & Material Harmony',
      description: '단일 원사만을 고집하지 않고 린넨의 시원한 청량감, 실크의 은은한 드레이프, 울의 포근한 탄성을 한 편물 안에서 조화롭게 믹스합니다. 늦여름의 따스한 햇볕과 서늘해지는 바람처럼, 계절의 온도를 피부에 닿는 촉감과 자연스러운 색채로 번역합니다.',
      features: [
        '서로 다른 섬유의 수축률과 세탁 후 물성을 사전 검증',
        '올리브 그린, 골든 오커, 따뜻한 오트밀이 빚어내는 자연의 팔레트',
        '합사와 텍스처 교차를 통한 입체적 표면 깊이감 형성',
      ],
      image: '/src/assets/images/knitwear_hero_dress_1793101164739.jpg',
      imagePosition: 'left', // left image, right text
      badge: '마테리얼 큐레이션',
    },
    {
      id: 'pillar-5',
      number: '05',
      title: '손끝의 감각과 이론의 융합 — 5년의 편물 경험과 학문적 정밀성',
      subtitle: '5 Years Craftsmanship × Academic Foundation',
      description: '5년간 수많은 스웨터와 카디건을 직접 뜨며 손끝으로 익힌 텐션 조절 능력에 바늘아카데미의 체계적인 대바늘 이론, 탑다운 구조학, 강사·디자이너 31기 연구 과정이 더해졌습니다. 감각적인 직관과 엄밀한 수치 계산이 조화를 이루는 견고한 니트웨어를 만듭니다.',
      features: [
        '5년간 수천 시간의 대바늘 편직으로 다져진 안정된 손땀',
        '의류 해부학적 관점의 암홀·요크·네크라인 곡률 계산',
        '지속적인 샘플링과 스팀 블로킹을 통한 완성작 신뢰도',
      ],
      image: '/src/assets/images/knitwear_designer_portrait_1793101166704.jpg',
      imagePosition: 'right', // left text, right image
      badge: '장인정신 & 학문성',
    },
  ],

  // Comparison Matrices (Section 9)
  comparisonCharts: {
    chart1_status: [
      { project: '늦여름의 니트 드레스', category: '졸업작품', status: '제작 완료', result: '실물 졸업작품 1점 완성 및 전시', progress: 100 },
      { project: '비대칭 하이넥 아란 가디건', category: '개인 도안 프로젝트', status: '도안 및 샘플링 진행 중', result: '핵심 케이블 설계 및 1차 게이지 도안화', progress: 65 },
    ],
    chart2_stages: [
      {
        project: '늦여름의 니트 드레스',
        period: '2026/06/01 – 2026/09/30 (4개월)',
        stages: ['콘셉트 기획 (6월)', '소재·원사 선정 (7월)', '디자인 & 다트 설계 (8월)', '작품 편직 및 마감 완료 (9월)'],
      },
      {
        project: '비대칭 하이넥 아란 가디건',
        period: '2026/10/01 – 진행 중',
        stages: ['비대칭 콘셉트 기획 (10월 초)', '아란 케이블 조직 연구 (10월 중)', '도안 1차 작성 (10월 말)', '샘플 제작 및 편물 검증 (현재)'],
      },
    ],
    chart3_skillsApplication: [
      { skill: '대바늘 니팅', dress: '전 과정 직접 편직 적용', cardigan: '샘플링 및 테스트 편직 적용 예정' },
      { skill: '니트웨어 디자인', dress: '늦여름 무드 및 실루엣 콘셉트 적용', cardigan: '비대칭 하이넥 조형 디자인 적용' },
      { skill: '소재 및 컬러 기획', dress: '린넨·울·실크 늦여름 컬러 믹스 적용', cardigan: '단일 메리노 울 케이블 강조형 검토 중' },
      { skill: '니팅 도안 제작', dress: '제작 과정 및 치수 기록', cardigan: '다중 사이즈 표준 기호 도안 작성 진행 중' },
      { skill: '편물 구조 분석', dress: '중량에 따른 드레이프 및 처짐 분석', cardigan: '케이블 밀도와 비대칭 랩 구조 균형 분석' },
      { skill: '세부 디테일 기법', dress: '입체 다트(Dart) + 아이코드(I-Cord) 마감', cardigan: '비대칭 사선 여밈 + 일체형 하이넥 칼라' },
    ],
  },
};
