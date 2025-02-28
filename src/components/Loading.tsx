import React from 'react';

interface LoadingProps {
  loading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-transparent border-t-blue-500 border-b-blue-500 rounded-full animate-spin"></div>
        <div className="absolute w-12 h-12 bg-blue-500 rounded-full opacity-30 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
