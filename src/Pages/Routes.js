import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Page404 from '../Pages/Page404';

const Routes = () => (
    <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path={["/Home", "/Index", "/Nivers"]} component={Home}/>
          <Route path={["/Register", "/Edit/:id"]} component={Register}/>
          <Route path="/*" component={Page404}/>
        </Switch>
    </Router>
)

export default Routes;