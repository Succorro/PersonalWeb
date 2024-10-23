import React from "react";

function Header({ name, title }) {
  return (
    <header>
      <h1 className="mt-12 text-2xl font-bold leading-none text-zinc-900 max-md:mt-10">{name}</h1>
      <p className="mt-2 text-base text-blue-300 leading-none">{title}</p>
    </header>
  );
}

export default Header;