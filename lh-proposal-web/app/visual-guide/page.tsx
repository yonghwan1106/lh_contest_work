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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-green-600 hover:text-green-800 font-semibold">
            ← 돌아가기
          </Link>
          <div className="text-sm text-gray-500">
            시각 자료 | 8종
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Title */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-2xl p-12 text-white mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            🎨 제안서 시각 자료
          </h1>
          <p className="text-xl opacity-90">
            인터랙티브 차트 및 다이어그램
          </p>
        </div>

        {/* Visual Materials */}
        <div className="space-y-12">
          {/* Visual 1 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h2 className="text-2xl font-bold text-gray-900">LH 역할 전환 다이어그램</h2>
              <span className="ml-auto bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                개선방안 섹션
              </span>
            </div>
            <LHRoleTransformation />
            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>효과:</strong> LH 역할 변화를 한눈에 보여줌, 창의성 강조
              </p>
            </div>
          </section>

          {/* Visual 2 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h2 className="text-2xl font-bold text-gray-900">일자리 창출 추이</h2>
              <span className="ml-auto bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                기대효과 섹션
              </span>
            </div>
            <JobCreationChart />
            <div className="mt-4 bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>효과:</strong> 정량적 성과 시각화, 효과성 극대화
              </p>
            </div>
          </section>

          {/* Visual 3 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h2 className="text-2xl font-bold text-gray-900">LH 부채비율 개선</h2>
              <span className="ml-auto bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                기대효과 섹션
              </span>
            </div>
            <DebtRatioChart />
            <div className="mt-4 bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>효과:</strong> 재정 개선 효과를 명확히 제시, 실행가능성 강화
              </p>
            </div>
          </section>

          {/* Visual 4 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h2 className="text-2xl font-bold text-gray-900">지역별 특화 산업 맵</h2>
              <span className="ml-auto bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                개선방안 섹션
              </span>
            </div>
            <RegionalMap />
            <div className="mt-4 bg-pink-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>효과:</strong> 구체적 적용 사례 제시, 창의성·효과성 강조
              </p>
            </div>
          </section>

          {/* Visual 5 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <h2 className="text-2xl font-bold text-gray-900">수익 모델</h2>
              <span className="ml-auto bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                개선방안 섹션
              </span>
            </div>
            <RevenueModel />
            <div className="mt-4 bg-teal-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>효과:</strong> 수익 다각화 입증, 실행가능성 강화
              </p>
            </div>
          </section>

          {/* Visual 6 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                6
              </div>
              <h2 className="text-2xl font-bold text-gray-900">4단계 로드맵 타임라인</h2>
              <span className="ml-auto bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                개선방안 섹션
              </span>
            </div>
            <RoadmapTimeline />
            <div className="mt-4 bg-orange-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>효과:</strong> 단계별 실행 가능성 입증, 구체성 강화
              </p>
            </div>
          </section>

          {/* Visual 7 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                7
              </div>
              <h2 className="text-2xl font-bold text-gray-900">기존 vs 제안 비교표</h2>
              <span className="ml-auto bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                문제점 섹션
              </span>
            </div>
            <ComparisonTable />
            <div className="mt-4 bg-red-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>효과:</strong> 차별화 명확, 창의성 극대화
              </p>
            </div>
          </section>

          {/* Visual 8 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                8
              </div>
              <h2 className="text-2xl font-bold text-gray-900">지방소멸위험지역 감소</h2>
              <span className="ml-auto bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                기대효과 섹션
              </span>
            </div>
            <ExtinctionRiskChart />
            <div className="mt-4 bg-indigo-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>효과:</strong> 정책 목표 달성도를 직관적으로 표현, 효과성 강조
              </p>
            </div>
          </section>

          {/* Summary Section */}
          <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">📊 시각 자료 활용 가이드</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-3">💡 핵심 메시지</h3>
                <ul className="text-sm space-y-2 opacity-90">
                  <li>• LH 역할 전환 (공급자→촉진자)</li>
                  <li>• 정량적 성과 (일자리, 부채, 인구)</li>
                  <li>• 지역 맞춤형 접근</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">🎯 강조 포인트</h3>
                <ul className="text-sm space-y-2 opacity-90">
                  <li>• 창의성: 새로운 LH 역할</li>
                  <li>• 실행가능성: 단계별 로드맵</li>
                  <li>• 효과성: 정량적 지표</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">✨ 차별화 요소</h3>
                <ul className="text-sm space-y-2 opacity-90">
                  <li>• 인터랙티브 차트</li>
                  <li>• 반응형 디자인</li>
                  <li>• 직관적 시각화</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center py-8">
          <Link
            href="/"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
          >
            ← 홈으로 돌아가기
          </Link>
        </div>
      </main>
    </div>
  );
}
