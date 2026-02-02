import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import AdvancedDataTable from "../../../layout/AdvancedDataTable";
import { useEffect,useState } from "react";
import { useExchangeRate } from "../../../hooks/MRP/Master/useExchangeRate";
import { ExchangeRateValidation } from "../../../validation/MRP/Master/ExchangeRateValidation";
import { Add, Edit, Trash } from "iconsax-reactjs";

export default function ExchangeRate() {
  const { ExchangeRateData, data, loading, error,ExchangeRateSave,ExchangeRateUpdate } = useExchangeRate();
  const [errors,setErrors]=useState({});
  const [isEditing, setIsEditing] = useState(false);
  
  const[formData,setFormData]=useState({
     currency_unit: "",
    currency_name: "",
    import_rate: "",
    export_rate: "",
    // CostingExportRate: "",
    costingexportrate:"",
  })

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

function handelSave(){
  const validationErrors = ExchangeRateValidation(formData);
  setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    try {
      isEditing ? ExchangeRateUpdate(formData) :ExchangeRateSave(formData);
      //Success path
      alert("Exchange Rate Updated successfully!");
      //Clear form
      setFormData({
        currency_unit: "",
        currency_name: "",
        import_rate: "",
        export_rate: "",
        costingexportrate: "",
      });
      //Refresh list → new record appears
       ExchangeRateData();

    } catch (err) {
      // Handle server validation or other errors
      if (err.response?.data?.errors) {
      } else {
        alert("Save failed: " + (err.message || "Unknown error"));
      }
    }
  
  }


  useEffect(()=>{
    ExchangeRateData();
  },[])


  // ---------------------- EDIT HANDLER ----------------------
  const handleEdit = (row) => {
   setIsEditing(true);
    setFormData({ 
      currency_unit: row.currency_unit,
      currency_name: row.currency_name,
      import_rate: row.import_rate,
      export_rate: row.export_rate,
      costingexportrate: row.costingexportrate,
    });
  };



  // ---------------------- DELETE HANDLER ----------------------
  const handleDelete = async (row) => {
  
  };

const columns = [
  {
    name: "Currency Unit",
    selectorKey: "currency_unit",
    selector: row => row.currency_unit,
    sortable: true,
  },
  {
    name: "Currency Name",
    selectorKey: "currency_name",
    selector: row => row.currency_name,
    sortable: true,
  },
  {
    name: "Import Rate",
    selectorKey: "import_rate",
    selector: row => row.import_rate,
    sortable: true,
  },
  {
    name: "Export Rate",
    selectorKey: "export_rate",
    selector: row => row.export_rate,
    sortable: true,
  },
  {
    name: "Costing Rate",
    selectorKey: "CostingExportRate",
    selector: row => row.costingexportrate,
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
    <><Card>
  <CardContent>
    <Typography fontWeight="bold" sx={{ mb: 2 }} variant="h6">
      Exchange Rate
    </Typography>

    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, alignItems: "center" }}>
      {/* Currency Unit */}
      <Box sx={{ flex: "1 1 180px", minWidth: 180 }}>
        <FormControl fullWidth>
          <TextField
            name="currency_unit"
            disabled={isEditing}  
            size="small"
            label="Currency Unit"
            onChange={handleChange}
             error={!!errors.currency_unit}
                    helperText={errors.currency_unit}
                    value={formData.currency_unit}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
            
          />
        </FormControl>
      </Box>

      {/* Currency Name */}
      <Box sx={{ flex: "1 1 220px", minWidth: 220 }}>
        <FormControl fullWidth>
          <TextField
            name="currency_name"
            size="small"
            label="Currency Name"
            onChange={handleChange}
            error={!!errors.currency_name}
            helperText={errors.currency_name}
            value={formData.currency_name}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>

      {/* Import Rate (SMALL) */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="import_rate"
            size="small"
            label="Import"
            type="number"
            onChange={handleChange}
            error={!!errors.import_rate}
            helperText={errors.import_rate}
            value={formData.import_rate}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>

      {/* Export Rate (SMALL) */}
      <Box sx={{ flex: "0 0 120px" }}>
        <FormControl fullWidth>
          <TextField
            name="export_rate"
            size="small"
            label="Export"
            type="number"
            onChange={handleChange}
            error={!!errors.export_rate}
            helperText={errors.export_rate}
            value={formData.export_rate}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
          />
        </FormControl>
      </Box>

      {/* Costing Export Rate (SMALL) */}
      <Box sx={{ flex: "0 0 140px" }}>
        <FormControl fullWidth>
          <TextField
            name="costingexportrate"
            size="small"
            label="Costing"
            type="number"
            onChange={handleChange}
            error={!!errors.costingexportrate}
            helperText={errors.costingexportrate}
            value={formData.costingexportrate}
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
      title="Exchange Rate List"
      columns={columns}
      data={data || []}
      loading={loading}
    />
         
</CardContent>
</Card>
</>

 );
}