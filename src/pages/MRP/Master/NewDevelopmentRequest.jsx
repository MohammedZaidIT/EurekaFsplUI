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
import { useNewDevelopmentRequest } from "../../../hooks/MRP/Master/useNewDevelopmentRequest";

export default function NewDevelopmentRequest() {
  const {
    NewDevelopmentRequestData,
    NewDevelopmentRequestSave,
    data,
    loading,
  } = useNewDevelopmentRequest();

  const [formData, setFormData] = useState({
    SNo: "",
    Date: "",
    GroupCode: "",
    RequestedBy: "",
    SOEFREF: "",
    Customer: "",
    Article: "",
    QtyRequired: "",
    Price: "",
    Order_Indication: "",
    DevelopmentDate: "",
    RequiredDate: "",
    Remarks: "",
    ItemDescription: "",
    ForProd_or_Sample: 0,
    UserNo: "",
    Remarks1: "",
    Remarks2: "",
    Remarks3: "",
    Remarks4: "",
    mcompany: "",
    Request_End: "",
    Rejected: 0,
    Rejection_Comments: "",
    MktgGroup: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("NEW DEVELOPMENT REQUEST SAVE:", formData);
    NewDevelopmentRequestSave(formData);
  };

  useEffect(() => {
    NewDevelopmentRequestData();
  }, []);

  const columns = [
    { name: "S.No", selector: r => r.SNo, sortable: true },
    { name: "Date", selector: r => r.Date },
    { name: "Group", selector: r => r.GroupCode },
    { name: "Customer", selector: r => r.Customer },
    { name: "Article", selector: r => r.Article },
    { name: "Qty", selector: r => r.QtyRequired },
    { name: "Required Date", selector: r => r.RequiredDate },
    { name: "Status", selector: r => (r.Rejected ? "Rejected" : "Open") },
  ];

  return (
    <>
      {/* ================= FORM ================= */}
      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2} variant="h6">
            New Development Request
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>

            {[
              ["GroupCode", "Group Code"],
              ["RequestedBy", "Requested By"],
              ["SOEFREF", "SO / EF Ref"],
              ["Customer", "Customer"],
              ["Article", "Article"],
              ["QtyRequired", "Qty Required"],
              ["Price", "Price"],
              ["Order_Indication", "Order Indication"],
              ["ItemDescription", "Item Description"],
              ["Remarks", "Remarks"],
              ["Remarks1", "Remarks 1"],
              ["Remarks2", "Remarks 2"],
              ["Remarks3", "Remarks 3"],
              ["Remarks4", "Remarks 4"],
              ["Rejection_Comments", "Rejection Comments"],
              ["MktgGroup", "Marketing Group"],
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
              ["Date", "Request Date"],
              ["DevelopmentDate", "Development Date"],
              ["RequiredDate", "Required Date"],
              ["Request_End", "Request End"],
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

            {/* Flags */}
            {[
              ["ForProd_or_Sample", "For Prod / Sample"],
              ["Rejected", "Rejected"],
              ["UserNo", "User No"],
              ["mcompany", "Company"],
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
            title="Development Request List"
            columns={columns}
            data={data || []}
            loading={loading}
          />
        </CardContent>
      </Card>
    </>
  );
}
