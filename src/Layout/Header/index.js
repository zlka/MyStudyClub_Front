import React,{ useState,useEffect,useNavigate} from 'react'
import axios from "axios"
import logo from '../../static/logo.png'
import './header.css'
import { SignIn, SignUp } from '../../auth'
import { XLg,Search } from 'react-bootstrap-icons';


function Header(props) {
  const [dis , setDisplay] = useState("")
  const [appear , setAppear] = useState(true)
  const [data,setData] = useState('')
  const [searchResults,setResults]=useState([])
  const [wordEntered, setWordEntered] = useState("");

  const navigate = useNavigate

  useEffect(() => {
    const fetchData = async () => {
        try {
            let { data } = await axios.get('https://my-study-club.herokuapp.com/flashcards')
            setData(data)
        } catch (err) {
            console.log("doesn't work")
        }
    }
    fetchData()
}, [])

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((d) => {
      return d.set.set_name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setResults([]);
    } else {
      setResults(newFilter);
    }
  };


  const openModal= () => {
    setDisplay("block")
    setAppear(!appear)
  };


  const closeModal = () => {
    setDisplay("none")
  };

  return(
    <header className="navHeader">
      <img src={logo} alt="my study club" />


    <div className='find'>
      <div className="searchBar" >
        <input className ="search" type="text" value={wordEntered} onChange={handleFilter}/>
        <button className="searchBtn" style={{color:'grey'}}><Search /></button>
       </div>
       {searchResults.length > 0 && (
        <div className="dataResult">
          {searchResults.map((result,idx) => {
            return(
              <button key={idx} className="dataItem" onClick={() => navigate('/dashboard/set',{state:result.set_id})}>{result.set.set_name}</button>
            )
          })}
        </div>
        )}
        <div>
           {/* <button id='logout'>Log out</button>  */}
    </div>
      </div>
    
    
      
        

      <div className="registration" hidden={props.hide}>
        <button id="login" onClick={openModal} > Login </button> | 
        <button id="register" onClick={openModal}> Sign Up </button>
        {/* <button  onClick={logMeOut}>Logout </button> */}

        <div className="modal" style={{display: dis}} hidden={!appear}>
          <div className="login-modal">
          <XLg onClick={closeModal} className="exit-btn"/>
          <SignIn hidden={true}/>
          </div>
        </div>

        <div className="modal" style={{display: dis}} hidden={appear}>
          <div className="register-modal">
            <XLg onClick={closeModal} className="exit-btn"/>
            <SignUp/>
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
