import './record.scss';

const Record = ({ caption, text, title, children }) => (
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

export default Record;
