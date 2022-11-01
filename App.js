import logo from './logo.svg';
import './App.css';
import Associates from './components/Associates';
function App() {

  let info=[

    "Kshitij","Swamini","Vibhanshu","Rushikesh"
  ]
  return (
    <div className="App">
      <Associates arr={info}></Associates>
    
    </div>
  );
}

export default App;
