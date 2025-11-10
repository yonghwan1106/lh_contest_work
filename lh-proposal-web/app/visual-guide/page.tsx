'use client';

import Link from 'next/link';
import {
  LHRoleTransformation,
  JobCreationChart,
  DebtRatioChart,
  RegionalMap,
  RevenueModel,
  RoadmapTimeline,
  ComparisonTable,
  ExtinctionRiskChart,
} from '../components/VisualCharts';

export default function VisualGuidePage() {
  return (
    <div className="min-h-screen bg-stone-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, #1a1a1a 50px, #1a1a1a 52px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, #1a1a1a 50px, #1a1a1a 52px)`
        }}></div>
      </div>

      {/* Header */}
      <header className="bg-stone-900 border-b-4 border-green-600 sticky top-0 z-50 relative">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-green-600 flex items-center justify-center group-hover:bg-green-500 transition-colors">
              <span className="text-white font-black text-xl">←</span>
            </div>
            <span className="text-white font-bold tracking-wide">HOME</span>
          </Link>
          <div className="text-xs font-mono text-stone-400 tracking-widest">
            02 — VISUAL DATA / <span className="text-green-400">8종</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Title */}
        <div className="bg-stone-900 border-l-8 border-green-600 p-12 mb-12">
          <div className="absolute -left-2 top-0 bottom-0 w-2 bg-gradient-to-b from-green-500 to-blue-500 opacity-50"></div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            제안서<br/>
            <span className="text-green-400">시각 자료</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-blue-600 mb-4"></div>
          <p className="text-xl text-stone-300 font-mono">
            8종의 인터랙티브 차트 및 다이어그램
          </p>
        </div>

        {/* Visual Materials */}
        <div className="space-y-8">
          {/* Visual 1 */}
          <section className="bg-white border-l-4 border-blue-600 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-black text-xl">
                01
              </div>
              <h2 className="text-2xl font-black text-stone-900 tracking-tight">LH 역할 전환 다이어그램</h2>
              <span className="ml-auto bg-blue-600 text-white px-4 py-1 text-xs font-bold tracking-wide">
                개선방안 섹션
              </span>
            </div>
            <LHRoleTransformation />
            <div className="mt-6 border-l-4 border-blue-400 bg-blue-50 p-4">
              <p className="text-sm text-stone-700 font-mono">
                <strong className="text-blue-600">효과:</strong> LH 역할 변화를 한눈에 보여줌, 창의성 강조
              </p>
            </div>
          </section>

          {/* Visual 2 */}
          <section className="bg-white border-l-4 border-green-600 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-black text-xl">
                02
              </div>
              <h2 className="text-2xl font-black text-stone-900 tracking-tight">일자리 창출 추이</h2>
              <span className="ml-auto bg-green-600 text-white px-4 py-1 text-xs font-bold tracking-wide">
                기대효과 섹션
              </span>
            </div>
            <JobCreationChart />
            <div className="mt-6 border-l-4 border-green-400 bg-green-50 p-4">
              <p className="text-sm text-stone-700 font-mono">
                <strong className="text-green-600">효과:</strong> 정량적 성과 시각화, 효과성 극대화
              </p>
            </div>
          </section>

          {/* Visual 3 */}
          <section className="bg-white border-l-4 border-purple-600 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-black text-xl">
                03
              </div>
              <h2 className="text-2xl font-black text-stone-900 tracking-tight">LH 부채비율 개선</h2>
              <span className="ml-auto bg-purple-600 text-white px-4 py-1 text-xs font-bold tracking-wide">
                기대효과 섹션
              </span>
            </div>
            <DebtRatioChart />
            <div className="mt-6 border-l-4 border-purple-400 bg-purple-50 p-4">
              <p className="text-sm text-stone-700 font-mono">
                <strong className="text-purple-600">효과:</strong> 재정 개선 효과를 명확히 제시, 실행가능성 강화
              </p>
            </div>
          </section>

          {/* Visual 4 */}
          <section className="bg-white border-l-4 border-pink-600 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-black text-xl">
                04
              </div>
              <h2 className="text-2xl font-black text-stone-900 tracking-tight">지역별 특화 산업 맵</h2>
              <span className="ml-auto bg-pink-600 text-white px-4 py-1 text-xs font-bold tracking-wide">
                개선방안 섹션
              </span>
            </div>
            <RegionalMap />
            <div className="mt-6 border-l-4 border-pink-400 bg-pink-50 p-4">
              <p className="text-sm text-stone-700 font-mono">
                <strong className="text-pink-600">효과:</strong> 구체적 적용 사례 제시, 창의성·효과성 강조
              </p>
            </div>
          </section>

          {/* Visual 5 */}
          <section className="bg-white border-l-4 border-teal-600 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-black text-xl">
                05
              </div>
              <h2 className="text-2xl font-black text-stone-900 tracking-tight">수익 모델</h2>
              <span className="ml-auto bg-teal-600 text-white px-4 py-1 text-xs font-bold tracking-wide">
                개선방안 섹션
              </span>
            </div>
            <RevenueModel />
            <div className="mt-6 border-l-4 border-teal-400 bg-teal-50 p-4">
              <p className="text-sm text-stone-700 font-mono">
                <strong className="text-teal-600">효과:</strong> 수익 다각화 입증, 실행가능성 강화
              </p>
            </div>
          </section>

          {/* Visual 6 */}
          <section className="bg-white border-l-4 border-orange-600 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-black text-xl">
                06
              </div>
              <h2 className="text-2xl font-black text-stone-900 tracking-tight">4단계 로드맵 타임라인</h2>
              <span className="ml-auto bg-orange-600 text-white px-4 py-1 text-xs font-bold tracking-wide">
                개선방안 섹션
              </span>
            </div>
            <RoadmapTimeline />
            <div className="mt-6 border-l-4 border-orange-400 bg-orange-50 p-4">
              <p className="text-sm text-stone-700 font-mono">
                <strong className="text-orange-600">효과:</strong> 단계별 실행 가능성 입증, 구체성 강화
              </p>
            </div>
          </section>

          {/* Visual 7 */}
          <section className="bg-white border-l-4 border-red-600 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-black text-xl">
                07
              </div>
              <h2 className="text-2xl font-black text-stone-900 tracking-tight">기존 vs 제안 비교표</h2>
              <span className="ml-auto bg-red-600 text-white px-4 py-1 text-xs font-bold tracking-wide">
                문제점 섹션
              </span>
            </div>
            <ComparisonTable />
            <div className="mt-6 border-l-4 border-red-400 bg-red-50 p-4">
              <p className="text-sm text-stone-700 font-mono">
                <strong className="text-red-600">효과:</strong> 차별화 명확, 창의성 극대화
              </p>
            </div>
          </section>

          {/* Visual 8 */}
          <section className="bg-white border-l-4 border-indigo-600 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-black text-xl">
                08
              </div>
              <h2 className="text-2xl font-black text-stone-900 tracking-tight">지방소멸위험지역 감소</h2>
              <span className="ml-auto bg-indigo-600 text-white px-4 py-1 text-xs font-bold tracking-wide">
                기대효과 섹션
              </span>
            </div>
            <ExtinctionRiskChart />
            <div className="mt-6 border-l-4 border-indigo-400 bg-indigo-50 p-4">
              <p className="text-sm text-stone-700 font-mono">
                <strong className="text-indigo-600">효과:</strong> 정책 목표 달성도를 직관적으로 표현, 효과성 강조
              </p>
            </div>
          </section>

          {/* Summary Section */}
          <section className="bg-stone-900 border-t-8 border-gradient-to-r from-purple-600 to-pink-600 p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, #fff 20px, #fff 22px)`
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="inline-block bg-white px-6 py-2 mb-8">
                <h2 className="text-2xl font-black text-stone-900 tracking-wider">시각 자료 활용 가이드</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="border-l-4 border-blue-400 bg-white/10 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-blue-400"></div>
                    <h3 className="font-black text-white text-lg">핵심 메시지</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-stone-300 font-mono">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-blue-400 mt-2 shrink-0"></div>
                      <span>LH 역할 전환 (공급자→촉진자)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-blue-400 mt-2 shrink-0"></div>
                      <span>정량적 성과 (일자리, 부채, 인구)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-blue-400 mt-2 shrink-0"></div>
                      <span>지역 맞춤형 접근</span>
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-400 bg-white/10 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-green-400"></div>
                    <h3 className="font-black text-white text-lg">강조 포인트</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-stone-300 font-mono">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-green-400 mt-2 shrink-0"></div>
                      <span>창의성: 새로운 LH 역할</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-green-400 mt-2 shrink-0"></div>
                      <span>실행가능성: 단계별 로드맵</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-green-400 mt-2 shrink-0"></div>
                      <span>효과성: 정량적 지표</span>
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-400 bg-white/10 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-purple-400"></div>
                    <h3 className="font-black text-white text-lg">차별화 요소</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-stone-300 font-mono">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-purple-400 mt-2 shrink-0"></div>
                      <span>인터랙티브 차트</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-purple-400 mt-2 shrink-0"></div>
                      <span>반응형 디자인</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-purple-400 mt-2 shrink-0"></div>
                      <span>직관적 시각화</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-4 bg-stone-900 text-white px-8 py-4 hover:bg-stone-800 transition-colors border-l-4 border-green-600 group"
          >
            <div className="w-10 h-10 bg-green-600 flex items-center justify-center group-hover:bg-green-500 transition-colors">
              <span className="text-white font-black text-xl">←</span>
            </div>
            <span className="font-black text-lg tracking-wide">홈으로 돌아가기</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
