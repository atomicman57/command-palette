import React from "react";

type InputProps = {
  placeholder: string;
  onChange: (userInput: string) => void;
};

const Input: React.FC<InputProps> = ({ placeholder, onChange, ...rest }) => {
  return <input placeholder={placeholder} onChange={(e) => onChange(e.target.value)} {...rest} />;
};

export default Input;
