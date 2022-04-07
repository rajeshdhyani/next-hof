import React from "react";
import classNames from "classnames";
import { AiFillHeart } from "react-icons/ai";
import { IoShareSocial } from "react-icons/io5";
import styles from "../styles/profilecard.module.css";
import Image from "next/image";
import Button from "./ui/button";
import Link from "next/link";

export default function ProfileCard(props) {
  const { title, image, likes, citation, link, as } = props;
  return (
    <div className={classNames([styles.wrapper, styles.wrapperAnime]) } onClick={props.onClick} >
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
        <Link href={link} as={as}>
        <a>
          <Image
            src={image}
            className={styles.image}
            width="215"
            height="224"
            objectFit={'cover'}
            alt={`Profile picture of ${title}`}
          />
          </a></Link>
        </div>
        <div className={styles.badgeWrapper}>
          <div className={classNames([styles.dangerBadge, styles.badgeAnime])}>
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
            ></span>
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
      <Link href={link} as={as}>
        <a>
        <h4 className={styles.text}>{`${title}`}</h4>
        <p className="line-clamp-2 truncate text-xs text-clip overflow-hidden ... h-22 mt-2 leading-none">
          {citation}
        </p>
        </a></Link>
      </div>
      
    </div>
  );
}
