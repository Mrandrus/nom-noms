import ExampleTwo from "./ExampleTwo";

function ExampleOne() {
  return (
    <div>
      <p>example prop data</p>
      <ExampleTwo Category="Food" Rating="Very good" />
      <ExampleTwo Category="Food" Rating="Very bad" />
    </div>
  );
}

export default ExampleOne;
