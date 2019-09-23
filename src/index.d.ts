export interface IPropsVariableSizeList {
  children: number;
  height: number;
  width: number;
  itemCount: number;
  itemSize: number;
  layout?: 'horizontal' | number;
}

export const VariableSizeList = (props: IPropsVariableSizeList) => any;
