import React from 'react'
import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";


export async function Gameinplay() {


    
    const [email, setEmail] = useState('');
  
    const [walletbal, setWalletbal] = useState('');
    const [navigate, setNavigate] = useState(false);

    //const taskRelationFound = await getRepository(user).findMany(function{ where: { id: gt(1)  } });

   
    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('user');

                setEmail(data.email);
                //setName (data.name);

               
                
               
            } catch (e) {
                setNavigate(true);
            }
         
        })();
    }, []);
    if (navigate) {
        return <Navigate to="/about"/>;
    }

    const submit = async e  => {
        e.preventDefault();

        await axios.post('wallet', {//api name
           email, walletbal
        });
        setNavigate(true);
    }
    


  return (
    <div>
        <main className="form-signin">
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">{email}</h1>
           

           

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                       onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
                <input type="walletbal" className="form-control" id="walletbal" placeholder="walletbal"
                       onChange={e => setWalletbal(e.target.value)}
                />
                <label htmlFor="wallebal">WalletBal</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    </main>

      
    </div>
  )
}

export default Gameinplay
