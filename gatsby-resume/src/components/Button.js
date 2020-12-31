import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';

function Button({ title, primary, icon, type }) {
  //   console.log(icon, AiFillGithub);
  return (
    <>
      <button type={type && type} className={`btn btn-${primary && 'primary'}`}>
        {icon === 'github' ? (
          <span>
            <AiFillGithub />
          </span>
        ) : icon === 'site' ? (
          <span>
            <FiGlobe />
          </span>
        ) : (
          ''
        )}
        {title}
      </button>
    </>
  );
}

export default Button;
