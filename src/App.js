import React from "react";
import "./App.css";
import "./css/bootstrap/bootstrap.min.css";
import "./css/acss/acss.css";
import "./css/acss/animate.min.css";
import "./css/fontawesome_5/css/all.min.css";

const App = () => {
  return (
    <div class='container'>
      <h1 className="heading">HTML Converter</h1>
      <ElementsDisplay />
    </div>
  );
};
 
Element =()=>{
  let name 
}

function Elements(props){
  return(
      <button class='btn m-2 color-bg-p color-white' onClick={props.click} >{props.name}</button>
    )
}

function ElementsDisplay(props){
  let element = React.useRef();
  let elementValue = React.useRef()
  let addTagName = React.useRef()
  let addTagStart = React.useRef()
  let addTagEnd = React.useRef()
  let [value ,setValue] = React.useState();
  let [start,setStart] = React.useState();
  let [end,setEnd] = React.useState();
  let [total,setTotal] = React.useState('');
  let eleList = [{rep:'paragraph',start:'<p>',end:'</p>'},{rep:'code',start:'<code>',end:'</code>'}]
  let [elementList,setElementList] = React.useState(eleList)
  return(
    <>
    {
      elementList.map((x)=>{
        return(<Elements name={x.rep} click={()=>{setStart(x.start);setEnd(x.end)}} />)
      })
    }
    <button class='btn btn-link border color-black' onClick={()=>{document.getElementById('addTag').classList.toggle('d-block')}}>Add Tag <i class='fas fa-plus'></i> </button>
    <div class='hide' id='addTag'>
      <p> rep : <input class='form-control' ref={addTagName} /> </p>
      <p> start : <input class='form-control' ref={addTagStart} /></p>
      <p> end : <input class='form-control' ref={addTagEnd} /></p>
      <button className='btn' onClick={function(){elementList.push({rep:addTagName.current.value,start:addTagStart.current.value,end:addTagEnd.current.value});setElementList(elementList)}}>Add</button>
    </div>
      <p><textarea name='element' class='form-control' style={{height:'500px'}}ref={elementValue} onChange={()=>{setValue(elementValue.current.value)}} placeholder='Insert Text' ></textarea></p>
      <p>{start} {value} {end} </p>
      <p><button class='btn btn-block btn-sucess' onClick={()=>{setTotal(total+=start+value+end);setValue('');setStart('');setEnd('');elementValue.current.value=''}}> Push </button></p>
      <h4>Final Result</h4>
      <div class=''>{total}</div>
    </>

  )
}
export default App;
