import { File as TFile } from "../api/file/File";

export const FILE_TITLE_FIELD = "id";

export const FileTitle = (record: TFile): string => {
  return record.id?.toString() || String(record.id);
};
