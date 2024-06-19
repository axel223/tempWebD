/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SharedFile } from "./SharedFile";
import { SharedFileCountArgs } from "./SharedFileCountArgs";
import { SharedFileFindManyArgs } from "./SharedFileFindManyArgs";
import { SharedFileFindUniqueArgs } from "./SharedFileFindUniqueArgs";
import { DeleteSharedFileArgs } from "./DeleteSharedFileArgs";
import { SharedFileService } from "../sharedFile.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SharedFile)
export class SharedFileResolverBase {
  constructor(
    protected readonly service: SharedFileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SharedFile",
    action: "read",
    possession: "any",
  })
  async _sharedFilesMeta(
    @graphql.Args() args: SharedFileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SharedFile])
  @nestAccessControl.UseRoles({
    resource: "SharedFile",
    action: "read",
    possession: "any",
  })
  async sharedFiles(
    @graphql.Args() args: SharedFileFindManyArgs
  ): Promise<SharedFile[]> {
    return this.service.sharedFiles(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SharedFile, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SharedFile",
    action: "read",
    possession: "own",
  })
  async sharedFile(
    @graphql.Args() args: SharedFileFindUniqueArgs
  ): Promise<SharedFile | null> {
    const result = await this.service.sharedFile(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SharedFile)
  @nestAccessControl.UseRoles({
    resource: "SharedFile",
    action: "delete",
    possession: "any",
  })
  async deleteSharedFile(
    @graphql.Args() args: DeleteSharedFileArgs
  ): Promise<SharedFile | null> {
    try {
      return await this.service.deleteSharedFile(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}