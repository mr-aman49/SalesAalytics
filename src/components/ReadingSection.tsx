import React from 'react';
import CircularProgressChart from './CircularProgressChart';

const ReadingSection: React.FC = () => {
  return (
    <section className="p-2 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-4">Reading</h2>

      <div className="mb-4 p-4 bg-white rounded shadow"> {/* Added shadow and padding */}
        <p className="mb-2">Overall Reading</p>
        <div className="bg-gray-200 h-4 rounded">
          <div className="bg-green-500 h-4 rounded" style={{ width: '68%' }}>
          </div>
          
        </div>
        
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="mb-2">Speed</p>
          <CircularProgressChart percentage={68} label="Good" color="#4caf50" />
        </div>
        <div>
          <p className="mb-2">Accuracy</p>
          <CircularProgressChart percentage={37} label="Optimal" color="#4caf50" />
        </div>
      </div>

      

      <div className="mb-4">
        <p className="text-lg font-bold mb-2">Pauses</p>
        <div className="relative h-4 rounded overflow-hidden bg-gray-200"> {/* Added 'relative' and 'overflow-hidden' */}
          {/* Four sections for the different levels */}
          <div className="absolute h-full bg-green-500 " style={{ width: '25%' }}></div> {/* Optimal */}
          <div className="absolute h-full bg-blue-500" style={{ left: '25%', width: '25%'  }}></div> {/* Good */}
          <div className="absolute h-full bg-yellow-500" style={{ left: '50%', width: '25%' }}></div> {/* Fair */}
          <div className="absolute h-full bg-red-500" style={{ left: '75%', width: '25%' }}></div> {/* Needs Attention */}
        </div>
        <div className="flex justify-between text-xs mt-1 text-lg font-bold">
          <span>Optimal</span>
          <span>Good</span>
          <span>Fair</span>
          <span>Needs Attention</span>
        </div>
      </div>
    </section>
  );
};

export default ReadingSection;
