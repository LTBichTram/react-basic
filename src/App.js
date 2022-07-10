import { useSelector } from 'react-redux'
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import './App.css';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <div className="App">
      <Header/>
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}
      <Counter/>
    </div>
  );
}

export default App;
