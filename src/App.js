import Routes from "./Pages/Routes";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import  'animate.css'

function App() {
  return (
    <div className="App">
      <ReactNotification/>
      <Routes/>
    </div>
  );
}

export default App;
