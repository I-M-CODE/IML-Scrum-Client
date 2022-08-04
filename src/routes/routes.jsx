import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Admin from '../pages/admin/admin';
import Login from '../pages/login/login';
import Form from '../pages/form/form';
import PJ from '../pages/form/PJ';
import PJteste from '../pages/form/PJteste';
import FormFriday from '../pages/form/formFriday';
import { TableReformed } from '../components/TableReformed';

function RoutesNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/PJ' element={<PJteste/>}/>
        <Route path='/Friday' element={<FormFriday/>}/>
        <Route path="/admin/table" element={<Admin />} />
        {/* <Route path="/teste" element={<PJteste/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesNavigation;