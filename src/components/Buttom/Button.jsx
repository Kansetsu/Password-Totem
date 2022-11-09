import './Button.css';

function Button(props) {
  return (
    <button onClick={props.onClick} className={props.styleType}><span>{props.Hovercontent}</span><span>{props.content}</span></button>
  )
}

export default Button