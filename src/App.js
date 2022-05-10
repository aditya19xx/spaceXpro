
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Provider } from 'react-redux';
import store from './store/Store';

function App() {
  return (
    <div className="App container">
      <Provider store={store}>
      <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<Home/>} />
     </Routes>
     </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
