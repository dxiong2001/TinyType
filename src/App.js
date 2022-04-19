//import { useLongPress } from 'use-long-press';
import './App.css';
import useLongPress from './longPress'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


var x = "";
var s = "";
var pressed = []
var time1 = 0;
var time2 = 0;
var tempTime = 0;
var m = []
var cursor = 0;
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
    case '.-':     return 'a'
    case '-...':   return 'b'
    case '-.-.':   return 'c'
    case '-..':    return 'd'
    case '.':      return 'e'
    case '..-.':   return 'f'
    case '--.':    return 'g'
    case '....':   return 'h'
    case '..':     return 'i'
    case '.---':   return 'j'
    case '-.-':    return 'k'
    case '.-..':   return 'l'
    case '--':     return 'm'
    case '-.':     return 'n'
    case '---':    return 'o'
    case '.--.':   return 'p'
    case '--.-':   return 'q'
    case '.-.':    return 'r'
    case '...':    return 's'
    case '-':      return 't'
    case '..-':    return 'u'
    case '...-':   return 'v'
    case '.--':    return 'w'
    case '-..-':   return 'x'
    case '-.--':   return 'y'
    case '--..':   return 'z'
    default: return ''
  }
}

// function mapKey(i){
//   switch(i){
//     case "0404":
//       if(s===""){
//         return "";
//       }
//       else{
//         x="";
//         return s.substring(s.length-1,s.length);
//       }
//     case "01":
//       return "E"
//     case "11":
//       return "T"
//     case "0201":
//       return "A"
//     case "0211":
//       return "I"
//     case "1201":
//       return "N"
//     case "1211":
//       return "O"
//     case "030201":
//       return "S"
//     case "030211":
//       return "H"
//     case "031201":
//       return "R"
//     case "031211":
//       return "D"
//     case "130201":
//       return "L"
//     case "130211":
//       return "U"
//     case "131201":
//       return "C"
//     case "131211":
//       return "M"
//     case "04030201":
//       return "F"
//     case "04030211":
//       return "W"
//     case "04031201":
//       return "Y"
//     case "04031211":
//       return "G"
//     case "04130201":
//       return "P"
//     case "04130211":
//       return "B"
//     case "04131201":
//       return "V"
//     case "04131211":
//       return "K"
//     case "14030201":
//       return "Q"
//     case "14030211":
//       return "J"
//     case "14031201":
//       return "X"
//     case "14031211":
//       return "Z"
//     case "14130201":
//       return "!"
//     case "14130211":
//       return ","
//     case "14131201":
//       return "."
//     case "14131211":
//       return "'"
//     default:
      
