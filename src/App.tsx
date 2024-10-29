import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Sun } from './components/Sun';
import { SolarInfo } from './components/SolarInfo';

function App() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="w-full h-screen relative bg-black">
      <Canvas
        camera={{ position: [0, 0, 4] }}
        onClick={() => setShowInfo(!showInfo)}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Sun />
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minDistance={2}
            maxDistance={10}
          />
        </Suspense>
      </Canvas>
      <SolarInfo isVisible={showInfo} />
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
        Click the sun to toggle information • Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
}

export default App;