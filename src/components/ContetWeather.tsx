import React from "react";
import "./Content.css";
import CloudIcon from "@mui/icons-material/Cloud";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ContetWeather = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "270px",
        }}
        className="title"
      >
        <Box>
          <h1 className="h1">25 °C</h1>
          <p>Portugalia</p>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "5rem",
          gap: "10rem",
        }}
      >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
            >
               humitidy
            </Typography>
            <Typography>
               humidity
            </Typography>
            <Typography>
               humidity
            </Typography>
          </CardContent>
        </Card>
        <CloudIcon sx={{fontSize:"100px"}}/>
      </Box>
    </Box>
  );
};

export default ContetWeather;
