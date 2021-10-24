import './record.scss';

const Record = ({ caption, text, title }) => (
  <p>
    <span className='fw-bold'>{caption}:</span>{' '}
    <span
      className={title ? 'tip' : ''}
      style={{
        display: 'block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
      title={title}
    >
      {text}
    </span>
  </p>
);

export default Record;
