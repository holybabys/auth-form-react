import type { AuthFormInput } from '../components/AuthForm/AuthForm';

interface FakeAuthResponseType {
  status: number,
  errorMessage?: string | undefined,
  data: AuthFormInput
}

const users = [
  {
    id: 1,
    email: 'steve.jobs@example.com',
    password: 'password',
  },
];

const fakeApi = (data: AuthFormInput): FakeAuthResponseType => {
  const { login, password } = data;
  const filtered = users.filter((user) => user.email === login);
  const res: FakeAuthResponseType = {
    status: 403,
    errorMessage: `Пользователя ${login} не существует`,
    data,
  };

  if (filtered.length > 0) {
    if (filtered[0].password === password) {
      res.status = 202;
      res.errorMessage = undefined;
    } else {
      res.status = 403;
      res.errorMessage = 'Вы ввели неверный пароль';
    }
  }

  return res;
};

const fakeAuth = async (
  data: AuthFormInput,
  delay: number,
): Promise<FakeAuthResponseType> => new Promise((
  resolve,
) => {
  setTimeout(() => (resolve(fakeApi(data))), delay);
});

export default fakeAuth;
