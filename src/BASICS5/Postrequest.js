import React, { Component } from 'react'
import axios from 'axios'

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
         axios.post('https://jsonplaceholder.typicode.com/posts/1/comments',this.state) 
        //  the post method is taking second argument which is the data that has to be sent
        // once the request is completed, we get either response or get an error, as blw.
        .then(response=>{
         console.log(response)
        })
        .catch(error=>{
            console.log(error)

        })
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
create three input tags. */