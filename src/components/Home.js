import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {Controller} from "./Carousel";


export const Home = () => {
    const [name, setName] = useState('');
    const [navigate, setNavigate] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('user');

                setName(data.name);
            } catch (e) {
                setNavigate(true);
            }
        })();
    }, []);
   
    const logout = async () => {
        await axios.post('logout', {}, {withCredentials: true});

        setNavigate(true);
    }

    if (navigate) {
        return <Navigate to="/login"/>;
    }

    return <><div className="form-signin mt-5 text-center">

        <h3>Hi {name}</h3>
        <div className="wrapper">
  <div className="sliding-background"></div>
</div>
       

        <a href="javascript:void(0)" className="btn btn-lg btn-primary"
            onClick={logout}
        >Logout</a>
    </div>
    
    </>

}
