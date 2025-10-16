import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '利用規約 - リアルライフクエスト',
  description: 'リアルライフクエストの利用規約',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="section-title section-title-blue mb-4 text-center">
            利用規約
          </h1>
          <p className="text-center text-gray-400">
            最終更新日: 2025年10月15日
          </p>
        </div>

        <div className="border-4 border-[var(--text-green)] bg-black/80 p-8 space-y-8 rlq-card">
          <section>
            <h2 className="text-2xl font-bold text-[var(--text-green)] mb-4">第1条（本規約への同意）</h2>
            <p className="text-gray-300 leading-relaxed">
              1. 本規約は、リアルライフクエスト（以下「本サービス」といいます）の利用に関する条件を、本サービスを利用するユーザー（以下「ユーザー」といいます）と本サービスの運営者（以下「運営者」といいます）との間で定めるものです。
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              2. ユーザーは、本サービスを利用することにより、本規約の全ての内容に同意したものとみなされます。
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              3. 本規約に同意いただけない場合は、本サービスをご利用いただくことはできません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--action-red)] mb-4">第2条（サービスの利用）</h2>
            <p className="text-gray-300 leading-relaxed">
              1. 本サービスは、日常のタスクをクエスト化し、ゲーム感覚で楽しむためのWebアプリケーションです。
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              2. 本サービスは現在ベータ版として提供されており、予告なく機能の追加・変更・削除を行う場合があります。
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              3. ユーザーは、自己の責任において本サービスを利用するものとし、本サービスの利用により得られた情報等について、その完全性、正確性、有用性等を保証するものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--player-blue)] mb-4">第3条（禁止事項）</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              ユーザーは、本サービスの利用にあたり、以下の行為を行ってはならないものとします。
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>運営者、他のユーザー、またはその他第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
              <li>本サービスのネットワークまたはシステム等に過度な負荷をかける行為</li>
              <li>本サービスの運営を妨害するおそれのある行為</li>
              <li>不正アクセスをし、またはこれを試みる行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>不正な目的を持って本サービスを利用する行為</li>
              <li>本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>運営者が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
              <li>反社会的勢力に対して直接または間接に利益を供与する行為</li>
              <li>その他、運営者が不適切と判断する行為</li>
            </ul>
          </section>

          <section className="border-4 border-[var(--action-red)] p-6 bg-[var(--action-red)]/10">
            <h2 className="text-2xl font-bold text-[var(--action-red)] mb-4">第4条（免責事項）【重要】</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              <strong className="text-[var(--action-red)]">本条項は特に重要ですので、必ずお読みください。</strong>
            </p>
            <p className="text-gray-300 leading-relaxed">
              1. 運営者は、本サービスがベータ版として提供されていることをご理解いただき、本サービスの内容、完全性、正確性、有用性、安全性、最新性等について、いかなる保証もいたしません。
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              2. 運営者は、本サービスの利用により発生したユーザーの損害（データの消失、機器の故障、その他あらゆる直接的・間接的損害を含みます）について、一切の責任を負いません。
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              3. 運営者は、本サービスが中断されないこと、エラーが発生しないこと、欠陥が修正されること等について、いかなる保証もいたしません。
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              4. 本サービスに関連してユーザーと他のユーザーまたは第三者との間において生じた取引、連絡、紛争等について、運営者は一切責任を負いません。
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              5. 運営者は、個人開発者として本サービスを提供しており、サポート対応についても保証いたしません。お問い合わせをいただいた場合でも、回答をお約束するものではございません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--player-blue)] mb-4">第5条（サービスの変更・中断・終了）</h2>
            <p className="text-gray-300 leading-relaxed">
              1. 運営者は、ユーザーへの事前の通知なく、本サービスの内容を変更し、または本サービスの提供を中断もしくは終了することができるものとします。
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              2. 運営者は、本条に基づき運営者が行った措置に基づきユーザーに生じた損害について一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--text-green)] mb-4">第6条（規約の変更）</h2>
            <p className="text-gray-300 leading-relaxed">
              1. 運営者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              2. 変更後の利用規約は、本サービス上に掲載したときから効力を生じるものとします。
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              3. 本規約の変更後、本サービスの利用を開始した場合には、変更後の規約に同意したものとみなします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--action-red)] mb-4">第7条（個人情報の取扱い）</h2>
            <p className="text-gray-300 leading-relaxed">
              1. 運営者は、本サービスの利用によって取得する個人情報については、運営者が別途定めるプライバシーポリシーに従い、適切に取り扱うものとします。
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              2. 運営者は、ユーザーが本サービスに登録した情報について、合理的なセキュリティ対策を講じますが、その完全性や安全性を保証するものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--player-blue)] mb-4">第8条（準拠法・管轄裁判所）</h2>
            <p className="text-gray-300 leading-relaxed">
              1. 本規約の解釈にあたっては、日本法を準拠法とします。
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              2. 本サービスに関して紛争が生じた場合には、運営者の所在地を管轄する裁判所を専属的合意管轄裁判所とします。
            </p>
          </section>

          <div className="mt-8 pt-8 border-t-2 border-[var(--text-green)]/30 text-center">
            <p className="text-gray-400">以上</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 border-2 border-[var(--text-green)] text-[var(--text-green)] hover:bg-[var(--text-green)] hover:text-black transition-all font-semibold"
          >
            ← トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
