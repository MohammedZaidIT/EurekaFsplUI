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
import { useCompanyMaster } from "../../../hooks/MRP/Master/useCompanyMaster";

export default function CompanyMaster() {
  const { CompanyData, CompanySave, data, loading } = useCompanyMaster();

  const [formData, setFormData] = useState({
    Code: "",
    Name: "",
    ShortName: "",
    Add1: "",
    Add2: "",
    Add3: "",
    City: "",
    PinCode: "",
    Phone: "",
    ContactPerson: "",
    PfNo: "",
    EsiNo: "",
    TNGSTNo: "",
    CSTNo: "",
    SDate: "",
    EDate: "",
    RBICode: "",
    Deliver_At: "",
    email: "",
    CompanyName: "",
    Fax: "",
    ApplicableItemGroup: "",
    IndentUsers: "",
    POUsers: "",
    PackingIndent: 0,
    StationaryIndent: 0,
    LeatherIndent: 0,
    MaterialIndent: 0,
    Products: "",
    DeliveryAt: "",
    PoDeleteRight: "",
    NoofEmployee: 0,
    LMD: "",
    Active: 1,
    GstNo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("COMPANY SAVE DATA:", formData);
    CompanySave(formData);
  };

  useEffect(() => {
    CompanyData();
  }, []);

  const columns = [
    { name: "Code", selector: r => r.Code },
    { name: "Name", selector: r => r.Name },
    { name: "City", selector: r => r.City },
    { name: "Phone", selector: r => r.Phone },
    { name: "Email", selector: r => r.email },
    { name: "GST No", selector: r => r.GstNo },
    { name: "Employees", selector: r => r.NoofEmployee },
    { name: "Active", selector: r => r.Active },
  ];

  return (
    <>
      {/* ================= FORM ================= */}
      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2} variant="h6">
            Company Master
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>

            {[
              ["Code", "Code"],
              ["Name", "Company Name"],
              ["ShortName", "Short Name"],
              ["CompanyName", "Company Legal Name"],
              ["Add1", "Address 1"],
              ["Add2", "Address 2"],
              ["Add3", "Address 3"],
              ["City", "City"],
              ["PinCode", "Pin Code"],
              ["Phone", "Phone"],
              ["Fax", "Fax"],
              ["email", "Email"],
              ["ContactPerson", "Contact Person"],
              ["PfNo", "PF No"],
              ["EsiNo", "ESI No"],
              ["TNGSTNo", "TN GST No"],
              ["CSTNo", "CST No"],
              ["RBICode", "RBI Code"],
              ["Deliver_At", "Deliver At"],
              ["DeliveryAt", "Delivery At"],
              ["ApplicableItemGroup", "Applicable Item Group"],
              ["IndentUsers", "Indent Users"],
              ["POUsers", "PO Users"],
              ["Products", "Products"],
              ["PoDeleteRight", "PO Delete Right"],
              ["GstNo", "GST No"],
            ].map(([name, label]) => (
              <Box key={name} sx={{ flex: "1 1 220px" }}>
                <FormControl fullWidth>
                  <TextField
                    name={name}
                    label={label}
                    size="small"
                    onChange={handleChange}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "7px" } }}
                  />
                </FormControl>
              </Box>
            ))}

            {/* Dates */}
            {[
              ["SDate", "Start Date"],
              ["EDate", "End Date"],
              ["LMD", "Last Modified"],
            ].map(([name, label]) => (
              <Box key={name} sx={{ flex: "1 1 180px" }}>
                <TextField
                  type="date"
                  name={name}
                  label={label}
                  size="small"
                  slotProps={{ shrink: true }}
                  onChange={handleChange}
                  fullWidth
                />
              </Box>
            ))}

            {/* Numbers */}
            {[
              ["PackingIndent", "Packing Indent"],
              ["StationaryIndent", "Stationary Indent"],
              ["LeatherIndent", "Leather Indent"],
              ["MaterialIndent", "Material Indent"],
              ["NoofEmployee", "No of Employees"],
            ].map(([name, label]) => (
              <Box key={name} sx={{ flex: "1 1 160px" }}>
                <TextField
                  type="number"
                  name={name}
                  label={label}
                  size="small"
                  onChange={handleChange}
                  fullWidth
                />
              </Box>
            ))}

            {/* Active */}
            <Box sx={{ flex: "1 1 120px" }}>
              <TextField
                name="Active"
                label="Active (1/0)"
                size="small"
                onChange={handleChange}
                fullWidth
              />
            </Box>

            {/* Save */}
            <Box sx={{ flex: "0 0 120px" }}>
              <Button
                variant="outlined"
                fullWidth
                sx={{ height: 40 }}
                onClick={handleSave}
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
            title="Company Master List"
            columns={columns}
            data={data || []}
            loading={loading}
          />
        </CardContent>
      </Card>
    </>
  );
}
