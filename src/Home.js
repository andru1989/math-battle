import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';

class Home extends Component {
  render() {
    return(
      <div className="row">
        <div className="col s12 m12">
          <div className="card">
            <div className="card-content white-text teal darken-2">
              <h1 className="center-align">MATH BATTLE</h1>
            </div>

            <div className="card-action center-align">
              <div className="row">
                <div className="col s12">
                  <Button floating className='teal darken-2 extra-large' waves='light' node='a' href="/board">
                    <Icon right>play_arrow</Icon>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Home;
