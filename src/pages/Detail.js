import React, { Component } from 'react';


class Detail extends Component {
  state = {
    country: [],
  }

  componentDidMount(){
    console.log('mounting')
    console.log(this.props.parentCountry)
    this.setState({
      country: this.props.parentCountry
    })
 
    
  }

  
  render() {
    console.log(this.props.parentCountry)

    return (
      <div>
        {this.props.parentCountry && <p>{this.state.country.capital}</p>}

      </div>
    );
  }
}

export default Detail;