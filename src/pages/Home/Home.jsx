import Button from "../../components/Buttom/Button"
import Totem from "../../components/Totem/Totem";
import PasswordScreen from "../../components/PasswordScreen/PasswordScreen";

import logo from "../../assets/logo.png";
import './Home.css';

function Home() {
  return (
    <section className="home-section">
      <div className='home'>
        <PasswordScreen />
        <img src={logo} className='logo' alt="logo" />
        <div className="teste">
          <a href="/about" ><Totem /></a>
        </div>
        <div className="buttons">
          <Button styleType={"btn-exams"} content={"Senha Exames"} Hovercontent={"Pegue sua senha!"} />
          <Button styleType={"btn-general"} content={"Senha Geral"} Hovercontent={"Pegue sua senha!"} />
          <Button styleType={"btn-preferer"} content={"Senha Preferencial"} Hovercontent={"Pegue sua senha!"} />
        </div>
      </div>
    </section>
  )
}

export default Home