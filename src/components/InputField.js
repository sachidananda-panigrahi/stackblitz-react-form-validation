import React from 'react';

export function InputField(props) {
  const [value, setValue] = React.useState('');
  const [valid, setValid] = React.useState(false);
  const { type, validation, label, name, maxLength, minLength } = props;

  const checkFieldValid = (fv) =>
    fv && fv.length && fv.length >= minLength && fv.length <= maxLength;

  const handleOnChange = (event) => {
    event.preventDefault();
    const val = event.target.value;
    setValue(val);
    setValid(checkFieldValid(val));
  };

  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={label}
        value={value}
        onChange={(event) => {
          handleOnChange(event);
        }}
      />
      <p>{valid ? 'Field valid!' : 'Field is not valid!'}</p>
    </div>
  );
}
