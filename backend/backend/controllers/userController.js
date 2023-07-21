const usermodel =require("../Model/userModel")
const jwt=require("jsonwebtoken")

const createuser = async (req,res) =>{
    try{
let body =req.body
let create =await usermodel.create(body)
res.send(create)
    }
    catch(err){
  res.send(err.message)
    }
}
const userLogin = async (req,res) => {
    try{
        const myBody1 = req.body
      const { email, password } = myBody1
      let checkData = await usermodel.findOne({email : email , password : password});
  
        let token = jwt.sign({
            userId: checkData._id.toString(),
            group: "group-8",
          },"project-3", { expiresIn: '180m' });
    
          res
            .status(200)
            .send({
              status: true,
              message: "user Login Successful",
              token: { token },
            });
    
       }catch(err)
       {
           return res.status(500).send({ status: false, message: err.message });
       }
    
    }
   

module.exports ={createuser,userLogin}