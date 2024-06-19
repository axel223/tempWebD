import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FileModuleBase } from "./base/file.module.base";
import { FileService } from "./file.service";
import { FileController } from "./file.controller";
import { FileResolver } from "./file.resolver";

@Module({
  imports: [FileModuleBase, forwardRef(() => AuthModule)],
  controllers: [FileController],
  providers: [FileService, FileResolver],
  exports: [FileService],
})
export class FileModule {}
