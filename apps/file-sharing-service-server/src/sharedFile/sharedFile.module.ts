import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SharedFileModuleBase } from "./base/sharedFile.module.base";
import { SharedFileService } from "./sharedFile.service";
import { SharedFileController } from "./sharedFile.controller";
import { SharedFileResolver } from "./sharedFile.resolver";

@Module({
  imports: [SharedFileModuleBase, forwardRef(() => AuthModule)],
  controllers: [SharedFileController],
  providers: [SharedFileService, SharedFileResolver],
  exports: [SharedFileService],
})
export class SharedFileModule {}
