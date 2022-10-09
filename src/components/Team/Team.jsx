import TeamCard from "../TeamCard/TeamCard";
import vinicius from '../../assets/vinícius-profile.jpg';
import anderson from '../../assets/anderson-profile.png';
import bruno from '../../assets/bruno-profile.jpeg';
import cassio from '../../assets/cassio-profile.png';
import joao from '../../assets/joão-profile.png';
import renan from '../../assets/renan-profile.png';
import kassia from '../../assets/kássia-profile.png';
import logo from '../../assets/2.png';
import './Team.css';

function Team() {
    return (
        <section id="team">
            <div className="team-cards">
                <a href="https://github.com/KassiaDev" target="_blank" rel="noopener noreferrer">
                    <TeamCard img={kassia} alt={"kassia"} title={"Kássia Oliveira"} />
                </a>

                <a href="https://github.com/brunobrilhante" target="_blank" rel="noopener noreferrer">
                    <TeamCard img={bruno} alt={"bruno"} title={"Bruno Brilhante"} />
                </a>

                <a href="https://github.com/Joao-gdhora" target="_blank" rel="noopener noreferrer">
                    <TeamCard img={joao} alt={"joao"} title={"João Gabriel"} />
                </a>

                <a href="https://github.com/RtorresDefault" target="_blank" rel="noopener noreferrer">
                    <TeamCard img={renan} alt={"renan"} title={"Renan Guimarães"} />
                </a>

                <a href="https://github.com/andersonf0018" target="_blank" rel="noopener noreferrer">
                    <TeamCard img={anderson} alt={"anderson"} title={"Anderson Ferreira"} />
                </a>

                <a href="https://github.com/Kansetsu" target="_blank" rel="noopener noreferrer">
                    <TeamCard img={vinicius} alt={"vinicius"} title={"Vinícius Andrade"} />
                </a>
                
                <a href="https://github.com/CassDs" target="_blank" rel="noopener noreferrer">
                    <TeamCard img={cassio} alt={"cassio"} title={"Cássio Menezes"} />
                </a>
                <a href="/" rel="noopener noreferrer">
                    <TeamCard img={logo} alt={"cassio"} title={"Voltar para o início"} />
                </a>

            </div>
        </section>)
}

export default Team