import { Typography, Box, Card, CardContent } from "@mui/material";

function Dashboard() {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Dashboard
      </Typography>

      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Typography variant="body1">
            Welcome to the Admin Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            User: {localStorage.getItem("userName")}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Dashboard;