// Code Keypad Component Here

function Keypad() {
  return (
    <input
      type="password"
      name="keypad"
      id="keypad"
      onChange={() => console.log('Entering password...')}
    />
  );
}

export default Keypad;
