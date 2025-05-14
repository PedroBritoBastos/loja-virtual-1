import { User, Heart, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-evenly p-2 pt-5">
        <h1 className="text-4xl">Logo</h1>
        <input
          type="text"
          placeholder="Search"
          className="bg-[var(--color-surface)] p-2 pl-5 w-90 rounded-[20px] hidden sm:block"
        />
        <div className="flex gap-10">
          <User className="w-10 h-10" />
          <Heart className="w-10 h-10" />
          <ShoppingCart className="w-10 h-10" />
        </div>
      </header>
    </>
  );
};

export default Header;
