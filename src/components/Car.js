import React from 'react';
import Producto from './Producto';
import './Styles/Car.css';




const Car = ({car, setCar}) =>  (  
    <div className="Car">
        <h2>Tu carrito de compras</h2>

        {car.length === 0
        ?
        
          <p className="Car">No hay elementos en el carrito</p>  

        : car.map(producto =>(
            <Producto
                key={producto.id}
                producto={producto}
                car={car}
                setCar={setCar}  
            />
           ))}
    </div>
 
);

 
export default Car;