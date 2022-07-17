import MainScreen from '../../pages/main-screen/main-screen';
import { FilmCardProps } from '../../types/types';

function App({title, genre, year}: FilmCardProps): JSX.Element {
  return (
    <MainScreen title={title} genre={genre} year={year}/>
  );
}

export default App;
