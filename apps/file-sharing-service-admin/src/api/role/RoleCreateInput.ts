import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  name?: string | null;
  users?: UserCreateNestedManyWithoutRolesInput;
};
