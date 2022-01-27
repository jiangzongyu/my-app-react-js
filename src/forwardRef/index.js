import React from "react";

function Son (props){
  const { grandRef } = props
  return <div>
    <div> i am alien </div>
    <span ref={grandRef} >这个是想要获取元素</span>
  </div>
}

class Father extends React.Component{
  constructor(props){
    console.log(props);
    super(props)
  }
  render(){
    return <div>
      <Son grandRef={this.props.grandRef}  />
    </div>
  }
}

const NewFather = React.forwardRef((props,ref)=><Father grandRef={ref}  {...props} />  )

class GrandFather extends React.Component{
  constructor(props){
    super(props)
  }
  node = null
  componentDidMount(){
    console.log(this.node)
  }
  render(){
    return <div>
      <NewFather ref={(node)=> this.node = node } s='jiang' />
    </div>
  }
}

export default GrandFather
