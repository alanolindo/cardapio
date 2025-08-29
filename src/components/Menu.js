import { Lista } from "../Lista";
import { useNavigate } from "react-router-dom";
import '../style.css';
import Navbar from "./Navbar";

function Menu() {
  const direction =useNavigate();

  const detalhes =(id)=>{
direction(`/detalhes/${id}`)
  }

  return (
    <div className="container-menu">
      <Navbar/>
     <h1>Nosso Cardápio</h1>
     <div>
      <h1>Entradas</h1>
      <section className="card">
        {Lista[0].map(item=>(
          <div key={item.id}  onClick={()=>detalhes(item.id)}> 
              <img src={item.imagem} alt={item.nome}/>
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
          </div>
        ))}
      </section>
      <h1>Prator principais</h1>
      <section className="card"> 
        {Lista[1].map((item)=>(
          <div key={item.id} onClick={()=>detalhes(item.id)}>
            <img src={item.imagem} alt={item.nome}/>
               
            <h3>{item.nome}</h3>
           
           
            <p>{item.descricao}</p>
          </div>
        ))}
      </section>
      <h1>Sobremesas</h1>
      <section className="card">
        {Lista[2].map((item)=>(
          <div key={item.id} onClick={()=>detalhes(item.id)}>
            <img src={item.imagem} alt={item.nome}/>
               
            <h3>{item.nome}</h3>
          
          
            <p>{item.descricao}</p>
          </div>
        ))}
      </section>
      <h1>Bebidas</h1>
      <section className="card">
        {Lista[3].map((item)=>(
          <div key={item.id} onClick={()=>detalhes(item.id)}>
            <img src={item.imagem} alt={item.nome}/>
             
            <h3>{item.nome}</h3>
           
           
            <p>{item.descricao}</p>
          </div>
        ))}
      </section>
     </div>
    </div>
  );
}

export default Menu;
