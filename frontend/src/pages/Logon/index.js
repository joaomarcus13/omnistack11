import React,{useState} from 'react'
import './styles.css'
import {Link,useHistory} from 'react-router-dom'
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api'

export default function Logon(){

    const [id,setId] = useState('')
    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault()

        try{
            const response = await api.post('sessions',{id})
            localStorage.setItem('ongId',id) //armazenar no navegador
            localStorage.setItem('ongName',response.data.name)

            history.push('/profile')

        }catch(err){
            alert('falha no login')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt='be the hero'></img>

                <form onSubmit={handleLogin}>
                    <h1>Faca seu logon</h1>
                    <input placeholder="sua ID"
                    value={id}
                    onChange={e=>{setId(e.target.value)}}/>
                    <button className='button' type="submit">Entrar</button>

                    <Link className='back-link' to="/register">
                        <FiLogIn size={16} color='#E02041'></FiLogIn>
                        Nao tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={heroesImg} alt='heroes'></img>
        </div>
    )
}