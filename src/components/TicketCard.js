import MaterialUI from "@material-ui/core";
import React from "react";

const { Card, CardContent, CardHeader, Typography } = MaterialUI;

const TicketCard = ({ ticket }) => {
  const priorityColor = {
    4: "red",
    3: "orange",
    2: "yellow",
    1: "green",
    0: "blue",
  };

  return (
    <Card>
      <CardHeader
        title={ticket.title}
        subheader={ticket.assignedTo}
      />
      <CardContent>
        <Typography variant="body1">{ticket.description}</Typography>
        <Typography variant="body2">
          Priority: <span style={{ color: priorityColor[ticket.priority] }}>
            {ticket.priority}
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TicketCard;
