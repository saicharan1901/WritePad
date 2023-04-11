import React, { useState } from 'react';
import Header from '../components/header';

const NoteAdder = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [notes, setNotes] = useState([]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSave = () => {
        const newNote = { title, content };
        setNotes([...notes, newNote]);
        setTitle('');
        setContent('');
    };

    const handleDelete = (index) => {
        setNotes(notes.filter((_, i) => i !== index));
    };

    return (
        <div className="bg-[#202124] text-white min-h-screen font-mono ">
            <Header />
            <div className="container mx-auto py-2 max-w-7xl">
                <div className="bg-[#202124] rounded-lg shadow-lg px-8 py-6 mb-8 border-gray-400 border ml-72 max-w-2xl hover:border-yellow-700">
                    <div className="">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full px-3 py-2 placeholder-gray-400  rounded-lg focus:outline-none bg-[#202124] text-white"
                            placeholder="Title.."
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div>
                        <textarea
                            id="content"
                            name="content"
                            rows="5"
                            className="w-full px-3 py-2 placeholder-gray-400 rounded-lg focus:outline-none bg-[#202124] text-white"
                            placeholder="Content"
                            value={content}
                            onChange={handleContentChange}
                            style={{ resize: "none" }} // add this line
                        ></textarea>

                    </div>
                    <button
                        className="flex items-center justify-center px-4 py-2 mt-4 text-white bg-[#202124] rounded-full hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        onClick={handleSave}
                    >
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.328 10.172a.25.25 0 010 .354l-3.823 3.823a.25.25 0 01-.354 0l-3.823-3.823a.25.25 0 01.354-.354L10 12.293l3.328-3.328a.25.25 0 01.354 0z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zM1.25 10a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-wrap justify-center ">
                    {notes.map((note, index) => (
                        <div key={index} className="bg-[#202124] rounded-lg shadow-lg px-8 py-6 mb-8 mr-8 max-w-md group relative break-words hover:border-yellow-700 border" >
                            <h3 className="font-mono text-white">{note.title}</h3>
                            <p className="text-white">{note.content}</p>
                            <button
                                className="absolute top-0 right-0 p-1 text-white hover:text-yellow-600 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                                onClick={() => handleDelete(index)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default NoteAdder;
