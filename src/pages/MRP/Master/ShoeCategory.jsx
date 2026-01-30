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
import {useShoeCategory} from "../../../hooks/MRP/Master/useShoeCategory";

export default function ShoeCategory() {
  const {
    ShoeCategoryData,
    ShoeCategorySave,
    data,
    loading,
    error,
  } = useShoeCategory();

  const [formData, setFormData] = useState({
    ShoeCategory: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("SHOE CATEGORY SAVE:", formData);
    ShoeCategorySave(formData);
  };

  useEffect(() => {
    ShoeCategoryData();
  }, []);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.Id,
      sortable: true,
    },
    {
      name: "Shoe Category",
      selector: (row) => row.ShoeCategory,
      sortable: true,
    },
  ];

  return (
    <>
      {/* ================= FORM ================= */}
      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2} variant="h6">
            Shoe Category Master
          </Typography>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ flex: "1 1 320px" }}>
              <FormControl fullWidth>
                <TextField
                  name="ShoeCategory"
                  label="Shoe Category"
                  size="small"
                  value={formData.ShoeCategory}
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
            title="Shoe Category List"
            columns={columns}
            data={data || []}
            loading={loading}
          />
        </CardContent>
      </Card>
    </>
  );
}
