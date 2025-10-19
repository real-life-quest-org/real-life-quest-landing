'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<Array<{ left: number; top: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    setIsClient(true);
    // Generate particles only on client side to avoid hydration mismatch
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 2,
      }))
    );
    // Fetch current waitlist count
    fetch('/api/waitlist')
      .then(res => res.json())
      .then(data => setWaitlistCount(data.count || 0))
      .catch(() => setWaitlistCount(0));
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
        setWaitlistCount(prev => (prev ?? 0) + 1);
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
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] scanline crt-effect">
      {/* Retro grid background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(var(--text-green) 1px, transparent 1px),
          linear-gradient(90deg, var(--text-green) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Animated retro elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[var(--text-green)]"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
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
            <div className="mb-8 flex justify-center">
              <div className="inline-block border-4 border-[var(--text-green)] p-6 md:p-8 bg-black/50 backdrop-blur-sm">
                <h1 className="section-title section-title-green text-center leading-tight text-base md:text-3xl">
                  「やらなきゃ」を、クエストに。
                </h1>
                {/* Treasure chest image (place treasure-chest.png into /public/) */}
                <img src="/treasure-chest.png" alt="宝箱" className="mx-auto w-20 md:w-36 mt-4" />
               </div>
             </div>
           </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="text-xs md:text-lg mb-4">
              家事、勉強、いつもの繰り返しをクエストにすることで、
              <br />
              レベルアップを実感しよう。
            </div>
          </motion.div>

          <motion.button
            onClick={() => {
              document.getElementById('waitlist-form')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
              });
            }}
            className="relative px-8 py-4 bg-black border-4 border-[var(--action-red)] text-[var(--action-red)] text-sm md:text-lg font-semibold hover:bg-[var(--action-red)] hover:text-black transition-all duration-200 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              boxShadow: '0 0 20px var(--action-red), inset 0 0 20px rgba(255,85,85,0.2)',
            }}
          >
            事前登録する
          </motion.button>

          <motion.div
            className="mt-16 flex justify-center gap-12 text-sm md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Show the waitlist box only when count is greater than 10 */}
            {isClient && (waitlistCount ?? 0) > 10 && (
              <div className="border-2 border-[var(--text-green)] p-4 bg-black/70">
                <p className="text-2xl md:text-3xl font-bold text-[var(--text-green)]">{waitlistCount}+</p>
                <p className="text-[var(--text-green)]">待機中の冒険者</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Retro scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="text-[var(--text-green)] text-2xl md:text-3xl font-bold">▼</div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="section-container px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block border-4 border-[var(--action-red)] bg-black p-6">
              <h2 className="section-title section-title-red text-lg md:text-2xl">
                心のHP、削られていませんか？
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "⚔",
                title: "気がつくとこんな時間、私今日何やったっけ…",
                desc: "仕事から帰ってきて自分の時間がない、休日どうやって過ごすのが楽しいんだろう",
                color: "var(--action-red)"
              },
              {
                icon: "💔",
                title: "自分のための時間を確保するのは少し気が引ける",
                desc: "飲み会、友人との約束、家族サービス、全部大事だけど気がつくと自分の時間が後回しに",
                color: "var(--action-red)"
              },
              {
                icon: "🛁",
                title: "「お風呂に入る」という",
                desc: "簡単なイベントすら、面倒に感じる…",
                color: "var(--player-blue)"
              },
              {
                icon: "😴",
                title: "帰りの電車で寝落ちしちゃう",
                desc: "本当はベッドでゆっくり寝たい…",
                color: "var(--player-blue)"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-4 bg-black/80 backdrop-blur-sm p-6 rlq-card"
                style={{ 
                  borderColor: item.color,
                  boxShadow: `0 0 20px ${item.color}`
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
      <section className="section-container px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block border-4 border-[var(--player-blue)] bg-black p-6 mb-8">
              <h2 className="section-title section-title-blue text-lg md:text-2xl">
                「クエスト化」で、
                <br />世界はもっと面白くなる。
              </h2>
            </div>
            <div className="border-4 border-[var(--text-green)] bg-black/80 p-8 rlq-card">
               <p className="text-sm md:text-xl leading-relaxed">
                 リアルライフクエストは、あなたの視点を変える魔法です。
                 <br /><br />
                 面倒だった<span className="text-[var(--action-red)] font-bold">「今日の献立決め」</span>は、
                 <span className="text-[var(--player-blue)] font-bold">「レシピ図鑑を埋める冒険」</span>に。
                 <br /><br />
                 退屈な<span className="text-[var(--action-red)] font-bold">「部屋の掃除」</span>は、
                 <span className="text-[var(--player-blue)] font-bold">「拠点を強化するミッション」</span>に。
                 <br /><br />
                 日常のすべてが、攻略すべきクエストに変わります。
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 border-4 border-[var(--player-blue)] bg-black/70 p-8 rlq-card"
            style={{ boxShadow: '0 0 30px rgba(85,170,255,0.22)' }}
          >
            <div className="text-4xl md:text-6xl mb-4">✨</div>
            <p className="text-lg md:text-2xl font-bold text-[var(--player-blue)]">
              LEVEL UP!
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-container px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block border-4 border-[var(--player-blue)] bg-black p-6">
              <h2 className="section-title section-title-blue text-lg md:text-2xl">
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
                color: "var(--text-green)"
              },
              {
                step: "STEP 2",
                title: "現実世界でクリア！",
                desc: "達成したらアプリで報告するだけ。面倒な入力は不要です。",
                icon: "⚡",
                color: "var(--action-red)"
              },
              {
                step: "STEP 3",
                title: "経験値（XP）と報酬をゲット！",
                desc: "ポイントを貯めて、あなたの「スキルツリー」を解放しよう。習慣化、健康、学習… あなたはどのスキルを伸ばす？",
                icon: "🎁",
                color: "var(--player-blue)"
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
                    boxShadow: `0 0 20px ${item.color}`
                  }}
                >
                  {item.icon}
                </div>
                <div 
                  className="flex-grow border-4 bg-black/80 backdrop-blur-sm p-6 rlq-card"
                  style={{ 
                    borderColor: item.color,
                    boxShadow: `0 0 15px ${item.color}`
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
      <section className="section-container px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block border-4 border-[var(--text-green)] bg-black p-6">
              <h2 className="section-title section-title-green text-lg md:text-2xl">
                あなたの頑張り、ちゃんと「経験値」になってる？
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-4 border-[var(--text-green)] bg-black/90 backdrop-blur-sm p-8 rlq-card"
            style={{ boxShadow: '0 0 30px rgba(85,255,85,0.25)' }}
          >
            <div className="text-sm md:text-lg text-gray-300 leading-relaxed space-y-6">
              <p>
                <span className="text-[var(--text-green)]">{'>'}</span> 料理、掃除、勉強、スキルアップ。私たちは毎日、数え切れないほどのタスクをこなしています。でも、そのほとんどは誰にも褒められず、経験値にもならずに消えていく。
              </p>
              <p>
                <span className="text-[var(--action-red)]">{'>'}</span> RPGなら、どんな地味な作業も必ず「経験値」や「アイテム」に変わります。だから、レベル上げは面倒でも、どこか楽しい。僕たちの現実に足りないのは、そのシンプルな「報酬」でした。
              </p>
              <p>
                <span className="text-[var(--player-blue)]">{'>'}</span> リアルライフクエストは、そんなあなたの「見えない頑張り」を、RPGのステータスのように記録し、可視化する場所です。日々の達成感が、あなたの自信に変わる。そのための冒険の記録帳です。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="waitlist-form" className="section-container px-4 relative scroll-mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block border-4 border-[var(--text-green)] bg-black p-6 mb-8">
              <h2 className="section-title section-title-green text-lg md:text-2xl">
                あなたの冒険を始めよう
              </h2>
            </div>
            <p className="text-sm md:text-xl mb-10">
              <span className="text-[var(--action-red)]">▶</span> 先行アクセスに登録して、リアルライフクエストを体験しよう
            </p>
            <div className="text-left mb-6 border-2 border-[var(--player-blue)] p-4 rlq-card">
              <h3 className="text-sm md:text-lg font-bold mb-2 text-[var(--player-blue)]">【先行アクセスで得られること】</h3>
               <ul className="list-disc list-inside">
                 <li>ベータ版への最速ご招待</li>
                 <li>開発者からのアップデート情報</li>
                 <li>新機能のアイデア出しや投票への参加権</li>
               </ul>
             </div>

            <form onSubmit={handleSubmit} className="mb-8">
              <div className="border-4 border-[var(--player-blue)] bg-black p-6 rlq-card" style={{ boxShadow: '0 0 20px rgba(85,170,255,0.25)' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="メールアドレスを入力"
                  className="w-full mb-4 px-6 py-4 bg-black border-2 border-[var(--text-green)] text-[var(--text-green)] placeholder-[var(--text-green)] focus:outline-none focus:border-[var(--text-green)] text-sm md:text-lg"
                  disabled={isSubmitting}
                  required
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-black border-4 border-[var(--action-red)] text-[var(--action-red)] text-sm md:text-lg font-semibold hover:bg-[var(--action-red)] hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  style={{ boxShadow: '0 0 20px rgba(255,85,85,0.25)' }}
                >
                  {isSubmitting ? '登録中...' : '冒険を始める'}
                </motion.button>
                {message && (
                  <p className={`mt-4 text-sm md:text-lg ${message.includes('ありがとう') ? 'text-[var(--text-green)]' : 'text-[var(--action-red)]'}`}>
                    {message}
                  </p>
                )}
              </div>
            </form>

            <p className="text-xs md:text-base text-gray-400">
              ▶ 登録は無料です。解除に関してはお問い合わせのメールアドレスからお知らせください。
              <br />
              ▶ ご登録のメールアドレスは、本プロジェクトのご連絡以外には一切使用しません。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t-4 border-[var(--text-green)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4 font-bold text-[var(--text-green)] text-sm md:text-base">
            © 2025 リアルライフクエスト
          </p>
          <div className="flex justify-center gap-8 text-xs md:text-lg">
            <Link href="/privacy" className="text-[var(--player-blue)] hover:text-[var(--action-red)] transition-colors">
              プライバシーポリシー
            </Link>
            <span className="text-[var(--text-green)]">|</span>
            <Link href="/terms" className="text-[var(--player-blue)] hover:text-[var(--action-red)] transition-colors">
              利用規約
            </Link>
            <span className="text-[var(--text-green)]">|</span>
            <Link href="/contact" className="text-[var(--player-blue)] hover:text-[var(--action-red)] transition-colors">
              お問い合わせ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
 }
