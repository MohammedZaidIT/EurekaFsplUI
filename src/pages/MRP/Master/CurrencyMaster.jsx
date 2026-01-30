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
import {useCurrencyMaster} from "../../../hooks/MRP/Master/useCurrencyMaster";

export default function CurrencyMaster() {
  const {
    CurrencyMasterData,
    CurrencyMasterSave,
    data,
    loading,
    error,
  } = useCurrencyMaster();

  const [formData, setFormData] = useState({
    Currency: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("CURRENCY SAVE:", formData);
    CurrencyMasterSave(formData);
  };

  useEffect(() => {
    CurrencyMasterData();
  }, []);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.Id,
      sortable: true,
    },
    {
      name: "Currency",
      selector: (row) => row.Currency,
      sortable: true,
    },
  ];

  return (
    <>
      {/* ================= FORM ================= */}
      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2} variant="h6">
            Currency Master
          </Typography>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ flex: "1 1 320px" }}>
              <FormControl fullWidth>
                <TextField
                  name="Currency"
                  label="Currency"
                  size="small"
                  value={formData.Currency}
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
            title="Currency List"
            columns={columns}
            data={data || []}
            loading={loading}
          />
        </CardContent>
      </Card>
    </>
  );
}
