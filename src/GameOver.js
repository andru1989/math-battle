import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'react-materialize';

class GameOver extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-content white-text teal darken-2">

              <h1 className="center-align">
                Your Score:
                <p>{this.props.location.state.score}</p>
              </h1>
            </div>

            <div className="card-action center-align">
              <div className="row">
                <div className="col s12">
                  <Link to="/board">
                    <Button floating className='teal darken-2 extra-large' waves='light'>
                      <Icon right>refresh</Icon>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default GameOver;
