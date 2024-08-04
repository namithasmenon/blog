const mongoose=require('mongoose')
const blogschema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});
const blogdata=mongoose.model('blogdetail',blogschema);
module.exports=blogdata;