"use client"

import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { books } from '@/constants/mockData'
import styles from './book.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Editor, useDomValue } from 'reactjs-editor'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function BookPage() {
    const { id } = useParams()

    const { dom, setDom } = useDomValue();

    const selectedBook = books.filter((book, i) => {
        return id === String(book.id)
    })

    const notify = () => toast("Your changes has been saved!!")
    const handleSave = () => {
        const updateDomValue = {
            key: dom?.key,
            props: dom?.props,
            ref: dom?.ref,
            type: dom?.type
        }
        localStorage.setItem(`dom${selectedBook[0].id}`, JSON.stringify(updateDomValue))
        notify()
    }

    useEffect(() => {
        const savedDom = localStorage.getItem(`dom${selectedBook[0].id}`)
        if (savedDom) {
            setDom(JSON.parse(savedDom))
        }
    }, [])

    if (!selectedBook.length) return <p>Book not Found</p>
    return (
        <motion.div transition={{ type: 'spring', damping: 40, mass: 0.75 }}
            initial={{ opacity: 0, x: 1000 }} animate={{ opacity: 1, x: 0 }}>
            <motion.section transition={{ type: 'spring', damping: 44, mass: 0.75 }}
                initial={{ opacity: 0, y: -1000 }} animate={{ opacity: 1, y: 0 }} className={styles.appBar}>
                <div className={styles.leftIcons} >
                    <a href="/">
                    <i style={{ fontSize: '20px', cursor: 'pointer'}} className="fas fa-chevron-left"></i>
                    </a>
                    
                </div>
                <div className={styles.title}>  <h2 className={styles.titleStyles}> {selectedBook[0].title}</h2></div>
                <div className={styles.icons}>
                    <button className={styles.saveButton} onClick={handleSave}  >Save</button>
                    <i style={iconStyle} className="fas fa-cog"></i>
                    <i style={iconStyle} className="fas fa-share"></i>
                    <i style={iconStyle} className="fas fa-search"></i>
                </div>
            </motion.section>

            <Editor
                /** htmlContent accepts only one element. Just wrap everything on one element **/
                htmlContent={`
        <main className="bookContainer">
    <aside>
    <h1 className="center">${selectedBook[0].title} </h1>
    <span className="center small"> By ${selectedBook[0].author} </span>
    ${selectedBook[0].content}
    </aside>
        </main>
        `
                }
            />
            <ToastContainer />
        </motion.div>
    )
}


const iconStyle = { marginRight: '20px', fontSize: '20px' }
