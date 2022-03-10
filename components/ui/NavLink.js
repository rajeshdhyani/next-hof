import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../../styles/NavLink.module.css';
// import classNames from 'classnames';

export { NavLink };

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

function NavLink({ href, exact, children, ...props }) {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        // props.className += ' active';
        props.className += `${styles.navLink} ${styles.active}`;
    }

    return (
        <Link href={href}>
            <a className={styles.navLink} {...props}>
                {children}
            </a>
        </Link>
    );
}