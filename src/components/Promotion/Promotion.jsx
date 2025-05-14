import headphone from "../../assets/images/headphone.jpg";

const Promotion = () => {
  return (
    <div className="p-10">
      <div className="flex gap-20">
        <a href="" className="text-[24px]">
          Roupas
        </a>
        <a href="" className="text-[24px]">
          Eletronicos
        </a>
        <a href="" className="text-[24px]">
          Casa
        </a>
        <a href="" className="text-[24px]">
          Beleza
        </a>
        <a href="" className="text-[24px]">
          Ofertas
        </a>
      </div>

      <div className="flex bg-[var(--color-surface)] p-20 rounded-[15px] mt-5">
        <div className="flex-1">
          <h1 className="text-[60px]">Nova coleção</h1>
          <h1 className="text-[60px]">20% OFF</h1>
          <button className="bg-[var(--color-button)] text-white p-2.5 w-50 rounded-[25px] mt-5 text-[20px]">
            Comprar agora
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={headphone} alt="headphone" className="h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
