function Button() {

  function convert() {
    console.log('You clicked the button!');
  }

  return (
    <div>
      <button onClick={convert}>Convert!</button>
    </div>
  );
}

export default Button;
