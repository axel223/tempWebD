import { FileWhereInput } from "./FileWhereInput";
import { FileOrderByInput } from "./FileOrderByInput";

export type FileFindManyArgs = {
  where?: FileWhereInput;
  orderBy?: Array<FileOrderByInput>;
  skip?: number;
  take?: number;
};
