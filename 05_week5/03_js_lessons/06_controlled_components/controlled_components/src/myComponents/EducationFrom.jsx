import { useState } from "react"

function EducationFrom() {
    const [degree, setDegree] = useState("Associate");

    const degreeType = (e) => {
        setDegree(e.target.value)
    }

    const [hasGraduated, setHasGraduated] = useState(false);

    const checkGraduated = (e) => {
        setHasGraduated(e.target.checked)
    }

    const [comments, setComments] = useState("");

    const changeComments = (e) => {
        setComments(e.target.value)
    }

    const [mood, setMood] = useState("happy");

    const changeTheMood = (e) => {
        setMood(e.target.value)
    }

  return (
    <form action="">
        <h2>Education Form:</h2>
        <div>
            <label htmlFor="school">Degree: </label>
            <select name="school" id="school" value={degree} onChange={degreeType}>
                <option value="Associate">Associate's</option>
                <option value="Bachelor">Bachelor's</option>
                <option value="Master">Master's</option>
            </select>
            <p>You have/ are going for a {degree}'s degree</p>
        </div>
        <div>
            <label htmlFor="graduated">Have you graduated?</label>
            <input 
            type="checkbox" 
            name="graduated" 
            id="graduated" 
            onChange={checkGraduated} 
            checked={hasGraduated}/>
            {hasGraduated ? <p>Congrats!</p> : <p hidden></p>}
        </div>
        <div>
            <label htmlFor="comments">Comments:</label>
            <textarea name="comments" id="comments" value={comments} onChange={changeComments}/>
        </div>
        <div>
            <h3>Your current mood:</h3>
            <div>
                <input type="radio" name="mood" id="happy" value="happy" checked ={mood === "happy"} onChange={changeTheMood}/>
                <label htmlFor="happy">Happy</label>
            </div>
            <div>
                <input type="radio" name="mood" id="angry" value="angry" checked ={mood === "angry"} onChange={changeTheMood}/>
                <label htmlFor="angry">Angry</label>
            </div>
            <div>
                <input type="radio" name="mood" id="sad" value="sad" checked ={mood === "sad"} onChange={changeTheMood}/>
                <label htmlFor="sad">Sad</label>
            </div>
            <p>You are {mood}</p>
        </div>
        
    </form>
  )
}

export default EducationFrom