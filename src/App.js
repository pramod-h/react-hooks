import Header from './component/Header';
import HomePageContainer from './route/HomePage';
import BooksContainer from './route/Books/Books.container';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import STORE from './store';
import { Provider } from 'react-redux'

import './App.css';

function App() {
  return (
    <Provider store={STORE} >
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePageContainer />}>
          </Route>
          <Route path="/books" element={<BooksContainer />}>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
