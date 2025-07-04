import { useState } from 'react';
import './App.css';
import Data from './Data';

function App() {
  const [form, setForm] = useState({
    company_name: '',
    //the mano
    company_slogan: '',
    name: '',
    job_position: '',
    mobile_number: '',
    email: '',
    website: '',
    address: '',
  });

  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleReset = () => {
    setForm({
      company_name: '',
      company_slogan: '',
      name: '',
      job_position: '',
      mobile_number: '',
      email: '',
      website: '',
      address: '',
    });
    setPhoto(null);
  };

  return (
    <div className="body">
      <h1>Company Details Form</h1>

      <div className="table">
        <table>
          <tbody>
            <tr>
              <td><label>Company Name:</label></td>
              <td><input name="company_name" value={form.company_name} onChange={handleChange} placeholder="Company Name" /></td>
            </tr>
            <tr>
              <td><label>Company Slogan:</label></td>
              <td><input name="company_slogan" value={form.company_slogan} onChange={handleChange} placeholder="Slogan" /></td>
            </tr>
            <tr>
              <td><label>Name:</label></td>
              <td><input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" /></td>
            </tr>
            <tr>
              <td><label>Position:</label></td>
              <td><input name="job_position" value={form.job_position} onChange={handleChange} placeholder="Job Title" /></td>
            </tr>
            <tr>
              <td><label>Mobile:</label></td>
              <td><input name="mobile_number" value={form.mobile_number} onChange={handleChange} placeholder="Mobile Number" /></td>
            </tr>
            <tr>
              <td><label>Email:</label></td>
              <td><input name="email" value={form.email} onChange={handleChange} placeholder="Email" /></td>
            </tr>
            <tr>
              <td><label>Website:</label></td>
              <td><input name="website" value={form.website} onChange={handleChange} placeholder="Website" /></td>
            </tr>
            <tr>
              <td><label>Address:</label></td>
              <td><input name="address" value={form.address} onChange={handleChange} placeholder="Address" /></td>
            </tr>
            <tr>
              <td><label>Photo:</label></td>
              <td>
                <input type="file" accept="image/*" onChange={handlePhotoUpload} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td><button onClick={handleReset}>Reset</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Your ID Card</p>
      <div className="idborder">
        <Data
          {...form}
          photo={photo}
        />
      </div>
    </div>
  );
}

export default App;
