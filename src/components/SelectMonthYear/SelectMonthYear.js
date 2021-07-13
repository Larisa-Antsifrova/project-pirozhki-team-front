import { useState } from 'react';
import { ReactComponent as DropDownIcon } from '../../images/drop-down-icon.svg';
import { ReactComponent as DropUpIcon } from '../../images/drop-up-icon.svg';
import './SelectMonthYear.scss';

const SelectMonthYear = ({ title, list, onChange }) => {
  const [dropdownTitle, setDropdownTitle] = useState(title);
  const [isOpen, setOpen] = useState(false);

  const handleListItemClick = listItemTitle => {
    setDropdownTitle(listItemTitle);
    setOpen(!isOpen);
    onChange(listItemTitle);
  };

  return (
    <div className="dropdownWrapper" onClick={e => setOpen(!isOpen)}>
      <div className={`dropdownHeader ${isOpen && 'dropdownHeaderActive'}`}>
        <span className="dropdownHeaderTitle">{dropdownTitle}</span>
        {isOpen ? <DropUpIcon /> : <DropDownIcon />}
      </div>
      <div className={`dropdownList ${isOpen && 'dropdownListOpen'}`}>
        {list.map((item, index) => (
          <button
            key={index}
            className="dropdownListItem"
            onClick={() => handleListItemClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectMonthYear;
