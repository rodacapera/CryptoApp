// styles/listButtonStyles.ts
import {StyleSheet} from 'react-native';

export const listButtonStyles = StyleSheet.create({
  card: {
    flexDirection: 'row', // ← Coloca el logo a la izquierda y la info a la derecha
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  infoContainer: {
    marginLeft: 12,
    flex: 1,
  },
  cryptoName: {
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
});
