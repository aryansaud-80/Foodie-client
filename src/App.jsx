import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
    <TopBar />
      <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<h1>About</h1>} />
      <Route path='/contact' element={<h1>Contact</h1>} />
      <Route path='/menu' element={<h1>Menu</h1>} />
      <Route path='/menu/:category' element={<h1>Category</h1>} />
      <Route path='/pages' element={<h1>Pages</h1>} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
    </>
  );
};
export default App;
