import React from 'react';
import Course from './Course';
import { CSSCourses } from '../../data/courses';

const CSS = (props) => {
  let courses = CSSCourses.map((course) => {
    return <Course title={course.title}
                   desc={course.description}
                   img={course.img_src}
                   key={course.id} />
  }); 
  return (
    <div>
      <ul>
        {courses}    
      </ul>
    </div>
  );
}

export default CSS;