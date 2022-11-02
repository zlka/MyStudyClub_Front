import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import logo from '../../static/logo.png'
import './header.css'
import { SignIn, SignUp } from '../../auth'
import { XLg, Search } from 'react-bootstrap-icons';


function Header(props) {
  const token = localStorage.getItem('token')
  const [displayLogin, setLogin] = useState("")
  const [displayLogout, setLogout] = useState("")
  const [appear, setAppear] = useState(true)
  const [data, setData] = useState('')
  const [searchResults, setResults] = useState([])
  const [wordEntered, setWordEntered] = useState("");
  const [hidden, setHidden] = useState(false)

  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data } = await axios.get('https://my-study-club.herokuapp.com/flashcards')
        let newData = Array.from(new Set(data.map(d => d["set.set_name"]))).map(name => {
          return data.find(d => d["set.set_name"]=== name)
        })
        // console.log("new",newData)
        setData(newData)
      } catch (err) {
        console.log("doesn't work")
      }
    }
    fetchData()
  }, [])


  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((result) => {
      return result["set.set_name"].toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setResults([]);
    } else {
      setResults(newFilter);
    }
  };

  

  const openLoginModal = () => {
    setLogin("block")
  }
  const openLogoutModal = () => {
    setLogout("block")
  }

  const closeLoginModal = () => {
    setLogin("none")
  };
  const closeLogoutModal = () => {
    setLogout("none")
  };

  return (
    <header className="navHeader">
      <a href="/"><img src={logo} alt="my study club" /></a>
      


      <div className='find'>
        <div className="searchBar" >
          <input className="search" type="text" value={wordEntered} onChange={handleFilter} />
          <button className="searchBtn" style={{ color: 'grey' }}><Search /></button>
        </div>
        {searchResults.length > 0 && (
          <div className="dataResult">
            {searchResults.map((result, idx) => {
              return (
                <button key={idx} className="dataItem" onClick={() => navigate("/dashboard/set", { state: result.set_id })}>{result["set.set_name"]}</button>
              )
            })}
          </div>
        )}
        <div>
          <button id='logout' hidden={!hidden}>Log out</button>
        </div>
      </div>





      <div className="registration" hidden={hidden}>
        {!localStorage.getItem('token') ?
        <div><button id="login" onClick={openLoginModal} > Login </button>  |
        <button id="register" onClick={openLogoutModal}> Sign Up </button></div>
        : 
        <button id="logout" onClick={() => {window.location.href = '/' 
                                            localStorage.clear()}
                                            }> Logout </button>
        }
        
        <div className="modal" style={{ display: displayLogin }} >
          <div className="login-modal">
            <XLg onClick={closeLoginModal} className="exit-btn" />
            <SignIn hidden={true} />
          </div>
        </div>

        <div className="modal" style={{ display: displayLogout }} >
          <div className="register-modal">
            <XLg onClick={closeLogoutModal} className="exit-btn" />
            <SignUp />
          </div>
        </div>

      </div>

    </header>
  )
}

export default Header
// function logMeOut() {
  //   axios({
  //     method: "POST",
  //     url: "http://127.0.0.1:5000/logout"
  //   })

  //   .then((response) => {
  //     props.token()
  //   }).catch((error) => {
  //     if (error.response) {
  //       console.warn(error.response)
  //       console.warn(error.response.status)
  //       console.warn(error.response.headers)
  //     }
  //   })
  // }
