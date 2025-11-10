import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-12">
          <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            국토교통부 공모전
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            「국민과 함께 만드는 새로운 LH」
          </h1>
          <p className="text-2xl text-gray-600 mb-4">
            지역이 선택하는 미래, LH가 연결하는 혁신
          </p>
          <p className="text-xl text-blue-600 font-semibold">
            지역특화 리빙랩 도시 플랫폼
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Link
            href="/proposal"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-blue-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                📄 제안서 보기
              </h2>
              <span className="text-4xl group-hover:translate-x-2 transition-transform">
                →
              </span>
            </div>
            <p className="text-gray-600 text-lg mb-4">
              LH 개혁을 위한 혁신적인 제안서를 확인하세요
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                5페이지
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                지역 발전
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                리빙랩
              </span>
            </div>
          </Link>

          <Link
            href="/visual-guide"
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-green-500"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                🎨 시각 자료 가이드
              </h2>
              <span className="text-4xl group-hover:translate-x-2 transition-transform">
                →
              </span>
            </div>
            <p className="text-gray-600 text-lg mb-4">
              제안서에 활용할 8종의 시각 자료를 확인하세요
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                다이어그램
              </span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                플로우차트
              </span>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                그래프
              </span>
            </div>
          </Link>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            핵심 차별화 포인트
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="font-bold text-gray-900 mb-2">역할 전환</h4>
              <p className="text-sm text-gray-600">공급자 → 촉진자</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="font-bold text-gray-900 mb-2">지역 주도</h4>
              <p className="text-sm text-gray-600">중앙 → 지역</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h4 className="font-bold text-gray-900 mb-2">민간 자본</h4>
              <p className="text-sm text-gray-600">LH 단독 → 민간 활용</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🧪</div>
              <h4 className="font-bold text-gray-900 mb-2">리빙랩</h4>
              <p className="text-sm text-gray-600">일괄 → 단계적</p>
            </div>
          </div>
        </div>

        {/* Expected Results */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">
            기대 효과 (10년 후)
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">100개</div>
              <p className="text-lg opacity-90">도시 네트워크</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5만개</div>
              <p className="text-lg opacity-90">신규 일자리</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">2조원</div>
              <p className="text-lg opacity-90">민간 투자</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>국토교통부, 한국토지주택공사·국토연구원 주최</p>
          <p className="mt-2">제출 기한: 2025.11.30(금) 18:00</p>
        </div>
      </div>
    </main>
  );
}
