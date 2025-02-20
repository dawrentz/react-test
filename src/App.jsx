import "./App.css";

// ===================== example 2 ===================== //

// function Item({ name, isPacked }) {
//   let itemContent = name;
//   if (isPacked) {
//     itemContent = <del>{name + " ✅"}</del>;
//   }

//   return <li className="item">{itemContent}</li>;
// }

// function Item({ name, importance }) {
//   return (
//     <li className="item">
//       {name} <i>{importance > 0 && `(Importance: ${importance})`}</i>
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item importance="9" name="Space suit" />
//         <Item name="Helmet with a golden leaf" />
//         <Item importance="6" name="Photo of Tam" />
//       </ul>
//     </section>
//   );
// }

// ===================== example 3 ===================== //

// function Drink({ name }) {
//   return (
//     <section>
//       <h1>{name}</h1>
//       <dl>
//         <dt>Part of plant</dt>
//         <dd>{name === "tea" ? "leaf" : "bean"}</dd>
//         <dt>Caffeine content</dt>
//         <dd>{name === "tea" ? "15–70 mg/cup" : "80–185 mg/cup"}</dd>
//         <dt>Age</dt>
//         <dd>{name === "tea" ? "4,000+ years" : "1,000+ years"}</dd>
//       </dl>
//     </section>
//   );
// }

// function Drink({ name }) {
//   let drinkInfo = {
//     plantPart: "leaf",
//     caffContent: "15–70 mg/cup",
//     age: "4,000+ years",
//   };

//   if (name === "coffee") {
//     drinkInfo.plantPart = "bean";
//     drinkInfo.caffContent = "80–185 mg/cup";
//     drinkInfo.age = "1,000+ years";
//   }

//   return (
//     <section>
//       <h1>{name}</h1>
//       <dl>
//         <dt>Part of plant</dt>
//         <dd>{drinkInfo.plantPart}</dd>
//         <dt>Caffeine content</dt>
//         <dd>{drinkInfo.caffContent}</dd>
//         <dt>Age</dt>
//         <dd>{drinkInfo.age}</dd>
//       </dl>
//     </section>
//   );
// }

// export default function DrinkList() {
//   return (
//     <div>
//       <Drink name="tea" />
//       <Drink name="coffee" />
//     </div>
//   );
// }

// ===================== example 4 ===================== //

// function getImageUrl(person) {
//   return "https://i.imgur.com/" + person.imageId + "s.jpg";
// }

// const people = [
//   {
//     id: 0,
//     name: "Creola Katherine Johnson",
//     profession: "mathematician",
//     accomplishment: "spaceflight calculations",
//     imageId: "MK3eW3A",
//   },
//   {
//     id: 1,
//     name: "Mario José Molina-Pasquel Henríquez",
//     profession: "chemist",
//     accomplishment: "discovery of Arctic ozone hole",
//     imageId: "mynHUSa",
//   },
//   {
//     id: 2,
//     name: "Mohammad Abdus Salam",
//     profession: "physicist",
//     accomplishment: "electromagnetism theory",
//     imageId: "bE7W1ji",
//   },
//   {
//     id: 3,
//     name: "Percy Lavon Julian",
//     profession: "chemist",
//     accomplishment:
//       "pioneering cortisone drugs, steroids and birth control pills",
//     imageId: "IOjWm71",
//   },
//   {
//     id: 4,
//     name: "Subrahmanyan Chandrasekhar",
//     profession: "astrophysicist",
//     accomplishment: "white dwarf star mass calculations",
//     imageId: "lrWQx8l",
//   },
// ];

// export default function List() {
//   const chemistList = getListItems(chemists);
//   const othersList = getListItems(others);

//   return (
//     <article>
//       <h1>Scientists</h1>
//       <h2>Chemist</h2>
//       <ul>{chemistList}</ul>
//       <h2>Others</h2>
//       <ul>{othersList}</ul>
//     </article>
//   );
// }

// const chemists = people.filter((person) => person.profession === "chemist");
// const others = people.filter((person) => person.profession !== "chemist");

// function getListItems(people) {
//   const listItems = people.map((person) => (
//     <li key={person.id}>
//       <img src={getImageUrl(person)} alt={person.name} />
//       <p>
//         <b>{person.name}:</b>
//         {" " + person.profession + " "}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   ));
//   return listItems;
// }

// ===================== example 5 ===================== //

