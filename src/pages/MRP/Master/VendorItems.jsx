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
import { useVendorItems } from "../../../hooks/MRP/Master/useVendorItems";

export default function VendorItems() {
  const { VendorItemsData, VendorItemsSave, data, loading } =
    useVendorItems();

  const [formData, setFormData] = useState({
    VendorCode: "",
    ItemCode: "",
    LeadTime: "",
    Approved_Rate_EOU: "",
    Approved_Rate_DTA: "",
    Rate_Approval_Reqested_On: "",
    Rate_Approved_On: "",
    Approved_By: "",
    PriceInFC: "",
    TNGST: "",
    CST: "",
    Duty: "",
    Freight: "",
    Clearing_Charges: "",
    Others: "",
    Vendor_Commission: "",
    EOU_Cost: "",
    DTA_Cost: "",
    CGST: "",
    IGST: "",
    SGST: "",
    AirNo: "",
    Ltr_Cost: "",
    Jw_Cost: "",
    Active: 1,
    User1: "",
    Comments1: "",
    User2: "",
    Comments2: "",
    VendorSLADate: "",
    Price_Revision_Type: "",
    Requested_by: "",
    Purchase_Volume: "",
    Old_EOU_Cost: "",
    Old_DTA_Cost: "",
    Quality_Approval: "",
    NegotationDone: 0,
    OneTimePo: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("VENDOR ITEM SAVE:", formData);
    VendorItemsSave(formData);
  };

  useEffect(() => {
    VendorItemsData();
  }, []);

  const columns = [
    { name: "Vendor", selector: r => r.VendorCode, sortable: true },
    { name: "Item", selector: r => r.ItemCode, sortable: true },
    { name: "EOU Rate", selector: r => r.Approved_Rate_EOU },
    { name: "DTA Rate", selector: r => r.Approved_Rate_DTA },
    { name: "Lead Time", selector: r => r.LeadTime },
    { name: "Active", selector: r => r.Active },
  ];

  return (
    <>
      {/* ================= FORM ================= */}
      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2} variant="h6">
            Vendor Item 
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>

            {[
              ["VendorCode", "Vendor Code"],
              ["ItemCode", "Item Code"],
              ["LeadTime", "Lead Time"],
              ["Approved_Rate_EOU", "Approved Rate EOU"],
              ["Approved_Rate_DTA", "Approved Rate DTA"],
              ["PriceInFC", "Price in FC"],
              ["Vendor_Commission", "Vendor Commission"],
              ["EOU_Cost", "EOU Cost"],
              ["DTA_Cost", "DTA Cost"],
              ["Purchase_Volume", "Purchase Volume"],
              ["Old_EOU_Cost", "Old EOU Cost"],
              ["Old_DTA_Cost", "Old DTA Cost"],
              ["Quality_Approval", "Quality Approval"],
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
              ["Rate_Approval_Reqested_On", "Rate Requested On"],
              ["Rate_Approved_On", "Rate Approved On"],
              ["VendorSLADate", "Vendor SLA Date"],
              ["User1", "User1 Date"],
              ["User2", "User2 Date"],
            ].map(([name, label]) => (
              <Box key={name} sx={{ flex: "1 1 180px" }}>
                <TextField
                  type="date"
                  name={name}
                  label={label}
                  size="small"
                  InputLabelProps={{ shrink: true }}
                  onChange={handleChange}
                  fullWidth
                />
              </Box>
            ))}

            {/* Taxes & Charges */}
            {[
              ["TNGST", "TN GST"],
              ["CST", "CST"],
              ["Duty", "Duty"],
              ["Freight", "Freight"],
              ["Clearing_Charges", "Clearing Charges"],
              ["Others", "Others"],
              ["CGST", "CGST"],
              ["IGST", "IGST"],
              ["SGST", "SGST"],
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

            {/* Flags / Numbers */}
            {[
              ["Approved_By", "Approved By"],
              ["Requested_by", "Requested By"],
              ["Price_Revision_Type", "Price Revision Type"],
              ["NegotationDone", "Negotiation Done"],
              ["OneTimePo", "One Time PO"],
              ["Active", "Active"],
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

            {/* Comments */}
            {[
              ["Comments1", "Comments 1"],
              ["Comments2", "Comments 2"],
            ].map(([name, label]) => (
              <Box key={name} sx={{ flex: "1 1 260px" }}>
                <TextField
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
            title="Vendor Item Rate List"
            columns={columns}
            data={data || []}
            loading={loading}
          />
        </CardContent>
      </Card>
    </>
  );
}
