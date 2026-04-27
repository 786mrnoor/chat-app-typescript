import { Route, Routes } from 'react-router';

import PublicLayout from './layout/PublicLayout';
import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';

const routes = (
  <Routes>
    <Route element={<PublicLayout />}>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Route>
  </Routes>
);
export default routes;
