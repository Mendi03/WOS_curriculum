import styles from "./HighlightBox.module.css";

function HighlightBox({ variant, title, children }) {

  const highlights = {
    warning: {backgroundColor: "#feffe0"},
    success: {backgroundColor: "#90ee90"},
    info: {backgroundColor: "#add9e6"},
    danger: {backgroundColor: "#ff6446"}
  }

  console.log('first', typeof(variant))

  return (
    <div style={highlights[variant]} className={styles.box}>
        {title && <h2>{title}</h2>}
        <div>{children}</div>
    </div>
  )
}

export default HighlightBox