import { useState } from "react";

export function Form({ onAdditem }) {
  const [description, setdescription] = useState("");
  const [quantity, setqunatity] = useState(1);

  function HandleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAdditem(newItem);
    setdescription("");
    setqunatity(1);
  }
  return (
    <form className="add-form" onSubmit={HandleSubmit}>
      <h3>What do you need for your 😎 trip ?</h3>
      <select
        value={quantity}
        onChange={(e) => setqunatity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setdescription(e.target.value);
        }}
      ></input>
      <button>Add</button>
    </form>
  );
}
