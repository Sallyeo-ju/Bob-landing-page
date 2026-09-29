import Logo from './Logo.jsx';
import './Footer.css';

const COLS = [
  {
    title: 'Produk',
    links: ['Fitur', 'AI Chat', 'Cara Kerja', 'Download'],
  },
  {
    title: 'Perusahaan',
    links: ['Tentang', 'Blog', 'Karier', 'Kontak'],
  },
  {
    title: 'Dukungan',
    links: ['Bantuan', 'Privasi', 'Ketentuan', 'Status'],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>
            Analis saham IDX bertenaga AI — menjawab pertanyaanmu dengan data
            real dan bahasa yang mudah dipahami.
          </p>
          <p className="footer-disclaimer">
            BOB menyediakan informasi, bukan nasihat investasi.
          </p>
        </div>

        <div className="footer-cols">
          {COLS.map((c) => (
            <div className="footer-col" key={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} BOB. Dibuat untuk investor IDX.</span>
        <span>Data oleh Sectors.app</span>
      </div>
    </footer>
  );
}
