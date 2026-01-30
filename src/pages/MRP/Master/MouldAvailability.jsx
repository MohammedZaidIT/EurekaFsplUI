import {useState, useEffect} from 'react';
import {Card,CardContent,Typography,Box,TextField, Container, Button,CircularProgress,FormControl } from '@mui/material';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { Edit } from 'iconsax-reactjs';
import  AdvanceDataTable   from '../../../layout/AdvancedDataTable';
import {useMouldAvailability} from '../../../hooks/MRP/Master/useMouldAvailablity';

export default function MouldAvailability(){
  const { MouldAvailabilityData, loading, data, error,MouldAvailabilitySave,MouldAvailabilityUpdate }=useMouldAvailability();
    const[isEditing,setIsEditing]=useState(false);
    // ---------------------- FORMIK ----------------------
  const formik=useFormik({
    initialValues:{
      name:"",
    },
   // ---------------------- FORMIK YUP VALIDATION ----------------------
    validationSchema:Yup.object({
      name:Yup.string().required("Required"),
    }),
    
  // ----------------------FORMIK SUBMIT /EDIT DATA ----------------------
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try{
        if(isEditing){
          await MouldAvailabilityUpdate(values.id,values);
        }else{
          await MouldAvailabilitySave(values);
        }
        await MouldAvailabilityData();
        resetForm();
        setIsEditing(false);
      }
      catch(err){
        console.error("Save failed:",err);
      }finally{
        setSubmitting(false); 
      }

    }
  })
// ---------------------- EDIT HANDLER ----------------------
  const handleEdit = (row) => {
    console.log(row)
   setIsEditing(true);
    formik.setValues({
    id: row.id,
    name: row.name,   // must match formik field name
  });
  };



 {/* ========================================= TABLE ========================================= */}
  // ---------------------- PAGE LOAD TABLE DATA ----------------------
  useEffect(()=>{
    // Fetch table data here
    MouldAvailabilityData();
  },[])
  //----------------------COLUMNS FOR TABLE ----------------------
  const columns=[
    {
      name:"ID",
      "Selector":row=>row.id,
      selector:row=>row.id,
      sortable:true,
    },
    {
      name:"Name",
      "Selector":row=>row.name,
      selector:row=>row.name,
      sortable:true,
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
                  </Box>
                ),
      },
  ]


  return(
    <>
    {/* ================= FORM ================= */}
    <Card>
      <CardContent>
        {/* ------------ PAGE HEADER ------------ */}
        <Typography>Mould Availability</Typography>
         {/* ------------ FORM SUBMIT  USING FORMIK ------------ */}
        <form onSubmit={formik.handleSubmit}>
        <Container sx={{mt:2,display:"flex",gap:2}}>
         
        <Box>
          <FormControl fullWidth>
          <TextField
          size='small'
          label=" Name"
          variant="outlined"
          name="name"
          fullWidth
          value={formik.values.name}
          onChange={formik.handleChange}
           error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
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
        
        </Container>
        </form>
      </CardContent>

    </Card>
    {/* ================= TABLE ================= */}

   <Card sx={{mt:4,borderRadius:2}}>
           <CardContent>
             <AdvanceDataTable
              title="List"
              columns={columns}
              data={data || []}
              loading={loading}
             />
           </CardContent>
         </Card>
      
    </>
  )
}