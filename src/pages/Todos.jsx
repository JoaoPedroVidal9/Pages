import { Box } from "@mui/material";
import CardTodos from "../components/CardTodos.jsx";
import Header from "../components/Header.jsx";
function Todos() {
        return(
        <Box>
            <Header/>
            <CardTodos/>
        </Box>
    )
}
export default Todos;