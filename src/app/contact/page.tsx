import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'お問い合わせ - リアルライフクエスト',
  description: 'リアルライフクエストへのお問い合わせ',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0f0f23] text-[#eaeaea] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00ff41] mb-4 text-center">
            お問い合わせ
          </h1>
        </div>

        <div className="border-4 border-[#00ff41] bg-black/80 p-8 space-y-6">
          <p className="text-xl text-gray-300 leading-relaxed">
            「リアルライフクエスト」に関するご質問、ご意見、不具合の報告などがございましたら、以下のメールアドレスまでご連絡ください。
          </p>

          <div className="bg-[#00ff41]/10 border-2 border-[#00ff41] p-6 rounded">
            <p className="text-sm text-gray-400 mb-2">連絡先メールアドレス:</p>
            <p className="text-2xl font-bold text-[#00ff41]">
              tsukiwahigashini0410[at]gmail.com
            </p>
            <p className="text-sm text-[#ff0080] mt-3">
              ※ [at] を @ に置き換えてください
            </p>
          </div>

          <div className="border-l-4 border-[#ff0080] pl-6 py-4 bg-[#ff0080]/5">
            <h2 className="text-xl font-bold text-[#ff0080] mb-4">
              お問い合わせについてのご注意
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#ff0080] mr-2">▶</span>
                <span>本サービスは個人で開発・運営しておりますため、ご返信にお時間をいただく場合がございます。</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff0080] mr-2">▶</span>
                <span>いただいたすべてのお問い合わせに返信をお約束するものではございません。</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff0080] mr-2">▶</span>
                <span>サービスの改善要望やアイデアなども歓迎しておりますが、すべてを実装することはお約束できかねます。</span>
              </li>
            </ul>
            <p className="text-gray-400 mt-4">
              あらかじめご了承いただけますよう、お願い申し上げます。
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-[#00d9ff] mb-3">
              お問い合わせの際は、以下の情報をお書き添えください
            </h3>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start">
                <span className="text-[#00d9ff] mr-2">•</span>
                <span>お名前（ニックネーム可）</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d9ff] mr-2">•</span>
                <span>お問い合わせ内容の種類（質問・要望・不具合報告など）</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d9ff] mr-2">•</span>
                <span>具体的な内容</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00d9ff] mr-2">•</span>
                <span>不具合報告の場合：発生した状況、使用環境（ブラウザ、OS等）</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#ffed4e]/10 border-2 border-[#ffed4e] p-4 rounded mt-6">
            <p className="text-sm text-gray-300">
              <span className="text-[#ffed4e] font-bold">💡 ヒント：</span>
              スクリーンショットや具体的な手順を添えていただくと、より早く問題を把握できます。
            </p>
          </div>
        </div>

        <div className="mt-8 text-center space-y-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all font-semibold"
          >
            ← トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
