import Button from "../../components/Buttom/Button"
import Totem from "../../components/Totem/Totem";
import PasswordScreen from "../../components/PasswordScreen/PasswordScreen";
import logo from "../../assets/logo.png";
import './Home.css';
import api from "../../services/api";

function Home() {

  const autoIncrement = () => +1



  const registerGeneralNewPassword = () => {
    api.post('http://localhost:8000/ticket/registerGeneralPassword', { numberOfPassword: autoIncrement() }).then(() => {
      return console.log('Senha cadastrada')
    }).catch(err => console.log('Ocorreu um erro', err))
  }
  const registerExamsNewPassword = () => {
    api.post('http://localhost:8000/ticket/registerExamsPassword', { numberOfPassword: autoIncrement() }).then(() => {
      return console.log('Senha cadastrada')
    }).catch(err => console.log('Ocorreu um erro', err))
  }
  const registerPriorityNewPassword = () => {
    api.post('http://localhost:8000/ticket/registerPriorityPassword', { numberOfPassword: autoIncrement() }).then(() => {
      return console.log('Senha cadastrada')
    }).catch(err => console.log('Ocorreu um erro', err))
  }

  return (
    <section className="home-section">
      <div className='home'>
        <PasswordScreen />
        <img src={logo} className='logo' alt="logo" />
        <div className="teste">
          <a href="/about" ><Totem /></a>
        </div>
        <div className="buttons">
          <Button styleType={"btn-exams"} content={"Senha Exames"} Hovercontent={"Pegue sua senha!"} onClick={registerExamsNewPassword} />
          <Button styleType={"btn-general"} content={"Senha Geral"} Hovercontent={"Pegue sua senha!"} onClick={registerGeneralNewPassword} />
          <Button styleType={"btn-preferer"} content={"Senha Preferencial"} Hovercontent={"Pegue sua senha!"} onClick={registerPriorityNewPassword} />
        </div>
      </div>
    </section>
  )
}

export default Home