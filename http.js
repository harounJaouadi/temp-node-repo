const http=require("http") ; 


const server=http.createServer((req,res)=>{
    console.log(req) ; 
    res.write("hello") ; 
    res.end() ; 
})


server.listen(5000) ; 