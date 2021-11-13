import React from 'react'

export default function CityDropDown() {
    return (
      <div>
        <label for="city">Choose a city: </label>

        <select name="cities" id="cities">
          <option value="">Select a city</option>
          <option value="harrow">Harrow</option>
          <option value="stratford">Stratford</option>
          <option value="heathrow">Heathrow</option>
        </select>
      </div>
    );
}
