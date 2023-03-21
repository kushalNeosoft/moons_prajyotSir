import {StyleSheet} from 'react-native';


export const SettingsScreenStyle = StyleSheet.create({
  rootContainer: {
    padding: '5%',
    flex: 1,
  },
  optionContainer: {
    height: '10%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 12,
    color: '#121212',
  },
  valueText: {
    textAlign: 'right',
    fontSize: 12,
    color: '#121212',
  },
  leftAlignContainer: {
    flex: 1,
  },
  rightAlignContainer: {
    flex: 1,
    alignSelf: 'flex-end',
  },
});
