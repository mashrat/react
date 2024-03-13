/**
 * 
 * <div id="parent">
 *      <div id="child">  /* nested
 *          <h1>i am h1 tag !!!!</h1>
 *          <h2>i am h2 tag !!!!</h2>
 *      </div>
 *      <div id="child2">  /* nested
 *          <h1>i am h1 tag !!!!</h1>
 *          <h2>i am h2 tag !!!!</h2>
 *      </div>
 * </div>
 * ReactElement(Object)=>HTML(Browser understand) for knowledge
 react object becom HTMl Browser undestand
*/

// one Element
const heading = React.createElement("h1",{id:'heading'},"Hello Word from React !!!"); //take 3 arguments
const root = ReactDOM.createRoot(document.getElementById("mas")) //conncet with DOM all react code run in this root 
root.render(heading); 

// multiple Element

const headingN = React.createElement(
    "div",
    {id:'parent'},[
        React.createElement("div",
    {id:'child'},
    [React.createElement("h1",{},'i am h1 tag !!!!'),
    React.createElement("h2",{},'i am h2 tag !!!!')]),
    React.createElement("div",
        {id:'child2'},
    [React.createElement("h1",{},'i am h1 tag !!!!'),
    React.createElement("h2",{},'i am h2 tag !!!!')])
    ]
    );

console.log(headingN) //'object'
const rootN =ReactDOM.createRoot(document.getElementById("root"));
rootN.render(headingN); // react object becom HTMl Browser undestand