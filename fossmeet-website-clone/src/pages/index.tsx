import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import DOTS from 'vanta/dist/vanta.dots.min';
import Link from 'next/link'; // Import Link from Next.js
import Image from 'next/image'; // Import Image from Next.js

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
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
          <div>FOSSMeet24</div>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ marginRight: '1rem' }}><Link href="/">Workshops</Link></li>
            <li style={{ marginRight: '1rem' }}><Link href="/">Speakers</Link></li>
            <li style={{ marginRight: '1rem' }}><Link href="/">Schedule</Link></li>
            <li style={{ marginRight: '1rem' }}><Link href="/">Sponsors</Link></li>
            <li style={{ marginRight: '1rem' }}><Link href="/">Contact</Link></li>
            <li><Link href="/">Register</Link></li>
          </ul>
        </nav>
      </header>

      <main ref={ref}>
        <section className="hero">
          <Image src="https://www.fossmeet.net/hero.svg" alt="FOSSMEET 2024" width={500} height={300} />
          <h1>Welcome to FOSSMEET 2024</h1>
        </section>

        {/* Add other sections */}
        
        <section id="sponsors">
          <h2>Sponsors</h2>
          <div>
            <h3>Gold Sponsor</h3>
            <Image src="https://www.fossmeet.net/nilenso.svg" alt="Nilenso" width={200} height={100} />
          </div>
          <div>
            <h3>Silver Sponsor</h3>
            <Image src="https://www.fossmeet.net/foss-united.svg" alt="FOSSUnited" width={200} height={100} />
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
