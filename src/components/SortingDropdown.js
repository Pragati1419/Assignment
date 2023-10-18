import MaterialUI from "@material-ui/core";
import React from "react";

const { Select, MenuItem } = MaterialUI;

const SortingDropdown = ({ options, onSortingChange }) => {
  return (
    <Select
      value={onSortingChange}
      onChange={(event) => onSortingChange(event.target.value)}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SortingDropdown;