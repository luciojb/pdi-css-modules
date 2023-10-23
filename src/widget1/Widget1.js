import React from 'react';
import styles from './Widget1.module.css';

class Widget1 extends React.Component {
    render() {
        return (
            <button className={styles.button}>
                Click Me
            </button>
        );
    }
}

export default Widget1;