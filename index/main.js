const url = "http://localhost:3000/indicadores";


fetch((url)).then((res)=>{
    res.json()

}).then((data)=>{
    console.log(data)
})