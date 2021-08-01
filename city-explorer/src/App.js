import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      lockationShow: {},
    }
  }

  submitLocatio = async (event) => {
    event.preventDefault();
    let location = event.target.location.value
    let response = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_TOKEN}&q=${location}&format=json`)
    console.log(location)
    console.log(response.data)

    this.setState({
      lockationShow: response.data[0]
    });

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
        {this.state.lockationShow.display_name &&
          <p>
            {this.state.lockationShow.display_name}
          </p>
        }
        {this.state.lockationShow.lat &&
          <p>
            latitude : {this.state.lockationShow.lat}
          </p>
        }

        {this.state.lockationShow.lon &&
          <p>
            longitude : {this.state.lockationShow.lon}
          </p>
        }
        <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.9e221ab5099baae1056e68315bd3adc4
        &center=${this.state.lockationShow.lat},${this.state.lockationShow.lon}&zoom=15&format=png`} alt="" />
      </div>
    )
  }
}

export default App

