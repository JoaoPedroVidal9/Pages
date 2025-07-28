import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState} from "react";
import api from "../axios/axios"

function CardTodo() {
    const [info, setInfo] = useState([]);
  useEffect(() => {
    async function getTodos() {
      try {
        const response = await api.getTodos();
        setInfo(response.data);
      } catch (error) {
        console.log("Erro, ", error);
      }
    }
    getTodos();
  }, []);

//   console.log(info);
    return (
        <div>
            {info.map(todo=>(
                <Card>
                    <CardContent key={todo.id}>
                        <h1>To Do {todo.id}</h1>
                        <Typography>{todo.title}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div> 
    );
}
export default CardTodo;