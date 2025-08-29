import Navbar from "./Navbar";
import { FaRegTimesCircle } from "react-icons/fa";

function Carrinho({ car=[],setCar }) {
      if (car.length === 0) {
    return <h2>O carrinho está vazio 😢</h2>;
  }

   let subtotal = 0;
  for (let i = 0; i < car.length; i++) {
    subtotal += car[i].quantidade * car[i].preco;
  }
 
  function excluir(itemRemover) {
  const novoArray = car.map(item => {
    if (item.id === itemRemover.id) {
      if (item.quantidade > 1) {
        return { ...item, quantidade: item.quantidade - 1 }; 
      }
      return null; 
    }
    return item;
  }).filter(item => item !== null); 

  setCar(novoArray);
}

    return (
        <div>
            <Navbar/>
            {car.map(item => (
                <div key={item.id}>
            
                    <div className="caixa">
                      <FaRegTimesCircle onClick={()=>excluir(item)}/> 
                    <img src={item.imagem} alt={item.nome} className="caixa-img" />
                    <div>
                    <h1>{item.nome}</h1>
                    <h2 style={{color:'#876363'}}>Quantidade: {item.quantidade}</h2>
                    </div>
                    <h2 className="caixa-preco">R$: {(Number(item.preco) * Number(item.quantidade)).toFixed(2)}</h2>
                    </div>
                </div>
            ))}
    
            <h1>Resumo do pedido</h1>
              <hr/>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                <h2 style={{color:'#876363'}}>Subtotal</h2>
                <h2>R$: {subtotal.toFixed(2)}</h2>
                </div>

              <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                <h2 style={{color:'#876363'}}>Taxas</h2>
                <h2>R$: 10,00</h2>
              </div>
              </div>
        </div>
    )
}

export default Carrinho;