import React, {useState} from 'react'
import axios from "axios"
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import history from './history';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import Swal from 'sweetalert2'


import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

class Login extends React.Component{
  

  
  
  /* constructor(props){
    super(props);
    this.state ={
      user:'',
      pass:''
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    
  } */
state = {
  
    user:'',
    pass:''
  
};

  
  handleEmail = (text) => {
   
    this.setState({user:text.target.value});
    
    

  };

  handlePassword = (text) => {
    
    this.setState({pass:text.target.value});
   
  };

  attemptLogIn = () => {
    axios({
      url:'http://test.elecsis.co/',
      method:'post', 
      data: JSON.stringify(this.state), 
      headers: {
        'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'

      }
    }).then(response => {
      
      return response.data
    }).then(data => {
     
      console.log(data)
      if(data){
        this.props.history.push("/TheLayout");
      }else{
        swal("Error", "Credenciales incorrectas!", "error");
      }
      
      
    }).catch(err => {     
      console.log(err)
    })
    /* return axios.post('http://test.elecsis.co/', JSON.stringify(this.state)).then(res => res.data); */
    /* console.log(this.state); */
    

    
   /*  axios.post('http://test.elecsis.co/', JSON.stringify(""),
  {headers: {
    'Content-Type': 'application/json'
  }}).then(response => {
    //Comprobar si todo va bien
    // if(response.status !== 200) {
    //   throw Error("El estado de la conexion no es 200")
    // }
    return response.data
  }).then(data => {
    //Procesar los datos.
    console.log(data)
  }).catch(err => {     
    console.log(err)
  }) */

    /* history.push({to: '/TheLayout'}); */
   
};

  render(){
    return (

    
      <div className="c-app c-default-layout flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="8">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={(e)=>e.preventDefault()}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput onKeyUp={(text) =>{this.handleEmail(text)}} type="text" name="username" placeholder="Username" autoComplete="username" />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput onKeyUp={(text) =>{this.handlePassword(text)}} type="password" name="password" placeholder="Password" autoComplete="current-password" />
                      </CInputGroup>
                      <CRow>
                        <CCol xs="6">
                          <CButton color="primary" type="button" className="px-4" onClick={this.attemptLogIn}>Login</CButton>
                        </CCol>
                        <CCol xs="6" className="text-right">
                          
                          <CButton color="link" className="px-0">Forgot password?</CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/TheLayout">
                        <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    )

  } 
  
  

}
 /* const Login = ({user, guardarUser}) => {

  // Send a POST request
axios({
  method: 'post',
  url: 'http://test.elecsis.co/',
  data: {
    user: 'admin',
    pass: 'admin'
  }
}); 

constructor(){
  super()
  this.state ={
    user:'',
    pass:''
  }
}
handleEmail(text){
  this.setState({user:text.target.value})
}

return (

    
  <div className="c-app c-default-layout flex-row align-items-center">
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput onChange={(text) =>{this.handleEmail()}} type="text" name="user" placeholder="Username" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" name="pass" autoComplete="current-password" />
                  </CInputGroup>
                  <CRow>
                    <CCol xs="6">
                      <CButton color="primary" className="px-4">Login</CButton>
                    </CCol>
                    <CCol xs="6" className="text-right">
                      
                      <CButton color="link" className="px-0">Forgot password?</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
              <CCardBody className="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.</p>
                  <Link to="/TheLayout">
                    <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                  </Link>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
)
 
} 
 */

export default Login
