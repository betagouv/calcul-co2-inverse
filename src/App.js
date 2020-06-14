import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data';


export default ({  }) => {

  const [value, setValue] = useState(0)


    let result = 0

    const buttonStyle = {
      padding: '0.5em',
      backgroundColor: 'transparent',
      fontSize: '30px',
      borderColor: 'transparent',
    }

    const elementStyle ={
      backgroundColor: 'white',
      margin: '10px',
      padding: '8px',
      width: '50px',
      borderStyle: 'none none solid',
      borderWidth: '1px 1px 3px',
      borderColor: '#000',
      borderRadius: '30px',
      fontFamily: 'sans-serif',
      fontSize: '16px',
      lineHeight: '20px',
      letterSpacing: '1px',
    }
    const items = Data.filter((data)=>{
    result = value
      if(result == null) {
        result = 0
          return data
      }
      else {
          return data
      }




    }).map((data, index)=>{
      return(

        <div id="container">


                <div className="emojis">
                    <div className='test' style={{
                      position: 'absolute',
                      top: index * 85,
                      left: result * data.kmperkg / 10,
                      maxLeft: '3000px',
                      right: '0px',
                      bottom: '0px',
                      fontSize: '30px',
                      zIndex: 100,
                      marginTop: '30px',
                     }}
                     >

                     {data.emoji}


                    <p style={{
                      fontSize: '12px',
                      backgroundColor: 'pink',
                      padding: '5px',
                      width: 'fit-content',
                      borderRadius: '30px',
                      color: 'white',
                    }}
                    >{Math.round(result * data.kmperkg)}km</p>

                     </div>
                </div>
            </div>





      )
    })

    return (

      <div style={{display: 'flex', flexDirection: 'column',}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '100px', fontWeight: 'bold', fontSize: '20px',}}>
            <p>Avec</p>
            <input value={value} type="number" placeholder="Nb" style={elementStyle} onChange={(e) => setValue(e.target.value)}
            />
            <p>kg de CO2, je peux parcourir</p>


            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '100px',}}>
                <button onClick={()=> setValue(0)} style={buttonStyle}> 🏁</button>
            </div>


          {items}
          </div>

        <p style={{marginLeft: '100px', fontSize: '14px',}}></p>

        <div style={{marginLeft: '100px', display: 'flex', flexDirection: 'row',}}>
            <p style={{marginLeft: '0px', fontSize: '14px', color: 'white', fontWeight: 'bold',}}>Bordeaux</p>
            <p style={{marginLeft: '40px', fontSize: '14px', color: 'white', fontWeight: 'bold',}}> Amsterdam</p>
            <p style={{marginLeft: '810px', fontSize: '14px', color: 'white', fontWeight: 'bold',}}> Bangkok</p>
        </div>
        <hr style={{marginLeft: '100px', borderTop: '10px dashed white', borderBottom: 'none', width: '1500px',}}></hr>
        <div style={{marginLeft: '100px', display: 'flex', flexDirection: 'row',}}>
            <p style={{marginLeft: '0px', fontSize: '10px', color: 'white', fontWeight: 'bold',}}>🚩 0</p>
            <p style={{marginLeft: '100px', fontSize: '10px', color: 'white', fontWeight: 'bold',}}>🚩 1 000 km</p>
            <p style={{marginLeft: '810px', fontSize: '10px', color: 'white', fontWeight: 'bold',}}>🚩 10 000 km</p>
        </div>
      </div>

    )
  }


