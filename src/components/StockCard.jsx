import './StockCard.css';

/**
 * Off-white surface stock card used in the hero mockup.
 */
export default function StockCard({
  ticker = 'BBCA',
  company = 'Bank Central Asia',
  price = '9.875',
  change = '+2,4%',
  up = true,
  metrics = [
    { k: 'PER', v: '21,3x', tone: 'neu' },
    { k: 'PBV', v: '4,1x', tone: 'neu' },
    { k: 'ROE', v: '18,6%', tone: 'up' },
    { k: 'Sinyal', v: 'Beli', tone: 'up' },
  ],
  bars = [42, 55, 48, 63, 58, 72, 68, 81, 76, 88, 84, 95],
}) {
  return (
    <div className="stock-card">
      <div className="sc-head">
        <div>
          <div className="sc-ticker">{ticker}</div>
          <div className="sc-company">{company}</div>
        </div>
        <div className="sc-price">
          <div className="sc-val">Rp{price}</div>
          <span className={`sc-badge ${up ? 'up' : 'down'}`}>
            {up ? '▲' : '▼'} {change}
          </span>
        </div>
      </div>

      <div className="sc-metrics">
        {metrics.map((m) => (
          <div className="sc-metric" key={m.k}>
            <div className="sc-k">{m.k}</div>
            <div className={`sc-mv ${m.tone}`}>{m.v}</div>
          </div>
        ))}
      </div>

      <div className="sc-divider" />

      <div className="sc-chart" aria-hidden="true">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`sc-bar ${up ? 'up' : 'down'}`}
            style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }}
          />
        ))}
      </div>
    </div>
  );
}
