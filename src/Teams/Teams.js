import axios from "axios";
import { useEffect, useState } from "react";

const Teams = () => {
  const baseURL = "http://localhost:8000/teams";
  const [team, setTeam] = useState("");
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTeam(response.data);
    });
  }, []);
  const deleteTeam = (teamId) => {
    axios.delete(`${baseURL}/teamId`).then(() => {
      alert("Post deleted!");
      setTeam(null);
    });
  };
  return (
    <div>
      {team &&
        team.map((team) => (
          <div>
            <div>{team.naming}</div>
            <div>{team.wins}</div>
            <button onClick={() => deleteTeam(team.id)}>Delete Team</button>
          </div>
        ))}
    </div>
  );
};

export default Teams;
