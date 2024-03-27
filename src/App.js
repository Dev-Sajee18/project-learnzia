import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
// import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
// import Protectedroute from './ProtectedRoute';
import { useEffect, useState } from 'react';
import Tutor from './components/Tutor';
import { TutorForm } from './components/TutorForm/TutorForm';
// import { App1 } from './App1';
// import Adminmain from './components/admin/Admin';
import Admin from './components/Admin1/admindash';
import Tutordetails from './components/TutorDetails';
import Service from './components/Pdf';
import Pdf from './components/Pdf';
import Tutoradd from './components/Tutoradd';
import { CandidateForm } from './components/candidate/CandidateForm';
import Boxes from './components/Material details/Materialdetail';
import Payment from './components/payment/payment';
import Zipdownload from './components/downloadZip/Downlodzip';
import ExplorePage from './components/Explorepage';
// import AuthContext from './components/AuthContext';
// import Resourcepdf from './components/resource/resourcepdffront';
// import AdminApp from './AdminApp';
// import Axios from 'axios'


function App() {

  // const [, setData]=useState();

  // const getData=async()=>{
  //   const response=await Axios.get("http://localhost:5000/getData");
  //   setData(response.data);
  // }

  // useEffect(()=>{
  //   getData()
  // },[]);

  // Check If User is Logged In
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <>
      < Navbar auth={auth1}/>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/about' element={< About />} />
        <Route path='/service' element={< Services />} />
        <Route path='/tutor' element={< Tutor />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/login' element={< Login />} auth={auth1}/>
        <Route path='/register' element={< Register />} auth={auth1}/>
        {/* <Route path='/dashboard' element={< Dashboard />} auth={auth}/> */}
        <Route path='/logout' element={< Logout />} auth={auth}/>
        <Route path='/tutorform' element={< TutorForm />} auth={auth}/>
        {/* <Route path='/file' element={< App1 />} auth={auth}/> */}
        {/* <Route path='/adminapp' element={< AdminApp />} auth={auth}/> */}
        <Route path='/tutordetails' element={< Tutordetails />} auth={auth}/>
        <Route path='/pdf' element={< Pdf />} auth={auth}/>
        <Route path='/tutoradded' element={< Tutoradd/>} auth={auth}/>
        <Route path='/candidateform' element={< CandidateForm />} auth={auth}/>
        <Route path='/box' element={< Boxes />} auth={auth}/>
        {/* <Route path='/payment' element={< Payment/>} auth={auth}/> */}
        <Route path='/zip' element={< Zipdownload />} auth={auth}/>
        <Route path='/explore' element={< ExplorePage/>} auth={auth}/>
        {/* <Route path='/authcontext' element={< AuthContext/>} auth={auth}/> */}








      </Routes>
      <Routes>
      <Route path='/admin*' element={< Admin/>} />

      {/* <Route path='/admin/*' element={< Adminmain/>}/> */}

      </Routes>
      {/* <Footer /> */}
      {/* <Resourcepdf/> */}

    </>
  );
}

export default App;




