const express = require("express");
const router = express.Router();
const checkType = (req, res, next) => {
	const { num1, num2 } = req.body;

	if (typeof num1 === "string" || typeof num2 === "string") {
		return res.json({
			status: `error`,
			message: `Invalid data types`,
		});
	}

	next();
};
router.get('/',(req,res)=>{

    res.json({message:"hello world"})
    
    
    })


router.post('/add',checkType,(req,res)=>{
const num1=parseFloat(req.body.num1);
const num2=parseFloat(req.body.num2);
if(isNaN(num1)||isNaN(num2)){
    res.json({
        status:"error",
        message:"Invalid data types",
        
    })  
}

else if(num1>1000000||num2>1000000){
    res.json({
        status:"error",
        message:"overflow",
       
    })   
}
else
res.json({
    status:"success",
    message:"the sum of given two numbers",
    sum:num1+num2
})

})

router.post('/sub',checkType,(req,res)=>{
    const num1=parseFloat(req.body.num1);
    const num2=parseFloat(req.body.num2);
    if(isNaN(num1)||isNaN(num2)){
        res.json({
            status:"error",
            message:"Invalid data types",
            
        })  
    }
    
    else if(num1>1000000||num2>1000000){
        res.json({
            status:"error",
            message:"overflow",
           
        })   
    }
    else
    res.json({
        status:"success",
        message:"the difference of given two numbers",
        difference:num1-num2
    })
    
    })

    router.post('/multiply',checkType,(req,res)=>{
        const num1=parseFloat(req.body.num1);
        const num2=parseFloat(req.body.num2);
        if(isNaN(num1)||isNaN(num2)){
            res.json({
                status:"error",
                message:"Invalid data types",
                
            })  
        }
        
        else if(num1>1000000||num2>1000000){
            res.json({
                status:"error",
                message:"overflow",
               
            })   
        }
        else
        res.json({
            status:"success",
            message:"The product of given numbers",
            result:num1*num2
        })
        
        })

        router.post('/division',checkType,(req,res)=>{
            const num1=parseFloat(req.body.num1);
            const num2=parseFloat(req.body.num2);
            if(isNaN(num1)||isNaN(num2)){
                res.json({
                    status:"error",
                    message:"Invalid data types",
                    
                })  
            }
            
            else if(num1>1000000||num2>1000000){
                res.json({
                    status:"error",
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
                result:num1/num2
            })
            
            })
        
    







module.exports=router;