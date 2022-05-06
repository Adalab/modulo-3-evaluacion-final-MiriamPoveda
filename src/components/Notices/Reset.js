function Reset(props) {
  // Función manejadora en App //
  const handleClick = () => {
    props.resetChild();
  };

  // HTML //

  /* EVENTO - onClick y función manejadora para comunicar con la madre */

  return <button onClick={handleClick}>Reset</button>;
}

export default Reset;
