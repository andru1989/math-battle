import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Row, Input } from 'react-materialize';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = ({ currentDifficulty: 'medium' }) // Default difficulty
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
  }

  handleDifficultyChange(changeEvent) {
    this.setState({ currentDifficulty: changeEvent.target.value })
  }

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
                  <Row>
                    <Input name='difficulty' type='radio' value='easy' label='Easy' className='with-gap' checked={this.state.currentDifficulty === 'easy'} onChange={this.handleDifficultyChange} />
                    <Input name='difficulty' type='radio' value='medium' label='Medium' className='with-gap' checked={this.state.currentDifficulty === 'medium'} onChange={this.handleDifficultyChange} />
                    <Input name='difficulty' type='radio' value='hard' label='Hard' className='with-gap' checked={this.state.currentDifficulty === 'hard'} onChange={this.handleDifficultyChange} />
                  </Row>

                  <Link to="/board">
                    <Button floating className='teal darken-2 extra-large' waves='light'>
                      <Icon right>play_arrow</Icon>
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

export default Home;
