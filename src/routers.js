import React, {Suspense, lazy} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = lazy(() => import('./App/App').then((module) => module))
const Children = lazy(() => import('./App/Children').then((module) => module))
const Hook = lazy(() => import('./Hook/index').then((module) => module))
const HookCompare = lazy(() => import('./HookCompare/HookCompare').then((module) => module))
const Test = lazy(() => import('./Test/Test').then((module) => module))
const Context = lazy(() => import('./UseContext/UseContext').then((module) => module))
const UseMemo = lazy(() => import('./useMemo/useMemo').then((module) => module))
const Memo = lazy(() => import('./Memo/memo').then((module) => module))
const fontColor = lazy(() => import('./fontColor/index').then((module) => module))
const WinSize = lazy(() => import('./UseWinSize/UseWinSize').then((module) => module))
const Ref = lazy(() => import('./ref/index').then((module) => module))
const forwardRef = lazy(() => import('./forwardRef').then((module) => module))
const hocRef = lazy(() => import('./forwardRef/HocRef').then((module) => module))
const cloneElement = lazy(() => import('./cloneElement').then((module) => module))
const useImperativeHandle = lazy(() => import('./UseImperativeHandle').then((module) => module))

const Path = {
  Hook: '/hook', // provide 使用
  App: '/app', // exercise 使用
  Children: '/children', // exercise 使用
  Context: '/context', // provide 使用
  HookCompare: '/hook_compare', // useCallback 使用
  Test: '/test', // useRef及子组件向父组件传值 使用
  UseMemo: '/use_memo', // useMemo 使用
  Memo: '/memo', // Memo 使用
  fontColor: '/font_color', // 综合使用
  WinSize: '/win_size', // 综合使用
  Ref: '/ref', // 综合使用
  forwardRef: '/forwardRef', // forwardRef
  hocRef: '/hocRef', // forwardRef
  cloneElement: '/cloneElement', // forwardRef
  useImperativeHandle: '/useImperativeHandle', // forwardRef
}
export const Routers = () => (
  <Router>
    <Suspense fallback>
      <Switch>
        <Route path={Path.App} component={App}/>
        <Route path={Path.Children} component={Children}/>
        <Route path={Path.Hook} component={Hook}/>
        <Route path={Path.Context} component={Context}/>
        <Route path={Path.HookCompare} component={HookCompare}/>
        <Route path={Path.Test} component={Test}/>
        <Route path={Path.UseMemo} component={UseMemo}/>
        <Route path={Path.Memo} component={Memo}/>
        <Route path={Path.fontColor} component={fontColor}/>
        <Route path={Path.WinSize} component={WinSize}/>
        <Route path={Path.Ref} component={Ref}/>
        <Route path={Path.forwardRef} component={forwardRef}/>
        <Route path={Path.hocRef} component={hocRef}/>
        <Route path={Path.cloneElement} component={cloneElement}/>
        <Route path={Path.useImperativeHandle} component={useImperativeHandle}/>
      </Switch>
    </Suspense>
  </Router>
)
