import React from "react";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function AuthExample(){
  return(
    <Router>
      <div>
          <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/private">Private Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/public" >{<PublicPage />}</Route>
          <Route path="/login" >{<LoginPage />}</Route>
          <PrivateRoute path="/private"><ProtectedPage /></PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
    isAuthentication: false,
    authentication(cb){
        fakeAuth.isAuthentication = true;
        setTimeout(cb,100);
    },
    signout(cb){
        fakeAuth.isAuthentication = false;
        setTimeout(cb,100);
    }
};

function AuthButton(){
    let history = useHistory();

    return fakeAuth.isAuthentication ? (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/"));
                }}
            >
                Sign Out
            </button>
        </p>
    ) : (
        <p> You Are not Log in .</p>
    );
}

function PrivateRoute({ children, ...rest}) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
            fakeAuth.isAuthentication ? (
                children
            ) : (
                <Redirect 
                    to = {{
                        pathname:"/login" , 
                        state: { from: location }
                    }}
                />
                ) 
            }
        />
    );
}

function PublicPage(){
    return <h3>Public</h3>
}
function ProtectedPage(){
    return <h3>Private</h3>
}
function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/"} };
    let login = () => {
        fakeAuth.authentication(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>
                You Must log in to view the page at {from.pathname}
            </p>
            <button onClick={login}>Log In</button>
        </div>
    );
}

