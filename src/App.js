import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import AppBar from './components/AppBar';
import authOperations from './components/redux/auth/auth-operations';
import { Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container';
import ContactsView from './views/ContactsView';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Container>
        <AppBar />
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Container>
    </>
  );
};
export default App;
