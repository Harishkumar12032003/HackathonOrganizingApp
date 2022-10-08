import logo from './logo.svg';
import './App.css';
import { HomePage } from './containers/HomePage';
/*import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';*/
import { BrowserRouter, BrowserRouter as Router,Redirect, Switch ,Route,Link} from 'react-router-dom';
import { Create } from './containers/CreateChallenge';
import { Detail } from './containers/DetailPage';
import { Edit } from './components/EditPage';


function App() {
  return (
    <div className="App">
      <Router >
      <BrowserRouter forceRefresh={true} >
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/create" exact  component={Create}/>
          <Route path="/details" exact component={Detail}/>
          <Route path="/edit" exact component={Edit}/>
        </Switch>
      </BrowserRouter>
      </Router>
     
    </div>
  );
}

export default App;
