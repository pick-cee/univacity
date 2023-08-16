import { IsEnum, IsOptional, IsString } from 'class-validator';

export class SearchProgramDto {
  @IsOptional()
  @IsEnum(['undergraduate', 'masters', 'phd'])
  level?: 'undergraduate' | 'masters' | 'phd';

  @IsOptional()
  @IsString()
  institute?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  searchText?: string;
}
