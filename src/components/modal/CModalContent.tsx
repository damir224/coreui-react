import React, { FC, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CModalContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
}

export const CModalContent: FC<CModalContentProps> = ({ children, className, ...rest }) => {
  const _className = classNames('modal-content', className)

  return (
    <div className={_className} {...rest}>
      {children}
    </div>
  )
}