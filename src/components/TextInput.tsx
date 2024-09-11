import ITextFieldProps from '../interface/ITextField';
import styles from './css/TextInput.module.css'; // Import the CSS module

const TextInput: React.FC<ITextFieldProps> = (textFieldProps: ITextFieldProps) => {
  const { name, value, onChange, placeholder } = textFieldProps;

  return (
    <div className={styles.inputContainer}>
      <div className={styles.row}>
        <p className={styles.label}>{name}</p>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.inputField}
        />
      </div>
    </div>
  );
};

export default TextInput;