"use client";
import { useState, useEffect, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { books } from '@/constants/mockData';
import Link from 'next/link';

interface Book {
    id: number;
    author: string;
    title: string;
    image: string;
    description: string;
    content: string;
}

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState<string>('');  // Kullanıcının girdiği arama terimi
    const [filteredData, setFilteredData] = useState<Book[]>([]);  // Filtrelenmiş veri
    const [showResults, setShowResults] = useState<boolean>(false);  // Sonuçlar gösterilsin mi?

    useEffect(() => {
        if (searchTerm === '') {
            setShowResults(false);  // Arama boşsa sonuçları gizle
            setFilteredData([]);
        } else {
            const results = books.filter((item) =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.author.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(results);
            setShowResults(true);  // Sonuçlar varsa göster
        }
    }, [searchTerm]);

    return (
        <div style={containerStyle}>
            {/* Arama çubuğu */}
            <motion.input
                type='text'
                placeholder='Tell me what you want'
                style={searchInputStyle}
                initial={{ opacity: 0, x: -1000 }}
                animate={{ opacity: 1, x: 0 }}
                value={searchTerm} // Arama terimini kontrol et
                onChange={(e) => setSearchTerm(e.target.value)} // Arama terimi her değiştiğinde state'i güncelle
            />

            {/* Arama sonuçları */}
            {showResults && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    style={dropdownStyle}
                >
                    {filteredData.length > 0 ? (
                        <ul>
                            {filteredData.map((item) => (
                                <li key={item.id} style={listItemStyle}>
                                    <Link href={`/book/${item.id}`}>
                                        {/* Artık a etiketi yok */}
                                        <strong>{item.title}</strong> by {item.author}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No results found</p>
                    )}
                </motion.div>
            )}
        </div>
    );
}

// Stil objeleri
const containerStyle: CSSProperties = {
    position: 'relative',
    width: '300px',
    margin: '0 auto',
};

const searchInputStyle: CSSProperties = {
    width: '100%',
    fontSize: '16px',
    padding : '0.7rem 1rem',
    marginLeft: '3.6rem',
    borderRadius :'70px',
    backgroundColor : 'rgb(248,234,221)',
    border :'2px solid #000',
    minWidth : '320px'
};

const dropdownStyle: CSSProperties = {
    position: 'absolute',
    top: '45px',  // Arama çubuğunun hemen altında
    width: '100%',
    maxHeight: '200px',
    overflowY: 'auto',
    backgroundColor: '#fff',
    color: '#000',  // Metin rengini siyah yapıyoruz
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    padding: '10px',
    zIndex: 1000,
};

const listItemStyle: CSSProperties = {
    padding: '10px 0',
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
    color: '#000',  // Liste öğelerinin metin rengini siyah yapıyoruz
};

