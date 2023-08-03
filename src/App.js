import React from 'react';
import './style.css';

import { FormControl } from './components/FormControl';

const FormFields = [
  {
    name: 'email',
    type: 'text',
    validation: '',
    minLength: 5,
    maxLength: 10,
    label: 'Enter Email',
  },
  {
    name: 'phone',
    type: 'number',
    validation: '',
    minLength: 10,
    maxLength: 10,
    label: 'Enter Phone',
  },
];

export default function App() {
  return <FormControl fields={FormFields} />;
}
