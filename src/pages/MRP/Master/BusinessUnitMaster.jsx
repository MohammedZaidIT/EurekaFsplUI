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
import {useBusinessUnitMaster} from "../../../hooks/MRP/Master/useBusinessUnitMaster";

export default function BusinessUnitMaster() {
  const {
    BusinessUnitData,
    BusinessUnitSave,
    data,
    loading,
    error,
  } = useBusinessUnitMaster();

  const [formData, setFormData] = useState({
    CompanyCode: "",
    BusinessUnit: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("BUSINESS UNIT SAVE:", formData);
    BusinessUnitSave(formData);
  };

  useEffect(() => {
    BusinessUnitData();
  }, []);

  const columns = [
    {
      name: "Company Code",
      selector: (row) => row.CompanyCode,
      sortable: true,
    },
    {
      name: "Business Unit",
      selector: (row) => row.BusinessUnit,
      sortable: true,
    },
  ];

  return (
    <>
      {/* ================= FORM ================= */}
      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2} variant="h6">
            Business Unit Master
          </Typography>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
            <Box sx={{ flex: "1 1 200px", minWidth: 200 }}>
              <FormControl fullWidth>
                <TextField
                  name="CompanyCode"
                  label="Company Code"
                  size="small"
                  value={formData.CompanyCode}
                  onChange={handleChange}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
                />
              </FormControl>
            </Box>

            <Box sx={{ flex: "1 1 300px", minWidth: 300 }}>
              <FormControl fullWidth>
                <TextField
                  name="BusinessUnit"
                  label="Business Unit"
                  size="small"
                  value={formData.BusinessUnit}
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
                disabled={loading}
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
            title="Business Unit List"
            columns={columns}
            data={data || []}
            loading={loading}
          />
        </CardContent>
      </Card>
    </>
  );
}
