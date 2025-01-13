

const items = require('./src/models/test');
 const test =(app)=>{
  app.get('/',async(req,res)=>{
    console.log("Hit / endpioint ");
    // const {name,price,des} = req.body;
    try {
      let obj = {
        name: "Abhi phone",
        price : 99900,
        des: "This is best Phone "
      }
      const id = "random";
      let item = {
        ...obj , productId:id
      };
      
    const result = await items.create(item);
    console.log(result);
    if(!result){
      res.status(404).json({
        success:false,
        data:{
          mainData : null,
          message : "Not found"
        }
      });
      return;
    }
    res.status(200).json({
      success:true,
      data:{
        mainData : result,
        message : "Saved"
      }
    })
      // show home page
    }
      
     catch (error) {
      console.log(error);
      res.status(500).json({
        success:false,
        data:{
          mainData : "Some issue on server side",
          message : "Error"
        }
      })
      
    }
 });


}

const a =(app)=>{
  app.get('/item',async(req,res)=>{
    console.log("Hit / endpioint ");
    // const {name,price,des} = req.body;
    try {
      let obj = {
        name: "Laptop",
        price : 10200,
        des: "this is best "
      }
      const id = "random";
      let item = {
        ...obj , productId:id
      };
      
    const result = await items.create(item);
    console.log(result);
    if(!result){
      res.status(404).json({
        success:false,
        data:{
          mainData : null,
          message : "Not found"
        }
      });
      return;
    }
    res.status(200).json({
      success:true,
      data:{
        mainData : result,
        message : "Saved"
      }
    })
      // show home page
    }
      
     catch (error) {
      console.log(error);
      res.status(500).json({
        success:false,
        data:{
          mainData : "Some issue on server side",
          message : "Error"
        }
      })
      
    }
 });

 
}
    
 

module.exports = {test,a};

