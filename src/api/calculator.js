const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{

    res.json({message:"hello world"})
    
    
    })


router.post('/add',(req,res)=>{
const num1=parseFloat(req.body.num1);
const num2=parseFloat(req.body.num2);
if(isNaN(num1)||isNaN(num2)){
    res.json({
        status:"error",
        message:"invalid data types",
        
    })  
}

else if(num1>1000000||num2>1000000){
    res.json({
        status:"failure",
        message:"overflow",
       
    })   
}
else
res.json({
    status:"success",
    message:"the sum of given two number",
    sum:num1+num2
})

})

router.post('/sub',(req,res)=>{
    const num1=parseFloat(req.body.num1);
    const num2=parseFloat(req.body.num2);
    if(isNaN(num1)||isNaN(num2)){
        res.json({
            status:"error",
            message:"invalid data types",
            
        })  
    }
    
    else if(num1>1000000||num2>1000000){
        res.json({
            status:"failure",
            message:"overflow",
           
        })   
    }
    else
    res.json({
        status:"success",
        message:"the difference of given two number",
        sub:num1-num2
    })
    
    })

    router.post('/multiply',(req,res)=>{
        const num1=parseFloat(req.body.num1);
        const num2=parseFloat(req.body.num2);
        if(isNaN(num1)||isNaN(num2)){
            res.json({
                status:"error",
                message:"invalid data types",
                
            })  
        }
        
        else if(num1>1000000||num2>1000000){
            res.json({
                status:"failure",
                message:"overflow",
               
            })   
        }
        else
        res.json({
            status:"success",
            message:"The product of given numbers",
            sub:num1*num2
        })
        
        })

        router.post('/division',(req,res)=>{
            const num1=parseFloat(req.body.num1);
            const num2=parseFloat(req.body.num2);
            if(isNaN(num1)||isNaN(num2)){
                res.json({
                    status:"error",
                    message:"invalid data types",
                    
                })  
            }
            
            else if(num1>1000000||num2>1000000){
                res.json({
                    status:"failure",
                    message:"overflow",
                   
                })   
            }
            else if(num2==0){
                res.json({
                    status:"error",
                    message: "Cannot divide by zero"
                   
                })  
            }
            else
            res.json({
                status:"success",
                message:"The division of given numbers",
                sub:num1/num2
            })
            
            })
        
    







module.exports=router;