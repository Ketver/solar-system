import { Info, Thermometer, Timer, Ruler } from 'lucide-react';

interface SolarInfoProps {
  isVisible: boolean;
}

export function SolarInfo({ isVisible }: SolarInfoProps) {
  if (!isVisible) return null;

  return (
    <div className="absolute top-4 right-4 bg-black/80 text-white p-6 rounded-lg backdrop-blur-sm w-80 shadow-xl">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Info className="w-6 h-6" />
        Solar Facts
      </h2>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Thermometer className="w-5 h-5 text-orange-400" />
          <div>
            <p className="font-semibold">Core Temperature</p>
            <p className="text-gray-300">15.7 million Kelvin</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Timer className="w-5 h-5 text-orange-400" />
          <div>
            <p className="font-semibold">Age</p>
            <p className="text-gray-300">4.6 billion years</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Ruler className="w-5 h-5 text-orange-400" />
          <div>
            <p className="font-semibold">Diameter</p>
            <p className="text-gray-300">1.39 million kilometers</p>
          </div>
        </div>
      </div>
    </div>
  );
}