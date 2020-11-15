import {Platform} from 'react-native';


import colors from './colors'

export default {
     colors,
     text:{
          color: colors.black,
          fontSize: 18,
          width: '100%',
          fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Thonburi',
     },
}