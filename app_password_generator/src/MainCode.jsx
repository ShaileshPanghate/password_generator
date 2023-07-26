import React from 'react'
import '../src/App.css';
import  { useState ,useEffect} from 'react';




const MainCode = () => {

  const [passwordLength, setPasswordLength] = useState(10);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeCapital, setIncludeCapital] = useState(false);
  const [includeString, setIncludeString] = useState(true);
  const [password, setPassword] = useState('');

 

useEffect(() => {
  // console.log(password);
},[password])

function handlechangeLength(event){

  setPasswordLength(event.target.value);
  // console.log(event.target.value);
  // console.log(passwordLength);
}
function handleChangeNumber(){
  setIncludeNumber(!includeNumber);
}
function handlechangeSymbol(){
  setIncludeSymbols(!includeSymbols)
}
function handlechangeCapital(){
  setIncludeCapital(!includeCapital)
}
function handleChangeString(){
  setIncludeString(!includeString)
}

const handleGeneratePassword = () => {
  setPassword("");
  const passwordTxt = document.querySelector("textarea");
  passwordTxt.textContent ="";
  setPassword(generatePassword(passwordLength, includeSymbols, includeNumber, includeCapital, includeString));

};
const handleCopy =() =>{
 let passwordData = document.querySelector("textarea");
   passwordData.select();
   document.execCommand('copy');   
   alert('Text copied to clipboard!');
}


function generatePassword(passwordLength, includeSymbols, includeNumber, includeCapital, includeString) {
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

  let validChars = "";



 
  if(includeString)
  {
    
    validChars += lowerChars;
    // console.log(validChars);
    
  }
 
  if(includeCapital)
  {
    validChars += upperChars;
    // console.log(validChars);
  }
  if(includeSymbols)
  {
    validChars += symbolChars;
    // console.log(validChars);
  }
  if(includeNumber)
  {
    validChars += numberChars;
    // console.log(validChars);
  }
  let password = '';
  if(includeSymbols==false && includeNumber==false && includeCapital==false && includeString==false)
  {
    alert("Please select character type!!")
    const passwordTxt = document.querySelector("textarea");
      passwordTxt.textContent ="";
  }
  else
  {
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      password += validChars[randomIndex];
    }
  }
 
  console.log(password);
  setPassword(password);

  document.querySelector("textarea").append(password);

}
  return (
    <div class="text-white" >
     
      <div class="grid justify-items-center mb-20 mt-6">

       <h1 class="uppercase font-bold tracking-wider hover:tracking-widest text-5xl" style={{textShadow:" 2px 3px #172554"}}>Password Generator</h1>
      </div>
       
       <div class="flex mb-10">

          <textarea name="" id="" cols="80" rows="1" placeholder='Password will show here!' class="text-stone-950 rounded-lg border-solid border-2 border-black-400 hover:border-blue-400  py-2 pl-9 pr-3 bg-indigo-50"></textarea>&nbsp;&nbsp;&nbsp;&nbsp;

            <button  class="rounded-lg border-black text-lg text-white px-8 py-2 bg-sky-500 hover:bg-sky-700 active:bg-sky-800 focus:outline-none focus:ring focus:ring-sky-300"
                onClick={handleCopy} >
              Copy
              </button>
       </div>
      
       
       <div class="mb-14">
        <button onClick={handleGeneratePassword} class="rounded-lg border-black text-lg text-white px-8 py-2 ml-64 bg-sky-500 hover:bg-sky-700 active:bg-sky-800 focus:outline-none focus:ring focus:ring-sky-300">
          Generate Password
          </button>
       </div>
       
       <div class="ml-64">
            <div class="mb-10">
                <label htmlFor="" style={{textShadow:" 1px 2px #0284c7"}} class="text-lg hover:tracking-wide">Length : </label> &nbsp;&nbsp;&nbsp;&nbsp;
                <label htmlFor=""style={{textShadow:" 1px 2px #0284c7"}}>4 </label>
                  <input type="range"  min="4" max="20"   value={passwordLength}
                            onChange={(event)=>handlechangeLength(event)} class="hover:cursor-pointer"/>
                    <label htmlFor="" style={{textShadow:" 1px 2px #0284c7"}}> 20 </label>
            </div>
           
            <div>

                  <div class="div1">
                       <label htmlFor="" class="text-lg hover:tracking-wide" style={{textShadow:" 1px 2px #0284c7"}}> Number : </label>
                      <div class="t_btn1">
                          <label class="toggle-switch ">
                              <input type="checkbox" checked={includeNumber} onChange={handleChangeNumber}/>
                              <span class="slider"></span>
                          </label>
                        </div>
                  </div>
                  <br />

                <div class="div1">
                    <label htmlFor="" class="text-lg hover:tracking-wide" style={{textShadow:" 1px 2px #0284c7"}}> Symbol : </label>
                    <div class="t_btn2">
                          <label class="toggle-switch">
                            <input type="checkbox" checked={includeSymbols} onChange={handlechangeSymbol}/>
                            <span class="slider"></span>
                          </label>
                    </div>
                </div>
                <br />

                <div class="div1">
                    <label htmlFor="" class="text-lg hover:tracking-wide" style={{textShadow:" 1px 2px #0284c7"}}> Capital : </label>
                    <div class="t_btn3">
                          <label class="toggle-switch">
                            <input type="checkbox" checked={includeCapital} onChange={handlechangeCapital}/>
                            <span class="slider"></span>
                          </label>
                    </div>
                </div>
                
                <br />
                <div class="div1">
                    <label htmlFor="" class="text-lg hover:tracking-wide" style={{textShadow:" 1px 2px #0284c7"}}> String : </label>
                    <div class="t_btn4">
                          <label class="toggle-switch">
                            <input type="checkbox" checked={includeString} onChange={ handleChangeString}/>
                            <span class="slider"></span>
                          </label>
                    </div>
                </div>
                

              <br />
            </div>

           
       </div>

    </div>
  )
}

export default MainCode
