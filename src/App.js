import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SingupPage';
import LocationsPage from './pages/LocationsPage';
import AddLocationModal from './components/modals/AddLocationModal';

function App() {
  return (
    <div className="App">
      <AddLocationModal />
      <BrowserRouter>
        <Route path="/" exact>
          <Redirect to="/signin" />
        </Route>
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/locations" component={LocationsPage} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
