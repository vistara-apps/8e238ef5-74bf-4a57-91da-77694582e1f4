'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { RotateCcw, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

function DogModel() {
  return (
    <mesh>
      <boxGeometry args={[2, 1, 0.5]} />
      <meshStandardMaterial 
        color="#4a9eff" 
        transparent 
        opacity={0.6}
        wireframe={false}
      />
    </mesh>
  );
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
        <p className="text-gray-400">Loading 3D model...</p>
      </div>
    </div>
  );
}

export function XrayViewer3D() {
  return (
    <div className="relative">
      <div className="aspect-video bg-surface rounded-lg overflow-hidden border border-gray-700">
        <Canvas>
          <Suspense fallback={<LoadingFallback />}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={2}
              maxDistance={10}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <DogModel />
            <Environment preset="studio" />
          </Suspense>
        </Canvas>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-surface bg-opacity-90 backdrop-blur-sm p-2 rounded-lg border border-gray-700">
        <button className="p-2 hover:bg-accent hover:bg-opacity-20 rounded transition-colors" title="Reset View">
          <RotateCcw className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-accent hover:bg-opacity-20 rounded transition-colors" title="Zoom In">
          <ZoomIn className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-accent hover:bg-opacity-20 rounded transition-colors" title="Zoom Out">
          <ZoomOut className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-accent hover:bg-opacity-20 rounded transition-colors" title="Fullscreen">
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-4 p-4 bg-surface bg-opacity-50 rounded-lg border border-gray-700">
        <h3 className="font-medium mb-2 text-sm">3D Viewer Controls</h3>
        <ul className="text-sm text-gray-400 space-y-1">
          <li>• <strong>Rotate:</strong> Click and drag</li>
          <li>• <strong>Zoom:</strong> Scroll or pinch</li>
          <li>• <strong>Pan:</strong> Right-click and drag</li>
        </ul>
      </div>
    </div>
  );
}
