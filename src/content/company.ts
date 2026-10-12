import { computed } from 'vue'
import { useLanguageStore } from '@/stores/language'
import twin from '@/assets/img/profile/twin.webp'
import logistics from '@/assets/img/profile/logistics.webp'
import handling from '@/assets/img/profile/handling.webp'
import safety from '@/assets/img/profile/safety.webp'
import automation from '@/assets/img/profile/automation.webp'

export const profileUrl = '/downloads/roboticbox-company-profile-20261001.pdf'
export const profileFilename = '로보틱박스_회사소개서_261001.pdf'
export const visuals = { twin, logistics, handling, safety, automation }
const content = {
  ko: {
    hero: ['제조현장을', '지능적으로.'],
    intro:
      '데이터를 연결하고, 로봇을 움직이고, 현장을 이해합니다. AI와 로보틱스로 제조 현장의 다음 변화를 만듭니다.',
    explore: '솔루션 살펴보기',
    download: '회사소개서 다운로드',
    contact: '도입·협업 문의',
    more: '자세히 보기',
    solutionsTitle: '데이터에서 로봇까지, 연결되는 제조 현장',
    solutionsIntro:
      '3D 제조 플랫폼, 휴머노이드 관제, 로봇자동화와 AI 안전 관제. 현장에 필요한 기술을 하나의 운영 흐름으로 연결합니다.',
    solutions: [
      {
        id: 'twin-r-ax',
        category: 'MANUFACTURING PLATFORM',
        name: 'TWIN R-AX',
        title: '데이터로 연결하는 지능형 제조 현장',
        description:
          '편집 가능한 3D 공장, 설비·생산 데이터 연결, AI 기반 운영 지원을 하나의 환경으로 통합하는 제조 특화 오케스트레이션 플랫폼입니다.',
        image: twin,
        alt: '공장·설비·데이터를 연결하는 TWIN R-AX 구성',
        points: [
          '3D 공장과 설비 구성',
          '설비·MES·데이터베이스·AI 연결',
          '현장 맥락 기반 모니터링과 대응 절차',
        ],
        steps: ['CREATE', 'CONNECT', 'BUILD', 'OPERATE', 'ORCHESTRATE'],
      },
      {
        id: 'humanoid',
        category: 'HUMANOID CONTROL',
        name: '휴머노이드 관제',
        title: '휴머노이드와 제조현장을 연결하는 기술',
        description:
          '휴머노이드의 움직임에서 제조현장의 작업 연계까지. 로봇 제어와 설비 통합 경험을 바탕으로 작업 실행, 상태 확인, 현장 인터페이스를 다룹니다.',
        image: '',
        alt: '',
        points: [
          '휴머노이드 동작과 작업 상태',
          '작업 명령과 설비 신호의 연계',
          '제조 공정에 맞춘 작업셀 구성',
          '운영 상태와 작업 이력 활용',
        ],
        steps: ['로봇 상태 확인', '작업 실행 연동', '진행 상황 모니터링', '오류·복구 이력 확인'],
      },
      {
        id: 'automation',
        category: 'ROBOT AUTOMATION',
        name: '로봇자동화',
        title: '물류 이송부터 핸들링, 공정 통합까지',
        description:
          'HIKROBOT 모바일 로봇, 마그네틱 그리퍼와 MoonLifter, 맞춤형 지그·레일 구조물을 현장에 맞게 구성합니다. 검사·마킹·적재·이송을 연결하는 자동화 라인을 구축합니다.',
        image: logistics,
        alt: 'HIKROBOT 모바일 로봇 제품군',
        points: [
          '저상형·포크형·카트형·고하중형·컨베이어형 모바일 로봇',
          '작업 환경과 하중에 맞춘 로봇 핸들링',
          'AI 품질검사와 적재·이송 공정 통합',
        ],
        steps: ['물류 이송', '핸들링', '품질검사', '공정 통합'],
      },
      {
        id: 'safety',
        category: 'AI SAFETY MONITORING',
        name: 'AI 안전 관제',
        title: 'AprilTag와 천장 CCTV로 보는 현장',
        description:
          '별도의 차량용 카메라 없이 지게차에 부착한 AprilTag와 천장 CCTV를 활용합니다. 지게차를 자동 식별하고 태블릿에서 주변 탑뷰를 실시간으로 확인합니다.',
        image: safety,
        alt: 'AprilTag 부착, CCTV 식별, 태블릿 탑뷰 확인',
        points: [
          '자석으로 간편하게 AprilTag 부착',
          '천장 CCTV로 지게차 자동 식별',
          '운전자 태블릿에서 실시간 주변 탑뷰 확인',
        ],
        steps: ['AprilTag 부착', 'CCTV 자동 식별', '태블릿 실시간 확인'],
      },
    ],
    connectTitle: '흩어진 데이터에서, 실행 가능한 대응으로.',
    connectDescription:
      '설비·MES·데이터베이스와 기존 AI를 연결하고, 같은 데이터를 대시보드와 운영 시스템에 재사용합니다. 공장이 바뀌면 새 설비와 로직을 더해 데이터 흐름도 바꿀 수 있습니다.',
    connectSteps: [
      { title: 'CONNECT', text: '설비와 시스템 연결' },
      { title: 'ROUTE', text: '필요한 곳으로 데이터 전달' },
      { title: 'ADAPT', text: '현장 변화에 맞춰 흐름 변경' },
    ],
    controlLabel: '현장 연동·실행 관제',
    controlCenter: 'HUMANOID CONTROL',
    controlInputs: '로봇 · PLC · 비전 · 설비 신호',
    controlFlow: ['부품 공급', '설비 가공', '회수·적치'],
    controlOutput: '작업셀 실행제어 / 상태 모니터링 / 이력 확인',
    companyTitle: '제조 현장의 과제, 함께 풀어가겠습니다.',
    companyDescription:
      '로보틱박스는 2021년 한국전기연구원과 합작 설립된 연구소기업입니다. AI와 로보틱스 기술을 바탕으로 제조 현장의 생산성과 안전을 높이는 솔루션을 개발합니다.',
    address: '경상남도 창원시 성산구 불모산로 24번길 19, 창원테크비즈센터 602호',
    busan: '부산광역시 금정구 두실로 24, 4층',
    headquarters: '본사',
    branch: '부산지사',
    ceo: '대표 하현수',
    credentials: '기술 신뢰성과 현장 경험',
    certifications: ['TTA 인공지능 고위험군 신뢰성 인증', 'M.AX AI 로봇 기업 인증'],
    exhibitionsTitle: '국내외 전시·협력 활동',
    exhibitions: [
      { year: '2025', title: 'Hannover Messe', location: '독일' },
      { year: '2025', title: '경남 디지털 위크', location: '대한민국' },
      { year: '2026', title: 'CES', location: '미국 라스베이거스' },
      { year: '2026', title: 'SCM FAIR', location: '국제 운송·공급망관리 산업전' },
    ],
    automationDetails: [
      {
        title: '지능형 로봇 핸들링',
        text: '마그네틱 그리퍼를 활용한 Pick & Place와 MoonLifter 기반 작업자 보조 핸들링을 구성합니다.',
        image: handling,
      },
      {
        title: '제조 자동화 라인',
        text: '에어블로잉, AI 품질검사, 마킹, 적재·이송을 통합합니다. 중량물 이송 등 현장별 공정 조건에 맞춰 설계합니다.',
        image: automation,
      },
    ],
  },
  en: {
    hero: ['Intelligence for', 'the factory floor.'],
    intro:
      'Connecting data, coordinating robots and understanding operations. We bring AI and robotics into real manufacturing environments.',
    explore: 'Explore solutions',
    download: 'Download company profile',
    contact: 'Talk to our team',
    more: 'Learn more',
    solutionsTitle: 'Connected manufacturing, from data to robots',
    solutionsIntro:
      'A 3D manufacturing platform, humanoid supervision, robot automation and AI safety monitoring. Connect the technologies your operations need.',
    solutions: [
      {
        id: 'twin-r-ax',
        category: 'MANUFACTURING PLATFORM',
        name: 'TWIN R-AX',
        title: 'A connected, intelligent manufacturing environment',
        description:
          'A manufacturing orchestration platform that combines an editable 3D factory, equipment and production data, and AI-assisted operations in one environment.',
        image: twin,
        alt: 'TWIN R-AX connects factory spaces, equipment and data',
        points: [
          'Build 3D factories and equipment layouts',
          'Connect equipment, MES, databases and AI',
          'Monitor operations and guide responses with factory context',
        ],
        steps: ['CREATE', 'CONNECT', 'BUILD', 'OPERATE', 'ORCHESTRATE'],
      },
      {
        id: 'humanoid',
        category: 'HUMANOID CONTROL',
        name: 'Humanoid supervision',
        title: 'Connecting humanoids with manufacturing.',
        description:
          'From humanoid motion to manufacturing applications. Drawing on robot control and equipment integration experience, we work on task execution, state monitoring and on-site interfaces.',
        image: '',
        alt: '',
        points: [
          'Humanoid motion and task states',
          'Task commands and equipment signals',
          'Workcell configuration for manufacturing',
          'Operating states and task history',
        ],
        steps: [
          'Check robot status',
          'Connect task execution',
          'Monitor task progress',
          'Review errors & recovery',
        ],
      },
      {
        id: 'automation',
        category: 'ROBOT AUTOMATION',
        name: 'Robot automation',
        title: 'From material handling to integrated production',
        description:
          'We integrate HIKROBOT mobile robots, magnetic grippers, MoonLifter systems and custom fixtures and rails. Inspection, marking, stacking and transfer become a connected production line.',
        image: logistics,
        alt: 'HIKROBOT mobile robot lineup',
        points: [
          'Latent, forklift, cart, heavy-duty and conveyor robots',
          'Handling systems tailored to workspace and payload',
          'Integrated AI quality inspection, stacking and transfer',
        ],
        steps: ['Transport', 'Handling', 'Inspection', 'Integration'],
      },
      {
        id: 'safety',
        category: 'AI SAFETY MONITORING',
        name: 'AI safety monitoring',
        title: 'See your workplace with AprilTag and overhead CCTV',
        description:
          'AprilTags attached to forklifts and overhead CCTV provide a live top view without vehicle-mounted cameras. Identify forklifts automatically and view their surroundings on a tablet.',
        image: safety,
        alt: 'AprilTag attachment, CCTV identification and live tablet view',
        points: [
          'Simple magnetic AprilTag attachment',
          'Automatic forklift identification with overhead CCTV',
          'Live top view on the operator’s tablet',
        ],
        steps: ['Attach AprilTag', 'Identify via CCTV', 'View on tablet'],
      },
    ],
    connectTitle: 'From disconnected data to informed action.',
    connectDescription:
      'Connect equipment, MES, databases and existing AI. Reuse data across dashboards and operations systems, and adapt the flow as new equipment and logic are introduced.',
    connectSteps: [
      { title: 'CONNECT', text: 'Link equipment and systems' },
      { title: 'ROUTE', text: 'Deliver data where it is needed' },
      { title: 'ADAPT', text: 'Adjust flows as operations change' },
    ],
    controlLabel: 'Integration & execution supervision',
    controlCenter: 'HUMANOID CONTROL',
    controlInputs: 'ROBOTS · PLCs · VISION · EQUIPMENT SIGNALS',
    controlFlow: ['Supply', 'Process', 'Retrieve & stack'],
    controlOutput: 'Workcell execution / Status monitoring / History',
    companyTitle: 'Let’s solve manufacturing challenges together.',
    companyDescription:
      'Founded in 2021 as a research institute company in partnership with the Korea Electrotechnology Research Institute, RoboticBox develops AI and robotics solutions for manufacturing productivity and safety.',
    address:
      'Room 602, Changwon Tech Biz Center, 19 Bulmosan-ro 24beon-gil, Seongsan-gu, Changwon, Korea',
    busan: '4F, 24 Dusil-ro, Geumjeong-gu, Busan, Korea',
    headquarters: 'Headquarters',
    branch: 'Busan office',
    ceo: 'Hyun soo HA, CEO',
    credentials: 'Technical credibility. Real-world experience.',
    certifications: [
      'TTA AI trustworthiness certification — high-risk category',
      'M.AX AI robotics company certification',
    ],
    exhibitionsTitle: 'Exhibitions & collaboration',
    exhibitions: [
      { year: '2025', title: 'Hannover Messe', location: 'Germany' },
      { year: '2025', title: 'Gyeongnam Digital Week', location: 'Korea' },
      { year: '2026', title: 'CES', location: 'Las Vegas, USA' },
      { year: '2026', title: 'SCM FAIR', location: 'Supply chain & logistics exhibition' },
    ],
    automationDetails: [
      {
        title: 'Intelligent robotic handling',
        text: 'Magnetic grippers for robotic pick-and-place and MoonLifter systems for operator-assisted handling.',
        image: handling,
      },
      {
        title: 'Integrated production lines',
        text: 'Connect air blowing, AI quality inspection, marking, stacking and transfer. Design for the demands of each process, including heavy workpieces.',
        image: automation,
      },
    ],
  },
}
export function useCompanyContent() {
  const language = useLanguageStore()
  return computed(() => content[language.currentLanguage])
}
