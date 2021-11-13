import './record.scss';
import { PropTypes } from 'prop-types';

export const Record = ({ caption, text, title, children }) => (
  <>
    <p className='d-flex'>
      <span className='fw-bold'>{caption}:</span>&nbsp;
      <span
        className={title ? 'tip' : ''}
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
        title={title}
      >
        {text}
      </span>
    </p>
    {children?.map((ch, i) => (
      <p key={ch.replace(/\s/g, i)}>{ch}</p>
    ))}
  </>
);

Record.propTypes = {
  caption: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node]),
};

Record.defaultProps = {
  title: '',
  text: '',
  children: [],
};
