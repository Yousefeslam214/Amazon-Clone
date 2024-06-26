import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/HomeData';
import Navbar from '../shared/navbar/Navbar';
import { Box, Typography } from '@mui/material';
import './VideoPage.css';

const VideoPage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const courseIdNum = parseInt(courseId, 10); // Convert courseId to number
      const foundCourse = data.find(item => item.id === courseIdNum);
      if (foundCourse) {
        setCourse(foundCourse);
      } else {
        console.log("Data not found");
      }
    };

    fetchData();
  }, [courseId]);

  return (
    <Box>
      <Navbar />
      <Box m='20px' className="video-container">
        {course ? (
          <div className='video'>
            <div className="video-wrapper">
              <iframe
                className='youtube'
                width="80%"
                height="515"
                src={course.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <Typography variant="h5" className="video-title textLarge">
              {course.title}
            </Typography>
            <Typography variant="body1" className="video-channel textSmall">
              {course.channel}
            </Typography>
          </div>
        ) : (
          <Typography variant="body1">Not Found</Typography>
        )}
      </Box>
    </Box>
  );
};

export default VideoPage;