//       return ""  
//   }
// }

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
    if(x==="\xa0"){
      x="";
    }
    
    if(i==="x"){
      if(s!==""){
        cursor -= 1;
        s  = s.slice(0, cursor) +  s.slice(cursor+1, s.length);
        
        if(s.length-1<0){
          s="\xa0"
          document.getElementById("demo").style.opacity = "0.75";
        }
        document.getElementById("demo").innerHTML = s;
        console.log("test2")
      }
    }
    else if(i==="s"){
      
        cursor += 1;
        
        s  = s.slice(0, cursor-1) + "\xa0"+ s.slice(cursor-1, s.length);
        
        document.getElementById("demo").innerHTML = s;
        console.log("test2")
      
    }
    else if (i==="r"){
      if(cursor < s.length){
        s = s.replace("|", "");
        cursor+=1;
        s = s.slice(0, cursor) +"|"+ s.slice(cursor, s.length);
        if(cursor===s.length-1){
          s = s.replace("|", "");
        }
        document.getElementById("demo").innerHTML = s;
        
      }
      

    }
    else if(i==="l"){
      
      if(cursor > 0){
        s = s.replace("|", "");
        cursor-=1;
        s = s.slice(0, cursor) +"|"+ s.slice(cursor, s.length);
        document.getElementById("demo").innerHTML = s;
      }
    }
    else if(i==="i"){
      
      Swal.fire({
        position: 'top-end',
        icon: 'info',
        
        title: 'About TinyType',
        html: 'TinyType is a keyboard free keyboard! <ul class="sw"><li>Use the \"o\" button to type out \n\".\" (short press) or \"-\" (long press) to form letters</li><li>To delete a character, short click on \"x\"</li><li>To move the cursor left, long press on \"x\"</li><li>To press space, short click on \"s\"</li><li>To move the cursor right, long press on \"s\"</li><li>To view info on TinyType, click on \"i\" (which you must have already done to get to this screen)</li><li>*Note: if the cursor is not displayed, then it means it is at the end of the type buffer</li><ul> ',
        showConfirmButton: true,
        allowOutsideClick: false,
      })
    }

    else if(i==="c"){
        
        s = s + mapKey(x);

        document.getElementById("demo").style.opacity = "1";
        document.getElementById("demo").innerHTML = s;
        document.getElementById("demo2").innerHTML = "\xa0";
        x= "";
      }
    else{
      time1 = new Date().getTime() ;
      x = x + i;
      document.getElementById("demo2").innerHTML = x;
      document.getElementById("demo").style.opacity = "1";
      // console.log(time2)
      // time2 =  new Date().getTime() ;
      // if(time2-time1>3000 && time1 != 0){
      //   s = s + mapKey(x);
      //   document.getElementById("demo").style.opacity = "1";
      //   document.getElementById("demo").innerHTML = s;
      //   x="";
      // }
      // x = x + i;
      // document.getElementById("demo2").innerHTML = x;
      // time1 = time2;
      // console.log(time1)
      // if(s===""){
      //   s = "";
      // }
      // if(!pressed.includes(i))
      // {
      //   pressed.push(i);
      //   x = x + i;
      //   s = s + mapKey(x);
        
      //   document.getElementById("demo").style.opacity = "1";
      //   document.getElementById("demo").innerHTML = s;
      //   document.getElementById(mapButton(i)).style.color = "#6622CC";
      //   console.log("test1")
        
        
      //   recommend(match(x));

      //   if(i==="01" || i==="11"){
      //     x = "";
      //     document.getElementById("demo2").innerHTML = "\xa0";
      //     for(let j = 0; j< pressed.length; j++){
      //       console.log(pressed[j])
      //       document.getElementById(mapButton(pressed[j])).style.color = "#fff";
            
      //     }
      //     pressed=[];
      //   }
      // }
    }
}


