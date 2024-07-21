import React from 'react';

const Maintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-bold mb-4">We'll be back soon!</h1>
      <p className="text-xl mb-4">
        Sorry for the inconvenience but we're performing some maintenance at the moment. 
        We'll be back online shortly!
      </p>
      <p className="text-lg">
        &mdash; The Team
      </p>
    </div>
  );
};

export default Maintenance;
