import React from 'react'
import styles from './b3.module.css'

export default function B3() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Form Sign up</h1>

            <form className={styles.form}>
                <label className={styles.label}>
                    Name
                    <input type="text" className={styles.input} placeholder="Your name" />
                </label>

                <label className={styles.label}>
                    Email
                    <input type="email" className={styles.input} placeholder="you@company.com" />
                </label>

                <label className={styles.label}>
                    Phone number
                    <div className={styles.phoneInput}>
                        <select className={styles.select}>
                            <option value="US">US</option>
                            <option value="VN">VN</option>
                        </select>
                        <input type="tel" className={`${styles.input} ${styles.phone}`} placeholder="+84 (123) 456-789" />
                    </div>
                </label>

                <label className={styles.label}>
                    Address
                    <textarea className={`${styles.input} ${styles.textarea}`} placeholder="Your address"></textarea>
                </label>

                <label className={styles.label}>
                    Skills
                    <div className={styles.skills}>
                        <label><input type="checkbox" /> HTML</label>
                        <label><input type="checkbox" /> CSS</label>
                        <label><input type="checkbox" /> UX design</label>
                        <label><input type="checkbox" /> JavaScript</label>
                        <label><input type="checkbox" /> ReactJS</label>
                        <label><input type="checkbox" /> Java</label>
                    </div>
                </label>

                <button type="submit" className={styles.button}>Sign up</button>
            </form>
        </div>
    )
}
