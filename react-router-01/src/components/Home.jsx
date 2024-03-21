import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
const Home = () => {
  const navigation = useNavigation();
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      {navigation.state === 'loading' ? (
        <p className="text-4xl">Data Loding.........</p>
      ) : (
        <Outlet />
      )}

      <h3 style={{ textAlign: 'center' }}>This is Footer section</h3>
    </div>
  );
};

export default Home;
