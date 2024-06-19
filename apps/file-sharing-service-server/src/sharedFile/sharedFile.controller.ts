import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SharedFileService } from "./sharedFile.service";
import { SharedFileControllerBase } from "./base/sharedFile.controller.base";

@swagger.ApiTags("sharedFiles")
@common.Controller("sharedFiles")
export class SharedFileController extends SharedFileControllerBase {
  constructor(
    protected readonly service: SharedFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
