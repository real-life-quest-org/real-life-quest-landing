'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(1234);

  useEffect(() => {
    // Fetch current waitlist count
    fetch('/api/waitlist')
      .then(res => res.json())
      .then(data => setWaitlistCount(data.count))
      .catch(() => setWaitlistCount(1234));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('登録ありがとうございます！🎉');
        setEmail('');
        setWaitlistCount(prev => prev + 1);
      } else {
        setMessage(data.error || '登録に失敗しました');
      }
    } catch (error) {
      setMessage('エラーが発生しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f23] text-[#eaeaea] scanline crt-effect">
      {/* Retro grid background */}
      <div className="fixed inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(#00ff41 1px, transparent 1px),
          linear-gradient(90deg, #00ff41 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Animated retro elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00ff41]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="inline-block border-4 border-[#00ff41] p-4 bg-black/50 backdrop-blur-sm">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#00ff41] text-glow-green">
                  昨日までの「タスク」が、
                  <br />今日の「経験値」になる。
                </h1>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="text-xl md:text-2xl mb-4">
              <span className="text-[#ff0080]">▶</span> 退屈な日常をクエストに変え、
              <br />
              <span className="text-[#00d9ff]">▶</span> あなたのレベルアップを実感しよう。
              <br />
              <span className="text-[#ffed4e]">▶</span> リアルライフクエスト、始動。
            </div>
          </motion.div>

          <motion.button
            className="relative px-8 py-4 bg-black border-4 border-[#ff0080] text-[#ff0080] text-lg font-semibold hover:bg-[#ff0080] hover:text-black transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              boxShadow: '0 0 20px #ff0080, inset 0 0 20px rgba(255, 0, 128, 0.2)',
            }}
          >
            START QUEST
          </motion.button>

          <motion.div
            className="mt-16 flex justify-center gap-12 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="border-2 border-[#00ff41] p-4 bg-black/70">
              <p className="text-3xl font-bold text-[#00ff41]">{waitlistCount}+</p>
              <p className="text-[#00ff41]">待機中の冒険者</p>
            </div>
            <div className="border-2 border-[#00d9ff] p-4 bg-black/70">
              <p className="text-3xl font-bold text-[#00d9ff]">10K+</p>
              <p className="text-[#00d9ff]">完了したクエスト</p>
            </div>
          </motion.div>
        </div>

        {/* Retro scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="text-[#00ff41] text-3xl font-bold">▼</div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block border-4 border-[#ff0080] bg-black p-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#ff0080] text-glow-pink">
                心のHP、削られていませんか？
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "⚔",
                title: "終わらない選択の連続…",
                desc: "「判断疲れ」のボスバトル",
                color: "#ff0080"
              },
              {
                icon: "💔",
                title: "やるべき事ばかりで、",
                desc: "MP（メンタルポイント）はもうゼロ",
                color: "#ff0080"
              },
              {
                icon: "🛁",
                title: "「お風呂に入る」という",
                desc: "簡単なイベントすら、面倒に感じる…",
                color: "#00d9ff"
              },
              {
                icon: "😴",
                title: "気づけば一日が終わり、",
                desc: "セーブもできずにベッドへ…",
                color: "#00d9ff"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-4 bg-black/80 backdrop-blur-sm p-6"
                style={{ 
                  borderColor: item.color,
                  boxShadow: `0 0 20px ${item.color}40`
                }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: item.color }}>
                  {item.title}
                </h3>
                <p className="text-lg text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block border-4 border-[#ffed4e] bg-black p-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#ffed4e]">
                「クエスト化」で、
                <br />世界はもっと面白くなる。
              </h2>
            </div>
            <div className="border-4 border-[#00ff41] bg-black/80 p-8">
              <p className="text-xl leading-relaxed">
                <span className="text-[#00ff41]">▶</span> リアルライフクエストは、退屈なタスクに「目的」と「報酬」を与えます。
                <br /><br />
                <span className="text-[#ff0080]">▶</span> 服を選ぶのは「装備の選択」、買い物は「アイテムの調達」、
                <br />
                <span className="text-[#00d9ff]">▶</span> 面倒な手続きは「強敵との対峙」。
                <br /><br />
                <span className="text-[#ffed4e]">▶</span> 視点を変えるだけで、昨日まで見えていた世界が、
                攻略すべきダンジョンに変わるのです。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 border-4 border-[#ffed4e] bg-black/70 p-8"
            style={{ boxShadow: '0 0 30px #ffed4e40' }}
          >
            <div className="text-6xl mb-4">✨</div>
            <p className="text-2xl font-bold text-[#ffed4e]">
              LEVEL UP!
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block border-4 border-[#00d9ff] bg-black p-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00d9ff]">
                冒険の進め方
              </h2>
            </div>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: "STEP 1",
                title: "今日のクエストを選ぶ",
                desc: "「朝の散歩」「洗濯物をたたむ」「積読だった本を10ページ読む」",
                icon: "📋",
                color: "#00ff41"
              },
              {
                step: "STEP 2",
                title: "現実世界でクリア！",
                desc: "達成したらアプリで報告するだけ。面倒な入力は不要です。",
                icon: "⚡",
                color: "#ff0080"
              },
              {
                step: "STEP 3",
                title: "経験値（XP）と報酬をゲット！",
                desc: "ポイントを貯めて、あなたの「スキルツリー」を解放しよう。習慣化、健康、学習… あなたはどのスキルを伸ばす？",
                icon: "🎁",
                color: "#ffed4e"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-6"
              >
                <div 
                  className="flex-shrink-0 w-24 h-24 border-4 bg-black flex items-center justify-center text-5xl"
                  style={{ 
                    borderColor: item.color,
                    boxShadow: `0 0 20px ${item.color}40`
                  }}
                >
                  {item.icon}
                </div>
                <div 
                  className="flex-grow border-4 bg-black/80 backdrop-blur-sm p-6"
                  style={{ 
                    borderColor: item.color,
                    boxShadow: `0 0 15px ${item.color}30`
                  }}
                >
                  <p className="text-sm font-semibold mb-2" style={{ color: item.color }}>{item.step}</p>
                  <h3 className="text-xl font-bold mb-3" style={{ color: item.color }}>
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block border-4 border-[#ff0080] bg-black p-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#ff0080]">
                経験値ゼロで一日を終える、
                <br />そんな毎日にサヨナラを。
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-4 border-[#00ff41] bg-black/90 backdrop-blur-sm p-8"
            style={{ boxShadow: '0 0 30px #00ff4140' }}
          >
            <div className="text-lg text-gray-300 leading-relaxed space-y-6">
              <p>
                <span className="text-[#00ff41]">{'>'}</span> 「かつての僕は、毎日それなりに忙しく過ごしていました。やるべきことをこなし、一日が終わる。でも、ベッドに入る時、いつも虚しい気持ちがありました。『今日、自分は何か成長したんだろうか？』と。まるで、経験値が入らないまま同じ場所を回り続けるゲームのようでした。
              </p>
              <p>
                <span className="text-[#ff0080]">{'>'}</span> ゲームなら、どんな小さな行動にも『経験値』や『報酬』があります。そのフィードバックがあるから、僕たちは夢中になる。ならば、現実にもその仕組みを取り入れられないか？
              </p>
              <p>
                <span className="text-[#00d9ff]">{'>'}</span> このサービスは、そんなシンプルな問いから生まれました。洗濯物をたたんだら、筋力ポイント。本を10ページ読んだら、知識ポイント。そんな風に、日常に隠された『経験値』を見える化する。昨日より少しだけレベルアップした自分を実感するための、冒険の記録帳です。」
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block border-4 border-[#00ff41] bg-black p-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00ff41]">
                あなたの冒険を始めよう
              </h2>
            </div>
            <p className="text-xl mb-10">
              <span className="text-[#ff0080]">▶</span> 先行アクセスに登録して、リアルライフクエストを体験しよう
            </p>

            <form onSubmit={handleSubmit} className="mb-8">
              <div className="border-4 border-[#00d9ff] bg-black p-6" style={{ boxShadow: '0 0 20px #00d9ff40' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="メールアドレスを入力"
                  className="w-full mb-4 px-6 py-4 bg-black border-2 border-[#00ff41] text-[#00ff41] placeholder-[#00ff4160] focus:outline-none focus:border-[#00ff41] text-lg"
                  disabled={isSubmitting}
                  required
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-black border-4 border-[#ff0080] text-[#ff0080] text-lg font-semibold hover:bg-[#ff0080] hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  style={{ boxShadow: '0 0 20px #ff008040' }}
                >
                  {isSubmitting ? '登録中...' : '冒険を始める'}
                </motion.button>
                {message && (
                  <p className={`mt-4 text-lg ${message.includes('ありがとう') ? 'text-[#00ff41]' : 'text-[#ff0080]'}`}>
                    {message}
                  </p>
                )}
              </div>
            </form>

            <p className="text-base text-gray-400">
              ▶ 登録は無料です。いつでも解除できます。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t-4 border-[#00ff41]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4 font-bold text-[#00ff41]">
            © 2025 リアルライフクエスト
          </p>
          <div className="flex justify-center gap-8 text-lg">
            <a href="#" className="text-[#00d9ff] hover:text-[#ff0080] transition-colors">プライバシーポリシー</a>
            <span className="text-[#00ff41]">|</span>
            <a href="#" className="text-[#00d9ff] hover:text-[#ff0080] transition-colors">利用規約</a>
            <span className="text-[#00ff41]">|</span>
            <a href="#" className="text-[#00d9ff] hover:text-[#ff0080] transition-colors">お問い合わせ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
