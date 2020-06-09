import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './data';


export default ({  }) => {

  const [value, setValue] = useState(0)


    let result = 0

    const buttonStyle = {
      padding: '0.5em',
      borderRadius: '26px',
      backgroundColor: 'transparent',
      color: 'grey',
      margin: '10px',
    }

    const elementStyle ={
      backgroundColor: 'transparent',
      margin: '5vh',
      width: '50px',
      borderStyle: 'none none solid',
      borderWidth: '1px 1px 3px',
      borderColor: '#000',
      borderRadius: '0px',
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
                      left: result * data.kmperkg / 100,
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
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '100px',}}>
            <p>Avec</p>
            <input value={value} type="number" placeholder="Nb" style={elementStyle} onChange={(e) => setValue(e.target.value)}
            />
            <p>kg de CO2, je peux parcourir</p>


            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '100px',}}>
                <button onClick={()=> setValue(0)} style={buttonStyle}> 🏁  Départ </button>
            </div>


          {items}
          </div>

        <p style={{marginLeft: '100px', fontSize: '14px',}}>Soit un équivalent de 3 🍻   et 2 🍋   </p>

        <div style={{marginLeft: '100px', display: 'flex', flexDirection: 'row',}}>
            <p style={{marginLeft: '0px', fontSize: '12px',}}>Bordeaux</p>
            <p style={{marginLeft: '200px', fontSize: '12px',}}> 📌 Amsterdam</p>
            <p style={{marginLeft: '700px', fontSize: '12px',}}> 📌 Bangkok</p>
        </div>
        <hr style={{marginLeft: '100px', borderTop: '10px dashed grey', borderBottom: 'none', width: '1100px',}}></hr>
      </div>

    )
  }


