import React from "react";
import classNames from "classnames";
import { AiFillHeart } from "react-icons/ai";
import { IoShareSocial } from "react-icons/io5";
import styles from "../styles/profilecard.module.css";
import Modal from "./Modal";
import ReactPlayer from "react-player";
import showIf from "../helpers/showIf";

const ProfileCard = ({ title, image, likes, citation }) => {
  const [isProfileModalOpen, setIsProfileModalOpen] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setIsProfileModalOpen(true);
  }, []);

  const getModalHeader = React.useCallback(() => {
    return <div>{title}</div>;
  }, []);

  React.useEffect(() => {
    return () => {
      if (isProfileModalOpen) setIsProfileModalOpen(false);
    };
  }, []);

  const handleModalOverlayClick = React.useCallback(() => {
    if (isProfileModalOpen) {
      setIsProfileModalOpen(false);
    }
  }, [isProfileModalOpen]);

  return (
    <div
      className={classNames([styles.wrapper, styles.wrapperAnime])}
      onClick={handleClick}
    >
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          <img src={image} className={styles.image} alt="" />
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
        <h4 className={styles.text}>{`${title}`}</h4>

        <p className="line-clamp-2 truncate text-xs text-clip overflow-hidden ... text-gray-500 h-22 mt-2 leading-none">
          {" "}
          {citation}
        </p>
      </div>
      {showIf(isProfileModalOpen)(
        <Modal
          className={styles.profileCardModal}
          isOpen={isProfileModalOpen}
          header={getModalHeader()}
          onClickOutside={handleModalOverlayClick}
        >
          <div className={styles.profileCardModalRoot}>
            <img src={image} className={styles.profileCardModalImage} />
            <p>{citation}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default React.memo(ProfileCard);
