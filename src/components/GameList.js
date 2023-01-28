import React from 'react'

const GameList = () => {
    const [email, setEmail] = useState('');
    const [gameid, setGameid] = useState('');
    const [navigate, setNavigate] = useState(false);
    
    useEffect(() => {
        (async () => {
            try {
                const {data} = await auth.post('Game');

                setGameid(data.gameid);

                
               
            } catch (e) {
                setNavigate(true);
            }
         
        })();
    }, []);

  return (
    <div>
      
    </div>
  )
}

export default GameList
