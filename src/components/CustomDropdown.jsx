import React, { useState, useEffect } from 'react';

const CustomDropdown = ({ items, onSelect, initialSelectedItem }) => {
  // State to track whether the dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // State to track the currently selected item
  const [selectedItem, setSelectedItem] = useState(initialSelectedItem || null);

  // Use useEffect to update selectedItem when initialSelectedItem changes
  useEffect(() => {
    setSelectedItem(selectedItem);
  }, [initialSelectedItem, selectedItem]);

  // Function to toggle the dropdown's open/close state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle item selection
  const handleItemClick = (item) => {
    // Set the selected item
    setSelectedItem(item);
    // Call the onSelect callback with the selected item
    onSelect(item);
    // Close the dropdown
    toggleDropdown();
  };

  return (
    <div className="custom-dropdown">
      {/* Dropdown header, clicking it toggles the dropdown */}
      <div className="dropdown-header" onClick={toggleDropdown}>
        {/* Display the label of the selected item or a default message */}
        {selectedItem ? selectedItem.label : 'Select an item'}
        {isOpen ? (
          <span className='arrow'>▼</span>
        ) : (
          <span className='arrow'>▲</span>
        )}
      </div>
      {/* Dropdown list */}
      {isOpen && (
        <div className="dropdown-list">
          {/* Render the initialSelectedItem, if it exists */}
          {initialSelectedItem && (
            <div
              key={initialSelectedItem.id}
              className="dropdown-item"
              onClick={() => handleItemClick(initialSelectedItem)}
            >
              {initialSelectedItem.label}
            </div>
          )}
          {items.map((item) => (
            <div
              key={item.id}
              className="dropdown-item"
              onClick={() => handleItemClick(item)}
            > 
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
