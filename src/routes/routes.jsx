import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Admin from '../pages/admin/admin';
import Login from '../pages/login/login';
import Form from '../pages/form/form';
import FormFriday from '../pages/form/formFriday';
import { ModalTable } from '../pages/teste';

function RoutesNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/Friday' element={<FormFriday/>}/>
        <Route path="/admin/table" element={<Admin />} />
        <Route path="/teste/modal" element={<ModalTable/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesNavigation;