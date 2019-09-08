import React from 'react';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';

export default function BarChart(props) {
  const {data} = props;
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
      <VictoryBar style={{data: {fill: '#c43a31'}}} data={data} />
    </VictoryChart>
  );
}
