import { CoursesAPI } from './coursesApi';
import { baseUrl } from 'appConstants';

export const coursesAPI = new CoursesAPI(baseUrl);
