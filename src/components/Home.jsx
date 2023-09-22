import React, { useMemo } from 'react';
import { MDBRow, MDBRadio, MDBSpinner, MDBCol, MDBFile, MDBInput, MDBCheckbox, MDBBtn, MDBSwitch, MDBInputGroup, MDBInputGroupElement, MDBInputGroupText } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import './home.scss';

const Home = () => {
  return <div>
    <span>Home Page Working!</span>
    <form className="form">
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Last name' />
        </MDBCol>
      </MDBRow>

      <div className='d-flex justify-content-between align-items-center'>
        <div className="radio-btns">
          <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Male' inline />
          <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Female' inline />
        </div>
        <MDBSwitch id='flexSwitchCheckDefault' label='Default switch checkbox input' />

        <div>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Default checkbox' />
          <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Checked checkbox' defaultChecked />
        </div>
      </div>

      <div className='mb-4'>
        <Form.Select aria-label="Default select example">
          <option>Country</option>
          <option value="1">Pakistan</option>
          <option value="2">UAE</option>
          <option value="3">Qatar</option>
        </Form.Select>
      </div>

      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' />
      <MDBInput wrapperClass='mb-4' id='form6Example4' label='CNIC' />
      <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
      <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />
      <MDBInput wrapperClass='mb-4' textarea id='form6Example7' rows={4} label='Additional information' />
      <MDBCheckbox wrapperClass='d-flex justify-content-start mb-4' label='Create an account?' defaultChecked />
      <div className='mb-4'>
        <MDBFile label='Default file input example' id='customFile' />
      </div>

      {/* Spinner */}
      {/* <MDBSpinner role='status'> <span className='visually-hidden'>Loading...</span> </MDBSpinner>  */}

      <MDBBtn className='mb-4 btn-submit' type='submit'> Save </MDBBtn>
    </form>
  </div>;
};

export default Home;