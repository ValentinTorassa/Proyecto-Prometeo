import React, { useState, useEffect } from 'react';

const UploadBookPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [bookFile, setBookFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('http://localhost:3000/api/categories');
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!bookFile || !coverFile) {
      alert('Por favor seleccioná tanto el libro como la portada.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description);
    formData.append('categoryId', categoryId);
    formData.append('book', bookFile);
    formData.append('cover', coverFile);

    try {
      const response = await fetch('http://localhost:3000/api/books', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('📚 ¡Libro subido con éxito!');
        // Resetear el formulario
        setTitle('');
        setAuthor('');
        setDescription('');
        setCategoryId('');
        setBookFile(null);
        setCoverFile(null);
      } else {
        alert('⚠️ Error al subir el libro.');
      }
    } catch (error) {
      console.error(error);
      alert('⚠️ Error al subir el libro.');
    }
  };

  return (
    <>
      <main className="ml-20 pt-24 min-h-screen flex flex-col items-center p-10">
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-12">
        Subir un nuevo libro
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-[#1c1c1c] rounded-2xl shadow-lg p-10 w-full max-w-2xl space-y-8 backdrop-blur-md"
      >
        <div>
          <label className="block text-gray-300 font-semibold mb-2">Título</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full p-3 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 font-semibold mb-2">Autor</label>
          <input
            type="text"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            className="w-full p-3 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 font-semibold mb-2">Descripción</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full p-3 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows={3}
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-300 font-semibold mb-2">Categoría</label>
          <select
            value={categoryId}
            onChange={e => setCategoryId(e.target.value)}
            className="w-full p-3 bg-black text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Seleccionar una categoría</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-300 font-semibold mb-2">Archivo del libro</label>
          <input
            type="file"
            accept=".pdf,.epub"
            onChange={e => setBookFile(e.target.files ? e.target.files[0] : null)}
            className="w-full p-3 bg-black text-white border border-gray-700 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 font-semibold mb-2">Imagen de portada</label>
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={e => setCoverFile(e.target.files ? e.target.files[0] : null)}
            className="w-full p-3 bg-black text-white border border-gray-700 rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:opacity-90 text-white font-bold py-3 rounded-xl transition-all duration-300"
        >
          Subir Libro
        </button>
      </form>
    </main>
    </>
  );
};

export default UploadBookPage;
