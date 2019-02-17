const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const sudokoLogic=require('./logic');


const app=express();
app.use(express.static(path.join(__dirname,'views')));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req,res,next)=>{
    res.render('index');
});

app.post('/submit',(req,res,next)=>{
    let Arr=[];
    let temp=req.body;
    for(let i=0;i<9;i++){
        Arr[i]=[];
        for(let j=0;j<9;j++){
            let stm="A"+i+j;
            Arr[i][j]=+temp[stm];
        }
    }
    sudokoLogic(Arr,(resl)=>{
        res.render('result',{
            result:resl
        });
    });
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
