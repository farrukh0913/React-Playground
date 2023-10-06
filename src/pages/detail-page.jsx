import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const headings: String[] = ['Name', 'Title', 'Status', 'Position', 'Actions'];
  const rows = [{
    id: 1, src: 'https://mdbootstrap.com/img/new/avatars/8.jpg', name: 'John Doe', email: 'john@gmail.com',
    profession: 'Software engineer', department: 'IT department', color: 'success', status: 'Active', level: 'Senior', btn1: 'Edit', btn2: 'Delete'
  },
  {
    id: 2, src: 'https://mdbootstrap.com/img/new/avatars/6.jpg', name: 'Alex Ray', email: 'alex@gmail.com',
    profession: 'Consultant', department: 'Finance', color: 'primary', status: 'Onboarding', level: 'Junior', btn1: 'Edit', btn2: 'Delete'
  },
  {
    id: 3, src: 'https://mdbootstrap.com/img/new/avatars/7.jpg', name: 'Kate Hunington', email: 'kate@gmail.com',
    profession: 'Designer', department: 'UI/UX', color: 'warning', status: 'Awaiting', level: 'Senior', btn1: 'Edit', btn2: 'Delete'
  }];

  if (location?.state?.form.firstName && location?.state?.form.email) {
    console.log('Received FormData: ', location.state.form);
    const form = location.state.form;
    rows.push({
      id: rows.length + 1, src: 'https://mdbootstrap.com/img/new/avatars/1.jpg', name: form.firstName + ' ' + form.lastName, email: form.email,
      profession: form.profession, department: form.department, color: 'warning', status: 'Awaiting', level: 'Senior', btn1: 'Edit', btn2: 'Delete'
    });
  }

  function onEdit(id: number) {
    console.log('onEdit :>> ', id);
    const selectedRow = rows.find(row => row.id === id);
    navigate('/home', { state: { selectedRow: selectedRow } });
  }

  function onDelete(id: number) {
    console.log('onDelete :>> ', id);
  }

  return <div>
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>{headings.map((heading: string, i: number) => (<th scope='col' key={i}><b>{heading}</b></th>))}</tr>
      </MDBTableHead>
      <MDBTableBody>
        {rows.map((row) => {
          return (
            <tr key={row.id}>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src={row.src}
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{row.name}</p>
                    <p className='text-muted mb-0'>{row.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>{row.profession}</p>
                <p className='text-muted mb-0'>{row.department}</p>
              </td>
              <td>
                <MDBBadge color={row.color} pill> {row.status} </MDBBadge>
              </td>
              <td>{row.level}</td>
              <td>
                <MDBBtn color='link' rounded size='sm' onClick={() => onEdit(row.id)}> {row.btn1} </MDBBtn>
                <MDBBtn color='link' rounded size='sm' onClick={() => onDelete(row.id)}> {row.btn2} </MDBBtn>
              </td>
            </tr>
          );
        })}
      </MDBTableBody>
    </MDBTable>
  </div>;
};

export default DetailPage;