import ProTypes from 'prop-types';

function Header ({title, description}) {
    return (
        <header>
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    );
}

Header.propTypes = {
    title: ProTypes.string.isRequired,
    description: ProTypes.string.isRequired,
};

export default Header;
