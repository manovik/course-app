import { AuthorService } from './authorService';
import { CourseService } from './courseService';
import { UserService } from './userService';
export { ENDPOINTS } from './apiEndpoints';

const baseUrl = 'http://localhost:3000';

export const courseService = new CourseService(baseUrl);
export const authorService = new AuthorService(baseUrl);
export const userService = new UserService(baseUrl);
