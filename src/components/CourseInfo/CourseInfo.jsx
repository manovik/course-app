import { Record } from 'common/Record';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';

export const CourseInfo = () => {
  const [courseInfo, setCourseInfo] = useState({
    title: 'Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quia vitae quasi modi non rem corporis accusantium labore quis. Quos facilis doloremque libero deleniti corrupti! Consequatur voluptates expedita aspernatur enim consequuntur unde eaque quaerat eos, illum necessitatibus quia nemo atque, similique neque itaque! A quisquam reprehenderit voluptatem quo dolor ea numquam rerum, hic facilis est. Quasi maiores, iste totam placeat et, architecto voluptate velit illo sit doloremque voluptates tempora delectus consequatur tenetur. Facere cum eveniet dolores, aperiam dolor dolorum dolorem fugiat quaerat. Rem consectetur harum inventore, distinctio eaque blanditiis nobis alias sit, corporis qui, incidunt eos quaerat suscipit. Dolorum reprehenderit, aliquam facere recusandae amet officia saepe asperiores tenetur perferendis ipsum sed tempore in. Expedita, aspernatur eaque architecto modi fuga dolore laboriosam optio, autem harum temporibus perferendis praesentium minima. Nostrum voluptatum eos sed minus ducimus. Architecto ut nam consequuntur veritatis facere fugiat aut quae voluptatibus placeat cupiditate consequatur obcaecati tempore reiciendis, nobis laboriosam soluta molestiae voluptate nemo ratione magnam modi tenetur accusantium! Sunt asperiores quasi possimus quibusdam, earum laborum perferendis ad nostrum harum odio. Laudantium hic, quidem velit nulla, maxime modi voluptas adipisci aspernatur molestias facere laborum asperiores vitae at perferendis omnis quaerat illum. Quasi voluptate temporibus expedita vero aliquam illo earum, doloribus nesciunt eum reprehenderit libero possimus deserunt delectus commodi placeat impedit! Commodi quod asperiores, adipisci repellat perspiciatis expedita eos quisquam temporibus amet quibusdam animi ex enim at quasi consectetur, accusantium eaque officia provident! Error ipsa, veritatis doloribus odit fugiat, ut eaque aliquam eius suscipit fuga magni molestias et cum.',
    duration: '03:30 hours',
    created: '01.01.2021',
    authors: [
      'Vasiliy Dobkin',
      'Nicolas Kim',
      'Anna Sidorenko',
      'Valentina Larina',
    ],
  });
  const { courseId } = useParams();

  // const controller = useMemo(() => new AbortController(), []);
  // const fetchInfo = useCallback(async () => {
  //   return fetch('url' + courseId, {
  //     signal: controller.signal,
  //   });
  // }, [courseId, controller]);

  // useEffect(() => {
  //   fetchInfo().then((d) => {
  //     setCourseInfo(d);
  //   });
  //   return () => {
  //     controller.abort();
  //   };
  // }, [controller, fetchInfo]);
  return (
    <div className='container'>
      <article className='fs-4'>
        <Link to='/courses' className='btn fs-3'>
          &#8592; Back to courses
        </Link>
        <h2 className='text-center mb-5 fs-1'>{courseInfo.title}</h2>
        <div className='d-flex justify-content-between'>
          <p className='col-8 px-3'>{courseInfo.description}</p>
          <div className='col-3'>
            <Record caption={'ID'} text={courseId} />
            <Record caption={'Duration'} text={courseInfo.duration} />
            <Record caption={'Created'} text={courseInfo.created} />
            <Record caption={'Authors'}>{courseInfo.authors}</Record>
          </div>
        </div>
      </article>
    </div>
  );
};
