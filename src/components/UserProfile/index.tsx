import clsx from "clsx";
import React from "react";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  displayPicture: string;
  className?: string;
};

const UserProfile: React.FC<React.PropsWithChildren<Props>> = ({
  title,
  displayPicture,
  className,
}) => {
  return (
    <div className={clsx(styles.userProfile, className)}>
      <h6 className={styles.username}>{title}</h6>
      <div className={styles.imageContainer}>
        <img src={displayPicture} alt={title} />
      </div>
    </div>
  );
};

export default UserProfile;
