import React from "react";
import ReactDOM from 'react-dom'
// const heading = React.createElement("h1",
//         {
//                 id:"heading",
//                 xyz:"Ayush"
//         }, "Capsule React");

// console.log(heading)

//reactElement(object)=> HTML(Browser understands) basically root.render converts the react object the js object which is a react element for HTML browser to understand and put it up to the html dom, bascially it converts react object to html for browser to understand.

// const parent = React.createElement("div", { id: "parent" }, [

//   React.createElement("div", { id: "child1" }, [

//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, ["i am h2 tag", " capsule corp"]),
//   ]),

//   React.createElement("div", { id: "child2" }, [
    
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "i am h2 tag"),
//   ]),
// ]);

/* Note if error of parcel comes 
Error: Expected content key de1e4a02ec63c4eb to exist
at nullthrows (F:\react\node_modules\nullthrows\nullthrows.js:7:15) //Just delet the .parcel-cache and it will work or in the package json , for the script you can have the command 

"scripts": {
    "start": "rm -rf .parcel-cache && parcel",
    "build": "rm -rf .parcel-cache && parcel build"
  } */

const Heading = () => (
   <><h1>AYush1</h1>
{2+2}</>

)

const Heading2 = () => (
  
  <>
  {Heading()}
  <Heading/>
  <Heading></Heading>
  <h1>AYush</h1>
{2+8}</>

)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading2/>);


