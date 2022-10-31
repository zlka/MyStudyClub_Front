import axios from "axios"


function Header(props) {

  function logMeOut() {
    axios({
      method: "POST",
      url: "http://127.0.0.1:5000/logout"
    })

    .then((response) => {
      props.token()
    }).catch((error) => {
      if (error.response) {
        console.warn(error.response)
        console.warn(error.response.status)
        console.warn(error.response.headers)
      }
    })
  }

  return(
    <header className="App-Header">
      <p>Header</p>
      <button onClick={logMeOut}>
        Logout
      </button>
    </header>
  )
}

export default Header
