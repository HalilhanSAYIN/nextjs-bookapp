import React from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { books } from '@/constants/mockData'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Editor, useDomValue } from 'reactjs-editor'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './profile.module.css'



export default function ProfilePage() {
  return (
    <div>
    <div className={styles.appBar}>
        <div className={styles.leftIcons} >
                    <a href="/">
                    <i style={{ fontSize: '20px', cursor: 'pointer'}} className="fas fa-chevron-left"></i>
                    </a>
                </div>
                <h1>My Profile</h1>
     <div className={styles.icons}>
                    <i style={iconStyle} className="fas fa-search"></i>
                </div>
    </div>
    <div className={styles.container}>
      {/* Sol taraf: Form alanları */}
      <div className={styles.formSection}>
        <input type="text" placeholder="İsim" className={styles.inputBox} />
        <input type="text" placeholder="Soyisim" className={styles.inputBox} />
        <input type="text" placeholder="Rumuz" className={styles.inputBox} />
        <input type="text" placeholder="Hobiler" className={styles.inputBox} />
        <input type="text" placeholder="Favori Kategoriler" className={styles.inputBox} />
        <input type="text" placeholder="Favori Yazarlar" className={styles.inputBox} />
        <button className={styles.updateButton}>Profil Bilgilerini Güncelle</button>
      </div>

      {/* Sağ taraf: Profil resmi ve buton */}
      <div className={styles.profileSection}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/tr/5/53/Rocky_balboa.jpeg" 
          alt="Profil Resmi" 
          className={styles.profileImage} 
        />
        <button className={styles.updateButton}>Profil Fotoğrafını Güncelle</button>
      </div>
    </div>
    </div>
  )
}


const iconStyle = { marginRight: '20px', fontSize: '20px' }
