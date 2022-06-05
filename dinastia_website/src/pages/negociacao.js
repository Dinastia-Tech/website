import React, { useState } from "react";
import Select from 'react-select'

const Negocicacao = () => {
    const [valorCompra, setValorCompra] = useState()
    const [valorVenda, setValorVenda] = useState()
    const [saldoCarteira, setSaldoCarteira] = useState(0)
    const [distribuidora, setDistribuidora] = useState()
    const [kwh, setKwh] = useState()

    return (
        <div style={{ paddingLeft: '10vw', paddingRight: '10vw', paddingBottom: '10vh' }}>
            <div style={{ border: 'solid', borderWidth: '2px', padding: '2vh' }}>
                <div>
                    <h4 style={{ textAlign: 'center' }}>Créditos de Carbono</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '50vw' }}>
                        <div>
                            Comprar:
                            <input
                                value={valorCompra}
                                onChange={e => setValorCompra(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div>
                            Vender:
                            <input
                                value={valorVenda}
                                onChange={e => setValorVenda(e.target.value)}
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '5vh', padding: '2vh' }}>
                    <h4>Minha Carteira</h4>
                    <div style={{ marginBottom: '5vh' }}>
                        Valor atual da carteira: R$
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
                            value={saldoCarteira}
                            disabled={true}
                        />
                    </div>
                    <div>
                        Créditos de carbono compensados:
                        <input
                            style={{ marginLeft: '2vw' }}
                            value={saldoCarteira}
                            disabled={true}
                        />
                    </div>
                    <div>
                        Créditos de carbono disponíveis:
                        <input
                            style={{ marginLeft: '2vw' }}
                            value={saldoCarteira}
                            disabled={true}
                        />
                    </div>

                </div>
            </div>
            <div style={{ border: 'solid', borderWidth: '2px', marginTop: '5vh', padding: '2vh' }}>
                <h4 style={{textAlign: 'center'}}>Mercado Livre de Energia</h4>
                <div style={{width: '40vw'}}>
                    Distribuidora de energia
                    <Select
                        style={{height: '10px'}}
                        value={{value: distribuidora, label: distribuidora}}
                        onChange={e => setDistribuidora(e.value)}
                        options={[
                            {value: 'brasilER',label: 'Brasil Elétrica Renovável'},
                            {value: 'energiaBrasil',label: 'Energia do Brasil'},
                            {value: 'engie',label: 'Engie'}
                        ]}
                    />
                </div>
                <div style={{width: '40vw', marginTop: '5vh'}}>
                    Total em kWh
                    <input
                        style={{marginLeft: '2vw'}}
                        className="form-control"
                        value={kwh}
                        onChange={e => setKwh(e.target.value)}
                    />
                </div>
                <div style={{width: '40vw', marginTop: '5vh'}}>
                    Prazo do contrato
                    <input
                        style={{marginLeft: '2vw'}}
                        className="form-control"
                        value={kwh}
                        onChange={e => setKwh(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}
export default Negocicacao