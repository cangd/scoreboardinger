import Button from "@mui/material/Button";
import { Teamboard } from "./Teamboard";
import { HGame } from "../types/types";

const data: HGame = {
  id: 1,
  matchType: "1. Herrendoppel",
  teamHome: {
    name: "Heim",
    score: 20,
    set: 1,
  },
  teamAway: {
    name: "Gast",
    score: 20,
    set: 0,
  },
};

export const GameView = () => (
  <aside>
    <div className="game">
      <div>
        <Teamboard name="Heim"></Teamboard>
      </div>
      <div>
        <Teamboard name={data.teamAway.name}></Teamboard>
      </div>
    </div>
    <p />
    <Button size="large"> Weiterer Satz </Button>
  </aside>
);
