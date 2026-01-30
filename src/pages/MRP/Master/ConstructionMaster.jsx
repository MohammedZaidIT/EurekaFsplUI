import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import AdvancedDataTable from "../../../layout/AdvancedDataTable";
import { useConstruction } from "../../../hooks/MRP/Master/useConstruction";

export default function ConstructionMaster() {
  const { ConstructionData, ConstructionSave, data, loading } =
    useConstruction();

  const [formData, setFormData] = useState({
    Id: "",
    Name: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("CONSTRUCTION SAVE:", formData);
    ConstructionSave(formData);
  };

  useEffect(() => {
    ConstructionData();
  }, []);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.Id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
      sortable: true,
    },
  ];

  return (
    <>
      {/* ================= FORM ================= */}
      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2} variant="h6">
            Construction Master
          </Typography>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            
            <Box sx={{ flex: "1 1 300px" }}>
              <FormControl fullWidth>
                <TextField
                  name="Name"
                  label="Name"
                  size="small"
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
                />
              </FormControl>
            </Box>

            {/* Save */}
            <Box sx={{ flex: "0 0 120px" }}>
              <Button
                variant="outlined"
                fullWidth
                sx={{ height: 40 }}
                onClick={handleSave}
              >
                Save
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <br />

      {/* ================= TABLE ================= */}
      <Card>
        <CardContent>
          <AdvancedDataTable
            title="Construction List"
            columns={columns}
            data={data || []}
            loading={loading}
          />
        </CardContent>
      </Card>
    </>
  );
}
