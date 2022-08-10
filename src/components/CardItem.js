function CardItem(props) {
  return (
    <div>
      <div></div>
      <div>{props.title}</div>
      <div>{props.description}</div>
      <div>
        <button>Add</button>
      </div>
    </div>
  );
}

export default CardItem;
