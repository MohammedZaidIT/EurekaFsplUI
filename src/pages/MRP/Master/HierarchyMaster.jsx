import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import AdvancedDataTable from "../../../layout/AdvancedDataTable";
import { useEffect,useState } from "react";
import { useHierarchyMaster } from "../../../hooks/MRP/Master/useHierarchyMaster";


export default function HierarchyMaster() {
  const { HierarchyData, data, loading, error,HierarchySave } = useHierarchyMaster();
  const[formData,setFormData]=useState({
     airno: "",
    hierarchyno: "",
    name: "",
    groupcode: "",
  })

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
function handelSave(){
  console.log("FORM DATA TO SAVE:", formData);
    HierarchySave(formData);
  }
  useEffect(()=>{
    HierarchyData();
  },[])
   const columns = [
    {
      name: "AirNo",
      selector: row => row.airno,
      sortable: true,
    },
    {
      name: "Hierarchyno",
      selector: row => row.hierarchyno,
      sortable: true,
    },
    {
      name: "Name",
      selector: row => row.name,
      sortable: true,
    },
    {
      name: "Group Code",
      selector: row => row.groupcode,
      sortable: true,
    }
  ];

  
  return (
    <><Card>
  <CardContent>
    <Typography fontWeight="bold" sx={{ mb: 2 }} variant="h6">
      Hierarchy Master
    </Typography>

    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
      {/* hierarchyno*/}
      <Box sx={{ flex: "1 1 180px", minWidth: 180 }}>
        <FormControl fullWidth>
          <TextField
            name="hierarchyno"
            size="small"
            label="hierarchyno"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>

      {/*  Name */}
      <Box sx={{ flex: "1 1 220px", minWidth: 220 }}>
        <FormControl fullWidth>
          <TextField
            name="name"
            size="small"
            label="Name"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>

      {/* Group Code */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="groupcode"
            size="small"
            label="groupcode"
            type="number"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>

      
      {/* Save Button */}
      <Box sx={{ flex: "0 0 100px" }}>
        <Button
        onClick={handelSave}
          variant="outlined"
          fullWidth
          sx={{ height: 40 }}
        >
          Save
        </Button>          </Box>
        </Box>
      </CardContent>
    </Card>
    <br></br>
    <Card>
      <CardContent>

         {/* ------------ DATA TABLE ------------ */}
        
           <AdvancedDataTable
      title="Hierarchy Master List"
      columns={columns}
      data={data || []}
      loading={loading}
    />
         

</CardContent>
</Card>
</>

 );
}