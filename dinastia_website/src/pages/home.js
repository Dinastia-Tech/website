import logo from '../logo.svg';
import '../App.css';

const HomePage = () => {
    return (
        <div>
            <div style={{height: '30vh', alignItems: 'center', alignText: 'center'}}>
                Texto introdutório

            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', height: '30vh', alignItems: 'center', marginTop: '10vh' }}>
                <div style={{
                    border: 'solid', height: '30vh', width: '25vw', alignItems: 'center', marginLeft: '5vw',
                    borderWidth: '.5px'
                }}>
                    Card1
                </div>
                <div style={{
                    border: 'solid', height: '30vh', width: '25vw', alignItems: 'center', marginLeft: '5vw',
                    borderWidth: '.5px'
                }}>
                    Card2
                </div>
                <div style={{
                    border: 'solid', height: '30vh', width: '25vw', alignItems: 'center', marginLeft: '5vw',
                    marginRight: '5vw', borderWidth: '.5px'
                }}>
                    Card3
                </div>
            </div>
        </div>
    )
}

export default HomePage