import './App.css';
import { useState } from "react";

const Nabvar = () => {
     
  
   const [y,setY] =useState("");
   const [x,setX] =useState("");
   const [signe,setSigne] =useState("");
   const [valeur,setValeur] =useState("");
   const affichage=document.getElementsByClassName("out");

    const  verifier= () => {
      if(valeur.endsWith("-") || valeur.endsWith("+") || valeur.endsWith("*") || valeur.endsWith("/") ||
      valeur.endsWith(".") )
      return true ;
      else 
      return false;
   }
   const  count= (output) => {
     
         let j = 0;
     
         
         for (let i = 0; i < output.length; i++) {
     
             
             if (output.charAt(i) == '.') {
                 j += 1;
             }
         }
         return j;
     }
   
    
   
   
   const  only_one_operation= (output) => {
      if( output.indexOf("-")>0 || output.indexOf("+")>0 || output.indexOf("*")>0 || output.indexOf("/")>0 )
         return true;
      else 
         return false;
 
   }
    
   const  stop_repeating_point= (output) => {
      let val=count(output);
      let val2=count(x.toString());
      if(only_one_operation(output)===true && val2===1 && val===1)   
         return true ;
      else if(only_one_operation(output)===false && val===0)
      return true;
      else if (only_one_operation(output)===true && val2===0 && val===0)
      return true;
      else 
      return false;
     
}

     const clear=()=>{
         
         setValeur("");
     }

     const clearlastnumber=()=>{
         setValeur(valeur.slice(0,-1));
     }

     const  point= () => {

      if(verifier()===false   && (valeur.length>0) && (stop_repeating_point(valeur)===true) )
      setValeur(valeur+'.');

     }
      
    
     const num0=()=>{
         if(valeur==='0')
         setValeur('0');
            else
        setValeur(valeur+0);
     }
     const num1=()=>{
        if(valeur==='0')
        setValeur('1');
        else
        setValeur(valeur+1);
     }

     const num2=()=>{

      if(valeur==='0')
        setValeur('2');
        else
        setValeur(valeur+2);
     }
     const num3=()=>{
      if(valeur==='0')
        setValeur('3');
        else
        setValeur(valeur+3);
     }
     const num4=()=>{
      if(valeur==='0')
        setValeur('4');
        else
        setValeur(valeur+4);
     }
     const num5=()=>{
      if(valeur==='0')
        setValeur('5');
        else
        setValeur(valeur+5);
     }
     const num6=()=>{
      if(valeur==='0')
        setValeur('6');
        else
        setValeur(valeur+6);
     }
     const num7=()=>{
      if(valeur==='0')
        setValeur('7');
        else
        setValeur(valeur+7);
     }
     const num8=()=>{
      if(valeur==='0')
        setValeur('8');
        else
        setValeur(valeur+8);
     }
     const num9=()=>{
      if(valeur==='0')
        setValeur('9');
        else
        setValeur(valeur+9);
     }
     const show=()=>{

      let temp2= valeur.substr(y+1);
      let test=parseFloat(temp2);
      
      if (test){
      let final;
      switch(signe) {
         case '+':
                  final=test+x;
                 
                  setValeur(final.toString()); 
         break;

         case '-':
                  final=x-test;
                  setValeur(final.toString()); 
         break;

         case '*':
                  final=test*x;
                  setValeur(final.toString()); 
         break;

         case '/':
                  if(test==0)
                  setValeur("error");
                  else{
                  final=x/test;
                  setValeur(final.toString()); }
         break;
      }
   }
     };
     
      
     
     const add = () => {
      if(valeur.length>0 && verifier()===false && only_one_operation(valeur)===false){
        setX(parseFloat(valeur));
        
        setY(valeur.length);
        let temp=valeur+"+";
        setValeur(temp);
        setSigne("+");}
        

   
     }; 
     
     const  minus = () => {
      if(valeur.length>0 && verifier()===false && only_one_operation(valeur)===false){
      setX(parseFloat(valeur));
      setY(valeur.length);
      let temp=valeur+"-";
      setValeur(temp);
      setSigne("-");}
        
     };

     const  multiply = () => {
      if(valeur.length>0 && verifier()===false && only_one_operation(valeur)===false){
      setX(parseFloat(valeur));
      setY(valeur.length);
      let temp=valeur+"*";
      setValeur(temp);
      setSigne("*");}
        
     };

     const  division = () => {
      if(valeur.length>0 && verifier()===false && only_one_operation(valeur)===false){
      setX(parseFloat(valeur));
      setY(valeur.length);
      let temp=valeur+"/";
      setValeur(temp);
      setSigne("/");}
        
     };
      
     
      
    
     

     
    return (  

         
       <div className="navbar"   >
           <input type="text" className='out' value={valeur}  />

           <button className="effet ef clear" onClick={clear}>clear</button>
           <button className="effet ef" onClick={clearlastnumber}>C</button> 
           <button className="effet ef wh" onClick={division}>÷</button>
           <button className="effet wh num" onClick={num7}>7</button>
           <button className="effet wh num" onClick={num8}>8</button>
           <button className="effet wh num" onClick={num9}>9</button>
           <button className="effet ef wh" onClick={multiply}>x</button>
           <button className="effet wh num" onClick={num4}>4</button>
           <button className="effet wh num" onClick={num5}>5</button>
           <button className="effet wh num" onClick={num6}>6</button>
           <button className="effet ef wh" onClick={minus}>-</button>
           <button className="effet wh num" onClick={num1}>1</button>
           <button className="effet wh num" onClick={num2}>2</button>
           <button className="effet wh num" onClick={num3}>3</button>
           <button className="effet ef wh"  onClick={add}>+</button>
           <button className="effet wh num" onClick={num0}>0</button>
           <button className="effet ef num" onClick={point}>.</button>
           <button className="effet ef equal"onClick={show} >=</button>

        </div>
    );
}
 
export default Nabvar;