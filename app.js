// TODO

// import React from 'react';
// import ReactDOM from 'react-dom';


/*
 To make applications interactive, our components need to do more than simply receive props.
  Sometimes components need to store data that cannot be explicitly passed in
   as props and re-render this data changes.
*/


var App = () => (
    <div>
    <h1>My Grocery List</h1>
   <GroceryList groceryList={["Apples", "Juice", "Water"]}/>
   </div>
);


var GroceryList = (props) => {
  // props are immutable and cannot be changed once passed in from a parent
  console.log(props, "props inside GroceryList")

  return (
      <ul>
    {props.groceryList.map((item, i) =>
      <GroceryListItem item={item} key={i}/>
    )}
  </ul>
  )
}

// <ul>
// <GroceryListItem array={props.groceryList}/>
// <Kale  item={props.groceryList[0]} func={onListItemClick.bind(this,`I am ${props.groceryList[0]}`)}/>
// <Grapes  item={props.groceryList[1]} func={onListItemClick.bind(this,`I am ${props.groceryList[1]}`)}/>
// </ul>


// MAY NEED THIS AGAIN
// var GroceryListItem = (props) => {
//   // props are immutable and cannot be changed once passed in from a parent
//   const onListItemClick = (name)=> {
//     alert("I was clicked! " + name);
//   };
//
//   return (
//     < li key={props.key} onClick = {onListItemClick.bind(this, props.item)}> {props.item}</li>
//   )
// };


// class GroceryListItem extends React.Component {
//
//   constructor(props) {
//     // Equivalent to ES5's React.Component.call(this, props)
//     super(props);
//   }
//   onListItemClick(name){
//   alert("I was clicked! " + name);
//   };
//
//   render() {
//
//     // `props` is no longer passed as an argument,
//     // but instead accessed with `this.props`
//     return (
//       < li key={this.props.key} onClick = {this.onListItemClick.bind(this, this.props.item)}> {this.props.item}</li>
//   );
//
//   }
//
// }


class GroceryListItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      done: false
    };

  }
  onListItemClick(name){

    alert("I was clicked! " + name);
  };
  onListItemHover(){
    this.setState({done: !this.state.done});
  };
    render() {

      let style = {
        fontWeight: this.state.done ? 'bold' : 'normal'
      };
    return (
      < li style={style} key={this.props.key} onClick = {this.onListItemClick.bind(this, this.props.item)}  onMouseOver={this.onListItemHover.bind(this)}> {this.props.item}</li>
  );

  }

}

















// var Kale = (props) => {
//   return (<div >
//     < li onClick = {props.func}>{props.item}</li>
//   < / div >)
// };
//
// var Grapes = (props) => {
//   return (<div >
//   < li onClick = {props.func}> {props.item}</li>
//   < / div >)
// }







ReactDOM.render(<App />, document.getElementById("app"));