import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import AdvancedDataTable from "../../../layout/AdvancedDataTable";
import { useShoeTypeMaster } from "../../../hooks/MRP/Master/useShoeTypeMaster";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Add, Edit, Trash } from "iconsax-reactjs";
export default function ShoeTypeMaster() {
  const { ShoeTypeMasterData, ShoeTypeMasterSave,ShoeTypeMasterUpdate, data, loading } = useShoeTypeMaster();
  const [isEditing, setIsEditing] = useState(false);
  const [shoetype, setShoeType] = useState("");
  const [id, setId] = useState(null);
 

    // ---------------------- FORMIK ----------------------
  const formik = useFormik({
    initialValues: {
      shoetype: "",
    },
    // ---------------------- FORMIK YUP VALIDATION ----------------------
    validationSchema: Yup.object({
      shoetype: Yup.string().required("Required"),
    }),

    // ---------------------- SUBMIT /EDIT DATA ----------------------
   onSubmit: async (values, { setSubmitting, resetForm }) => {
  try {
    if (isEditing) {
      await ShoeTypeMasterUpdate(values.id, values);
    } else {
      await ShoeTypeMasterSave(values);
    }

    await ShoeTypeMasterData();
    resetForm();
    setIsEditing(false);

  } catch (err) {
    console.error("Save failed:", err);
  } finally {
    setSubmitting(false);
  }
  }
  });

// ---------------------- EDIT HANDLER ----------------------
  const handleEdit = (row) => {
   setIsEditing(true);
    formik.setValues({
    id: row.id,
    shoetype: row.shoetype,   // must match formik field name
  });
  };

  // ---------------------- DELETE HANDLER ----------------------
  const handleDelete = async (row) => {
  
  };


// ---------------------- PAGE LOAD TABLE DATA ----------------------
 useEffect(() => {
  ShoeTypeMasterData();
}, []);

useEffect(() => {
  console.log("TABLE DATAs:", data);
}, [data]);

// ---------------------- TABLE COLUMNS ----------------------
  const columns = [
    {
      name: "Id",
      selectorKey: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "ShoeType",
      selectorKey: "ShoeType",
      selector: (row) => row.shoetype,
      sortable: true,
    },
    {
      name: "Actions",
            selectorKey: "actions",
            width: "120px",
            cell: (row) => (
              <Box display="flex" gap={1}>
                <Button size="small" sx={{ minWidth: 36 }} onClick={() => handleEdit(row)}>
                  <Edit size="18" color="#1976d2" />
                </Button>
      
                <Button size="small" sx={{ minWidth: 36 }} onClick={() => handleDelete(row)}>
                  <Trash size="18" color="#d32f2f" />
                </Button>
              </Box>
            ),
          },
    
  ];


  return (
    <>
      {/* ================= FORM ================= */}
      <Card>
        <CardContent>
          {/* ------------ PAGE HEADER ------------ */}
          <Typography fontWeight="bold" mb={2} variant="h6">
            Shoe Type Master
          </Typography>


         {/* ------------ FORM ------------ */} 
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box sx={{ flex: "1 1 300px" }}>
              <FormControl fullWidth>
                <TextField
                size="small"
                  name="shoetype"
                   label="Shoe Type"
                    value={formik.values.shoetype}
                    onChange={formik.handleChange}
                    error={formik.touched.shoetype && Boolean(formik.errors.shoetype)}
                    helperText={formik.touched.shoetype && formik.errors.shoetype}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
                />
              </FormControl>
            </Box>

            {/* Save/Update */}
            <Box sx={{ flex: "0 0 120px" }}>
               <Button type="submit" variant="outlined" disabled={!formik.isValid || formik.isSubmitting}>
              {formik.isSubmitting ? (
                <CircularProgress size={22} />
              ) : isEditing ? (
                "Update"
              ) : (
                "Save"
              )}
            </Button>
            </Box>
          </Box>
          </form>
        </CardContent>
      </Card>


      <br />

      {/* ================= TABLE ================= */}
      <Card>
        <CardContent>
          <AdvancedDataTable
            title="Shoe Type List"
            columns={columns}
            data={data || []}
            loading={loading}
          />
        </CardContent>
      </Card>
    </>
  );
}
