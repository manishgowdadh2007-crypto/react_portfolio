import './AboutPages';
import GitHubStats from '../components/GitHubStats/GitHubStats';
import SkillCard from '../components/SkillCard/SkillCard';
import AboutSection from '../components/AboutSection/AboutSection';
import  SKILLS  from '../components/data/Skills'; 
function About() {
  return (
    <div className='about-page container'>
      <AboutSection />

      <section id='SKILLS' className='skills-section' style={{ marginTop: '40px' }}>
        <h2>SKILLS</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {SKILLS.map(s => <SkillCard key={s.name} name={s.name} level={s.level} icon={s.icon} />)}
        </div>
      </section>

      <section id='GITHUB' style={{ marginTop: '40px' }}>
        <h2>GITHUB</h2>
        <GitHubStats username='manishgowdadh2007-crypto' />
        <a href="https://github.com/manishgowdadh/smart-study" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </section>
    </div>
  );
}
export default About;