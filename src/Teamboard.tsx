import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Score from "./Score";

interface Team {
  name: string;
  score?: number;
  set?: number;
}

const TeamName = ({ name, score, set }: Team) => {
  if (name == "Heim") {
    return (
      <Button variant="contained" size="large" color="primary">
        <div>{name}</div>
      </Button>
    );
  } else {
    return (
      <Button variant="contained" size="large" color="secondary">
        <div>{name}</div>
      </Button>
    );
  }
};

export const Teamboard = ({ name, score, set }: Team) => (
  <aside>
    <TeamName name={name}></TeamName>
    <Score></Score>
  </aside>
);
