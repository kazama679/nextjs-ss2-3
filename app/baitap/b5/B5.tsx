import React from 'react'
import styles from './b5.module.scss';

export default function B5() {
    return (
        <div className={styles.popup}>
            <div className={styles.iconContainer}>
                <span className={styles.icon}>⚠️</span>
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>Delete blog post</h2>
                <p className={styles.message}>
                    Are you sure you want to delete this post? This action cannot be undone.
                </p>
                <div className={styles.actions}>
                    <button className={styles.cancelButton}>Cancel</button>
                    <button className={styles.deleteButton}>Delete</button>
                </div>
            </div>
        </div>
    )
}
