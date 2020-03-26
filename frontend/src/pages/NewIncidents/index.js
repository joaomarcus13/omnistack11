import React,{useState} from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import {Link,useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api'
export default function(){


    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [value,setValue] = useState('')

    const ongID = localStorage.getItem('ongId')

    const history = useHistory()

    async function handleNewIncident(e){
        e.preventDefault()

        const data={
            title,
            description,
            value
        }

        try {
            await api.post('incidents',data,{
                headers:{
                    Authorization:ongID
                }
            })

            history.push('/profile')

        } catch (error) {
            alert('erro ao cadastrar')
        }
    }


    return(
        <div className="new-incident">
        <div className="content">
            <section>
                <img src={logoImg} alt='be the hero'></img>
                <h1>Cadastrar Novo Caso</h1>
                <p>faca seu cadastro, entre na plataformae ajude as pessoas a encontrarem os casos da sua ONG</p>

                <Link className='back-link' to='/profile'>
                    <FiArrowLeft size={16} color='#E02041'></FiArrowLeft>
                    Voltar para home
                </Link>
            </section>

            <form onSubmit={handleNewIncident}>
                <input type="text" 
                 placeholder="titulo do caso" 
                 value={title}
                 onChange={(e)=>{setTitle(e.target.value)}}/>
                <textarea  
                 placeholder='descricao'
                 value={description}
                 onChange={(e)=>{setDescription(e.target.value)}}/>
                <input 
                 placeholder='valor em reais'
                 value={value}
                 onChange={(e)=>{setValue(e.target.value)}}/>

    
                <button className='button' type='submit'>Cadastrar</button>
            </form>
        </div>
    </div>
    )
}