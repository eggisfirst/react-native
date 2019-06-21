import React from "react"; 
import { View, Text, Button } from "react-native"; 
import { createStackNavigator, createAppContainer } from "react-navigation"; 
class HomeScreen extends React.Component { 
      render() { 
          return ( 
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Home Screen</Text>
              <Button
                title="Go to Details"
                onPress={() => this.props.navigation.navigate('Details')}
              />
            </View>
          )
          } 
        } 
  
  class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Details Scree123123</Text>
          <Button
                title="Go to Index"
                onPress={() => this.props.navigation.navigate('Index')}
              />
        </View>
      );
    }
  }
  class Index extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Index</Text>
        </View>
      );
    }
  }

  const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
      Index: Index
    },
    {
      initialRouteName: "Home"
    }
  );
  const AppContainer = createAppContainer(AppNavigator);

  export default AppContainer;
  