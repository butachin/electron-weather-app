import * as jspb from "google-protobuf"

export class Weather extends jspb.Message {
  constructor ();
  getId(): number;
  setId(a: number): void;
  getMain(): string;
  setMain(a: string): void;
  getTemp(): number;
  setTemp(a: number): void;
  getTempmax(): number;
  setTempmax(a: number): void;
  getTempmin(): number;
  setTempmin(a: number): void;
  getWind(): number;
  setWind(a: number): void;
  getType(): string;
  setType(a: string): void;
  getDescription(): string;
  setDescription(a: string): void;
  getDttext(): string;
  setDttext(a: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Weather.AsObject;
  static toObject(includeInstance: boolean, msg: Weather): Weather.AsObject;
  static serializeBinaryToWriter(message: Weather, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Weather;
  static deserializeBiinaryFromReader(message: Weather, reader: jspb.BinaryReader): Weather;
}

export namespace Weather {
  export type AsObject = {
    id: number;
    main: string;
    temp: number;
    tempmax: number;
    tempmin: number;
    wind: number;
    type: string;
    description: string;
    dttext: string;
  }
}

export class GetRequest extends jspb.Message {
  constructor ();
  getCityname(): string;
  setCityname(a: string): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBiinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    cityname: string;
  }
}

export class GetResponse extends jspb.Message {
  constructor ();
  getWeather(): Weather;
  setWeather(a: Weather): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBiinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    weather: Weather;
  }
}

