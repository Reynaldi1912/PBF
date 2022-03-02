import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import Footer from '../Footer';
import List from '../List';

class loginComponent extends Component {
    render() {
    return (
    <div>
    <Header/>
             <form className='pt-5'>
             <div class="w-25 p-3 card container">
                 <div className="card-header">
                     <h3>Login Form</h3>
                 </div>
                 <div class="form card-body">
                     <div class="form-group">
                         <label for="exampleInputEmail1" className='pb-1'>Email</label>
                         <input type="email" class="form-control" id="Email1" aria-describedby="emailHelp" placeholder="Masukan Email"/>
                     </div>
                     <div class="form-group pt-4 pb-2">
                         <label for="exampleInputEmail1" className='pb-1'>Password</label>
                         <input type="password" class="form-control" id="Password" aria-describedby="emailHelp" placeholder="Masukan Password"/>
                     </div>
                 </div>
                 <div className="card-footer pt-3">
                     <button type="button" class="btn btn-outline-success btn-block w-100">Login</button>
                     <div class="form-check pt-2 pb-3">
                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                         <label class="form-check-label" for="flexCheckDefault">
                             Remember Me
                         </label>
                     </div>
                     <button type="button" class="btn btn-danger btn-block ">Cancel</button>
                 </div>
             </div>
         </form> 
         <br/><br/><br/>
         <center><List /></center>
         

    <Footer judul='Halaman Footer' nama='Reynaldi' />

    </div>
    );
    }
   }export default loginComponent;