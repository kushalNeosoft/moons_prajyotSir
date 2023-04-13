import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Holdings from '../Holdings';
import Positions from '../Positions';
const Tab = createMaterialTopTabNavigator();

function AnimatedTopBar({setScrollValue}) {
  return (
    <Tab.Navigator
      //   scrollEnabled={true}
      screenOptions={{
        // tabBarScrollEnabled: true,
        lazy: true,
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
          textTransform: 'none',
        },
        // style: {padding: 0},
      }}>
      <Tab.Screen
        name="Holdings"
        // component={Holdings}
        children={props => (
          <Holdings setScrollValue={setScrollValue} {...props} />
        )}
        options={{tabBarLabel: 'Holdings'}}
      />
      <Tab.Screen
        name="Positions"
        component={Positions}
        options={{tabBarLabel: 'Positions'}}
      />
    </Tab.Navigator>
  );
}
export default AnimatedTopBar;
