import axios from "axios";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import React from 'react';
import { Wave, Random } from "react-animated-text";
import { useNavigate } from 'react-router-dom';

import NavbarBef from '../NavbarBef';
var loggedIn=false


export const Login = () => {
    const [assetId, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [navigate, setNavigate] = useState(false);
    const [error, setError] = useState(null);
    const[statusId,setStatus]=useState();
    const [isLoading,setLoading] = useState(false)
    const navigate = useNavigate();


      const data = JSON.stringify({
      "assetId":assetId,
      "password":password
          });
          
          const config = {
            method: 'post',
            url: '/api/user/getToken',
            headers: { 
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFtb2RAbmljLmluIiwidXNlckRhdGEiOnsiY3JlZGVudGlhbHMiOnsiY2VydGlmaWNhdGUiOiItLS0tLUJFR0lOIENFUlRJRklDQVRFLS0tLS1cbk1JSUNyekNDQWxhZ0F3SUJBZ0lVZU9pOFI1amZYdTBjWG9JWHJ5aUNYbVRsd2Fzd0NnWUlLb1pJemowRUF3SXdcbmdZa3hDekFKQmdOVkJBWVRBa2xPTVJNd0VRWURWUVFJRXdwTlFVaEJVa0ZUU0ZKQk1ROHdEUVlEVlFRSEV3Wk5cblZVMUNRVWt4R0RBV0JnTlZCQW9URDBKRFRpQkVSVTFQSUZaWlFWQkJVakVmTUIwR0ExVUVDeE1XUTBFdFFteHZcblkydERhR0ZwYmlCUWNtOXFaV04wY3pFWk1CY0dBMVVFQXhNUVptRmljbWxqTFdOaExYTmxjblpsY2pBZUZ3MHlcbk1qQTNNRFl4TURJeE1EQmFGdzB6TnpBM01ESXhNREl4TURCYU1FMHhOVEFOQmdOVkJBc1RCbU5zYVdWdWREQU5cbkJnTlZCQXNUQm5aNVlYQmhjakFWQmdOVkJBc1REbkJzWVhsemRHRjBhVzl1YjI1bE1SUXdFZ1lEVlFRRERBdGhcbmJXOWtRRzVwWXk1cGJqQlpNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQTBJQUJOb0xucFpsV3daS2NqSVpcbmxqc3QydTBvYXB3RjgzV1dndVcxdk5uTGhYb21CWW5md2l1MnpjS2VZb1EvUTM5anNlcUxNSXlGU1Y2TVNKYTBcbktiSkNEbXFqZ2RZd2dkTXdEZ1lEVlIwUEFRSC9CQVFEQWdlQU1Bd0dBMVVkRXdFQi93UUNNQUF3SFFZRFZSME9cbkJCWUVGSlBES3duZnRzeDl0UGhaakN3UU5LdDYxWHVRTUI4R0ExVWRJd1FZTUJhQUZKdnczQjJ3Nk9mRkw1endcbnlkKzRVSlVwN2lNQ01ITUdDQ29EQkFVR0J3Z0JCR2Q3SW1GMGRISnpJanA3SW1obUxrRm1abWxzYVdGMGFXOXVcbklqb2lkbmxoY0dGeUxuQnNZWGx6ZEdGMGFXOXViMjVsSWl3aWFHWXVSVzV5YjJ4c2JXVnVkRWxFSWpvaVlXMXZcblpFQnVhV011YVc0aUxDSm9aaTVVZVhCbElqb2lZMnhwWlc1MEluMTlNQW9HQ0NxR1NNNDlCQU1DQTBjQU1FUUNcbklFRFFhV2VIYjNRMlk4RHl4VFFoY2FQU1JjZ3JpKy9aN1hZTWxneU1mVU5LQWlBYWtEV0JYUFBsY1I5RW00aDdcbm5kOHA1aEhjTDJHU1ZqWDVVYXI3YXJlVFRBPT1cbi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS1cbiIsInByaXZhdGVLZXkiOiItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cclxuTUlHSEFnRUFNQk1HQnlxR1NNNDlBZ0VHQ0NxR1NNNDlBd0VIQkcwd2F3SUJBUVFnS1dVSXRGOUJYN0p6bEFNTlxyXG5FcU1jMTBKVTBvMUdBUWdTcy9HNFF3YU5MZ1doUkFOQ0FBVGFDNTZXWlZzR1NuSXlHWlk3TGRydEtHcWNCZk4xXHJcbmxvTGx0YnpaeTRWNkpnV0ozOElydHMzQ25tS0VQME4vWTdIcWl6Q01oVWxlakVpV3RDbXlRZzVxXHJcbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cclxuIn0sIm1zcElkIjoiUExBWVNUQVRJT05PTkVNU1AiLCJ0eXBlIjoiWC41MDkifSwiaWF0IjoxNjczNTI1Nzc0LCJleHAiOjE3NTk5MjU3NzR9.4bovsisUG7DViJOA-C1w_DulLpeeOg_ltwrPkK_IBoI', 'Content-Type': 'application/json'
            },
            data : data
          };

    const submit = async e => {
        e.preventDefault();
    axios(config)
    .then((response)=>{

    if(response.data.Status==="Success"){
      console.log((response.data));
    const status=response.data.Status;
   
    setStatus(status);
    localStorage.setItem('user',assetId);
    localStorage.setItem('x-access-token',(response.data.data.token));
    loggedIn=true
    console.log(loggedIn)
 
    navigate('/gamelist');
   
  }
    
    if (response.data.Status==="Error"){
      window.confirm(response.data.data.errorMessage);
    }
  })
  
}

console.log(loggedIn)
if (loggedIn) {

  return <Navigate to="/gamelist"/>;

}
   
    if (isLoading) {
      return <div className="App">Loading...</div>;
    }

    return( 
    <><NavbarBef />
    <main className="form-signin">
        <form onSubmit={submit}>


            <div className="headertag"><h1 className="text-header1"><Wave text="MONOPOLY" effect="fadeOut" effectChange={0.1} />
            </h1></div>
           


            <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                    onChange={e => setEmail(e.target.value)} />
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                    onChange={e => setPassword(e.target.value)} />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

            <div id="scroll-container">
               <div id="scroll-text">Contact Administrator Dummy Line Here. Lets play Monopoly.Contact for Advertisement</div>
                   </div>

 
        </form>
    </main>
    </>
    )

}
