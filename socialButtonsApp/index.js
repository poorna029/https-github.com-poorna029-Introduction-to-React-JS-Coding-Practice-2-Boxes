const Button = (props) => {
  //  Write your code here.
  const { element } = props;
  return element;
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Social Buttons</h1>
  </div>
);

ReactDOM.render(<Button element />, document.getElementById("root"));
