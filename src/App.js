import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectUser } from './stores/slices/userSlice';
import MainRouter from './routers/MainRouter';

function App() {
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);


  return (
    <>
      <MainRouter />
    </>
  );
}

export default App;
