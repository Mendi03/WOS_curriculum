import { useState } from "react";

function RForm2() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' , checked: false});

const handleChange = (event) => {
  const { name, value, type, checked } = event.target;
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: type === 'checkbox' ? checked : value
  }));
};

  return (
    <form>
      <div>
        <label>Username: </label>
        <input name="username" value={formData.username} onChange={handleChange} />
      </div>
      <div>
        <label>Email: </label>
        <input name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <div>
        <label>Would you like to sub to our Newsletter? </label>
        <input type="checkbox" name="checked" value={formData.password} onChange={handleChange} />
      </div>
      {/* <button type="submit">Register</button> */}
    </form>
  );
}

export default RForm2;