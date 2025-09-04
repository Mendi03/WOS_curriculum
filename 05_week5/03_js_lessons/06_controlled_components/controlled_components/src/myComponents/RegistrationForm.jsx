import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subbed, setSubbed] = useState(false);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubbedChange = (e) => setSubbed(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <label >Would you like to sub to our Newsletter? </label>
        <input type="checkbox" checked={subbed} onChange={handleSubbedChange}/>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;