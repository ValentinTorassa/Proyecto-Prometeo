import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'

interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  fileUrl: string;
}

const HomePage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('http://localhost:3000/api/books');
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <header className="bg-white bg-opacity-80 backdrop-blur-md shadow p-6 rounded-b-3xl">
        <h1 className="text-4xl font-extrabold text-center text-blue-700">📚 Biblioteca Prometeo 📚</h1>
        <p className="text-center text-gray-600 mt-2 text-lg">Tu espacio libre para descubrir y compartir libros.</p>
      </header>

      <main className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {books.map(book => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              coverUrl={book.coverImage}
              fileUrl={book.fileUrl}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default HomePage;
