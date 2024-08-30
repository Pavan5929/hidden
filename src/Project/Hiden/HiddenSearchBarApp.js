import React, { useState, useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

function HiddenSearchBarApp() {
  const [uiProps, setUiProps] = useState({
    bg: 'purple',
    shadow: '',
    transitions: 'all .3s ease',
    opacity: 0,
    showSearchIcon: true,
    showSearchBar: false,
    borderBottomColor: '#fff',
  });

  const inputEl = useRef(null);

  // Apply background, box shadow, and transition styles to the body
  useEffect(() => {
    document.body.style.background = uiProps.bg;
    document.body.style.boxShadow = uiProps.shadow;
    document.body.style.transition = uiProps.transitions;
  }, [uiProps]);

  // Focus the input element when showSearchBar is true
  useEffect(() => {
    if (uiProps.showSearchBar) {
      inputEl.current?.focus(); // Safe check before focusing
    }
  }, [uiProps.showSearchBar]);

  const inputStyle = {
    margin: '10vh 25vw',
    width: '20vh',
    height: '30px',
    padding: '1rem .3rem',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    borderBottom: `1px solid ${uiProps.borderBottomColor}`,
    fontSize: '1.3rem',
    color: '#eee',
    boxShadow: '0px 55px 60px -15px rgba(0,0,0,.75)',
    opacity: uiProps.opacity,
    transition: 'all 0.3s ease',
  };

  const bsSearchStyle = {
    fontSize: 50,
    color: '#fff',
    cursor: 'pointer',
    position: 'absolute',
    top: 20,
    right: 20,
  };

  // Show the search input when the search icon is clicked
  const showSearch = () => {
    setUiProps((prevProps) => ({
      ...prevProps,
      opacity: 1,
      showSearchIcon: false,
      showSearchBar: true,
    }));
  };

  // Update styles when the search input is focused
  const handleSearchFocus = () => {
    setUiProps((prevProps) => ({
      ...prevProps,
      shadow: 'inset 0 -60vh 30vw 200px rgba(0,0,0,0.8)',
      borderBottomColor: 'green',
    }));
  };

  // Reset styles when the search input loses focus
  const handleSearchBlur = () => {
    setUiProps((prevProps) => ({
      ...prevProps,
      shadow: 'none',
      opacity: 0,
      borderBottomColor: '#fff',
      showSearchIcon: true,
      showSearchBar: false,
    }));
  };

  return (
    <div className='container' style={{ height: '100vh' }}>
      {uiProps.showSearchIcon ? (
        <BsSearch style={bsSearchStyle} onClick={showSearch} />
      ) : (
        <input
          type='text'
          placeholder='search'
          style={inputStyle}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          ref={inputEl}
        />
      )}
    </div>
  );
}

export default HiddenSearchBarApp;
