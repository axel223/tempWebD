import { FileWhereInput } from "./FileWhereInput";

export type FileListRelationFilter = {
  every?: FileWhereInput;
  some?: FileWhereInput;
  none?: FileWhereInput;
};
