import '../style.css';
import { Link } from 'react-router-dom';

function Inicial (){
    return(
        <div className='container-inicial'>
<img className="inicial-img" src="/assets/Depth 6, Frame 0.jpg" alt="assets/Depth 6, Frame 0.jpg"/>
<p className='inicial-descricao'>
    Bem-vindo ao Sabores do Brasil, onde a tradição e a inovação se encontram para 
    oferecer uma experiência gastronômica<br/> única. Explore nosso cardápio e descubra os
     autênticos sabores do Brasil, preparados com ingredientes frescos e paixão<br/> pela 
     culinária.
</p>
<Link to='/cadastro'>
<button >Explorar Cardápio</button>
</Link>
<p>Rua das Palmeiras, 123, Centro, São Paulo | (11) 98765-4321</p>
        </div>
    )
}

export default Inicial;