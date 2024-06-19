/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SharedFileWhereInput } from "./SharedFileWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SharedFileListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SharedFileWhereInput,
  })
  @ValidateNested()
  @Type(() => SharedFileWhereInput)
  @IsOptional()
  @Field(() => SharedFileWhereInput, {
    nullable: true,
  })
  every?: SharedFileWhereInput;

  @ApiProperty({
    required: false,
    type: () => SharedFileWhereInput,
  })
  @ValidateNested()
  @Type(() => SharedFileWhereInput)
  @IsOptional()
  @Field(() => SharedFileWhereInput, {
    nullable: true,
  })
  some?: SharedFileWhereInput;

  @ApiProperty({
    required: false,
    type: () => SharedFileWhereInput,
  })
  @ValidateNested()
  @Type(() => SharedFileWhereInput)
  @IsOptional()
  @Field(() => SharedFileWhereInput, {
    nullable: true,
  })
  none?: SharedFileWhereInput;
}
export { SharedFileListRelationFilter as SharedFileListRelationFilter };