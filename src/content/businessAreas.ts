import twinImage from '@/assets/img/carousel/twin.png'
import humanoidImage from '@/assets/img/carousel/humanoid.png'
import logisticsImage from '@/assets/img/carousel/logistics.png'
import handlingImage from '@/assets/img/carousel/handling.png'
import automationImage from '@/assets/img/carousel/automation.png'
import safetyImage from '@/assets/img/carousel/safety.png'

export function businessAreas(ko: boolean) {
  return [
    { id: 'twin', title: 'TWIN R-AX', description: ko ? '3D 공장과 설비·MES·AI를 연결하고, 현장 상황에 맞는 모니터링과 운영 대응을 지원합니다.' : 'Connect 3D factories, equipment, MES and AI for contextual monitoring and operational response.', image: twinImage, alt: ko ? 'TWIN R-AX 제조 플랫폼' : 'TWIN R-AX manufacturing platform' },
    { id: 'humanoid', title: ko ? '휴머노이드 관제' : 'Humanoid Supervision', description: ko ? '로봇 제어와 설비 통합 경험을 바탕으로 휴머노이드의 작업 실행·상태 확인·현장 연계를 다룹니다.' : 'Explore humanoid task execution, state monitoring and factory integration through our robot control and equipment integration experience.', image: humanoidImage, alt: ko ? '휴머노이드 협업 관제 콘셉트 이미지' : 'Humanoid collaboration concept image' },
    { id: 'logistics', title: ko ? '모바일 로봇 물류 이송' : 'Mobile Robot Logistics', description: ko ? 'HIKROBOT의 저상형·포크형·카트형·고하중형·컨베이어형 로봇으로 현장에 맞는 물류 이송을 구성합니다.' : 'Configure material transport with HIKROBOT latent, forklift, cart, heavy-duty and conveyor robots.', image: logisticsImage, alt: ko ? '모바일 로봇 물류 이송 콘셉트 이미지' : 'Mobile robot logistics concept image' },
    { id: 'handling', title: ko ? '로봇 핸들링 · 작업자 보조' : 'Robotic & Assisted Handling', description: ko ? '마그네틱 그리퍼, MoonLifter와 맞춤형 지그·레일로 작업물과 하중에 맞는 인양·이송·안착을 구현합니다.' : 'Combine magnetic grippers, MoonLifter, custom fixtures and rails for lifting, transfer and placement tailored to each payload.', image: handlingImage, alt: ko ? '마그네틱 그리퍼를 활용한 로봇 핸들링' : 'Robotic handling with a magnetic gripper' },
    { id: 'automation', title: ko ? '제조 공정 자동화' : 'Manufacturing Automation', description: ko ? '에어블로잉부터 AI 품질검사·마킹·적재·이송까지 연결해 제조 공정의 통합 자동화를 구축합니다.' : 'Integrate air blowing, AI quality inspection, marking, stacking and transfer into one automated production flow.', image: automationImage, alt: ko ? '제조 자동화 라인과 중량물 이송 사례' : 'Production automation and heavy-workpiece transfer' },
    { id: 'safety', title: ko ? 'AI 안전 관제' : 'AI Safety Monitoring', description: ko ? 'AprilTag와 천장 CCTV로 지게차를 식별하고, 차량용 카메라 없이 태블릿에서 주변 탑뷰를 실시간 확인합니다.' : 'Identify forklifts with AprilTag and overhead CCTV and view live surroundings on a tablet, without vehicle-mounted cameras.', image: safetyImage, alt: ko ? 'AI 안전 관제' : 'AI safety monitoring' },
  ]
}
