"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
          form.reset();
        } else {
          alert('送信に失敗しました。もう一度お試しください。');
        }
      })
      .catch(() => {
        alert('送信中にエラーが発生しました。');
      });
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-16 px-4">
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-[var(--background)] border-4 border-[var(--text-green)] p-6 text-center">
            <p className="text-lg text-[var(--text-green)] font-bold mb-4">
              送信ありがとうございます！
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-black border-2 border-[var(--text-green)] text-[var(--text-green)] hover:bg-[var(--text-green)] hover:text-black transition-all"
            >
              閉じる
            </button>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="section-title section-title-blue mb-4 text-center text-lg md:text-2xl">
            お問い合わせ
          </h1>
        </div>

        <div className="border-4 border-[var(--text-green)] bg-black/80 p-8 space-y-6 rlq-card">
          <p className="text-xl text-gray-300 leading-relaxed">
            「リアルライフクエスト」に関するご質問、ご意見、不具合の報告などがございましたら、以下のフォームからご連絡ください。
          </p>

          <form
            action="https://formspree.io/f/mrbyjdlg"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-400 mb-1"
              >
                お名前（ニックネーム可）
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-black border-2 border-[var(--text-green)] text-[var(--text-green)] placeholder-[var(--text-green)] focus:outline-none focus:border-[var(--text-green)] text-sm"
                placeholder="お名前を入力してください"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-400 mb-1"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-black border-2 border-[var(--text-green)] text-[var(--text-green)] placeholder-[var(--text-green)] focus:outline-none focus:border-[var(--text-green)] text-sm"
                placeholder="メールアドレスを入力してください"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-400 mb-1"
              >
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 bg-black border-2 border-[var(--text-green)] text-[var(--text-green)] placeholder-[var(--text-green)] focus:outline-none focus:border-[var(--text-green)] text-sm"
                placeholder="お問い合わせ内容を入力してください"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-black border-4 border-[var(--action-red)] text-[var(--action-red)] text-sm font-semibold hover:bg-[var(--action-red)] hover:text-black transition-all"
            >
              送信する
            </button>
          </form>
        </div>

        <div className="mt-8 text-center space-y-4">
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
