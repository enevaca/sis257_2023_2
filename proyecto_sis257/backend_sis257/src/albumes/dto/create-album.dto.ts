import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsDefined, IsNotEmpty, IsNumber, IsObject, IsString, MaxLength } from "class-validator";
import { Interprete } from "src/interpretes/entities/interprete.entity";

export class CreateAlbumDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no de ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(50, { message: 'El campo nombre no debe ser mayor a 50 caracteres' })
  readonly nombre: string;

  @ApiProperty({ example: '2005-05-01' })
  @IsNotEmpty({ message: 'El campo fechaLanzamiento no de ser vacío' })
  @IsDateString({}, { message: 'El campo fechaLanzamiento debe ser de tipo fecha' })
  readonly fechaLanzamiento: Date;

  @ApiProperty()
  @IsDefined({ message: 'El campo interprete debe estar definido' })
  @IsNumber({}, { message: 'El campo interprete debe ser de tipo numérico' })
  readonly idInterprete: number;
}
