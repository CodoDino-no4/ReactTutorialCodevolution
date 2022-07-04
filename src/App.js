import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';

function App() {
  return (
    <div className="App">
      {/* <Greet name='Alice' heroName='jelly' />
      <Welcome name='poo' heroName='poo'/> */}
      <Counter />
    </div>
  );
}

export default App;
