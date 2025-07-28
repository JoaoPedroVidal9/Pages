import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState} from "react";
import api from "../axios/axios"

function CardPost() {
    const [info, setInfo] = useState([]);
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await api.getPosts();
        setInfo(response.data);
      } catch (error) {
        console.log("Erro, ", error);
      }
    }
    getPosts();
  }, []);

//   console.log(info);
    return (
        <div>
            {info.map(post=>(
                <Card>
                    <CardContent key={post.id}>
                        <h1>POST {post.id}</h1>
                        <Typography>{post.title}</Typography>                        
                        <Typography>{post.body}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div> 
    );
}
export default CardPost;