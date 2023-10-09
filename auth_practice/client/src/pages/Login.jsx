import Google  from "../img/google.png"
import Github from "../img/github.png"
import Intra from "../img/intra.png";
const Login = () => {
    const google = () => {
      window.open("http://localhost:5000/auth/google", "_self");
    };
  
    const github = () => {
      window.open("http://localhost:5000/auth/github", "_self");
    };
  
    const intra = () => {
      window.open("http://localhost:5000/auth/intra", "_self");
    };
  
    return (
      <div className="login">
        <h1 className="loginTitle">Choose a Login Method</h1>
        <div className="wrapper">
          <div className="left">
            <div className="loginButton google" onClick={google}>
                <img src={Google} alt="" className="icon" />
                    Google
                </div>
                <div className="loginButton intra" onClick={Intra}>
            <img src={Intra} alt="" className="icon" />
                Intra
                    </div>
                    <div className="loginButton github" onClick={github}>
                        <img src={Github} alt="" className="icon" />
                        Github
                    </div>
          </div>
          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>
          <div className="right">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button className="submit">Login</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;

// const Login = () =>
// {
//     return (
//         <div className="login">
//             <h1 className="loginTitle">Choose a Login Method</h1>
//             <div className="wrapper">
//                 <div className="left">
//                     <div className="loginButton google">
//                         <img src={Google} alt="" className="icon" />
//                         Google
//                     </div>
//                     <div className="loginButton intra">
//                         <img src={intra} alt="" className="icon" />
//                         Intra
//                     </div>
//                     <div className="loginButton github">
//                         <img src={Github} alt="" className="icon" />
//                         Github
//                     </div>
//                 </div>
//                 <div className="center">
//                     <div className="line" />
//                     <div className="or">OR</div>
//                 </div>
//                 <div className="right">
//                 <input type="text" placeholder="Username" />
//                 <input type="text" placeholder="Password"/>
//                 <button className="submit">Login</button>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Login;