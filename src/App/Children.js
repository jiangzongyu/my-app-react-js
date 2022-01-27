import { Carousel } from 'element-react';
import React, {useEffect, useCallback, useState} from "react";
import cs from 'classnames'
import './App.css'

const CARD_SCALE = 0.83
const denominator = 4
const width = document.body.clientWidth
function processIndex(index, activeIndex, length) {
  // debugger
  if (activeIndex === 0 && index === length - 1) {
    return -1;
  } else if (activeIndex === length - 1 && index === 0) {
    return length;
  } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
    return length + 1;
  } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
    return -2;
  }

  return index
}

// function calculateTranslate(index, activeIndex, parentWidth) {
//   if (index !== activeIndex) {
//     index = processIndex(index, activeIndex, 4);
//   }
//   const inStage = Math.round(Math.abs(index - activeIndex)) <= 1
//   if (inStage) {
//     return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / denominator;
//   } else if (index < activeIndex) {
//     return -(1 + CARD_SCALE) * parentWidth / denominator;
//   } else {
//     return (denominator - 1 + CARD_SCALE) * parentWidth / denominator;
//   }
// }

function Children () {
  const [activeIndex, setActiveIndex] = useState(0)
  const [translate, setTranslate] = useState(0)

  const offsetWidth = useCallback(() => {

  }, [])
  const startTimer = useCallback(() => {
    return setInterval(() => {
      setActiveIndex(activeIndex + 1)
      if (activeIndex === 3) {
        setActiveIndex(0)
      }
    }, 3000)
  }, [activeIndex])

  const calculateTranslate = useCallback((index, activeIndex, parentWidth) => {
      if (index !== activeIndex) {
        index = processIndex(index, activeIndex, 4);
      }
      const inStage = Math.round(Math.abs(index - activeIndex)) <= 1
      if (inStage) {
        return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / denominator;
      } else if (index < activeIndex) {
        return -(1 + CARD_SCALE) * parentWidth / denominator;
      } else {
        return (denominator - 1 + CARD_SCALE) * parentWidth / denominator;
      }
  }, [])

  const handleItemClick = useCallback((index) => {
    const length = 4
    if (index < 0) {
      setActiveIndex(length - 1)
    } else if (index >= length) {
      setActiveIndex(0)
    } else {
      setActiveIndex(index)
    }
  }, [])

  useEffect(() => {
    // const a = startTimer()
    // return () => clearInterval(a)
  }, [activeIndex])
    return (
      <div>
        <div style={{ margin: '0 10px' }}>
          <Carousel type="card" interval="36000" height="150px" style={{ width: '300px' }}>
            {
              [
                {id: 1, background: 'red'},
                {id: 2, background: 'orange'},
                {id: 3, background: 'yellow'},
                {id: 4, background: 'blue'},
                {id: 5, background: 'green'},
              ].map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                    <h3 style={{height: '150px', background: `${item.background}`,width: '300px'}}>{item.id}</h3>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </div>





        <div style={{
          position: 'relative',
          overflowX: 'hidden',
        }}>
          <div style={{
            // width: '150px',
            position: 'relative',
            height: '150px',
          }}>
            {
              [
                {id: 1, background: 'red'},
                {id: 2, background: 'orange'},
                {id: 3, background: 'yellow'},
                {id: 4, background: 'blue'},
                {id: 5, background: 'green'},
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className={cs({
                      "is-animating": true
                    })}
                    style={{
                      position: 'absolute',
                      width: '50%',
                      height: '150px',
                      background: `${item.background}`,
                      display: 'inline-block',
                      overflow: 'hidden',
                      zIndex: index === activeIndex ? 2 : 1,
                      transform: `translateX(${calculateTranslate(index, activeIndex, width)}px) scale(${ index === activeIndex ? 1 : 0.83 })`
                    }}
                    >
                    <div
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        backgroundColor: '#fff',
                        opacity: index === activeIndex ? 0 : .24,
                        transition: '.2s',
                      }}
                      onClick={() => handleItemClick(index)}
                    />
                    <div>{item.id}</div>
                  </div>
                )
              })
            }
          </div>
          <ul
            style={{
              textAlign: 'center',
              listStyle: 'none',
              margin: '10px 0 0',
              padding: 0,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            {
              [1,2,3,4].map((item, index) => {
                return (
                  <li
                    key={index}
                    style={{
                      width: '30px',
                      height: '2px',
                      margin: '5px',
                      background: '#8391a5',
                      opacity: index === activeIndex ? 1 : .24,
                      transition: '.3s'
                    }}
                  />
                )
              })
            }
          </ul>
        </div>
      </div>

    )
}


export default Children
