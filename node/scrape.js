readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
axios=require("axios")
cheerio=require("cheerio")
fs=require("fs")

news=[]

axios("https://mereja.com/amharic/v2/").then((response)=>{



const $=cheerio.load(response.data)


    $('.post h1 a').each((i,el)=>{

        news.push({
            title:`${$(el).text()}`,
            url:`${$(el).attr('href')}`

        })
    })

    fs.writeFileSync("news.js",`${news}`)
console.log(news)
})






