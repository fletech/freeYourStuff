import React from 'react';
import {Text} from 'react-native';

import colors from '../config/colors'
import defStyles from '../config/defStyles'

function Apptext({children, style}) {
     return (

     <Text style={[defStyles.text, style]}>{children}</Text>

     );
}

export default Apptext;
