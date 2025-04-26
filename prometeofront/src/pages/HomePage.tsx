import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import logo from '../assets/logo.png';
import Footer from '../components/Footer'; // No te olvides de importar


interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  fileUrl: string;
}

const HomePage: React.FC = () => {
  const [books, setBooks] = React.useState<Book[]>([]);

  React.useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('http://localhost:3000/api/books');
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <>
    <main className="ml-20 pt-24 p-6">
      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center mb-7">
      <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
        Proyecto Prometeo
      </h1>
        <img
          src={logo}
          alt="Logo Prometeo"
          className="w-16 h-16 object-contain bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        />
      </div>


      <p className="text-gray-400 text-lg mb-8">
        Descubrí, compartí y disfrutá libros libres
      </p>
      <div className="flex gap-6">
        <Link
          to="/"
          className="bg-[#1c1c1c] hover:bg-[#333] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
        >
          Explorar Libros
        </Link>
        <Link
          to="/upload"
          className="border border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
        >
          Subir un Libro
        </Link>
      </div>
    </section>


      {/* GRID DE LIBROS */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-white">Biblioteca</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map(book => (
            <BookCard
              id={book.id}
              key={book.id}
              title={book.title}
              author={book.author}
              coverUrl={book.coverImage}
              fileUrl={book.fileUrl}
            />
          ))}
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default HomePage;
