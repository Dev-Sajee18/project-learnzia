// import "../Admin1/admin.css"
import {  Route, Routes } from 'react-router-dom';

import Navbar from './Header';


import UserList from "./Userlist";
import TutorList  from './Shoplist';
import CandidateList from './candidatelist';
import ImageUpload from './Pdfupload';
import ImageAdd from './Tutoradd';
import Bookadd from './Bookadd';
import Zipadd from './zip/Zipadd';
import PaymentList from './payment';

function Admin() {
  return (
  <div className="Admin">
      <Navbar />
      <Routes> 
        <Route index path="/userlist" element={<UserList/>} />
        <Route path="/tutorlist" element={<TutorList />} />
        <Route path="/candidate" element={<CandidateList/>} />
        <Route path="/upload" element={<ImageUpload />} />
        <Route path="/uploadtutor" element={<ImageAdd />} />
        <Route path="/uploadbook" element={<Bookadd />} />
        <Route path="/uploadzip" element={<Zipadd />} />
        <Route path="/payments" element={<PaymentList/>} />

      </Routes>
  </div>
 
  );
}

export default Admin;