// export const recipes = [
//   {
//     id: "greek-salad",
//     name: "Greek Salad",
//     ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
//   },
//   {
//     id: "hawaiian-pizza",
//     name: "Hawaiian Pizza",
//     ingredients: [
//       "pizza crust",
//       "pizza sauce",
//       "mozzarella",
//       "ham",
//       "pineapple",
//     ],
//   },
//   {
//     id: "hummus",
//     name: "Hummus",
//     ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
//   },
// ];

// export default function RecipeList() {
//   const foodListItems = recipes.map((recipe) => (
//     <div key={recipe.id}>
//       <h2>{recipe.name}</h2>
//       <ul>
//         {recipe.ingredients.map((ingredient) => (
//           <li key={ingredient}>{ingredient}</li>
//         ))}
//       </ul>
//     </div>
//   ));

//   return (
//     <div>
//       <h1>Recipes</h1>
//       {foodListItems}
//     </div>
//   );
// }

// ===================== example 6 ===================== //

// export const recipes = [
//   {
//     id: "greek-salad",
//     name: "Greek Salad",
//     ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
//   },
//   {
//     id: "hawaiian-pizza",
//     name: "Hawaiian Pizza",
//     ingredients: [
//       "pizza crust",
//       "pizza sauce",
//       "mozzarella",
//       "ham",
//       "pineapple",
//     ],
//   },
//   {
//     id: "hummus",
//     name: "Hummus",
//     ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
//   },
// ];

// function Recipe({ id, name, ingredients }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <ul>
//         {ingredients.map((ingredient) => (
//           <li key={ingredient}>{ingredient}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map((recipe) => (
//         <Recipe {...recipe} key={recipe.id} />
//       ))}
//     </div>
//   );
// }

// ===================== example 7 ===================== //

// const poem = {
//   lines: [
//     "I write, erase, rewrite",
//     "Erase again, and then",
//     "A poppy blooms.",
//   ],
// };

// export default function Poem() {
//   return (
//     <article>
//       {poem.lines.map((line, index) => (
//         <>
//           <p key={index}>{line}</p>
//           {index !== poem.lines.length - 1 ? <hr /> : null}
//         </>
//       ))}
//     </article>
//   );
// }

// ===================== example 8 ===================== //

// function getImageUrl(imageId, size = "s") {
//   return "https://i.imgur.com/" + imageId + size + ".jpg";
// }

// function Profile({ person, imageSize = 70 }) {
//   return (
//     <section className="profile">
//       <h2>{person.name}</h2>
//       <img
//         className="avatar"
//         src={getImageUrl(person.imageId)}
//         alt={person.name}
//         width={imageSize}
//         height={imageSize}
//       />
//       <ul>
//         <li>
//           <b>Profession: </b>
//           {person.profession}
//         </li>
//         <li>
//           <b>Awards: {person.awards.length} </b>({person.awards.join(", ")})
//         </li>
//         <li>
//           <b>Discovered: </b>
//           {person.discovery}
//         </li>
//       </ul>
//     </section>
//   );
// }

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile
//         person={{
//           name: "Maria Skłodowska-Curie",
//           imageId: "szV5sdG",
//           profession: "physicist and chemist",
//           awards: [
//             "Nobel Prize in Physics",
//             "Nobel Prize in Chemistry",
//             "Davy Medal",
//             "Matteucci Medal",
//           ],
//           discovery: "polonium (chemical element)",
//         }}
//       />
//       <Profile
//         person={{
//           name: "Katsuko Saruhashi",
//           imageId: "YfeOqp2",
//           profession: "geochemist",
//           awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
//           discovery: "a method for measuring carbon dioxide in seawater",
//         }}
//       />
//     </div>
//   );
// }

// ===================== example 9 ===================== //

// export function getImageUrl(person, size) {
//   return "https://i.imgur.com/" + person.imageId + size + ".jpg";
// }

// function Avatar({ person, size }) {
//   let bOrS;
//   size >= 90 ? (bOrS = "b") : (bOrS = "s");

//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person, bOrS)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <Avatar
//       size={40}
//       person={{
//         name: "Gregorio Y. Zara",
//         imageId: "7vQD0fP",
//       }}
//     />
//   );
// }

// ===================== example 10 ===================== //

// function Card({ children }) {
//   return (
//     <div className="card">
//       <div className="card-content">{children}</div>
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Card>
//         <h1>Photo</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/OKS67lhm.jpg"
//           alt="Aklilu Lemma"
//           width={70}
//           height={70}
//         />
//       </Card>

