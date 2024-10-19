import React from 'react'

function About() {
  return (
<div className="bg-black text-white px-6 py-16 md:px-12 md:py-24">
  <div className="max-w-[1120px] mx-auto">
    <p className="text-sm text-gray-400 tracking-widest uppercase mb-4">
      About Me
    </p>
    <h1 className="text-4xl md:text-[4.25rem] font-bold leading-tight">
      I’m a{" "}
      <span className="text-green-500">full-stack developer</span>{" "}
      focused on building quality and impactful digital solutions across{" "}
      <span className="text-white">front-end</span> and{" "}
      <span className="text-gray-500">back-end</span>.
    </h1>
  </div>
</div>
  )
}

export default About