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
import {useSizeType} from "../../../hooks/MRP/Master/useSizeType";

export default function SizeTypeMaster() {
  const {
    SizeTypeData,
    SizeTypeSave,
    data,
    loading,
    error,
  } = useSizeType();

  const [formData, setFormData] = useState({
    SizeType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("SIZE TYPE SAVE:", formData);
    SizeTypeSave(formData);
  };

  useEffect(() => {
    SizeTypeData();
  }, []);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.Id,
      sortable: true,
    },
    {
      name: "Size Type",
      selector: (row) => row.SizeType,
      sortable: true,
    },
  ];

  return (
    <>
      {/* ================= FORM ================= */}
      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2} variant="h6">
            Size Type Master
          </Typography>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ flex: "1 1 320px" }}>
              <FormControl fullWidth>
                <TextField
                  name="SizeType"
                  label="Size Type"
                  size="small"
                  value={formData.SizeType}
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
            title="Size Type List"
            columns={columns}
            data={data || []}
            loading={loading}
          />
        </CardContent>
      </Card>
    </>
  );
}
