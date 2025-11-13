import "./Boton.css"; // archivo donde está tu CSS

export const Boton = ({ texto, onClick,disabled }) => {
  return(
  <button className="boton" onClick={onClick} disabled= {disabled}>{texto}</button>
  );
};

export default Boton;