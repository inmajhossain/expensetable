export default function ExpenseCategory({ categories, setSelectedCategory }) {
  return (
    <>
      <select
        className="select select-primary w-full max-w-xs"
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option disabled selected>
          Filter by Category
        </option>
        <option value="">All</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}
