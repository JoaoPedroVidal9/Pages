import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect, useState } from "react";

function Header() {
  const [pressed, setPressed] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (pressed) {
      navigate("/");
    }
  }, [pressed]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ff0000",
        width: "100%",
        margin: 0,
      }}
    >
      <div style={{ width: "43%" }}>
        <Button onClick={() => setPressed(true)} sx={{ color: "#000000" }}>
          <HomeIcon />
        </Button>
      </div>
      <div>
        <h1>Bem Vindo(a)!</h1>
      </div>
    </Box>
  );
}
export default Header;
