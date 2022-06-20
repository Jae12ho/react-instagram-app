import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  // 글자 길이 잘라주는 함수
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n-1) + "..." : str
  }

  return (
    <div className="App">
      <Nav truncate={truncate}/>
      <Main truncate={truncate}/>
    </div>
  );
}

export default App;
