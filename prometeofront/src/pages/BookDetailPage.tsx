import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  fileUrl: string;
}

const BookDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`http://localhost:3000/api/books/${id}`);
      const data = await response.json();
      setBook(data);
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return (
      <main className="ml-20 pt-24 p-10 min-h-screen flex justify-center items-center">
        <p className="text-gray-400">Cargando libro...</p>
      </main>
    );
  }

  return (
    <main className="ml-20 pt-24 p-10 min-h-screen flex flex-col items-center">
      <div className="bg-[#1c1c1c] rounded-2xl shadow-lg p-10 max-w-4xl w-full backdrop-blur-md flex flex-col items-center gap-8">
        <img
          src={`http://localhost:3000${book.coverImage}`}
          alt={book.title}
          className="w-60 h-80 object-cover rounded-lg"
        />
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-center">
          {book.title}
        </h1>
        <h2 className="text-lg text-gray-400">{book.author}</h2>
        <p className="text-gray-300 text-center max-w-2xl">{book.description}</p>

        <a
          href={`http://localhost:3000${book.fileUrl}`}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:opacity-90 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
        >
          Descargar Libro 📚
        </a>
      </div>
    </main>
  );
};

export default BookDetailPage;
