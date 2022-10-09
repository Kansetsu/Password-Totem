import './About.css';
import Team from '../../components/Team/Team';

function About() {
    return (
        <section className='about-section'>
            <iframe title='github' src="https://kansetsu.github.io/Password-Totem/" width="100%" height="950" frameborder="0"></iframe>
            <Team />
        </section>
    )
}

export default About