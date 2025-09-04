function Mood({emotion}){
    const moodStyles = {
        happy: { color: "yellow" },
        angry: { color: "red" },
        sad: { color: "blue" }
    }
    return(
        <p style={moodStyles[emotion]}> 
            The color is my emotion
        </p>
    )
}

export default Mood;