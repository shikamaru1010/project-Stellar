import React, { useState } from 'react';
import { Sizes } from '../../types/filterOptionsClass/sizes';
import { Colors } from '../../types/filterOptionsClass/colors'; 
import { PriceRange } from '../../types/filterOptionsClass/priceRange'; 
import "./filter.css"

interface FilterProps{
  onFIlterChange: (filters : {size: string;color: string;priceRange: {min: number;max: number}}) => void;
}

const FilterComponent: React.FC<FilterProps> = ({onFIlterChange}) => {
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
    onFIlterChange({
      size: e.target.value,
      color: selectedColor,
      priceRange: priceRangeState
  });
};

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(e.target.value);
    onFIlterChange({
      size: selectedSize,
      color: e.target.value,
      priceRange: priceRangeState
    });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceRangeState((prevRange) => {
      const newRange = { ...prevRange, [name]: Number(value) };
      onFIlterChange({
        size: selectedSize,
        color: selectedColor,
        priceRange: newRange,
      });
      return newRange;
    });
  };

  return (
    <div className='filters-menu' style={{height: '50vh'}}>
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
    </div>
  );
};

export default FilterComponent;
