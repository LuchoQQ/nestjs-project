import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { Body, Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { FlightDTO } from './dto/flight.dto';
import { IFlight } from 'src/common/interfaces/flight.interface';
import { FlightMSG, PassengerMSG } from 'src/common/constants';
import { Observable } from 'rxjs';

@Controller('api/v1/flight')
export class FlightController {
    constructor(private readonly clientProxy: ClientProxySuperFlights) { }
    private _clientProxyFlight = this.clientProxy.clientProxyFlights()
    private _clientProxyPassenger = this.clientProxy.clientProxyPassenger()


    @Post()
    create(@Body() flightDTO: FlightDTO): Observable<IFlight> {
        return this._clientProxyFlight.send(FlightMSG.CREATE, flightDTO)
    }

    @Get()
    findAll(): Observable<IFlight> {
        return this._clientProxyFlight.send(FlightMSG.FIND_ALL, '')
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IFlight> {
        return this._clientProxyFlight.send(FlightMSG.FIND_ONE, id)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() flightDTO: FlightDTO): Observable<IFlight> {
        return this._clientProxyFlight.send(FlightMSG.UPDATE, { id, flightDTO })
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<IFlight> {
        return this._clientProxyFlight.send(FlightMSG.DELETE, id)
    }

    @Post(':flightId/passenger/:passengerId')
    async addPassenger(
        @Param('flightId') flightId: string,
        @Param('passengerId') passengerId: string
    ) {
        const passenger = await this._clientProxyPassenger.send(PassengerMSG.FIND_ONE, passengerId).toPromise()

    }
}
