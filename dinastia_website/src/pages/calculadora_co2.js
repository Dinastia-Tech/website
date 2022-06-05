import React, { useEffect, useState } from "react";
import Select from 'react-select'
import Chart from 'react-google-charts'
import { Link } from 'react-router-dom'

const Calculadora = () => {
    const [nome, setNome] = useState()
    const [setor, setSetor] = useState()
    const [estado, setEstado] = useState()
    const [porte, setPorte] = useState()

    const [co2Total, setCo2Total] = useState()
    const [graphData, setGraphData] = useState()

    const [nomeInserido, setNomeInserido] = useState(false)
    const [setorInserido, setSetorInserido] = useState()
    const [estadoInserido, setEstadoInserido] = useState()
    const [maiorQueLimite, setMaiorQueLimite] = useState()

    useEffect(() => {
        if (nome) setNomeInserido(true)
        if (setor) setSetorInserido(true)
        if (estado) setEstadoInserido(true)
    }, [nome, setor, estado])

    const calculaResultado = (setor, estado, porte) => {
        let geracao = {
            transporte: { petroleo: .85, termeletrica: .15 },
            industria: { petroleo: .30, termeletrica: .70 },
            varejo: { hidreletrica: .30, solar: .10, termeletrica: .30, biomassa: .30 },
            tecnologia: { hidreletrica: .80, termeletrica: .10, biomassa: .10 },
            agropecuaria: { carvao: .20, petroleo: .20, termeletrica: .30, hidreletrica: .10, solar: .10 },
            servicos: { hidreletrica: .55, solar: .20, termeletrica: .10, petroleo: .15 }
        }

        let co2 = {
            transporte: 5 * geracao['transporte']['petroleo'] + 30 * geracao['transporte']['termeletrica'],
            industria: 30 * geracao['industria']['termeletrica'] + 5 * geracao['industria']['petroleo'],
            varejo: geracao['varejo']['biomassa'] + 30 * geracao['varejo']['termeletrica'] + geracao['varejo']['solar'] +
                2.5 * geracao['varejo']['hidreletrica'],
            tecnologia: 2.5 * geracao['tecnologia']['hidreletrica'] + 30 * geracao['tecnologia']['termeletrica'] + geracao['tecnologia']['biomassa'],
            agropecuaria: 15 * geracao['agropecuaria']['carvao'] + 5 * geracao['agropecuaria']['petroleo'] + 30 * geracao['agropecuaria']['termeletrica'] +
                2.5 * geracao['agropecuaria']['hidreletrica'] + geracao['agropecuaria']['solar'],
            servicos: 2.5 * geracao['servicos']['hidreletrica'] + geracao['servicos']['solar'] + 30 * geracao['servicos']['termeletrica'] + 5 * geracao['servicos']['petroleo']
        }

        let fatorTamanhos = {
            pequeno: .75,
            medio: 1.25,
            grande: 2
        }

        let fatorEstados = {
            RO: 1.057, AC: 1.001, AM: 1.017, RR: 1.002,
            PA: 1.108, AP: 1.006, TO: 1.011, MA: 1.028,
            PI: 1.018, CE: 1.025, RN: 1.037, PB: 1.005,
            PE: 1.020, AL: 1.016, SE: 1.015, BA: 1.062,
            SP: 1.088, MG: 1.072, ES: 1.020, RJ: 1.102,
            PR: 1.106, SC: 1.031, RS: 1.044, MS: 1.035,
            MT: 1.035, GO: 1.034, DF: 1.001
        }

        setCo2Total((co2[setor] * fatorTamanhos[porte] * fatorEstados[estado]).toFixed(2))

        let auxPercentFontes = 0
        let fontesEnergeticas = Object.keys(geracao[setor])
        let aux = fontesEnergeticas.map(gerado => {
            if (['termeletrica', 'petroleo', 'carvao'].includes(gerado)) {
                auxPercentFontes += geracao[setor][gerado]
            }
            return [gerado, geracao[setor][gerado]]
        })
        aux = [['Matriz', '%'], ...aux]

        setGraphData(aux)
        setMaiorQueLimite(auxPercentFontes > 0.8 ? true : false)
    }

    return (
        <div style={{ marginLeft: '5vw', marginRight: '5vw' }}>
            <div style={{
                border: 'solid', marginTop: '5vh', padding: '3vh', color: 'white', borderRadius: '20px 20px',
                backgroundImage: "linear-gradient(to bottom right, #98FB98, #2E8B57)"
            }}>
                <h2>Cálculo da sua pegada de carbono</h2>
                <div style={{ marginTop: '5vh', display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        Digite o nome da sua empresa:
                        <input
                            style={{ marginLeft: '2vw' }}
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    {nomeInserido &&
                        <div style={{ width: '20vw', color: 'black' }}>
                            <div style={{ color: 'white' }}>
                                Selecione o setor:
                            </div>
                            <Select
                                value={{ value: setor, label: setor }}
                                onChange={e => setSetor(e.value)}
                                options={[
                                    { value: 'transporte', label: 'Transportes' },
                                    { value: 'industria', label: 'Indústrias' },
                                    { value: 'varejo', label: 'Varejo' },
                                    { value: 'tecnologia', label: 'Tecnologia' },
                                    { value: 'agropecuaria', label: 'agropecuária' },
                                    { value: 'servicos', label: 'serviços' }
                                ]}
                            />
                        </div>
                    }
                    {setorInserido &&
                        <div style={{ width: '20vw', marginLeft: '5vw', color: 'black' }}>
                            <div style={{ color: 'white' }}>
                                Selecione o estado:
                            </div>
                            <Select
                                value={{ value: estado, label: estado }}
                                onChange={e => setEstado(e.value)}
                                options={[
                                    { value: 'AC', label: 'AC' }, { value: 'AL', label: 'AL' },
                                    { value: 'AP', label: 'AP' }, { value: 'AM', label: 'AM' },
                                    { value: 'BA', label: 'BA' }, { value: 'CE', label: 'CE' },
                                    { value: 'DF', label: 'DF' }, { value: 'ES', label: 'ES' },
                                    { value: 'GO', label: 'GO' }, { value: 'MA', label: 'MA' },
                                    { value: 'MT', label: 'MT' }, { value: 'MS', label: 'MS' },
                                    { value: 'MG', label: 'MG' }, { value: 'PA', label: 'PA' },
                                    { value: 'PB', label: 'PB' }, { value: 'PR', label: 'PR' },
                                    { value: 'PE', label: 'PE' }, { value: 'PI', label: 'PI' },
                                    { value: 'RJ', label: 'RJ' }, { value: 'RN', label: 'RN' },
                                    { value: 'RS', label: 'RS' }, { value: 'RR', label: 'RR' },
                                    { value: 'SC', label: 'SC' }, { value: 'SP', label: 'SP' },
                                    { value: 'SE', label: 'SE' }, { value: 'TO', label: 'TO' }
                                ]}
                            />
                        </div>
                    }
                    {estadoInserido &&
                        <div style={{ width: '25vw', marginLeft: '5vw', color: 'black' }}>
                            <div style={{ color: 'white' }}>
                                selecione o tamanho:
                            </div>
                            <Select
                                value={{ value: porte, label: porte }}
                                onChange={e => setPorte(e.value)}
                                options={[
                                    { value: 'pequeno', label: 'Menor que 100 funcionários' },
                                    { value: 'medio', label: 'Entre 100 e 500 funcionários' },
                                    { value: 'grande', label: 'Acima de 500 funcionários' }
                                ]}
                            />
                        </div>
                    }
                </div>
                <button
                    onClick={() => {
                        if (setor && porte && estado) {
                            calculaResultado(setor, estado, porte)
                        }
                    }}
                    className="form-control"

                >Calcule</button>
            </div>
            {graphData && co2Total &&
                <div style={{ marginTop: '10vh', padding: '5vh' }}>
                    <div>
                        <h3 style={{ textAlign: 'center' }}>Sua pegada de carbono é {co2Total} MtCO2</h3>
                    </div>
                    <div>
                        <Chart
                            chartType="BarChart"
                            data={graphData}
                            options={{ colors: ['#2E8B57'] }}
                        />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        {maiorQueLimite > 0.8 ?
                            <div>
                                <h3>Seu uso de energia não renováveis está acima do recomendado</h3>
                                <h4> Visite a nossa aba de negociações para comprar energia elétrica de fontes renováveis
                                    com nossos parceiros </h4>
                                <Link to='/negociacao'>Negociações</Link>
                            </div>
                            :
                            <div>
                                <h3>Tokenize aqui seus créditos de carbono</h3>
                                <Link to='/tokenizacao'>Tokenização</Link>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default Calculadora