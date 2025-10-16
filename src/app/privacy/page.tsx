import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'プライバシーポリシー - リアルライフクエスト',
  description: 'リアルライフクエストのプライバシーポリシー',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="section-title section-title-blue mb-4 text-center">
            プライバシーポリシー
          </h1>
          <p className="text-center text-gray-400">
            最終更新日: 2025年10月15日
          </p>
        </div>

        <div className="border-4 border-[var(--text-green)] bg-black/80 p-8 space-y-8 rlq-card">
          <section>
            <h2 className="text-2xl font-bold text-[var(--text-green)] mb-4">第1条（個人情報の定義）</h2>
            <p className="text-gray-300 leading-relaxed">
              本プライバシーポリシーにおいて、「個人情報」とは、生存する個人に関する情報であって、当該情報に含まれる氏名、メールアドレスその他の記述等により特定の個人を識別できるものをいいます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--action-red)] mb-4">第2条（個人情報の収集）</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              本サービスでは、以下の個人情報を収集する場合があります。
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>メールアドレス（ウェイティングリスト登録時）</li>
              <li>Cookie及びこれに類する技術により取得する情報</li>
              <li>本サービスの利用状況に関する情報</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--player-blue)] mb-4">第3条（個人情報の利用目的）</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              収集した個人情報は、以下の目的で利用いたします。
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>本サービスの提供・運営のため</li>
              <li>ユーザーからのお問い合わせに対応するため</li>
              <li>サービス改善・新機能開発のため</li>
              <li>重要なお知らせなど必要に応じた連絡を行うため</li>
              <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--player-blue)] mb-4">第4条（個人情報の第三者提供）</h2>
            <p className="text-gray-300 leading-relaxed">
              運営者は、以下のいずれかに該当する場合を除き、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-3">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--text-green)] mb-4">第5条（個人情報の安全管理）</h2>
            <p className="text-gray-300 leading-relaxed">
              運営者は、個人情報の紛失、破壊、改ざん及び漏洩などのリスクに対して、合理的な安全対策を実施します。ただし、完全な安全性を保証するものではありません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--action-red)] mb-4">第6条（Cookieの使用について）</h2>
            <p className="text-gray-300 leading-relaxed">
              本サービスでは、ユーザーの利便性向上やサービス改善のために、Cookieを使用する場合があります。Cookieの使用を希望されない場合、ブラウザの設定でCookieを無効化することができますが、一部のサービス機能が制限される可能性があります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--player-blue)] mb-4">第7条（プライバシーポリシーの変更）</h2>
            <p className="text-gray-300 leading-relaxed">
              1. 本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。
            </p>
            <p className="text-gray-300 leading-relaxed mt-2">
              2. 運営者が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--player-blue)] mb-4">第8条（お問い合わせ窓口）</h2>
            <p className="text-gray-300 leading-relaxed">
              本ポリシーに関するお問い合わせは、<Link href="/contact" className="text-[var(--text-green)] hover:text-[var(--action-red)] underline">お問い合わせページ</Link>よりご連絡ください。
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
