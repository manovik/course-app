import { render } from '@testing-library/react';
import { Wrapper, state } from 'testUtils';
import React from 'react';
import { testIds } from 'testUtils';
import { CourseCard } from '../CourseCard';
import { convertDate, convertMinutesToTime } from 'helpers';

const store = {
  getState: () => state,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};

describe('Testing CourseCard', () => {
  let elem;
  let getByTestId;

  beforeEach(() => {
    elem = render(
      <Wrapper store={store}>
        <CourseCard course={state.courses[0]}></CourseCard>
      </Wrapper>
    );
    getByTestId = elem.getByTestId;
  });

  afterEach(() => {
    elem = null;
  });

  describe('to contain course info', () => {
    it('should have title', () => {
      const el = getByTestId(testIds.COURSE_CARD.TITLE);

      expect(el.textContent).toBe(state.courses[0].title);
    });
    it('should have description', () => {
      const el = getByTestId(testIds.COURSE_CARD.DESCRIPTION);

      expect(el.textContent).toBe(state.courses[0].description);
    });

    it('should have duration in correct format', () => {
      const el = getByTestId(testIds.COURSE_CARD.DURATION);

      expect(el.textContent).toBe(
        convertMinutesToTime(state.courses[0].duration)
      );
    });

    it('should have creation date', () => {
      const el = getByTestId(testIds.COURSE_CARD.CREATION_DATE);

      expect(el.textContent).toBe(convertDate(state.courses[0].creationDate));
    });

    it('should have creation date in the correct format', () => {
      const el = getByTestId(testIds.COURSE_CARD.CREATION_DATE);

      expect(el.textContent).toMatch(/\d{2}\.\d{2}\.\d{4}/);
    });

    it('should have authors separated with comma', () => {
      const el = getByTestId(testIds.COURSE_CARD.AUTHORS);

      expect(el.textContent).toEqual('Vasiliy Dobkin, Nicolas Kim');
    });
  });
});
