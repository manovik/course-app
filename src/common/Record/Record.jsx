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
      <span style={{ display: 'block' }} key={ch.replace(/\s/g, i)}>
        {ch}
      </span>
    ))}
  </>
);

Record.propTypes = {
  caption: PropTypes.string.isRequired,
  text: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Record.defaultProps = {
  caption: 'Caption',
};
