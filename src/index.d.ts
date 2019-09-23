export interface IPropsVariableSizeList {
  children: number;
  height: number;
  width: number;
  itemCount: number;
  itemSize: number;
  layout?: 'horizontal' | number;
}

export type VariableSizeList = (props: IPropsVariableSizeList) => any;
