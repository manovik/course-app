import { AuthorService } from './authorService';
import { CourseService } from './courseService';
import { UserService } from './userService';
import { baseUrl } from 'appConstants';

export const courseService = new CourseService(baseUrl);
export const authorService = new AuthorService(baseUrl);
export const userService = new UserService(baseUrl);
