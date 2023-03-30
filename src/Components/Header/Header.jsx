
function Header({title}) {
  return (
  <header>
    <div className="p-4 border text-center bg-green-200 shadow-lg">
        <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  </header>
  );
}

export default Header;