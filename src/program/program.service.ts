import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Program, ProgramDocument } from './program.model';
import { Model } from 'mongoose';
import { CreateProgramDto } from './dto';
import { errorRes, successRes } from '../helpers/response'

@Injectable()
export class ProgramService {
    constructor(@InjectModel(Program.name) private programModel: Model<ProgramDocument>){}

    async addProgram(createDto: CreateProgramDto){
        const program = new this.programModel({
            name: createDto.name,
            level: createDto.level,
            country: createDto.country,
            institute: createDto.institute,
            description: createDto.description
        })
        await program.save()
        return successRes("Program created successfully", program)
    }

    async getProgram(){
        const program = await this.programModel.find().exec()
        return successRes("Records fetched successfully", program)
    }
}
