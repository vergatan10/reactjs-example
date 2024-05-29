import { forwardRef } from "react";
import Label from "./Label";
import Input from "./Input";

const InputForm = forwardRef((props, ref) => {
  const { label, type, placeholder, name, value } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name} text={label} />
      <Input type={type} name={name} placeholder={placeholder} ref={ref} value={value} />
    </div>
  );
});

export default InputForm;
