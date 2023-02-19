import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ItemDetail from './pages/ItemDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemAll from './pages/ItemAll';
import Cart from './pages/Cart';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Welcome from './pages/Welcome';
import ScrollToTop from './shares/ScrollToTop';
import { DispatchType } from './store/store';
import { useDispatch } from 'react-redux';
import { getAllProductApi } from './store/productSlice';
import { useEffect } from 'react';
import SignUp from './pages/SignUp';
import SignUpSuccess from './pages/SignUpSuccess';
import MyPage from './pages/MyPage';

function App() {
  const dispatch: DispatchType = useDispatch();
  const getAllProductByApi = () => {
    dispatch(getAllProductApi());
  };

  useEffect(() => {
    getAllProductByApi();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/detail/:id" element={<ItemDetail />} />
          <Route path="/itemall" element={<ItemAll />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/signupsuccess" element={<SignUpSuccess />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
