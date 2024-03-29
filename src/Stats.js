export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 🚀</em>
      </p>
    );
  const numitems = items.length;
  const packeditems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packeditems / numitems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ! Ready to go ✈"
          : `👜 You have ${numitems} items in your list, and you already packed ${packeditems} (${percentage}%)`}
      </em>
    </footer>
  );
}
