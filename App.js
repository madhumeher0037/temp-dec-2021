
// const {readFileSync,writeFileSync}=require('fs')

// //const write = writeFileSync
// const first = readFileSync('./content/first.txt','utf8')
// const second = readFileSync('./content/second.txt','utf8')
// writeFileSync('./content/second_res.txt' ,`${second}`)
// const second_res = readFileSync('./content/second_res.txt','utf8')

// console.log(first,second_res);
const {readFile,writeFile}=require('fs')

readFile('./content/first.txt','utf8',
    (err,result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    const first = result;
    console.log(first);
    readFile('./content/second.txt','utf8',
    (err,result)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        const second = result;
        console.log(second);
        writeFile('./content/second_res.txt',`${first},${second}`,
        (err,result)=>{
            if(err)
            {
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
    
})