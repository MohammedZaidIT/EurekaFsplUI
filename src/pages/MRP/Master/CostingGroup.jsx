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
import { useCostingGroup } from "../../../hooks/MRP/Master/useCostingGroup";

export default function CostingGroup() {
  const { CostingGroupData, CostingGroupSave, data, loading } =
    useCostingGroup();

  const [formData, setFormData] = useState({
    CostingGroup: "",
    CostingGroupName: "",
    Rights2Indent_From_MRC: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("COSTING GROUP SAVE:", formData);
    CostingGroupSave(formData);
  };

  useEffect(() => {
    CostingGroupData();
  }, []);

  const columns = [
    {
      name: "Costing Group",
      selector: (row) => row.CostingGroup,
      sortable: true,
    },
    {
      name: "Costing Group Name",
      selector: (row) => row.CostingGroupName,
      sortable: true,
    },
    {
      name: "Rights To Indent (MRC)",
      selector: (row) => row.Rights2Indent_From_MRC,
    },
  ];

  return (
    <>
      {/* ================= FORM ================= */}
      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2} variant="h6">
            Costing Group Master
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>

            <Box sx={{ flex: "1 1 160px" }}>
              <FormControl fullWidth>
                <TextField
                  name="CostingGroup"
                  label="Costing Group Code"
                  size="small"
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
                />
              </FormControl>
            </Box>

            <Box sx={{ flex: "1 1 260px" }}>
              <FormControl fullWidth>
                <TextField
                  name="CostingGroupName"
                  label="Costing Group Name"
                  size="small"
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
                />
              </FormControl>
            </Box>

            <Box sx={{ flex: "1 1 300px" }}>
              <FormControl fullWidth>
                <TextField
                  name="Rights2Indent_From_MRC"
                  label="Rights to Indent from MRC"
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
            title="Costing Group List"
            columns={columns}
            data={data || []}
            loading={loading}
          />
        </CardContent>
      </Card>
    </>
  );
}
