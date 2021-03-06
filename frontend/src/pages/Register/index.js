import React, { useState } from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link,useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'




export default function Register() {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsApp, setWhatsApp] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault()
        const data = {
            name,
            email,
            whatsapp:whatsApp,
            city:cidade,
            uf
        }

        try{
        const response = await api.post('ongs',data)
        alert(`seu id de acesso ${response.data.id}`)
        history.push('/')
        }catch(e){
            alert('erro no cadastro')
        }
    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt='be the hero'></img>
                    <h1>Cadastro</h1>
                    <p>faca seu cadastro, entre na plataformae ajude as pessoas a encontrarem os casos da sua ONG</p>

                    <Link className='back-link' to='/'>
                        <FiArrowLeft size={16} color='#E02041'></FiArrowLeft>
                        Nao tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input type="text"
                        placeholder="nome da ONG"
                        value={name}
                        onChange={e => { setName(e.target.value) }} />
                    <input type="email"
                        placeholder='email'
                        value={email}
                        onChange={e => { setEmail(e.target.value) }} />
                    <input placeholder='whatsApp'
                        value={whatsApp}
                        onChange={e => { setWhatsApp(e.target.value) }} />

                    <div className="input-group">
                        <input placeholder='cidade'
                            value={cidade}
                            onChange={e => { setCidade(e.target.value) }} />
                        <input placeholder='UF'
                            style={{ width: 80 }}
                            value={uf}
                            onChange={e => { setUf(e.target.value) }} />

                    </div>
                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}