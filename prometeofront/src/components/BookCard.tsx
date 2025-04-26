import React from 'react';

interface BookCardProps {
  title: string;
  author: string;
  coverUrl: string;
  fileUrl: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, coverUrl, fileUrl }) => {
  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden w-56 hover:scale-105 transform transition-all duration-300 flex flex-col">
      <img
        src={`http://localhost:3000${coverUrl}`}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between text-center">
        <div>
          <h2 className="text-lg font-bold text-gray-800 truncate">{title}</h2>
          <p className="text-gray-500 text-sm mt-1">{author}</p>
        </div>
        <a
          href={`http://localhost:3000${fileUrl}`}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-3 rounded-lg transition-colors duration-300"
        >
          Descargar
        </a>
      </div>
    </div>
  );
};

export default BookCard;
