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
import { useCustomerMaster } from "../../../hooks/MRP/Master/useCustomerMaster";


export default function CustomerMaster() {
  const { CustomerData, data, loading, error,CustomerSave } = useCustomerMaster();
  const[formData,setFormData]=useState({
    code: "",
    customername: "",
    country: "",
    mktggroup: "",
    mcompany: "",
    lmd: "",
    createdby: "",
    paymentcode: "",
    hrcompanycode: "",
    csp: "",
    rsl_status: "",
    mktgmanager: "",
    mktggroup1:"",
    mktguser:"",
    isactive:"",
  })

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
function handelSave(){
  console.log("FORM DATA TO SAVE:", formData);
    CustomerSave(formData);
  }
  useEffect(()=>{
    CustomerData();
  },[])
   const columns = [
    {
      name: "code",
      selector: row => row.code,
      sortable: true,
    },
    {
      name: "customername",
      selector: row => row.customername,
      sortable: true,
    },
    {
      name: "country",
      selector: row => row.country,
      sortable: true,
    },
    {
      name: "mktggroup",
      selector: row => row.mktggroup,
      sortable: true,
    },
     {
      name: "mcompany",
      selector: row => row.mcompany,
      sortable: true,
    },
     {
      name: "lmd",
      selector: row => row.lmd,
      sortable: true,
    },
     {
      name: "createdby",
      selector: row => row.createdby,
      sortable: true,
    },
     {
      name: "paymentcode",
      selector: row => row.paymentcode,
      sortable: true,
    },
     {
      name: "hrcompanycode",
      selector: row => row.hrcompanycode,
      sortable: true,
    },
     {
      name: "csp",
      selector: row => row.csp,
      sortable: true,
    },
     {
      name: "rsl_status",
      selector: row => row.rsl_status,
      sortable: true,
    },
      {
      name: "mktgmanager",
      selector: row => row.mktgmanager,
      sortable: true,
    },
      {
      name: "mktggroup1",
      selector: row => row.mktggroup1,
      sortable: true,
    },
      {
      name: "mktguser",
      selector: row => row.mktguser,
      sortable: true,
    },
      {
      name: "isactive",
      selector: row => row.isactive,
      sortable: true,
    }
  ];

  
  return (
    <><Card>
  <CardContent>
    <Typography fontWeight="bold" sx={{ mb: 2 }} variant="h6">
      Customer Master
    </Typography>

    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
      {/* code*/}
      <Box sx={{ flex: "1 1 180px", minWidth: 180 }}>
        <FormControl fullWidth>
          <TextField
            name="code"
            size="small"
            label="code"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>

      {/*  customername */}
      <Box sx={{ flex: "1 1 220px", minWidth: 220 }}>
        <FormControl fullWidth>
          <TextField
            name="customername"
            size="small"
            label="customername"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>

      {/* country */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="country"
            size="small"
            label="country"

            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>
{/* mktggroup */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="mktggroup"
            size="small"
            label="mktggroup"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>
      {/* mcompany */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="mcompany"
            size="small"
            label="mcompany"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>
      {/* lmd */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="lmd"
            size="small"
            label="lmd"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>
      {/* createdby */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="createdby"
            size="small"
            label="createdby"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>
      {/* paymentcode */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="paymentcode"
            size="small"
            label="paymentcode"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>
      {/* hrcompanycode */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="hrcompanycode"
            size="small"
            label="hrcompanycode"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>
      {/* csp */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="csp"
            size="small"
            label="csp"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>
      {/* rsl_status */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="rsl_status"
            size="small"
            label="rsl_status"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>
      {/* mktgmanager */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="mktgmanager"
            size="small"
            label="mktgmanager"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>
      {/* mktggroup1 */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="mktggroup1"
            size="small"
            label="mktggroup1"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>

       {/* mktguser */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="mktguser"
            size="small"
            label="mktguser"
            onChange={handleChange}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>


       {/* isactive */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="isactive"
            size="small"
            label="isactive"
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
        </Button> </Box>
        </Box>
      </CardContent>
    </Card>
    <br></br>
    <Card>
      <CardContent>

         {/* ------------ DATA TABLE ------------ */}
        
           <AdvancedDataTable
      title="Customer Master List"
      columns={columns}
      data={data || []}
      loading={loading}
    />
         

</CardContent>
</Card>
</>

 );
}