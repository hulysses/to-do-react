export const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-slate-500 text-white px-4 py-2 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
