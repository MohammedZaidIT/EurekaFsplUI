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
import { useItemMaster } from "../../../hooks/MRP/Master/useItemMaster";

export default function ItemMaster() {
  const { ItemMasterData, ItemMasterSave, data, loading } = useItemMaster();

  const [formData, setFormData] = useState({
    GroupCode: "",
    ItemCode: "",
    Name: "",
    Uom1: "",
    Uom2: "",
    Std: "",
    LeadTime: "",
    Remarks: "",
    ApprovedRate: "",
    Mark: 0,
    Hierarchy1: "",
    Hierarchy2: "",
    Hierarchy3: "",
    Hierarchy4: "",
    Hierarchy5: "",
    Name1: "",
    Name2: "",
    Imported: 0,
    SampleActive: 0,
    ProductionActive: 0,
    UsedFor: "",
    Origin: "",
    DaysBeforeCPDate: "",
    Preferred_Supplier: "",
    SizeDetails: 0,
    InventoryActive: 1,
    mcompany: "",
    Article_Specific: "",
    VAT_CommodityCode: "",
    Panel: "",
    Order_Multiples: "",
    In_BOM: 1,
    In_PO: 1,
    In_Indent: 1,
    CKD: 0,
    ImpCat: 0,
    IGCRCode: 0,
    HsCode: "",
    CostSheetGroup: "",
    Nav: "",
    NavCode: "",
    MSDS: 0,
    CMB: "",
    Price1: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("ITEM MASTER SAVE:", formData);
    ItemMasterSave(formData);
  };

  useEffect(() => {
    ItemMasterData();
  }, []);

  const columns = [
    { name: "Item Code", selector: r => r.ItemCode, sortable: true },
    { name: "Name", selector: r => r.Name, sortable: true },
    { name: "Group", selector: r => r.GroupCode },
    { name: "UOM", selector: r => r.Uom1 },
    { name: "Rate", selector: r => r.ApprovedRate },
    { name: "Lead Time", selector: r => r.LeadTime },
    { name: "Active", selector: r => r.InventoryActive },
  ];

  return (
    <>
      {/* ================= FORM ================= */}
      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2} variant="h6">
            Item Master
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>

            {[
              ["GroupCode", "Group Code"],
              ["ItemCode", "Item Code"],
              ["Name", "Item Name"],
              ["Name1", "Alt Name 1"],
              ["Name2", "Alt Name 2"],
              ["Uom1", "UOM 1"],
              ["Uom2", "UOM 2"],
              ["Std", "Std Qty"],
              ["ApprovedRate", "Approved Rate"],
              ["LeadTime", "Lead Time"],
              ["Origin", "Origin"],
              ["Hierarchy1", "Hierarchy 1"],
              ["Hierarchy2", "Hierarchy 2"],
              ["Hierarchy3", "Hierarchy 3"],
              ["Hierarchy4", "Hierarchy 4"],
              ["Hierarchy5", "Hierarchy 5"],
              ["Remarks", "Remarks"],
              ["UsedFor", "Used For"],
              ["Preferred_Supplier", "Preferred Supplier"],
              ["DaysBeforeCPDate", "Days Before CP"],
              ["Order_Multiples", "Order Multiples"],
              ["HsCode", "HS Code"],
              ["NavCode", "Nav Code"],
              ["Price1", "Price"],
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
            title="Item Master List"
            columns={columns}
            data={data || []}
            loading={loading}
          />
        </CardContent>
      </Card>
    </>
  );
}
