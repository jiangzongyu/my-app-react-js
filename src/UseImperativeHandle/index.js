import React, { useImperativeHandle, useRef, useState, forwardRef } from "react";
function Son (props, ref) {
  const inputRef = useRef(null)
  const [ inputValue , setInputValue ] = useState('')
  useImperativeHandle(ref,()=>{
    const handleRefs = {
      /* 声明方法用于聚焦input框 */
      onFocus(){
        inputRef.current.focus()
      },
      /* 声明方法用于改变input的值 */
      onChangeValue(value){
        setInputValue(value)
      }
    }
    return handleRefs
  },[])
  return <div>
    <input
      placeholder="请输入内容"
      ref={inputRef}
      value={inputValue}
      readOnly={true}
    />
  </div>
}

const ForwardSon = forwardRef(Son)
// console.log(ForwarSon);

class Index extends React.Component{
  inputRef = null
  handlerClick(){
    const { onFocus , onChangeValue } =this.inputRef
    onFocus()
    onChangeValue('let us learn React!')
  }
  render(){
    return <div style={{ marginTop:'50px' }} >
      <ForwardSon ref={node => (this.inputRef = node)} />
      <button onClick={this.handlerClick.bind(this)} >操控子组件</button>
    </div>
  }
}

export default Index
