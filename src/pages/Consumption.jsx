import { useState } from "react";
import Input from '../components/Input'


const Consumption = () => {
  const [currentReading, setCurrentReading] = useState("");
  const [previousReading, setPreviousReading] = useState("");
  const [consumption, setConsumption] = useState(0);
  const [unitRate, setUnitRate] = useState("");
  const [valueMonth, setValueMonth] = useState(0);

  function handleInput() {
    let reading = currentReading - previousReading
    setConsumption(reading)
    let valuePay = reading * unitRate
    setValueMonth(valuePay.toFixed(2))
  }
  return (
    <div className="h-screen bg-gray-600 t">
      <div className="px-10 containerCard max-lg">
        <h2 className="p-5 text-center text-white ">
          *O valor calculado não leva em consideração tributos e impostos da sua região
        </h2>
        <form onClick={handleInput} className="max-w-xl p-10 m-auto font-medium bg-white border rounded shadow-md animate__animated animate__fadeInUp">
          <div className="flex gap-1">
            <Input
              label="Leitura atual"
              min='0'
              type="number"
              value={currentReading}
              setValue={setCurrentReading}
            />
            <Input
              label="Leitura Anterior"
              min='0'
              type="number"
              value={previousReading}
              setValue={setPreviousReading}
            />
          </div>
          <div className="max-w-xs">
            <Input
              label="Tarifa sem tributos"
              type="number"
              value={unitRate}
              setValue={setUnitRate}
            />
          </div>
          <div className="flex flex-wrap gap-10 p-10 mt-5 bg-gray-200">
            <div>
              <p className="text-xl font-medium ">Valor Aproximadamente</p>
              <span>R$ {valueMonth}</span>
            </div>
            <div>
              <p className="text-xl font-medium ">Consumo</p>
              <span>{consumption}</span>
      
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Consumption;
