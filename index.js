receivesAFunction = (callback)=>{
    callback();
    
}

function returnsANamedFunction(){
    return function named()
    {console.log("")}
}

function returnsAnAnonymousFunction(){
    return function()
    {console.log("")}
}