//       <Card>
//         <h1>About</h1>
//         <p>
//           Aklilu Lemma was a distinguished Ethiopian scientist who discovered a
//           natural treatment to schistosomiasis.
//         </p>
//       </Card>
//     </div>
//   );
// }

// ===================== example 11 ===================== //

// const sculptureList = [
//   {
//     name: "Homenaje a la Neurocirugía",
//     artist: "Marta Colvin Andrade",
//     description:
//       "Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.",
//     url: "https://i.imgur.com/Mx7dA2Y.jpg",
//     alt: "A bronze statue of two crossed hands delicately holding a human brain in their fingertips.",
//   },
//   {
//     name: "Floralis Genérica",
//     artist: "Eduardo Catalano",
//     description:
//       "This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.",
//     url: "https://i.imgur.com/ZF6s192m.jpg",
//     alt: "A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.",
//   },
//   {
//     name: "Eternal Presence",
//     artist: "John Woodrow Wilson",
//     description:
//       'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
//     url: "https://i.imgur.com/aTtVpES.jpg",
//     alt: "The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.",
//   },
//   {
//     name: "Moai",
//     artist: "Unknown Artist",
//     description:
//       "Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.",
//     url: "https://i.imgur.com/RCwLEoQm.jpg",
//     alt: "Three monumental stone busts with the heads that are disproportionately large with somber faces.",
//   },
//   {
//     name: "Blue Nana",
//     artist: "Niki de Saint Phalle",
//     description:
//       "The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.",
//     url: "https://i.imgur.com/Sd1AgUOm.jpg",
//     alt: "A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.",
//   },
//   {
//     name: "Ultimate Form",
//     artist: "Barbara Hepworth",
//     description:
//       "This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.",
//     url: "https://i.imgur.com/2heNQDcm.jpg",
//     alt: "A tall sculpture made of three elements stacked on each other reminding of a human figure.",
//   },
//   {
//     name: "Cavaliere",
//     artist: "Lamidi Olonade Fakeye",
//     description:
//       "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
//     url: "https://i.imgur.com/wIdGuZwm.png",
//     alt: "An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.",
//   },
//   {
//     name: "Big Bellies",
//     artist: "Alina Szapocznikow",
//     description:
//       "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
//     url: "https://i.imgur.com/AlHTAdDm.jpg",
//     alt: "The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.",
//   },
//   {
//     name: "Terracotta Army",
//     artist: "Unknown Artist",
//     description:
//       "The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.",
//     url: "https://i.imgur.com/HMFmH6m.jpg",
//     alt: "12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.",
//   },
//   {
//     name: "Lunar Landscape",
//     artist: "Louise Nevelson",
//     description:
//       "Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.",
//     url: "https://i.imgur.com/rN7hY6om.jpg",
//     alt: "A black matte sculpture where the individual elements are initially indistinguishable.",
//   },
//   {
//     name: "Aureole",
//     artist: "Ranjani Shettar",
//     description:
//       'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
//     url: "https://i.imgur.com/okTpbHhm.jpg",
//     alt: "A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.",
//   },
//   {
//     name: "Hippos",
//     artist: "Taipei Zoo",
//     description:
//       "The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.",
//     url: "https://i.imgur.com/6o5Vuyu.jpg",
//     alt: "A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.",
//   },
// ];

// import { useState } from "react";

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     setIndex(index === sculptureList.length - 1 ? 0 : index + 1);
//   }
//   function handlePrevClick() {
//     setIndex(index === 0 ? sculptureList.length - 1 : index - 1);
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];

//   return (
//     <>
//       <button onClick={handleNextClick}>Next</button>
//       <button onClick={handlePrevClick}>Previous</button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? "Hide" : "Show"} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img src={sculpture.url} alt={sculpture.alt} />
//     </>
//   );
// }

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   let nextDisabled = index === sculptureList.length - 1;
//   let prevDisabled = index === 0;

//   function handleNextClick() {
//     setIndex(index + 1);
//   }
//   function handlePrevClick() {
//     setIndex(index - 1);
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];

//   return (
//     <>
//       <button onClick={handlePrevClick} disabled={prevDisabled}>
//         Previous
//       </button>
//       <button onClick={handleNextClick} disabled={nextDisabled}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? "Hide" : "Show"} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img src={sculpture.url} alt={sculpture.alt} />
//     </>
//   );
// }

