const request = (arg) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log(arg);
            resolve(arg + 1);
        },300);
    });
};
request(1)
 .then((res1) =>{
     return request(res1);
 })
 .then((res2) =>{
     return request(res2);
 })
 
 .then((res3) =>{
     return request(res3);
 })
 
 .then((res4) =>{
     return request(res4);
 })
 
 .then((res5) =>{
    console.log('res5:', res5);
 });