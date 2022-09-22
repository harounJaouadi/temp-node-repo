const os=require("os") ; 
const user=os.userInfo() ;

console.log(user) ;

console.log(os.uptime()) ; 
const osInfo={
    name : os.type() ,
    release : os.release() , 
    freemem : os.freemem() , 
    totalmem : os.totalmem()
}

console.log(osInfo) ; 
