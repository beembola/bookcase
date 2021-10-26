import AddButton from './component/AddButton';
 import Header from './components/Header';
 import Booklist from './component/Booklist';
 import { BrowserRouter, Route } from 'react-router-dom'

function App() {
return (
  <BrowserRouter>
<Route exact path="/" render={() => (
<>
<Header />
<h2>Welcome to the Bookcase App</h2>
<Booklist />
</>
)} />
//Add a route to Bookcase here...
<Route exact path="/bookcase" render={() => (
  <>
<Header />
<h2>Here is our bookcase</h2>
<Booklist />
</>
)} />
  </BrowserRouter>
)

  
}

export default App;
