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
import FocusInput from './Components/FocusInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundry from './Components/ErrorBoundry';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/UserContext';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';

function App() {
  return (
    <div className="App">
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={ (isLoggedIn) => isLoggedIn ? 'Alice' : 'Guest'} /> */}
      {/* <Counter render={(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} /> )} /> */}
      {/* <Counter render={(count, incrementCount) => (<HoverCounterTwo count={count} incrementCount={ incrementCount} /> )} /> */}
      {/* <UserProvider value="Alice">
        <ComponentC />
      </UserProvider> */}
      <PostForm/>

    </div>
  );
}
//UPTO: FINISHED!!! Time to learn about Hooks next.
export default App;
