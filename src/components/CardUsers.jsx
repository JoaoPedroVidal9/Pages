import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../axios/axios";

function CardUser() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await api.getUsers();
        setInfo(response.data);
      } catch (error) {
        console.log("Erro, ", error);
      }
    }
    getUsers();
  }, []);

  //   console.log(info);
  return (
    <div>
      {info.map((user) => (
        <Card>
          <CardContent key={user.id}>
            <h1>User {user.id}</h1>
            <Typography>{user.name}</Typography>
            <Typography>{user.email}</Typography>
            <Typography>{user.address.city}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default CardUser;
