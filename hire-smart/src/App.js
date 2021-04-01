import './App.css';
import Error from './Components/Pages/Error/Error';
import {BrowserRouter, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route component={Error} />
      </BrowserRouter>
    </div>
  );
}

export default App;
