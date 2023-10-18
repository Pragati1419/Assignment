import KanbanBoard from "./components/KanbanBoard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState("status");
  const [sortingOption, setSortingOption] = useState("priority");

  useEffect(() => {
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        setTickets(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleGroupingChange = (event) => {
    setGroupingOption(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  return (
    <Router>
      <Route path="/">
        <KanbanBoard
          tickets={tickets}
          groupingOption={groupingOption}
          sortingOption={sortingOption}
          onGroupingChange={handleGroupingChange}
          onSortingChange={handleSortingChange}
        />
      </Route>
    </Router>

  );
}

export default App;


