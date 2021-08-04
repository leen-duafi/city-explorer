import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


export class Weather extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#FFFDED", color: "#B792DE" }}>
                <br></br>
                {this.props.displayData &&
                    <Card style={{ width: '25rem', marginLeft: "450px", padding: "10px", backgroundColor: " #D0D0F7" }}>
                        <Card.Img variant="top" src={`https://store-images.s-microsoft.com/image/apps.16894.c02476d2-2378-4f60-8290-b6d4b3842643.79a2ef6a-4775-4c79-8d93-9caf077660eb.1bbd88a4-0a17-4750-91a0-cd7d98f58e9d`} alt="" />
                        <Card.Body>
                            <Card.Title> THE WEATHER FOR THE NEXT THREE DAYS </Card.Title>
                            <Card.Title> 📅{this.props.weatherApi[0].date}</Card.Title>
                            <Card.Text>
                                💁 {this.props.weatherApi[0].description}
                            </Card.Text>
                            <Card.Title> 📅{this.props.weatherApi[1].date}</Card.Title>
                            <Card.Text>
                                💁 {this.props.weatherApi[1].description}
                            </Card.Text>
                            <Card.Title> 📅{this.props.weatherApi[2].date}</Card.Title>
                            <Card.Text>
                                💁 {this.props.weatherApi[2].description}
                            </Card.Text>


                        </Card.Body>
                    </Card>

                }
                <WeatherDay

                    weatherApi={this.props.weatherApi}

                />
            </div>
        )
    }
}

class WeatherDay extends Component {
    render() {
        return (
            <div>
                {this.props.weatherApi.map(item => {
                    return <div>
                        <br></br>
                        <Card style={{ width: '25rem', marginLeft: "600px", padding: "10px", backgroundColor: " #D0D0F7" }}>
                            <Card.Img variant="top" src={`https://store-images.s-microsoft.com/image/apps.16894.c02476d2-2378-4f60-8290-b6d4b3842643.79a2ef6a-4775-4c79-8d93-9caf077660eb.1bbd88a4-0a17-4750-91a0-cd7d98f58e9d`} alt="" />
                            <Card.Body>
                                <Card.Title> WEATHER DAY BY DAY</Card.Title>
                                <Card.Title> 📅{item.date}</Card.Title>
                                <Card.Text>
                                    💁 {item.description}
                                </Card.Text>


                            </Card.Body>
                        </Card>

                    </div>
                })}
            </div>
        )
    }
}

export default Weather
