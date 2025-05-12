import Crypto from '../../../models/Crypto';

interface DetailScreenProps {
  id: string;
}
interface DetailRowProp {
  label: string;
  value: string;
}
interface UseDetailRequestProps {
  crypto: Crypto | null;
  loading: boolean;
}

export type {DetailScreenProps, DetailRowProp, UseDetailRequestProps};
