import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class FlightDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly pilot: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly airplane: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly destinationCity: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    readonly flightDate: Date;
}
