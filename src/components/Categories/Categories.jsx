import { Shirt, Headset, Lamp, SoapDispenserDroplet } from "lucide-react";

const Categories = () => {
  return (
    <div className="pt-20">
      <h1 className="pl-10 text-[28px] font-semibold">Comprar por categoria</h1>
      <div className="grid grid-cols-2  md:grid-cols-4 gap-8 p-10 pt-5">
        <div>
          <div className="bg-[var(--color-surface)] flex justify-center items-center h-[250px] p-8">
            <Shirt className="w-full h-full" />
          </div>
          <p className="text-[24px] text-center">Roupas</p>
        </div>
        <div>
          <div className="bg-[var(--color-surface)] flex justify-center items-center h-[250px] p-8">
            <Headset className="w-full h-full" />
          </div>
          <p className="text-[24px] text-center">Eletronicos</p>
        </div>
        <div>
          <div className="bg-[var(--color-surface)] flex justify-center items-center h-[250px] p-8">
            <Lamp className="w-full h-full" />
          </div>
          <p className="text-[24px] text-center">Casa</p>
        </div>
        <div>
          <div className="bg-[var(--color-surface)] flex justify-center items-center h-[250px] p-8">
            <SoapDispenserDroplet className="w-full h-full" />
          </div>
          <p className="text-[24px] text-center">Limpeza</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
