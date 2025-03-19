import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Page/Home';
import CollectionPage from './Page/Collection';
import Shop from './Page/Shop';
import Layout from './Layout';
import Inventory from './Page/Inventory';
import useSetDailyDiscountPackage from './Page/Shop/useSetDailyDiscountPackage';

const AppRoutes = () => {
  useSetDailyDiscountPackage();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/collection' element={<CollectionPage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/inventory' element={<Inventory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
