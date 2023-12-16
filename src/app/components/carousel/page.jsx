"use client"
import Image from 'next/image'
import React, { useRef } from 'react';
import styles from './styles.module.css'

const CarouselPage = () => {
   

      const carouselRef = useRef(null);
    
      const prevSlide = () => {
        carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
      };
    
      const nextSlide = () => {
        carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
      };
    
      return (
        <div className="carousel-container">
        carousel
        </div>
      );
    };
    
    
    

export default CarouselPage
