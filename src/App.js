import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import Navbar from './NavBar';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/about' component={AboutPage}/>
            <Route path='/articles-list' component={ArticlesListPage}/>
            <Route path='/article-page/:name' component={ArticlePage}/>
            <Route path='*' component={NotFoundPage}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
