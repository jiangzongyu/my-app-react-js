import {useState, useRef, useEffect} from "react";
import {Link} from "react-router-dom";
import './App.css';
import Children from "./Children";

const dataTemp = {
  transitionText: {
    color: 'red'
  },
  notifyText: '眨眼和闪烁眨眼和闪烁',
  wrapWidth: '',
  contentWidth: '',
  timer: '',
  speed: 50
}

const timeObj = {
  hour: '00',
  min: '00',
  sec: '00'
}
async function sleep(time) {
  return new Promise((resolve) => {
    dataTemp.timer = setTimeout(resolve, time)
  })
}

// async function animationFn() {
//   const time = dataTemp.contentWidth + dataTemp.wrapWidth
//   dataTemp.transitionText = {
//     transitionDuration: '0s',
//     transform: `translateX(${dataTemp.wrapWidth}px)`
//   }
//   await sleep(20)
//   dataTemp.transitionText = {
//     transitionDuration: `${time / dataTemp.speed}s`,
//     transform: `translateX(-${dataTemp.contentWidth}px)`
//   }
//   await sleep((time / dataTemp.speed) * 1000)
//   return animationFn()
// }

function App() {
  // const [data, setData] = useState(dataTemp)
  const [time, setTime] = useState(3600)
  const [timeOb, setTimeObj] = useState(timeObj)
  const [query, setQuery] = useState('query')
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const wrapRef = useRef(null)
  const contentRef = useRef(null)
  useEffect(() => {
    async function fetch() {
      setIsLoading(true)
      await sleep(2000)
      setIsLoading(false)
    }

    // setInterval(() => {
    //   setTime(val => val - 1)
    // }, 1000)
    fetch()
  }, [search])
  useEffect(() => {
    setTimeObj(val => {
      return {
        hour: Math.floor(time / 3600) < 10 ? `0${Math.floor(time / 3600)}` : Math.floor(time / 3600),
        min: Math.floor(time/60) === 60 ? '00' : Math.floor(time/60),
        sec: time % 60 < 10 ? `0${time % 60}` : time % 60
      }
    })
  }, [time])

  return (
    <div>
      {/*<h3 className='shakeY'>App</h3>*/}
      <div className='route__container__notify'>
        <div ref={wrapRef} id='route__container__wrap' className='route__container__wrap'>
          <div ref={contentRef} className='route__container__text' style={dataTemp.transitionText}>
            {dataTemp.notifyText}
          </div>
        </div>
      </div>
      <div>{time}</div>
      <span>{timeOb.hour}</span>-
      <span>{timeOb.min}</span>-
      <span>{timeOb.sec}</span>
      <form action="" onSubmit={e => {
        setSearch(query)
        e.preventDefault()
      }}>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
        <button type="submit">
          Search
        </button>
      </form>
      {
        isLoading ? (
          <div>loading...</div>
        ) : (
          <div>loading finished</div>
        )
      }
      {
        !isLoading && <div>模拟失败</div>
      }
      <Link to='/children'>
        <button onClick={() => console.log('jiang')}>getData</button>
      </Link>
      <Children />
    </div>
  );
}

export default App;
