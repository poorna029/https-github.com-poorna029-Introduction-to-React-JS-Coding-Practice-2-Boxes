const Box = (props) => {
  //  Write your code here.
  const { class1, text, Heading } = props;
  return (
    <div>
      <h1 className="heading">{Heading}</h1>
      <div className="bottom">
        <p className={class1}>{text}</p>
      </div>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <Box Heading="Boxes" />
    <div className="main">
      <Box class1="small" text="Small" />
      <Box class1="medium" text="Medium" />
      <Box class1="large" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
