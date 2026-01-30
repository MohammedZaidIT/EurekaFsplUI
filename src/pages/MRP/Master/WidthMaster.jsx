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
import {useWidthMaster} from "../../../hooks/MRP/Master/useWidthMaster";

export default function WidthMaster() {
  const {
    WidthMasterData,
    WidthMasterSave,
    data,
    loading,
    error,
  } = useWidthMaster();

  const [formData, setFormData] = useState({
    Width: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("WIDTH SAVE:", formData);
    WidthMasterSave(formData);
  };

  useEffect(() => {
    WidthMasterData();
  }, []);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.Id,
      sortable: true,
    },
    {
      name: "Width",
      selector: (row) => row.Width,
      sortable: true,
    },
  ];

  return (
    <>
      {/* ================= FORM ================= */}
      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2} variant="h6">
            Width Master
          </Typography>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ flex: "1 1 320px" }}>
              <FormControl fullWidth>
                <TextField
                  name="Width"
                  label="Width"
                  size="small"
                  value={formData.Width}
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
            title="Width List"
            columns={columns}
            data={data || []}
            loading={loading}
          />
        </CardContent>
      </Card>
    </>
  );
}
