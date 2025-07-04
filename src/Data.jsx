function Data({ company_name, company_slogan, name, job_position, mobile_number, email, website, address, photo }) {
  return (
    <div className="idcard">
      <div className="header">
        <h2>{company_name}</h2>
        <p>{company_slogan}</p>
      </div>
      <div className="redline"></div>

      <div className="photo">
        {photo && <img src={photo} alt="Profile" />}
      </div>

      <div className="info">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Position:</strong> {job_position}</p>
        <p><strong>Mobile:</strong> {mobile_number}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Address:</strong> {address}</p>
      </div>

      <div className="footer">
        {website}
      </div>
    </div>
  );
}

export default Data;


