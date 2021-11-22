import './record.scss';
import { PropTypes } from 'prop-types';
import { testIds } from 'testUtils';

export const Record = ({
  caption,
  text,
  title,
  dataTestId,
  mulipleTestId,
  children,
}) => (
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
        data-testid={dataTestId}
      >
        {text}
      </span>
    </p>
    {children?.map((ch, i) => (
      <p key={ch.replace(/\s/g, i)} data-testid={mulipleTestId}>
        {ch}
      </p>
    ))}
  </>
);

Record.propTypes = {
  dataTestId: PropTypes.string,
  caption: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node]),
};

Record.defaultProps = {
  dataTestId: testIds.RECORD_TEST_ID,
  title: '',
  text: '',
  children: [],
};
