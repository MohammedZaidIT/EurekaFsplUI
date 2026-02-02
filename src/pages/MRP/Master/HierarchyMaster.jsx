import {useState, useEffect} from 'react';
import {Card,CardContent,Typography,Box,TextField, Container, Button,CircularProgress,FormControl, Autocomplete } from '@mui/material';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { Edit } from 'iconsax-reactjs';
import  AdvanceDataTable   from '../../../layout/AdvancedDataTable';
import {useHierarchyMaster} from '../../../hooks/MRP/Master/useHierarchyMaster';
import { useItemGroupMaster } from '../../../hooks/MRP/Master/useItemGroupMaster';

export default function HierarchyMaster(){
  const { HierarchyData, loading, data, error,HierarchySave,HierarchyUpdate }=useHierarchyMaster();
  const{ItemGroupData,datas}=useItemGroupMaster();
  const [groupOptions, setGroupOptions] = useState([]);
    const[isEditing,setIsEditing]=useState(false);
    // ---------------------- FORMIK ----------------------
  const formik=useFormik({
    initialValues:{
      hierarchyno:"",
      name:"",
      groupcode: null,   // must be null for Autocomplete
    },
   // ---------------------- FORMIK YUP VALIDATION ----------------------
    validationSchema:Yup.object({
      hierarchyno:Yup.number().required("Required"),
      name:Yup.string().required("Name Required"),
       groupcode: Yup.object().nullable().required("Group Code is required"),
    }),
    
  // ----------------------FORMIK SUBMIT /EDIT DATA ----------------------
   onSubmit: async (values, { resetForm, setSubmitting }) => {
  try {
    const payload = {
      ...values,
      groupcode: values.groupcode?.code || "", // ✅ send only code
    };

    if (isEditing) {
      await HierarchyUpdate(values.airno, payload);
    } else {
      await HierarchySave(payload);
    }

    await HierarchyData();

    resetForm({
      values: {
        hierarchyno: "",
        name: "",
        groupcode: null,
      },
    });

    setIsEditing(false);
  } catch (err) {
    console.error("Save failed:", err);
  } finally {
    setSubmitting(false);
  }
}
  })
// ---------------------- EDIT HANDLER ----------------------
  const handleEdit = (row) => {
    console.log(row)
   setIsEditing(true);
    formik.setValues({
    airno:row.airno,
    hierarchyno:row.hierarchyno,
    name: row.name,   // must match formik field name
    groupcode: groupOptions.find(g => g.code === row.groupcode),
  });
  };



 {/* ========================================= TABLE ========================================= */}
  // ---------------------- PAGE LOAD TABLE DATA ----------------------
 useEffect(() => {
  HierarchyData();
  ItemGroupData();   // just fetch data
}, []);
useEffect(() => {
  if (Array.isArray(datas)) {
    setGroupOptions(
      datas.map(item => ({
        code: item.groupcode,
        name: item.groupname,
      }))
    );
  } else {
    setGroupOptions([]);
  }

  console.log("Group Datas:", datas);
}, [datas]);
  //----------------------COLUMNS FOR TABLE ----------------------
  const columns=[
    {
      name:"Airno",
      "Selector":row=>row.airno,
      selector:row=>row.airno,
      sortable:true,
    },
    {
      name:"HierarchyNo",
      "Selector":row=>row.hierarchyno,
      selector:row=>row.hierarchyno,
      sortable:true,
    },
    {
      name:"Name",
      "Selector":row=>row.name,
      selector:row=>row.name,
      sortable:true,
    },
    {
      name:"Group",
      "Selector":row=>row.groupcode,
      // selector:row=>row.groupcode,
        selector: row =>
    datas?.find(g => g.groupcode === row.groupcode)?.groupname || "",
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
        <Typography>Hierarchy</Typography>
         {/* ------------ FORM SUBMIT  USING FORMIK ------------ */}
        <form onSubmit={formik.handleSubmit}>
        <Container sx={{mt:2,display:"flex",gap:2}}>
         
        <Box>
          <FormControl fullWidth>
          <TextField
          size='small'
          label="HierarchyNo"
          variant="outlined"
          name="hierarchyno"
          fullWidth
          value={formik.values.hierarchyno}
          onChange={formik.handleChange}
           error={formik.touched.hierarchyno && Boolean(formik.errors.hierarchyno)}
                    helperText={formik.touched.hierarchyno && formik.errors.hierarchyno}
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
         
          />
          </FormControl>
        </Box>
        <Box>
          <FormControl fullWidth >
          <TextField
          size='small'
          label="HierarchyName"
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
      <Box>
          <FormControl fullWidth>
 <Autocomplete
  size="small"
  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" ,width: 250  } }}
  options={groupOptions}
  value={formik.values.groupcode || null}
  getOptionLabel={(option) => option?.name || ""}
  isOptionEqualToValue={(option, value) =>
    option.code === value?.code
  }
  onChange={(e, value) =>
    
    formik.setFieldValue("groupcode", value)
    
  }
  renderInput={(params) => (
    <TextField {...params} label="Group" />
  )}
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