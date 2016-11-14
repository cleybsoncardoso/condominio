
var React = require('react-native');

var
{
  Component,
  AppRegistry,
  View,
  Text,
  StyleSheet
} = React;


var welcome = React.createClass(
  {
    render: function()
{
  return <View>
  <Text>
    welcome ricardo
  </Text>
  </View>
}

})

var HelloWorld = React.createClass({
  render: function(){
    return <View style=(styles.container)>
      <Text>
      Hello world!!!
      </Text>
      <welcome/>
      </View>
  }
})


var styles = StyleSheet.create(
  {
    container:
    {
      flex:1,
      justifyContent:'center',
      alignItems : 'center'
    }
  }
)

AppRegistry.registerComponent('HelloWorld', function(){
  return HelloWorld;
})
