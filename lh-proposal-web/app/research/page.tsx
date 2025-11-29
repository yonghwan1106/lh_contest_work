'use client';

import Link from 'next/link';

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-stone-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, #1a1a1a 50px, #1a1a1a 52px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, #1a1a1a 50px, #1a1a1a 52px)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Navigation */}
        <nav className="flex items-center gap-4 mb-8">
          <Link href="/" className="text-stone-600 hover:text-stone-900 transition-colors">
            <span className="text-sm font-mono">← 홈으로</span>
          </Link>
          <span className="text-stone-300">|</span>
          <Link href="/proposal" className="text-stone-600 hover:text-blue-600 transition-colors">
            <span className="text-sm font-mono">제안서</span>
          </Link>
          <Link href="/visual-guide" className="text-stone-600 hover:text-green-600 transition-colors">
            <span className="text-sm font-mono">시각 자료</span>
          </Link>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-900 to-purple-800 text-white px-6 py-3 relative mb-8">
            <div className="absolute -left-2 top-0 bottom-0 w-2 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            <span className="text-sm font-bold tracking-wider">RESEARCH INSIGHTS</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-stone-900 mb-6 leading-tight tracking-tight">
            심층 리서치<br/>
            <span className="text-purple-600">인사이트</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl">
            지역 발전을 위한 LH 역할 재정의 - 해외 사례와 국내 리빙랩 성공 사례 분석
          </p>
        </div>

        {/* Section 1: 핵심 문제 상황 */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-xs font-mono text-purple-600 tracking-widest mb-2">01 — PROBLEM ANALYSIS</h2>
            <h3 className="text-3xl font-black text-stone-900">핵심 문제 상황 분석</h3>
            <div className="h-0.5 w-24 bg-gradient-to-r from-purple-600 to-pink-600 mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 지방 소멸 위기 */}
            <div className="bg-white p-8 border-t-4 border-red-500 hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4 font-black text-red-500">57%</div>
              <h4 className="font-black text-xl text-stone-900 mb-4">지방 소멸 위기</h4>
              <ul className="space-y-3 text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>전국 228개 지자체 중 <strong>130개</strong> 소멸위험지역</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>인구감소지역: 광역 15개, 기초 107개</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">•</span>
                  <span>지방소멸대응기금: 매년 1조원 투입</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-red-50 text-sm text-red-800 font-mono">
                수도권 집중 → 청년 유출 → 일자리 부족 → 소멸 가속화
              </div>
            </div>

            {/* LH 구조적 문제 */}
            <div className="bg-white p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4 font-black text-orange-500">160조</div>
              <h4 className="font-black text-xl text-stone-900 mb-4">LH 부채 현황</h4>
              <ul className="space-y-3 text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>2024년 말 기준 <strong>160.1조원</strong> (비금융 공기업 1위)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>2027년 전망: <strong>219.5조원</strong> 돌파 예상</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>부채비율: <strong>222%</strong> (재무위험기관)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">•</span>
                  <span>토지보상금: 9조원 → 1.1조원 (<strong>88% 급감</strong>)</span>
                </li>
              </ul>
            </div>

            {/* 혁신도시 한계 */}
            <div className="bg-white p-8 border-t-4 border-yellow-500 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚠️</div>
              <h4 className="font-black text-xl text-stone-900 mb-4">기존 혁신도시의 한계</h4>
              <ul className="space-y-3 text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">1</span>
                  <span>인프라 부족: 생활편의시설, 교육환경 미흡</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">2</span>
                  <span>이주 저조: 정부기관 이전 지연, 공동화 우려</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">3</span>
                  <span>단순 주택 공급: 일자리 창출 미흡</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">4</span>
                  <span>수익성 악화: 지속가능한 사업 모델 부재</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">5</span>
                  <span>신뢰 추락: 직원 부동산 투기 스캔들</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: 해외 성공 사례 */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-xs font-mono text-blue-600 tracking-widest mb-2">02 — GLOBAL CASES</h2>
            <h3 className="text-3xl font-black text-stone-900">해외 성공 사례 분석</h3>
            <div className="h-0.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 독일 사례 */}
            <div className="bg-stone-900 text-white p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="text-xs font-mono text-blue-400 mb-2 tracking-widest">GERMANY</div>
                <h4 className="text-2xl font-black mb-6">독일 - 지역 주도 혁신 생태계</h4>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-bold text-blue-400 mb-2">함부르크 하펜시티</h5>
                    <p className="text-stone-300 text-sm mb-2">구항만 → 문화·관광·산업·주거 복합공간</p>
                    <p className="text-white font-bold">성과: 750개 기업, 1.5만개 일자리</p>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h5 className="font-bold text-cyan-400 mb-2">드레스덴 실리콘 색소니</h5>
                    <p className="text-stone-300 text-sm mb-2">지방정부 주도 반도체 산업 집적</p>
                    <p className="text-white font-bold">성과: 글로벌 반도체 개발·생산 중심지</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-bold text-green-400 mb-2">라이프치히 스타트업 도시</h5>
                    <p className="text-stone-300 text-sm mb-2">도시재생 + 창의산업 육성</p>
                    <p className="text-white font-bold">성과: 독일 최고 스타트업 도시 부상</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 일본/싱가포르/네덜란드 사례 */}
            <div className="space-y-6">
              <div className="bg-white p-6 border-l-8 border-red-500 hover:shadow-xl transition-shadow">
                <div className="text-xs font-mono text-red-500 mb-2 tracking-widest">JAPAN</div>
                <h4 className="text-xl font-black text-stone-900 mb-3">도쿠시마현 가미야마쵸</h4>
                <p className="text-stone-600 text-sm mb-2">전략: 위성 오피스 유치 (IT 기업)</p>
                <p className="text-stone-900 font-bold">성과: 청년 유입, 지역 활성화</p>
                <p className="text-purple-600 text-sm mt-2">핵심: 원격근무 환경 + 지역 매력</p>
              </div>

              <div className="bg-white p-6 border-l-8 border-pink-500 hover:shadow-xl transition-shadow">
                <div className="text-xs font-mono text-pink-500 mb-2 tracking-widest">SINGAPORE</div>
                <h4 className="text-xl font-black text-stone-900 mb-3">Smart Nation</h4>
                <p className="text-stone-600 text-sm mb-2">정부 서비스 99% 디지털화</p>
                <p className="text-stone-900 font-bold">핵심: 명확한 비전 + 지속적 투자</p>
                <p className="text-purple-600 text-sm mt-2">전 국민 AI 교육 프로그램</p>
              </div>

              <div className="bg-white p-6 border-l-8 border-orange-500 hover:shadow-xl transition-shadow">
                <div className="text-xs font-mono text-orange-500 mb-2 tracking-widest">NETHERLANDS</div>
                <h4 className="text-xl font-black text-stone-900 mb-3">암스테르담 2040 플랜</h4>
                <p className="text-stone-600 text-sm mb-2">스마트루프 2.0, 순환경제 도시</p>
                <p className="text-stone-900 font-bold">성과: 300+ 리빙랩 프로젝트</p>
                <p className="text-purple-600 text-sm mt-2">2050년 완전 순환경제 목표</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: 국내 리빙랩 사례 */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-xs font-mono text-green-600 tracking-widest mb-2">03 — DOMESTIC CASES</h2>
            <h3 className="text-3xl font-black text-stone-900">국내 리빙랩 성공 사례</h3>
            <div className="h-0.5 w-24 bg-gradient-to-r from-green-600 to-emerald-600 mt-4"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white p-6 hover:shadow-xl transition-shadow">
              <h4 className="font-black text-lg mb-3">서울 북촌</h4>
              <p className="text-green-100 text-sm mb-4">문제: 관광객 과밀, 주민 불편</p>
              <p className="text-white text-sm mb-2"><strong>솔루션:</strong> IoT 비콘 기반 정보 제공, CCTV 범죄 예방</p>
              <div className="mt-4 pt-4 border-t border-green-400/30">
                <p className="text-xs text-green-200">주민·관광객·사업자·정부 협력 모델</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white p-6 hover:shadow-xl transition-shadow">
              <h4 className="font-black text-lg mb-3">성대골 에너지</h4>
              <p className="text-yellow-100 text-sm mb-4">문제: 에너지 비용 부담</p>
              <p className="text-white text-sm mb-2"><strong>솔루션:</strong> 태양열 수영장, 에너지 슈퍼마켓</p>
              <div className="mt-4 pt-4 border-t border-yellow-400/30">
                <p className="text-xs text-yellow-200">주민 주도 에너지 자립 성공</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-6 hover:shadow-xl transition-shadow">
              <h4 className="font-black text-lg mb-3">대전 건너유</h4>
              <p className="text-blue-100 text-sm mb-4">문제: 갑천 범람 사고</p>
              <p className="text-white text-sm mb-2"><strong>솔루션:</strong> 드론·카메라·태양광 모니터링</p>
              <div className="mt-4 pt-4 border-t border-blue-400/30">
                <p className="text-xs text-blue-200">안전 사고 예방, 앱 기반 정보 제공</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 hover:shadow-xl transition-shadow">
              <h4 className="font-black text-lg mb-3">홍성군 스마트</h4>
              <p className="text-purple-100 text-sm mb-4">최초 군 단위 리빙랩</p>
              <p className="text-white text-sm mb-2"><strong>성과:</strong> 지역 수요 기반 서비스 발굴</p>
              <div className="mt-4 pt-4 border-t border-purple-400/30">
                <p className="text-xs text-purple-200">주민 참여형 혁신 모델</p>
              </div>
            </div>
          </div>

          {/* 공통 성공 요인 */}
          <div className="mt-8 bg-stone-900 text-white p-8">
            <h4 className="text-xl font-black mb-6 text-green-400">공통 성공 요인</h4>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">👥</div>
                <h5 className="font-bold mb-2">주민 주도</h5>
                <p className="text-sm text-stone-400">문제 발견~실험~확산 전 과정 참여</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💻</div>
                <h5 className="font-bold mb-2">기술 활용</h5>
                <p className="text-sm text-stone-400">ICT·IoT로 실용적 솔루션</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔗</div>
                <h5 className="font-bold mb-2">중간지원조직</h5>
                <p className="text-sm text-stone-400">주민과 기술 연결</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏛️</div>
                <h5 className="font-bold mb-2">지자체 지원</h5>
                <p className="text-sm text-stone-400">제도·예산 뒷받침</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: PPP 수익 모델 */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-xs font-mono text-orange-600 tracking-widest mb-2">04 — REVENUE MODEL</h2>
            <h3 className="text-3xl font-black text-stone-900">민관협력(PPP) 수익 모델</h3>
            <div className="h-0.5 w-24 bg-gradient-to-r from-orange-600 to-red-600 mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 border-t-4 border-orange-500">
              <h4 className="font-black text-xl text-stone-900 mb-6">BOT 모델 사례</h4>
              <div className="bg-orange-50 p-4 mb-6">
                <p className="font-bold text-orange-800">베이징 지하철 4호선</p>
                <p className="text-sm text-orange-700 mt-2">민간이 건설·운영 → 30년 후 정부 이전</p>
              </div>
              <div className="space-y-3 text-sm text-stone-600">
                <div className="flex justify-between">
                  <span>총 투자</span>
                  <span className="font-bold text-stone-900">153억원</span>
                </div>
                <div className="flex justify-between">
                  <span>정부 지분</span>
                  <span className="font-bold text-stone-900">70%</span>
                </div>
                <div className="flex justify-between">
                  <span>민간 지분</span>
                  <span className="font-bold text-stone-900">30%</span>
                </div>
                <div className="flex justify-between">
                  <span>운영 기간</span>
                  <span className="font-bold text-stone-900">30년 특별경영권</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border-t-4 border-green-500">
              <h4 className="font-black text-xl text-stone-900 mb-6">수익 창출 방식</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-green-50">
                  <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h5 className="font-bold text-stone-900">운영수익</h5>
                    <p className="text-sm text-stone-600">시설 이용료, 임대료</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50">
                  <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h5 className="font-bold text-stone-900">개발이익</h5>
                    <p className="text-sm text-stone-600">부동산 가치 상승분 배분</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-purple-50">
                  <div className="w-10 h-10 bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h5 className="font-bold text-stone-900">관련 사업</h5>
                    <p className="text-sm text-stone-600">상업시설, 관광 콘텐츠</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-orange-50">
                  <div className="w-10 h-10 bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h5 className="font-bold text-stone-900">브랜드 라이선스</h5>
                    <p className="text-sm text-stone-600">지역 특화 브랜드 사업화</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: 핵심 인사이트 */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-xs font-mono text-purple-600 tracking-widest mb-2">05 — KEY INSIGHTS</h2>
            <h3 className="text-3xl font-black text-stone-900">핵심 인사이트 종합</h3>
            <div className="h-0.5 w-24 bg-gradient-to-r from-purple-600 to-pink-600 mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 실패 요인 */}
            <div className="bg-red-50 p-8 border-l-8 border-red-500">
              <h4 className="font-black text-xl text-red-800 mb-6">❌ 기존 LH 혁신도시의 실패 요인</h4>
              <div className="space-y-4">
                <div className="bg-white p-4">
                  <h5 className="font-bold text-red-700 mb-2">1. Top-Down 접근</h5>
                  <p className="text-sm text-stone-600">중앙 정부 주도 → 지역 수요 미반영, 획일적 모델</p>
                </div>
                <div className="bg-white p-4">
                  <h5 className="font-bold text-red-700 mb-2">2. 단순 이전 중심</h5>
                  <p className="text-sm text-stone-600">정부기관 이전이 목적, 일자리·산업 생태계 부재</p>
                </div>
                <div className="bg-white p-4">
                  <h5 className="font-bold text-red-700 mb-2">3. 재정 의존</h5>
                  <p className="text-sm text-stone-600">LH 단독 사업 → 부채 누적, 수익 모델 부재</p>
                </div>
                <div className="bg-white p-4">
                  <h5 className="font-bold text-red-700 mb-2">4. 주민 배제</h5>
                  <p className="text-sm text-stone-600">계획 단계 주민 참여 부족, 지역 정체성 상실</p>
                </div>
              </div>
            </div>

            {/* 성공 요인 */}
            <div className="bg-green-50 p-8 border-l-8 border-green-500">
              <h4 className="font-black text-xl text-green-800 mb-6">✅ 성공하는 지역 개발의 공통점</h4>
              <div className="space-y-4">
                <div className="bg-white p-4">
                  <h5 className="font-bold text-green-700 mb-2">1. 지역 주도 (Bottom-Up)</h5>
                  <p className="text-sm text-stone-600 font-mono">주민이 문제 발견 → 지자체 지원 → 민간 참여</p>
                </div>
                <div className="bg-white p-4">
                  <h5 className="font-bold text-green-700 mb-2">2. 산업 생태계 우선</h5>
                  <p className="text-sm text-stone-600 font-mono">일자리 창출 → 인구 유입 → 주거 수요</p>
                </div>
                <div className="bg-white p-4">
                  <h5 className="font-bold text-green-700 mb-2">3. 특화 전략</h5>
                  <p className="text-sm text-stone-600 font-mono">지역 고유 자원 → 차별화 브랜드 → 경쟁력</p>
                </div>
                <div className="bg-white p-4">
                  <h5 className="font-bold text-green-700 mb-2">4. 민관학 협력</h5>
                  <p className="text-sm text-stone-600 font-mono">정부(제도) + 민간(자본) + 대학(R&D) + 주민(참여)</p>
                </div>
                <div className="bg-white p-4">
                  <h5 className="font-bold text-green-700 mb-2">5. 단계적 접근</h5>
                  <p className="text-sm text-stone-600 font-mono">리빙랩(실험) → 파일럿(검증) → 확장(보급)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: 제안 방향 */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-xs font-mono text-blue-600 tracking-widest mb-2">06 — PROPOSAL DIRECTION</h2>
            <h3 className="text-3xl font-black text-stone-900">제안 방향 도출</h3>
            <div className="h-0.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mt-4"></div>
          </div>

          {/* LH 역할 재정의 */}
          <div className="bg-stone-900 text-white p-8 mb-8">
            <h4 className="text-2xl font-black text-blue-400 mb-8">🎯 핵심 컨셉: LH의 역할 재정의</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-red-500 pl-6">
                <h5 className="text-lg font-bold text-red-400 mb-4">기존 역할</h5>
                <ul className="space-y-2 text-stone-300">
                  <li>• 주택·토지 공급자</li>
                  <li>• 개발 사업 시행자</li>
                  <li>• 직접 투자·직접 운영</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h5 className="text-lg font-bold text-green-400 mb-4">새로운 역할 제안</h5>
                <ul className="space-y-2 text-white font-bold">
                  <li>• 지역 혁신 촉진자 (Facilitator)</li>
                  <li>• 민관학 협력 플랫폼 (Platform)</li>
                  <li>• 지속가능 사업 큐레이터 (Curator)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3가지 아이디어 방향 */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 text-8xl font-black opacity-10">1</div>
              <div className="relative z-10">
                <div className="bg-white/20 px-3 py-1 text-xs font-bold inline-block mb-4">추천</div>
                <h4 className="font-black text-xl mb-4">지역특화 리빙랩 도시 플랫폼</h4>
                <p className="text-blue-100 text-sm mb-4">LH가 "지역 맞춤형 혁신 실험실" 조성</p>
                <div className="border-t border-blue-400/30 pt-4">
                  <p className="text-xs text-blue-200">예시:</p>
                  <ul className="text-sm mt-2 space-y-1">
                    <li>• 강원: 관광·헬스케어</li>
                    <li>• 전남: 신재생에너지·스마트팜</li>
                    <li>• 경북: 문화콘텐츠·에듀테크</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border-t-4 border-green-500">
              <div className="text-5xl font-black text-green-200 mb-4">2</div>
              <h4 className="font-black text-xl text-stone-900 mb-4">지역 앵커 기업 유치 PPP 모델</h4>
              <p className="text-stone-600 text-sm mb-4">LH가 "지역 산업 생태계 매칭" 역할</p>
              <div className="border-t border-stone-200 pt-4">
                <p className="text-xs text-stone-500">수익 배분:</p>
                <p className="text-sm mt-2">정부 30% / 민간 40% / LH 30%</p>
              </div>
            </div>

            <div className="bg-white p-6 border-t-4 border-purple-500">
              <div className="text-5xl font-black text-purple-200 mb-4">3</div>
              <h4 className="font-black text-xl text-stone-900 mb-4">순환형 지역 재생 펀드 모델</h4>
              <p className="text-stone-600 text-sm mb-4">LH가 "빈집·유휴시설 재생 펀드" 운영</p>
              <div className="border-t border-stone-200 pt-4">
                <p className="text-xs text-stone-500">메커니즘:</p>
                <p className="text-sm mt-2">재생 → 임대 → 수익 → 다음 지역</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: 기대 효과 */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-xs font-mono text-green-600 tracking-widest mb-2">07 — EXPECTED RESULTS</h2>
            <h3 className="text-3xl font-black text-stone-900">기대 효과 (정량화)</h3>
            <div className="h-0.5 w-24 bg-gradient-to-r from-green-600 to-emerald-600 mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-8 border-t-4 border-blue-500">
              <div className="text-xs font-mono text-blue-600 mb-2">단기 (1~2년)</div>
              <h4 className="font-black text-2xl text-stone-900 mb-6">시범 도시 성과</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">시범 도시</span>
                  <span className="text-3xl font-black text-blue-600">3개</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">참여 기업</span>
                  <span className="text-3xl font-black text-blue-600">30개</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">신규 일자리</span>
                  <span className="text-3xl font-black text-blue-600">1,500개</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">민간 투자</span>
                  <span className="text-3xl font-black text-blue-600">300억</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 border-t-4 border-green-500">
              <div className="text-xs font-mono text-green-600 mb-2">중기 (3~5년)</div>
              <h4 className="font-black text-2xl text-stone-900 mb-6">전국 확산</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">확산 도시</span>
                  <span className="text-3xl font-black text-green-600">50개</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">참여 기업</span>
                  <span className="text-3xl font-black text-green-600">500개</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">신규 일자리</span>
                  <span className="text-3xl font-black text-green-600">2만개</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">LH 수익</span>
                  <span className="text-3xl font-black text-green-600">250억/년</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-8 border-t-4 border-purple-500">
              <div className="text-xs font-mono text-purple-600 mb-2">장기 (5~10년)</div>
              <h4 className="font-black text-2xl text-stone-900 mb-6">자생 생태계</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">전국 네트워크</span>
                  <span className="text-3xl font-black text-purple-600">100개</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">청년 유출 감소</span>
                  <span className="text-3xl font-black text-purple-600">30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">LH 부채비율</span>
                  <span className="text-3xl font-black text-purple-600">150%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-600">소멸위험지역</span>
                  <span className="text-3xl font-black text-purple-600">80개</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-stone-900 p-12 text-center">
          <h3 className="text-3xl font-black text-white mb-4">
            제안서 전문 보기
          </h3>
          <p className="text-stone-400 mb-8">
            이 리서치 인사이트를 바탕으로 작성된 완성본 제안서
          </p>
          <Link
            href="/proposal"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            <span>제안서 보기</span>
            <span>→</span>
          </Link>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-stone-200 pt-8 pb-12 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-sm font-bold text-stone-900">국토교통부, 한국토지주택공사·국토연구원 주최</p>
              <p className="text-xs text-stone-600 mt-1 font-mono">Research Insights Document</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-stone-900">제출 기한</p>
              <p className="text-lg font-black text-purple-600">2025.11.30 (금) 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
