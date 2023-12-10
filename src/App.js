import './App.css';
import Header from './components/Header/Header';
import ShowDoctors from './components/ShowDoctors/ShowDoctors';
import BookAppontment from './components/BookAppontment/BookAppontment';

function App() {
  return (
      <div className='bigcontainer'>
      <Header></Header>
      <div className='container'>
        <ShowDoctors/>
        <BookAppontment/>
      </div>
      {/* footer */}
      </div>
  );
}

export default App;
