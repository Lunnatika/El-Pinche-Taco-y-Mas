import "./Boton.css"; // archivo donde está tu CSS

export const Boton = ({ texto, onClick }) => {
  return(
  <button className="boton" onClick={onClick}>{texto}</button>
  );
};

export default Boton;