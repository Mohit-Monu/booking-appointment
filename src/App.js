import './App.css';
import Header from './components/Header/Header';
import ShowDoctors from './components/ShowDoctors/ShowDoctors';

function App() {
  return (
      <div className='bigcontainer'>
      <Header></Header>
      <div className='container'>
        <ShowDoctors/>
      </div>
      {/* footer */}
      </div>
  );
}

export default App;
