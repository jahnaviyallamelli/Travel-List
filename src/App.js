import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 12, packed: false },
// ];
export default function App() {
  const [items, setitems] = useState([]);

  function HandleItems(item) {
    setitems((items) => [...items, item]);
  }
  function HandleDeleteItems(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }
  function HandleToggleItem(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function HandleClearlist() {
    const confirmed = window.confirm(
      "Are your sure you want to delete all items?"
    );
    if (confirmed) setitems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdditem={HandleItems} />
      <PackingList
        items={items}
        onDeleteitem={HandleDeleteItems}
        onToggleItem={HandleToggleItem}
        onClearItem={HandleClearlist}
      />
      <Stats items={items} />
    </div>
  );
}
