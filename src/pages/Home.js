import GroupingDropdown from "../components/GroupingDropdown";
import KanbanBoard from "../components/KanbanBoard";
import React from "react";
import SortingDropdown from "../components/SortingDropdown";

const Home = () => {
  const groupingOptions = ["status", "user", "priority"];
  const sortingOptions = ["priority", "title"];

  return (
    <div>
      <h1>Kanban Board</h1>
      <GroupingDropdown options={groupingOptions} />
      <SortingDropdown options={sortingOptions} />
      <KanbanBoard />
    </div>
  );
};

export default Home;