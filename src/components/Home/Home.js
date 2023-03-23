import './Home.css';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

class Home extends React.Component {
    constructor(props) {    
        super(props);
        this.state = {      
            selectedNode: 0,
            displayedBanner: 0      
        }; 
    }   
    componentDidMount() {
        this.bannerChange() 
    }
    nodeOnClick(index) {
        this.setState({selectedNode: index})
    }
    bannerChange() {
        setTimeout(() => {
            this.setState({displayedBanner: Math.floor(Math.random() * 3)})
            this.bannerChange()
        }, 3000);
    }
    render() {
        const nodes = ["SNJSEA_1_N101", "SNJOSEB_1_N013", "CATALYST_7_N002", "FMC_1_N003", "CSCGNRA2_7_N101", "EVRGREEN_1_N019", "MONTAGUE_1_N007", "MILPITAS_1_N008", "DIXONLD_1_N008", "LAWRENCE_1_N006"]

        return (
            <div id="home">
                <header className='navbar'>
                    <div className='navbar__title navbar__item'>BayArea Electricity Price Forecast</div>
                    <div className='navbar__item'>About Us</div>
                    <div className='navbar__item'>Contact Us</div>
                </header>
                <div className="journey_cards_section">
                    <div className="journey_card">
                        <Card sx={[{ minWidth: 275 , height: '100%'}]}>
                            <img src={"banners/"+this.state.displayedBanner+ ".jpeg"} className="energy_price"></img>
                        </Card>
                    </div>
                    <div className="main_section">
                        <div className="nodes_section">
                            <Card sx={{ minWidth: 275 }} className="nodes_buttons">
                            {nodes.map((node, index) => (
                                <button key={index} className="node-button" onClick={() => { this.nodeOnClick(index)}}>
                                    {node}
                                </button>
                            ))}
                            </Card>
                        </div>
                        <div className="main_body">
                            <div className="stats_section">
                                <Card sx={{ minWidth: 100 }} className="stat_card">
                                    <span className="overview-icon current-demand">
                                        <span className="overview-large-number">18,834 <span>MW</span></span>
                                        <span className="overview-large-label">Current demand</span>
                                    </span>
                                </Card>
                                <Card sx={{ minWidth: 100 }} className="stat_card">
                                    <span className="overview-icon forecasted-peak">
                                        <span className="overview-large-number">26,199 <span>MW</span></span>
                                        <span className="overview-large-label">Forecasted peak</span>
                                    </span>
                                </Card>
                                <Card sx={{ minWidth: 100 }} className="stat_card">
                                    <span className="overview-icon current-demand">
                                        <span className="overview-large-number">18,834 <span>MW</span></span>
                                        <span className="overview-large-label">Current demand</span>
                                    </span>
                                </Card>
                                <Card sx={{ minWidth: 100 }} className="stat_card">
                                    <span className="overview-icon forecasted-peak">
                                        <span className="overview-large-number">26,199 <span>MW</span></span>
                                        <span className="overview-large-label">Forecasted peak</span>
                                    </span>
                                </Card>
                            </div>
                            <div className="graph_section">
                                <Card sx={{ minWidth: 275 }}>
                                    <img src={"graphs/"+this.state.selectedNode+".png"} className="sample_graph"></img>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="journey_card">
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                Other Sections
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

function HomeApp() {
    return (
        <Home />
    );
}

export default HomeApp;