const express = require("express");
const app=new express();
const cors = require("cors");
{/*const  i= express();*/}
const PORT = 3001;

require('./connection')
const BlogModel=require('./model/blogdata');
app.use(express.json());
app.use(cors());
app.post('/addblog',async (req,res)=>{
  try{
var item=req.body;
const datasave=new BlogModel(item);
const saveddata=await datasave.save();
res.send('post successful')
  }catch(error){

  }
}
)
app.get('/get', async (req, res) => {
  try {
    const data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log('data not found');
  }
});

app.delete('/remove/:id',async (req,res)=>{
  try{
      await BlogModel.findByIdAndDelete(req.params.id);
      res.send('deleted succesfully')
  }
  catch(error){
      console.log(error)
  }
})
app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
