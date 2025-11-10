'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CompleteProposal() {
  const [activeSection, setActiveSection] = useState('all');

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
      <header className="bg-stone-900 border-b-4 border-blue-600 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <span className="text-white font-black text-xl">←</span>
            </div>
            <span className="text-white font-bold tracking-wide">HOME</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="text-xs font-mono text-stone-400 tracking-widest">01 — PROPOSAL</div>
            <div className="w-2 h-2 bg-blue-600"></div>
            <div className="text-sm text-white font-bold">제안서</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Title Section - Brutalist Style */}
        <div className="mb-16">
          <div className="bg-stone-900 border-l-8 border-blue-600 p-12 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="text-xs font-mono text-blue-400 mb-3 tracking-widest">LH COMPETITION PROPOSAL</div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                「국민과 함께 만드는<br/>
                새로운 <span className="text-blue-400">LH</span>」
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-green-600 mb-6"></div>
              <h2 className="text-3xl font-bold text-stone-300 mb-3">
                지역이 선택하는 미래, LH가 연결하는 혁신
              </h2>
              <p className="text-xl text-blue-400 font-bold tracking-wide">
                지역특화 리빙랩 도시 플랫폼
              </p>
            </div>
          </div>

          {/* Quick Navigation - Swiss Style */}
          <div className="bg-white border-t-4 border-green-600 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-xs font-mono text-stone-600 tracking-widest">QUICK NAVIGATION</div>
              <div className="h-px flex-1 bg-stone-200"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['개요', '현황 및 문제점', '개선방안', '기대효과'].map((section, i) => (
                <button
                  key={section}
                  onClick={() => {
                    const element = document.getElementById(`section-${i + 4}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group bg-stone-900 hover:bg-blue-600 text-white px-6 py-4 transition-colors duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 group-hover:w-full transition-all duration-300 -z-10"></div>
                  <div className="relative z-10">
                    <div className="text-2xl font-black text-blue-400 group-hover:text-white mb-1">{String(i + 1).padStart(2, '0')}</div>
                    <div className="text-sm font-bold tracking-wide">{section}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Section 1-3: Title, Name, Category */}
          <section className="bg-white border-l-4 border-blue-600 p-8">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-black text-xl">
                    01
                  </div>
                  <h2 className="text-2xl font-black text-stone-900 tracking-tight">제목</h2>
                </div>
                <div className="ml-16">
                  <h3 className="text-2xl font-black text-blue-600 mb-3 leading-tight">
                    지역이 선택하는 미래, LH가 연결하는 혁신
                  </h3>
                  <div className="h-px bg-stone-200 mb-3"></div>
                  <p className="text-lg text-stone-700 font-mono">
                    지역특화 리빙랩 도시 플랫폼
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-stone-200 pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-black text-xl">
                    02
                  </div>
                  <h2 className="text-2xl font-black text-stone-900 tracking-tight">신청자</h2>
                </div>
                <p className="ml-16 text-stone-700 text-lg">홍길동</p>
              </div>

              <div className="border-t-2 border-stone-200 pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-black text-xl">
                    03
                  </div>
                  <h2 className="text-2xl font-black text-stone-900 tracking-tight">분야</h2>
                </div>
                <div className="ml-16">
                  <div className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 font-bold tracking-wide">
                    <span className="text-2xl">☑</span>
                    <span>지역 발전 등 미래성장동력 확보를 위한 LH 역할</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Overview */}
          <section id="section-4" className="bg-white border-l-4 border-purple-600 p-8 scroll-mt-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-black text-xl">
                04
              </div>
              <h2 className="text-2xl font-black text-stone-900 tracking-tight">개요</h2>
            </div>
            <div className="ml-16 space-y-8">
              <p className="text-stone-700 leading-relaxed text-lg">
                LH의 역할을 <strong className="text-blue-600 font-black">'주택 공급자'에서 '지역혁신 촉진자'</strong>로 전환하여
                지방 소멸 위기 극복과 LH의 지속가능 성장을 동시에 달성하는 혁신 모델입니다.
              </p>

              <div className="bg-stone-900 p-8 border-t-4 border-blue-600">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-blue-400"></div>
                  <h4 className="font-black text-white text-lg tracking-wide">핵심 아이디어</h4>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  지역마다 고유한 산업·문화·자원 기반의 <strong className="text-white">맞춤형 리빙랩 도시</strong>를 조성하되,
                  LH는 직접 개발 대신 <strong className="text-white">민관학 협력 플랫폼</strong>을 구축하여 민간 자본과 전문성을 연결하는
                  <strong className="text-blue-400"> 촉진자</strong> 역할 수행
                </p>
              </div>

              <div className="border-2 border-stone-900 p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-green-600"></div>
                  <h4 className="font-black text-stone-900 text-lg tracking-wide">차별화 포인트</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white w-8 h-8 flex items-center justify-center font-black text-sm shrink-0">01</div>
                    <span className="text-stone-700 font-mono">지역 주도권 보장 (중앙→지역)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white w-8 h-8 flex items-center justify-center font-black text-sm shrink-0">02</div>
                    <span className="text-stone-700 font-mono">민간 자본 활용 (부채↓)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white w-8 h-8 flex items-center justify-center font-black text-sm shrink-0">03</div>
                    <span className="text-stone-700 font-mono">생태계 우선 (일자리→주거)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white w-8 h-8 flex items-center justify-center font-black text-sm shrink-0">04</div>
                    <span className="text-stone-700 font-mono">리빙랩 방식 (실험→검증→확산)</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-white"></div>
                  <h4 className="font-black text-white text-lg tracking-wide">기대효과</h4>
                </div>
                <div className="space-y-2 text-white">
                  <p className="leading-relaxed">
                    <strong className="font-black">단기</strong>: 3개 시범도시 1,500개 일자리 창출
                  </p>
                  <p className="leading-relaxed">
                    <strong className="font-black">장기</strong>: 100개 도시로 확산하여 지방소멸위험지역 130개→80개 감소,
                    LH 부채비율 222%→150% 개선
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: 현황 및 문제점 */}
          <section id="section-5" className="bg-white border-l-4 border-red-600 p-8 scroll-mt-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-black text-xl">
                05
              </div>
              <h2 className="text-2xl font-black text-stone-900 tracking-tight">현황 및 문제점</h2>
            </div>
            <div className="ml-16 space-y-10">
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-6 tracking-tight">1) 지방 소멸 위기와 LH의 구조적 한계</h3>

                <div className="space-y-6">
                  <div className="border-l-8 border-red-600 bg-red-50 pl-6 py-4">
                    <h4 className="font-black text-red-600 mb-3 text-lg">[문제 1] 지방 소멸 가속화</h4>
                    <ul className="space-y-2 text-stone-700 font-mono text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-black shrink-0">•</span>
                        <span>전국 228개 지자체 중 <strong className="text-stone-900">130개(57%) 소멸위험</strong> (한국고용정보원, 2025)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 font-black shrink-0">•</span>
                        <span>악순환 구조: 일자리 부족 → 청년 유출 → 인구 감소 → 경제 침체 심화</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-8 border-orange-500 bg-orange-50 pl-6 py-4">
                    <h4 className="font-black text-orange-600 mb-3 text-lg">[문제 2] LH 재정 위기</h4>
                    <ul className="space-y-2 text-stone-700 font-mono text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 font-black shrink-0">•</span>
                        <span>부채 160조원, 2027년 219조 전망, 부채비율 222%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-500 font-black shrink-0">•</span>
                        <span>토지보상금 88% 급감 (9.2조→1.1조, 2022→2025)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-8 border-yellow-500 bg-yellow-50 pl-6 py-4">
                    <h4 className="font-black text-yellow-700 mb-4 text-lg">[문제 3] 기존 혁신도시 사업의 한계</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-2 border-stone-900">
                        <thead className="bg-stone-900 text-white">
                          <tr>
                            <th className="px-4 py-3 text-left font-black border-r-2 border-stone-700">문제</th>
                            <th className="px-4 py-3 text-left font-black border-r-2 border-stone-700">원인</th>
                            <th className="px-4 py-3 text-left font-black">결과</th>
                          </tr>
                        </thead>
                        <tbody className="font-mono">
                          <tr className="border-b-2 border-stone-300">
                            <td className="px-4 py-3 border-r-2 border-stone-300 font-bold">중앙 주도</td>
                            <td className="px-4 py-3 border-r-2 border-stone-300">지역 수요 미반영</td>
                            <td className="px-4 py-3">정체성 상실</td>
                          </tr>
                          <tr className="border-b-2 border-stone-300">
                            <td className="px-4 py-3 border-r-2 border-stone-300 font-bold">단순 이전</td>
                            <td className="px-4 py-3 border-r-2 border-stone-300">정부기관 이전만</td>
                            <td className="px-4 py-3">일자리 생태계 X</td>
                          </tr>
                          <tr className="border-b-2 border-stone-300">
                            <td className="px-4 py-3 border-r-2 border-stone-300 font-bold">인프라 부족</td>
                            <td className="px-4 py-3 border-r-2 border-stone-300">계획 미흡</td>
                            <td className="px-4 py-3">이주 저조</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 border-r-2 border-stone-300 font-bold">재정 의존</td>
                            <td className="px-4 py-3 border-r-2 border-stone-300">LH 단독 투자</td>
                            <td className="px-4 py-3">부채 누적</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black text-stone-900 mb-6 tracking-tight">2) 해외·국내 성공 사례의 교훈</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="border-t-4 border-blue-600 bg-white p-6">
                    <h4 className="font-black text-blue-600 mb-3 text-lg">🇩🇪 독일 라이프치히</h4>
                    <p className="text-sm text-stone-700 font-mono">도시재생 + 스타트업 육성</p>
                  </div>
                  <div className="border-t-4 border-green-600 bg-white p-6">
                    <h4 className="font-black text-green-600 mb-3 text-lg">🇯🇵 일본 가미야마쵸</h4>
                    <p className="text-sm text-stone-700 font-mono">위성 오피스 유치</p>
                  </div>
                  <div className="border-t-4 border-purple-600 bg-white p-6">
                    <h4 className="font-black text-purple-600 mb-3 text-lg">🇰🇷 성대골 리빙랩</h4>
                    <p className="text-sm text-stone-700 font-mono">주민 주도 에너지 해결</p>
                  </div>
                </div>
                <div className="bg-stone-900 p-6 border-l-4 border-yellow-400">
                  <p className="text-white font-black tracking-wide">
                    공통점: 지역 주도 + 민관협력 + 단계적 실험 + 특화 전략
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: 개선방안 */}
          <section id="section-6" className="bg-white border-l-4 border-green-600 p-8 scroll-mt-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-black text-xl">
                06
              </div>
              <h2 className="text-2xl font-black text-stone-900 tracking-tight">개선방안</h2>
            </div>
            <div className="ml-16 space-y-10">
              {/* LH 역할 전환 */}
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-6 tracking-tight">1) LH 역할의 근본적 전환</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-2 border-stone-900">
                    <thead className="bg-stone-900 text-white">
                      <tr>
                        <th className="px-6 py-3 text-left font-black border-r-2 border-stone-700">구분</th>
                        <th className="px-6 py-3 text-left font-black border-r-2 border-stone-700">기존</th>
                        <th className="px-6 py-3 text-left font-black">새로운 제안</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono">
                      <tr className="border-b-2 border-stone-300">
                        <td className="px-6 py-3 border-r-2 border-stone-300 font-black">정체성</td>
                        <td className="px-6 py-3 border-r-2 border-stone-300 text-red-600">주택·토지 공급자</td>
                        <td className="px-6 py-3 text-green-600 font-bold">지역혁신 촉진자</td>
                      </tr>
                      <tr className="border-b-2 border-stone-300">
                        <td className="px-6 py-3 border-r-2 border-stone-300 font-black">접근 방식</td>
                        <td className="px-6 py-3 border-r-2 border-stone-300 text-red-600">직접 개발·투자·운영</td>
                        <td className="px-6 py-3 text-green-600 font-bold">플랫폼 구축·매칭·지원</td>
                      </tr>
                      <tr className="border-b-2 border-stone-300">
                        <td className="px-6 py-3 border-r-2 border-stone-300 font-black">재원</td>
                        <td className="px-6 py-3 border-r-2 border-stone-300 text-red-600">LH 단독 부담</td>
                        <td className="px-6 py-3 text-green-600 font-bold">민간 자본 활용</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 border-r-2 border-stone-300 font-black">수익 모델</td>
                        <td className="px-6 py-3 border-r-2 border-stone-300 text-red-600">주택 판매</td>
                        <td className="px-6 py-3 text-green-600 font-bold">플랫폼 수수료</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4단계 구조 */}
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-6 tracking-tight">2) 지역특화 리빙랩 도시 플랫폼 구조</h3>

                <div className="space-y-6">
                  <div className="border-l-8 border-blue-600 bg-white p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center font-black">01</div>
                      <h4 className="font-black text-blue-600 text-lg">지역 선택</h4>
                    </div>
                    <p className="text-stone-700 mb-4 font-mono text-sm">각 지자체가 특화 산업 선택</p>
                    <div className="grid grid-cols-2 gap-3 font-mono text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-600"></div>
                        <span>강원: 관광·헬스케어</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-600"></div>
                        <span>전남: 신재생에너지</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-600"></div>
                        <span>경북: 문화콘텐츠</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-600"></div>
                        <span>충남: 제조업·자동차</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-8 border-green-600 bg-white p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-green-600 text-white w-10 h-10 flex items-center justify-center font-black">02</div>
                      <h4 className="font-black text-green-600 text-lg">LH 플랫폼 구축</h4>
                    </div>
                    <div className="space-y-2 font-mono text-sm text-stone-700">
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-green-600 mt-2 shrink-0"></div>
                        <span>인프라 조성: 리빙랩 실험 공간, 창업지원센터</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-green-600 mt-2 shrink-0"></div>
                        <span>매칭 서비스: 지역↔기업↔대학 연결</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-green-600 mt-2 shrink-0"></div>
                        <span>컨설팅: 사업계획, 인허가 지원</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-green-600 mt-2 shrink-0"></div>
                        <span>펀딩 지원: 민간 투자자 유치</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-8 border-purple-600 bg-white p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-600 text-white w-10 h-10 flex items-center justify-center font-black">03</div>
                      <h4 className="font-black text-purple-600 text-lg">민관학 협력</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 font-mono text-sm text-stone-700">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-600"></div>
                        <span>주민: 문제 발견, 참여</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-600"></div>
                        <span>지자체: 규제 완화</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-600"></div>
                        <span>LH: 플랫폼 운영</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-600"></div>
                        <span>기업: 투자, 기술</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-600"></div>
                        <span>대학: R&D, 인재양성</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-8 border-orange-500 bg-white p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center font-black">04</div>
                      <h4 className="font-black text-orange-500 text-lg">리빙랩 방식</h4>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 font-mono text-sm text-stone-700">
                      <div className="bg-stone-900 text-white px-3 py-1 font-bold">Year 1</div>
                      <span>실험</span>
                      <span className="text-orange-500 font-black">→</span>
                      <div className="bg-stone-900 text-white px-3 py-1 font-bold">Year 2</div>
                      <span>검증</span>
                      <span className="text-orange-500 font-black">→</span>
                      <div className="bg-stone-900 text-white px-3 py-1 font-bold">Year 3-5</div>
                      <span>확산</span>
                      <span className="text-orange-500 font-black">→</span>
                      <div className="bg-stone-900 text-white px-3 py-1 font-bold">Year 5+</div>
                      <span>자생</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 수익 모델 */}
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-6 tracking-tight">3) 수익 모델</h3>
                <div className="bg-stone-900 p-8 border-t-4 border-green-600">
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="border-l-4 border-blue-400 pl-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-blue-400"></div>
                        <span className="font-black text-white">플랫폼 수수료 40%</span>
                      </div>
                      <p className="text-2xl text-blue-400 font-black font-mono ml-6">200억원</p>
                      <p className="text-xs text-stone-400 ml-6 font-mono">(Year 5)</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-green-400"></div>
                        <span className="font-black text-white">임대 수익 30%</span>
                      </div>
                      <p className="text-2xl text-green-400 font-black font-mono ml-6">150억원</p>
                    </div>
                    <div className="border-l-4 border-orange-400 pl-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-orange-400"></div>
                        <span className="font-black text-white">개발이익 20%</span>
                      </div>
                      <p className="text-2xl text-orange-400 font-black font-mono ml-6">100억원</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-purple-400"></div>
                        <span className="font-black text-white">라이선스 10%</span>
                      </div>
                      <p className="text-2xl text-purple-400 font-black font-mono ml-6">50억원</p>
                    </div>
                  </div>
                  <div className="border-t-2 border-stone-700 pt-6 text-center">
                    <p className="font-black text-4xl text-white mb-2">총 500억원/년</p>
                    <p className="text-sm text-green-400 font-mono">부채비율 222% → 150% 개선</p>
                  </div>
                </div>
              </div>

              {/* 필요 자원 */}
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-6 tracking-tight">4) 필요 자원</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-2 border-stone-900 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-blue-600"></div>
                      <h4 className="font-black text-stone-900 text-lg">인력</h4>
                    </div>
                    <div className="space-y-3 font-mono text-sm text-stone-700">
                      <div className="flex items-center gap-2">
                        <div className="bg-stone-900 text-white px-2 py-1 text-xs font-bold">30명</div>
                        <span>플랫폼팀</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-stone-900 text-white px-2 py-1 text-xs font-bold">100명</div>
                        <span>지역매니저</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-stone-900 text-white px-2 py-1 text-xs font-bold">200명</div>
                        <span>컨설턴트</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-stone-900 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-green-600"></div>
                      <h4 className="font-black text-stone-900 text-lg">재정</h4>
                    </div>
                    <div className="space-y-3 font-mono text-sm text-stone-700">
                      <div className="flex items-center gap-2">
                        <div className="bg-stone-900 text-white px-2 py-1 text-xs font-bold">550억원</div>
                        <span>초기</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-green-600 text-white px-2 py-1 text-xs font-bold">5,000억원</div>
                        <span>민간 투자</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-blue-600 text-white px-2 py-1 text-xs font-bold">10배</div>
                        <span>레버리지</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: 기대효과 */}
          <section id="section-7" className="bg-white border-l-4 border-orange-500 p-8 scroll-mt-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-stone-900 text-white w-12 h-12 flex items-center justify-center font-black text-xl">
                07
              </div>
              <h2 className="text-2xl font-black text-stone-900 tracking-tight">기대효과</h2>
            </div>
            <div className="ml-16 space-y-10">
              {/* 정량적 효과 */}
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-6 tracking-tight">1) 정량적 효과</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-2 border-stone-900">
                    <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                      <tr>
                        <th className="px-6 py-3 text-left font-black border-r-2 border-blue-500">구분</th>
                        <th className="px-6 py-3 text-left font-black border-r-2 border-blue-500">Year 1-2</th>
                        <th className="px-6 py-3 text-left font-black border-r-2 border-blue-500">Year 3-5</th>
                        <th className="px-6 py-3 text-left font-black">Year 5-10</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono">
                      <tr className="border-b-2 border-stone-300">
                        <td className="px-6 py-3 border-r-2 border-stone-300 font-black">도시 수</td>
                        <td className="px-6 py-3 border-r-2 border-stone-300">3개</td>
                        <td className="px-6 py-3 border-r-2 border-stone-300">50개</td>
                        <td className="px-6 py-3">100개</td>
                      </tr>
                      <tr className="border-b-2 border-stone-300">
                        <td className="px-6 py-3 border-r-2 border-stone-300 font-black">일자리</td>
                        <td className="px-6 py-3 border-r-2 border-stone-300">1,500개</td>
                        <td className="px-6 py-3 border-r-2 border-stone-300">2만개</td>
                        <td className="px-6 py-3 font-bold">5만개</td>
                      </tr>
                      <tr className="border-b-2 border-stone-300">
                        <td className="px-6 py-3 border-r-2 border-stone-300 font-black">민간 투자</td>
                        <td className="px-6 py-3 border-r-2 border-stone-300">300억</td>
                        <td className="px-6 py-3 border-r-2 border-stone-300">5,000억</td>
                        <td className="px-6 py-3 font-bold">2조</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3 border-r-2 border-stone-300 font-black">LH 수익</td>
                        <td className="px-6 py-3 border-r-2 border-stone-300">15억/년</td>
                        <td className="px-6 py-3 border-r-2 border-stone-300">250억/년</td>
                        <td className="px-6 py-3 font-bold">500억/년</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-600 p-6 text-center">
                    <p className="text-xs text-blue-200 font-mono mb-2 tracking-widest">지방소멸위험지역</p>
                    <p className="text-4xl font-black text-white mb-1">130 → 80<span className="text-2xl">개</span></p>
                    <div className="h-1 w-20 bg-blue-400 mx-auto mb-2"></div>
                    <p className="text-xs text-blue-200 font-mono">38% 감소</p>
                  </div>
                  <div className="bg-green-600 p-6 text-center">
                    <p className="text-xs text-green-200 font-mono mb-2 tracking-widest">LH 부채비율</p>
                    <p className="text-4xl font-black text-white mb-1">222 → 150<span className="text-2xl">%</span></p>
                    <div className="h-1 w-20 bg-green-400 mx-auto mb-2"></div>
                    <p className="text-xs text-green-200 font-mono">72%p 개선</p>
                  </div>
                </div>
              </div>

              {/* 정성적 효과 */}
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-6 tracking-tight">2) 정성적 효과</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border-t-4 border-purple-600 bg-white p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-purple-600"></div>
                      <h4 className="font-black text-purple-600 text-lg">지역 차원</h4>
                    </div>
                    <ul className="space-y-2 font-mono text-sm text-stone-700">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-purple-600 mt-2 shrink-0"></div>
                        <span>고유 정체성 보존</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-purple-600 mt-2 shrink-0"></div>
                        <span>주민 참여 확대</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-purple-600 mt-2 shrink-0"></div>
                        <span>청년 유입</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-t-4 border-blue-600 bg-white p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-blue-600"></div>
                      <h4 className="font-black text-blue-600 text-lg">LH 차원</h4>
                    </div>
                    <ul className="space-y-2 font-mono text-sm text-stone-700">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-blue-600 mt-2 shrink-0"></div>
                        <span>부채 모델 탈피</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-blue-600 mt-2 shrink-0"></div>
                        <span>국민 신뢰 회복</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-blue-600 mt-2 shrink-0"></div>
                        <span>플랫폼 비즈니스</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-t-4 border-green-600 bg-white p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-green-600"></div>
                      <h4 className="font-black text-green-600 text-lg">국가 차원</h4>
                    </div>
                    <ul className="space-y-2 font-mono text-sm text-stone-700">
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-green-600 mt-2 shrink-0"></div>
                        <span>지방 소멸 해결</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-green-600 mt-2 shrink-0"></div>
                        <span>수도권 과밀 완화</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-green-600 mt-2 shrink-0"></div>
                        <span>균형 발전</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 서민 주거 안정 */}
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-6 tracking-tight">3) 서민 주거 안정 기여</h3>
                <div className="border-l-8 border-orange-500 bg-orange-50 p-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-500 text-white px-3 py-1 font-black text-sm shrink-0">직접</div>
                      <p className="text-stone-700 font-mono text-sm">
                        리빙랩 도시 내 청년·창업자 대상 임대주택 1만호 공급 (시세 70%)
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-red-600 text-white px-3 py-1 font-black text-sm shrink-0">간접</div>
                      <p className="text-stone-700 font-mono text-sm">
                        일자리 창출 → 소득 증대 → 주거비 부담 완화
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 정책 부합 */}
              <div>
                <h3 className="text-xl font-black text-stone-900 mb-6 tracking-tight">4) 정책 취지 부합</h3>
                <div className="bg-stone-900 p-8 border-l-4 border-green-400">
                  <p className="text-stone-300 leading-relaxed">
                    본 제안은 <strong className="text-green-400">지방소멸대응기금 운영 방향</strong> (지역 주도 상향식),
                    <strong className="text-blue-400"> 인구감소지역 지원 특별법</strong> (규제 특례),
                    <strong className="text-purple-400"> LH 개혁 방향</strong> (투명성·지속가능성)과 완벽히 부합합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-stone-900 border-t-8 border-gradient-to-r from-blue-600 to-green-600 p-16 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, #fff 20px, #fff 22px)`
              }}></div>
            </div>

            <div className="relative z-10">
              <div className="inline-block bg-white px-6 py-2 mb-8">
                <h2 className="text-2xl font-black text-stone-900 tracking-wider">결론</h2>
              </div>

              <p className="text-xl text-stone-300 mb-8 font-mono">
                LH가 '공급자'에서 '촉진자'로 거듭나는 패러다임 전환
              </p>

              <div className="mb-10">
                <div className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
                  「지역이 선택하는 미래,
                </div>
                <div className="text-5xl md:text-6xl font-black leading-tight">
                  <span className="text-blue-400">LH</span><span className="text-white">가 연결하는 </span><span className="text-green-400">혁신</span>」
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="border-l-4 border-blue-400 bg-white/10 p-6 text-left">
                  <div className="bg-blue-400 text-stone-900 w-10 h-10 flex items-center justify-center font-black mb-3">01</div>
                  <p className="text-white font-bold">지방 소멸 위기 극복</p>
                </div>
                <div className="border-l-4 border-green-400 bg-white/10 p-6 text-left">
                  <div className="bg-green-400 text-stone-900 w-10 h-10 flex items-center justify-center font-black mb-3">02</div>
                  <p className="text-white font-bold">LH 재정 건전성 회복</p>
                </div>
                <div className="border-l-4 border-purple-400 bg-white/10 p-6 text-left">
                  <div className="bg-purple-400 text-stone-900 w-10 h-10 flex items-center justify-center font-black mb-3">03</div>
                  <p className="text-white font-bold">국민 신뢰 재구축</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="bg-white border-t-2 border-stone-200 p-6 text-sm text-stone-600">
            <p className="mb-2">
              ※ 참고자료: 행정안전부 지방소멸대응기금 통계(2025), 한국고용정보원 지방소멸위험지역 분석(2025),
              LH 재무제표(2024), 독일·일본·싱가포르 해외 사례, 국내 리빙랩 성공 사례(성대골·북촌·홍성군)
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center py-8">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            ← 홈으로 돌아가기
          </Link>
        </div>
      </main>
    </div>
  );
}
