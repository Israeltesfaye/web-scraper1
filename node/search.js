readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
fs=require("fs")
news=require("./news.js").json

results=[]





readline.question("search from news.json ",(term)=>{


    json.forEach((n)=>{

        if(n.title==term){
            results.push(n)
        }

    })

 console.log(results)
readline.close()
})









