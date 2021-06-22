// modifique o import abaixo
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import ValidEmail from './ValidEmail';

// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  const { getByTestId, getByLabelText } = render(<App />);

  const EMAIL_USER = 'email@email.com';

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  expect(textEmail).toHaveStyle({ color: 'rgb(97, 218, 251)' });
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});