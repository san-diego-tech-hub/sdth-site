import React from "react"
import styles from "./pillars.module.css"

const PillarsLayout = ({ children }) =>
  // prettier-ignore
  <main>
    {children(styles)}
  </main>

export default PillarsLayout
