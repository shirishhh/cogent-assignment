import React, { useEffect, useState } from "react";
import './login.scss'
import { connect } from "react-redux";
import { loginAuthAction } from "../../redux/actions/authActions";
import books1 from "../../assets/images/books1.png";


const Login = (props) => {

    const [auth] = useState({
        email: 'demo@gmail.com',
        password: 'password'
    });
    const [user, setUser] = useState()
    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth));
    }, [auth]);


    return (
        
        <div className="container">
            <div class="d-flex justify-content-center">
            <div className="card login-card">
                <div >
                    <img className="img-logo" alt="" src={books1}></img>
                </div>
                <div className="login-text">
                    <span>Login</span>
                    </div>
                <div className="card-body">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        props.loginAuthAction(user)
                    }}>
                        <div className=" mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="demo@gmail.com"
                                onChange={(e) => {
                                    const email = e.target.value;
                                    setUser({ ...user, ...{ email } });
                                }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="password" onChange={(e) => {
                                const password = e.target.value;
                                setUser({...user,...{password}});
                            }} />
                        </div>
                        <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    {props.auth&& <div style={{color:'red',marginTop:'10px'}}><span>{props.auth}</span>
                    <br/>
                    <span>email:demo@gmail.com</span>
                    <br/>
                    <span>password:password</span>
                    </div>
                    }
                </div>
            </div>
            </div>
        </div>
    )
}
    const mapStateToProps = (state) => {
        return {
          auth: state.auth,
        }
      }

export default connect(mapStateToProps,{ loginAuthAction })(Login);