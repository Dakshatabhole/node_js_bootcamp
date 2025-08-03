let a = [3, 4, -5, -6, 7];

a.reduce((a,x)=>{
    if(x>0){
        return a+x
    } else{
        return a
    }
})
