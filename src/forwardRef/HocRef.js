import React, {useRef, useEffect} from "react";

function HOC(Component, val){
  class Wrap extends React.Component{
    render(){
      console.log('jiang');
      const { forwardedRef ,...otherprops  } = this.props
      return <Component ref={forwardedRef}  {...otherprops}  />
    }
  }

  console.log('zong');
  return  React.forwardRef((props,ref)=> <Wrap forwardedRef={ref} {...props} /> )
}

class Index extends React.Component{
  componentDidMount(){
    console.log(666)
  }
  render(){
    return <div>hello,world</div>
  }
}

const HocIndex = HOC(Index, true)

export default ()=>{
  const node = useRef(null)
  useEffect(()=>{
    /* 就可以跨层级，捕获到 Index 组件的实例了 */
    console.log(node.current)
    console.log(node.current.componentDidMount)
  },[])
  return <div><HocIndex ref={node}  /></div>
}
