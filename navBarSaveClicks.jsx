// use of "props" to set data
function NavBar(props) {
  const [clicks, setClicks] = React.useState([]);
  console.log(`clicks: ${clicks}`); //if the shadow DOM in React detects a change within itself, then it will rerender itself (new state vs old state ? difference = changes : no change)
  alert("Rendering Navbar...")
  const list = props.menuitems;
  const { Button } = ReactBootstrap;
  // each item should have an unique key
  const handleClick = e => {
    console.log(`cliked on: ${e.target.innerHTML}`)
    setClicks([...clicks, e.target.innerHTML]); //causes navBar component to re-render the page so goes back to definition of state above
  };
  const updatedList = list.map((listItems, index) => {
    return (
      <Button onClick={handleClick} key={index}>
        {listItems}
      </Button>
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
