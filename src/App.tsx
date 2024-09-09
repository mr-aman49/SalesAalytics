import React from 'react';
import Header from './components/Header';
import ReadingSection from './components/ReadingSection';
import MockToTalkVideo from './components/MockToTalkVideo';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-10 space-y-10">
        <ReadingSection />
        <MockToTalkVideo />
      </main>
    </div>
  );
};

export default App;
