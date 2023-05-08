import { useContext } from "react";
import {Navigate} from "react-router-dom";
import { AuthContext } from "../Components/AuthContextProvider";

let username = (localStorage.getItem('username'));
console.log(username);

function PrivateRoute({children}){
    const {isAuth} = useContext(AuthContext);

    if(username) <Navigate to='/cart'/>

    else if(!isAuth){
        return <Navigate to="/login" />
    }

    return children;
}

export default PrivateRoute;