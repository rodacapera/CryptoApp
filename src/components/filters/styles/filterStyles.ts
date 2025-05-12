import {StyleSheet} from 'react-native';

export const filterStyles = StyleSheet.create({
  filtersContainer: {
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    fontSize: 14,
  },
  sortButtonGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  sortButton: {
    flex: 1,
    backgroundColor: '#e405e7',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  sortButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  accordionHeader: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 8,
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  sortButtonActive: {
    backgroundColor: '#e405e7',
  },
});
