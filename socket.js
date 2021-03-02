module.exports = (io,url)=>{
    io.of(url).on('connection',socket=>{

        socket.on('send:pendiente',data=>{
            io.of(url).emit('send:pendienteTabla',data);
        })

    })
}
