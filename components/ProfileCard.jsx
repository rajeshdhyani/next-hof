import React from "react";
import classNames from "classnames";
import { AiFillHeart } from "react-icons/ai";
import { IoShareSocial } from "react-icons/io5";
import styles from '../styles/profilecard.module.css'



export default function ProfileCard({title,image,likes,citation})
{


  return (
    <div className={classNames([styles.wrapper, styles.wrapperAnime])}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          <img src={image} className={styles.image} alt="" />
        </div>
        <div className={styles.badgeWrapper}>
          <div
            className={classNames([styles.dangerBadge, styles.badgeAnime])}
          >
            <AiFillHeart />
            {likes}
          </div>
          

          <div
            className={classNames([
              styles.primaryBadge,
              styles.badgeAnime,
              "group",

            ])}
          > 
            <IoShareSocial />
            <span
              className={classNames([styles.counter, "group-hover:text-white"])}
            >
               
            </span>
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <h4 className={styles.text}>{`${title}`}</h4>
        
          <p className="line-clamp-2 truncate text-xs text-clip overflow-hidden ... text-gray-500 h-22 mt-2 leading-none"> {citation}</p> 
        
      </div>
    </div>
  );
};

