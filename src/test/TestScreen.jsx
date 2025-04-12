import React from 'react'
import GlowingBGCricle from '../components/glowingBGCricle/glowingBGCricle'

function TestScreen() {

  /*
  <GlowingBGCricle size={"250px"} 
            top={"50px"} left={"50px"} 
            col1={"rgba(150,200,225,0.5)"}
            col2={"rgba(200,250,225,0.7)"}
            col3={"rgba(50,20,25,0.5)"}
            col4={"rgba(225,200,150,0.8)"}/>
  */

  return (
    <div>
        
        <GlowingBGCricle 
              size="40vw" 
              col1="rgba(20,30,40,0.2)"
              col2="rgba(55,66,77,0.5)"
              col3="rgba(100,150,200,0.7)"
              col4="rgba(250,100,25,0.5)"
              />
    </div>
  )
}

const styles = {
    one : {
        width: "200px",
        height: "200px",
        backgroundColor: "red",
        position: "absolutes"
    }
}

export default TestScreen