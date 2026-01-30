// -----------------------------------------------------------------------------
// AdvancedDataTable.jsx  (RESPONSIVE + FIXED COLUMN VISIBILITY)
// -----------------------------------------------------------------------------

import React, { useState, useMemo } from "react";
import {
  Box,
  Button,
  Popover,
  Checkbox,
  FormControlLabel,
  Divider,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import { Export, Eye, SearchNormal1 } from "iconsax-reactjs";

// -----------------------------------------------------------------------------
// 🔍 SEARCH BOX
// -----------------------------------------------------------------------------
const SearchBox = ({ value, onChange }) => (
  <Box>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: "#fff",
        border: "2px solid #dce6ff",
        padding: "10px 14px",
        borderRadius: "12px",
        width: "100%",
        "&:focus-within": {
          borderColor: "#4c8dff",
          boxShadow: "0 0 6px rgba(76,141,255,0.35)",
        },
      }}
    >
      <SearchNormal1 size="24" color="#5a5a5a" />
      <input
        value={value}
        onChange={onChange}
        placeholder="Search"
        style={{
          border: "none",
          outline: "none",
          marginLeft: "12px",
          fontSize: "16px",
          width: "100%",
        }}
      />
    </Box>
  </Box>
);

// -----------------------------------------------------------------------------
// MAIN COMPONENT
// -----------------------------------------------------------------------------
export default function AdvancedDataTable({ title, columns, data, loading }) {
  // ---------------- Column Visibility ----------------
  const [visibleColumns, setVisibleColumns] = useState(
    Object.fromEntries(columns.map((c) => [c.selectorKey, true]))
  );

  const finalColumns = useMemo(
    () => columns.filter((c) => visibleColumns[c.selectorKey]),
    [columns, visibleColumns]
  );

  // ---------------- Search ----------------
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    if (!search) return data;
    return data.filter((row) =>
      Object.values(row).join(" ").toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  // ---------------- Export Menu ----------------
  const [exportAnchor, setExportAnchor] = useState(null);
  const openExportMenu = (e) => setExportAnchor(e.currentTarget);
  const closeExportMenu = () => setExportAnchor(null);

  const exportCSV = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, `${title || "table"}.csv`);
    closeExportMenu();
  };

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, `${title || "table"}.xlsx`);
    closeExportMenu();
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [finalColumns.map((c) => c.name)],
      body: filteredData.map((row) =>
        finalColumns.map((c) => row[c.selectorKey] ?? "")
      ),
    });
    doc.save(`${title || "table"}.pdf`);
    closeExportMenu();
  };

  const printTable = () => {
    const win = window.open("", "", "width=900,height=650");
    win.document.write("<html><body><table border='1' style='width:100%;border-collapse:collapse'>");

    win.document.write("<tr>");
    finalColumns.forEach((c) => win.document.write(`<th>${c.name}</th>`));
    win.document.write("</tr>");

    filteredData.forEach((row) => {
      win.document.write("<tr>");
      finalColumns.forEach((c) =>
        win.document.write(`<td>${row[c.selectorKey] ?? ""}</td>`)
      );
      win.document.write("</tr>");
    });

    win.document.write("</table></body></html>");
    win.print();
    closeExportMenu();
  };

  // ---------------- Column Popover ----------------
  const [colAnchor, setColAnchor] = useState(null);

  // ---------------- Table Styles ----------------
  const customStyles = {
    headRow: { style: { backgroundColor: "#F4F4F4", minHeight: "48px", fontSize:"18px", fontWeight:"Bold", fontFamily:"" } },
    rows: {
      style: {
        minHeight: "56px",
        "&:nth-of-type(odd)": { background: "#fafafa" },
      },
    },
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        gap={2}
        sx={{
          mb: 2,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* LEFT: Export + Columns */}
        <Box
          display="flex"
          gap={2}
          sx={{
            width: { xs: "100%", sm: "auto" },
            justifyContent: { xs: "space-between", sm: "flex-start" },
          }}
        >
          <Button variant="outlined" startIcon={<Export />} onClick={openExportMenu}>
            Export
          </Button>

          <Button
            variant="outlined"
            startIcon={<Eye />}
            onClick={(e) => setColAnchor(e.currentTarget)}
          >
            Columns
          </Button>
        </Box>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* RIGHT: Search */}
        <Box sx={{ width: { xs: "100%", sm: "360px" } }}>
          <SearchBox value={search} onChange={(e) => setSearch(e.target.value)} />
        </Box>
      </Box>

      {/* ---------------- Export Menu ---------------- */}
      <Menu open={Boolean(exportAnchor)} anchorEl={exportAnchor} onClose={closeExportMenu}>
        <MenuItem onClick={exportPDF}>PDF</MenuItem>
        <MenuItem onClick={exportExcel}>Excel</MenuItem>
        <MenuItem onClick={exportCSV}>CSV</MenuItem>
        <MenuItem onClick={printTable}>Print</MenuItem>
      </Menu>

      {/* ---------------- Column Visibility ---------------- */}
      <Popover
        open={Boolean(colAnchor)}
        anchorEl={colAnchor}
        onClose={() => setColAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Box p={2} width={240} sx={{ maxHeight: 300, overflowY: "auto" }}>
          <Typography fontWeight="bold">Show / Hide Columns</Typography>

          <Box display="flex" gap={2} mt={1} mb={1}>
            <Button
              size="small"
              onClick={() =>
                setVisibleColumns(
                  Object.fromEntries(columns.map((c) => [c.selectorKey, true]))
                )
              }
            >
              All
            </Button>

            <Button
              size="small"
              onClick={() =>
                setVisibleColumns(
                  Object.fromEntries(columns.map((c) => [c.selectorKey, false]))
                )
              }
            >
              None
            </Button>
          </Box>

          <Divider />

          {columns.map((col) => (
            <FormControlLabel
              key={col.selectorKey}
              control={
                <Checkbox
                  checked={visibleColumns[col.selectorKey]}
                  onChange={() =>
                    setVisibleColumns((prev) => ({
                      ...prev,
                      [col.selectorKey]: !prev[col.selectorKey],
                    }))
                  }
                />
              }
              label={col.name}
            />
          ))}
        </Box>
      </Popover>

      {/* ================= DATA TABLE ================= */}
      <Box
        sx={{
          background: "#fff",
          borderRadius: "16px",
          border: "1px solid #E0E0E0",
          overflow: "hidden",
          boxShadow: "0 3px 8px rgba(0,0,0,0.05)",
        }}
      >
        <DataTable
          columns={finalColumns}
          data={filteredData}
          customStyles={customStyles}
          highlightOnHover
          progressPending={loading}
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 50]}
          noDataComponent="No records found"
        />
      </Box>
    </>
  );
}
