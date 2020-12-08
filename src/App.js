import React,{useState} from "react";
import './App.css';
import image from './images.png' ;

const emojidirectory={
  "😄":"happy",
  "😂":"laughing",
  "😡":"angry",
  "😭":"crying",
  "😔":"sad",
  "😀":"grinning",
  "🤣":"rolling laugh",
  "😍":"heart eyes",
  "😊":"blushing face",
  "😉":"wynking face",
  "🤪":"zany face",
  "🤑":"money moth face",
  "😑":"expressionless face",
  "😶":"face without mouth",
  "🤒":"face with thermometer",
  
}

var emoji=Object.keys(emojidirectory);
var values=Object.values(emojidirectory);

export default function App() {

  const [meaning,setmeaning]=useState("")

  function emojihandler(event){
    
    var input=event.target.value;

    console.log(typeof(input))
    if(emoji.includes(input.toLowerCase()))
    {
      setmeaning(emojidirectory[input]);
    }
    else if(values.includes(input.toLowerCase()))
    {
      var key=Object.keys(emojidirectory).find(key => emojidirectory[key] === input)
      setmeaning(key);
    }
  }

  function emojiclickhandler(emo) {
    setmeaning(emojidirectory[emo]);
  }
  return (
    <div className="App">
      <h1 style={{marginBottom:0}}>Emoji Finder</h1>
      <h1>🔍😎</h1>
      <h3>Search through word or emoji!</h3>
      <input onChange={emojihandler}/>
      <h2>{meaning}</h2>
      <h3>
        {
          emoji.map((emo)=>{
            return (
              <span 
              key={emo}
                onClick={()=>emojiclickhandler(emo)}>
                  {emo}
              </span>
            )
          })
        }
      </h3>
    </div>
  );
}
