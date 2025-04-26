import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  fileUrl: string;
}

const BookCard: React.FC<BookCardProps> = ({ id, title, author, coverUrl, fileUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${id}`);
  };
  
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-[#1c1c1c] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transform hover:scale-105 transition-all w-64 h-[400px] flex flex-col"
      >      
      <img
        src={`http://localhost:3000${coverUrl}`}
        alt={title}
        className="h-64 w-full object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg font-bold text-white truncate">{title}</h2>
          <p className="text-gray-400 text-sm mt-1 truncate">{author}</p>
        </div>
        <a
          href={`http://localhost:3000${fileUrl}`}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-[#333333] hover:bg-[#555555] text-white text-center py-2 rounded-md transition-colors duration-300"
        >
          Descargar
        </a>
      </div>
    </div>
  );
};

export default BookCard;
