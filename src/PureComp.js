import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    return (
      <div>
        PureComponent
      </div>
    )
  }
}

export default PureComp

/* notes-
above structure shows how to create a pure component and the snippets is
rpce , actually this pure component is an alternative for should component update method which
is a lifecycle method or hook. since we have to type manually the 
should component update method for rerendering or skip rendering when the component is updated by changing props or state,
we have to return true or false for run this method but when we create pure component, it will rerender automatically and 
this method is useful for perfomance optimization. */

