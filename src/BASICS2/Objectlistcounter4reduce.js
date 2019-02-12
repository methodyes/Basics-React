import React, { Component } from "react";

class Objectlistcounter4reduce extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Phones: [
        { Name: " Lenovo", Price: 35000 },
        { Name: " Samsung", Price: 42000 },
        { Name: " Iphone", Price: 120000 },
        { Name: " Htc", Price: 55000 }
      ],
      title: " Reduce the prices of mobile phones by Rs.4500.00"
    };
  }
  reduceprice =()=>{
      const mobileprice = this.state.Phones.map((mobile)=>{
          return this.reduced(mobile)
      })
      this.setState ({
        Phones:mobileprice
      })
  }
  reduced(mobile){
    mobile.Price -= 4500
    return mobile
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <button onClick={this.reduceprice}>Reduced by</button>
        {this.state.Phones.map((mobile)=>{
            return (
                <h4>
                    {mobile.Name} phone new price - {mobile.Price}
                </h4>
            )
        })}
      </div>
    );
  }
}
export default Objectlistcounter4reduce;
//important