import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import DOTS from 'vanta/dist/vanta.dots.min';

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: ref.current,
          THREE: THREE,
          color: 0x1e88e5,
          backgroundColor: 0x0d47a1,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className='main-part'>
      <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <nav style={{ backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
          <div>FOSSMeet'24</div>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ marginRight: '1rem' }}><a href="/">Workshops</a></li>
            <li style={{ marginRight: '1rem' }}><a href="/">Speakers</a></li>
            <li style={{ marginRight: '1rem' }}><a href="/">Schedule</a></li>
            <li style={{ marginRight: '1rem' }}><a href="/">Sponsors</a></li>
            <li style={{ marginRight: '1rem' }}><a href="/">Contact</a></li>
            <li><a href="/">Register</a></li>
          </ul>
        </nav>
      </header>

      <main ref={ref}>
        <section className="hero">
          <img src="https://www.fossmeet.net/hero.svg" alt="FOSSMEET 2024" />
          <h1>Welcome to FOSSMEET 2024</h1>
        </section>

        {/* Add other sections */}
        
        <section id="sponsors">
          <h2>Sponsors</h2>
          <div>
            <h3>Gold Sponsor</h3>
            <img src="https://www.fossmeet.net/nilenso.svg" alt="Nilenso" />
          </div>
          <div>
            <h3>Silver Sponsor</h3>
            <img src="https://www.fossmeet.net/foss-united.svg" alt="FOSSUnited" />
          </div>
        </section>
      </main>

      <footer>
        <div>
          <h3>Get in touch with us <span>👋</span></h3>
        </div>
        <div>
          <p>Email: info@fossmeet.net</p>
          <p>Phone: +91 94004 30812</p>
          <ul>
            {/* Add social media links */}
          </ul>
        </div>
      </footer>

      <div className="chatbot">
        <input type="text" placeholder="Ask a question..." />
      </div>
    </div>
  );
}
