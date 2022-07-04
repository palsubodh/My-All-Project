import { useRef } from "react";
import styles from "./Button.module.css";

function Button({ disabled,children }) {
  const ref=useRef()

  const  startVideo=()=>{
    ref.current.play()
    
  }
  return (
    <button onClick={()=>startVideo()} disabled={disabled} className={styles.button} data-testid="button">
      {children} 
    </button>
  );
}

export default Button;
