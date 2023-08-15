import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type ProgramDocument = HydratedDocument<Program>

@Schema({timestamps: true})
export class Program{
    @Prop({})
    name: string

    @Prop({enum: ['undergraduate', 'masters', 'phd']})
    level: string

    @Prop({})
    institute: string

    @Prop({})
    country: string

    @Prop({})
    description: string
}

export const ProgramSchema = SchemaFactory.createForClass(Program)