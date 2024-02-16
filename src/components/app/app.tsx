import MainScreen from '../../pages/main-screen/mainScreen';

type AppScreenProps = {
  placesCount: number;
}

function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen placesCount={placesCount} />
  );
}

export default App;
