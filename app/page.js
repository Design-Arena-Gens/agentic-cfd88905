function Section({ id, children, bg }) {
  return (
    <section id={id} className={bg ? `section ${bg}` : 'section'}>
      <div className="container">{children}</div>
    </section>
  );
}

const PHONE = '+2348000000000';
const WHATSAPP = '2348000000000';

export default function HomePage() {
  return (
    <main>
      <header className="header">
        <div className="container nav">
          <a href="#" className="brand" aria-label="NaijaNet Cyber Cafe home">
            <img src="/logo.svg" alt="NaijaNet logo" className="logo" />
            <span>NaijaNet Cyber Cafe</span>
          </a>
          <nav className="links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#location">Location</a>
            <a className="cta" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">Book a PC</a>
          </nav>
        </div>
      </header>

      <Section id="hero" bg="hero">
        <div className="hero-grid">
          <div>
            <h1>Fast, Reliable Internet & Gaming in Lagos</h1>
            <p className="lead">
              Fibre-speed browsing, dedicated gaming rigs, printing & scanning, and exam registration services.
              Power backed by UPS/inverter so you stay online.
            </p>
            <div className="actions">
              <a className="btn primary" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              <a className="btn" href={`tel:${PHONE}`}>Call {PHONE}</a>
            </div>
            <ul className="badges" aria-label="highlights">
              <li>Up to 200 Mbps fibre</li>
              <li>Gaming zone</li>
              <li>Printing & scanning</li>
              <li>Affordable rates</li>
            </ul>
          </div>
          <div className="hero-card" role="img" aria-label="People gaming and browsing in cyber cafe" />
        </div>
      </Section>

      <Section id="features">
        <h2>Everything you need in one cafe</h2>
        <div className="grid features">
          <article>
            <h3>High?Speed Browsing</h3>
            <p>Fibre internet, modern browsers, secure PCs. Login and get things done fast.</p>
          </article>
          <article>
            <h3>Gaming Zone</h3>
            <p>Dedicated rigs, low latency, popular titles installed. Headsets available.</p>
          </article>
          <article>
            <h3>Print ? Scan ? Laminate</h3>
            <p>Sharp B/W & colour prints, document scanning, laminations and photocopies.</p>
          </article>
          <article>
            <h3>Exam & School Services</h3>
            <p>JAMB/WAEC/NECO registration, CAF forms, NYSC, CV typing, email setup.</p>
          </article>
          <article>
            <h3>Power Backup</h3>
            <p>UPS & inverter keep you online during power cuts. No sudden shutdowns.</p>
          </article>
          <article>
            <h3>Safe & Comfortable</h3>
            <p>Airy space, monitored systems, helpful staff, student?friendly discounts.</p>
          </article>
        </div>
      </Section>

      <Section id="pricing" bg="muted">
        <h2>Simple, affordable pricing</h2>
        <div className="grid pricing">
          <div className="card">
            <h3>Browsing</h3>
            <ul>
              <li>?400 per hour</li>
              <li>?250 per 30 mins</li>
              <li>Student ID: 10% off</li>
            </ul>
          </div>
          <div className="card">
            <h3>Gaming</h3>
            <ul>
              <li>?600 per hour</li>
              <li>Night bundle: ?2,500 (6pm?10pm)</li>
            </ul>
          </div>
          <div className="card">
            <h3>Printing</h3>
            <ul>
              <li>B/W: ?50 per page</li>
              <li>Colour: ?150 per page</li>
              <li>Scanning: ?100 per page</li>
            </ul>
          </div>
        </div>
        <p className="fine">Prices are indicative and can be adjusted anytime in?store.</p>
      </Section>

      <Section id="location">
        <h2>Find us in Lagos</h2>
        <p>15 Ogunlana Drive, Surulere, Lagos. Opposite City Mall entrance.</p>
        <div className="actions">
          <a className="btn primary" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">Reserve a PC</a>
          <a className="btn" href={`tel:${PHONE}`}>Call {PHONE}</a>
          <a className="btn ghost" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=NaijaNet+Cyber+Cafe+Surulere+Lagos">Open in Google Maps</a>
        </div>
      </Section>

      <footer className="footer">
        <div className="container footgrid">
          <div className="brandline">
            <img src="/logo.svg" alt="NaijaNet logo" className="logo small" />
            <strong>NaijaNet Cyber Cafe</strong>
            <span>Fast internet ? Gaming ? Printing</span>
          </div>
          <div>
            <h4>Hours</h4>
            <p>Mon?Sat: 8:00 ? 20:00<br />Sun: 12:00 ? 18:00</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>
              <a href={`tel:${PHONE}`}>{PHONE}</a><br />
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
            </p>
          </div>
          <div>
            <h4>Follow</h4>
            <p>
              <a href="#" aria-disabled>Facebook</a><br />
              <a href="#" aria-disabled>Instagram</a>
            </p>
          </div>
        </div>
        <div className="container copy">? {new Date().getFullYear()} NaijaNet Cyber Cafe ? Lagos, Nigeria</div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InternetCafe',
            name: 'NaijaNet Cyber Cafe',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '15 Ogunlana Drive, Surulere',
              addressLocality: 'Lagos',
              addressCountry: 'NG',
            },
            telephone: PHONE,
            sameAs: [],
            openingHoursSpecification: [
              { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '08:00', closes: '20:00' },
              { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '12:00', closes: '18:00' },
            ],
            url: 'https://agentic-cfd88905.vercel.app',
          }),
        }}
      />
    </main>
  );
}