// ===================== example 12 ===================== //

// import { useState } from "react";

// export default function Form() {
//   const [firstName, setfirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   function handleFirstNameChange(e) {
//     setfirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }

//   function handleReset() {
//     setfirstName("");
//     setLastName("");
//   }

//   return (
//     <form onSubmit={(e) => e.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <h1>
//         Hi, {firstName} {lastName}
//       </h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }

// ===================== example 13 ===================== //

// import { useState } from "react";

// export default function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
//   const [message, setMessage] = useState("");
//   if (isSent) {
//     return <h1>Thank you!</h1>;
//   } else {
//     // eslint-disable-next-line
//     return (
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           alert(`Sending: "${message}"`);
//           setIsSent(true);
//         }}
//       >
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <br />
//         <button type="submit">Send</button>
//       </form>
//     );
//   }
// }

// ===================== example 14 ===================== //

// import { useState } from "react";

// export default function FeedbackForm() {
//   // const [name, setName] = useState("");

//   function handleClick() {
//     // setName(prompt("What is your name?"));
//     // prompt("What is your name?");
//     const name = prompt("What is your name?");
//     alert(`Hello, ${name}!`);
//   }

//   return <button onClick={handleClick}>Greet</button>;
// }

// ===================== example 15 ===================== //

// import { useState } from "react";

// export default function TrafficLight() {
//   const [walk, setWalk] = useState(true);

//   function handleClick() {
//     setWalk(!walk);
//     alert(walk ? "Stop is next" : "Walk is next");
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
//       <h1
//         style={{
//           color: walk ? "darkgreen" : "darkred",
//         }}
//       >
//         {walk ? "Walk" : "Stop"}
//       </h1>
//     </>
//   );
// }

// ===================== example 16 ===================== //

// import { useState } from "react";

// export default function SyncedInputs() {
//   const [text, setText] = useState("");

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <>
//       <Input label="First input" value={text} onChange={handleChange} />
//       <Input label="Second input" value={text} onChange={handleChange} />
//     </>
//   );
// }

// function Input({ label, value, onChange }) {
//   return (
//     <label>
//       {label} <input value={value} onChange={onChange} />
//     </label>
//   );
// }

// ===================== example 17 ===================== //

// function filterItems(items, query) {
//   query = query.toLowerCase();
//   return items.filter((item) =>
//     item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
//   );
// }

// const foods = [
//   {
//     id: 0,
//     name: "Sushi",
//     description:
//       "Sushi is a traditional Japanese dish of prepared vinegared rice",
//   },
//   {
//     id: 1,
//     name: "Dal",
//     description:
//       "The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added",
//   },
//   {
//     id: 2,
//     name: "Pierogi",
//     description:
//       "Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water",
//   },
//   {
//     id: 3,
//     name: "Shish kebab",
//     description:
//       "Shish kebab is a popular meal of skewered and grilled cubes of meat.",
//   },
//   {
//     id: 4,
//     name: "Dim sum",
//     description:
//       "Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch",
//   },
// ];

// import { useState } from "react";

// export default function FilterableList() {
//   const [query, setQuery] = useState("");
//   const filteredFoods = filterItems(foods, query);

//   function handleChange(e) {
//     setQuery(e.target.value);
//   }

//   return (
//     <>
//       <SearchBar value={query} onChange={handleChange} />
//       <hr />
//       <List items={filteredFoods} />
//     </>
//   );
// }

// function SearchBar({ value, onChange }) {
//   return (
//     <label>
//       Search: <input value={value} onChange={onChange} />
//     </label>
//   );
// }

// function List({ items }) {
//   return (
//     <table>
//       <tbody>
//         {items.map((food) => (
//           <tr key={food.id}>
//             <td>{food.name}</td>
//             <td>{food.description}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// ===================== example 18 ===================== //

import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith",
    age: 100,
  });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  function handleNameChange(e, isFirstName) {
    if (isFirstName) setPerson({ ...person, firstName: e.target.value });
    else setPerson({ ...person, lastName: e.target.value });
  }

  return (
    <>
      <input
        placeholder="first name"
        type="text"
        onChange={(e) => handleNameChange(e, true)}
      />
      <input
        placeholder="last name"
        type="text"
        onChange={(e) => handleNameChange(e, false)}
      />
      <h1>{person.firstName + " " + person.lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
