// Ex 1 - remove all even numbers from the NavBar
// then make a Button for each instead of an <li>
function NavBar({ menuitems }) {
  const { Button } = ReactBootstrap;
  const filterList = menuitems.filter((listItems, index) => listItems%2 != 0);
  const updateList = filterList.map((listItems, index) => {
    return <Button key={index.toString()} style={{display: "inline"}}>{listItems}</Button>;
  });
  // note that React needs to have a single Parent
  return <div style={{ listStyleType: "none"}}>{updateList}</div>;
};
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
