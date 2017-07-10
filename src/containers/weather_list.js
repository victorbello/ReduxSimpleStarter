import React from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends React.Component {
  renderWeather = ({ city, list }) => {
    const temperature = _.map(list.map(item => {
      return item.main.temp;
    }), temp => (temp * (9/5)) - 459.67);
    const humidity = list.map(item => {
      return item.main.humidity;
    });
    const pressure = list.map(item => {
      return item.main.pressure;
    });
    return (
      <tr key={city.id}>
        <td>{city.name}</td>
        <td>
          <Chart height={120} width={180} data={temperature} color='orange' units='°F' />
        </td>
        <td>
          <Chart height={120} width={180} data={humidity} color='green' units='hPa' />
        </td>
        <td>
          <Chart height={120} width={180} data={pressure} color='black' units='%' />
        </td>
      </tr>
    );
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
