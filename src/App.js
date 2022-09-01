import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NamedList from './Components/NamedList';
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import FragmentDemo from './Components/FragmentDemo';
import PureComp from './Components/PureComp';
import RefsDemo from './Components/RefsDemo';

function App() {
  return (
    <div className="App">
      {/* <Greet name='Alice' heroName='jelly' /> */}
      {/* <Welcome name='poo' heroName='poo'/> */}
      <RefsDemo />
    </div>
  );
}
//UPTO: tutorial 28 https://www.youtube.com/watch?v=FXa9mMTKOu8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=28
export default App;
