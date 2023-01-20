
import React, { useContext, useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { UserContext } from "./UserProvider";


function Login() {
  const {username, login} = useContext(UserContext);
  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  function handleSignin(event) {
    event.preventDefault();
    const {email} = event.target
    login(email.value)
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column mb-6" style={{width: "500px"}}>

    <h3 className='d-flex justify-content-center mb-5'>Login</h3>

    <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
      <MDBTabsItem>
        <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
          Login
        </MDBTabsLink>
      </MDBTabsItem>
      <MDBTabsItem>
        <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
          Register
        </MDBTabsLink>
      </MDBTabsItem>
    </MDBTabs>

    <MDBTabsContent>

      {/* sign in */}
      <MDBTabsPane show={justifyActive === 'tab1'}>
      <form onSubmit={handleSignin}>
        <MDBInput required wrapperClass='mb-4' name="email" label='Email' id='form1' type='email' />
        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

        <div className="d-flex justify-content-between mx-4 mb-4">
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn type="submit" className="mb-4 w-100" >Sign in</MDBBtn>
        <p className="text-center">Not a member? <a href="#!">Register</a></p>        
      </form>

      </MDBTabsPane>


      <MDBTabsPane show={justifyActive === 'tab2'}>

        <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
        <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

        <div className='d-flex justify-content-center mb-4'>
          <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
        </div>

        <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

      </MDBTabsPane>

    </MDBTabsContent>

  </MDBContainer>
  )  

}


export default Login;