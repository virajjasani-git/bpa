import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Toolbar,
  Button,
} from "@mui/material";
import "./theme.css"; // Import the centralized theme.css file

const BPADetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(`http://localhost:8000/member/${id}`);

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `BPA-${id}.json`;
    link.click();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Box className="bpa-details-container">
      <Toolbar className="bpa-toolbar">
        <Button variant="outlined" color="primary" onClick={handleExport} className="bpa-toolbar-button">
          Export
        </Button>
        <Button variant="contained" color="primary" onClick={handlePrint} className="bpa-toolbar-button">
          Print
        </Button>
      </Toolbar>
      {error && <Typography color="error">{error}</Typography>}
      {isLoading && <Typography>Loading...</Typography>}
      {data && (
        <>
          {/* BPA Properties */}
          <Typography variant="h4" className="bpa-title">
            BPA Details: {data.bpanumber}
          </Typography>
          <Box className="bpa-properties">
            <Box className="bpa-property">
              <Typography className="bpa-property-name">Type:</Typography>
              <Typography className="bpa-property-value">{data.type}</Typography>
            </Box>
            <Box className="bpa-property">
              <Typography className="bpa-property-name">Supplier Name:</Typography>
              <Typography className="bpa-property-value">{data["Supplier Name"]}</Typography>
            </Box>
            <Box className="bpa-property">
              <Typography className="bpa-property-name">Currency:</Typography>
              <Typography className="bpa-property-value">{data.currency}</Typography>
            </Box>
            <Box className="bpa-property">
              <Typography className="bpa-property-name">Owner:</Typography>
              <Typography className="bpa-property-value">{data.owner}</Typography>
            </Box>
            <Box className="bpa-property">
              <Typography className="bpa-property-name">State:</Typography>
              <Typography className="bpa-property-value">{data.state}</Typography>
            </Box>
            <Box className="bpa-property">
              <Typography className="bpa-property-name">Created:</Typography>
              <Typography className="bpa-property-value">{new Date(data.created).toLocaleString()}</Typography>
            </Box>
            <Box className="bpa-property">
              <Typography className="bpa-property-name">Modified:</Typography>
              <Typography className="bpa-property-value">{new Date(data.modified).toLocaleString()}</Typography>
            </Box>
          </Box>

          {/* Line Items */}
          <Typography variant="h5" className="bpa-line-items-title">
            Line Items
          </Typography>
          <TableContainer component={Paper} className="bpa-table-container">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Number</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Revision</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Price</strong>
                  </TableCell>
                  <TableCell>
                    <strong>MOQ</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Allocation</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Lead Time</strong>
                  </TableCell>
                  <TableCell>
                    <strong>COO</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.items.map((item, index) => (
                  <TableRow key={index} className="bpa-table-row">
                    <TableCell>{item.number}</TableCell>
                    <TableCell>{item.rev}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.MOQ}</TableCell>
                    <TableCell>{item.allocation}</TableCell>
                    <TableCell>{item["lead time"]}</TableCell>
                    <TableCell>{item.COO}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Box>
  );
};

export default BPADetails;
