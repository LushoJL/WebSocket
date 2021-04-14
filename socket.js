module.exports = (io,url)=>{
    io.of(url).on('connection',socket=>{
        socket.on('send:pendiente',data=>{
            console.log(data)
            switch (parseInt(data.CodDPM)){
                case 1:
                    io.of(url).emit('send:pendienteDelivery'+data.IdSucursal,data);
                    break;
                case 2:
                    io.of(url).emit('send:pendientePickup'+data.IdSucursal,data);
                    break;
                case 3:
                    io.of(url).emit('send:pendienteMesa'+data.IdSucursal,data);
                    break;
            }
        });
        socket.on('send:eliminar',data=>{
           console.log(data) ;
            switch (parseInt(data.CodDPM)){
                case 1:
                    io.of(url).emit('receive:eliminarDelivery'+data.IdSucursal,1);
                    break;
                case 2:
                    io.of(url).emit('receive:eliminarPickup'+data.IdSucursal,1);
                    break;
                case 3:
                    io.of(url).emit('receive:eliminarMesa'+data.IdSucursal,1);
                    break;
            }
        });

    })
}
