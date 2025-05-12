import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: {id: string};
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

type Props = NativeStackScreenProps<RootStackParamList, 'DetailScreen'>;

export type {HomeScreenNavigationProp, Props, RootStackParamList};
