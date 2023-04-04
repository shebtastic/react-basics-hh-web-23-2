import { Fragment } from "react";

function Greeting() {
  const name = "Mareike";
  const bool = false;
  console.log("komponentenebene");

  return (
    <>
      {/** <> steht für <Fragment> */}
      <h1 id="greeting">Hello {bool ? name : "World"}</h1>
      <p className="some-class">
        This is <strong>React</strong>
      </p>
    </>
  );
}

export default Greeting;
