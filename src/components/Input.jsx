export default function Input({ label, value, dataKey, onDataChange }) {
  const onValChange = (e) => {
    onDataChange((prev) => ({ ...prev, [dataKey]: +e.target.value }));
  };
  return (
    <p>
      <label>{label}</label>
      <input type="number" value={value} onChange={onValChange} />
    </p>
  );
}
