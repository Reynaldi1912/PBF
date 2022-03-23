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

import List from "./List";

export default function Ecommerce(){
  return(
    <Router>
    <div>
        <AuthButton />
        <Switch>
          <Route path="/login" >{<LoginPage />}</Route>
          <PrivateRoute path="/private"><ProtectedPage /></PrivateRoute>
        </Switch>
        <div className="row container-fluid">
          <div className="col p-3">
            <div class="card" width="18rem">
            <img src="https://awsimages.detik.net.id/community/media/visual/2019/05/01/9e725447-eb71-43e3-9d7f-978bc0c96d7b.jpeg?w=700&q=90" alt="Food" width='200' />
              <div class="card-body">
                <h5 class="card-title">Barang 1</h5>
                <a href="/private" class="btn btn-primary">Beli</a>
              </div>
            </div>
          </div>
          <div className="col p-3">
            <div class="card" width="18rem">
            <img src="https://awsimages.detik.net.id/community/media/visual/2019/05/01/9e725447-eb71-43e3-9d7f-978bc0c96d7b.jpeg?w=700&q=90" alt="Food" width='200' />
              <div class="card-body">
                <h5 class="card-title">Barang 2</h5>
                <a href="/private" class="btn btn-primary">Beli</a>
              </div>
            </div>
          </div>
          <div className="col p-3">
            <div class="card" width="18rem">
            <img src="https://awsimages.detik.net.id/community/media/visual/2019/05/01/9e725447-eb71-43e3-9d7f-978bc0c96d7b.jpeg?w=700&q=90" alt="Food" width='200' />
              <div class="card-body">
                <h5 class="card-title">Barang 3</h5>
                <a href="/private" class="btn btn-primary">Beli</a>
              </div>
            </div>
          </div>
          <div className="col p-3">
            <div class="card" width="18rem">
            <img src="https://awsimages.detik.net.id/community/media/visual/2019/05/01/9e725447-eb71-43e3-9d7f-978bc0c96d7b.jpeg?w=700&q=90" alt="Food" width='200' />
              <div class="card-body">
                <h5 class="card-title">Barang 4</h5>
                <a href="/private" class="btn btn-primary">Beli</a>
              </div>
            </div>
          </div>
          <div className="col p-3">
            <div class="card" width="18rem">
            <img src="https://awsimages.detik.net.id/community/media/visual/2019/05/01/9e725447-eb71-43e3-9d7f-978bc0c96d7b.jpeg?w=700&q=90" alt="Food" width='200' />
              <div class="card-body">
                <h5 class="card-title">Barang 4</h5>
                <a href="/private" class="btn btn-primary">Beli</a>
              </div>
            </div>
          </div>

      </div>

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
      <p></p>
      // render
      // console.log('I was triggered during componentDidMount')
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

function ProtectedPage(){
  return <h3>Anda Sudah Login , Lanjutkan Belanja Anda</h3>
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
              Anda Harus Login Untuk Melanjutkan Belanja Anda 
          </p>
          <button onClick={login}>Log In</button>
      </div>
  );
}
