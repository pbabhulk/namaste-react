/**
 *  <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *       </div>
 *  </div>
 *
 *
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Im heading h1 tag"),
    React.createElement("h2", {}, "Im heading h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im heading h1 tag"),
    React.createElement("h2", {}, "Im heading h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { style: { color: "red" }, id: "heading" },
  "Hello World from React!"
);
console.log(heading, "Heading tag");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


//JSX