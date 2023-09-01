import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProgramService } from './program.service';
import { CreateProgramDto, EditProgramDto, SearchProgramDto } from './dto';

@Controller('program')
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  createProgram(@Body() dto: CreateProgramDto) {
    return this.programService.addProgram(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  getProgram() {
    return this.programService.getProgram();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getProgramById(@Param('id') programId: string) {
    return this.programService.getProgramById(programId);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  updateProgram(
    @Param('id') programId: string,
    @Body() editDto: EditProgramDto,
  ) {
    return this.programService.editProgram(programId, editDto);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  deleteProgram(@Param('id') programId: string) {
    return this.programService.deleteProgram(programId);
  }

  @HttpCode(HttpStatus.OK)
  @Post('search')
  searchProgram(@Query() searchCriteria: SearchProgramDto) {
    return this.programService.searchProgram(searchCriteria);
  }
}
