import React from 'react'
import { useState, useEffect } from 'react';

function GlowingBGCricle(params) {

  const [size, setSize] = useState(params.size);
  const [position, setPosition] = useState({ left: params.left, bottom: params.bottom });

  useEffect(() => {
    // console.log("use effect running")
    const handleResize = () => {
      if (window.innerWidth > 700) {
        // console.log("width is greater 700");
        // console.log("Max Left: ",params.maxLeft)
        setSize(params.maxSize);
        // for main elipse
        if (params.maxLeft == -1) {
          setPosition({left: window.innerWidth / 2 - 155, top: params.maxTop});
        } 
        else if (params.maxLeft == -2) {
          setPosition({left: window.innerWidth - 137, top: params.maxTop})
        }
        else if (params.maxLeft == -3) {
          setPosition({left: window.innerWidth - 140 , bottom: params.maxBottom})
        }
        else if (params.maxLeft == -4) {
          setPosition({left: -107 , bottom: params.maxBottom})
        }
      } else {
        // console.log("width is lesser 700");
        setSize(params.size);
        setPosition({ left: params.left, bottom: params.bottom, top: params.top, right: params.right });
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const circleStyle = {
    width: size,
    height: size,
    background: `radial-gradient(
      circle,
      ${params.col1},
      ${params.col2},
      ${params.col3},
      ${params.col4}
    )`,
    borderRadius: '50%',
    top: position.top,
    left: position.left,
    right: position.right,
    bottom: position.bottom,
    filter: 'blur(65px)', 
    opacity: '0.8',
    position: 'absolute',
    zIndex: 1,
  }


  return (
    <div style={{height: "100vh", position: "absolute"}}>
      <div style={circleStyle}>
        <div style={{circleStyle}}></div>
      </div>
    </div>
  )
}

export default GlowingBGCricle