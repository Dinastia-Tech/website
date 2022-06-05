import logo from '../logo.svg';
import '../App.css';
import Image1 from '../image2.jpeg'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div style={{ marginBottom: '5vh' }}>
            <div style={{ height: '70vh', marginLeft: '5vw', marginRight: '5vw', marginTop: '5vh', position: 'relative' }}>
                <img src={Image1} width='100%' height='100%' />
            </div>
            <div style={{ position: 'absolute', top: '20vh', marginLeft: '5vw', color: 'whitesmoke', textShadow: '5 5 15px #000', fontSize: 30 }}>
                Primeiro Texto
            </div>
            <div style={{
                display: 'flex', height: '30vh', alignItems: 'center', marginLeft: '5vw',
                // border: 'solid', borderWidth: '.5px', 
                marginTop: '5vh', marginRight: '5vw'
            }}>
                Texto introdutório
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '30vh', alignItems: 'center', marginTop: '10vh' }}>
                <div style={{
                    display: 'flex', height: '30vh', width: '25vw', marginLeft: '5vw',
                    backgroundColor: '#f17160', color: 'white', padding: '1vw'
                }}>
                        <Link to='calculadora'>Calculadora </Link>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '100%' }}>
                            Calculadora
                        </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex', height: '30vh', width: '25vw', marginLeft: '5vw',
                    backgroundColor: '#f17160', color: 'white', padding: '1vw'
                }}>
                        <Link to='tokenizacao'>Tokenização </Link>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '100%' }}>
                            Tokenização
                        </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex', height: '30vh', width: '25vw', marginLeft: '5vw',
                    marginRight: '5vw', backgroundColor: '#f17160', color: 'white', padding: '1vw'
                }}>
                        <Link to='negociacao'>Negociação </Link>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '100%' }}>
                            TEXTO
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage