import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface CNavGroupItemsProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
}

export const CNavGroupItems = forwardRef<HTMLUListElement, CNavGroupItemsProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames('nav-group-items', className)
    return (
      <ul className={_className} {...rest} ref={ref}>
        {children}
      </ul>
    )
  },
)

CNavGroupItems.displayName = 'CNavGroupItems'