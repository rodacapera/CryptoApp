import {StyleSheet} from 'react-native';

export const detailStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 8,
    borderRadius: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
  },
  detailBox: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
});
