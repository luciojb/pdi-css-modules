import React from 'react';
import styles from './Widget3.module.css';
import cx from 'classnames';


class Widget3 extends React.Component {
    render() {
        return (
            <div>
                <button
                    className={styles.button}
                >
                    Click Me!
                </button>
                <br/>
                <button
                    className={cx(
                        styles.button,
                        styles.disabled
                    )}
                >
                    Do Not Click Me
                </button>
            </div>
        );
    }
}

export default Widget3;