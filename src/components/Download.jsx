import './Download.css';

// Direct link to the latest APK published as a GitHub Release on the app repo.
// Always resolves to the newest release asset once it's published.
export const APK_URL =
  'https://github.com/CristianPhi/SectorsHackhaton/releases/latest/download/app-release.apk';

export default function Download() {
  return (
    <section id="download" className="download">
      <div className="wrap">
        <div className="download-card reveal">
          <div className="download-glow" aria-hidden="true" />
          <div className="download-content">
            <div className="section-label">Mulai Sekarang</div>
            <h2 className="download-title">
              Bawa analis saham AI di sakumu
            </h2>
            <p className="download-sub">
              Unduh BOB dan mulai bertanya soal saham IDX hari ini —
              langsung dari APK, tanpa toko aplikasi.
            </p>
            <div className="download-cta">
              <a href={APK_URL} className="btn btn-primary download-btn">
                <span className="store-mini">↓</span>
                <span>
                  <small>Untuk Android</small>
                  <strong>Download APK</strong>
                </span>
              </a>
            </div>
            <p className="download-apk">
              Android 7.0+ · Aktifkan "Install dari sumber tak dikenal" saat
              memasang.
            </p>
          </div>

          <div className="download-qr reveal" data-delay="2">
            <div className="qr-frame">
              <QrPlaceholder />
            </div>
            <p className="qr-caption">Pindai untuk mengunduh</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* A decorative, self-contained SVG "QR" pattern (not a real code). */
function QrPlaceholder() {
  const cells = [];
  const pattern = [
    '1111111 0110 1111111',
    '1000001 0010 1000001',
    '1011101 1101 1011101',
    '1011101 0100 1011101',
    '1011101 1011 1011101',
    '1000001 0001 1000001',
    '1111111 0101 1111111',
    '0000000 0000 0000000',
    '1101011 1010 0110101',
    '0010110 0101 1001010',
    '1100101 1100 0111001',
    '0000000 0000 0000000',
    '1111111 1001 1010110',
    '1000001 0110 0101101',
    '1011101 1010 1100101',
    '1011101 0101 0011010',
    '1011101 1100 1101001',
    '1000001 0011 0110110',
    '1111111 1010 1011010',
  ];
  pattern.forEach((row, y) => {
    row.replace(/ /g, '').split('').forEach((c, x) => {
      if (c === '1') {
        cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />);
      }
    });
  });
  return (
    <svg viewBox="0 0 19 19" className="qr-svg" role="img" aria-label="QR code">
      <rect width="19" height="19" fill="#F4F1E9" />
      <g fill="#0B2E2C">{cells}</g>
    </svg>
  );
}
