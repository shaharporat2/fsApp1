import React, {useState} from 'react';
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

    public signupForm = () => {
        return(
            <div></div>
        );
    }

    public render(){
        return(
        <Layout>
            <ToastContainer>
        
            </ToastContainer>
        
            <h1>
                Signup
            </h1>
        </Layout>
        );
    }
}

