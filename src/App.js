import logo from './logo.svg';
import './App.css';



var x = "";
var s = "";
var pressed = []
var m = []
var keys = ["01","11","0201","0211","1201","1211","030201",
"030211","031201","031211","130201","130211","131201","131211",
"04030201", "04030211","04031201","04031211","04130201","04130211",
"04131201","14030201","14030211","14031201","14031211","14130201","14130211","14131201","14131211"]

function recommend(l) {
  
  document.getElementById("demo2").innerHTML="";
  console.log(l)
  if(l.length===0){
    document.getElementById("demo2").innerHTML += "<li>  \xa0 </li>"
  }
  for(let i=0; i< l.length; i++){
    document.getElementById("demo2").innerHTML += "<li> [" +mapKey(l[i])+"]: "+ mapBinary(l[i]) + "</li>";
    //console.log(l[i])
  }
}

function match(i){
  m = []
  for(let j = 0; j< keys.length; j++){
    if(keys[j].includes(i) && i[1]>=keys[j][1]){
      
      m.push(keys[j])
    }
  }
  console.log(m)
  return m;
}
function mapKey(i){
  switch(i){
    case "0404":
      if(s===""){
        return "";
      }
      else{
        x="";
        return s.substring(s.length-1,s.length);
      }
    case "01":
      return "E"
    case "11":
      return "T"
    case "0201":
      return "A"
    case "0211":
      return "I"
    case "1201":
      return "N"
    case "1211":
      return "O"
    case "030201":
      return "S"
    case "030211":
      return "H"
    case "031201":
      return "R"
    case "031211":
      return "D"
    case "130201":
      return "L"
    case "130211":
      return "U"
    case "131201":
      return "C"
    case "131211":
      return "M"
    case "04030201":
      return "F"
    case "04030211":
      return "W"
    case "04031201":
      return "Y"
    case "04031211":
      return "G"
    case "04130201":
      return "P"
    case "04130211":
      return "B"
    case "04131201":
      return "V"
    case "04131211":
      return "K"
    case "14030201":
      return "Q"
    case "14030211":
      return "J"
    case "14031201":
      return "X"
    case "14031211":
      return "Z"
    case "14130201":
      return "!"
    case "14130211":
      return ","
    case "14131201":
      return "."
    case "14131211":
      return "'"
    default:
      
      return ""  
  }
}

function mapBinary(i){
  switch(i){
    case "01":
      return "0"
    case "11":
      return "1"
    case "0201":
      return "00"
    case "0211":
      return "01"
    case "1201":
      return "10"
    case "1211":
      return "11"
    case "030201":
      return "000"
    case "030211":
      return "001"
    case "031201":
      return "010"
    case "031211":
      return "011"
    case "130201":
      return "100"
    case "130211":
      return "101"
    case "131201":
      return "110"
    case "131211":
      return "111"
    case "04030201":
      return "0000"
    case "04030211":
      return "0001"
    case "04031201":
      return "0010"
    case "04031211":
      return "0011"
    case "04130201":
      return "0100"
    case "04130211":
      return "0101"
    case "04131201":
      return "0110"
    case "04131211":
      return "0111"
    case "14030201":
      return "1000"
    case "14030211":
      return "1001"
    case "14031201":
      return "1010"
    case "14031211":
      return "1011"
    case "14130201":
      return "1100"
    case "14130211":
      return "1101"
    case "14131201":
      return "1110"
    case "14131211":
      return "1111"
    default:
      
      return "\xa0"  
  }
}

function mapButton(i){
  switch(i){
    case "01":
      return "btn4";
    case "02":
      return "btn3";
    case "03":
      return "btn2";
    case "04":
      return "btn1";
    case "11":
      return "btn8";
    case "12":
      return "btn7";
    case "13":
      return "btn6";
    case "14":
      return "btn5";
    default:
      return "\xa0"
  }
}

function handleClick(i) {
    if(s.length%60==0){
      s+="\n"
    }
    if(i==="x"){
      if(s!==""){
        s = s.substring(0,s.length-1);
        if(s.length-1<0){
          s=""
          document.getElementById("demo").style.opacity = "0.75";
        }
        document.getElementById("demo").innerHTML = s;
        console.log("test2")
      }
    }
    else if(i==="s"){
      if(s!==""){
        s+= "\xa0";
        document.getElementById("demo").innerHTML = s;
        console.log("test2")
      }
    }
    else{
      
      if(s===""){
        s = "";
      }
      if(!pressed.includes(i))
      {
        pressed.push(i);
        x = x + i;
        s = s + mapKey(x);
        
        document.getElementById("demo").style.opacity = "1";
        document.getElementById("demo").innerHTML = s;
        document.getElementById(mapButton(i)).style.color = "#6622CC";
        console.log("test1")
        
        
        recommend(match(x));

        if(i==="01" || i==="11"){
          x = "";
          document.getElementById("demo2").innerHTML = "\xa0";
          for(let j = 0; j< pressed.length; j++){
            console.log(pressed[j])
            document.getElementById(mapButton(pressed[j])).style.color = "#fff";
            
          }
          pressed=[];
        }
      }
    }
}
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        <h2>
          TinyType
        </h2>
        <p id="demo"></p>
        <p id="d2">Recommendations:</p>
        <p><ul id = "demo2"><li>[]</li></ul></p>
        
        <div >
          <button className="row1" id="btn1" onClick={() => handleClick("04")}>0</button>
          <button className="row1" id="btn2" onClick={() => handleClick("03")}>0</button>
          <button className="row1" id="btn3" onClick={() => handleClick("02")}>0</button>
          <button className="row1" id="btn4" onClick={() => handleClick("01")}>0</button>
          <button className="row1" id="btn4" onClick={() => handleClick("s")}>s</button>
        </div>
        <div >
          <button className="row2" id="btn5" onClick={() => handleClick("14")}>1</button>
          <button className="row2" id="btn6" onClick={() => handleClick("13")}>1</button>
          <button className="row2" id="btn7" onClick={() => handleClick("12")}>1</button>
          <button className="row2" id="btn8" onClick={() => handleClick("11")}>1</button>
          <button className="row2" id="btn8" onClick={() => handleClick("x")}>x</button>
        </div>
        
        
      </header>
    </div>
  );
}



App();

export default App;
