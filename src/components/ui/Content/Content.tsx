import cx from 'clsx';
import React from 'react';

import styles from './Content.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Content({ children, className }: Props) {
  return <div className={cx(styles.content, className)}>{children}</div>
}
