import React from "react";
import TicketCard from "./TicketCard";
import useTickets from "../hooks/useTickets";

const KanbanBoard = () => {
  const { tickets, grouping, sorting } = useTickets();

  const groupedTickets = tickets.reduce((groups, ticket) => {
    const group = groups[grouping[ticket.id]] ?? [];
    group.push(ticket);
    groups[grouping[ticket.id]] = group;
    return groups;
  }, {});

  const sortedTickets = groupedTickets[grouping].sort((a, b) => {
    if (sorting === "priority") {
      return b.priority - a.priority;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return (
    <div className="kanban-board">
      <div className="header">
        <h1>Kanban Board</h1>
        <button>Display</button>
      </div>
      <div className="columns">
        {sortedTickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;