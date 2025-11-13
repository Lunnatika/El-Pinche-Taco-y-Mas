//Componente que muestra un item individual
//Recibe por props el nombre, precio y descripcion del item
//Lo muestra en un article
//le envia a ItemList como <Item key={prod.id} {...prod}/>
// los children son los elementos que se encuentran entre las etiquetas de apertura y cierre del componente
// los children se reciben como una prop especial que muestra todo lo que esta entre las etiquetas de apertura y cierre

import "./Item.css"

export const Item = ({name, price, description, image, children}) => {
    return(
        <article className="producto">
                <img src={image} alt={name} className="producto-imagen"/>  
                <h2>{name}</h2>
                <p>Precio: ${price}</p>
                <p>Descripcion: {description}</p>
                {children}
            </article>
    );
};