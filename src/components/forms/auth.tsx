import AuthService from "../../services/auth";
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "../../store/user";
import { State } from "../../interfaces";

export default function AuthForm(props) {
    const { type } = props;
    const signup = type === "signup";

    const dispath = useDispatch();
    const navigate = useNavigate();

    const username = useSelector((state: State) => state.user.username);
    const password = useSelector((state: State) => state.user.password);

    const login = async (username:string, password:string) => {
        const authService = new AuthService();
        
        try {
            let response = await authService.login(username, password);
            if (response.status === 200) {
                authService.setToken(response.data.auth_token);
                dispath(actions.loggedIn());
                navigate("/dashboard");
            }
        }catch(e) {

        }
    }
    return (
        <div className="container mx-auto px-4 max-w-xl mt-20">
            <div className="relative flex">
                <h1>{signup ? "Sign Up" : "Sign In"}</h1>
                <h2 className="absolute right-0">{signup ? 'Have an account already?' : "Don't have an account yet?"} <span><a href="/signup">{signup ? "Sign In" : "Sign Up"}</a></span></h2>
            </div>

            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input onChange={(e) => dispath(actions.usernameEntered(e.target.value))} value={username} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input onChange={(e) => dispath(actions.passwordEntered(e.target.value))} value={password} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />

                </div>
                <div className="flex items-center justify-between">
                    <button onClick={() => login(username, password)} className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="/forgot-password">
                        Forgot Password?
                    </a>
                </div>
            </div>
        </div>
    )
}