import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailPage from './pages/Detail';
import SearchResultsPage from './pages/SearchResults';
import './styles/app.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/items']} component={SearchResultsPage} />
        <Route exact path="/items/:id" component={DetailPage} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
