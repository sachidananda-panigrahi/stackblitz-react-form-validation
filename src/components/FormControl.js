import React from 'react';
import { InputField } from './InputField';

export function FormControl(props) {
  const { fields } = props;
  const [valid, setValid] = React.useState(false);

  const validateForm = () => {
    
  }

  return (
    <form>
      {fields.map((field) => (
        <InputField {...field} />
      ))}
      <button type="button" disabled={!valid}>
        Submit
      </button>
    </form>
  );
}
