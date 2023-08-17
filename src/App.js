import React from "react";
import "./App.css";
import "./css/bootstrap/bootstrap.min.css";
import "./css/acss/acss.css";
import "./css/acss/animate.min.css";
//import "./css/fontawesome_5/css/all.min.css";

const App = () => {
  return (
      <>
     <nav class='px-2'>
      <div className="mb-2 nav-brand sz-24">HTML Writer</div>
    </nav>
    <div class='container'>
      <ElementsDisplay />
    </div>
    </>
  );
};
 
Element =()=>{
  let name 
}

function Elements(props){
  return(
      <button class='btn m-2 color-bg-white border color-black' onClick={props.click} >{props.name}</button>
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
  let eleList =
  [{rep:'paragraph',start:'<p>',end:'</p>'},{rep:'pre',start:'<pre>',end:'</pre>'},{rep:'division',start:'<div>',end:'</div>'},{rep:'body',start:'<body>',end:'</body>'},{rep:'footer',start:'<footer>',end:'</footer>'},{rep:'header',start:'<header>',end:'</header>'},{rep:'html',start:'<html>',end:'</html>'},{rep:'Javascript',start:'<script>',end:'</script>'},{rep:'title',start:'<title>',end:'</title>'},{rep:'code',start:'<code>',end:'</code>'},{rep:'h1',start:'<h1>',end:'</h1>'},{rep:'h2',start:'<h2>',end:'</h2>'},
  {rep:'h3',start:'<h3>',end:'</h3>'},{rep:'h4',start:'<h4>',end:'</h4>'},{rep:'h5',start:'<h5>',end:'</h5>'},{rep:'h6',start:'<h6>',end:'</h6>'}
  ]
  let [elementList,setElementList] = React.useState(eleList)
  return(
    <>
    <h5 class='color-p'>Add Tag </h5>
    <div class='d-flex my-2' style={{overflow:'auto' }}>
        {
      elementList.map((x)=>{
        return(<Elements name={x.rep} click={()=>{setStart(x.start);setEnd(x.end)}} />)
      })
    }
    </div>

    <div class='hide my-2' id='addTag'>
      <p> rep : <input class='form-control' ref={addTagName} /> </p>
      <p> start : <input class='form-control' ref={addTagStart} /></p>
      <p> end : <input class='form-control' ref={addTagEnd} /></p>
      <button className='btn' onClick={function(){elementList.push({rep:addTagName.current.value,start:addTagStart.current.value,end:addTagEnd.current.value});setElementList(elementList)}}>Add</button>
    </div>
    <div class='row'>
    <div class='col-md-6 my-2'>
    <h5 class='color-p'>Add Content </h5 >
    <div class='my-2'>{start} </div>
      <p><textarea name='element' class='form-control' style={{height:'150px'}} ref={elementValue} onChange={()=>{setValue(elementValue.current.value)}} placeholder='Insert Text' ></textarea></p>
      <p class='border rounded p-2'>{start} {value} {end} </p>
      <p><button class='btn btn-block btn-sucess' onClick={()=>{setTotal(total+=start+value+end);setValue('');setStart('');setEnd('');elementValue.current.value=''}}> Push </button></p>
    </div>
    <div class='col-md-6 my-2'>
      <h5 class='color-p'>Result</h5>
      <textarea class='form-control border my-2 ' editable={true} value={total} style={{height:'300px'}}>{total}</textarea>
      <h5 class='color-p'>HTML Result</h5>
      <div dangerouslySetInnerHTML={{__html: total }} /> 
    </div>
      </div>
    </>

  )
}
export default App;

/*

    <button class='btn btn-link border color-black' onClick={()=>{document.getElementById('addTag').classList.toggle('d-block')}}>Add Tag <i class='fas fa-plus'></i> </button>
    */