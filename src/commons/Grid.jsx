import Card from "./Card";
import "../styles/grid.css";

const Grid = () => {
  return (
    <div>
      <div className="contenedor">
        <h1 className="sutitulo">DESTACADOS</h1>
        <hr />
        <ul className="grid ">
            <Card  />
    
            
        </ul>
      </div>
    </div>
  );
};
export default Grid;