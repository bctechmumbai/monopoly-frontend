import React from 'react'

export const UpdateWallet = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gameid, setGameid] = useState('');
    const [navigate, setNavigate] = useState(false);
    const [walletbal, setWalletbal] = useState('');


    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('user');
                setEmail(data.email);
                setName(data.name);


                
               
            } catch (e) {
                setNavigate(true);
            }
         
        })();
    }, []);

    const submit = async e  => {
        e.preventDefault();

        await axios.post('game', {
           email, gameid
        });
        await axios.put('wallet', {//api name
            email, walletbal:'5000',gameid:gameid
         });
        setNavigate(true);
    }


    if (navigate) {
        return <navigate to="/login"/>;
    }
  return (
    <div>

      
    </div>
  )
}

export default UpdateWallet
