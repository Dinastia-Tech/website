import React from "react";
import Image from '../celular.jpg'

const Tokenizacao = () => {
    return (
        <div style={{ paddingBottom: '10vh', marginLeft: '5vw', marginRight: '5vw' }}>
            <div style={{
                display: "flex", borderRadius: '20px 20px',
                justifyContent: 'space-between', paddingBottom: '5vh', color: 'white',
                backgroundImage: "linear-gradient(to bottom right, #98FB98, #2E8B57)"
            }}>
                <div style={{ width: '40vw' }}>
                    <div style={{ padding: '1vw' }}>
                        <h4>Credito de carbono</h4>
                        O crédito de carbono é um certificado que pode ser comprado por uma empresa ou pessoa que quer
                        compensar seu impacto ambiental.
                    </div>
                    <div style={{ padding: '1vw' }}>
                        <h4>Uso de blockchain</h4>
                        Utilizamos a tecnologia de blockchain para a tokenização dos créditos de carbono.
                        Dessa forma, cada crédito se torna único, rastreável e seguro.
                    </div>
                    <div style={{ padding: '1vw' }}>
                        <h4>Solução integrada</h4>
                        Utilização da tecnologia de tokenização, trazendos vantagens de custódia e liquidação na própria plataforma.
                    </div>
                </div>
                <div style={{ width: '40vw' }}>
                    <div>
                        <h3>O que é tokenização</h3>
                        Um token de ativo é uma representação digital de um ativo real. Portanto, a tokenização se dá a partir da conversão
                        desses ativos (que possuem valor econômico) em um formato digital, para que eles possam ser facilmente negociados.
                        <br /><br />
                        Deste modo, tem-se a indexação do valor do token em dinheiro. Assim, um único ativo pode ser dividido em várias
                        pequenas partes, que possuem um valor menor e se tornam mais acessíveis para investidores.
                        <br /><br />
                        O emissor do token é o detentor do ativo que ele representa e, ao utilizar o processo de tokenização,
                        ele ganha transparência, autonomia e liquidez para negociar seus bens, sem a necessidade de intervenção de uma entidade central.
                        <br /><br />
                        Todo esse processo de tokenização pode ser feito a partir do desenvolvimento de um contrato inteligente,
                        também conhecido como Smart Contract, que é um código pré-programado na blockchain para assegurar que os termos do contrato serão cumpridos.
                    </div>
                </div>
            </div>
            <div style={{
                borderRadius: '20px 20px', backgroundImage: "linear-gradient(to bottom right, #98FB98, #2E8B57)"
                , paddingBottom: '5vh', color: 'white', padding: '5vh', marginTop: '5vh'
            }}>
                <h3>Por que tokenizar seus créditos?</h3>
                O processo de tokenização oferece vantagens uma série de vantagens para o emissor.
                <br /><br />
                Por meio da tokenização, seus créditos podem ser negociados com maior agilidade e facilidade,
                e a qualquer dia e hora, já que o mercado de tokens é ininterrupto.
                <br /><br />
                Além disso, a segurança dos seus créditos é garantida pela blockchain, por exemplo.
                <br /><br />
                Por meio dos smart contracts, a blockchain garante a validação jurídica das transações e assegura que elas
                serão executadas de forma correta, sem a necessidade de envolver uma terceira parte na negociação.
                <br /><br />
                E, já que a tokenização não envolve outras instituições e pessoas, a transação se torna:
                <br />•    mais ágil
                <br />•    mais barata (pois não envolve o pagamento de diversas taxas)
                <br />•    menos burocrática
                <br /><br />
                Quer tokenizar seus créditos? Venha conosco!
            </div>
            <div style={{ display: 'flex', height: '70vh', width: '100%', justifyContent: "center", marginTop: '5vh' }}>
                <div style={{ height: '20px', width: '20%', marginTop: '10%' }}>
                    <button>
                        Tokenize-se
                    </button>
                </div>
                <div style={{ width: '25%' }}>
                    <img src={Image} width='100%' height='100%' />
                </div>
            </div>
        </div >
    )
}

export default Tokenizacao
