import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { MDBRow, MDBRadio, MDBSpinner, MDBCol, MDBFile, MDBInput, MDBCheckbox, MDBBtn, MDBSwitch, MDBInputGroup, MDBInputGroupElement, MDBInputGroupText } from 'mdb-react-ui-kit';
import DetailPage from './detail-page';
import './home-page.scss';

const HomePage = () => {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    gender: { male: false, female: false },
    stack: { angular: false, react: false },
    nationality: false,
    country: "",
    cnic: "",
    email: "",
    phone: "",
    married: false,
    file: ""
  });

  const onFieldValueChange = (event) => {
    console.log('event.target ', event.target);
    const name: string = event.target.name;
    const id: string = event.target.id;
    const value: string = event.target.value;
    const checkedStatus: boolean = event.target.checked;
    if (id === 'nationality' || id === 'married') {
      setForm({ ...form, [name]: checkedStatus });
    } else if (id === 'radio') {
      const gender = { male: (value === 'male'), female: (value === 'female') }
      setForm({ ...form, gender: gender });
    } else if (id === 'checkbox') {
      const stack = { angular: (name === 'angular' || form.stack.angular), react: (name === 'react' || form.stack.react) }
      setForm({ ...form, stack: stack });
    } else {
      setForm({ ...form, [name]: value });
    }

  }

  const onFormSubmit = (e) => {
    console.log('this.form :>> ', form);
    navigate('/detail', {state: { form: form }});
  }

  return <div>
    <span>Home Page Working!</span>
    <form className="form">
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='input1' name="firstName" label='First Name' value={form.firstName} onChange={onFieldValueChange} />
        </MDBCol>
        <MDBCol>
          <MDBInput id='input2' name="lastName" label='Last Name' value={form.lastName} onChange={onFieldValueChange} />
        </MDBCol>
      </MDBRow>

      <div className='d-flex justify-content-between align-items-center'>
        <div className="radio-btns">
          <MDBRadio name='gender' id='radio' value='male' label='Male' checked={form.gender.male} onChange={onFieldValueChange} inline />
          <MDBRadio name='gender' id='radio' value='female' label='Female' checked={form.gender.female} onChange={onFieldValueChange} inline />
        </div>
        <MDBSwitch id='nationality' name="nationality" label='Nationality' value={form.nationality} onChange={onFieldValueChange} />

        <div>
          <MDBCheckbox name='angular' id='checkbox' label='Angular' value={form.stack.angular} onChange={onFieldValueChange} />
          <MDBCheckbox name='react' id='checkbox' label='React' value={form.stack.react} onChange={onFieldValueChange} />
        </div>
      </div>

      <div className='mb-4'>
        <Form.Select name="country" value={form.country} onChange={onFieldValueChange}>
          <option>Country</option>
          <option value="1">Pakistan</option>
          <option value="2">UAE</option>
          <option value="3">Qatar</option>
        </Form.Select>
      </div>

      <MDBInput wrapperClass='mb-4' id="cnic" name="cnic" label='CNIC' value={form.cnic} onChange={onFieldValueChange} />
      <MDBInput wrapperClass='mb-4' type='email' name="email" label='Email' value={form.email} onChange={onFieldValueChange} />
      <MDBInput wrapperClass='mb-4' type='tel' name="phone" label='Phone' value={form.phone} onChange={onFieldValueChange} />
      <MDBCheckbox wrapperClass='d-flex justify-content-start mb-4' id="married" name="married" label='Married?' value={form.married} onChange={onFieldValueChange} />

      <div className='mb-4'>
        <MDBFile id='file' name="file" value={form.file} onChange={onFieldValueChange} />
      </div>

      {/* Spinner */}
      {/* <MDBSpinner role='status'> <span className='visually-hidden'>Loading...</span> </MDBSpinner>  */}

      <MDBBtn className='mb-4 btn-submit' type='button' onClick={onFormSubmit}> Save </MDBBtn>
    </form>
  </div>;
};

export default HomePage;