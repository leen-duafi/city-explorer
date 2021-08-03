import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      lockationShow: {},
      displayData: false,
      errorWrning: '',
      errorShow: false,
      weatherBackend: []//07
    }
  }



  submitLocatio = async (event) => {
    event.preventDefault();
    let location = event.target.location.value
    try {
      let response = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&q=${location}&format=json`)
      console.log(location)
      console.log(response.data)

      let lockationShow = response.data[0];
      let cityName= lockationShow.display_name.split(',')[0];
      let weather = await axios.get(`http://localhost:3001/weather?searchQuery=${cityName}&lon=${lockationShow.lon}&lot=${lockationShow.lot}`)//07

      this.setState({
        lockationShow: response.data[0],
        displayData: true,
        weatherBackend: weather.data//07

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
          <label> LOCATION NAME </label>
          <input name="location" type="text" />
          <br></br>
          <br></br>
          <input type="submit" value=" EXPLORE !" />
        </form>
        <h2> LOCATION INFORMATION</h2>
        {this.state.displayData &&
          <div>
            <p>
              {this.state.lockationShow.display_name}
            </p>

            <p>
              latitude : {this.state.lockationShow.lat}
            </p>



            <p>
              longitude : {this.state.lockationShow.lon}
            </p>

            <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.9e221ab5099baae1056e68315bd3adc4
        &center=${this.state.lockationShow.lat},${this.state.lockationShow.lon}&zoom=15&format=png`} alt="" />

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

