import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

import { CLink } from '../link/CLink'

export interface CBreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
  /**
   * Toggle the active state for the component. [docs]
   */
  active?: boolean
  /**
   * A string of all className you want applied to the base component. [docs]
   */
  className?: string
  /**
   * TODO: . [docs]
   */
  href?: string
}

export const CBreadcrumbItem = forwardRef<HTMLLIElement, CBreadcrumbItemProps>(
  ({ children, active, className, href, ...rest }, ref) => {
    return (
      <li
        className={classNames('breadcrumb-item', active ? 'active' : false, className)}
        {...(active && { 'aria-current': 'page' })}
        {...rest}
        ref={ref}
      >
        {href ? <CLink href={href}>{children}</CLink> : children}
      </li>
    )
  },
)

CBreadcrumbItem.displayName = 'CBreadcrumbItem'