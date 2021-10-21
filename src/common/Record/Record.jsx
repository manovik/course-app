import './record.scss';

const Record = ({ caption, text, title }) => (
  <p>
    <span className='fw-bold'>{caption}:</span>{' '}
    <span className={title ? 'tip' : ''} title={title}>
      {text}
    </span>
  </p>
);

export default Record;
