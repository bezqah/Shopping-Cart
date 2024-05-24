// Ex 3 - write out all items with their stock number
// provide a button and use onClick={moveToCart} to move 1 item into the Shopping Cart
// use React.useState to keep track of items in the Cart.
// use React.useState to keep track of Stock items
// list out the Cart items in another column
function NavBar({ stockitems }) {
  const [cart, setCart] = React.useState([]);
  const [stock, setStock] = React.useState(stockitems);
  const { Button } = ReactBootstrap;
  // event apple:2
  const moveToCart = e => {
    let [name, num] = e.target.innerHTML.split(":"); // innerHTML should be format name:3
    // use newStock = stock.map to find "name" and decrease number in stock by 1
    // only if instock is >=  do we move item to Cart and update stock

    let newStock = stock.map((item, index) => {
      if (item.name == name && item.instock > 0) {
        item.instock--; //is the item clicked in the original array of items
        setCart([...cart, item.name]); //adding the items to the shopping cart
      }
      return item; //returns the updated object with decreased stock value
    });

    setStock(newStock); //sets that new array to the stock object

   };
  const updatedStock = stock.map((item, index) => {
    return (
      <Button onClick={moveToCart} key={index}>
        {item.name}:{item.instock}
      </Button>
    );
  });

  const updatedCart = cart.map((item, index) => { //rendering the button element for each item
    return (
      <Button onClick={moveToCart} key={index}>
        {item}
      </Button>
    );
  });
  // note that React needs to have a single Parent
  return (
    <>
      <ul style={{ listStyleType: "none" }}>{updatedStock}</ul>
      <h1>Shopping Cart</h1>
      <ul style={{ listStyleType: "non"}}>{updatedCart}</ul>
    </>
  );
}
const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];
ReactDOM.render(
  <NavBar stockitems={menuItems} />,
  document.getElementById("root")
);
