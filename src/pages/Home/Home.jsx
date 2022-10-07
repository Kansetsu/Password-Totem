import Button from "../../components/Buttom/Button"
import Totem from "../../components/Totem/Totem";
import PasswordScreen from "../../components/PasswordScreen/PasswordScreen";

import logo from "../../assets/2-removebg-preview.png";
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <PasswordScreen/>
      <img src={logo} className='logo' alt="logo"/>
      <Totem />
      <div className="buttons">
        <Button styleType={"btn-exams"} content={"Senha Exames"} Hovercontent={"Pegue sua senha!"} />
        <Button styleType={"btn-general"} content={"Senha Geral"} Hovercontent={"Pegue sua senha!"} />
        <Button styleType={"btn-preferer"} content={"Senha Preferencial"} Hovercontent={"Pegue sua senha!"} />
      </div>
    </div>
  )
}

export default Home