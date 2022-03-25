import './App.css';
import Layout from './Pages/Routes';
import {BrowserRouter as Router} from 'react-router-dom'
import AuthContextProvider from './context/FirebaseContext';
// import Menu from './Components/Data/Menu';


function App() {
  return (
    <Router>
    <div className="App">
      <AuthContextProvider>
    <Layout />
    </AuthContextProvider>
    </div> 
    </Router>
  );
}

export default App;






        
      
        
        