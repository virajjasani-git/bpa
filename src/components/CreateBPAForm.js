import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import "./theme.css"; // Import the centralized theme.css file

const CreateBPAForm = () => {
  const [formData, setFormData] = useState({
    bpanumber: "",
    type: "",
    supplierName: "",
    currency: "",
    owner: "",
    state: "",
    created: "",
    modified: "",
    lineItems: [],
  });

  const [lineItem, setLineItem] = useState({
    number: "",
    rev: "",
    price: "",
    MOQ: "",
    allocation: "",
    leadTime: "",
    COO: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLineItemChange = (e) => {
    const { name, value } = e.target;
    setLineItem({ ...lineItem, [name]: value });
  };

  const addLineItem = () => {
    setFormData({
      ...formData,
      lineItems: [...formData.lineItems, lineItem],
    });
    setLineItem({
      number: "",
      rev: "",
      price: "",
      MOQ: "",
      allocation: "",
      leadTime: "",
      COO: "",
    });
  };

  const removeLineItem = (index) => {
    const updatedLineItems = formData.lineItems.filter((_, i) => i !== index);
    setFormData({ ...formData, lineItems: updatedLineItems });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add logic to send formData to the backend or API
  };

  return (
    <Box className="create-bpa-container">
      <Typography variant="h4" gutterBottom>
        Create New BPA
      </Typography>
      <Paper className="create-bpa-paper">
        <form onSubmit={handleSubmit}>
          <Box className="bpa-properties-vertical">
            <Box className="bpa-property">
              <TextField
                label="BPA Number"
                name="bpanumber"
                value={formData.bpanumber}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Box>
            <Box className="bpa-property">
              <TextField
                label="Type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Box>
            <Box className="bpa-property">
              <TextField
                label="Supplier Name"
                name="supplierName"
                value={formData.supplierName}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Box>
            <Box className="bpa-property">
              <TextField
                label="Currency"
                name="currency"
                value={formData.currency}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Box>
            <Box className="bpa-property">
              <TextField
                label="Owner"
                name="owner"
                value={formData.owner}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Box>
            <Box className="bpa-property">
              <TextField
                label="State"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Box>
            <Box className="bpa-property">
              <TextField
                label="Created"
                name="created"
                type="datetime-local"
                value={formData.created}
                onChange={handleInputChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                required
              />
            </Box>
            <Box className="bpa-property">
              <TextField
                label="Modified"
                name="modified"
                type="datetime-local"
                value={formData.modified}
                onChange={handleInputChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                required
              />
            </Box>
          </Box>
          <Typography variant="h5" sx={{ marginTop: 4 }}>
            Line Items
          </Typography>
          <Box className="line-items-container">
            <Box className="line-item-inputs-horizontal">
              <TextField
                label="Number"
                name="number"
                value={lineItem.number}
                onChange={handleLineItemChange}
                fullWidth
              />
              <TextField label="Revision" name="rev" value={lineItem.rev} onChange={handleLineItemChange} fullWidth />
              <TextField label="Price" name="price" value={lineItem.price} onChange={handleLineItemChange} fullWidth />
              <TextField label="MOQ" name="MOQ" value={lineItem.MOQ} onChange={handleLineItemChange} fullWidth />
              <TextField
                label="Allocation"
                name="allocation"
                value={lineItem.allocation}
                onChange={handleLineItemChange}
                fullWidth
              />
              <TextField
                label="Lead Time"
                name="leadTime"
                value={lineItem.leadTime}
                onChange={handleLineItemChange}
                fullWidth
              />
              <TextField label="COO" name="COO" value={lineItem.COO} onChange={handleLineItemChange} fullWidth />
              <IconButton color="primary" onClick={addLineItem}>
                <AddCircleIcon />
              </IconButton>
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Number</TableCell>
                  <TableCell>Revision</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>MOQ</TableCell>
                  <TableCell>Allocation</TableCell>
                  <TableCell>Lead Time</TableCell>
                  <TableCell>COO</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {formData.lineItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.number}</TableCell>
                    <TableCell>{item.rev}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.MOQ}</TableCell>
                    <TableCell>{item.allocation}</TableCell>
                    <TableCell>{item.leadTime}</TableCell>
                    <TableCell>{item.COO}</TableCell>
                    <TableCell>
                      <IconButton color="secondary" onClick={() => removeLineItem(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 3 }}>
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default CreateBPAForm;
