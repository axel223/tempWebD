import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  name?: string | null;
  users?: UserUpdateManyWithoutRolesInput;
};
