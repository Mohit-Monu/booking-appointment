import './App.css';
import Header from './components/Header/Header';
import ShowDoctors from './components/ShowDoctors/ShowDoctors';

function App() {
  return (
      <>
      <Header></Header>
      <div className='container'>
        <ShowDoctors/>
      </div>
      {/* footer */}
      </>
  );
}

export default App;
