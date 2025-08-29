import { useNavigate } from 'react-router-dom';
import '../style.css';


function Navbar(props){

  const navigate = useNavigate()


    return(
        <div>
         <section className="navbar">
            <h2>Taste Haven</h2>
            <div>
          <h3 onClick={()=>navigate('/menu')} style={{cursor:'pointer'}}>Menu</h3>
            <h3>Promoções</h3>
            <h3>Sobre Nós</h3>
            <button onClick={()=>navigate('/carrinho')}>Carrinho</button>
            </div> 
         </section>
        </div>
    )
}

export default Navbar;