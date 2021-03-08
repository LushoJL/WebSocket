const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors())
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//configuracion del puerto
app.set('port',process.env.PORT || 3000);

//archivos estaticos del navegador
app.use(express.static(path.join(__dirname,'public')));

//inicio del servidor
const server=app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});
const urlServe=(app.get('port')===3000)?"http://localhost:3000":"https://baydo.herokuapp.com"

//socket io
const io = require('socket.io')(server, {cors:true, origins:[urlServe]});

    require('./socket')(io,'/baydo');
    require('./socket')(io,'/empresa2');
    require('./socket')(io,'/empresa3');
    require('./socket')(io,'/empresa4');
    require('./socket')(io,'/empresa5');

