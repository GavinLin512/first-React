// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
// ReactDOM.render(
//     <ul><li>Things1</li><li>Things2</li></ul>, 
//     document.getElementById("root")
// )

// function MainContent() {
//     return (
//         <h1>I'm learning React!</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         {/* <Navbar /> */}
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

var h1 = document.createElement("h1");
h1.textContent = 'try first lesson';
h1.className = 'header';
// document.getElementById("root").append(h1)
// Log Test
console.log(h1);

var element = React.createElement(
    'h1',
    { className: 'header' },
    'This is JSX'
);

// Log Test
console.log(element);

// html must be one parent
// ReactDOM.render(
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>this is paragraph</p>
//     </div>,
//     document.getElementById("root")
// )
var page = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        { className: 'header' },
        'This is JSX'
    ),
    React.createElement(
        'p',
        null,
        'this is paragraph'
    )
);
ReactDOM.render(page, document.getElementById("root"));