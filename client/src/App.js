import LandingPage from "./pages/landing/LandingPage";
import MainRouter from "./router/MainRouter";


function App() {

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
