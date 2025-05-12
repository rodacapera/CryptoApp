import {useState} from 'react';
import {LayoutAnimation} from 'react-native';
import {UseFiltersProps} from '../types/filtersTypes';

/**
 * Custom hook to manage the state of the filter component.
 * It handles the accordion expansion and sorting logic.
 *
 * @param {UseFiltersProps} props - The properties passed to the hook.
 * @param {Function} props.setSortBy - Function to update the sorting criteria (either 'price' or 'name').
 *
 * @returns {Object} - Contains functions and state variables for the filter logic:
 *   - `activeSort`: The currently selected sorting option ('price' or 'name').
 *   - `expanded`: The state of the accordion (whether it's expanded or collapsed).
 *   - `toggleAccordion`: Function to toggle the accordion's expanded state.
 *   - `handleSort`: Function to update the sorting state based on user selection.
 */
const useFilters = ({setSortBy}: UseFiltersProps) => {
  // State to handle the expanded/collapsed state of the filter accordion
  const [expanded, setExpanded] = useState(false);

  // State to track the active sorting option ('price' or 'name')
  const [activeSort, setActiveSort] = useState<'price' | 'name' | null>(null);

  /**
   * Toggles the accordion state for showing/hiding the filter options.
   * Uses `LayoutAnimation` for smooth transitions when toggling the accordion.
   */
  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // Smooth transition animation
    setExpanded(!expanded); // Toggle the expanded state
  };

  /**
   * Handles the sorting action based on the selected sort option ('price' or 'name').
   * This function is called when a user selects a sort criterion.
   *
   * It updates the local `activeSort` state and calls the `setSortBy` function passed from the parent component
   * to update the sort criteria in the parent state.
   *
   * @param {('price' | 'name')} sortType - The selected sort criteria.
   */
  const handleSort = (sortType: 'price' | 'name') => {
    setActiveSort(sortType); // Update the local sorting state
    setSortBy(sortType); // Update the sorting state in the parent component
  };

  // Return the states and functions that the component needs
  return {activeSort, expanded, toggleAccordion, handleSort};
};

export default useFilters;
