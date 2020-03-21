import React, {useState, ChangeEvent} from 'react';
import {Link, Redirect } from 'react-router-dom';
import Layout from '../layout/layout';
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { UserModel } from '../../models/user-model';

interface UserState {
    user : UserModel;
}

export class Signup extends React.Component<any, UserState>  {
    constructor(props: any) {
        super(props);
        this.state = {
            user : new UserModel()
        }

    };


    public handleChange = name => event => {
        const user = {...this.state.user};
        user[name] = event.target.value;
        this.setState({user});
    }

    public clickSubmit = event => {
        event.preventDefault();
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.user)
        }
        fetch( `${process.env.REACT_APP_API}/users`,options)
        .then(response => response.json())
        .then(user => {
            toast.success("User was addedd");
            this.props.history.push("/");
        })
        .catch(err => toast.success(err.message))
    }

    public signupForm = () => {
        return(
            <form>
                <div className="form-group">
                    <label className="text-muted">User name</label>
                    <input type="text" onChange={this.handleChange('user_name')} value={this.state.user.user_name || ""} className="form-control"/>
                </div>

                <div className="form-group">
                    <label className="text-muted">First name</label>
                    <input type="text" onChange={this.handleChange('first_name')} value={this.state.user.first_name || ""} className="form-control"/>
                </div>

                <div className="form-group">
                    <label className="text-muted">Last name</label>
                    <input type="text" onChange={this.handleChange('last_name')} value={this.state.user.last_name || ""} className="form-control"/>
                </div>

                <div className="form-group">
                    <label className="text-muted">Password</label>
                    <input type="password" onChange={this.handleChange('password')} value={this.state.user.password || ""} className="form-control"/>
                </div>
                <div>
                    <button className="btn btn-primary" onClick = { this.clickSubmit }>
                        Submit
                    </button>
                </div>
            </form>
        );
    }

    public render(){
        return(
        <Layout>
            <div className="col-md-6 offset-md-3">
                <ToastContainer>
            
                </ToastContainer>
            
                <h1 className="p-5 text-center">
                    Signup
                </h1>
                {this.signupForm()}
            </div>
        </Layout>
        );
    }
}

