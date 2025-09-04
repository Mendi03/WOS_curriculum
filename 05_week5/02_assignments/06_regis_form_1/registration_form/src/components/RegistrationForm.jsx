import { useState } from "react"
import styles from "./RegistrationForm.module.css"

function RegistrationForm() {

    const [formData, setFormData] = useState({
            username: '', 
            email: '', 
            funFact: '', 
            favLanguage: 'None', 
            agreedToTerms: false
        });

    // Error handling
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [funFactError, setFunFactError] = useState('');
    const [favoriteLanguageError, setFavoriteLanguageError] = useState('');
    const [termsError, setTermsError] = useState('');

    const changeUserData = (e) => {
        const { name, type, checked, value } = e.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }));
    }
    const handleSubmit = (event) => {
    // prevent the browser's default behavior (which is to reload the page).
        event.preventDefault();
        let isValid = true;

        // Reset error Messages
        setUsernameError('');
        setEmailError('');
        setFunFactError('');
        setFavoriteLanguageError('');
        setTermsError('');

        // Username errors:
        if(formData.username.trim() === ""){
            setUsernameError("Username is required.");
            isValid= false;
        } 
        else if(formData.username.length < 3){
            setUsernameError("Username must be at least 3 characters.");
            isValid= false;
        }

        // Email errors:
        if(formData.email.trim() === ""){
            setEmailError("Email is required.");
            isValid= false;
        } 
        else if(!formData.email.includes('@')){
            setEmailError("Please enter a valid email address.");
            isValid= false;
        }

        // Terms and conditions error
        if(!formData.agreedToTerms){
            setTermsError("You must agree to the terms and conditions.");
            isValid= false;
        }

        // Fun Fact error
        if(!formData.funFact.toLowerCase().includes("dog")){
            setFunFactError("Your fun fact must include a mention of Dogs. (We love dawgs)");
            isValid= false;
        }
        if(formData.funFact.toLowerCase().includes("hate dog")){
            setFunFactError("We will now share your IP address with the Dog police");
            isValid= false;
        }

        // Fav Language error
        if(formData.favLanguage === "None"){
            setFavoriteLanguageError("Please select your favorite language.")
            isValid= false;
        }

        if(!isValid){
            return;
        }
        // Display alert with valid user data
        alert(`Submitted Username: ${formData.username}\nSubmitted Email: ${formData.email}\nSubmitted Fun Fact: ${formData.funFact}\nSubmitted Favorite Language: ${formData.favLanguage}\nAgreed to Terms? ${formData.agreedToTerms ? 'Yes' : 'No'}`);
        
        
    };


  return (
    <form onSubmit={handleSubmit}>
        {/* Username */}
        <div>
            <label htmlFor="username">Username: </label>
            <input 
            type="text" 
            name="username" 
            id="username" 
            value={formData.username} 
            onChange={changeUserData}/>
            {usernameError && <p style={{ color: 'red', fontSize: '0.8em' }}>{usernameError}</p>} 
        </div>
        {/* Email */}
        <div>
            <label htmlFor="email">Email: </label>
            <input 
            type="text" 
            name="email" 
            id="email" 
            value={formData.email} 
            onChange={changeUserData}/>
            {emailError && <p style={{ color: 'red', fontSize: '0.8em' }}>{emailError}</p>} 
        </div>
        {/* Fun fact */}
        <div>
            <label htmlFor="funFact">Fun Fact about you:</label>
            <textarea name="funFact" 
            id="funFact" 
            value={formData.funFact} 
            onChange={changeUserData}/>
            {funFactError && <p style={{ color: 'red', fontSize: '0.8em' }}>{funFactError}</p>} 
        </div>
        {/* Favorite Programming Language */}
        <div>
            <label htmlFor="favLanguage">Favorite Language:</label>
            <select 
                name="favLanguage" 
                id="favLanguage" 
                value={formData.favLanguage} 
                onChange={changeUserData}>
                <option value="None">Please select a language</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="SQL">SQL</option>
                <option value="JavaScript">JavaScript</option>
                <option value="C#">C#</option>
                <option value="Python">Python</option>
            </select>
            {favoriteLanguageError && <p style={{ color: 'red', fontSize: '0.8em' }}>{favoriteLanguageError}</p>}
        </div>
        {/* Checkbox for accepting terms and conditions */}
        <div>
            <div className={styles.termsAndConditions}>
                <input
                type="checkbox"
                name="agreedToTerms"
                id="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={changeUserData}/>
                <label htmlFor="agreedToTerms">I agree to the terms and conditions</label>
            </div>
            {termsError && <p style={{ color: 'red', fontSize: '0.8em' }}>{termsError}</p>} 
        </div>
        {/* Submit button */}
        <div>
            <button>Submit</button>
        </div>
        {/* Live feedback: */}
        <div>
            <h2>Live feedback:</h2>
            <p>Current Username: {formData.username}</p>
            <p>Current Email: {formData.email}</p>
            <p>Current Fun Fact: {formData.funFact}</p>
            <p>Current Favorite Language: {formData.favLanguage}</p>
            <p>Agreed to Terms: {formData.agreedToTerms ? 'Yes' : 'No'}</p>
        </div>
        
    </form>
  )
}

export default RegistrationForm