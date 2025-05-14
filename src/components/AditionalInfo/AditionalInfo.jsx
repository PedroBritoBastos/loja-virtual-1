import headphone from "../../assets/images/headphone.jpg";

const AditionalInfo = () => {
  return (
    <div className="flex justify-evenly flex-wrap">
      <div className="mt-15 mb-15">
        <h1 className="text-center text-[24px] mb-10 font-semibold">
          Mais Vendidos
        </h1>
        <div className="bg-[var(--color-surface)]">
          <img src={headphone} alt="headphone" />
        </div>
        <p className="text-[24px] font-semibold mt-5">R$ 99,90</p>
      </div>
      <div className="mt-15 mb-15">
        <h1 className="text-center text-[24px] mb-10 font-semibold">
          Novidades
        </h1>
        <div className="bg-[var(--color-surface)]">
          <img src={headphone} alt="headphone" />
        </div>
        <p className="text-[24px] font-semibold mt-5">R$ 99,90</p>
      </div>
      <div className="mt-15 mb-15">
        <h1 className="text-center text-[24px] mb-10 font-semibold">
          Ofertas da semana
        </h1>
        <div className="flex gap-15">
          <div>
            <div className="bg-[var(--color-surface)]">
              <img src={headphone} alt="headphone" />
            </div>
            <p className="text-[24px] font-semibold mt-5">R$ 99,90</p>
          </div>
          <div>
            <div className="bg-[var(--color-surface)]">
              <img src={headphone} alt="headphone" />
            </div>
            <p className="text-[24px] font-semibold mt-5">R$ 99,90</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AditionalInfo;
