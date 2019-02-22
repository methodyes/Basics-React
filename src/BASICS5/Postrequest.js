import React, { Component } from 'react'

 class Postrequest extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
        userid : '',
        title : '',
        body :'',
       }
     }
     changeHandler=(t)=>{
         this.setState({
           [t.target.name] : t.target.value
         })
     }
     submitHandler=(e)=>{
         e.preventDefault();
         console.log(this.state)
     }
       
     
     
  render() {
      const {userid,title,body}=this.state
    return (
      <div>
          <form onSubmit={this.submitHandler}>
              <div>
                  <input type="text" name="userid" value={userid} onChange={this.changeHandler}/>
              </div>
              <div>
                  <input type="text" name="title" value={title} onChange={this.changeHandler}/>
              </div>
              <div>
                  <input type="text" name="body" value={body} onChange={this.changeHandler}/>
              </div>
              <div>
                  <button >Submit</button>
              </div>
          </form>
        
      </div>
    )
  }
}

export default Postrequest


/* how to post data to an api from our react application 
need to send the data of userid,title and body to api. (to array list )
create three input tags.