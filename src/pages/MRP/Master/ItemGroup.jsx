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
import { useItemGroupMaster } from "../../../hooks/MRP/Master/useItemGroupMaster";

export default function ItemGroup() {
  const { ItemGroupData, ItemGroupSave, data, loading } = useItemGroupMaster();

  const [formData, setFormData] = useState({
    GroupCode: "",
    GroupName: "",
    Uom1: "",
    Uom2: "",
    UOM1S: "",
    UOM2S: "",
    Hierarchy1: "",
    Hierarchy2: "",
    Hierarchy3: "",
    Hierarchy4: "",
    Hierarchy5: "",
    Rights2Alter: "",
    Rights2Use: "",
    SubBomRequired: 0,
    _ListInMrp: 0,
    _SubBomEditingRights: "",
    Panel: "",
    VAT_CommodityCode: "",
    No_Aprd_Supplier: "",
    Article_Specific: 0,
    CostingGroup: "",
    Std_Norms: "",
    NonEditable_Article_Specific: "",
    CostSheetGroup: "",
    BatchValidation: 0,
    Nav: 0,
    OrderMultiples: 0,
    Width: 0,
    MRIGroup: 0,
    CMB: "",
    HsCode: "",
    CGst: "",
    SGst: "",
    IGst: "",
    Bcd: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("ITEM GROUP SAVE:", formData);
    ItemGroupSave(formData);
  };

  useEffect(() => {
    ItemGroupData();
  }, []);

  const columns = [
    { name: "GCode", selector: r => r.groupcode, sortable: true },
    { name: "G Name", selector: r => r.groupname, sortable: true },
    { name: "UOM1", selector: r => r.uom1 },
    { name: "UOM2", selector: r => r.uom2 },
    { name: "Hir1", selector: r => r.hierarchy1 },
    { name: "Hir2", selector: r => r.hierarchy2 },
    { name: "Hir3", selector: r => r.hierarchy3 },
    { name: "Hir4", selector: r => r.hierarchy4 },
    { name: "Hir5", selector: r => r.hierarchy5 },
    { name: "Active", selector: r => r._ListInMrp },
  ];

  return (
    <>
      {/* ================= FORM ================= */}
      <Card>
        <CardContent>
          <Typography fontWeight="bold" mb={2} variant="h6">
            Item Group Master
          </Typography>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>

            {[
              ["GroupCode", "Group Code"],
              ["GroupName", "Group Name"],
              ["Uom1", "UOM 1"],
              ["Uom2", "UOM 2"],
              ["UOM1S", "UOM 1 (Short)"],
              ["UOM2S", "UOM 2 (Short)"],
              ["Hierarchy1", "Hierarchy 1"],
              ["Hierarchy2", "Hierarchy 2"],
              ["Hierarchy3", "Hierarchy 3"],
              ["Hierarchy4", "Hierarchy 4"],
              ["Hierarchy5", "Hierarchy 5"],
              ["Rights2Alter", "Rights To Alter"],
              ["Rights2Use", "Rights To Use"],
              ["_SubBomEditingRights", "SubBom Editing Rights"],
              ["Panel", "Panel"],
              ["VAT_CommodityCode", "VAT Commodity Code"],
              ["No_Aprd_Supplier", "Approved Supplier Count"],
              ["CostingGroup", "Costing Group"],
              ["Std_Norms", "Std Norms"],
              ["NonEditable_Article_Specific", "Non Editable Article"],
              ["CostSheetGroup", "Cost Sheet Group"],
              ["CMB", "CMB"],
              ["HsCode", "HS Code"],
              ["CGst", "CGST"],
              ["SGst", "SGST"],
              ["IGst", "IGST"],
              ["Bcd", "BCD"],
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

            {/* Flags / Numbers */}
            {[
              ["SubBomRequired", "Sub BOM Required"],
              ["_ListInMrp", "List In MRP"],
              ["Article_Specific", "Article Specific"],
              ["BatchValidation", "Batch Validation"],
              ["Nav", "Nav"],
              ["OrderMultiples", "Order Multiples"],
              ["Width", "Width"],
              ["MRIGroup", "MRI Group"],
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
            title="Item Group List"
            columns={columns}
            data={data || []}
            loading={loading}
          />
        </CardContent>
      </Card>
    </>
  );
}
