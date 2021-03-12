import React from 'react';



const Producto = ({producto, car, setCar, productos}) => {

    const {nombre, precio, id,} = producto;

    //agregar producto al carrtito
    const seleccionarProducto = id  => {
        const producto =productos.filter(producto => producto.id === id)[0];
    
       // console.log('Comprando... ', id)
       setCar([
           ... car,
           producto
        ]);
    }

    // Eliminar un producto del carrito
    const eliminarProducto = id => {
        const productos =car.filter(producto => producto.id !== id);
        //Colocar los productos en el State
        setCar(productos)
    } 
     
    
    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
           
            {productos 

            ? 
                (
                    <button 
                    type="button"
                    onClick={ () => seleccionarProducto  (id)}
                    // producto.id
                    >Comprar</button>
                )
            
            : 
                (
                        <button 
                        type="button"
                        onClick={ () => eliminarProducto(id)}
                        //producto.id
                        >Eliminar</button>
                )
            }
        </div>
     );
}
 
export default Producto; 