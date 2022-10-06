function Button() {

  function convert() {
    console.log('You clicked the button!');
  }

  return <button onClick={convert}>Convert!</button>;
}

export default Button;
