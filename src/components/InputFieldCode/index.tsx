import React from "react";
import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

interface ICodeInputField {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}
const CodeInputField = ({ code, setCode }: ICodeInputField) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCode(value.toUpperCase());
  };

  return (
    <InputMask
      mask="****-*****"
      maskChar={null}
      value={code}
      onChange={handleInputChange}
    >
      {(inputProps) => (
        <TextField
          {...inputProps}
          label="Código"
          variant="outlined"
          fullWidth
        />
      )}
    </InputMask>
  );
};

export default CodeInputField;
