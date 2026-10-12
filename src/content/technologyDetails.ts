import { visuals } from './company'
import humanoid from '@/assets/img/carousel/humanoid.png'
import automation from '@/assets/img/robot-automation.png'

type Text = [string, string]
type Feature = { title: Text; paragraphs: Text[]; labels: Text[]; image?: string; alt?: Text }
type Detail = { intro: Text; flow: { title: Text; text: Text }[]; features: Feature[]; applications: { title: Text; text: Text }[] }

// Company profile and AHAP role split: humanoid execution/integration belongs
// here; task allocation, priorities and collaboration scheduling are excluded.
export const technologyDetails: Record<string, Detail> = {
  humanoid: {
    intro: ['현장 적용에서는 로봇의 움직임과 함께 작업 공간, 설비 인터페이스, 운영 조건을 살펴야 합니다. 이러한 접점을 중심으로 휴머노이드와 제조 공정의 연결을 구체화합니다.', 'Factory applications bring motion together with workspace, equipment interfaces and operating conditions. These connections guide our approach to integrating humanoids with manufacturing.'],
    flow: [
      { title: ['동작과 상태', 'Motion & states'], text: ['로봇의 움직임과 상태 정보', 'Robot motion and state information'] },
      { title: ['작업 인터페이스', 'Task interfaces'], text: ['작업 명령과 실행 결과의 연결', 'Connections between commands and execution results'] },
      { title: ['설비 연계', 'Equipment interfaces'], text: ['PLC·센서와 현장 신호', 'PLCs, sensors and on-site signals'] },
      { title: ['운영 정보', 'Operating information'], text: ['작업 상태와 이력의 활용', 'Task states and operating history'] },
    ],
    features: [
      { title: ['휴머노이드와 현장 상태의 연결', 'Connecting humanoid and site states'], paragraphs: [
        ['휴머노이드의 현장 활용은 로봇의 상태를 이해하는 데서 시작합니다. 동작 상태와 작업 진행 정보를 설비의 준비·완료 신호와 함께 살펴보는 관점으로 접근합니다.', 'Understanding robot states is a starting point for factory applications. We approach motion and task progress in the context of equipment readiness and completion signals.'],
        ['어떤 정보를 확인할지, 현장의 어느 신호와 연결할지를 작업 조건에 맞춰 정리하며 관제 구성을 구체화합니다.', 'The monitoring approach takes shape around which information matters and how it relates to site signals and task conditions.'],
      ], labels: [['로봇 상태', 'Robot states'], ['작업 정보', 'Task information'], ['현장 신호', 'Site signals']], image: humanoid, alt: ['휴머노이드 현장 연동 콘셉트 이미지', 'Concept illustration of humanoid workcell integration'] },
      { title: ['작업 실행과 설비 인터페이스', 'Task execution and equipment interfaces'], paragraphs: [
        ['로봇 제어와 PLC·센서·비전 통합 경험을 바탕으로 휴머노이드의 작업 명령과 설비 신호 사이의 접점을 다룹니다.', 'Our robot control and PLC, sensor and vision integration experience informs the interfaces between humanoid task commands and equipment signals.'],
        ['설비 구성과 작업 조건에 따라 명령 전달, 실행 상태, 결과 확인의 연결 방식을 검토합니다. 제조 공정 안에서 로봇과 주변 장치가 어떻게 맞물리는지에 초점을 둡니다.', 'We examine command delivery, execution states and result feedback according to equipment and task conditions, focusing on the interaction between robots and peripheral devices.'],
      ], labels: [['로봇 인터페이스', 'Robot interfaces'], ['PLC·센서 연계', 'PLC & sensor integration'], ['실행 상태', 'Execution states']] },
      { title: ['현장 운영을 위한 상태와 이력', 'States and history for site operations'], paragraphs: [
        ['작업 상태와 실행 기록은 현장 상황을 이해하는 바탕입니다. 대기나 오류가 발생한 맥락을 살펴보고 운영에 필요한 정보를 어떻게 남길지 다룹니다.', 'Task states and execution records provide context for site operations. We consider waiting and error conditions and how to retain useful operational information.'],
        ['작업셀과 설비 조건을 함께 고려해 상태 확인과 이력 활용의 구성을 검토합니다.', 'We consider workcell and equipment conditions when shaping state monitoring and the use of operating history.'],
      ], labels: [['상태 확인', 'State monitoring'], ['작업 기록', 'Task records'], ['운영 맥락', 'Operational context']] },
    ],
    applications: [
      { title: ['부품 공급', 'Parts supply'], text: ['공급 작업과 설비 준비 신호의 연계 검토', 'Exploring connections between supply tasks and equipment readiness'] },
      { title: ['회수·적치', 'Retrieval & stacking'], text: ['작업물 취급 조건과 설비 접점 검토', 'Considering handling conditions and equipment interfaces'] },
      { title: ['작업셀 구성', 'Workcell configuration'], text: ['로봇·주변 장치·작업 공간을 고려한 현장 연계', 'Site integration considering robots, peripheral devices and workspace'] },
    ],
  },
  'twin-r-ax': {
    intro: ['공장의 공간 정보와 운영데이터를 하나의 환경으로 연결합니다. 3D 공장 구성부터 설비·시스템 연결, 운영 화면과 대응 흐름 구성까지 제조 현장에 맞게 확장합니다.', 'Connect factory spaces and operational data in one environment, from 3D factory layouts and system integration to operational views and response workflows.'],
    flow: [
      { title: ['CREATE', 'CREATE'], text: ['3D 자산과 설비 구성', 'Create 3D assets and equipment'] },
      { title: ['CONNECT', 'CONNECT'], text: ['설비·MES·DB·AI 연결', 'Connect equipment, MES, databases and AI'] },
      { title: ['BUILD', 'BUILD'], text: ['공장 환경과 운영 화면 구성', 'Build factory environments and operational views'] },
      { title: ['OPERATE', 'OPERATE'], text: ['현장 상태와 이력 확인', 'Monitor states and history'] },
      { title: ['ORCHESTRATE', 'ORCHESTRATE'], text: ['데이터 흐름과 대응 절차 연계', 'Link data flows and response procedures'] },
    ],
    features: [
      { title: ['편집 가능한 3D 제조 환경', 'An editable 3D manufacturing environment'], paragraphs: [
        ['공장 배치와 설비를 3D 공간에 구성하고, 현장 구조에 맞춰 자산을 배치합니다. 설비와 작업 공간의 관계를 시각적으로 확인할 수 있는 운영 환경을 만듭니다.', 'Arrange factory layouts and equipment in a 3D space that reflects the site. Create an operational environment that makes relationships between equipment and work areas visible.'],
        ['공장 배치나 설비 구성이 바뀌면 가상환경도 함께 수정합니다. 공간 정보와 운영 정보를 연결하는 기반으로 활용합니다.', 'Update the virtual environment as layouts and equipment change, maintaining a shared context for spatial and operational information.'],
      ], labels: [['3D 자산 구성', '3D assets'], ['설비 배치', 'Equipment layouts'], ['공장 환경 편집', 'Factory editing']], image: visuals.twin, alt: ['TWIN R-AX 구성', 'TWIN R-AX overview'] },
      { title: ['설비에서 MES·AI까지 이어지는 데이터', 'Data connections from equipment to MES and AI'], paragraphs: [
        ['설비 상태와 생산데이터를 MES·데이터베이스·기존 AI와 연결합니다. 서로 다른 시스템의 정보를 현장 운영에 필요한 흐름으로 구성합니다.', 'Connect equipment states and production data with MES, databases and existing AI, organizing information from different systems into useful operational flows.'],
        ['연결한 데이터는 대시보드와 운영 시스템에서 재사용합니다. 새 설비나 로직을 추가할 때 데이터 전달 경로도 현장 구성에 맞게 변경할 수 있습니다.', 'Reuse connected data in dashboards and operational systems. Adapt data routes as new equipment and logic are introduced.'],
      ], labels: [['설비·생산데이터', 'Equipment & production'], ['MES·데이터베이스', 'MES & databases'], ['기존 AI 연계', 'Existing AI integration']] },
      { title: ['현장 맥락을 담은 운영 모니터링', 'Operational monitoring with factory context'], paragraphs: [
        ['설비와 작업 공간의 위치를 바탕으로 작업 상태, 대기, 오류와 복구 이력을 확인합니다. 데이터가 어느 설비와 공정에 해당하는지 공간 정보와 함께 살펴봅니다.', 'Review task states, waiting, errors and recovery history in the context of equipment and work areas. See which process and asset each data point relates to.'],
        ['현장 정보와 AI 연계를 바탕으로 운영 지원과 대응 절차를 구성합니다. 공장 환경이 바뀌면 설비·데이터·운영 로직을 함께 조정하는 제조 플랫폼입니다.', 'Configure operational support and response procedures using factory information and AI connections. Adapt equipment, data and operational logic together as the factory evolves.'],
      ], labels: [['상태 모니터링', 'Status monitoring'], ['운영 이력', 'Operating history'], ['대응 절차 연결', 'Response workflows']] },
    ],
    applications: [
      { title: ['공장·설비 시각화', 'Factory visualization'], text: ['공정 배치와 설비 상태를 함께 확인하는 운영 환경', 'An operational environment combining factory layouts and equipment states'] },
      { title: ['기존 시스템 연결', 'Existing system integration'], text: ['설비·MES·데이터베이스 정보를 대시보드와 운영 시스템에 연계', 'Link equipment, MES and database information with dashboards and operations'] },
      { title: ['현장 변화에 맞춘 확장', 'Adaptation to site changes'], text: ['설비 추가와 배치 변경에 맞춰 3D 환경과 데이터 흐름 수정', 'Adapt 3D environments and data flows to new equipment and layouts'] },
    ],
  },
  automation: {
    intro: ['작업물의 이동과 취급, 검사와 적재를 하나의 공정으로 연결합니다. 작업 환경·하중·설비 조건을 함께 검토해 로봇과 주변 장치를 구성합니다.', 'Connect material transport, handling, inspection and stacking into a production process. Configure robots and peripheral equipment around workspace, payload and equipment conditions.'],
    flow: [
      { title: ['공정 검토', 'Review'], text: ['작업물·하중·동선·설비 조건 확인', 'Assess workpieces, loads, routes and equipment'] },
      { title: ['장치 구성', 'Configure'], text: ['모바일 로봇·그리퍼·지그 선정', 'Configure mobile robots, grippers and fixtures'] },
      { title: ['공정 연동', 'Integrate'], text: ['검사·마킹·적재·이송 연결', 'Connect inspection, marking, stacking and transfer'] },
      { title: ['설치·시운전', 'Commission'], text: ['현장 조건에 맞춘 동작 확인', 'Verify operation under on-site conditions'] },
    ],
    features: [
      { title: ['모바일 로봇 기반 물류 이송', 'Mobile robot material transport'], paragraphs: [
        ['HIKROBOT의 저상형·포크형·카트형·고하중형·컨베이어형 모바일 로봇으로 현장에 맞는 물류 이송을 구성합니다. 작업물의 형태와 이송 방식에 따라 로봇 유형을 검토합니다.', 'Configure transport with HIKROBOT latent, forklift, cart, heavy-duty and conveyor robots. Select robot types around the workpiece and transfer method.'],
        ['공정 사이의 공급·회수 구간과 설비 접점을 함께 살펴보고, 제조 흐름에 맞춰 이송 구성을 연결합니다.', 'Review supply and retrieval routes between processes alongside equipment interfaces to connect transport with production.'],
      ], labels: [['HIKROBOT', 'HIKROBOT'], ['공정 간 이송', 'Inter-process transfer'], ['현장 맞춤 구성', 'Site-specific configuration']], image: visuals.logistics, alt: ['HIKROBOT 모바일 로봇 제품군', 'HIKROBOT mobile robot lineup'] },
      { title: ['작업물에 맞춘 로봇 핸들링', 'Handling tailored to the workpiece'], paragraphs: [
        ['마그네틱 그리퍼를 활용한 Pick & Place와 MoonLifter 기반 작업자 보조 핸들링을 구성합니다. 작업물의 형상, 하중과 취급 조건에 맞춰 장치를 조합합니다.', 'Configure magnetic-gripper pick-and-place and MoonLifter operator-assisted handling. Combine devices according to workpiece shape, payload and handling requirements.'],
        ['맞춤형 지그와 레일 구조물을 함께 구성해 인양·이송·안착 작업을 연결합니다. 로봇과 주변 장치가 실제 작업 공간에서 연동되도록 설계합니다.', 'Combine custom fixtures and rails for lifting, transfer and placement, integrating robots and peripheral devices within the actual workspace.'],
      ], labels: [['마그네틱 그리퍼', 'Magnetic grippers'], ['MoonLifter', 'MoonLifter'], ['맞춤형 지그·레일', 'Custom fixtures & rails']], image: automation, alt: ['로보틱박스 그리퍼 및 로봇자동화 현장', 'RoboticBox grippers and robot automation installation'] },
      { title: ['검사부터 적재까지 제조 공정 통합', 'Process integration from inspection to stacking'], paragraphs: [
        ['에어블로잉, AI 품질검사, 마킹, 적재와 이송을 연결하는 자동화 라인을 구성합니다. 개별 장치의 작업이 다음 공정으로 이어지도록 설비 간 신호와 동작을 연동합니다.', 'Build automated lines connecting air blowing, AI quality inspection, marking, stacking and transfer. Link equipment signals and actions so each operation feeds the next process.'],
        ['중량물 이송 등 공정별 요구조건을 반영하고, 현장 설치와 시운전을 통해 작업 흐름을 확인합니다.', 'Account for process-specific requirements such as heavy-workpiece transfer and verify the workflow through installation and commissioning.'],
      ], labels: [['AI 품질검사', 'AI quality inspection'], ['마킹·적재', 'Marking & stacking'], ['설비 연동', 'Equipment integration']], image: visuals.automation, alt: ['제조 자동화 구성', 'Manufacturing automation configurations'] },
    ],
    applications: [
      { title: ['공정 간 물류', 'Process logistics'], text: ['부품 공급과 완료품 이송 구간의 모바일 로봇 구성', 'Mobile robot configurations for parts supply and finished-workpiece transfer'] },
      { title: ['작업자 보조 핸들링', 'Assisted handling'], text: ['반복 인양·이송·안착 작업에 맞춘 취급 장치 구성', 'Handling devices for repeated lifting, transfer and placement'] },
      { title: ['제조 자동화 라인', 'Automated production lines'], text: ['검사·마킹·적재와 이송 설비를 연결하는 공정 구성', 'Integrated inspection, marking, stacking and transport equipment'] },
    ],
  },
}
