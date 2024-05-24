// use of "props" to set data
function NavBar(props) {
  const list = props.menuitems;
  const { Button } = ReactBootstrap;
  // each item should have an unique key
  const handleClick = e => {
    console.log(e.target)
    alert(`you clicked button ${e.target.innerHTML}`) //recording the button clicked (no re-render)
  }
  const updatedList = list.map((listItems, index) => {
    return (
      <Button onClick={handleClick} key={index.toString()}>{listItems}</Button>
    );
  });
  // note that React needs to have a single Parent
  return <ul>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
