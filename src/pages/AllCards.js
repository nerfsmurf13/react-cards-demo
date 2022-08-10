import CardItem from "../components/CardItem";

const DUMMY_DATA = [
  {
    id: "0",
    title: "item1",
    description: "whatever",
  },
  {
    id: "1",
    title: "item2",
    description: "whatever to the power of 2",
  },
];

function AllCardsPage() {
  return (
    <section>
      <h1>All Cards Page</h1>
      <div>
        {DUMMY_DATA.map((card) => {
          return <CardItem key={card.id} title={card.title} description={card.description} />;
        })}
      </div>
    </section>
  );
}

export default AllCardsPage;
