import '../App.css';
import Image1 from '../image2.jpeg'
import Image2 from '../image3.jpg'
import Image3 from '../image5.jpg'
import Image4 from '../image5.cms'
import Image5 from '../calculator.png'
import Image6 from '../token.png'
import Image7 from '../mercado_livre.png'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div style={{ marginBottom: '5vh' }}>
            <div style={{ height: '70vh', marginLeft: '5vw', marginRight: '5vw', marginTop: '5vh', position: 'relative' }}>
                <img src={Image1} width='100%' height='100%' />
            </div>
            <div style={{ position: 'absolute', top: '12vh', marginLeft: '5vw', color: '#2E8B57', textShadow: '1em 1em 40px #CCC', fontSize: 35 }}>
                <h1>EnergyOne</h1>
            </div>
            <div style={{ position: 'absolute', top: '30vh', marginLeft: '5vw', color: 'whitesmoke', textShadow: '5 5 20px #000', fontSize: 35 }}>
                <h5>Plataforma one-stop-shop para o mercado de energia e crédito de carbono.</h5>
            </div>
            <div style={{
                display: 'flex', height: '10vh', alignItems: 'center', marginLeft: '5vw', color: 'white',
                marginTop: '5vh', marginRight: '5vw', borderRadius: '20px 20px', paddingLeft: '5vh',
                backgroundImage: "linear-gradient(to bottom right, #98FB98, #2E8B57)"
            }}>
                <h4>Processo rápido, simples e seguro. Na EnergyOne, estabelecemos etapas simples com o próposito de facilitar a negociação B2B.</h4>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', height: '30vh', alignItems: 'center', marginTop: '10vh' }}>
                <div style={{
                    display: 'flex', height: '30vh', width: '25vw', marginLeft: '5vw',
                    backgroundColor: '#2E8B57', color: 'white', padding: '1vw', borderRadius: '20px 20px',
                    backgroundImage: "linear-gradient(to bottom right, #98FB98, #2E8B57)"
                }}>
                    <div style={{ height: '20%' }}>
                        <img src={Image5} width='40px' height='40px' />
                        <Link to='calculadora'>Calculadora </Link>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '5vh', }}>
                        <div style={{ width: '100%' }}>
                            <h4>Calcule sua pegada de carbono</h4>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex', height: '30vh', width: '25vw', marginLeft: '5vw',
                    backgroundColor: '#2E8B57', color: 'white', padding: '1vw', borderRadius: '20px 20px',
                    backgroundImage: "linear-gradient(to bottom right, #98FB98, #2E8B57)"
                }}>
                    <div style={{ height: '20%' }}>
                        <img src={Image6} width='40px' height='40px' />
                        <Link to='tokenizacao'>Tokenização </Link>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '5vh' }}>
                        <div style={{ width: '100%' }}>
                            <h4>Tokenize seus ativos</h4>
                        </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex', height: '30vh', width: '25vw', marginLeft: '5vw', borderRadius: '20px 20px',
                    marginRight: '5vw', backgroundColor: '#2E8B57', color: 'white', padding: '1vw',
                    backgroundImage: "linear-gradient(to bottom right, #98FB98, #2E8B57)"
                }}>
                    <div style={{ height: '20%' }}>
                        <img src={Image7} width='40px' height='40px' />
                        <Link to='negociacao'>Negociação </Link>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '5vh' }}>
                        <div style={{ width: '100%' }}>
                            <h4>Negocie seus créditos de carbono e compre mais energia para seu negócio.</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '80vh', position: 'relative', marginLeft: '10vw', marginRight: '5vw' }}>
                <div style={{ position: 'relative', height: '80vh', marginTop: '10vh' }}>
                    <img src={Image2} width='100%' height='100%' />
                </div>
                <div style={{ color: 'white', position: 'absolute', top: '5vh', marginLeft: '3vw', fontSize: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: '30%' }}>
                            <h1>Pegada de Carbono</h1>
                        </div>
                        <div>
                            <div style={{
                                marginLeft: '5%', marginTop: '15%', marginRight: '5%', marginBottom: '5%',
                                backgroundColor: '#2E8B57', color: 'whitesmoke', padding: '2vh', borderRadius: '20px 20px',
                                backgroundImage: "linear-gradient(to bottom right, #98FB98, #2E8B57)"
                            }}>
                                <h4>Fazemos a metrificação da emissão de carbono das empresas a partir do setor/região em que elas se encontram.
                                    <br />Após um diagnóstico sobre
                                    como está a distribuição das emissões por fontes geradoras de energia, direcionamos
                                    <br /> a empresa ao produto mais indicado.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '85vh', position: 'relative', marginLeft: '10vw', marginRight: '5vw' }}>
                <div style={{ position: 'relative', height: '83vh', marginTop: '10vh' }}>
                    <img src={Image3} width='100%' height='100%' />
                </div>
                <div style={{ color: 'white', position: 'absolute', top: '5vh', marginLeft: '3vw', fontSize: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: '30%' }}>
                            <h1>Tokenização</h1>
                        </div>
                        <div>
                            <div style={{
                                marginLeft: '5%', marginTop: '32%', marginRight: '5%', marginBottom: '5%',
                                backgroundColor: '#2E8B57', color: 'white', padding: '2vh', borderRadius: '20px 20px',
                                backgroundImage: "linear-gradient(to bottom right, #98FB98, #2E8B57)"
                            }}>
                                <h4>
                                    Caso a empresa se encaixa nos padrões estabelecidos, prosseguimos para o processo de
                                    tokenização dos créditos de carbono. Dessa forma,
                                    é possível conectar compradores e vendedores dependendo de suas práticas e objetivos.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '85vh', position: 'relative', marginLeft: '10vw', marginRight: '5vw' }}>
                <div style={{ position: 'relative', height: '83vh', marginTop: '10vh' }}>
                    <img src={Image4} width='100%' height='100%' />
                </div>
                <div style={{ color: 'white', position: 'absolute', top: '5vh', marginLeft: '3vw', fontSize: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: '30%' }}>
                            <h1>Mercado Livre de Energia</h1>
                        </div>
                        <div>
                            <div style={{
                                marginLeft: '5%', marginTop: '20%', marginRight: '2%', marginBottom: '5%',
                                backgroundColor: '#2E8B57', color: 'white', padding: '2vh', borderRadius: '20px 20px',
                                backgroundImage: "linear-gradient(to bottom right, #98FB98, #2E8B57)"
                            }}>
                                <h4>
                                    Se a empresa for avaliada como perigosa para o meio ambiente (+ 80% de emissões vindo de fontes
                                    não renováveis), além de recomendarmos
                                    a comercialização de créditos de carbono, é esperado que a empresa, através de um de nossos parceiros,
                                    solicite um contrato via Mercado
                                    Livre de Energia para a utilização de fontes renováveis em sua geração. Assim, além de minimizar os
                                    impactos com os créditos obtidos, também
                                    seria possível uma menor emissão de CO2.
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomePage