import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './component/nav'
import Home from './component/home'
import Error from './component/Error';
import Cartcontainer from './component/Cart';
import data from "./component/data";
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
const initialstore=
{
  cart:data,
  total:10,
  amount:0
};
const store=createStore(reducer,initialstore)
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className='content'>
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<div><h2>About Page</h2></div>}></Route>
        <Route path='/Product' element={<Cartcontainer/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>
      </div>
    </div>
  );
}

export default App;
