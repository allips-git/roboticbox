export type TranslationKey = 
  // Header
  | 'header.menu.about'
  | 'header.menu.technologies'
  | 'header.menu.article'
  | 'header.menu.contact'
  | 'header.language'
  
  // Home (index)
  | 'home.hero.title'
  | 'home.hero.subtitle'
  | 'home.hero.button'
  | 'home.about.title'
  | 'home.about.heading'
  | 'home.about.description'
  | 'home.about.button'
  | 'home.technologies.title'
  | 'home.technologies.heading'
  | 'home.technologies.description'
  | 'home.solution.title'
  | 'home.solution.heading'
  | 'home.solution.description'
  | 'home.solution.button'
  | 'home.slider.aiSafety'
  | 'home.slider.aiSafetyDesc'
  | 'home.slider.plcDevice'
  | 'home.slider.plcDeviceDesc'
  | 'home.slider.smartLogistics'
  | 'home.slider.smartLogisticsDesc'
  
  // About
  | 'about.title'
  | 'about.overview.title'
  | 'about.overview.heading'
  | 'about.overview.description1'
  | 'about.overview.description2'
  | 'about.overview.description3'
  | 'about.overview.label.companyName'
  | 'about.overview.companyName'
  | 'about.overview.label.established'
  | 'about.overview.established'
  | 'about.overview.label.ceo'
  | 'about.overview.ceo'
  | 'about.overview.label.contact'
  | 'about.overview.contact'
  | 'about.overview.label.address'
  | 'about.overview.address'
  | 'about.overview.label.specialty'
  | 'about.overview.specialty'
  | 'about.overview.label.process'
  | 'about.overview.process'
  | 'about.business.title'
  | 'about.business.heading'
  | 'about.business.item1.title'
  | 'about.business.item1.desc'
  | 'about.business.item2.title'
  | 'about.business.item2.desc'
  | 'about.business.item3.title'
  | 'about.business.item3.desc'
  | 'about.values.title'
  | 'about.history.title'
  | 'about.history.2021.item1'
  | 'about.history.2021.item2'
  | 'about.history.2021.item3'
  | 'about.history.2022.item1'
  | 'about.history.2022.item2'
  | 'about.history.2024.item1'
  
  // Technologies
  | 'technologies.title'
  | 'technologies.hero.heading'
  | 'technologies.hero.description'
  | 'technologies.hero.source'
  | 'technologies.feature1.title'
  | 'technologies.feature1.desc'
  | 'technologies.feature2.title'
  | 'technologies.feature2.desc'
  | 'technologies.feature3.title'
  | 'technologies.feature3.desc'
  | 'technologies.flow.title'
  | 'technologies.flow.item1'
  | 'technologies.flow.item2'
  | 'technologies.flow.item3'
  | 'technologies.flow.item4'
  | 'technologies.flow.item5'
  | 'technologies.service.title'
  | 'technologies.service.item1.title'
  | 'technologies.service.item1.desc1'
  | 'technologies.service.item1.desc2'
  | 'technologies.service.item1.desc3'
  | 'technologies.service.item2.title'
  | 'technologies.service.item2.desc1'
  | 'technologies.service.item2.desc2'
  | 'technologies.service.legend.green'
  | 'technologies.service.legend.yellow'
  | 'technologies.service.legend.red'
  
  // Article
  | 'article.title'
  | 'article.item1.title'
  | 'article.item1.description'
  | 'article.item1.source'
  | 'article.item2.title'
  | 'article.item2.description'
  | 'article.item2.source'
  
  // Contact
  | 'contact.title'
  | 'contact.heading'
  | 'contact.description'
  | 'contact.download'
  | 'contact.ceo'
  | 'contact.form.company'
  | 'contact.form.name'
  | 'contact.form.rank'
  | 'contact.form.tel'
  | 'contact.form.email'
  | 'contact.form.message'
  | 'contact.form.agree'
  | 'contact.form.agreeDesc'
  | 'contact.form.submit'
  | 'contact.info.ceo'
  | 'contact.info.mobile'
  | 'contact.info.tel'
  | 'contact.info.fax'
  
  // Footer
  | 'footer.company.inquiry'
  | 'footer.company.download'
  | 'footer.address.headquarters'
  | 'footer.address.busan'
  | 'footer.contact.ceo'
  | 'footer.contact.mobile'
  | 'footer.contact.tel'
  | 'footer.contact.fax'
  | 'footer.copyright'
  
  // Common
  | 'common.more'
  | 'common.source'

