import {Link} from 'react-router-dom';
import Copyright from '../../components/copyright/copyright';
import Logo from '../../components/logo/logo';

function SignInScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo light={false} />
      </header>

      <div className="sign-in user-page__content">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>

      <footer className="page-footer">
        <Logo light />

        <Copyright />
      </footer>
    </div>
  );
}

export default SignInScreen;
