// use of "props" to set data
function NavBar(props) {
  const list = props.menuitems;
  const { Button } = ReactBootstrap;
  // each item should have an unique key
  const updatedList = list.map((listItems, index) => {
    return <Button key={index.toString()}>{listItems}</Button>
  });
  // note that React needs to have a single Parent
  return <ul>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />, //anything passed into component is default "props", we can deconstruct that to easily call specific attriute name
  document.getElementById("root")
);
