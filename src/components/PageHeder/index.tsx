import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  extra?: ReactNode[];
};

const PageHeader: React.FC<Props> = ({ title, extra }) => {
  return (
    <div className={styles.pageHeader}>
      <h4 className={styles.pageTitle}>{title}</h4>
      <div className={styles.extraContent}>{extra}</div>
    </div>
  );
};

export default PageHeader;
