import React from 'react';
import {View, Text} from 'react-native';
import {detailStyles} from '../../styles/detailStyles';
import {DetailRowProp} from '../../types/detailScreenTypes';

/**
 * DetailRow is a reusable component used to display a label-value pair.
 * It is primarily used within the DetailScreen to display cryptocurrency statistics such as price, market cap, etc.
 *
 * @param label The label for the row (e.g., "Price", "Market Cap").
 * @param value The value associated with the label (e.g., "$100,000", "20%").
 * @returns A View component that displays the label and its corresponding value in a styled format.
 */
const index = ({label, value}: DetailRowProp) => {
  return (
    <View style={detailStyles.row}>
      <Text style={detailStyles.label}>{label}:</Text>
      <Text style={detailStyles.value}>{value}</Text>
    </View>
  );
};

export default index;
