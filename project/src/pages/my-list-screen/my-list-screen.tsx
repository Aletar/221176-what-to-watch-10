import Logo from '../../components/logo/logo';
import Copyright from '../../components/copyright/copyright';
import FilmCardList from '../../components/film-card-list/film-card-list';
import { useAppSelector } from '../../hooks';
import Header from '../../components/header/header';
import { HeaderSpec } from '../../const';

function MyListScreen(): JSX.Element {

  const films = useAppSelector((state) => state.films);

  return (
    <div className="user-page">
      <Header spec={HeaderSpec.MyList} favoriteCount={9}/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmCardList films={films} />
      </section>

      <footer className="page-footer">
        <Logo light />

        <Copyright />
      </footer>
    </div>
  );
}

export default MyListScreen;
