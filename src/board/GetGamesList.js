import "./GamePage.css";

export default function GetGamesList(props) {
  //console.log("Props of GetGameList: ",props);

  const dispalyList = (props) => {
    const { gameslist } = props.gameslist;

    if (props.gameslist.length > 0) {
      return (
        <>
          <div className="gamelist">
            <div className="child currentgamelist">
              <table>
                <thead>
                  <tr>
                    <th>Past Games</th>
                  </tr>
                </thead>
                <tbody>
                  {props.gameslist.map((game, index) => (
                    <tr data-index={game.assetData.assetId}>
                      <td>
                        <button
                          onClick={() => {
                            props.onJoinGameClick(game.assetData.assetId);
                           // props.loadGamePage();
                          }}
                        >
                          {game.assetData.assetId}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="child ingamelist">
              <h3>On going games:</h3>
              <button>Dummy</button>
              <br />
            </div>
          </div>
        </>
      );
    } else {
      return <h3>no games</h3>;
    }
  };

  return <>{dispalyList(props)}</>;
}