import { FormEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { signInAction } from '../../store/api-action';
import { selectAuthorizationStatus, selectIsCredentialsSending } from '../../store/user-process/selectors';
import { isEmailValid, isPasswordValid } from '../../utils';

function SignInForm(): JSX.Element {

  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isCredentialsSending = useAppSelector(selectIsCredentialsSending);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onFormSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    let isError = false;
    if (!isEmailValid(email)) {
      toast.error('Incorrect email');
      isError = true;
    }

    if (!isPasswordValid(password)) {
      toast.error('Incorrect password');
      isError = true;
    }

    if (isError) {
      return;
    }

    dispatch(signInAction({
      email: email,
      password: password,
    }));
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <form action="#" className="sign-in__form" onSubmit={onFormSubmitHandler}>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
            disabled={isCredentialsSending}
            required
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
            disabled={isCredentialsSending}
            required
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button
          className="sign-in__btn"
          type="submit"
          disabled={isCredentialsSending}
        >{isCredentialsSending ? 'Signing in...' : 'Sign in'}
        </button>
      </div>
    </form>
  );
}

export default SignInForm;
