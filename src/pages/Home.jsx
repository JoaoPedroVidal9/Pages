import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";

function Home() {
  return (
    <Box sx={{ margin:0, padding:0, display:"flex", justifyContent:"space-evenly", alignItems:"center", flexDirection:"column",}}>
      <Header/>
      <Link to="/posts"> Para os Posts</Link>
      <Link to="/users"> Para os Users</Link>
      <Link to="/todos"> Para os ToDos</Link>
    </Box>
  );
}
export default Home;
