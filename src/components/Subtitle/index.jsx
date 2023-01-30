import PropTypes from 'prop-types';

const Subtitle = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

Subtitle.propTypes = {
  text: PropTypes.string
}

export default Subtitle;
