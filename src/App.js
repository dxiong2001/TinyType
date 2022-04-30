//import { useLongPress } from 'use-long-press';
import './App.css';
import useLongPress from './longPress'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import {init, color} from './canvas'

const MySwal = withReactContent(Swal)
var line =[]
var menu = 0;
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

var init_func = false;

var canvas, ctx, flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        dot_flag = false;
var canvas_width, canvas_height = 0
var pos_x = 0
var pos_y = 10



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
    case '.-.-.-':   return '.'
    case '.----.':   return '\''
    case '--..--':   return ','
    case '-.-.--':   return '!'
    default: return ''
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
        position: 'bottom-center',
        icon: 'info',
        
        title: 'About TinyType',
        html: 'TinyType is a keyboard free keyboard! <ul class="sw"><li>Use the \"0\" button to type out \n\".\" (short press) or \"-\" (long press) to form letters</li><li>To delete a character, short click on \"x\"</li><li>To move the cursor left, long press on \"x\"</li><li>To press space, short click on \"s\"</li><li>To move the cursor right, long press on \"s\"</li><li>To view info on TinyType, click on \"i\" (which you must have already done to get to this screen)</li><li>*Note: if the cursor is not displayed, then it means it is at the end of the type buffer</li><ul> ',
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
      
    }
}


function tab(index){
  document.querySelector('#container>.active').classList.remove('active');
  document.querySelector(`#container>:nth-child(${index + 1})`).classList.add('active');
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

  const longPressProps4 = useLongPress({
    onClick: () => tab(0),
    onLongPress: () => handleClick("i"),
  });
  const longPressProps5 = useLongPress({
    onClick: () => tab(1),
    onLongPress: () => handleClick("i"),
  });

  setInterval(function() {
    //console.log("test");
    time2 =  new Date().getTime() ;
    if(time2-time1>500 && time1 != 0 && time1 > tempTime){
      s.replace("|", "")
      let temp = mapKey(x)
      s  = s.slice(0, cursor) + mapKey(x)+ s.slice(cursor, s.length) ;
      document.getElementById("demo").style.opacity = "1";
      document.getElementById("demo").innerHTML = s;
      x="\xa0";
      document.getElementById("demo2").innerHTML = x;
      tempTime = time1;
      if(temp !== "" ){
        cursor += 1;
      }
    
    }
    if(!init_func){
      console.log("testing")
      if(document.getElementById('can')!==null){
        init()
        init_func = true
      }
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
        <ul id="tabs">
          <li><button className="row0" id="btn4" {...longPressProps4}>type</button></li>
          <li><button className="row0" id="btn4" {...longPressProps3}>i</button></li>
          <li><button className="row0" id="btn4" {...longPressProps5}>emoji</button></li>
          
        </ul>
        
        <div id="container">
          <div class="active">
              <div className="tab1">
                <button className="row1" id="btn1" {...longPressProps1}>x</button>
                <button className="row1" id="btn2" {...longPressProps}>0</button>
                
                <button className="row1" id="btn3" {...longPressProps2}>s</button>
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
              </div>
          </div>
          <div>
            <div >
              <div className="tab2">
                <canvas className="canvas" id="can"></canvas>
                <img id="canvasimg" ></img>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      
        
        <p id="moreinfo">Press "i" for more information</p>
        
      </header>
    </div>
  );
}



function init() {
  console.log("testttt")
  canvas = document.getElementById('can');
  ctx = canvas.getContext("2d");
  canvas_width = canvas.width;
  canvas_height = canvas.height;

  canvas.addEventListener("mousemove", function (e) {
      findxy('move', e)
  }, false);
  canvas.addEventListener("mousedown", function (e) {
      findxy('down', e)
  }, false);
  canvas.addEventListener("mouseup", function (e) {
      findxy('up', e)
  }, false);
  canvas.addEventListener("mouseout", function (e) {
      findxy('out', e)
  }, false);
}
function Point(x, y) // constructor
{
	this.X = x;
	this.Y = y;
}

function findxy(res, e) {
  var rect = canvas.getBoundingClientRect();
  var scaleX = canvas.width / rect.width;    // relationship bitmap vs. element for x
  var scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y
  if (res == 'down') {
      ctx.clearRect(0, 0, canvas_width, canvas_height);
      document.getElementById("canvasimg").style.display = "none";
      line = []
      prevX = currX;
      prevY = currY;
      currX = (e.clientX - rect.left)*scaleX;
      currY = (e.clientY - rect.top)*scaleY;
      line.push(new Point(Math.round(currX), Math.round(currY)))

      flag = true;
      dot_flag = true;
      if (dot_flag) {
          ctx.beginPath();
          ctx.fillStyle = pos_x;
          ctx.fillRect(currX, currY, 2, 2);
          ctx.closePath();
          dot_flag = false;
      }
  }
  if (res == 'up' || res == "out") {
      flag = false;
      console.log(line)
      
  }
  if (res == 'move') {
      
      
      if (flag) {
          prevX = currX;
          prevY = currY;
          currX = (e.clientX - rect.left)*scaleX;
          currY = (e.clientY - rect.top)*scaleY;
          line.push(new Point(Math.round(currX), Math.round(currY)))
          draw();
      }
  }
}

function draw() {
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(currX, currY);
  ctx.strokeStyle = pos_x;
  ctx.lineWidth = pos_y;
  ctx.stroke();
  ctx.closePath();
}


export default App;
