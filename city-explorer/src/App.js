import React, { Component } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      console.log(location)
      console.log(response.data)



      // let weather = await axios.get(`http://localhost:3001/weather?searchQuery=${cityName}&lon=${lockationShow.lon}&lot=${lockationShow.lot}`)//07

      let lockationShow = response.data[0];
      let weather2 = await axios.get(`http://localhost:3001/weather2?lat=${lockationShow.lat}&lon=${lockationShow.lon}`)

      let cityName = lockationShow.display_name.split(',')[0];
      let movie = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=94244dbb1b056aa2e7a1b54cf7a87581&query=${cityName}`)


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
        <form onSubmit={this.submitLocatio}>
          <br></br>
          <label> LOCATION NAME </label>
          <input name="location" type="text" />
          <br></br>
          <br></br>
          <input type="submit" value=" EXPLORE !" />
        </form>
        {this.state.displayData &&
          <div>
            <br></br>
            <Card style={{ width: '18rem' }}>
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
            {/* <p>
              {this.state.lockationShow.display_name}
            </p>

            <p>
              latitude : {this.state.lockationShow.lat}
            </p>



            <p>
              longitude : {this.state.lockationShow.lon}
            </p>

            <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.9e221ab5099baae1056e68315bd3adc4
        &center=${this.state.lockationShow.lat},${this.state.lockationShow.lon}&zoom=15&format=png`} alt="" /> */}

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
            {
              this.state.weatherApi.map(two => {
                console.log(two)
                return (
                  <div>
                    <p>
                      {two.date} 📅
                    </p>
                    <p>
                      💁 {two.description}
                    </p>
                  </div>

                )
              }

              )
            }

            {
              this.state.movieApi.map(three => {
                console.log(three)

                return (
                  <div>
                    <p>
                      {three.Title} 📅
                    </p>
                    <p>
                      💁 {three.description}
                    </p>
                  </div>

                )
              }

              )
            }
          </div>
        }
        <p>
          {this.state.errorWrning}
        </p>
        {/* <p>
          {this.state.weather}
        </p> */}

      </div>
    )
  }
}

export default App

