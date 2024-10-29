"use-client";
import './dropdown-modal.scss';
import { useEffect, useRef } from 'react';

export default function Model({ setOpenModel, children }) {
  const ref = useRef(null);

  // const handleCLick = () => {
  // setDropdownOpen(true);
  // window.scrollTo(0, 0);
  // document.body.style.overflow = 'hidden';
  // };

  useEffect(() => {
    // window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return ()=>{
      document.body.style.overflow = 'auto';

    }
  }, []);

  const backToNormalScroll = () => {
    document.body.style.overflow = 'auto';
    setOpenModel?.(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        backToNormalScroll();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="dropdown-container1">
      <div className="modal-container1">
        <div ref={ref}>{children}</div>
      </div>
    </div>
  );
}
