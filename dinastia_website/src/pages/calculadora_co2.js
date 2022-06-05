import React, { useEffect, useState } from "react";
import Select from 'react-select'

const Calculadora = () => {
    const [nome, setNome] = useState()
    const [setor, setSetor] = useState()
    const [estado, setEstado] = useState()

    const [nomeInserido, setNomeInserido] = useState(false)
    const [setorInserido, setSetorInserido] = useState()

    useEffect(() => {
        if (nome) setNomeInserido(true)
        if (setor) setSetorInserido(true)
    }, [nome, setor])

    console.log(nome, 'nome')
    console.log(setor, 'setor')
    console.log(estado, 'estado')

    return (
        <div>
            <div style={{ border: 'solid', marginLeft: '10vw', marginRight: '10vw', marginTop: '5vh', padding: '1vw' }}>
                Texto
                <div style={{ marginTop: '5vh' }}>
                    <div>
                        Digite seu nome:
                        <input
                            style={{ marginLeft: '2vw' }}
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    {nomeInserido &&
                        <div style={{ width: '20vw' }}>
                            Selecione o setor de sua empresa:
                            <Select
                                value={{value: setor, label: setor}}
                                onChange={e => setSetor(e.value)}
                                options={[
                                    { value: 'transportes', label: 'Transportes' },
                                    { value: 'industrias', label: 'Indústrias' },
                                    { value: 'residencias', label: 'Residencias' },
                                    { value: 'setorEnergetico', label: 'Setor Energetico' },
                                    { value: 'agropecuaria', label: 'agropecuária' },
                                    { value: 'servicos', label: 'serviços' }
                                ]}
                            />
                        </div>
                    }
                    {setorInserido &&
                        <div style={{ width: '20vw' }}>
                            Selecion o estado de sua empresa:
                            <Select
                                value={estado}
                                onChange={e => setEstado(e.value)}
                                options={[
                                    { value: 'AC', label: 'AC' },{ value: 'AL', label: 'AL' },
                                    { value: 'AP', label: 'AP' },{ value: 'AM', label: 'AM' },
                                    { value: 'BA', label: 'BA' },{ value: 'CE', label: 'CE' },
                                    { value: 'DF', label: 'DF' },{ value: 'ES', label: 'ES' },
                                    { value: 'GO', label: 'GO' },{ value: 'MA', label: 'MA' },
                                    { value: 'MT', label: 'MT' },{ value: 'MS', label: 'MS' },
                                    { value: 'MG', label: 'MG' },{ value: 'PA', label: 'PA' },
                                    { value: 'PB', label: 'PB' },{ value: 'PR', label: 'PR' },
                                    { value: 'PE', label: 'PE' },{ value: 'PI', label: 'PI' },
                                    { value: 'RJ', label: 'RJ' },{ value: 'RN', label: 'RN' },
                                    { value: 'RS', label: 'RS' },{ value: 'RR', label: 'RR' },
                                    { value: 'SC', label: 'SC' },{ value: 'SP', label: 'SP' },
                                    { value: 'SE', label: 'SE' },{ value: 'TO', label: 'TO' }
                                ]}
                            />
                        </div>
                    }
                </div>
                <button
                    onClick={() => {

                    }}
                    className="form-control"
                    
                >Calcule</button>
            </div>
        </div>
    )
}

export default Calculadora