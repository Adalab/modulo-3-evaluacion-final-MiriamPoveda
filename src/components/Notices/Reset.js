function Reset(props) {

    const handleClick = () => {
      props.handleReset();
    };

    return (
      <button onClick={handleClick}>
        Reset
      </button>
    );
  }
  
  export default Reset;