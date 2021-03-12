import React, {Fragment, useState} from 'react'; 
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Producto from './components/Producto'; 
import Car from './components/Car';
import { v4 as uuidv4 } from 'uuid';
 

function App() {

    // Crear listado de productos
    
    const [productos, setProductos] = useState([
      
      { id: uuidv4(), nombre: 'Camisa ReactJS', precio: 50 },
      { id: uuidv4(), nombre: 'Camisa VueJS', precio: 40 },
      { id: uuidv4(), nombre: 'Camisa Node.js', precio: 30 },
      { id: uuidv4(), nombre: 'Camisa Angular', precio: 20 },
    ]);

    // Asignar ID

    
        

    //State para un carrito de compras 
    const [car, setCar] = useState([]);

    // Obtener la fecha
    const fecha = new Date().getFullYear(); 

  return (
    <Fragment>

      <Header 
        titulo='Tienda virtual' 
      />

      <div>listado de productos</div>
      {productos.map(producto => (
         <Producto 
            key= {producto.id}
            producto= {producto}
            productos= {productos}
            car= {car}
            setCar={setCar}
         /> 
      ))}

      <Car 
      car={car}
      setCar={setCar}
      />

      <Footer 
        fecha={fecha}
      />

    </Fragment>
     
    
  );
}

export default App;
