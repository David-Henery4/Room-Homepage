import React from 'react'

const Overlay = ({isSidebar}) => {
  return (
    <div className={isSidebar? "overlay overlay-active" : "overlay"}></div>
  )
}

export default Overlay