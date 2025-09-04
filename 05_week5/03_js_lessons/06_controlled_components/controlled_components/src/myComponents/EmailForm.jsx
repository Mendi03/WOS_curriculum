import { useState } from "react";

function EmailForm() {
    const [email, setEmail] = useState("");

    const changeEmail = (event) => {
        setEmail(event.target.value );
    }
    // const resetEmail = (event) => {
    //     event.preventDefault();
    //     setEmail("");
    // }

    function resetEmail2(event) {
        event.preventDefault();
        setEmail("");
    }

  return (
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={email} onChange={changeEmail}/>
            <button onClick={resetEmail2}>Reset</button>
            <p>Current email: {email}</p>
        </form>
   
  )
}

export default EmailForm