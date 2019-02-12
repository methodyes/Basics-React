import React, { Component } from "react";

class Objectlistcounter5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Fish: [{ name: "tuna", price: 350 }, { name: "shark", price: 800 }, { name: "prawns", price: 900 }],
      title: " Fish List",
      title1: " Customer feedback"
    };
  }
  increaseby = () => {
    const fishList = this.state.Fish.map(fish => {
      fish.price = fish.price + 150;
      return fish;
    });
    this.setState({
      Fish: fishList
    });
  };
  reduceby() {
    const fishList2 = this.state.Fish.map(fist2 => {
      return this.reducedby100(fist2);
    });
    this.setState({
      Fish: fishList2
    });
  }
  reducedby100(fist2) {
    fist2.price = fist2.price - 100;
    return fist2;
  }
  arrayIf() {
    if (this.state.Fish[0].price > 1500) {
      return <h4>Tuna price is too high</h4>;
    } else if (this.state.Fish[1].price < 300) {
      return <h4> Shark price is too low</h4>;
    } else if (this.state.Fish[2].price >= 1900) {
      return <h4> This is the prawns maximum price Rs. 1900.00</h4>;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.increaseby}>Increase by 150</button>
        <button onClick={() => this.reduceby()}>Decrease by 100</button>
        {this.state.Fish.map(fish => {
          return (
            <h3>
              {fish.name} --- {fish.price}
            </h3>
          );
        })}
        <h1>{this.state.title1}</h1>
        <h2 style={{ color: "red" }}>{this.arrayIf()}</h2>
      </div>
    );
  }
}

export default Objectlistcounter5;
