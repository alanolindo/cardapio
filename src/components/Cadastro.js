import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro(){

    const navigate = useNavigate();

    const [email, setEmail] =useState("");
    const [senha, setSenha] =useState("");
    const [error, setError] =useState("")

    const handleSubmit =(e)=>{
e.preventDefault()
setError("");

if(email.trim() ===''){
   setError('Digite um email')
    return
}
 if(senha.trim===''|| senha.trim().length< 8){
        setError('Sua senha deve ter 8 caracteres ou mais')
        return
    }
    return navigate("/Menu")
    }


    return(
        <div className="container-cadastro">
            <h1>Bem-vindo de volta!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <input type="password"placeholder="Senha" value={senha} onChange={e=>setSenha(e.target.value)}/>
                <button type="submit">Entrar</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    ) 
}

export default Cadastro;