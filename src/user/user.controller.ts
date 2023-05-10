import { UserMSG } from 'src/common/constants';
import { Observable } from 'rxjs';
import { UserDTO } from './dto/user.dto';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { IUser } from 'src/common/interfaces/user.interface';

@Controller('api/v1/user')
export class UserController {
    constructor(private readonly clientProxy: ClientProxySuperFlights) { }
    private _clientProxyUser = this.clientProxy.clientProxyUsers()

    @Post()
    create(@Body() userDTO: UserDTO): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.CREATE, userDTO)
    }

    @Get()
    findAll(): Observable<IUser[]> {
        return this._clientProxyUser.send(UserMSG.FIND_ALL, '')
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.FIND_ONE, id)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() userDTO: UserDTO): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.UPDATE, { id, userDTO })
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<IUser> {
        return this._clientProxyUser.send(UserMSG.DELETE, id)
    }
}
