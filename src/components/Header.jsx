import PropTypes from "prop-types";

export default function Header({ title, description }) {
    return (
        <header style={{ marginBottom: "2rem" }}>
            <h1>{title}</h1>
            <p className="description">{description}</p>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};
