type InputProps = {
  id: string;
  text: string;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({id, text, value, onChangeHandler}: InputProps) => {
  return <>
    <label htmlFor={id}>{text}</label>
    <input type="text" id={id} value={value} onChange={onChangeHandler} />
  </>;
};

export default Input;
