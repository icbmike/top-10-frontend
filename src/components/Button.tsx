import React, { ReactNode } from "react"

import { NavLink } from "react-router-dom"

import "./Button.scss"

interface IProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
  style?: React.CSSProperties
}

export const Button = ({ children, href, onClick, className, style }: IProps) => {
  if (href) {
    return <NavLink to={href} style={style} className={`button button--isLink ${className}`}>{children}</NavLink>
  }

  return <button style={style} className={`button button ${className}`} onClick={onClick}>{children}</button>
}