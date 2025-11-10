'use client';

import { useState } from 'react';

// Visual 1: LH Role Transformation Diagram
export function LHRoleTransformation() {
  return (
    <div className="bg-white rounded-xl p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* 기존 모델 */}
        <div className="bg-red-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-red-600 mb-6 text-center">기존 모델 ❌</h3>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-40 h-40 bg-red-500 rounded-full flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-3xl mb-2">🏢</div>
                <div className="font-bold">LH</div>
                <div className="text-sm">(공급자)</div>
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-sm font-semibold">직접 개발</div>
              <div className="text-sm font-semibold">단독 투자</div>
              <div className="text-2xl">↓</div>
            </div>
            <div className="w-40 h-20 bg-red-400 rounded-lg flex items-center justify-center text-white font-bold">
              주택 공급
            </div>
            <div className="text-center">
              <div className="text-sm text-red-600 font-semibold">→ 부채 증가</div>
              <div className="text-sm text-red-600 font-semibold">→ 지속 불가능</div>
            </div>
          </div>
        </div>

        {/* 새로운 모델 */}
        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-600 mb-6 text-center">새로운 모델 ✅</h3>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-2xl mb-1">🏛️</div>
                <div className="text-sm">지자체</div>
                <div className="text-xs">(주도)</div>
              </div>
            </div>
            <div className="text-2xl">↓</div>
            <div className="w-40 h-40 bg-green-500 rounded-full flex items-center justify-center text-white">
              <div className="text-center">
                <div className="text-3xl mb-2">🔗</div>
                <div className="font-bold">LH</div>
                <div className="text-sm">(촉진자)</div>
              </div>
            </div>
            <div className="text-sm font-semibold">매칭 · 연결</div>
            <div className="grid grid-cols-3 gap-2">
              <div className="w-20 h-20 bg-blue-400 rounded-lg flex items-center justify-center text-white text-2xl">
                🏢
              </div>
              <div className="w-20 h-20 bg-purple-400 rounded-lg flex items-center justify-center text-white text-2xl">
                🎓
              </div>
              <div className="w-20 h-20 bg-orange-400 rounded-lg flex items-center justify-center text-white text-2xl">
                👥
              </div>
            </div>
            <div className="text-2xl">↓</div>
            <div className="w-full h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center text-white font-bold">
              지역 생태계 조성
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Visual 2: Job Creation Chart
export function JobCreationChart() {
  const data = [
    { year: '1년차', jobs: 1500, label: '1,500개' },
    { year: '2년차', jobs: 5000, label: '5,000개' },
    { year: '3년차', jobs: 20000, label: '2만개' },
    { year: '5년차', jobs: 35000, label: '3.5만개' },
    { year: '10년차', jobs: 50000, label: '5만개' },
  ];

  const maxJobs = 50000;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">일자리 창출 추이</h3>
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-end justify-around gap-4" style={{ height: '400px' }}>
          {data.map((item) => {
            const heightPercent = (item.jobs / maxJobs) * 100;
            return (
              <div key={item.year} className="flex-1 flex flex-col items-center h-full">
                <div className="relative w-full flex flex-col justify-end group" style={{ height: '100%' }}>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    {item.label}
                  </div>
                  <div
                    className="w-full bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400 rounded-t-lg transition-all duration-300 hover:shadow-xl cursor-pointer flex items-center justify-center"
                    style={{ height: `${heightPercent}%` }}
                  >
                    <span className="text-white font-bold text-xs md:text-sm">
                      {item.label}
                    </span>
                  </div>
                </div>
                <div className="text-xs md:text-sm mt-3 font-semibold text-gray-700">{item.year}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
            <span className="text-xl">📈</span>
            <span>10년간 5만개 일자리 창출</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Visual 3: Debt Ratio Chart
export function DebtRatioChart() {
  const data = [
    { year: '현재', ratio: 222, label: '222%' },
    { year: '3년차', ratio: 200, label: '200%' },
    { year: '5년차', ratio: 180, label: '180%' },
    { year: '10년차', ratio: 150, label: '150%' },
  ];

  return (
    <div className="bg-gradient-to-br from-red-50 to-green-50 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">LH 부채비율 개선</h3>
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-end justify-around gap-4" style={{ height: '400px' }}>
          {data.map((item, index) => {
            // 150%를 0%, 222%를 100%로 매핑 (역으로 표시)
            const barHeight = ((item.ratio - 150) / (222 - 150)) * 100;
            const isFirst = index === 0;
            const isLast = index === data.length - 1;

            return (
              <div key={item.year} className="flex-1 flex flex-col items-center h-full">
                <div className="relative w-full max-w-[100px] flex flex-col justify-end group h-full">
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    {item.label}
                  </div>
                  <div
                    className={`w-full rounded-t-lg transition-all duration-300 hover:shadow-xl cursor-pointer flex items-center justify-center ${
                      isFirst ? 'bg-gradient-to-t from-red-600 to-red-400' :
                      isLast ? 'bg-gradient-to-t from-green-600 to-green-400' :
                      'bg-gradient-to-t from-orange-600 to-orange-400'
                    }`}
                    style={{ height: `${barHeight}%` }}
                  >
                    <span className="text-white font-bold text-sm md:text-base">
                      {item.label}
                    </span>
                  </div>
                </div>
                <div className="text-xs md:text-sm mt-3 font-semibold text-gray-700">{item.year}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
            <span className="text-xl">📉</span>
            <span>10년간 72%p 개선 (222% → 150%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Visual 4: Regional Specialization Map
export function RegionalMap() {
  const regions = [
    { name: '강원도', icon: '🏔️', industry: '관광·헬스케어', color: 'blue', items: ['의료관광 융합', '시니어 웰니스 타운'] },
    { name: '전라남도', icon: '⚡', industry: '신재생에너지', color: 'green', items: ['태양광 클러스터', 'AI 스마트팜'] },
    { name: '경상북도', icon: '🎬', industry: '문화콘텐츠', color: 'purple', items: ['K-콘텐츠 스튜디오', '에듀테크 허브'] },
    { name: '충청남도', icon: '🏭', industry: '제조업 혁신', color: 'orange', items: ['스마트공장 실증', '전기차 부품 R&D'] },
  ];

  const colorMap: {[key: string]: string} = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
  };

  return (
    <div className="bg-white rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">지역별 특화 산업 (예시)</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {regions.map((region) => (
          <div
            key={region.name}
            className={`bg-gradient-to-br ${colorMap[region.color]} rounded-xl p-6 text-white transform transition-transform hover:scale-105 cursor-pointer`}
          >
            <div className="text-6xl mb-4 text-center">{region.icon}</div>
            <h4 className="text-2xl font-bold mb-2 text-center">{region.name}</h4>
            <p className="text-lg font-semibold mb-4 text-center opacity-90">{region.industry} 리빙랩</p>
            <div className="space-y-2">
              {region.items.map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white/20 rounded-lg px-3 py-2">
                  <span className="text-xl">•</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Visual 5: Revenue Model (Donut Chart)
export function RevenueModel() {
  const segments = [
    { name: '플랫폼 수수료', value: 40, amount: 200, color: '#3B82F6', icon: '🔗' },
    { name: '임대 수익', value: 30, amount: 150, color: '#10B981', icon: '🏢' },
    { name: '개발이익 배분', value: 20, amount: 100, color: '#F59E0B', icon: '📈' },
    { name: '브랜드 라이선스', value: 10, amount: 50, color: '#A855F7', icon: '⭐' },
  ];

  // Calculate cumulative percentages for donut chart
  let cumulativeValue = 0;
  const segmentsWithAngles = segments.map((segment) => {
    const startAngle = (cumulativeValue * 360) / 100;
    cumulativeValue += segment.value;
    const endAngle = (cumulativeValue * 360) / 100;
    return { ...segment, startAngle, endAngle };
  });

  // Create SVG path for donut segment
  const createDonutPath = (startAngle: number, endAngle: number, outerRadius: number, innerRadius: number) => {
    const startRad = ((startAngle - 90) * Math.PI) / 180;
    const endRad = ((endAngle - 90) * Math.PI) / 180;

    const x1 = 150 + outerRadius * Math.cos(startRad);
    const y1 = 150 + outerRadius * Math.sin(startRad);
    const x2 = 150 + outerRadius * Math.cos(endRad);
    const y2 = 150 + outerRadius * Math.sin(endRad);

    const x3 = 150 + innerRadius * Math.cos(endRad);
    const y3 = 150 + innerRadius * Math.sin(endRad);
    const x4 = 150 + innerRadius * Math.cos(startRad);
    const y4 = 150 + innerRadius * Math.sin(startRad);

    const largeArc = endAngle - startAngle > 180 ? 1 : 0;

    return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`;
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        LH 신규 수익 구조 (5년차 기준 500억원)
      </h3>
      <div className="bg-white rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Donut Chart */}
          <div className="relative">
            <svg width="300" height="300" viewBox="0 0 300 300" className="transform -rotate-0">
              {segmentsWithAngles.map((segment, index) => (
                <g key={segment.name} className="group cursor-pointer">
                  <path
                    d={createDonutPath(segment.startAngle, segment.endAngle, 140, 80)}
                    fill={segment.color}
                    className="transition-all duration-300 hover:opacity-80"
                    stroke="white"
                    strokeWidth="2"
                  />
                </g>
              ))}
            </svg>
            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">500억</div>
                <div className="text-sm text-gray-600 mt-1">총 수익</div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-4">
            {segments.map((segment) => (
              <div key={segment.name} className="flex items-center gap-3 group cursor-pointer">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold transition-transform group-hover:scale-110"
                  style={{ backgroundColor: segment.color }}
                >
                  {segment.value}%
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{segment.icon}</span>
                    <span className="font-semibold text-gray-900">{segment.name}</span>
                  </div>
                  <div className="text-sm text-gray-600">{segment.amount}억원</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Summary */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-6 text-white text-center">
          <div className="text-sm mb-2 opacity-90">연간 총 수익 (5년차 예상)</div>
          <div className="text-5xl font-bold mb-2">500억원</div>
          <div className="text-sm opacity-90">민간 투자 유치 및 플랫폼 운영 수익</div>
        </div>
      </div>
    </div>
  );
}

// Visual 6: 4-Stage Roadmap
export function RoadmapTimeline() {
  const stages = [
    {
      year: '1년차',
      title: '실험 단계',
      icon: '🔬',
      items: ['3개 시범도시 운영', '파일럿 프로젝트 시작', '주민 참여 검증'],
      investment: '300억원',
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2년차',
      title: '검증 단계',
      icon: '✅',
      items: ['성공 모델 도출', '정량성과 측정', '피드백 반영'],
      investment: '500억원(누적)',
      color: 'from-green-500 to-green-600'
    },
    {
      year: '3-5년차',
      title: '확산 단계',
      icon: '🚀',
      items: ['50개 도시로 확대', '지역맞춤형 조정', '본격적 투자'],
      investment: '5,000억원(누적)',
      color: 'from-orange-500 to-orange-600'
    },
    {
      year: '5년차+',
      title: '자생 단계',
      icon: '🌱',
      items: ['민간 주도 자립', 'LH 모니터링 역할', '컨설팅 전환'],
      investment: '2조원(누적)',
      color: 'from-purple-500 to-purple-600'
    },
  ];

  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">4단계 로드맵</h3>

      <div className="bg-white rounded-lg p-8">
        {/* Timeline - Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stages.map((stage, index) => (
            <div
              key={stage.year}
              className={`cursor-pointer transition-all duration-300 rounded-xl p-6 ${
                activeStage === index
                  ? `bg-gradient-to-br ${stage.color} text-white shadow-2xl transform scale-105`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveStage(index)}
              onMouseEnter={() => setActiveStage(index)}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">{stage.icon}</div>
                <div className={`text-3xl font-bold mb-2 ${activeStage === index ? 'text-white' : 'text-gray-400'}`}>
                  {index + 1}
                </div>
                <div className="font-bold text-sm mb-1">{stage.year}</div>
                <div className="text-xs font-semibold">{stage.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stage Details */}
        <div className={`bg-gradient-to-br ${stages[activeStage].color} rounded-xl p-8 text-white`}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-6xl">{stages[activeStage].icon}</span>
            <div>
              <h4 className="text-3xl font-bold">{stages[activeStage].title}</h4>
              <p className="text-lg opacity-90">{stages[activeStage].year}</p>
            </div>
          </div>

          <div className="bg-white/20 rounded-lg p-6 mb-6">
            <h5 className="font-bold text-lg mb-3">주요 활동</h5>
            <ul className="space-y-2">
              {stages[activeStage].items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-xl">▸</span>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white text-gray-900 rounded-lg px-6 py-4 inline-block">
            <div className="flex items-center gap-2">
              <span className="font-semibold">민간 투자 규모:</span>
              <span className="text-2xl font-bold text-green-600">{stages[activeStage].investment}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Visual 7: Comparison Table (Animated)
export function ComparisonTable() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const comparisons = [
    { category: '의사결정', old: '중앙 주도 (하향식)', new: '지역 주도 (상향식)' },
    { category: '투자방식', old: 'LH 단독 부담', new: '민간 자본 활용 (10배 레버리지)' },
    { category: '접근방식', old: '완성형 개발', new: '리빙랩 실험→확산' },
    { category: '산업전략', old: '획일적 모델', new: '지역 특화 맞춤' },
    { category: '주민참여', old: '사후 이주', new: '기획부터 참여' },
  ];

  return (
    <div className="bg-white rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">기존 vs 제안 모델 비교</h3>
      <div className="space-y-3">
        {comparisons.map((item, index) => (
          <div
            key={item.category}
            className={`grid grid-cols-3 gap-4 p-4 rounded-lg transition-all ${
              hoveredRow === index ? 'bg-blue-50 scale-105 shadow-lg' : 'bg-gray-50'
            }`}
            onMouseEnter={() => setHoveredRow(index)}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <div className="font-bold text-gray-900 flex items-center">
              {item.category}
            </div>
            <div className="flex items-center gap-2 text-red-600">
              <span className="text-2xl">❌</span>
              <span className="text-sm">{item.old}</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <span className="text-2xl">✅</span>
              <span className="text-sm font-semibold">{item.new}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Visual 8: Extinction Risk Reduction
export function ExtinctionRiskChart() {
  return (
    <div className="bg-white rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">지방소멸위험지역 감소</h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <div className="text-sm text-gray-600 mb-2">현재</div>
          <div className="text-5xl font-bold text-red-600 mb-2">130개</div>
          <div className="text-sm text-gray-500">전체 228개 중 57%</div>
        </div>

        <div className="text-6xl text-green-600">→</div>

        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <div className="text-sm text-gray-600 mb-2">10년 후</div>
          <div className="text-5xl font-bold text-green-600 mb-2">80개</div>
          <div className="text-sm text-gray-500">전체 228개 중 35%</div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <div className="inline-block bg-gradient-to-r from-red-500 to-green-500 rounded-full px-8 py-4">
          <div className="text-white">
            <div className="text-sm font-semibold">감소율</div>
            <div className="text-4xl font-bold">38% ↓</div>
            <div className="text-sm">50개 지역 소멸 위기 탈출</div>
          </div>
        </div>
      </div>
    </div>
  );
}
