import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Page/Home';
import CollectionPage from './Page/Collection';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
