import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Toolbar,
  Button,
  IconButton,
  TextField,
  TableSortLabel,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

const BPAlist = ({ bpas, title }) => {
  const [filter, setFilter] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "bpanumber", direction: "asc" });

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(bpas, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "BPAs.json";
    link.click();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });
  };

  const filteredBpas = bpas.filter(
    (bpa) =>
      bpa.bpanumber.toLowerCase().includes(filter) ||
      bpa.owner.toLowerCase().includes(filter) ||
      bpa.state.toLowerCase().includes(filter)
  );

  const sortedBpas = [...filteredBpas].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="bpa-list-container">
      <Toolbar className="bpa-toolbar">
        <TextField
          label="Filter"
          variant="outlined"
          size="small"
          onChange={handleFilterChange}
          className="bpa-filter-input"
        />
        <Button variant="outlined" color="primary" onClick={handleExport} className="bpa-toolbar-button">
          Export
        </Button>
        <Button variant="contained" color="primary" onClick={handlePrint} className="bpa-toolbar-button">
          Print
        </Button>
      </Toolbar>
      <Typography variant="h4" className="bpa-list-title">
        {title}
      </Typography>
      <TableContainer component={Paper} className="bpa-table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === "bpanumber"}
                  direction={sortConfig.key === "bpanumber" ? sortConfig.direction : "asc"}
                  onClick={() => handleSort("bpanumber")}
                >
                  BPA Number
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === "owner"}
                  direction={sortConfig.key === "owner" ? sortConfig.direction : "asc"}
                  onClick={() => handleSort("owner")}
                >
                  Owner
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === "state"}
                  direction={sortConfig.key === "state" ? sortConfig.direction : "asc"}
                  onClick={() => handleSort("state")}
                >
                  State
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === "created"}
                  direction={sortConfig.key === "created" ? sortConfig.direction : "asc"}
                  onClick={() => handleSort("created")}
                >
                  Created
                </TableSortLabel>
              </TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedBpas.map((bpa) => (
              <TableRow key={bpa.id} className="bpa-table-row">
                <TableCell>{bpa.bpanumber}</TableCell>
                <TableCell>{bpa.owner}</TableCell>
                <TableCell>{bpa.state}</TableCell>
                <TableCell>{new Date(bpa.created).toLocaleDateString()}</TableCell>
                <TableCell>
                  <IconButton
                    component={Link}
                    to={`/details/${bpa.id}`}
                    color="primary"
                    aria-label="View Details"
                    className="bpa-view-icon"
                  >
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BPAlist;
