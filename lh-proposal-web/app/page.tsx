import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 relative overflow-hidden">
      {/* Background Pattern - 한국 전통 건축 패턴 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, #1a1a1a 50px, #1a1a1a 52px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, #1a1a1a 50px, #1a1a1a 52px)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header Badge */}
        <div className="mb-12 pt-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-3 relative">
            <div className="absolute -left-2 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 to-green-500"></div>
            <span className="text-sm font-bold tracking-wider">국토교통부 공모전</span>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <span className="text-xs opacity-75">2025</span>
          </div>
        </div>

        {/* Hero Section - Brutalist Design */}
        <div className="mb-20">
          <div className="relative">
            {/* Accent Line */}
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-green-600 to-blue-600"></div>

            <h1 className="text-6xl md:text-7xl font-black text-stone-900 mb-8 leading-tight tracking-tight">
              「국민과 함께<br/>
              만드는 새로운<br/>
              <span className="text-blue-600">LH</span>」
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-stone-900 text-white p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="text-sm font-mono text-blue-400 mb-3 tracking-widest">VISION</div>
                <p className="text-2xl font-bold leading-relaxed">
                  지역이 선택하는 미래,<br/>
                  LH가 연결하는 혁신
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="text-sm font-mono text-white/70 mb-3 tracking-widest">PLATFORM</div>
                <p className="text-2xl font-bold leading-relaxed">
                  지역특화<br/>
                  리빙랩 도시 플랫폼
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - Architectural Style */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          <Link
            href="/proposal"
            className="group relative bg-white border-l-8 border-blue-600 hover:border-blue-700 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative p-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs font-mono text-blue-600 mb-2 tracking-widest">01 — PROPOSAL</div>
                  <h2 className="text-4xl font-black text-stone-900 leading-tight">
                    제안서
                  </h2>
                </div>
                <div className="w-12 h-12 bg-stone-900 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <span className="text-white text-2xl">→</span>
                </div>
              </div>

              <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                LH 개혁을 위한 혁신적인<br/>
                지역특화 리빙랩 도시 플랫폼
              </p>

              <div className="flex flex-wrap gap-2">
                <div className="bg-stone-900 text-white px-4 py-1.5 text-xs font-bold tracking-wide">
                  5 PAGES
                </div>
                <div className="border-2 border-stone-300 text-stone-700 px-4 py-1.5 text-xs font-bold tracking-wide">
                  지역 발전
                </div>
                <div className="border-2 border-stone-300 text-stone-700 px-4 py-1.5 text-xs font-bold tracking-wide">
                  리빙랩
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/visual-guide"
            className="group relative bg-stone-900 border-l-8 border-green-500 hover:border-green-400 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative p-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-xs font-mono text-green-400 mb-2 tracking-widest">02 — VISUAL DATA</div>
                  <h2 className="text-4xl font-black text-white leading-tight">
                    시각 자료
                  </h2>
                </div>
                <div className="w-12 h-12 bg-white flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                  <span className="text-stone-900 group-hover:text-white text-2xl transition-colors">→</span>
                </div>
              </div>

              <p className="text-stone-300 text-lg mb-6 leading-relaxed">
                8종의 인터랙티브 차트와<br/>
                실시간 데이터 시각화
              </p>

              <div className="flex flex-wrap gap-2">
                <div className="bg-green-500 text-stone-900 px-4 py-1.5 text-xs font-bold tracking-wide">
                  INTERACTIVE
                </div>
                <div className="border-2 border-stone-600 text-stone-300 px-4 py-1.5 text-xs font-bold tracking-wide">
                  도넛차트
                </div>
                <div className="border-2 border-stone-600 text-stone-300 px-4 py-1.5 text-xs font-bold tracking-wide">
                  바차트
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Key Differentiators - Swiss Design */}
        <div className="mb-24">
          <div className="mb-8">
            <h3 className="text-xs font-mono text-stone-600 tracking-widest mb-2">KEY DIFFERENTIATORS</h3>
            <div className="h-0.5 w-24 bg-gradient-to-r from-blue-600 to-green-600"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-6 border-t-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4 font-black text-blue-600">01</div>
              <h4 className="font-black text-xl text-stone-900 mb-2 tracking-tight">역할 전환</h4>
              <div className="h-px bg-stone-200 mb-3"></div>
              <p className="text-sm text-stone-600 font-mono">공급자 → 촉진자</p>
            </div>

            <div className="bg-white p-6 border-t-4 border-green-600 hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4 font-black text-green-600">02</div>
              <h4 className="font-black text-xl text-stone-900 mb-2 tracking-tight">지역 주도</h4>
              <div className="h-px bg-stone-200 mb-3"></div>
              <p className="text-sm text-stone-600 font-mono">중앙 → 지역</p>
            </div>

            <div className="bg-white p-6 border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4 font-black text-orange-500">03</div>
              <h4 className="font-black text-xl text-stone-900 mb-2 tracking-tight">민간 자본</h4>
              <div className="h-px bg-stone-200 mb-3"></div>
              <p className="text-sm text-stone-600 font-mono">LH 단독 → 민간</p>
            </div>

            <div className="bg-white p-6 border-t-4 border-purple-600 hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl mb-4 font-black text-purple-600">04</div>
              <h4 className="font-black text-xl text-stone-900 mb-2 tracking-tight">리빙랩</h4>
              <div className="h-px bg-stone-200 mb-3"></div>
              <p className="text-sm text-stone-600 font-mono">일괄 → 단계적</p>
            </div>
          </div>
        </div>

        {/* Expected Results - Data Viz Style */}
        <div className="bg-stone-900 p-12 mb-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, #fff 20px, #fff 22px)`
            }}></div>
          </div>

          <div className="relative z-10">
            <div className="mb-10">
              <h3 className="text-xs font-mono text-green-400 tracking-widest mb-2">EXPECTED RESULTS</h3>
              <h4 className="text-4xl font-black text-white">기대 효과 <span className="text-green-400">/ 10년 후</span></h4>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="text-7xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">
                  100<span className="text-4xl text-blue-400">개</span>
                </div>
                <div className="h-1 w-20 bg-blue-400 mb-3"></div>
                <p className="text-lg text-stone-300 font-mono">도시 네트워크</p>
              </div>

              <div className="group">
                <div className="text-7xl font-black text-white mb-3 group-hover:text-green-400 transition-colors">
                  5<span className="text-4xl text-green-400">만개</span>
                </div>
                <div className="h-1 w-20 bg-green-400 mb-3"></div>
                <p className="text-lg text-stone-300 font-mono">신규 일자리</p>
              </div>

              <div className="group">
                <div className="text-7xl font-black text-white mb-3 group-hover:text-orange-400 transition-colors">
                  2<span className="text-4xl text-orange-400">조원</span>
                </div>
                <div className="h-1 w-20 bg-orange-400 mb-3"></div>
                <p className="text-lg text-stone-300 font-mono">민간 투자</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Minimal */}
        <div className="border-t-2 border-stone-200 pt-8 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-sm font-bold text-stone-900">국토교통부, 한국토지주택공사·국토연구원 주최</p>
              <p className="text-xs text-stone-600 mt-1 font-mono">Ministry of Land, Infrastructure and Transport</p>
            </div>
            <div>
              <p className="text-sm font-bold text-stone-900">제안자</p>
              <p className="text-sm text-stone-700 mt-1">박용환 (Creative Nexus)</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-stone-900">제출 기한</p>
              <p className="text-lg font-black text-blue-600">2025.11.30 (금) 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
