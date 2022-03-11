import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormComponent } from './Components/FormComponent';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { Profile } from './Components/Profile';
import { Link, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
function App() {
  return (
    // <div className='d-flex w-5 vh-100 justify-content-center align-items-center'>
    // <Card>
    //     <CardHeader className='text-center' >
    //       Sign Up
    //     </CardHeader>
    //     <CardBody>
    //       <FormComponent/>
    //     </CardBody>
    //   </Card>
    //   </div>

    
         <Router >

        <Routes>
          <Route path="/" element={<FormComponent />} />
          <Route path="profile" element={<Profile />} />
        </Routes>

         </Router>



        
  );
}

export default App;