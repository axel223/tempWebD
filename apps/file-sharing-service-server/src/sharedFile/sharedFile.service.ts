import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SharedFileServiceBase } from "./base/sharedFile.service.base";

@Injectable()
export class SharedFileService extends SharedFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
