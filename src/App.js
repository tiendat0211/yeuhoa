import Box from './components/Box';
import Heart from './components/Heart';
import MP3 from './components/MP3';
import Typo from './components/Typo'

let linkMP3 = '/anh-yeu-em-cuc.mp3';

function App() {
  return (
    <>
      <MP3 link={linkMP3} />
      <Typo />

      <div className="container">
        <Box />
        <Heart width={'500'} height={'500'} />
      </div>
    </>
  );
}

export default App;
