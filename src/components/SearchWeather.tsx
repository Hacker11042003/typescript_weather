import React from "react";
import "./Search.css";
import { Input, Button, Box } from "@mui/material";

const SearchWeather = () => {
  return (
    <Box>
      <div className="search">
        <Input
          sx={{
            background: "#F5F5F5",
            width: "500px",
            padding: "5px 30px",
            borderRadius: "5px",
          }}
          placeholder="Type in here…"
        />
        <Button sx={{background:"#87CEFA",padding:"10px 25px",color:"#2F4F4F"}}>Search</Button>
      </div>
    </Box>
  );
};

export default SearchWeather;
