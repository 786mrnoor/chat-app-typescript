import { Route, Routes } from 'react-router';

import PublicLayout from './layout/PublicLayout';
import { RegisterPage } from './pages/register';

const routes = (
  <Routes>
    <Route element={<PublicLayout />}>
      <Route path="/register" element={<RegisterPage />} />
    </Route>
  </Routes>
);
export default routes;