export const translations: Record<'ko' | 'en', Record<TranslationKey, string>> = {
  ko: {
    // Header
    'header.menu.about': '회사 소개',
    'header.menu.technologies': '주요 기술',
    'header.menu.article': '언론·홍보',
    'header.menu.contact': '문의하기',
    'header.language': '언어',
    
    // Home
    'home.hero.title': 'AI와 함께 가는 미래, <br> <span class="text-sky-400">로보틱박스</span>가함께합니다.',
    'home.hero.subtitle': 'TOGETHER — LET\'S INNOVATE THE FUTURE — WITH AI',
    'home.hero.button': '더보기',
    'home.about.title': 'ABOUT US',
    'home.about.heading': '로보틱박스는 자동화 기계와 데이터·AI 기술을 바탕으로 제조 및 로보틱스 분야에서 혁신적인 솔루션을 제공하는 전문 기업입니다.',
    'home.about.description': '(주)로보틱박스는 2021년 설립된 연구소 기업으로, 경남 창원에 본사를 두고 있으며 한국전기연구원과의 합작법인으로 출범하였습니다. 고객의 안전과 효율성을최우선으로 고려하며, 산업 환경에서의 실시간 데이터 분석과 리스크 예측을 통해 생산성 향상 및 안전 강화를 위한 첨단 기술을 개발하고 있습니다.',
    'home.about.button': '더보기',
    'home.technologies.title': 'TECHNOLOGIES',
    'home.technologies.heading': '로보틱박스는 언제나 혁신적인 접근으로 산업 환경의 미래 솔루션을 제공하고 있습니다.',
    'home.technologies.description': '로보틱박스는 AI와 빅데이터 기술을 바탕으로 제조 산업에서 혁신적인 자동화 솔루션을 제공합니다. 우리는 생산 공정과 원자재 분석에서부터 교통 안전 및 강재특성 예측까지, 데이터를 활용해 더 안전하고 효율적인 환경를 만들기 위해 최적화된 기술로 미래 산업의 새로운 기준을 제시하고 있습니다.',
    'home.solution.title': 'KEY SOLUTION',
    'home.solution.heading': '물류 사고 감소를 위한 <br> AI 지게차 안전 관제 솔루션',
    'home.solution.description': '로보틱박스는 AI 지게차 안전 관제 솔루션은 지게차 및 작업자의 움직임을 관측할 수 있는 TopView 관제 시스템을 도입하여 영상 속 지게차와 작업자의 라벨링 및 이동 동선 예측 모델링을 통하여 객체 이동 동선의 사고를 예측하고 태블릿을 통해 지게차 운전자에게 알람을 제공하여 사전에 지게차와 작업자간의 충돌을 예방하는 시스템을 주요 기술로 제공하고 있습니다.',
    'home.solution.button': '더보기',
    'home.slider.aiSafety': 'AI 기반 안전 관제 솔루션',
    'home.slider.aiSafetyDesc': '물류 사고를 줄이기 위한 <br>지게차 안전 관제 시스템 등 IOT와 AI 기술을 융합한 안전 관리 솔루션을 제공합니다.',
    'home.slider.plcDevice': '상용 PLC 및 로봇암 관리 엣지 디바이스',
    'home.slider.plcDeviceDesc': '로봇 및 공정 상태를 실시간으로 관리하는 <br>엣지 디바이스를 개발하여 효율적인 공정 운영을 지원합니다.',
    'home.slider.smartLogistics': '스마트 물류 이송 공정 구축',
    'home.slider.smartLogisticsDesc': '웹 기반 상태인식 기능을 통해 <br>공정 효율성을 극대화한 스마트 장치를 설계 및 구현합니다.',
    
    // About
    'about.title': '회사소개',
    'about.overview.title': '회사 개요',
    'about.overview.heading': '로보틱박스는 자동화 기계와 데이터·AI 기술을 바탕으로 제조 및 로보틱스 분야에서 혁신적인 솔루션을 제공하는 전문 기업입니다.',
    'about.overview.description1': '(주)로보틱박스는 2021년 설립된 연구소 기업으로, 경남 창원에 본사를 두고 있으며 한국전기연구원과의 합작법인으로 출범하였습니다.',
    'about.overview.description2': '고객의 안전과 효율성을 최우선으로 고려하며,산업 환경에서의 실시간 데이터 분석과 리스크 예측을 통해 생산성 향상 및 안전 강화를 위한 첨단 기술을 개발하고 있습니다.',
    'about.overview.description3': '',
    'about.overview.label.companyName': '회사명',
    'about.overview.companyName': '(주)로보틱박스',
    'about.overview.label.established': '설립일',
    'about.overview.established': '2021.02.04.',
    'about.overview.label.ceo': '대표',
    'about.overview.ceo': '하현수',
    'about.overview.label.contact': '연락처',
    'about.overview.contact': '+82-10-2951-0068',
    'about.overview.label.address': '주소',
    'about.overview.address': '경상남도 창원시 성산구 전기의길 10 기술창업센터 102호 (성주동, 한국전기연구원 기술창업센터)',
    'about.overview.label.specialty': '전문 분야',
    'about.overview.specialty': '자동차, 전지, 철강',
    'about.overview.label.process': '전문 공정',
    'about.overview.process': '품질검사, 인케이싱/포장, 이송',
    'about.business.title': '사업 영역',
    'about.business.heading': '로보틱박스는 로보틱스 및 AI 전문가들로 구성되어 첨단 기술 개발 및 고도화에 주력하고 있습니다.',
    'about.business.item1.title': '상용 PLC 및 로봇암 관리 엣지 디바이스',
    'about.business.item1.desc': '로봇 및 공정 상태를 실시간으로 관리하는 엣지 디바이스를 개발하여 효율적인 공정 운영을 지원합니다.',
    'about.business.item2.title': 'AI 기반 안전 관제 솔루션',
    'about.business.item2.desc': '물류 사고를 줄이기 위한 지게차 안전 관제 시스템 등 IOT와 AI 기술을 융합한 안전 관리 솔루션을 제공합니다.',
    'about.business.item3.title': '스마트 물류 이송 공정 구축',
    'about.business.item3.desc': '웹 기반 상태인식 기능을 통해 공정 효율성을 극대화한 스마트 장치를 설계 및 구현합니다.',
    'about.values.title': '핵심 가치',
    'about.history.title': '연혁',
    'about.history.2021.item1': '02. 연구소 설립',
    'about.history.2021.item2': '03. 경상남도 스타트업 데모 IR 대회 수상',
    'about.history.2021.item3': '07. 한국전기연구원 기술이전 완료',
    'about.history.2022.item1': '06. 제조빅데이터 포집 게이트 웨이 \'R-GATE\' 런칭',
    'about.history.2022.item2': '09. AI 엣지 컴퓨팅 \'R-BOX\' 런칭',
    'about.history.2024.item1': '06. 경상남도 정보 보안 IR 대회 수상',
    
    // Technologies
    'technologies.title': '주요 기술',
    'technologies.hero.heading': '물류 사고 감소를 위한 AI 지게차 안전 관제 솔루션',
    'technologies.hero.description': 'AI 지게차 안전 관제 솔루션은 지게차 및 작업자의 움직임을 관측할 수 있는 TopView 관제 시스템을 도입하여 영상 속 지게차와 작업자의 라벨링 및이동 동선 예측 모델링을 통하여 객체 이동 동선의 사고를 예측하고, 태블릿을 통해 지게차 운전자에게 알람을 제공하여 사전에 지게차와 작업자간의 충돌을 예방하는 시스템입니다.',
    'technologies.hero.source': '출처 : [YTN 다큐S프라임] 인공지능 대전환! 제조혁신의 날개를 달다',
    'technologies.feature1.title': '지게차 및 작업자의 움직임을 관측할 수 있는 TopView 관제 구축',
    'technologies.feature1.desc': '',
    'technologies.feature2.title': '영상 속 지게차 및 작업자의 객체 라벨링 및 이동 동선 예측 모델링',
    'technologies.feature2.desc': '',
    'technologies.feature3.title': '인공지능 기반 작업 환경 위험 상황 예측 기술 개발',
    'technologies.feature3.desc': '',
    'technologies.flow.title': 'SERVICE FLOW',
    'technologies.flow.item1': 'TopView 관제 시스템 구축',
    'technologies.flow.item2': '데이터 수집 및 머신러닝 구동',
    'technologies.flow.item3': '영상 데이터 처리, 이미지 스티칭 및 객체 인식',
    'technologies.flow.item4': '동선 예측 및 위험 감지 알람 서비스',
    'technologies.flow.item5': '태블릿 APP 및 현장 상황 관제 대시보드 제공',
    'technologies.service.title': '주요 서비스 소개',
    'technologies.service.item1.title': 'TopView 관제 시스템',
    'technologies.service.item1.desc1': '사각지대가 발생하지 않도록 작업 현장 천장에 다수의 카메라를 설치하여 실시간으로 현장 상황을 촬영하고 촬영된 영상정보를 수집하기 위한 TOPVIEW 관제 시스템을 구축합니다.',
    'technologies.service.item1.desc2': '천장에 설치된 여러 카메라는 작업자와 지게차 같은 물체를 인식하고, 위험한 동선을 예측하는 기술을 적용했습니다.',
    'technologies.service.item1.desc3': '이 과정에서 작업자가 사용하는 태블릿 위치를 추적해 정보를 실시간으로 제공하고, 이를 통해 태블릿 화면에서 지게차 주변을 360도 시야로 보여주어, 사고를 예방해 작업 현장의 안전과 효율성을 높이는 기술을 제공합니다.',
    'technologies.service.item2.title': '동선 예측 및 위험 알람 시스템',
    'technologies.service.item2.desc1': 'Top-View 영상에서 관측한 작업자와 지게차의 실시간 위치정보를 기반으로, 다중객체 추적 기술과 동선 예측 기술 사용을 통해 객체의 현재 상태를 분석하고 각 객체의 동선을 예측하여 잠재적인 위험 상황을 사전에 방지하는 미래 상황 예측 기술을 통해 충돌 예방 사고를 사전에 방지합니다.',
    'technologies.service.item2.desc2': '현장의 지게차에 AI 영상 관제 앱을 설치하여 지게차 주변 영상(어라운드 뷰)와 작업장 내의 지게차 및 작업자의 위치를 실시간으로 확인할 수 있는 기능과 위험동선예측 알고리즘을 적용하여 지게차와 작업자간의 충돌을 사전에 예방할 수 있도록 앱에서 위험 알람과, 지게차에 부착되는 위험 알림 IoT 디바이스와 연동된 지게차 외부에도 위험 알람을 발생합니다.',
    'technologies.service.legend.green': '초록색: 실제 이동 경로',
    'technologies.service.legend.yellow': '노란색: 관측 데이터',
    'technologies.service.legend.red': '빨간색: 예측 데이터',
    
    // Article
    'article.title': '언론·홍보',
    'article.item1.title': '인공지능 대전환! 제조 혁신의 날개를 달다',
    'article.item1.description': '세계 경제의 패러다임을 바꾸고 있는 인공지능 기술! AI와 빅데이터의 결합을 통해 초지능 대융합의 시대가 열리고 있습니다. 한때 위기에 내몰렸던 국내 제조업 현장에도 AI 기술이 빠르게 적용되며 새로운 변화의 바람을 일으키고 있는 지금! \'국내 제조업의 산실\'인 영남권 5개 지역을 중심으로 제조 혁신이 가속화되고 있습니다.',
    'article.item1.source': '출처: YTN / 2024-10-11',
    'article.item2.title': 'AI로 제조 현장 안전성 강화…로보틱박스, \'AI 지게차 영상 관제 솔루션\' 개발',
    'article.item2.description': '산업 데이터 플랫폼 및 AI 자동화 전문 기업 로보틱박스는 물류창고나 제조업 현장에서 지게차와 작업자 간의 충돌 사고를 방지하는 \'AI 지게차 영상 관제 솔루션\'을 구현했다고 10일 밝혔다. 경남 창원에 소재한 자동차 부품 기업 우수AMS에서 실증이 완료됐다.',
    'article.item2.source': '출처: 동아일보 / 2024-10-11',
    
    // Contact
    'contact.title': 'CONTACT US',
    'contact.heading': '제조 및 로보틱스 분야의 미래를 여는 AI 솔루션, 로보틱박스와 함께하세요.',
    'contact.description': '언제든지 문의해주세요! 궁금한 점이나 협업 제안이 있으시다면 편하게 연락 주세요. 로보틱박스가 혁신적인 솔루션으로 함께하겠습니다.',
    'contact.download': '회사소개서 다운로드',
    'contact.ceo': '대표 : 하현수',
    'contact.form.company': '회사명 *',
    'contact.form.name': '이름 *',
    'contact.form.rank': '직급 *',
    'contact.form.tel': '담당 연락처 *',
    'contact.form.email': '담당 이메일 *',
    'contact.form.message': '문의 내용 입력 *',
    'contact.form.agree': '개인정보 수집 및 이용에 동의합니다.',
    'contact.form.agreeDesc': '처리 목적: 이름, 이메일, 연락처, 회사명, 직급 필수 항목: 문의 회신을 위한 기본 정보 수집',
    'contact.form.submit': '문의하기',
    'contact.info.ceo': '대표 : 하현수',
    'contact.info.mobile': 'Mobile 010-2951-0068',
    'contact.info.tel': 'Tel 051-711- 3468',
    'contact.info.fax': 'Fax 051-518-8901',
    
    // Footer
    'footer.company.inquiry': '솔루션 문의하기',
    'footer.company.download': '회사소개서 다운로드',
    'footer.address.headquarters': '본사 :  경상남도 창원시 성산구 전기의길 10, 102호',
    'footer.address.busan': '부산지사 : 부산광역시 금정구 두실로24, 4층',
    'footer.contact.ceo': '대표 : 하현수',
    'footer.contact.mobile': 'Mobile : 010-2951-0068',
    'footer.contact.tel': 'Tel : 051-711-3468',
    'footer.contact.fax': 'Fax : 051-518-8901',
    'footer.copyright': 'ⓒ 2025. (주)로보틱박스',
    
    // Common
    'common.more': '더보기',
    'common.source': '출처'
  },
  en: {
    // Header
    'header.menu.about': 'About',
    'header.menu.technologies': 'Technologies',
    'header.menu.article': 'Press',
    'header.menu.contact': 'Contact',
    'header.language': 'Language',
    
    // Home
    'home.hero.title': 'The future with AI, <br> <span class="text-sky-400">RoboticBox</span> is with you.',
    'home.hero.subtitle': 'TOGETHER — LET\'S INNOVATE THE FUTURE — WITH AI',
    'home.hero.button': 'Learn More',
    'home.about.title': 'ABOUT US',
    'home.about.heading': 'RoboticBox is a specialized company providing innovative solutions in manufacturing and robotics based on automation machinery and data·AI technology.',
    'home.about.description': 'RoboticBox Co., Ltd. is a research institute company established in 2021, headquartered in Changwon, Gyeongnam, and launched as a joint venture with the Korea Electrotechnology Research Institute. We prioritize customer safety and efficiency, developing cutting-edge technologies for productivity improvement and safety enhancement through real-time data analysis and risk prediction in industrial environments.',
    'home.about.button': 'Learn More',
    'home.technologies.title': 'TECHNOLOGIES',
    'home.technologies.heading': 'RoboticBox always provides future solutions for industrial environments through innovative approaches.',
    'home.technologies.description': 'RoboticBox provides innovative automation solutions in the manufacturing industry based on AI and big data technology. From production processes and raw material analysis to traffic safety and steel property prediction, we present new standards for the future industry with optimized technology that utilizes data to create safer and more efficient environments.',
    'home.solution.title': 'KEY SOLUTION',
    'home.solution.heading': 'AI Forklift Safety Monitoring Solution <br> for Reducing Logistics Accidents',
    'home.solution.description': 'RoboticBox\'s AI Forklift Safety Monitoring Solution introduces a TopView monitoring system that can observe the movement of forklifts and workers, predicts accidents in object movement trajectories through labeling and movement trajectory prediction modeling of forklifts and workers in video, and provides alarms to forklift drivers through tablets to prevent collisions between forklifts and workers in advance.',
    'home.solution.button': 'Learn More',
    'home.slider.aiSafety': 'AI-based Safety Monitoring Solution',
    'home.slider.aiSafetyDesc': 'We provide safety management solutions that combine IoT and AI technologies, such as forklift safety monitoring systems to reduce logistics accidents.',
    'home.slider.plcDevice': 'Commercial PLC and Robot Arm Management Edge Device',
    'home.slider.plcDeviceDesc': 'We develop edge devices that manage robot and process status in real-time to support efficient process operations.',
    'home.slider.smartLogistics': 'Smart Logistics Transport Process Construction',
    'home.slider.smartLogisticsDesc': 'We design and implement smart devices that maximize process efficiency through web-based status recognition functions.',
    
    // About
    'about.title': 'About Us',
    'about.overview.title': 'Company Overview',
    'about.overview.heading': 'RoboticBox is a specialized company providing innovative solutions in manufacturing and robotics based on automation machinery and data·AI technology.',
    'about.overview.description1': 'RoboticBox Co., Ltd. is a research institute company established in 2021, headquartered in Changwon, Gyeongnam, and launched as a joint venture with the Korea Electrotechnology Research Institute.',
    'about.overview.description2': 'We prioritize customer safety and efficiency, developing cutting-edge technologies for productivity improvement and safety enhancement through real-time data analysis and risk prediction in industrial environments.',
    'about.overview.description3': '',
    'about.overview.label.companyName': 'Company Name',
    'about.overview.companyName': 'RoboticBox Co., Ltd.',
    'about.overview.label.established': 'Established',
    'about.overview.established': '2021.02.04.',
    'about.overview.label.ceo': 'CEO',
    'about.overview.ceo': 'Ha Hyun-soo',
    'about.overview.label.contact': 'Contact',
    'about.overview.contact': '+82-10-2951-0068',
    'about.overview.label.address': 'Address',
    'about.overview.address': '102, Technology Startup Center, 10 Jeongi-gil, Seongsan-gu, Changwon-si, Gyeongsangnam-do (Seongju-dong, Korea Electrotechnology Research Institute Technology Startup Center)',
    'about.overview.label.specialty': 'Specialty',
    'about.overview.specialty': 'Automotive, Battery, Steel',
    'about.overview.label.process': 'Process',
    'about.overview.process': 'Quality Inspection, Encasing/Packaging, Transport',
    'about.business.title': 'Business Areas',
    'about.business.heading': 'RoboticBox, composed of robotics and AI experts, focuses on developing and advancing cutting-edge technologies.',
    'about.business.item1.title': 'Commercial PLC and Robot Arm Management Edge Device',
    'about.business.item1.desc': 'We develop edge devices that manage robot and process status in real-time to support efficient process operations.',
    'about.business.item2.title': 'AI-based Safety Monitoring Solution',
    'about.business.item2.desc': 'We provide safety management solutions that combine IoT and AI technologies, such as forklift safety monitoring systems to reduce logistics accidents.',
    'about.business.item3.title': 'Smart Logistics Transport Process Construction',
    'about.business.item3.desc': 'We design and implement smart devices that maximize process efficiency through web-based status recognition functions.',
    'about.values.title': 'Core Values',
    'about.history.title': 'History',
    'about.history.2021.item1': '02. Research Institute Establishment',
    'about.history.2021.item2': '03. Gyeongsangnam-do Startup Demo IR Competition Award',
    'about.history.2021.item3': '07. Korea Electrotechnology Research Institute Technology Transfer Completed',
    'about.history.2022.item1': '06. Manufacturing Big Data Collection Gateway \'R-GATE\' Launch',
    'about.history.2022.item2': '09. AI Edge Computing \'R-BOX\' Launch',
    'about.history.2024.item1': '06. Gyeongsangnam-do Information Security IR Competition Award',
    
    // Technologies
    'technologies.title': 'Technologies',
    'technologies.hero.heading': 'AI Forklift Safety Monitoring Solution for Reducing Logistics Accidents',
    'technologies.hero.description': 'The AI Forklift Safety Monitoring Solution introduces a TopView monitoring system that can observe the movement of forklifts and workers, predicts accidents in object movement trajectories through labeling and movement trajectory prediction modeling of forklifts and workers in video, and provides alarms to forklift drivers through tablets to prevent collisions between forklifts and workers in advance.',
    'technologies.hero.source': 'Source: [YTN DocuS Prime] AI Transformation! Adding Wings to Manufacturing Innovation',
    'technologies.feature1.title': 'TopView Monitoring System Construction for Observing Forklift and Worker Movement',
    'technologies.feature1.desc': '',
    'technologies.feature2.title': 'Object Labeling and Movement Trajectory Prediction Modeling of Forklifts and Workers in Video',
    'technologies.feature2.desc': '',
    'technologies.feature3.title': 'AI-based Work Environment Risk Situation Prediction Technology Development',
    'technologies.feature3.desc': '',
    'technologies.flow.title': 'SERVICE FLOW',
    'technologies.flow.item1': 'TopView Monitoring System Construction',
    'technologies.flow.item2': 'Data Collection and Machine Learning Operation',
    'technologies.flow.item3': 'Video Data Processing, Image Stitching and Object Recognition',
    'technologies.flow.item4': 'Trajectory Prediction and Risk Detection Alarm Service',
    'technologies.flow.item5': 'Tablet APP and On-site Situation Monitoring Dashboard Provision',
    'technologies.service.title': 'Key Services',
    'technologies.service.item1.title': 'TopView Monitoring System',
    'technologies.service.item1.desc1': 'We construct a TOPVIEW monitoring system to install multiple cameras on the ceiling of the work site to prevent blind spots, film the site situation in real-time, and collect the filmed video information.',
    'technologies.service.item1.desc2': 'Multiple cameras installed on the ceiling recognize objects such as workers and forklifts and apply technology to predict dangerous trajectories.',
    'technologies.service.item1.desc3': 'In this process, we track the location of tablets used by workers to provide information in real-time, and through this, we provide technology that shows the area around the forklift in a 360-degree view on the tablet screen, preventing accidents and improving the safety and efficiency of the work site.',
    'technologies.service.item2.title': 'Trajectory Prediction and Risk Alarm System',
    'technologies.service.item2.desc1': 'Based on real-time location information of workers and forklifts observed in Top-View video, we analyze the current state of objects and predict the trajectory of each object through multi-object tracking technology and trajectory prediction technology, preventing potential risk situations in advance through future situation prediction technology to prevent collision accidents in advance.',
    'technologies.service.item2.desc2': 'By installing an AI video monitoring app on forklifts at the site, we apply functions that can check the video around the forklift (around view) and the location of forklifts and workers in the workplace in real-time, and risk trajectory prediction algorithms, so that risk alarms in the app and risk alarms on the outside of the forklift linked to risk notification IoT devices attached to the forklift are generated to prevent collisions between forklifts and workers in advance.',
    'technologies.service.legend.green': 'Green: Actual Movement Path',
    'technologies.service.legend.yellow': 'Yellow: Observed Data',
    'technologies.service.legend.red': 'Red: Predicted Data',
    
    // Article
    'article.title': 'Press',
    'article.item1.title': 'AI Transformation! Adding Wings to Manufacturing Innovation',
    'article.item1.description': 'Artificial intelligence technology that is changing the paradigm of the world economy! The era of super-intelligent convergence is opening through the combination of AI and big data. Now that AI technology is being rapidly applied to the domestic manufacturing industry, which was once in crisis, creating a new wind of change! Manufacturing innovation is accelerating centered on 5 regions in the Yeongnam region, the "cradle of domestic manufacturing."',
    'article.item1.source': 'Source: YTN / 2024-10-11',
    'article.item2.title': 'Strengthening Manufacturing Site Safety with AI... RoboticBox Develops \'AI Forklift Video Monitoring Solution\'',
    'article.item2.description': 'RoboticBox, an industrial data platform and AI automation specialist, announced on the 10th that it has implemented an \'AI Forklift Video Monitoring Solution\' that prevents collision accidents between forklifts and workers in logistics warehouses or manufacturing sites. Field verification was completed at WoosuAMS, an automotive parts company located in Changwon, Gyeongnam.',
    'article.item2.source': 'Source: Dong-A Ilbo / 2024-10-11',
    
    // Contact
    'contact.title': 'CONTACT US',
    'contact.heading': 'AI solutions that open the future of manufacturing and robotics, join with RoboticBox.',
    'contact.description': 'Please feel free to contact us anytime! If you have any questions or collaboration proposals, please contact us comfortably. RoboticBox will be with you with innovative solutions.',
    'contact.download': 'Download Company Brochure',
    'contact.ceo': 'CEO : Ha Hyun-soo',
    'contact.form.company': 'Company Name *',
    'contact.form.name': 'Name *',
    'contact.form.rank': 'Position *',
    'contact.form.tel': 'Contact Number *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Inquiry Content *',
    'contact.form.agree': 'I agree to the collection and use of personal information.',
    'contact.form.agreeDesc': 'Purpose of processing: Name, email, contact, company name, position Required items: Basic information collection for inquiry response',
    'contact.form.submit': 'Submit Inquiry',
    'contact.info.ceo': 'CEO : Ha Hyun-soo',
    'contact.info.mobile': 'Mobile 010-2951-0068',
    'contact.info.tel': 'Tel 051-711- 3468',
    'contact.info.fax': 'Fax 051-518-8901',
    
    // Footer
    'footer.company.inquiry': 'Solution Inquiry',
    'footer.company.download': 'Download Company Brochure',
    'footer.address.headquarters': 'Headquarters: 102, 10 Jeongi-gil, Seongsan-gu, Changwon-si, Gyeongsangnam-do',
    'footer.address.busan': 'Busan Branch: 4F, 24 Dusil-ro, Geumjeong-gu, Busan',
    'footer.contact.ceo': 'CEO : Ha Hyun-soo',
    'footer.contact.mobile': 'Mobile : 010-2951-0068',
    'footer.contact.tel': 'Tel : 051-711-3468',
    'footer.contact.fax': 'Fax : 051-518-8901',
    'footer.copyright': 'ⓒ 2025. RoboticBox Co., Ltd.',
    
    // Common
    'common.more': 'Learn More',
    'common.source': 'Source'
  }
}

