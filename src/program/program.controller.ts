import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ProgramService } from './program.service';
import { CreateProgramDto } from './dto';

@Controller('program')
export class ProgramController {
    constructor(private readonly programService: ProgramService){}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    createProgram(@Body() dto: CreateProgramDto){
        return this.programService.addProgram(dto)
    }

    @HttpCode(HttpStatus.OK)
    @Get()
    getProgram(){
        return this.programService.getProgram()
    }
}
