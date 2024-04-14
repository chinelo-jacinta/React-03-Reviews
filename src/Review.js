import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  const { id, name, job, text, image } = people[index];
  const checkNumber = (num) => {
    if (num === people.length) {
      return 0;
    } else if (num < 0) {
      return people.length - 1;
    } else {
      return num;
    }
  };
  // suprise me btn
  const randomBtn = () => {
    const random = Math.floor(Math.random() * people.length);
    if (random === index) {
      return checkNumber(random + 1);
    }
    return checkNumber(random);
  };

  return (
    <>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaChevronRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
          <button
            className='prev-btn'
            onClick={() => setIndex(checkNumber(index - 1))}
          >
            <FaChevronLeft />
          </button>
          <button
            className='next-btn'
            onClick={() => setIndex(checkNumber(index + 1))}
          >
            <FaChevronRight />
          </button>
        </div>
        <button className='random-btn' onClick={() => setIndex(randomBtn())}>
          surprise me
        </button>
      </article>
    </>
  );
};

export default Review;
