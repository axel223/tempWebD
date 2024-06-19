import { SharedFile as TSharedFile } from "../api/sharedFile/SharedFile";

export const SHAREDFILE_TITLE_FIELD = "id";

export const SharedFileTitle = (record: TSharedFile): string => {
  return record.id?.toString() || String(record.id);
};
