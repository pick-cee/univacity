import { IsEnum, IsNotEmpty, IsString, Length } from "class-validator";


export class CreateProgramDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEnum(['undergraduate', 'masters', 'phd'])
    @IsNotEmpty()
    level: 'undergraduate' | 'masters' | 'phd';

    @IsString()
    @IsNotEmpty()
    institute: string;

    @IsString()
    @IsNotEmpty()
    @Length(2,2)
    country: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}