function App() {
  const longPressProps = useLongPress({
    onClick: () => handleClick("."),
    onLongPress: () => handleClick("-"),
  });
  const longPressProps1 = useLongPress({
    onClick: () =>  handleClick("x"),
    onLongPress: () => handleClick("l"),
  });

  const longPressProps2 = useLongPress({
    onClick: () =>  handleClick("s"),
    onLongPress: () => handleClick("r"),
  });

  const longPressProps3 = useLongPress({
    onClick: () =>  handleClick("i"),
    onLongPress: () => handleClick("i"),
  });

  setInterval(function() {
    //console.log("test");
    time2 =  new Date().getTime() ;
    if(time2-time1>500 && time1 != 0 && time1 > tempTime){
      s.replace("|", "")
      s  = s.slice(0, cursor) + mapKey(x)+ s.slice(cursor, s.length) ;
      document.getElementById("demo").style.opacity = "1";
      document.getElementById("demo").innerHTML = s;
      x="\xa0";
      document.getElementById("demo2").innerHTML = x;
      tempTime = time1;
      cursor += 1;
    }
    
    
    // console.log(time1)
    // console.log(time2)
    // console.log("tt:"+tempTime)
  }, 500);

  return (
    <div className="App">
      <header className="App-header">
        
        <h2>
          TinyType
        </h2>
        <div id = "test"><p id="demo">Type something</p></div>
        
        <p><ul id = "demo2"><li><span>{"\xa0"}</span></li></ul></p>
        
        <div >
          <button className="row1" id="btn8" {...longPressProps1}>x</button>
          <button className="row1" id="btn2" {...longPressProps}>0</button>
          {/* <button className="row1" id="btn4" onClick={() => handleClick("c")}>c</button> */}
          <button className="row1" id="btn4" {...longPressProps2}>s</button>
          <button className="row1" id="btn4" {...longPressProps3}>i</button>
          {/* <button className="row2" id="btn8" onClick={() => handleClick("x")}>x</button>
          <button className="row1" id="btn1" onClick={() => handleClick("04")}>0</button>
          <button className="row1" id="btn2" onClick={() => handleClick("03")}>0</button>
          <button className="row1" id="btn3" onClick={() => handleClick("02")}>0</button>
          <button className="row1" id="btn4" onClick={() => handleClick("01")}>0</button>
          <button className="row1" id="btn4" onClick={() => handleClick("s")}>s</button> */}
          <p id="moreinfo">Press "i" for more information</p>
        </div>
        {/* <div >
          <button className="row2" id="btn5" onClick={() => handleClick("14")}>1</button>
          <button className="row2" id="btn6" onClick={() => handleClick("13")}>1</button>
          <button className="row2" id="btn7" onClick={() => handleClick("12")}>1</button>
          <button className="row2" id="btn8" onClick={() => handleClick("11")}>1</button>
          <button className="row2" id="btn8" onClick={() => handleClick("x")}>x</button>
        </div> */}
        
        <div className="morse">
          <ul className="morseList">
            <li><span>a:{"\xa0\xa0"}.-     </span></li>
            <li><span>b:{"\xa0\xa0"}-...   </span></li>
            <li><span>c:{"\xa0\xa0"}-.-.  </span> </li>
            <li><span>d:{"\xa0\xa0"}-..    </span></li>
            <li><span>e:{"\xa0\xa0"}.      </span></li>
            <li><span>f:{"\xa0\xa0"}..-.   </span></li>
            <li><span>g:{"\xa0\xa0"}--.    </span></li>
            <li><span>h:{"\xa0\xa0"}....   </span></li>
            <li><span>i:{"\xa0\xa0"}..     </span></li>
            <li><span>j:{"\xa0\xa0"}.---   </span></li>
            <li><span>k:{"\xa0\xa0"}-.-    </span></li>
            <li><span>l:{"\xa0\xa0"}.-..   </span></li>
            <li><span>m:{"\xa0\xa0"}--     </span></li>
            <li><span>n:{"\xa0\xa0"}-.     </span></li>
            <li><span>o:{"\xa0\xa0"}---    </span></li>
            <li><span>p:{"\xa0\xa0"}.--.   </span></li>
            <li><span>q:{"\xa0\xa0"}--.-   </span></li>
            <li><span>r:{"\xa0\xa0"}.-.    </span></li>
            <li><span>s:{"\xa0\xa0"}...    </span></li>
            <li><span>t:{"\xa0\xa0"}-      </span></li>
            <li><span>u:{"\xa0\xa0"}..-    </span></li>
            <li><span>v:{"\xa0\xa0"}...-   </span></li>
            <li><span>w:{"\xa0\xa0"}.--   </span> </li>
            <li><span>x:{"\xa0\xa0"}-..-   </span></li>
            <li><span>y:{"\xa0\xa0"}-.--   </span></li>
            <li><span>z:{"\xa0\xa0"}--..   </span></li>
            <li><span>.{"\xa0"}:{"\xa0\xa0"}.-.-.-   </span></li>
            <li><span>'{"\xa0"}:{"\xa0\xa0"}.----.  </span></li>
            <li><span>,{"\xa0"}:{"\xa0\xa0"}--..--   </span></li>
            <li><span>!{"\xa0"}:{"\xa0\xa0"}-.-.--   </span></li>
          </ul>
        </div>
        
      </header>
    </div>
  );
}


export default App;
