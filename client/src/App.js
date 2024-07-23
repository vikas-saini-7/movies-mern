import { useDispatch } from "react-redux";
import LandingPage from "./pages/landing/LandingPage";
import MainRouter from "./router/MainRouter";
import { useEffect } from "react";
import { loginUserWithToken } from "./redux/actions/authActions";

function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    let token = localStorage.getItem('token');
    if(token){
      dispatch(loginUserWithToken(token))
    }
  }, [])

  const switchWeb = 1; //either 0 or any

  return (
    <div>
      {switchWeb === 0 ?
        <div className="h-screen">
          <LandingPage/>
        </div>
      :
        <MainRouter/>
      }
    </div>
  );
}

export default App;
