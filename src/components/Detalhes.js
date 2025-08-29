import {useParams} from 'react-router-dom';
import {Lista} from '../Lista';
import Navbar from './Navbar';
import '../style.css';
import { useState } from 'react';


function Detalhes ({car, setCar}){

    const [quantidade, setQuantidade] = useState();

    const {id} = useParams();
const item = Lista.flat().find((item) => item.id.toString() === id);

   function adcCar(item) {
  const existe = car.find((produto) => produto.id === item.id);

  if (existe) {
    // Atualiza a quantidade
    const novoCarrinho = car.map((produto) =>
      produto.id === item.id
        ? { ...produto, quantidade: Number(produto.quantidade) + Number(quantidade) }
        : produto
    );
    setCar(novoCarrinho);
  } else {
    // Adiciona o item novo
    setCar([...car, { ...item, quantidade }]);
  }
  setQuantidade('')
  
}
   
console.log(car)

    return(
        <div>
            <Navbar/>
            <div className='detalhes'>
        <h1>{item.nome}</h1>
      <img src={item.imagem} alt={item.nome} />
      <p>{item.descricao}</p>
      <h2>R$: {item.preco}</h2>
      <h2>Quantidade</h2>
      <input type='text-area' value={quantidade} onChange={(e)=>setQuantidade(e.target.value)}
       style={{borderRadius: '6px', width:'450px', height: '25px', marginBottom: '20px'}}
       />
      <button onClick={()=>adcCar(item)}>Adicionar ao Carrinho</button>
      </div>
        </div>
    )
}

export default Detalhes;