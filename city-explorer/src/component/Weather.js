// import React, { Component } from 'react'

// export class Weather extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             lockationShow: {},
//         }
//     }
//     render() {
//         let lockationShow = response.data[0];
//         // let cityName = lockationShow.display_name.split(',')[0];
//         // let weather = await axios.get(`http://localhost:3001/weather?searchQuery=${cityName}&lon=${lockationShow.lon}&lot=${lockationShow.lot}`)//07


//         let weather2 = await axios.get(`http://localhost:3001/weather2?lat=${lockationShow.lat}&lon=${lockationShow.lon}`)

//         this.setState({
//             lockationShow: response.data[0],
//             displayData: true,
//             // weatherBackend: weather.data,//07
//             weatherApi: weather2.data
    
//           });
//         return (


//             <div>
//  {
//               this.state.weatherBackend.map(one => {
//                 console.log(one)
//                 return (
//                   <div>
//                     <p>
//                       {one.valid_date} 📅
//                     </p>
//                     <p>
//                       💁 {one.description}
//                     </p>
//                   </div>

//                 )
//               }

//               )
//             }
//             {
//               this.state.weatherApi.map(two => {
//                 console.log(two)
//                 return (
//                   <div>
//                     <p>
//                       {two.date} 📅
//                     </p>
//                     <p>
//                       💁 {two.description}
//                     </p>
//                   </div>

//                 )
//               }

//               )
//             }
//             </div>
//         )
//     }
// }

// export default Weather
