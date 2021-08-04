import React, { Component } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './component/Weather';
import Movie from './component/Movie'
import Location from './component/Location';
import './index.css';

import { left } from '@popperjs/core';

export class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      lockationShow: {},
      displayData: false,
      errorWrning: '',
      errorShow: false,
      weatherBackend: [],//07
      weatherApi: [],
      movieApi: []
    }
  }



  submitLocatio = async (event) => {
    event.preventDefault();
    let location = event.target.location.value
    try {
      let response = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&q=${location}&format=json`)



      // let weather = await axios.get(`http://localhost:3001/weather?searchQuery=${cityName}&lon=${lockationShow.lon}&lot=${lockationShow.lot}`)//07

      const lockationShow = response.data[0];
      let weather2 = await axios.get(`http://localhost:3001/weather2?lat=${lockationShow.lat}&lon=${lockationShow.lon}`)

      let cityName = lockationShow.display_name.split(',')[0];
      let movie = await axios.get(`http://localhost:3001/movie?query=${cityName}`)


      this.setState({
        lockationShow: response.data[0],
        displayData: true,
        // weatherBackend: weather.data,//07
        weatherApi: weather2.data,
        movieApi: movie.data

      });

    }

    catch (fault) {
      this.setState({
        errorShow: true,
        errorWrning: `${fault.response.status} ${fault.response.data.error}`
      }

      )
    }

  }

  render() {
    return (
      <div>
        <form style={{ margin: "10px", color: "#3C258F", backgroundColor: "wheat" }} onSubmit={this.submitLocatio}>
          <br></br>
          <label> LOCATION NAME </label>
          <input style={{ margin: "10px", color: "#3C258F" }} name="location" type="text" />
          {/* <br></br>
          <br></br> */}
          <input style={{ margin: "10px", color: "#3C258F" }} type="submit" value=" EXPLORE !" />
        </form>
        {this.state.displayData &&
          <div style={{ backgroundColor: "#FFFDED", color: "#1B8EF2" }}>
            <br></br>
            <Card style={{ width: '25rem', marginLeft: "450px", padding: "10px", backgroundColor: " #BBDDF2" }}>
              <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.9e221ab5099baae1056e68315bd3adc4
        &center=${this.state.lockationShow.lat},${this.state.lockationShow.lon}&zoom=15&format=png`} alt="" />
              <Card.Body>
                <Card.Title>LOCATION INFORMATION</Card.Title>
                <Card.Title>{this.state.lockationShow.display_name}</Card.Title>
                <Card.Text>
                  latitude : {this.state.lockationShow.lat}
                </Card.Text>
                <Card.Text>
                  longitude : {this.state.lockationShow.lon}
                </Card.Text>
              </Card.Body>
            </Card>

            {
              this.state.weatherBackend.map(one => {
                console.log(one)
                return (
                  <div>
                    <p>
                      {one.valid_date} 📅
                    </p>
                    <p>
                      💁 {one.description}
                    </p>
                  </div>

                )
              }

              )
            }

          </div>
        }
        {/* <p>
          {this.state.errorWrning}
        </p> */}
        <Weather
          weatherApi={this.state.weatherApi}
          displayData={this.state.displayData}
        />
        <Movie
          movieApi={this.state.movieApi}
          displayData={this.state.displayData}
        />
        {/* <Location
        displayData={this.state.displayData}
        lockationShow={this.state.lockationShow}
        /> */}
      </div >
    )
  }
}

export default App

