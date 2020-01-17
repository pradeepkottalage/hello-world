

var a = function(){
    return new Promise((resolve,reject)=>{
        resolve(1)
    })
}

var b = function(a){
    return new Promise((resolve,reject)=>{
        resolve(console.log("promise 2",a))
        //reject("Rejected")
    })
};
 // using then
//a().then((res)=>b(res).then((result)=>console.log(result))).catch((error)=>console.log(error));

//  using async await
async function test(){
    var prm1 = await a();
    var prm2 =  await b(prm1);

}
test();

//---------------- Promise.all([a,b])
//-----------------Promise.race([a,b])