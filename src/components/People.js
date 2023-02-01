import Person from "./Person";
const People = ({ people, Index }) => {
  return (
    <>
      {people.map((person, personIndex) => {
        let position = "nextSlide";
        if (personIndex === Index) {
          position = "activeSlide";
        }
        if (
          personIndex === Index - 1 ||
          (Index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }
        return <Person key={person.id} {...person} position={position} />;
      })}
    </>
  );
};

export default People;
