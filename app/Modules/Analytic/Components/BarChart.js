import React from 'react';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';
import {Text} from 'react-native';

export default function BarChart(props) {
  const {data} = props;
  return (
    <>
      <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
        <VictoryBar style={{data: {fill: '#c43a31'}}} data={data} />
      </VictoryChart>
      {
        <>
          <Text> - Y Axis: No of Restaurants</Text>
          <Text> - X Axis: Ratings(0 to 5)</Text>
        </>
      }
    </>
  );
}
