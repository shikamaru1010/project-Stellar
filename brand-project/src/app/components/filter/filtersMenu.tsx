import React, { useState } from 'react';
import { Sizes } from '../../types/filterOptionsClass/sizes';
import { Colors } from '../../types/filterOptionsClass/colors'; 
import { PriceRange } from '../../types/filterOptionsClass/priceRange'; 
import "./filter.css"
import { Button } from 'semantic-ui-react';

const FilterComponent: React.FC = () => {
  const sizes = new Sizes();
  const colors = new Colors();
  const priceRange = new PriceRange();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [priceRangeState, setPriceRangeState] = useState<{ min: number; max: number }>({
    min: priceRange.getPriceRange().min,
    max: priceRange.getPriceRange().max,
  });

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceRangeState((prevRange) => ({
      ...prevRange,
      [name]: Number(value),
    }));
    priceRange.setPriceRange(priceRangeState.min, priceRangeState.max);
  };

  return (
    <div className='filters-menu'>
      <div className='filters-menu-el'>
        <label>Size</label>
        <select value={selectedSize} onChange={handleSizeChange}>
          <option value="">Select Size</option>
          {sizes.getSizes().map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className='filters-menu-el'>
        <label>Color</label>
        <select value={selectedColor} onChange={handleColorChange}>
          <option value="">Select Color</option>
          {colors.getColors().map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      <div className='filters-menu-el'>
        <label>Price Range</label>
        <div className='price-range'>
        <input
          type="number"
          name="min"
          value={priceRangeState.min}
          onChange={handlePriceChange}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="max"
          value={priceRangeState.max}
          onChange={handlePriceChange}
          placeholder="Max Price"
        />
        </div>
      </div>
        <a href='' className='filters-button'><p>Filters</p></a>
    </div>
  );
};

export default FilterComponent;
