import styles from "./Alert.module.css";

function Alert({ type, message}) {
    const alertType = {
        success: {backgroundColor: "greenyellow", color: "green"},
        warning: {backgroundColor: "yellow", color: "orange"},
        error: {backgroundColor: "rgba(255, 0, 0, 0.218)", color: "red"}
    }

    return (
        <>
            <p style={alertType[type]}>
                {message}
            </p>
            <p className={styles[type]}>
                {message}
            </p>
        </>
    )
}

export default Alert