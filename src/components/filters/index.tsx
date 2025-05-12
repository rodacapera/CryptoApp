import React from 'react';
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import useFilters from './hooks/useFilters';
import {filterStyles} from './styles/filterStyles';
import {FiltersProps} from './types/filtersTypes';

// Enable layout animation for Android devices
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

/**
 * Filters component allows users to filter cryptocurrency listings by price range and sorting options.
 * It features an accordion-style dropdown for price range input and sort options (Price or Name).
 * The component leverages custom hooks for handling the accordion toggle and sort logic.
 *
 * @param {FiltersProps} props - The properties passed into the component.
 * @param {Function} props.setMinPrice - Function to update the minimum price filter.
 * @param {Function} props.setMaxPrice - Function to update the maximum price filter.
 * @param {Function} props.setSortBy - Function to update the sort criteria (either 'price' or 'name').
 *
 * @returns {React.ReactNode} JSX for the filters UI.
 */
const Filters = ({
  setMaxPrice,
  setMinPrice,
  setSortBy,
}: FiltersProps): React.ReactNode => {
  // Using the custom hook to manage accordion and sorting logic
  const {toggleAccordion, handleSort, activeSort, expanded} = useFilters({
    setSortBy,
  });

  return (
    <View style={filterStyles.filtersContainer}>
      {/* Accordion header button to toggle the filter section */}
      <TouchableOpacity
        onPress={toggleAccordion}
        style={filterStyles.accordionHeader}>
        <Text style={filterStyles.accordionTitle}>
          {expanded ? 'Hide Filters ▲' : 'Show Filters ▼'}
        </Text>
      </TouchableOpacity>

      {/* Filter section shown when accordion is expanded */}
      {expanded && (
        <View>
          {/* Price Range Inputs */}
          <Text style={filterStyles.filterLabel}>Price Range (USD)</Text>
          <View style={filterStyles.inputGroup}>
            <TextInput
              style={filterStyles.input}
              placeholder="Min"
              keyboardType="numeric"
              onChangeText={text => setMinPrice(parseFloat(text) || 0)}
              placeholderTextColor="#aaa"
            />
            <TextInput
              style={filterStyles.input}
              placeholder="Max"
              keyboardType="numeric"
              onChangeText={text => setMaxPrice(parseFloat(text) || 1000000)}
              placeholderTextColor="#aaa"
            />
          </View>

          {/* Sort by options (Price or Name) */}
          <Text style={filterStyles.filterLabel}>Sort By</Text>
          <View style={filterStyles.sortButtonGroup}>
            <TouchableOpacity
              style={[
                filterStyles.sortButton,
                activeSort === 'price' && filterStyles.sortButtonActive,
              ]}
              onPress={() => handleSort('price')}>
              <Text style={filterStyles.sortButtonText}>Price</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                filterStyles.sortButton,
                activeSort === 'name' && filterStyles.sortButtonActive,
              ]}
              onPress={() => handleSort('name')}>
              <Text style={filterStyles.sortButtonText}>Name</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Filters;
