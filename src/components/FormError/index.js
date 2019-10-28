import React from 'react';

function FormError ({ errors }) {
  const messages = errors.map(err => (
    <li>{err}</li>
  ))
  return (
    <ul>
      {messages}
    </ul>
  )
}

export default FormError;