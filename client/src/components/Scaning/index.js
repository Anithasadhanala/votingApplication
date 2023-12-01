import React, { useState, useEffect } from 'react';
import Quagga from 'quagga';
import './index.css'


/* -------------------------------------------------------------------------------------
The main component that calls the Barcode scanner library 
when ever the result from the scanned barcode is filled using setResult, result is updated

-----------------------------------------------------------------------------------------*/

const  Scaning=(props) =>{

  let [result, setResult] = useState("");

  //App.js has this function, the result from barcode is shared
  const {scannerFunction} = props

  useEffect(() => {
    Quagga.init({
      inputStream: {
        type : 'LiveStream',
        constraints: {
          width: 600,
          height: 380,
          
          facingMode: "environment"
        },
        target: document.querySelector('#scanner')
      },
      decoder: {
        readers : ['code_128_reader']
      }
    }, function(err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("starting")
        Quagga.start();
    });
    Quagga.onDetected(function(result) {
     
        setResult(result.codeResult.code);
        Quagga.stop();
    });
    return () => {
        Quagga.stop();
    }
  },[]);
  
  
  /* the function that called by scaning.js and called the scannerFunction function 
     for implemeting the further functionalities after scanning the barcode.
  */
  let scanning_function= ()=>{

    // after the barcode gives the non empty result only, the condition is satistied.
    if(result !==''){
      scannerFunction(result)
    }

    //this function returns the incorrect para, if the scanned data is incorrect, else "".
    function paraFunction(){
      const para = props.para
      switch(para){
        case 'failure':
          return <p className="error">Scanned data is inappropriate format, scan again..</p>
        case  'invalid':
          return <p className="error">Scanned data belongs to invalid user.</p>
        case 'voted':
          return <p className="error">You have already been voted.</p>
        default :
        return ''
      }
    }

    return(
            <div className="bg-container">
              <h1 className="heading">Scan for Voting (sample: 20MH1A4248)</h1>
              <p className="head">{result? `Barcode value: ${result}` :''}</p>
             {paraFunction()}
              <div className='chekker'>
              <div id="scanner" className="scanner" ></div>
              </div>
            </div>
          ) 
    }

  // return statement of Scaning.js
  return(
  scanning_function()
  )

}

export default Scaning