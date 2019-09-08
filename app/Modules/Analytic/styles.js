import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 50,
  },
  chartConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartHeading: {
    fontWeight: 'bold',
  },
  chartDescription: {},
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#e6f4fb',
    marginBottom: 15,
  },

  //header
  header: {
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  logout: {
    color: 'red',
  },

  // char styles
  progressContainter: {
    flex: 1,
    height: 25,
    flexDirection: 'row',
    marginVertical: 25,
  },
  yesProgress: {backgroundColor: '#1eb53a'},
  noProgress: {backgroundColor: '#0d4d92'},
  yesText: {color: '#1eb53a'},
  noText: {color: '#0d4d92'},
});

export default style;
