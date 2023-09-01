/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Program, ProgramDocument } from './program.model';
import { Model } from 'mongoose';
import { CreateProgramDto, EditProgramDto, SearchProgramDto } from './dto';
import { errorRes, successRes } from '../helpers/response';

@Injectable()
export class ProgramService {
  constructor(
    @InjectModel(Program.name) private programModel: Model<ProgramDocument>,
  ) {}

  async addProgram(createDto: CreateProgramDto) {
    const program = new this.programModel({
      name: createDto.name,
      level: createDto.level,
      country: createDto.country,
      institute: createDto.institute,
      description: createDto.description,
    });
    await program.save();
    return successRes('Program created successfully', program);
  }

  async getProgram() {
    const program = await this.programModel.find().exec();
    return successRes('Records fetched successfully', program);
  }

  async getProgramById(programId: string) {
    const program = await this.programModel.findById(programId);
    if (!program) {
      throw new NotFoundException('Program not found');
    }
    return successRes('Program retrieved', program);
  }

  async editProgram(programId: string, editDto: EditProgramDto) {
    const program = await this.programModel.findById(programId);
    if (!program) {
      throw new NotFoundException('Program not found');
    }
    const editedProgram = await program
      .updateOne({ $set: editDto }, { new: true })
      .exec();
    return successRes('Program updated succesully', editedProgram);
  }

  async deleteProgram(programId: string) {
    const program = await this.programModel.findByIdAndDelete(programId).exec();
    if (!program) {
      throw new NotFoundException('Program not found');
    }
    return successRes('Program deleted successfully');
  }

  async searchProgram(searchParams: SearchProgramDto) {
    const query: any = {};

    if (searchParams.level) {
      query.level = new RegExp(searchParams.level, 'i'); // case-insensitive search
    }

    if (searchParams.institute) {
      query.institute = new RegExp(searchParams.institute, 'i');
    }

    if (searchParams.country) {
      query.country = new RegExp(searchParams.country, 'i');
    }

    if (searchParams.searchText) {
      query.$or = [
        { name: new RegExp(searchParams.searchText, 'i') },
        { description: new RegExp(searchParams.searchText, 'i') },
      ];
    }

    const program = await this.programModel.find(query).exec();
    if (program.length === 0) {
      throw new NotFoundException('Program not found');
    }
    return successRes('Program retreived', program);
  }
}
