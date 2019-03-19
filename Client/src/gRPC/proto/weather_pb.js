/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.proto.weather.GetRequest', null, global);
goog.exportSymbol('proto.proto.weather.GetResponse', null, global);
goog.exportSymbol('proto.proto.weather.Weather', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.weather.Weather = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.weather.Weather, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.weather.Weather.displayName = 'proto.proto.weather.Weather';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.weather.Weather.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.weather.Weather.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.weather.Weather} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.weather.Weather.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    temp: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    tempmax: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    tempmin: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    wind: +jspb.Message.getFieldWithDefault(msg, 6, 0.0),
    description: jspb.Message.getFieldWithDefault(msg, 7, ""),
    icon: jspb.Message.getFieldWithDefault(msg, 8, ""),
    dttext: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.weather.Weather}
 */
proto.proto.weather.Weather.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.weather.Weather;
  return proto.proto.weather.Weather.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.weather.Weather} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.weather.Weather}
 */
proto.proto.weather.Weather.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTemp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTempmax(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTempmin(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWind(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDttext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.weather.Weather.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.weather.Weather.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.weather.Weather} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.weather.Weather.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTemp();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTempmax();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getTempmin();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getWind();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDttext();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional double ID = 1;
 * @return {number}
 */
proto.proto.weather.Weather.prototype.getId = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.proto.weather.Weather.prototype.setId = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string Type = 2;
 * @return {string}
 */
proto.proto.weather.Weather.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.proto.weather.Weather.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double Temp = 3;
 * @return {number}
 */
proto.proto.weather.Weather.prototype.getTemp = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.proto.weather.Weather.prototype.setTemp = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double TempMax = 4;
 * @return {number}
 */
proto.proto.weather.Weather.prototype.getTempmax = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.proto.weather.Weather.prototype.setTempmax = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double TempMin = 5;
 * @return {number}
 */
proto.proto.weather.Weather.prototype.getTempmin = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.proto.weather.Weather.prototype.setTempmin = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double Wind = 6;
 * @return {number}
 */
proto.proto.weather.Weather.prototype.getWind = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.proto.weather.Weather.prototype.setWind = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string Description = 7;
 * @return {string}
 */
proto.proto.weather.Weather.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.proto.weather.Weather.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string Icon = 8;
 * @return {string}
 */
proto.proto.weather.Weather.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.proto.weather.Weather.prototype.setIcon = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string DtText = 9;
 * @return {string}
 */
proto.proto.weather.Weather.prototype.getDttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.proto.weather.Weather.prototype.setDttext = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.weather.GetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.proto.weather.GetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.weather.GetRequest.displayName = 'proto.proto.weather.GetRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.weather.GetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.weather.GetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.weather.GetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.weather.GetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cityname: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.weather.GetRequest}
 */
proto.proto.weather.GetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.weather.GetRequest;
  return proto.proto.weather.GetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.weather.GetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.weather.GetRequest}
 */
proto.proto.weather.GetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCityname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.weather.GetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.weather.GetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.weather.GetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.weather.GetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCityname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string cityName = 1;
 * @return {string}
 */
proto.proto.weather.GetRequest.prototype.getCityname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.proto.weather.GetRequest.prototype.setCityname = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.proto.weather.GetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.proto.weather.GetResponse.repeatedFields_, null);
};
goog.inherits(proto.proto.weather.GetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.proto.weather.GetResponse.displayName = 'proto.proto.weather.GetResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.proto.weather.GetResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.proto.weather.GetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.proto.weather.GetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.proto.weather.GetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.weather.GetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    weatherlistList: jspb.Message.toObjectList(msg.getWeatherlistList(),
    proto.proto.weather.Weather.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.proto.weather.GetResponse}
 */
proto.proto.weather.GetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.proto.weather.GetResponse;
  return proto.proto.weather.GetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.proto.weather.GetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.proto.weather.GetResponse}
 */
proto.proto.weather.GetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.proto.weather.Weather;
      reader.readMessage(value,proto.proto.weather.Weather.deserializeBinaryFromReader);
      msg.addWeatherlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.proto.weather.GetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.proto.weather.GetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.proto.weather.GetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.proto.weather.GetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWeatherlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.proto.weather.Weather.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Weather weatherList = 1;
 * @return {!Array<!proto.proto.weather.Weather>}
 */
proto.proto.weather.GetResponse.prototype.getWeatherlistList = function() {
  return /** @type{!Array<!proto.proto.weather.Weather>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.proto.weather.Weather, 1));
};


/** @param {!Array<!proto.proto.weather.Weather>} value */
proto.proto.weather.GetResponse.prototype.setWeatherlistList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.proto.weather.Weather=} opt_value
 * @param {number=} opt_index
 * @return {!proto.proto.weather.Weather}
 */
proto.proto.weather.GetResponse.prototype.addWeatherlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.proto.weather.Weather, opt_index);
};


proto.proto.weather.GetResponse.prototype.clearWeatherlistList = function() {
  this.setWeatherlistList([]);
};


goog.object.extend(exports, proto.proto.weather);
