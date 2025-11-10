import CompleteProposal from './complete-proposal';

export default function ProposalPage() {
  return <CompleteProposal />;
}

function ProposalPageOld() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← 돌아가기
          </Link>
          <div className="text-sm text-gray-500">
            제안서 | 5페이지
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

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                ①
              </div>
              <h2 className="text-2xl font-bold text-gray-900">제목</h2>
            </div>
            <div className="ml-13 space-y-2">
              <h3 className="text-xl font-bold text-blue-600">
                지역이 선택하는 미래, LH가 연결하는 혁신
              </h3>
              <p className="text-lg text-gray-700">
                - 지역특화 리빙랩 도시 플랫폼(Regional Innovation Living Lab Platform)
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                ②
              </div>
              <h2 className="text-2xl font-bold text-gray-900">신청자</h2>
            </div>
            <p className="ml-13 text-gray-700">홍길동</p>
          </section>

          {/* Section 3 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
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
          </section>

          {/* Section 4 - Overview */}
          <section className="bg-white rounded-xl shadow-lg p-8">
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
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>단기</strong>: 3개 시범도시 1,500개 일자리 창출<br/>
                  <strong>장기</strong>: 100개 도시로 확산하여 지방소멸위험지역 130개→80개 감소,
                  LH 부채비율 222%→150% 개선
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 - 현황 및 문제점 */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                ⑤
              </div>
              <h2 className="text-2xl font-bold text-gray-900">현황 및 문제점</h2>
            </div>
            <div className="ml-13 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">1) 지방 소멸 위기와 LH의 구조적 한계</h3>

                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-bold text-red-600 mb-2">[문제 1] 지방 소멸 가속화</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>전국 228개 지자체 중 <strong>130개(57%) 소멸위험</strong> (한국고용정보원, 2025)</li>
                      <li>악순환 구조: 일자리 부족 → 청년 유출 → 인구 감소 → 경제 침체 심화</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-bold text-orange-600 mb-2">[문제 2] LH 재정 위기</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>부채 160조원 (비금융공기업 1위), 2027년 219조 전망, 부채비율 222%</li>
                      <li>토지보상금 88% 급감 (9.2조→1.1조, 2022→2025), 신규 사업 위축</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-bold text-yellow-600 mb-2">[문제 3] 기존 혁신도시 사업의 한계</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-2 text-left">문제</th>
                            <th className="px-4 py-2 text-left">원인</th>
                            <th className="px-4 py-2 text-left">결과</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="px-4 py-2">중앙 주도</td>
                            <td className="px-4 py-2">지역 수요 미반영</td>
                            <td className="px-4 py-2">정체성 상실</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">단순 이전</td>
                            <td className="px-4 py-2">정부기관 이전만</td>
                            <td className="px-4 py-2">일자리 생태계 X</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">인프라 부족</td>
                            <td className="px-4 py-2">계획 미흡</td>
                            <td className="px-4 py-2">이주 저조</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">재정 의존</td>
                            <td className="px-4 py-2">LH 단독 투자</td>
                            <td className="px-4 py-2">부채 누적</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2) 해외·국내 성공 사례의 교훈</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-600 mb-2">🇩🇪 독일 라이프치히</h4>
                    <p className="text-sm text-gray-700">도시재생 + 스타트업 육성 → 공공·민간 거버넌스</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-600 mb-2">🇯🇵 일본 가미야마쵸</h4>
                    <p className="text-sm text-gray-700">위성 오피스 유치 → 청년 유입, 지역 활성화</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-600 mb-2">🇰🇷 국내 성대골 리빙랩</h4>
                    <p className="text-sm text-gray-700">주민 주도 에너지 문제 해결</p>
                  </div>
                </div>
                <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700 font-semibold">
                    공통점: 지역 주도 + 민관협력 + 단계적 실험 + 특화 전략
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Continue button */}
          <div className="text-center py-8">
            <Link
              href="/proposal/page2"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              다음 페이지: 개선방안 →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
