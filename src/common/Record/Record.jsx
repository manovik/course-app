import './record.scss';

const Record = ({ caption, text, title, children }) => (
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
      {children?.map((ch, i) => (
        <p key={ch.replace(/\s/g, i)}>{ch}</p>
      ))}
    </span>
  </p>
);

export default Record;
