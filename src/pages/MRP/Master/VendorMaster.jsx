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
import { useVendorMaster } from "../../../hooks/MRP/Master/useVendorMaster";

export default function VendorMaster() {
  const { VendorMasterData, VendorMasterSave, data, loading } = useVendorMaster();

  const [formData, setFormData] = useState({
    Code: "",
    Name: "",
    Add1: "",
    Add2: "",
    Add3: "",
    City: "",
    PinCode: "",
    State: "",
    Country: "",
    Phone: "",
    Fax: "",
    Email: "",
    ContactPerson: "",
    Approved: "",
    TNGSTNo: "",
    CstNo: "",
    TIN_No: "",
    CurrencyUnit: "",
    Payment_Terms: "",
    Port_of_loading: "",
    Shipment_Term: "",
    TNGST: "",
    CST: "",
    Duty: "",
    Others: "",
    Freight: "",
    IECode: "",
    FALinkCode: "",
    VendorType: "",
    mcompany: "",
    CreatedBy: "",
    Active: 1,
    PaymentType: "",
    Paymentindays: "",
    ShipmentTerms: "",
    co_fslisl: 0,
    Vef: 0,
    RegCertificate: 0,
    PAN_No: "",
    RSL_Status: "",
    RSL_ExpiryDate: "",
    CommonCode: "",
    GstNo: "",
    CGST: "",
    IGST: "",
    SGST: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("VENDOR SAVE DATA:", formData);
    VendorMasterSave(formData);
  };

  useEffect(() => {
    VendorMasterData();
  }, []);

  const columns = [
    { name: "Code", selector: r => r.Code, sortable: true },
    { name: "Name", selector: r => r.Name, sortable: true },
    { name: "City", selector: r => r.City },
    { name: "Phone", selector: r => r.Phone },
    { name: "Email", selector: r => r.Email },
    { name: "GST No", selector: r => r.GstNo },
    { name: "Active", selector: r => r.Active },
  ];

  return (
    <>
      {/* ================= FORM ================= */}
      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2} variant="h6">
            Vendor Master
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>

            {[
              ["Code", "Vendor Code"],
              ["Name", "Vendor Name"],
              ["Add1", "Address 1"],
              ["Add2", "Address 2"],
              ["Add3", "Address 3"],
              ["City", "City"],
              ["PinCode", "Pin Code"],
              ["State", "State"],
              ["Country", "Country"],
              ["Phone", "Phone"],
              ["Fax", "Fax"],
              ["Email", "Email"],
              ["ContactPerson", "Contact Person"],
              ["Approved", "Approved (Y/N)"],
              ["TNGSTNo", "TN GST No"],
              ["CstNo", "CST No"],
              ["TIN_No", "TIN No"],
              ["CurrencyUnit", "Currency Unit"],
              ["Payment_Terms", "Payment Terms"],
              ["Port_of_loading", "Port of Loading"],
              ["Shipment_Term", "Shipment Term"],
              ["IECode", "IE Code"],
              ["FALinkCode", "FA Link Code"],
              ["PAN_No", "PAN No"],
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
            <Box sx={{ flex: "1 1 180px" }}>
              <TextField
                type="date"
                name="RSL_ExpiryDate"
                label="RSL Expiry Date"
                size="small"
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
                fullWidth
              />
            </Box>

            {/* Numbers */}
            {[
              ["TNGST", "TN GST %"],
              ["CST", "CST %"],
              ["Duty", "Duty %"],
              ["Others", "Others %"],
              ["Freight", "Freight %"],
              ["CGST", "CGST %"],
              ["IGST", "IGST %"],
              ["SGST", "SGST %"],
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

            {/* Flags */}
            {[
              ["VendorType", "Vendor Type"],
              ["PaymentType", "Payment Type"],
              ["Paymentindays", "Payment in Days"],
              ["co_fslisl", "Co FSL List"],
              ["Vef", "VEF"],
              ["RegCertificate", "Reg Certificate"],
              ["RSL_Status", "RSL Status"],
              ["CommonCode", "Common Code"],
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
            title="Vendor Master List"
            columns={columns}
            data={data || []}
            loading={loading}
          />
        </CardContent>
      </Card>
    </>
  );
}
