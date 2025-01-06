import * as React from "react";
class Component2 extends React.Component {
  render() {
    return (
      <div>
        <h1> Component 1 </h1>
        <h2> hii</h2>
      </div>
    );
  }
}

class Component1 extends React.Component {
  render() {
    return (
      <div>
        <h1>Second Component</h1>
        <h2>Third Component</h2>
        <Component2 />
      </div>
    );
  }
}
export default Component1;