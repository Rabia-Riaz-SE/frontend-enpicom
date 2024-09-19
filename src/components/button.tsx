import IButtonProps from "../interface/IButton";
import styles from "./css/Button.module.css"; // Import the CSS module

const Button: React.FC<IButtonProps> = (buttonProps: IButtonProps) => {
  const { text, onClick } = buttonProps;

  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
