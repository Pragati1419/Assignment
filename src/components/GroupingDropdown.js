import MaterialUI from "@material-ui/core";
import React from "react";

const { Select, MenuItem } = MaterialUI;

const GroupingDropdown = ({ options, onGroupingChange }) => {
  return (
    <Select
      value={onGroupingChange}
      onChange={(event) => onGroupingChange(event.target.value)}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};

export default GroupingDropdown;