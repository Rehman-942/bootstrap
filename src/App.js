import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./img.jpg";

function App() {
  return (
    <div className="container">
      <div className="col-sm-12">
        <div className="text-center">
          <div>
            <img class="col-sm-1" src={logo} alt="Bootstrap Logo" />
          </div>
          <div className="sign">
            <h1>Sign In Page</h1>
          </div>
          <div className="para">
            <p>
              Build a sign in page to display your command on bootstrap:text
              with color red pseudo element. Works in latest Chrome, Safari, and
              Forefox. This is a clickable section that will take us to a new
              page
            </p>
          </div>
          <div className="inputs">
            <input id="email" placeholder="Email address"></input>
            <div>
              <input id="pswd" placeholder="Password"></input>
            </div>
          </div>
          <div className="remember">
            <input type="checkbox"></input>
            <span>Remember me</span>
          </div>
          <div className="sign-btn">
            <button>Sign in</button>
          </div>
          <div>&#169 2017-2018</div>
        </div>
      </div>
    </div>
  );
}

export default App;
