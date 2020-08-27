
const ContainerDiv = React.createElement(
  "div",
  {
  className:"description"
  },
  React.createElement(
  "p",{
  className:"text"
  },
  "Hello, World!"
  )
  )
  
  const myWelcomeText = "Welcome Home!";
  
  const ContainerJSXDiv = (
  <div className="container">
  <div className ="description">
  <p className="text">{myWelcomeText}</p>
  </div>
  </div>
  );
  
  
  console.log(ContainerJSXDiv);