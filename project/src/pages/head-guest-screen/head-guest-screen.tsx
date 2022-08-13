import Header from '../../components/header/header';

function HeadGuestScreen(): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-header.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

    </section>
  );
}

export default HeadGuestScreen;
