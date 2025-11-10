'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CompleteProposal() {
  const [activeSection, setActiveSection] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← 돌아가기
          </Link>
          <div className="text-sm text-gray-500">
            제안서 | 완전판
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Title Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-12 text-white mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">
              「국민과 함께 만드는 새로운 LH」 공모전 제안서
            </h1>
            <div className="h-1 w-32 bg-white mx-auto mb-6"></div>
            <h2 className="text-3xl font-semibold mb-4">
              지역이 선택하는 미래, LH가 연결하는 혁신
            </h2>
            <p className="text-2xl">
              지역특화 리빙랩 도시 플랫폼
            </p>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="font-bold text-gray-900 mb-4">빠른 이동</h3>
          <div className="flex flex-wrap gap-2">
            {['개요', '현황 및 문제점', '개선방안', '기대효과'].map((section, i) => (
              <button
                key={section}
                onClick={() => {
                  const element = document.getElementById(`section-${i + 4}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1-3: Title, Name, Category */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    ①
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">제목</h2>
                </div>
                <div className="ml-13">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    지역이 선택하는 미래, LH가 연결하는 혁신
                  </h3>
                  <p className="text-lg text-gray-700">
                    - 지역특화 리빙랩 도시 플랫폼
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    ②
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">신청자</h2>
                </div>
                <p className="ml-13 text-gray-700">홍길동</p>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    ③
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">분야</h2>
                </div>
                <div className="ml-13">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-semibold">
                    ☑ 지역 발전 등 미래성장동력 확보를 위한 LH 역할
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Overview */}
          <section id="section-4" className="bg-white rounded-xl shadow-lg p-8 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                ④
              </div>
              <h2 className="text-2xl font-bold text-gray-900">개요</h2>
            </div>
            <div className="ml-13 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                LH의 역할을 <strong className="text-blue-600">'주택 공급자'에서 '지역혁신 촉진자'</strong>로 전환하여
                지방 소멸 위기 극복과 LH의 지속가능 성장을 동시에 달성하는 혁신 모델입니다.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">핵심 아이디어</h4>
                <p className="text-gray-700 leading-relaxed">
                  지역마다 고유한 산업·문화·자원 기반의 <strong>맞춤형 리빙랩 도시</strong>를 조성하되,
                  LH는 직접 개발 대신 <strong>민관학 협력 플랫폼</strong>을 구축하여 민간 자본과 전문성을 연결하는
                  <strong className="text-blue-600"> 촉진자</strong> 역할 수행
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">차별화 포인트</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">①</span>
                    <span className="text-gray-700">지역 주도권 보장 (중앙→지역)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">②</span>
                    <span className="text-gray-700">민간 자본 활용 (부채↓)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">③</span>
                    <span className="text-gray-700">생태계 우선 (일자리→주거)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">④</span>
                    <span className="text-gray-700">리빙랩 방식 (실험→검증→확산)</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">기대효과</h4>
                <p className="text-gray-700 leading-relaxed">
                  <strong>단기</strong>: 3개 시범도시 1,500개 일자리 창출<br/>
                  <strong>장기</strong>: 100개 도시로 확산하여 지방소멸위험지역 130개→80개 감소,
                  LH 부채비율 222%→150% 개선
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: 현황 및 문제점 */}
          <section id="section-5" className="bg-white rounded-xl shadow-lg p-8 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                ⑤
              </div>
              <h2 className="text-2xl font-bold text-gray-900">현황 및 문제점</h2>
            </div>
            <div className="ml-13 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">1) 지방 소멸 위기와 LH의 구조적 한계</h3>

                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4 py-2">
                    <h4 className="font-bold text-red-600 mb-2">[문제 1] 지방 소멸 가속화</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>전국 228개 지자체 중 <strong>130개(57%) 소멸위험</strong> (한국고용정보원, 2025)</li>
                      <li>악순환 구조: 일자리 부족 → 청년 유출 → 인구 감소 → 경제 침체 심화</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4 py-2">
                    <h4 className="font-bold text-orange-600 mb-2">[문제 2] LH 재정 위기</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>부채 160조원, 2027년 219조 전망, 부채비율 222%</li>
                      <li>토지보상금 88% 급감 (9.2조→1.1조, 2022→2025)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4 py-2">
                    <h4 className="font-bold text-yellow-600 mb-2">[문제 3] 기존 혁신도시 사업의 한계</h4>
                    <div className="overflow-x-auto mt-3">
                      <table className="w-full text-sm border">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-2 text-left border">문제</th>
                            <th className="px-4 py-2 text-left border">원인</th>
                            <th className="px-4 py-2 text-left border">결과</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="px-4 py-2 border">중앙 주도</td><td className="px-4 py-2 border">지역 수요 미반영</td><td className="px-4 py-2 border">정체성 상실</td></tr>
                          <tr><td className="px-4 py-2 border">단순 이전</td><td className="px-4 py-2 border">정부기관 이전만</td><td className="px-4 py-2 border">일자리 생태계 X</td></tr>
                          <tr><td className="px-4 py-2 border">인프라 부족</td><td className="px-4 py-2 border">계획 미흡</td><td className="px-4 py-2 border">이주 저조</td></tr>
                          <tr><td className="px-4 py-2 border">재정 의존</td><td className="px-4 py-2 border">LH 단독 투자</td><td className="px-4 py-2 border">부채 누적</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2) 해외·국내 성공 사례의 교훈</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-2">🇩🇪 독일 라이프치히</h4>
                    <p className="text-sm text-gray-700">도시재생 + 스타트업 육성</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-600 mb-2">🇯🇵 일본 가미야마쵸</h4>
                    <p className="text-sm text-gray-700">위성 오피스 유치</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-600 mb-2">🇰🇷 성대골 리빙랩</h4>
                    <p className="text-sm text-gray-700">주민 주도 에너지 해결</p>
                  </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700 font-semibold">
                    공통점: 지역 주도 + 민관협력 + 단계적 실험 + 특화 전략
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: 개선방안 */}
          <section id="section-6" className="bg-white rounded-xl shadow-lg p-8 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                ⑥
              </div>
              <h2 className="text-2xl font-bold text-gray-900">개선방안</h2>
            </div>
            <div className="ml-13 space-y-8">
              {/* LH 역할 전환 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">1) LH 역할의 근본적 전환</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left border">구분</th>
                        <th className="px-4 py-3 text-left border">기존</th>
                        <th className="px-4 py-3 text-left border">새로운 제안</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="px-4 py-2 border font-semibold">정체성</td><td className="px-4 py-2 border text-red-600">주택·토지 공급자</td><td className="px-4 py-2 border text-green-600">지역혁신 촉진자</td></tr>
                      <tr><td className="px-4 py-2 border font-semibold">접근 방식</td><td className="px-4 py-2 border text-red-600">직접 개발·투자·운영</td><td className="px-4 py-2 border text-green-600">플랫폼 구축·매칭·지원</td></tr>
                      <tr><td className="px-4 py-2 border font-semibold">재원</td><td className="px-4 py-2 border text-red-600">LH 단독 부담</td><td className="px-4 py-2 border text-green-600">민간 자본 활용</td></tr>
                      <tr><td className="px-4 py-2 border font-semibold">수익 모델</td><td className="px-4 py-2 border text-red-600">주택 판매</td><td className="px-4 py-2 border text-green-600">플랫폼 수수료</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4단계 구조 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2) 지역특화 리빙랩 도시 플랫폼 구조</h3>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-3">[1단계] 지역 선택</h4>
                    <p className="text-sm text-gray-700 mb-2">각 지자체가 특화 산업 선택</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>• 강원: 관광·헬스케어</div>
                      <div>• 전남: 신재생에너지</div>
                      <div>• 경북: 문화콘텐츠</div>
                      <div>• 충남: 제조업·자동차</div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-bold text-green-600 mb-3">[2단계] LH 플랫폼 구축</h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div>• 인프라 조성: 리빙랩 실험 공간, 창업지원센터</div>
                      <div>• 매칭 서비스: 지역↔기업↔대학 연결</div>
                      <div>• 컨설팅: 사업계획, 인허가 지원</div>
                      <div>• 펀딩 지원: 민간 투자자 유치</div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-bold text-purple-600 mb-3">[3단계] 민관학 협력</h4>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div>• 주민: 문제 발견, 참여</div>
                      <div>• 지자체: 규제 완화</div>
                      <div>• LH: 플랫폼 운영</div>
                      <div>• 기업: 투자, 기술</div>
                      <div>• 대학: R&D, 인재양성</div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-bold text-orange-600 mb-3">[4단계] 리빙랩 방식</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="font-semibold">Year 1:</span> 실험 →
                      <span className="font-semibold">Year 2:</span> 검증 →
                      <span className="font-semibold">Year 3-5:</span> 확산 →
                      <span className="font-semibold">Year 5+:</span> 자생
                    </div>
                  </div>
                </div>
              </div>

              {/* 수익 모델 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">3) 수익 모델</h3>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="font-semibold">플랫폼 수수료 40%</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-5">200억원 (Year 5)</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-semibold">임대 수익 30%</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-5">150억원</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="font-semibold">개발이익 20%</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-5">100억원</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="font-semibold">라이선스 10%</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-5">50억원</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t text-center">
                    <p className="font-bold text-xl text-gray-900">총 500억원/년</p>
                    <p className="text-sm text-gray-600">부채비율 222% → 150% 개선</p>
                  </div>
                </div>
              </div>

              {/* 필요 자원 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">4) 필요 자원</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">인력</h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div>• 플랫폼팀: 30명</div>
                      <div>• 지역매니저: 100명</div>
                      <div>• 컨설턴트: 200명</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">재정</h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div>• 초기: 550억원</div>
                      <div>• 민간 투자: 5,000억원</div>
                      <div>• 레버리지: 10배</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: 기대효과 */}
          <section id="section-7" className="bg-white rounded-xl shadow-lg p-8 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                ⑦
              </div>
              <h2 className="text-2xl font-bold text-gray-900">기대효과</h2>
            </div>
            <div className="ml-13 space-y-6">
              {/* 정량적 효과 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">1) 정량적 효과</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border">
                    <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left border">구분</th>
                        <th className="px-4 py-3 text-left border">Year 1-2</th>
                        <th className="px-4 py-3 text-left border">Year 3-5</th>
                        <th className="px-4 py-3 text-left border">Year 5-10</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="px-4 py-2 border font-semibold">도시 수</td><td className="px-4 py-2 border">3개</td><td className="px-4 py-2 border">50개</td><td className="px-4 py-2 border">100개</td></tr>
                      <tr><td className="px-4 py-2 border font-semibold">일자리</td><td className="px-4 py-2 border">1,500개</td><td className="px-4 py-2 border">2만개</td><td className="px-4 py-2 border">5만개</td></tr>
                      <tr><td className="px-4 py-2 border font-semibold">민간 투자</td><td className="px-4 py-2 border">300억</td><td className="px-4 py-2 border">5,000억</td><td className="px-4 py-2 border">2조</td></tr>
                      <tr><td className="px-4 py-2 border font-semibold">LH 수익</td><td className="px-4 py-2 border">15억/년</td><td className="px-4 py-2 border">250억/년</td><td className="px-4 py-2 border">500억/년</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-600">지방소멸위험지역</p>
                    <p className="text-2xl font-bold text-blue-600">130개 → 80개</p>
                    <p className="text-xs text-gray-500">38% 감소</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-600">LH 부채비율</p>
                    <p className="text-2xl font-bold text-green-600">222% → 150%</p>
                    <p className="text-xs text-gray-500">72%p 개선</p>
                  </div>
                </div>
              </div>

              {/* 정성적 효과 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2) 정성적 효과</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-600 mb-2">지역 차원</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 고유 정체성 보존</li>
                      <li>• 주민 참여 확대</li>
                      <li>• 청년 유입</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-2">LH 차원</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 부채 모델 탈피</li>
                      <li>• 국민 신뢰 회복</li>
                      <li>• 플랫폼 비즈니스</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-600 mb-2">국가 차원</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 지방 소멸 해결</li>
                      <li>• 수도권 과밀 완화</li>
                      <li>• 균형 발전</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 서민 주거 안정 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">3) 서민 주거 안정 기여</h3>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <span className="font-semibold text-orange-600">직접 효과:</span> 리빙랩 도시 내 청년·창업자 대상 임대주택 1만호 공급 (시세 70%)
                    </div>
                    <div>
                      <span className="font-semibold text-red-600">간접 효과:</span> 일자리 창출 → 소득 증대 → 주거비 부담 완화
                    </div>
                  </div>
                </div>
              </div>

              {/* 정책 부합 */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">4) 정책 취지 부합</h3>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <p className="text-gray-700">
                    본 제안은 <strong>지방소멸대응기금 운영 방향</strong> (지역 주도 상향식),
                    <strong> 인구감소지역 지원 특별법</strong> (규제 특례),
                    <strong> LH 개혁 방향</strong> (투명성·지속가능성)과 완벽히 부합합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl shadow-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">결론</h2>
            <p className="text-xl mb-6">
              LH가 '공급자'에서 '촉진자'로 거듭나는 패러다임 전환
            </p>
            <div className="text-4xl font-bold mb-6">
              "지역이 선택하는 미래, LH가 연결하는 혁신"
            </div>
            <p className="text-lg opacity-90">
              지역이 주도하고, LH가 연결하며, 민간이 투자하는 구조로:<br/>
              ① 지방 소멸 위기 극복<br/>
              ② LH 재정 건전성 회복<br/>
              ③ 국민 신뢰 재구축
            </p>
          </section>

          {/* Footer */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-sm text-gray-600">
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
