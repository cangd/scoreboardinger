import "./App.css";
import { GameView } from "./Game";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <GameView />
        {/* <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Bla</Button> */}
      </header>
    </div>
  );
};

export default App;
