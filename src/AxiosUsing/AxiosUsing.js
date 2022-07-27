import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "http://localhost:8000/teams";

const AxiosUsing = () => {
  const [teams, setTeams] = useState({
    naming:"",
    wins:""
  });
  const [model, setModel] = useState(null);
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
        setModel(response.data);
    });
  }, []);
  const createTeam = () => {
    axios
      .post(baseUrl, {
        naming:teams.naming ,
        wins: teams.wins,
      })
      .then((response) => {
        setModel(response.data);
      });
  }
console.log(model)
  const handleInputValue = (event) => {
    setTeams({
      ...teams,
      [event.target.name]: event.target.value,
    });
  };
 
  return (
    <div>
      <div></div>
      <form onSubmit={createTeam}>
        <label>
          Naming
          <input type="text" value={teams.naming} name="naming" onChange={handleInputValue} />
        </label>
        <input type="submit" value="submit"  />
        <label>
          Wins
          <input type="text" name="wins" value={teams.wins} onChange={handleInputValue} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AxiosUsing;
