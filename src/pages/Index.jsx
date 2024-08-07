import { Paw } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50">
      <div className="text-center max-w-2xl px-4">
        <Paw className="h-16 w-16 text-yellow-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4 text-yellow-800">Welcome to Paw-some Dogs</h1>
        <p className="text-xl text-yellow-700 mb-8">Discover the joy and companionship that dogs bring to our lives!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-800">Loyal Companions</h2>
            <p className="text-gray-600">Dogs are known for their unwavering loyalty and affection towards their human families.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-yellow-800">Playful Friends</h2>
            <p className="text-gray-600">With their energetic nature, dogs make excellent playmates for people of all ages.</p>
          </div>
        </div>
        <button className="mt-8 bg-yellow-600 text-white font-bold py-2 px-4 rounded hover:bg-yellow-700 transition duration-300">
          Learn More About Dogs
        </button>
      </div>
    </div>
  );
};

export default Index;
