import { useEffect, useRef, useState } from 'react';
import './ChatDemo.css';

/**
 * Scripted, auto-playing chat that types a user question, shows a
 * "thinking" indicator, then reveals BOB's structured answer.
 * Loops through several conversations.
 */
const SCRIPT = [
  {
    q: 'BBCA sekarang layak beli nggak?',
    bot: {
      title: 'BBCA · Bank Central Asia',
      rows: [
        { k: 'Harga', v: 'Rp9.875', tone: 'up' },
        { k: 'Valuasi (PER 21x)', v: 'Sedikit premium', tone: 'neu' },
        { k: 'Tren teknikal', v: 'Naik, di atas MA50', tone: 'up' },
        { k: 'Sinyal', v: 'Akumulasi bertahap', tone: 'up' },
      ],
      note: 'Fundamental kuat & ROE 18%. Harga tidak murah, jadi cicil beli lebih aman daripada masuk sekaligus.',
    },
  },
  {
    q: 'Saham bank mana yang paling murah?',
    bot: {
      title: 'Screener · Sektor Perbankan',
      rows: [
        { k: 'BBRI', v: 'PBV 2,1x · murah', tone: 'up' },
        { k: 'BMRI', v: 'PBV 1,9x · murah', tone: 'up' },
        { k: 'BBCA', v: 'PBV 4,1x · mahal', tone: 'down' },
      ],
      note: 'Berdasarkan PBV, BMRI & BBRI paling menarik. BBCA berkualitas tapi dihargai premium.',
    },
  },
  {
    q: 'Kenapa GOTO turun hari ini?',
    bot: {
      title: 'GOTO · Ringkasan berita',
      rows: [
        { k: 'Pergerakan', v: '-1,1% hari ini', tone: 'down' },
        { k: 'Volume', v: 'Di atas rata-rata', tone: 'neu' },
        { k: 'Sentimen', v: 'Aksi ambil untung', tone: 'down' },
      ],
      note: 'Penurunan terkait profit-taking pasca rilis kinerja. Belum ada perubahan fundamental besar.',
    },
  },
];

export default function ChatDemo() {
  const [step, setStep] = useState(0); // conversation index
  const [typed, setTyped] = useState('');
  const [phase, setPhase] = useState('typing'); // typing | thinking | answer
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));

  useEffect(() => {
    const convo = SCRIPT[step];
    setTyped('');
    setPhase('typing');

    // Type the question character by character
    let i = 0;
    const tick = () => {
      i += 1;
      setTyped(convo.q.slice(0, i));
      if (i < convo.q.length) {
        later(tick, 42);
      } else {
        later(() => setPhase('thinking'), 500);
        later(() => setPhase('answer'), 1700);
        // advance to next conversation
        later(() => setStep((s) => (s + 1) % SCRIPT.length), 6200);
      }
    };
    later(tick, 500);

    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const convo = SCRIPT[step];

  return (
    <section id="chat" className="chat-section">
      <div className="wrap chat-layout">
        <div className="chat-copy reveal">
          <div className="section-label">Asisten AI</div>
          <h2 className="section-title">
            Ngobrol soal saham, seperti dengan teman
          </h2>
          <p className="section-sub">
            Tulis pertanyaanmu apa adanya. BOB menarik data pasar terbaru,
            menganalisisnya, dan menjawab dengan ringkas — lengkap dengan angka
            yang bisa kamu percaya.
          </p>
          <ul className="chat-points">
            <li>Jawaban terstruktur, bukan paragraf membingungkan</li>
            <li>Selalu didukung data IDX real-time</li>
            <li>Bebas jargon — ramah untuk pemula</li>
          </ul>
        </div>

        <div className="chat reveal" data-delay="2" aria-live="polite">
          <div className="chat-head">
            <span className="chat-avatar">B</span>
            <div>
              <div className="chat-name">BOB</div>
              <div className="chat-status">
                <span className="chat-dot" /> online
              </div>
            </div>
            <span className="chat-demo-tag">Contoh ilustrasi</span>
          </div>

          <div className="chat-body" key={step}>
            <div className="bubble user">
              {typed}
              {phase === 'typing' && <span className="caret" />}
            </div>

            {phase === 'thinking' && (
              <div className="bubble bot thinking">
                <span className="tdot" />
                <span className="tdot" />
                <span className="tdot" />
              </div>
            )}

            {phase === 'answer' && (
              <div className="bubble bot answer">
                <div className="b-title">{convo.bot.title}</div>
                {convo.bot.rows.map((r) => (
                  <div className="b-row" key={r.k}>
                    <span className="b-k">{r.k}</span>
                    <span className={`b-v ${r.tone}`}>{r.v}</span>
                  </div>
                ))}
                <div className="b-note">{convo.bot.note}</div>
                <div className="b-disclaimer">
                  Bukan rekomendasi investasi. Selalu lakukan riset sendiri.
                </div>
              </div>
            )}
          </div>

          <div className="chat-input">
            <span className="chat-field">Tanya BOB apa saja…</span>
            <button className="chat-send" aria-label="Kirim">
              ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
