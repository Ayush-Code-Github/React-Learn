// const heading = React.createElement("h1",
//         {
//                 id:"heading",
//                 xyz:"Ayush"
//         }, "Capsule React");
// console.log(heading)
//reactElement(object)=> HTML(Browser understands) basically root.render converts the react object the js object which is a react element for HTML browser to understand and put it up to the html dom, bascially it converts react object to html for browser to understand.
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, [
            "i am h2 tag",
            " capsule corp"
        ])
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "i am h2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
