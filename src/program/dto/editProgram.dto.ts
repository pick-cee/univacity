import { IsEnum, IsOptional, IsString } from "class-validator";

export class EditProgramDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsEnum(['undergraduate', 'masters', 'phd'])
    @IsOptional()
    level?: 'undergraduate' | 'masters' | 'phd';

    @IsString()
    @IsOptional()
    institute?: string;

    @IsString()
    @IsOptional()
    country?: string;

    @IsString()
    @IsOptional()
    description?: string;
}