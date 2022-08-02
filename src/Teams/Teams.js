import { useEffect, useState } from "react";
import { REST_TEAMS } from "../config/config";

const Teams = () => {
  const [teams, setTeams] = useState("");

  useEffect(() => {
    getTeam();
  }, []);

  const getTeam = () => {
    REST_TEAMS.get().then((response) => {
      setTeams(response.data);
    })
  }

  const deleteTeam = (teamId) => {
    REST_TEAMS.delete(`/${teamId}`).then(() => {
      alert("Post deleted!");
      getTeam()
    });
  };

  return (
    <div>
      {teams &&
        teams.map((team) => (
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
