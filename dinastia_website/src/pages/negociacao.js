import React, { useState } from "react";
import Select from 'react-select'

const Negocicacao = () => {
    const saldoCarteira = 1200
    const comprados = 500
    const compensados = 300
    const disponiveis = 600

    const [distribuidora, setDistribuidora] = useState()
    const [kwh, setKwh] = useState()
    const [prazo, setPrazo] = useState()

    return (
        <div style={{ paddingLeft: '10vw', paddingRight: '10vw', paddingBottom: '10vh' }}>
            <div style={{
                padding: '2vh', borderRadius: '20px 20px', color: 'white',
                backgroundImage: "linear-gradient(to bottom right, #98FB98, #2E8B57)"
            }}>
                <div>
                    <h1 style={{ textAlign: 'center' }}>Créditos de Carbono</h1>
                    <div style={{ display: 'flex', justifyContent: 'space-around', width: '50vw' }}>
                        <div>
                            <button>
                                Comprar
                            </button>
                        </div>
                        <div>
                            <button>
                                Vender
                            </button>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '5vh', padding: '2vh' }}>
                    <h4>Minha Carteira</h4>
                    <div style={{ marginBottom: '5vh' }}>
                        Valor atual tokenizado da carteira: R$
                        <input
                            style={{ marginLeft: '2vw' }}
                            value={saldoCarteira}
                            disabled={true}
                        />
                    </div>
                    <div>
                        Créditos de carbono comprados:
                        <input
                            style={{ marginLeft: '2vw' }}
                            value={comprados}
                            disabled={true}
                        />
                    </div>
                    <div>
                        Créditos de carbono compensados:
                        <input
                            style={{ marginLeft: '2vw' }}
                            value={compensados}
                            disabled={true}
                        />
                    </div>
                    <div>
                        Créditos de carbono disponíveis:
                        <input
                            style={{ marginLeft: '2vw' }}
                            value={disponiveis}
                            disabled={true}
                        />
                    </div>

                </div>
            </div>
            <div style={{
                marginTop: '5vh', padding: '2vh', borderRadius: '20px 20px', color: 'white',
                backgroundImage: "linear-gradient(to bottom right, #98FB98, #2E8B57)"
            }}>
                <h1 style={{ textAlign: 'center' }}>Mercado Livre de Energia</h1>
                <div style={{ width: '40vw', color: 'black' }}>
                    <div style={{ color: 'white' }}>
                        Distribuidora de energia
                    </div>
                    <Select
                        style={{ height: '10px' }}
                        value={distribuidora}
                        onChange={setDistribuidora}
                        options={[
                            { value: 'brasilER', label: 'Brasil Elétrica Renovável' },
                            { value: 'energiaBrasil', label: 'Energia do Brasil' },
                            { value: 'engie', label: 'Engie' }
                        ]}
                    />
                </div>
                <div style={{ width: '40vw', marginTop: '5vh' }}>
                    Total em kWh
                    <input
                        style={{ marginLeft: '2vw' }}
                        className="form-control"
                        value={kwh}
                        onChange={e => setKwh(e.target.value)}
                    />
                </div>
                <div style={{ width: '40vw', marginTop: '5vh' }}>
                    Prazo do contrato
                    <input
                        style={{ marginLeft: '2vw' }}
                        className="form-control"
                        value={prazo}
                        onChange={e => setPrazo(e.target.value)}
                    />
                    <div style={{ marginLeft: '30vw' }}>
                        <button>
                            Entre em contato
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Negocicacao