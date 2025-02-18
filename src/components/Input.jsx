export const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
    />
  );
};
