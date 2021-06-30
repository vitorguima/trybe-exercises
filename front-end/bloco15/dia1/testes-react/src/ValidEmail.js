import React from 'react';
import './App.css';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      { verifyEmail(email) ? <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2> : ''}
      <h3>{(verifyEmail(email) ? 'Email Valido' : 'Email Inválido')}</h3>
    </div>
  );
};

export default ValidEmail;