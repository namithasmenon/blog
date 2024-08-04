import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import axios from 'axios';
const Home = () => {
    const [rows,setRows] = useState([]);
    var navigate=useNavigate()
    function handleDelete(a){
        axios.delete('http://localhost:3000/remove/'+a).then((res)=>{
          alert("deleted")
          window.location.reload()
        }
        ).catch((error)=>{
          console.log('error:',error)
        }
        )
       }
    useEffect(() => {
        axios.get('http://localhost:3001/get')
          .then((res) => {
            setRows(res.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
  return (
    <Grid container spacing={3} sx={{paddingLeft: 4, paddingRight: 4}}>
    {rows.map((row) => (
        <Grid style={{marginTop:"3%"}} item key={row.id} xs={12} sm={6} md={4} >
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <img src={row.img_url} alt={row.title} width="400" height="250" />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {row.title}
        </Typography>
        <Typography variant="h5" component="div">
            {row.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button style={{backgroundColor:'purple',color:"white"}} >Delete</Button>
        <Button onClick={() => handleDelete(row._id)}  style={{backgroundColor:'purple',color:"white"}}>Update</Button>
      </CardActions>
    </Card>
    </Grid>
    ))}
  </Grid>
  )
}

export default Home