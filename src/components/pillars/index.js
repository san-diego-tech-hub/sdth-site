import React from 'react';
import styles from './pillars.module.css'

const PillarsLayout = ({ children }) => (
  <main>
    {children(styles)}
  </main>
)

export default PillarsLayout