function WelcomeBanner({ isBirthday }) {

//     return (
//     <div>
//       {isBirthday && <h1>Happy Birthday!</h1>}
//       {!isBirthday && <h1>Have a great day!</h1>}
//     </div>
//   );
    return (
        isBirthday ? <h1>Happy Birthday!</h1> : <h1 hidden>Have a great day!</h1>
    )
}

export default WelcomeBanner