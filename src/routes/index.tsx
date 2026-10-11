import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Apple, ArrowDown, ArrowRight, BookOpen, Check, Flame, GraduationCap, Headset, Menu, Monitor, Play, Star, UsersRound, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import instructor from '@/assets/instructor.png';
import stepsInstructor from '@/assets/instructor-steps.png';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Learn@House — Because Email Is Complicated Enough.' },
    { name: 'description', content: 'Learning made simple. Explore expert-led courses, get personal guidance, and join the Learn@House community.' },
    { property: 'og:title', content: 'Learn@House — Learning made simple' },
    { property: 'og:description', content: 'Discover your next course with expert guidance and a supportive learning community.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

const reasons = [
  { title: '24/7 Support', icon: Headset, description: 'Support is only a message away. Get help with your learning, whenever you need it.', detail: 'Learning is better when you have someone in your corner. Our support team helps you find your way, understand your lessons, and keep moving forward.' },
  { title: 'Top Guide', icon: UsersRound, description: 'Learn with experts who guide you through every step of your learning journey.', detail: 'Our instructors bring real-world experience to every lesson. Follow clear, practical guidance and build your confidence one step at a time.' },
  { title: 'Best Course', icon: Monitor, description: 'Explore practical courses designed to make every new skill feel within reach.', detail: 'From the first lesson to your final project, our courses focus on useful skills. Find a subject you love and learn at a pace that works for you.' },
];
const courses = [
  { title: 'UI/UX Design', icon: UsersRound, description: 'Turn your creative ideas into thoughtful digital experiences. Start with the essentials of great design.', lessons: '24 lessons' },
  { title: 'Web Development', icon: Monitor, description: 'Build your foundation for the web. Create beautiful websites and bring your ideas to life.', lessons: '32 lessons' },
  { title: 'App Development', icon: BookOpen, description: 'Explore the world of mobile apps. Learn the skills to create your very own digital products.', lessons: '28 lessons' },
];
function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState<{ title: string; text: string } | null>(null);
  useEffect(() => {
    if (!modal) return;
    const handleKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setModal(null); };
    document.addEventListener('keydown', handleKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = previous; };
  }, [modal]);
  return (
    <main>
      <section className="hero" id="home">
        <nav className="site-nav page-width" aria-label="Main navigation">
          <a className="brand" href="#home">Learn@House</a>
          <Button variant="heroGhost" size="icon" className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(false)}>
            <a href="#home">Home</a><a href="#about">About</a><a href="#services">Service</a><a href="#courses">Pricing</a><a href="#courses">Resources</a>
            <Button variant="sunshine" className="contact-button" onClick={() => setModal({ title: 'Let’s connect', text: 'Interested in learning with us? Explore our courses and find your next step. Contact details will be available when Learn@House launches.' })}>Contact</Button>
          </div>
        </nav>
        <div className="hero-content page-width">
          <div className="hero-copy">
            <div className="rating"><span className="stars">{Array.from({length: 5}, (_, i) => <Star key={i} />)}</span><span>5.0 Star | 1.5K+ Reviews</span></div>
            <h1>Because Email<br />Is Complicated<br />Enough. <Flame className="headline-flame" aria-label="fire" /></h1>
            <p className="hero-description">Try Email House. Build your next classroom.<br />Follow your dreams & learn more. Start today<br />for free.</p>
            <div className="hero-actions">
              <Button variant="store" className="store-button" onClick={() => setModal({ title: 'Learn on the go', text: 'The Learn@House app is coming soon. In the meantime, explore our courses right here.' })}><Apple fill="currentColor" /><span className="store-copy"><small>Download on the</small><strong>App Store</strong></span></Button>
              <Button variant="heroGhost" className="watch-button" onClick={() => setModal({ title: 'Welcome to Learn@House', text: 'Great learning starts with a little curiosity. Meet your next challenge, learn with expert guidance, and build skills that stay with you. Our introduction video is coming soon.' })}><span className="play-circle"><Play /></span>Watch a Demo</Button>
            </div>
            <div className="hero-stats">{[['20M+', 'Learners around', 'the world'], ['120+', 'Experienced', 'instructors'], ['80+', 'Subjects &', 'courses']].map(([value, a, b]) => <div className="hero-stat" key={value}><strong>{value}</strong><span>{a}<br />{b}</span></div>)}</div>
          </div>
          <div className="portrait-area"><div className="portrait-halo" /><span className="spark spark-one">✦</span><span className="spark spark-two">✹</span><span className="spark spark-three">✦</span><img className="hero-portrait" src={instructor} alt="Your Learn@House instructor, smiling with arms folded" width={1024} height={1024} /></div>
        </div>
        <svg className="hero-curve" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true"><path className="curve-back" d="M0 0H1440V27Q1440 61 1395 61H940C940 98 500 98 500 61H45Q0 61 0 27Z" /><path className="curve-mid" d="M0 0H1440V17Q1440 50 1395 50H940C940 92 500 92 500 50H45Q0 50 0 17Z" /><path className="curve-front" d="M0 0H1440V7Q1440 39 1395 39H940C940 86 500 86 500 39H45Q0 39 0 7Z" /></svg>
        <a href="#services" className="curve-arrow" aria-label="Explore why to choose us"><ArrowDown size={18} /></a>
      </section>
      <section className="reasons-section page-width" id="services">
        <h2 className="section-heading">3 Reasons To Choose Us</h2>
        <div className="reasons-grid">{reasons.map(({title, icon: Icon, description, detail}) => <article className="reason-card" key={title}><div className="feature-icon"><Icon /></div><h3>{title}</h3><p>{description}</p><Button variant="link" className="read-more" onClick={() => setModal({title, text: detail})}>Read More <ArrowRight /></Button></article>)}</div>
      </section>
      <section className="steps-section page-width" id="about">
        <h2 className="section-heading">Follow These 3 Simple Steps to<br />Join Our Class!</h2>
        <div className="steps-layout">
          <div className="steps-list">{['Choose Best Course For You', 'Active Learning Engagement', 'Joining Course Made Easy'].map((title, i) => <div className="step-item" key={title}><div className="step-title"><Check /><span>{title}</span></div><a href="#courses" className="step-link"><span>{['Find your perfect fit', 'Learn something new', 'Start your journey'][i]}</span><ArrowRight /></a></div>)}</div>
          <div className="steps-portrait-frame"><div className="steps-portrait-inner"><img src={stepsInstructor} alt="An instructor showing three simple steps with his fingers" loading="lazy" width={1024} height={1024} /></div></div>
          <div className="learning-stats">{[['160+', 'Courses'], ['500+', 'Expert Instructors'], ['24 Lakh', 'Happy Students'], ['12K', 'Success Stories']].map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div>
        </div>
      </section>
      <section className="courses-section" id="courses"><div className="page-width"><h2 className="section-heading">Our Popular Courses for You</h2><div className="course-grid">{courses.map(({title, icon: Icon, description, lessons}) => <article className="course-card" key={title}><Icon className="course-icon" /><h3>{title}</h3><p>{description}</p><div className="course-bottom"><span>{lessons}</span><Button variant="heroGhost" size="icon" aria-label={`View ${title} course`} onClick={() => setModal({title, text: `${description} This course includes ${lessons}. Enrollment details are coming soon.`})}><ArrowRight /></Button></div></article>)}</div></div></section>
      <footer><div className="page-width footer-content"><a href="#home" className="brand">Learn@House</a><small>© 2026 Learn@House. All rights reserved.</small></div></footer>
      {modal && <div className="modal-backdrop" onClick={() => setModal(null)}><section role="dialog" aria-modal="true" aria-labelledby="modal-title" className="modal-panel" onClick={event => event.stopPropagation()}><Button variant="ghost" size="icon" className="modal-close" aria-label="Close dialog" autoFocus onClick={() => setModal(null)}><X /></Button><div className="feature-icon"><GraduationCap /></div><h2 id="modal-title">{modal.title}</h2><p>{modal.text}</p><Button variant="sunshine" className="mt-5" asChild><a href="#courses" onClick={() => setModal(null)}>Explore Courses <ArrowRight /></a></Button></section></div>}
    </main>
  );
}
