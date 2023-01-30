import PropTypes from 'prop-types';

const Link = ({text, url}) => {
  return <a href={url}>{text}</a>
}

Link.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string
}

export default Link;