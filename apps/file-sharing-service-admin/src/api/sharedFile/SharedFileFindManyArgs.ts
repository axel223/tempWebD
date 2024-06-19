import { SharedFileWhereInput } from "./SharedFileWhereInput";
import { SharedFileOrderByInput } from "./SharedFileOrderByInput";

export type SharedFileFindManyArgs = {
  where?: SharedFileWhereInput;
  orderBy?: Array<SharedFileOrderByInput>;
  skip?: number;
  take?: number;
};
