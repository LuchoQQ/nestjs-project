export enum RabbitMQ {
    UserQueue = 'users',
    PassengerQueue = 'passengers',
    FlightsQueue = 'flights'
}

export enum UserMSG {
    CREATE = 'CREATE_USER',
    FIND_ALL = 'FIND_USERS',
    FIND_ONE = 'FIND_USER',
    UPDATE = 'UPDATE_USER',
    DELETE = 'DELETE_USER',
    VALID_USER = 'VALID_USER'
}

export enum PassengerMSG {
    CREATE = 'CREATE_PASSENGER',
    FIND_ALL = 'FIND__PASSENGER',
    FIND_ONE = 'FIND_PASSENGER',
    UPDATE = 'UPDATE_PASSENGER',
    DELETE = 'DELETE_PASSENGER',
    VALID_USER = 'VALID_PASSENGER'
}

export enum FlightMSG {
    CREATE = 'CREATE_FLIGHT',
    FIND_ALL = 'FIND__FLIGHT',
    FIND_ONE = 'FIND_FLIGHT',
    UPDATE = 'UPDATE_FLIGHT',
    DELETE = 'DELETE_FLIGHT',
    VALID_USER = 'VALID_FLIGHT',
    ADD_PASSENGER = 'ADD_PASSENGER'
}

