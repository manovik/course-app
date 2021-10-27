import './record.scss';

const Record = ({ caption, text, title }) => (
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
);

export default Record;
