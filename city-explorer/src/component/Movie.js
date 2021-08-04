import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export class Movie extends Component {
  render() {
    return (

      <div style={{ backgroundColor: "#FFFDED", color: "#F2F2F2" }}>
        <br></br>
        {this.props.displayData &&

          <Card style={{ width: '25rem', marginLeft: "450px", padding: "10px", backgroundColor: " #8BD1D9" }}>
            <Card.Img variant="top" src={`https://previews.123rf.com/images/vadmary/vadmary1803/vadmary180300028/97926551-popcorn-cinema-reel-disposable-cup-clapper-board-and-tickets-isolated-on-white-concept-cinema-theate.jpg`} alt="" />
            <Card.Body>
              <Card.Title> THE BEST MOVIES NEAR YOU !! </Card.Title>
              <Card.Title> 🎥  TITLE : {this.props.movieApi[3].title}</Card.Title>
              <Card.Text>
                🍿  overview :  {this.props.movieApi[3].overview}
              </Card.Text>
              <Card.Text>
                🎦  REALSED DATE : {this.props.movieApi[3].release_date}
              </Card.Text>
              <Card.Title> 🎥  TITLE : {this.props.movieApi[1].title}</Card.Title>
              <Card.Text>
                🍿  overview :  {this.props.movieApi[1].overview}
              </Card.Text>
              <Card.Text>
                🎦  REALSED DATE : {this.props.movieApi[1].release_date}
              </Card.Text>
              <Card.Title> 🎥  TITLE : {this.props.movieApi[2].title}</Card.Title>
              <Card.Text>
                🍿  overview :  {this.props.movieApi[2].overview}
              </Card.Text>
              <Card.Text>
                🎦  REALSED DATE : {this.props.movieApi[2].release_date}
              </Card.Text>
            </Card.Body>
          </Card>

        }
        <Movies

          movieApi={this.props.movieApi}
        />
      </div>
    )
  }
}

class Movies extends Component {
  render() {
    return (
      <div>
        {this.props.movieApi.map(item => {
          return <div>
            <br></br>
            <Card style={{ width: '25rem', marginLeft: "300px", padding: "10px", backgroundColor: " #8BD1D9" }}>
              <Card.Img variant="top" src={`https://previews.123rf.com/images/vadmary/vadmary1803/vadmary180300028/97926551-popcorn-cinema-reel-disposable-cup-clapper-board-and-tickets-isolated-on-white-concept-cinema-theate.jpg`} alt="" />
              <Card.Body>
                <Card.Title> ALL THE  MOVIES NEAR YOU !!</Card.Title>
                <Card.Title> 🎥  TITLE : {item.title}</Card.Title>
                <Card.Text>
                  🍿  overview :{item.overview}</Card.Text>
                <Card.Text>
                  🎦  REALSED DATE : {item.release_date}</Card.Text>
              </Card.Body>
            </Card>

          </div>

        })

        }
      </div>
    )
  }
}

export default Movie
