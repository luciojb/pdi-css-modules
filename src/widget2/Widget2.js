import React from 'react';
import styles from './Widget2.module.css';

class Widget2 extends React.Component {
    render() {
        return (
            <div>
                <h2 className={styles.title}>
                    Email Signup
                </h2>
                <input
                    className={styles.email}
                    placeholder="Email Please"
                />
                <br/>
                <button
                    className={styles.submitButton}
                >
                    Submit
                </button>
            </div>
        );
    }
}

export default Widget2;