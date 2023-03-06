import './Home.css';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <header className='navbar'>
                    <div className='navbar__title navbar__item'>BayArea Electricity Price Forecast</div>
                    <div className='navbar__item'>About Us</div>
                    <div className='navbar__item'>Contact Us</div>
                </header>
                <div className="journey_cards_section">
                    <div className="journey_card">
                        <Card sx={{ minWidth: 275 }}>
                            <img src="energy_price.jpeg" className="energy_price"></img>
                        </Card>
                    </div>
                    <div className="main_section">
                        <div className="nodes_section">
                            <Card sx={{ minWidth: 275 }} className="nodes_buttons">
                                <button className="node-button" onClick={() => { }}>
                                    SNJSEA_1_N101
                                </button>
                                <button className="node-button" onClick={() => { }}>
                                    SNJOSEB_1_N013
                                </button>
                                <button className="node-button" onClick={() => { }}>
                                    CATALYST_7_N002
                                </button>
                                <button className="node-button" onClick={() => { }}>
                                    FMC_1_N003
                                </button>
                                <button className="node-button" onClick={() => { }}>
                                    CSCGNRA2_7_N101
                                </button>
                                <button className="node-button" onClick={() => { }}>
                                    EVRGREEN_1_N019
                                </button>
                                <button className="node-button" onClick={() => { }}>
                                    MONTAGUE_1_N007
                                </button>
                                <button className="node-button" onClick={() => { }}>
                                    MILPITAS_1_N008
                                </button>
                                <button className="node-button" onClick={() => { }}>
                                    DIXONLD_1_N008
                                </button>
                                <button className="node-button" onClick={() => { }}>
                                    LAWRENCE_1_N006
                                </button>
                            </Card>
                        </div>
                        <div className="main_body">
                            <div className="stats_section">
                                <Card sx={{ minWidth: 100 }} className="stat_card">
                                    <span class="overview-icon current-demand">
                                        <span class="overview-large-number">18,834 <span>MW</span></span>
                                        <span class="overview-large-label">Current demand</span>
                                    </span>
                                </Card>
                                <Card sx={{ minWidth: 100 }} className="stat_card">
                                    <span class="overview-icon forecasted-peak">
                                        <span class="overview-large-number">26,199 <span>MW</span></span>
                                        <span class="overview-large-label">Forecasted peak</span>
                                    </span>
                                </Card>
                                <Card sx={{ minWidth: 100 }} className="stat_card">
                                    <span class="overview-icon current-demand">
                                        <span class="overview-large-number">18,834 <span>MW</span></span>
                                        <span class="overview-large-label">Current demand</span>
                                    </span>
                                </Card>
                                <Card sx={{ minWidth: 100 }} className="stat_card">
                                    <span class="overview-icon forecasted-peak">
                                        <span class="overview-large-number">26,199 <span>MW</span></span>
                                        <span class="overview-large-label">Forecasted peak</span>
                                    </span>
                                </Card>
                            </div>
                            <div className="graph_section">
                                <Card sx={{ minWidth: 275 }}>
                                    <img src="sample_graph.png" className="sample_graph"></img>
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