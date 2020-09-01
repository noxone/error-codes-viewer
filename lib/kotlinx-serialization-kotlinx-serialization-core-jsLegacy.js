(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-jsLegacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-jsLegacy'.");
    }root['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var getKClass = Kotlin.getKClass;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var throwCCE = Kotlin.throwCCE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Unit = Kotlin.kotlin.Unit;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var equals = Kotlin.equals;
  var hashCode = Kotlin.hashCode;
  var toString = Kotlin.toString;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Iterator = Kotlin.kotlin.collections.Iterator;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var contentEquals = Kotlin.arrayEquals;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toBooleanArray = Kotlin.kotlin.collections.toBooleanArray_xmyvgf$;
  var withIndex = Kotlin.kotlin.collections.withIndex_us0mfu$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var contentHashCode = Kotlin.arrayHashCode;
  var ensureNotNull = Kotlin.ensureNotNull;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var Any = Object;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var LinkedHashSet = Kotlin.kotlin.collections.LinkedHashSet;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_mqih57$;
  var HashSet = Kotlin.kotlin.collections.HashSet;
  var HashSet_init_0 = Kotlin.kotlin.collections.HashSet_init_mqih57$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var LinkedHashMap = Kotlin.kotlin.collections.LinkedHashMap;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_73mtqc$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var HashMap = Kotlin.kotlin.collections.HashMap;
  var HashMap_init_0 = Kotlin.kotlin.collections.HashMap_init_73mtqc$;
  var LinkedHashSet_init_0 = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var indexOf = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var contentToString = Kotlin.arrayToString;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var Array_0 = Array;
  var toByte = Kotlin.toByte;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var trimStart = Kotlin.kotlin.text.trimStart_wqw3xr$;
  var HashSet_init_1 = Kotlin.kotlin.collections.HashSet_init_ww73n8$;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var kotlin_js_internal_ByteCompanionObject = Kotlin.kotlin.js.internal.ByteCompanionObject;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
  var copyOf_0 = Kotlin.kotlin.collections.copyOf_m2jy6x$;
  var kotlin_js_internal_IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var copyOf_1 = Kotlin.kotlin.collections.copyOf_c03ot6$;
  var kotlin_js_internal_LongCompanionObject = Kotlin.kotlin.js.internal.LongCompanionObject;
  var copyOf_2 = Kotlin.kotlin.collections.copyOf_3aefkx$;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var copyOf_3 = Kotlin.kotlin.collections.copyOf_rblqex$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var copyOf_4 = Kotlin.kotlin.collections.copyOf_xgrzbe$;
  var unboxChar = Kotlin.unboxChar;
  var kotlin_js_internal_CharCompanionObject = Kotlin.kotlin.js.internal.CharCompanionObject;
  var copyOf_5 = Kotlin.kotlin.collections.copyOf_gtcw5h$;
  var kotlin_js_internal_BooleanCompanionObject = Kotlin.kotlin.js.internal.BooleanCompanionObject;
  var copyOf_6 = Kotlin.kotlin.collections.copyOf_1qu12l$;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var kotlin_js_internal_StringCompanionObject = Kotlin.kotlin.js.internal.StringCompanionObject;
  var Char = Kotlin.BoxedChar;
  var PrimitiveClasses$charArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.charArrayClass;
  var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
  var PrimitiveClasses$doubleArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleArrayClass;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var PrimitiveClasses$floatArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatArrayClass;
  var Long = Kotlin.Long;
  var PrimitiveClasses$longArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.longArrayClass;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var PrimitiveClasses$intArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intArrayClass;
  var PrimitiveClasses$shortClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortClass;
  var PrimitiveClasses$shortArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortArrayClass;
  var PrimitiveClasses$byteClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteClass;
  var PrimitiveClasses$byteArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteArrayClass;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var PrimitiveClasses$booleanArrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanArrayClass;
  var kotlin = Kotlin.kotlin;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var Triple = Kotlin.kotlin.Triple;
  var coerceAtMost = Kotlin.kotlin.ranges.coerceAtMost_dqglrj$;
  var toChar = Kotlin.toChar;
  var concatToString = Kotlin.kotlin.text.concatToString_wlitf7$;
  var toByte_0 = Kotlin.kotlin.text.toByte_pdl1vz$;
  var toShort = Kotlin.kotlin.text.toShort_pdl1vz$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var isFinite = Kotlin.kotlin.isFinite_81szk$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var isFinite_0 = Kotlin.kotlin.isFinite_yrwdxr$;
  var single = Kotlin.kotlin.text.single_gw00vp$;
  var Throwable = Error;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toShort_0 = Kotlin.toShort;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var Map = Kotlin.kotlin.collections.Map;
  var throwUPAE = Kotlin.throwUPAE;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init;
  var List = Kotlin.kotlin.collections.List;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var asSequence = Kotlin.kotlin.collections.asSequence_abgq59$;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var zip = Kotlin.kotlin.collections.zip_r9t3v7$;
  var Grouping = Kotlin.kotlin.collections.Grouping;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_1 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var IllegalArgumentException_init_0 = Kotlin.kotlin.IllegalArgumentException_init;
  var IllegalArgumentException_init_1 = Kotlin.kotlin.IllegalArgumentException_init_dbl4no$;
  var getCallableRef = Kotlin.getCallableRef;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var Set = Kotlin.kotlin.collections.Set;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var Pair = Kotlin.kotlin.Pair;
  var L9007199254740991 = new Kotlin.Long(-1, 2097151);
  var numberToChar = Kotlin.numberToChar;
  var Math_0 = Math;
  var abs = Kotlin.kotlin.math.abs_s8cxhz$;
  var get_indices_0 = Kotlin.kotlin.collections.get_indices_l1lu5t$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var PrimitiveClasses$arrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.arrayClass;
  var findAssociatedObject = Kotlin.findAssociatedObject_yjf3nl$;
  SerialKind$ENUM.prototype = Object.create(SerialKind.prototype);
  SerialKind$ENUM.prototype.constructor = SerialKind$ENUM;
  SerialKind$CONTEXTUAL.prototype = Object.create(SerialKind.prototype);
  SerialKind$CONTEXTUAL.prototype.constructor = SerialKind$CONTEXTUAL;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  PrimitiveKind$BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$BOOLEAN.prototype.constructor = PrimitiveKind$BOOLEAN;
  PrimitiveKind$BYTE.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$BYTE.prototype.constructor = PrimitiveKind$BYTE;
  PrimitiveKind$CHAR.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$CHAR.prototype.constructor = PrimitiveKind$CHAR;
  PrimitiveKind$SHORT.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$SHORT.prototype.constructor = PrimitiveKind$SHORT;
  PrimitiveKind$INT.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$INT.prototype.constructor = PrimitiveKind$INT;
  PrimitiveKind$LONG.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$LONG.prototype.constructor = PrimitiveKind$LONG;
  PrimitiveKind$FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$FLOAT.prototype.constructor = PrimitiveKind$FLOAT;
  PrimitiveKind$DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$DOUBLE.prototype.constructor = PrimitiveKind$DOUBLE;
  PrimitiveKind$STRING.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$STRING.prototype.constructor = PrimitiveKind$STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  StructureKind$CLASS.prototype = Object.create(StructureKind.prototype);
  StructureKind$CLASS.prototype.constructor = StructureKind$CLASS;
  StructureKind$LIST.prototype = Object.create(StructureKind.prototype);
  StructureKind$LIST.prototype.constructor = StructureKind$LIST;
  StructureKind$MAP.prototype = Object.create(StructureKind.prototype);
  StructureKind$MAP.prototype.constructor = StructureKind$MAP;
  StructureKind$OBJECT.prototype = Object.create(StructureKind.prototype);
  StructureKind$OBJECT.prototype.constructor = StructureKind$OBJECT;
  PolymorphicKind.prototype = Object.create(SerialKind.prototype);
  PolymorphicKind.prototype.constructor = PolymorphicKind;
  PolymorphicKind$SEALED.prototype = Object.create(PolymorphicKind.prototype);
  PolymorphicKind$SEALED.prototype.constructor = PolymorphicKind$SEALED;
  PolymorphicKind$OPEN.prototype = Object.create(PolymorphicKind.prototype);
  PolymorphicKind$OPEN.prototype.constructor = PolymorphicKind$OPEN;
  PrimitiveArrayDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  PrimitiveArrayDescriptor.prototype.constructor = PrimitiveArrayDescriptor;
  ArrayClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayClassDesc.prototype.constructor = ArrayClassDesc;
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  NamedListClassDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  NamedListClassDescriptor.prototype.constructor = NamedListClassDescriptor;
  LinkedHashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  LinkedHashSetClassDesc.prototype.constructor = LinkedHashSetClassDesc;
  HashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  HashSetClassDesc.prototype.constructor = HashSetClassDesc;
  NamedMapClassDescriptor.prototype = Object.create(MapLikeDescriptor.prototype);
  NamedMapClassDescriptor.prototype.constructor = NamedMapClassDescriptor;
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc;
  HashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  HashMapClassDesc.prototype.constructor = HashMapClassDesc;
  ListLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  ListLikeSerializer.prototype.constructor = ListLikeSerializer;
  MapLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  MapLikeSerializer.prototype.constructor = MapLikeSerializer;
  PrimitiveArraySerializer.prototype = Object.create(ListLikeSerializer.prototype);
  PrimitiveArraySerializer.prototype.constructor = PrimitiveArraySerializer;
  ReferenceArraySerializer.prototype = Object.create(ListLikeSerializer.prototype);
  ReferenceArraySerializer.prototype.constructor = ReferenceArraySerializer;
  ArrayListSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  LinkedHashSetSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  LinkedHashSetSerializer.prototype.constructor = LinkedHashSetSerializer;
  HashSetSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  HashSetSerializer.prototype.constructor = HashSetSerializer;
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer;
  HashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  HashMapSerializer.prototype.constructor = HashMapSerializer;
  EnumDescriptor.prototype = Object.create(PluginGeneratedSerialDescriptor.prototype);
  EnumDescriptor.prototype.constructor = EnumDescriptor;
  ByteArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ByteArraySerializer_0.prototype.constructor = ByteArraySerializer_0;
  ByteArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ByteArrayBuilder.prototype.constructor = ByteArrayBuilder;
  ShortArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ShortArraySerializer_0.prototype.constructor = ShortArraySerializer_0;
  ShortArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ShortArrayBuilder.prototype.constructor = ShortArrayBuilder;
  IntArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  IntArraySerializer_0.prototype.constructor = IntArraySerializer_0;
  IntArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  IntArrayBuilder.prototype.constructor = IntArrayBuilder;
  LongArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  LongArraySerializer_0.prototype.constructor = LongArraySerializer_0;
  LongArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  LongArrayBuilder.prototype.constructor = LongArrayBuilder;
  FloatArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  FloatArraySerializer_0.prototype.constructor = FloatArraySerializer_0;
  FloatArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  FloatArrayBuilder.prototype.constructor = FloatArrayBuilder;
  DoubleArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  DoubleArraySerializer_0.prototype.constructor = DoubleArraySerializer_0;
  DoubleArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  DoubleArrayBuilder.prototype.constructor = DoubleArrayBuilder;
  CharArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  CharArraySerializer_0.prototype.constructor = CharArraySerializer_0;
  CharArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  CharArrayBuilder.prototype.constructor = CharArrayBuilder;
  BooleanArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  BooleanArraySerializer_0.prototype.constructor = BooleanArraySerializer_0;
  BooleanArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  BooleanArrayBuilder.prototype.constructor = BooleanArrayBuilder;
  IntDescriptor.prototype = Object.create(Migration.prototype);
  IntDescriptor.prototype.constructor = IntDescriptor;
  UnitDescriptor.prototype = Object.create(Migration.prototype);
  UnitDescriptor.prototype.constructor = UnitDescriptor;
  BooleanDescriptor.prototype = Object.create(Migration.prototype);
  BooleanDescriptor.prototype.constructor = BooleanDescriptor;
  ByteDescriptor.prototype = Object.create(Migration.prototype);
  ByteDescriptor.prototype.constructor = ByteDescriptor;
  ShortDescriptor.prototype = Object.create(Migration.prototype);
  ShortDescriptor.prototype.constructor = ShortDescriptor;
  LongDescriptor.prototype = Object.create(Migration.prototype);
  LongDescriptor.prototype.constructor = LongDescriptor;
  FloatDescriptor.prototype = Object.create(Migration.prototype);
  FloatDescriptor.prototype.constructor = FloatDescriptor;
  DoubleDescriptor.prototype = Object.create(Migration.prototype);
  DoubleDescriptor.prototype.constructor = DoubleDescriptor;
  CharDescriptor.prototype = Object.create(Migration.prototype);
  CharDescriptor.prototype.constructor = CharDescriptor;
  StringDescriptor.prototype = Object.create(Migration.prototype);
  StringDescriptor.prototype.constructor = StringDescriptor;
  NamedValueEncoder.prototype = Object.create(TaggedEncoder.prototype);
  NamedValueEncoder.prototype.constructor = NamedValueEncoder;
  NamedValueDecoder.prototype = Object.create(TaggedDecoder.prototype);
  NamedValueDecoder.prototype.constructor = NamedValueDecoder;
  MapEntrySerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  MapEntrySerializer_0.prototype.constructor = MapEntrySerializer_0;
  PairSerializer_0.prototype = Object.create(KeyValueSerializer.prototype);
  PairSerializer_0.prototype.constructor = PairSerializer_0;
  SerializationException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonDecodingException.prototype = Object.create(JsonException.prototype);
  JsonDecodingException.prototype.constructor = JsonDecodingException;
  JsonEncodingException.prototype = Object.create(JsonException.prototype);
  JsonEncodingException.prototype.constructor = JsonEncodingException;
  StreamingJsonDecoder.prototype = Object.create(AbstractDecoder.prototype);
  StreamingJsonDecoder.prototype.constructor = StreamingJsonDecoder;
  StreamingJsonEncoder.prototype = Object.create(AbstractEncoder.prototype);
  StreamingJsonEncoder.prototype.constructor = StreamingJsonEncoder;
  AbstractJsonTreeDecoder.prototype = Object.create(NamedValueDecoder.prototype);
  AbstractJsonTreeDecoder.prototype.constructor = AbstractJsonTreeDecoder;
  JsonPrimitiveDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonPrimitiveDecoder.prototype.constructor = JsonPrimitiveDecoder;
  JsonTreeDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeDecoder.prototype.constructor = JsonTreeDecoder;
  JsonTreeMapDecoder.prototype = Object.create(JsonTreeDecoder.prototype);
  JsonTreeMapDecoder.prototype.constructor = JsonTreeMapDecoder;
  JsonTreeListDecoder.prototype = Object.create(AbstractJsonTreeDecoder.prototype);
  JsonTreeListDecoder.prototype.constructor = JsonTreeListDecoder;
  AbstractJsonTreeEncoder.prototype = Object.create(NamedValueEncoder.prototype);
  AbstractJsonTreeEncoder.prototype.constructor = AbstractJsonTreeEncoder;
  JsonPrimitiveEncoder.prototype = Object.create(AbstractJsonTreeEncoder.prototype);
  JsonPrimitiveEncoder.prototype.constructor = JsonPrimitiveEncoder;
  JsonTreeEncoder.prototype = Object.create(AbstractJsonTreeEncoder.prototype);
  JsonTreeEncoder.prototype.constructor = JsonTreeEncoder;
  JsonTreeMapEncoder.prototype = Object.create(JsonTreeEncoder.prototype);
  JsonTreeMapEncoder.prototype.constructor = JsonTreeMapEncoder;
  JsonTreeListEncoder.prototype = Object.create(AbstractJsonTreeEncoder.prototype);
  JsonTreeListEncoder.prototype.constructor = JsonTreeListEncoder;
  WriteMode.prototype = Object.create(Enum.prototype);
  WriteMode.prototype.constructor = WriteMode;
  Json$Default.prototype = Object.create(Json.prototype);
  Json$Default.prototype.constructor = Json$Default;
  JsonImpl.prototype = Object.create(Json.prototype);
  JsonImpl.prototype.constructor = JsonImpl;
  SubtypeToDetectDefault.prototype = Object.create(JsonConfiguration.prototype);
  SubtypeToDetectDefault.prototype.constructor = SubtypeToDetectDefault;
  SubtypeToDetectStable.prototype = Object.create(JsonConfiguration.prototype);
  SubtypeToDetectStable.prototype.constructor = SubtypeToDetectStable;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  UpdateMode.prototype = Object.create(Enum.prototype);
  UpdateMode.prototype.constructor = UpdateMode;
  SerialModuleImpl.prototype = Object.create(SerializersModule.prototype);
  SerialModuleImpl.prototype.constructor = SerialModuleImpl;
  SerializerAlreadyRegisteredException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializerAlreadyRegisteredException.prototype.constructor = SerializerAlreadyRegisteredException;
  PolymorphicSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  PolymorphicSerializer.prototype.constructor = PolymorphicSerializer;
  SealedClassSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  SealedClassSerializer.prototype.constructor = SealedClassSerializer;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  DynamicObjectParser$DynamicInput.prototype = Object.create(NamedValueDecoder.prototype);
  DynamicObjectParser$DynamicInput.prototype.constructor = DynamicObjectParser$DynamicInput;
  DynamicObjectParser$DynamicMapInput.prototype = Object.create(DynamicObjectParser$DynamicInput.prototype);
  DynamicObjectParser$DynamicMapInput.prototype.constructor = DynamicObjectParser$DynamicMapInput;
  DynamicObjectParser$DynamicListInput.prototype = Object.create(DynamicObjectParser$DynamicInput.prototype);
  DynamicObjectParser$DynamicListInput.prototype.constructor = DynamicObjectParser$DynamicListInput;
  DynamicObjectEncoder$WriteMode.prototype = Object.create(Enum.prototype);
  DynamicObjectEncoder$WriteMode.prototype.constructor = DynamicObjectEncoder$WriteMode;
  DynamicObjectEncoder.prototype = Object.create(AbstractEncoder.prototype);
  DynamicObjectEncoder.prototype.constructor = DynamicObjectEncoder;
  DynamicPrimitiveEncoder.prototype = Object.create(AbstractEncoder.prototype);
  DynamicPrimitiveEncoder.prototype.constructor = DynamicPrimitiveEncoder;
  function Serializable(with_0) {
    if (with_0 === void 0)
      with_0 = getKClass(KSerializer);
    this.with = with_0;
  }
  Serializable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Serializable',
    interfaces: [Annotation]
  };
  function Serializer(forClass) {
    this.forClass = forClass;
  }
  Serializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Serializer',
    interfaces: [Annotation]
  };
  function SerialName(value) {
    this.value = value;
  }
  SerialName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerialName',
    interfaces: [Annotation]
  };
  function Required() {
  }
  Required.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Required',
    interfaces: [Annotation]
  };
  function Transient() {
  }
  Transient.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transient',
    interfaces: [Annotation]
  };
  function SerialInfo() {
  }
  SerialInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerialInfo',
    interfaces: [Annotation]
  };
  function ContextualSerialization(forClasses) {
    this.forClasses = forClasses;
  }
  ContextualSerialization.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContextualSerialization',
    interfaces: [Annotation]
  };
  function Contextual() {
  }
  Contextual.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Contextual',
    interfaces: [Annotation]
  };
  function UseContextualSerialization(forClasses) {
    this.forClasses = forClasses;
  }
  UseContextualSerialization.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UseContextualSerialization',
    interfaces: [Annotation]
  };
  function UseSerializers(serializerClasses) {
    this.serializerClasses = serializerClasses;
  }
  UseSerializers.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UseSerializers',
    interfaces: [Annotation]
  };
  function Polymorphic() {
  }
  Polymorphic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Polymorphic',
    interfaces: [Annotation]
  };
  function ExperimentalSerializationApi() {
  }
  ExperimentalSerializationApi.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExperimentalSerializationApi',
    interfaces: [Annotation]
  };
  function InternalSerializationApi() {
  }
  InternalSerializationApi.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InternalSerializationApi',
    interfaces: [Annotation]
  };
  function get_nullable($receiver) {
    var tmp$;
    return $receiver.descriptor.isNullable ? Kotlin.isType(tmp$ = $receiver, KSerializer) ? tmp$ : throwCCE() : new NullableSerializer($receiver);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function serializer($receiver) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_0($receiver) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_1($receiver) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_2($receiver) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_3($receiver) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_4($receiver) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_5($receiver) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_6($receiver) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_7($receiver) {
    return UnitSerializer_getInstance();
  }
  function serializer_8($receiver) {
    return StringSerializer_getInstance();
  }
  var ArraySerializer = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.builtins.ArraySerializer_furkhx$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var ArraySerializer = _.kotlinx.serialization.builtins.ArraySerializer_8tn5u0$;
    return function (T_0, isT, E_0, isE, elementSerializer) {
      return ArraySerializer(getKClass(T_0), elementSerializer);
    };
  }));
  function ArraySerializer_0(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function SetSerializer(elementSerializer) {
    return new LinkedHashSetSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function UnitSerializer() {
    return serializer_7(Unit);
  }
  function get_list($receiver) {
    return ListSerializer($receiver);
  }
  function get_set($receiver) {
    return SetSerializer($receiver);
  }
  function LongAsStringSerializer() {
    LongAsStringSerializer_instance = this;
    this.descriptor_hs6dkn$_0 = PrimitiveSerialDescriptor('kotlinx.serialization.LongAsStringSerializer', PrimitiveKind$STRING_getInstance());
  }
  Object.defineProperty(LongAsStringSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_hs6dkn$_0;
    }
  });
  LongAsStringSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeString_61zpoe$(value.toString());
  };
  LongAsStringSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return toLong(decoder.decodeString());
  };
  LongAsStringSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LongAsStringSerializer',
    interfaces: [KSerializer]
  };
  var LongAsStringSerializer_instance = null;
  function LongAsStringSerializer_getInstance() {
    if (LongAsStringSerializer_instance === null) {
      new LongAsStringSerializer();
    }return LongAsStringSerializer_instance;
  }
  function ContextualSerializer(serializableClass, fallbackSerializer, typeParametersSerializers) {
    this.serializableClass_0 = serializableClass;
    this.fallbackSerializer_0 = fallbackSerializer;
    this.typeParametersSerializers_0 = typeParametersSerializers;
    this.descriptor_ay3qfp$_0 = withContext(buildSerialDescriptor('kotlinx.serialization.ContextualSerializer', SerialKind$CONTEXTUAL_getInstance(), []), this.serializableClass_0);
  }
  Object.defineProperty(ContextualSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_ay3qfp$_0;
    }
  });
  ContextualSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var tmp$, tmp$_0, tmp$_1;
    var clz = Kotlin.getKClassFromExpression(value);
    var serializer = (tmp$_0 = (tmp$ = encoder.serializersModule.getContextual_lmshww$(clz)) != null ? tmp$ : this.fallbackSerializer_0) != null ? tmp$_0 : serializerNotRegistered(this.serializableClass_0);
    encoder.encodeSerializableValue_tf03ej$(Kotlin.isType(tmp$_1 = serializer, SerializationStrategy) ? tmp$_1 : throwCCE(), value);
  };
  ContextualSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var tmp$, tmp$_0;
    var serializer = (tmp$_0 = (tmp$ = decoder.serializersModule.getContextual_lmshww$(this.serializableClass_0)) != null ? tmp$ : this.fallbackSerializer_0) != null ? tmp$_0 : serializerNotRegistered(this.serializableClass_0);
    return decoder.decodeSerializableValue_w63s0f$(serializer);
  };
  ContextualSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContextualSerializer',
    interfaces: [KSerializer]
  };
  function ContextualSerializer_init(serializableClass, $this) {
    $this = $this || Object.create(ContextualSerializer.prototype);
    ContextualSerializer.call($this, serializableClass, null, EMPTY_SERIALIZER_ARRAY);
    return $this;
  }
  function get_capturedKClass($receiver) {
    if (Kotlin.isType($receiver, ContextDescriptor))
      return $receiver.kClass;
    else if (Kotlin.isType($receiver, SerialDescriptorForNullable))
      return get_capturedKClass($receiver.original_8be2vx$);
    else
      return null;
  }
  function getContextualDescriptor($receiver, descriptor) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = get_capturedKClass(descriptor)) != null) {
      var tmp$_1;
      tmp$_0 = (tmp$_1 = $receiver.getContextual_lmshww$(tmp$)) != null ? tmp$_1.descriptor : null;
    } else
      tmp$_0 = null;
    return tmp$_0;
  }
  function getPolymorphicDescriptors($receiver, descriptor) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = get_capturedKClass(descriptor);
    if (tmp$ == null) {
      return emptyList();
    }var kClass = tmp$;
    var $receiver_0 = (tmp$_1 = (Kotlin.isType(tmp$_0 = $receiver, SerialModuleImpl) ? tmp$_0 : throwCCE()).polyBase2Serializers.get_11rb$(kClass)) != null ? tmp$_1.values : null;
    var $receiver_1 = $receiver_0 != null ? $receiver_0 : emptyList();
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_2;
    tmp$_2 = $receiver_1.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      destination.add_11rb$(item.descriptor);
    }
    return destination;
  }
  function withContext($receiver, context) {
    return new ContextDescriptor($receiver, context);
  }
  function ContextDescriptor(original, kClass) {
    this.original_0 = original;
    this.kClass = kClass;
    this.serialName_nfhor0$_0 = this.original_0.serialName + '<' + toString(this.kClass.simpleName) + '>';
  }
  Object.defineProperty(ContextDescriptor.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return this.serialName_nfhor0$_0;
    }
  });
  ContextDescriptor.prototype.equals = function (other) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_0 = Kotlin.isType(tmp$ = other, ContextDescriptor) ? tmp$ : null;
    if (tmp$_0 == null) {
      return false;
    }var another = tmp$_0;
    return equals(this.original_0, another.original_0) && ((tmp$_1 = another.kClass) != null ? tmp$_1.equals(this.kClass) : null);
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.kClass.hashCode();
    result = (31 * result | 0) + hashCode(this.serialName) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.kClass + ', original: ' + this.original_0 + ')';
  };
  Object.defineProperty(ContextDescriptor.prototype, 'annotations', {
    get: function () {
      return this.original_0.annotations;
    }
  });
  Object.defineProperty(ContextDescriptor.prototype, 'elementsCount', {
    get: function () {
      return this.original_0.elementsCount;
    }
  });
  Object.defineProperty(ContextDescriptor.prototype, 'isNullable', {
    get: function () {
      return this.original_0.isNullable;
    }
  });
  Object.defineProperty(ContextDescriptor.prototype, 'kind', {
    get: function () {
      return this.original_0.kind;
    }
  });
  ContextDescriptor.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.original_0.getElementAnnotations_za3lpa$(index);
  };
  ContextDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.original_0.getElementDescriptor_za3lpa$(index);
  };
  ContextDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.original_0.getElementIndex_61zpoe$(name);
  };
  ContextDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return this.original_0.getElementName_za3lpa$(index);
  };
  ContextDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.original_0.isElementOptional_za3lpa$(index);
  };
  ContextDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContextDescriptor',
    interfaces: [SerialDescriptor]
  };
  function Iterable$ObjectLiteral(closure$iterator) {
    this.closure$iterator = closure$iterator;
  }
  Iterable$ObjectLiteral.prototype.iterator = function () {
    return this.closure$iterator();
  };
  Iterable$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Iterable]};
  function SerialDescriptor() {
  }
  Object.defineProperty(SerialDescriptor.prototype, 'isNullable', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  Object.defineProperty(SerialDescriptor.prototype, 'annotations', {
    configurable: true,
    get: function () {
      return emptyList();
    }
  });
  SerialDescriptor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SerialDescriptor',
    interfaces: []
  };
  function get_elementDescriptors$lambda$ObjectLiteral(this$elementDescriptors) {
    this.this$elementDescriptors = this$elementDescriptors;
    this.elementsLeft_0 = this$elementDescriptors.elementsCount;
  }
  get_elementDescriptors$lambda$ObjectLiteral.prototype.hasNext = function () {
    return this.elementsLeft_0 > 0;
  };
  get_elementDescriptors$lambda$ObjectLiteral.prototype.next = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = this.this$elementDescriptors.elementsCount;
    tmp$_0 = (tmp$ = this.elementsLeft_0, this.elementsLeft_0 = tmp$ - 1 | 0, tmp$);
    return this.this$elementDescriptors.getElementDescriptor_za3lpa$(tmp$_1 - tmp$_0 | 0);
  };
  get_elementDescriptors$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  function get_elementDescriptors$lambda(this$elementDescriptors) {
    return function () {
      return new get_elementDescriptors$lambda$ObjectLiteral(this$elementDescriptors);
    };
  }
  function get_elementDescriptors($receiver) {
    return new Iterable$ObjectLiteral(get_elementDescriptors$lambda($receiver));
  }
  function get_elementNames$lambda$ObjectLiteral(this$elementNames) {
    this.this$elementNames = this$elementNames;
    this.elementsLeft_0 = this$elementNames.elementsCount;
  }
  get_elementNames$lambda$ObjectLiteral.prototype.hasNext = function () {
    return this.elementsLeft_0 > 0;
  };
  get_elementNames$lambda$ObjectLiteral.prototype.next = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = this.this$elementNames.elementsCount;
    tmp$_0 = (tmp$ = this.elementsLeft_0, this.elementsLeft_0 = tmp$ - 1 | 0, tmp$);
    return this.this$elementNames.getElementName_za3lpa$(tmp$_1 - tmp$_0 | 0);
  };
  get_elementNames$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Iterator]
  };
  function get_elementNames$lambda(this$elementNames) {
    return function () {
      return new get_elementNames$lambda$ObjectLiteral(this$elementNames);
    };
  }
  function get_elementNames($receiver) {
    return new Iterable$ObjectLiteral(get_elementNames$lambda($receiver));
  }
  var elementsHashCodeBy$lambda = wrapFunction(function () {
    var hashCode = Kotlin.hashCode;
    return function (closure$selector) {
      return function (hash, element) {
        var tmp$ = 31 * hash | 0;
        var $receiver = closure$selector(element);
        var tmp$_0;
        return tmp$ + ((tmp$_0 = $receiver != null ? hashCode($receiver) : null) != null ? tmp$_0 : 0) | 0;
      };
    };
  });
  function buildClassSerialDescriptor$lambda($receiver) {
    return Unit;
  }
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    if (builderAction === void 0)
      builderAction = buildClassSerialDescriptor$lambda;
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init(message.toString());
    }var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, StructureKind$CLASS_getInstance(), sdBuilder.elementNames_8be2vx$.size, toList(typeParameters), sdBuilder);
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init(message.toString());
    }return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda($receiver) {
    return Unit;
  }
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    if (builder === void 0)
      builder = buildSerialDescriptor$lambda;
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init(message.toString());
    }if (!!equals(kind, StructureKind$CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init(message_0.toString());
    }var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.elementNames_8be2vx$.size, toList(typeParameters), sdBuilder);
  }
  var serialDescriptor = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.descriptors.serialDescriptor_287e2$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return (Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE()).descriptor;
    };
  }));
  function serialDescriptor_0(type) {
    return serializer_11(type).descriptor;
  }
  function listSerialDescriptor(elementDescriptor) {
    return new ArrayListClassDesc(elementDescriptor);
  }
  var listSerialDescriptor_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.descriptors.listSerialDescriptor_287e2$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var listSerialDescriptor = _.kotlinx.serialization.descriptors.listSerialDescriptor_24f42q$;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return listSerialDescriptor((Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE()).descriptor);
    };
  }));
  function mapSerialDescriptor(keyDescriptor, valueDescriptor) {
    return new HashMapClassDesc(keyDescriptor, valueDescriptor);
  }
  var mapSerialDescriptor_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.descriptors.mapSerialDescriptor_q3lmfv$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var mapSerialDescriptor = _.kotlinx.serialization.descriptors.mapSerialDescriptor_2ezn58$;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (K_0, isK, V_0, isV) {
      var tmp$;
      var tmp$_0;
      return mapSerialDescriptor((Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(K_0)), KSerializer) ? tmp$ : throwCCE()).descriptor, (Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(V_0)), KSerializer) ? tmp$_0 : throwCCE()).descriptor);
    };
  }));
  function setSerialDescriptor(elementDescriptor) {
    return new HashSetClassDesc(elementDescriptor);
  }
  var setSerialDescriptor_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.descriptors.setSerialDescriptor_287e2$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var setSerialDescriptor = _.kotlinx.serialization.descriptors.setSerialDescriptor_24f42q$;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return setSerialDescriptor((Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE()).descriptor);
    };
  }));
  function get_nullable_0($receiver) {
    if ($receiver.isNullable)
      return $receiver;
    return new SerialDescriptorForNullable($receiver);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.serialName = serialName;
    this.isNullable = false;
    this.annotations = emptyList();
    this.elementNames_8be2vx$ = ArrayList_init_0();
    this.uniqueNames_0 = HashSet_init();
    this.elementDescriptors_8be2vx$ = ArrayList_init_0();
    this.elementAnnotations_8be2vx$ = ArrayList_init_0();
    this.elementOptionality_8be2vx$ = ArrayList_init_0();
  }
  ClassSerialDescriptorBuilder.prototype.element_vxrguq$ = function (elementName, descriptor, annotations, isOptional) {
    if (annotations === void 0)
      annotations = emptyList();
    if (isOptional === void 0)
      isOptional = false;
    if (!this.uniqueNames_0.add_11rb$(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered";
      throw IllegalArgumentException_init(message.toString());
    }this.elementNames_8be2vx$.add_11rb$(elementName);
    this.elementDescriptors_8be2vx$.add_11rb$(descriptor);
    this.elementAnnotations_8be2vx$.add_11rb$(annotations);
    this.elementOptionality_8be2vx$.add_11rb$(isOptional);
  };
  ClassSerialDescriptorBuilder.prototype.descriptor_287e2$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.descriptor_287e2$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return (Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE()).descriptor;
    };
  }));
  ClassSerialDescriptorBuilder.prototype.listDescriptor_24f42q$ = function (typeDescriptor) {
    return listSerialDescriptor(typeDescriptor);
  };
  ClassSerialDescriptorBuilder.prototype.listDescriptor_287e2$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.listDescriptor_287e2$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var listSerialDescriptor = _.kotlinx.serialization.descriptors.listSerialDescriptor_24f42q$;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return listSerialDescriptor((Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE()).descriptor);
    };
  }));
  ClassSerialDescriptorBuilder.prototype.mapDescriptor_2ezn58$ = function (keyDescriptor, valueDescriptor) {
    return new HashMapClassDesc(keyDescriptor, valueDescriptor);
  };
  ClassSerialDescriptorBuilder.prototype.mapDescriptor_q3lmfv$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.mapDescriptor_q3lmfv$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var mapSerialDescriptor = _.kotlinx.serialization.descriptors.mapSerialDescriptor_2ezn58$;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (K_0, isK, V_0, isV) {
      var tmp$;
      var tmp$_0;
      return mapSerialDescriptor((Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(K_0)), KSerializer) ? tmp$ : throwCCE()).descriptor, (Kotlin.isType(tmp$_0 = serializer(getReifiedTypeParameterKType(V_0)), KSerializer) ? tmp$_0 : throwCCE()).descriptor);
    };
  }));
  ClassSerialDescriptorBuilder.prototype.setDescriptor_24f42q$ = function (typeDescriptor) {
    return new HashSetClassDesc(typeDescriptor);
  };
  ClassSerialDescriptorBuilder.prototype.setDescriptor_287e2$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.setDescriptor_287e2$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var setSerialDescriptor = _.kotlinx.serialization.descriptors.setSerialDescriptor_24f42q$;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return setSerialDescriptor((Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE()).descriptor);
    };
  }));
  ClassSerialDescriptorBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClassSerialDescriptorBuilder',
    interfaces: []
  };
  var element = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.descriptors.element_i7uu7a$', wrapFunction(function () {
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, elementName, annotations, isOptional) {
      if (annotations === void 0)
        annotations = emptyList();
      if (isOptional === void 0)
        isOptional = false;
      var tmp$;
      var descriptor = (Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE()).descriptor;
      $receiver.element_vxrguq$(elementName, descriptor, annotations, isOptional);
    };
  }));
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.serialName_btmdyn$_0 = serialName;
    this.kind_589tly$_0 = kind;
    this.elementsCount_wewqc2$_0 = elementsCount;
    this.annotations_efqcf6$_0 = builder.annotations;
    this.elementNames_0 = copyToArray(builder.elementNames_8be2vx$);
    this.elementDescriptors_0 = compactArray(builder.elementDescriptors_8be2vx$);
    this.elementAnnotations_0 = copyToArray(builder.elementAnnotations_8be2vx$);
    this.elementOptionality_0 = toBooleanArray(builder.elementOptionality_8be2vx$);
    var $receiver = withIndex(this.elementNames_0);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item.value, item.index));
    }
    this.name2Index_0 = toMap(destination);
    this.typeParametersDescriptors_0 = compactArray(typeParameters);
    this._hashCode_6e2cwc$_0 = lazy(SerialDescriptorImpl$_hashCode$lambda(this));
  }
  Object.defineProperty(SerialDescriptorImpl.prototype, 'serialName', {
    get: function () {
      return this.serialName_btmdyn$_0;
    }
  });
  Object.defineProperty(SerialDescriptorImpl.prototype, 'kind', {
    get: function () {
      return this.kind_589tly$_0;
    }
  });
  Object.defineProperty(SerialDescriptorImpl.prototype, 'elementsCount', {
    get: function () {
      return this.elementsCount_wewqc2$_0;
    }
  });
  Object.defineProperty(SerialDescriptorImpl.prototype, 'annotations', {
    configurable: true,
    get: function () {
      return this.annotations_efqcf6$_0;
    }
  });
  Object.defineProperty(SerialDescriptorImpl.prototype, '_hashCode_0', {
    configurable: true,
    get: function () {
      return this._hashCode_6e2cwc$_0.value;
    }
  });
  SerialDescriptorImpl.prototype.getElementName_za3lpa$ = function (index) {
    return getChecked(this.elementNames_0, index);
  };
  SerialDescriptorImpl.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.name2Index_0.get_11rb$(name)) != null ? tmp$ : -3;
  };
  SerialDescriptorImpl.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return getChecked(this.elementAnnotations_0, index);
  };
  SerialDescriptorImpl.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return getChecked(this.elementDescriptors_0, index);
  };
  SerialDescriptorImpl.prototype.isElementOptional_za3lpa$ = function (index) {
    return getChecked_0(this.elementOptionality_0, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var equalsImpl$result;
    equalsImpl$break: do {
      var tmp$;
      if (this === other) {
        equalsImpl$result = true;
        break equalsImpl$break;
      }if (!Kotlin.isType(other, SerialDescriptorImpl)) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }if (!equals(this.serialName, other.serialName)) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }if (!contentEquals(this.typeParametersDescriptors_0, other.typeParametersDescriptors_0)) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }if (this.elementsCount !== other.elementsCount) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }tmp$ = this.elementsCount;
      for (var index = 0; index < tmp$; index++) {
        if (!equals(this.getElementDescriptor_za3lpa$(index).serialName, other.getElementDescriptor_za3lpa$(index).serialName)) {
          equalsImpl$result = false;
          break equalsImpl$break;
        }if (!equals(this.getElementDescriptor_za3lpa$(index).kind, other.getElementDescriptor_za3lpa$(index).kind)) {
          equalsImpl$result = false;
          break equalsImpl$break;
        }}
      equalsImpl$result = true;
    }
     while (false);
    return equalsImpl$result;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return this._hashCode_0;
  };
  function SerialDescriptorImpl$toString$lambda(this$SerialDescriptorImpl) {
    return function (it) {
      return this$SerialDescriptorImpl.getElementName_za3lpa$(it) + ': ' + this$SerialDescriptorImpl.getElementDescriptor_za3lpa$(it).serialName;
    };
  }
  SerialDescriptorImpl.prototype.toString = function () {
    return joinToString(until(0, this.elementsCount), ', ', this.serialName + '(', ')', void 0, void 0, SerialDescriptorImpl$toString$lambda(this));
  };
  function SerialDescriptorImpl$_hashCode$lambda(this$SerialDescriptorImpl) {
    return function () {
      var $receiver = this$SerialDescriptorImpl;
      var typeParams = this$SerialDescriptorImpl.typeParametersDescriptors_0;
      var result = hashCode($receiver.serialName);
      result = (31 * result | 0) + contentHashCode(typeParams) | 0;
      var elementDescriptors = get_elementDescriptors($receiver);
      var tmp$;
      var accumulator = 1;
      tmp$ = elementDescriptors.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0 = 31 * accumulator | 0;
        var $receiver_0 = element.serialName;
        var tmp$_1;
        accumulator = tmp$_0 + ((tmp$_1 = $receiver_0 != null ? hashCode($receiver_0) : null) != null ? tmp$_1 : 0) | 0;
      }
      var namesHash = accumulator;
      var tmp$_2;
      var accumulator_0 = 1;
      tmp$_2 = elementDescriptors.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        var tmp$_3 = 31 * accumulator_0 | 0;
        var $receiver_1 = element_0.kind;
        var tmp$_4;
        accumulator_0 = tmp$_3 + ((tmp$_4 = $receiver_1 != null ? hashCode($receiver_1) : null) != null ? tmp$_4 : 0) | 0;
      }
      var kindHash = accumulator_0;
      result = (31 * result | 0) + namesHash | 0;
      result = (31 * result | 0) + kindHash | 0;
      return result;
    };
  }
  SerialDescriptorImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerialDescriptorImpl',
    interfaces: [SerialDescriptor]
  };
  function SerialKind() {
  }
  function SerialKind$ENUM() {
    SerialKind$ENUM_instance = this;
    SerialKind.call(this);
  }
  SerialKind$ENUM.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ENUM',
    interfaces: [SerialKind]
  };
  var SerialKind$ENUM_instance = null;
  function SerialKind$ENUM_getInstance() {
    if (SerialKind$ENUM_instance === null) {
      new SerialKind$ENUM();
    }return SerialKind$ENUM_instance;
  }
  function SerialKind$CONTEXTUAL() {
    SerialKind$CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  SerialKind$CONTEXTUAL.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CONTEXTUAL',
    interfaces: [SerialKind]
  };
  var SerialKind$CONTEXTUAL_instance = null;
  function SerialKind$CONTEXTUAL_getInstance() {
    if (SerialKind$CONTEXTUAL_instance === null) {
      new SerialKind$CONTEXTUAL();
    }return SerialKind$CONTEXTUAL_instance;
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(Kotlin.getKClassFromExpression(this).simpleName);
  };
  SerialKind.prototype.hashCode = function () {
    return hashCode(this.toString());
  };
  SerialKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerialKind',
    interfaces: []
  };
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function PrimitiveKind$BOOLEAN() {
    PrimitiveKind$BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$BOOLEAN.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BOOLEAN',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$BOOLEAN_instance = null;
  function PrimitiveKind$BOOLEAN_getInstance() {
    if (PrimitiveKind$BOOLEAN_instance === null) {
      new PrimitiveKind$BOOLEAN();
    }return PrimitiveKind$BOOLEAN_instance;
  }
  function PrimitiveKind$BYTE() {
    PrimitiveKind$BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$BYTE.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BYTE',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$BYTE_instance = null;
  function PrimitiveKind$BYTE_getInstance() {
    if (PrimitiveKind$BYTE_instance === null) {
      new PrimitiveKind$BYTE();
    }return PrimitiveKind$BYTE_instance;
  }
  function PrimitiveKind$CHAR() {
    PrimitiveKind$CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$CHAR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CHAR',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$CHAR_instance = null;
  function PrimitiveKind$CHAR_getInstance() {
    if (PrimitiveKind$CHAR_instance === null) {
      new PrimitiveKind$CHAR();
    }return PrimitiveKind$CHAR_instance;
  }
  function PrimitiveKind$SHORT() {
    PrimitiveKind$SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$SHORT.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SHORT',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$SHORT_instance = null;
  function PrimitiveKind$SHORT_getInstance() {
    if (PrimitiveKind$SHORT_instance === null) {
      new PrimitiveKind$SHORT();
    }return PrimitiveKind$SHORT_instance;
  }
  function PrimitiveKind$INT() {
    PrimitiveKind$INT_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$INT.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'INT',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$INT_instance = null;
  function PrimitiveKind$INT_getInstance() {
    if (PrimitiveKind$INT_instance === null) {
      new PrimitiveKind$INT();
    }return PrimitiveKind$INT_instance;
  }
  function PrimitiveKind$LONG() {
    PrimitiveKind$LONG_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$LONG.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LONG',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$LONG_instance = null;
  function PrimitiveKind$LONG_getInstance() {
    if (PrimitiveKind$LONG_instance === null) {
      new PrimitiveKind$LONG();
    }return PrimitiveKind$LONG_instance;
  }
  function PrimitiveKind$FLOAT() {
    PrimitiveKind$FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$FLOAT.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FLOAT',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$FLOAT_instance = null;
  function PrimitiveKind$FLOAT_getInstance() {
    if (PrimitiveKind$FLOAT_instance === null) {
      new PrimitiveKind$FLOAT();
    }return PrimitiveKind$FLOAT_instance;
  }
  function PrimitiveKind$DOUBLE() {
    PrimitiveKind$DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$DOUBLE.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DOUBLE',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$DOUBLE_instance = null;
  function PrimitiveKind$DOUBLE_getInstance() {
    if (PrimitiveKind$DOUBLE_instance === null) {
      new PrimitiveKind$DOUBLE();
    }return PrimitiveKind$DOUBLE_instance;
  }
  function PrimitiveKind$STRING() {
    PrimitiveKind$STRING_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$STRING.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'STRING',
    interfaces: [PrimitiveKind]
  };
  var PrimitiveKind$STRING_instance = null;
  function PrimitiveKind$STRING_getInstance() {
    if (PrimitiveKind$STRING_instance === null) {
      new PrimitiveKind$STRING();
    }return PrimitiveKind$STRING_instance;
  }
  PrimitiveKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrimitiveKind',
    interfaces: [SerialKind]
  };
  function StructureKind() {
    SerialKind.call(this);
  }
  function StructureKind$CLASS() {
    StructureKind$CLASS_instance = this;
    StructureKind.call(this);
  }
  StructureKind$CLASS.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CLASS',
    interfaces: [StructureKind]
  };
  var StructureKind$CLASS_instance = null;
  function StructureKind$CLASS_getInstance() {
    if (StructureKind$CLASS_instance === null) {
      new StructureKind$CLASS();
    }return StructureKind$CLASS_instance;
  }
  function StructureKind$LIST() {
    StructureKind$LIST_instance = this;
    StructureKind.call(this);
  }
  StructureKind$LIST.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LIST',
    interfaces: [StructureKind]
  };
  var StructureKind$LIST_instance = null;
  function StructureKind$LIST_getInstance() {
    if (StructureKind$LIST_instance === null) {
      new StructureKind$LIST();
    }return StructureKind$LIST_instance;
  }
  function StructureKind$MAP() {
    StructureKind$MAP_instance = this;
    StructureKind.call(this);
  }
  StructureKind$MAP.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MAP',
    interfaces: [StructureKind]
  };
  var StructureKind$MAP_instance = null;
  function StructureKind$MAP_getInstance() {
    if (StructureKind$MAP_instance === null) {
      new StructureKind$MAP();
    }return StructureKind$MAP_instance;
  }
  function StructureKind$OBJECT() {
    StructureKind$OBJECT_instance = this;
    StructureKind.call(this);
  }
  StructureKind$OBJECT.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'OBJECT',
    interfaces: [StructureKind]
  };
  var StructureKind$OBJECT_instance = null;
  function StructureKind$OBJECT_getInstance() {
    if (StructureKind$OBJECT_instance === null) {
      new StructureKind$OBJECT();
    }return StructureKind$OBJECT_instance;
  }
  StructureKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StructureKind',
    interfaces: [SerialKind]
  };
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function PolymorphicKind$SEALED() {
    PolymorphicKind$SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  PolymorphicKind$SEALED.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SEALED',
    interfaces: [PolymorphicKind]
  };
  var PolymorphicKind$SEALED_instance = null;
  function PolymorphicKind$SEALED_getInstance() {
    if (PolymorphicKind$SEALED_instance === null) {
      new PolymorphicKind$SEALED();
    }return PolymorphicKind$SEALED_instance;
  }
  function PolymorphicKind$OPEN() {
    PolymorphicKind$OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  PolymorphicKind$OPEN.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'OPEN',
    interfaces: [PolymorphicKind]
  };
  var PolymorphicKind$OPEN_instance = null;
  function PolymorphicKind$OPEN_getInstance() {
    if (PolymorphicKind$OPEN_instance === null) {
      new PolymorphicKind$OPEN();
    }return PolymorphicKind$OPEN_instance;
  }
  PolymorphicKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolymorphicKind',
    interfaces: [SerialKind]
  };
  function UnionKind() {
    UnionKind_instance = this;
  }
  Object.defineProperty(UnionKind.prototype, 'ENUM_KIND', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init('Should not be called'.toString());
    }
  });
  Object.defineProperty(UnionKind.prototype, 'CONTEXTUAL', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init('Should not be called'.toString());
    }
  });
  UnionKind.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UnionKind',
    interfaces: []
  };
  var UnionKind_instance = null;
  function UnionKind_getInstance() {
    if (UnionKind_instance === null) {
      new UnionKind();
    }return UnionKind_instance;
  }
  function AbstractDecoder() {
    this.updateMode_koclvo$_0 = UpdateMode$OVERWRITE_getInstance();
  }
  Object.defineProperty(AbstractDecoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return EmptySerializersModule;
    }
  });
  Object.defineProperty(AbstractDecoder.prototype, 'updateMode', {
    configurable: true,
    get: function () {
      return this.updateMode_koclvo$_0;
    }
  });
  AbstractDecoder.prototype.decodeValue = function () {
    throw SerializationException_init_0(Kotlin.getKClassFromExpression(this).toString() + " can't retrieve untyped values");
  };
  AbstractDecoder.prototype.decodeNotNullMark = function () {
    return true;
  };
  AbstractDecoder.prototype.decodeNull = function () {
    return null;
  };
  AbstractDecoder.prototype.decodeBoolean = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'boolean' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeByte = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeShort = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeInt = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeLong = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.decodeValue(), Kotlin.Long) ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeFloat = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeDouble = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeChar = function () {
    var tmp$;
    return Kotlin.isChar(tmp$ = this.decodeValue()) ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeString = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'string' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeEnum_24f42q$ = function (enumDescriptor) {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  AbstractDecoder.prototype.decodeSerializableValue_19c8k5$$default = function (deserializer, previousValue) {
    return this.decodeSerializableValue_w63s0f$(deserializer);
  };
  AbstractDecoder.prototype.decodeSerializableValue_19c8k5$ = function (deserializer, previousValue, callback$default) {
    if (previousValue === void 0)
      previousValue = null;
    return callback$default ? callback$default(deserializer, previousValue) : this.decodeSerializableValue_19c8k5$$default(deserializer, previousValue);
  };
  AbstractDecoder.prototype.beginStructure_jvp2sb$ = function (descriptor, typeParams) {
    return this;
  };
  AbstractDecoder.prototype.endStructure_24f42q$ = function (descriptor) {
  };
  AbstractDecoder.prototype.decodeBooleanElement_szpzho$ = function (descriptor, index) {
    return this.decodeBoolean();
  };
  AbstractDecoder.prototype.decodeByteElement_szpzho$ = function (descriptor, index) {
    return this.decodeByte();
  };
  AbstractDecoder.prototype.decodeShortElement_szpzho$ = function (descriptor, index) {
    return this.decodeShort();
  };
  AbstractDecoder.prototype.decodeIntElement_szpzho$ = function (descriptor, index) {
    return this.decodeInt();
  };
  AbstractDecoder.prototype.decodeLongElement_szpzho$ = function (descriptor, index) {
    return this.decodeLong();
  };
  AbstractDecoder.prototype.decodeFloatElement_szpzho$ = function (descriptor, index) {
    return this.decodeFloat();
  };
  AbstractDecoder.prototype.decodeDoubleElement_szpzho$ = function (descriptor, index) {
    return this.decodeDouble();
  };
  AbstractDecoder.prototype.decodeCharElement_szpzho$ = function (descriptor, index) {
    return this.decodeChar();
  };
  AbstractDecoder.prototype.decodeStringElement_szpzho$ = function (descriptor, index) {
    return this.decodeString();
  };
  AbstractDecoder.prototype.decodeSerializableElement_12e8id$$default = function (descriptor, index, deserializer, previousValue) {
    return this.decodeSerializableValue_19c8k5$(deserializer, previousValue);
  };
  AbstractDecoder.prototype.decodeNullableSerializableElement_8viuyw$$default = function (descriptor, index, deserializer, previousValue) {
    var isNullabilitySupported = deserializer.descriptor.isNullable;
    return isNullabilitySupported || this.decodeNotNullMark() ? this.decodeSerializableValue_19c8k5$(deserializer, previousValue) : this.decodeNull();
  };
  AbstractDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractDecoder',
    interfaces: [CompositeDecoder, Decoder]
  };
  function AbstractEncoder() {
  }
  Object.defineProperty(AbstractEncoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return EmptySerializersModule;
    }
  });
  AbstractEncoder.prototype.beginStructure_jvp2sb$ = function (descriptor, typeSerializers) {
    return this;
  };
  AbstractEncoder.prototype.endStructure_24f42q$ = function (descriptor) {
  };
  AbstractEncoder.prototype.encodeElement_szpzho$ = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.encodeValue_za3rmp$ = function (value) {
    throw SerializationException_init_0('Non-serializable ' + Kotlin.getKClassFromExpression(value) + ' is not supported by ' + Kotlin.getKClassFromExpression(this) + ' encoder');
  };
  AbstractEncoder.prototype.encodeNull = function () {
    throw SerializationException_init_0("'null' is not supported by default");
  };
  AbstractEncoder.prototype.encodeBoolean_6taknv$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeByte_s8j3t7$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeShort_mq22fl$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeInt_za3lpa$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeDouble_14dthe$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeValue_za3rmp$(toBoxedChar(value));
  };
  AbstractEncoder.prototype.encodeString_61zpoe$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  AbstractEncoder.prototype.encodeEnum_szpzho$ = function (enumDescriptor, index) {
    this.encodeValue_za3rmp$(index);
  };
  AbstractEncoder.prototype.encodeBooleanElement_qh7jdn$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeBoolean_6taknv$(value);
  };
  AbstractEncoder.prototype.encodeByteElement_j0u8y3$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeByte_s8j3t7$(value);
  };
  AbstractEncoder.prototype.encodeShortElement_l83pjl$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeShort_mq22fl$(value);
  };
  AbstractEncoder.prototype.encodeIntElement_ptg7oe$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeInt_za3lpa$(value);
  };
  AbstractEncoder.prototype.encodeLongElement_j0o2mv$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeLong_s8cxhz$(value);
  };
  AbstractEncoder.prototype.encodeFloatElement_lf6hpt$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeFloat_mx4ult$(value);
  };
  AbstractEncoder.prototype.encodeDoubleElement_powrwi$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeDouble_14dthe$(value);
  };
  AbstractEncoder.prototype.encodeCharElement_j0tz0d$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeChar_s8itvh$(value);
  };
  AbstractEncoder.prototype.encodeStringElement_iij8qq$ = function (descriptor, index, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeString_61zpoe$(value);
  };
  AbstractEncoder.prototype.encodeSerializableElement_r4qlx7$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeSerializableValue_tf03ej$(serializer, value);
  };
  AbstractEncoder.prototype.encodeNullableSerializableElement_qw92s8$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_szpzho$(descriptor, index))
      this.encodeNullableSerializableValue_f4686g$(serializer, value);
  };
  AbstractEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractEncoder',
    interfaces: [CompositeEncoder, Encoder]
  };
  function Decoder() {
  }
  Object.defineProperty(Decoder.prototype, 'updateMode', {
    configurable: true,
    get: function () {
      return UpdateMode$OVERWRITE_getInstance();
    }
  });
  Decoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    return this.beginStructure_jvp2sb$(descriptor, [].slice());
  };
  Decoder.prototype.beginStructure_jvp2sb$ = function (descriptor, typeParams) {
    return this.beginStructure_24f42q$(descriptor);
  };
  Decoder.prototype.decodeSerializableValue_w63s0f$ = function (deserializer) {
    return deserializer.deserialize_bq71mq$(this);
  };
  Decoder.prototype.decodeNullableSerializableValue_aae3ea$ = function (deserializer) {
    var isNullabilitySupported = deserializer.descriptor.isNullable;
    return isNullabilitySupported || this.decodeNotNullMark() ? this.decodeSerializableValue_w63s0f$(deserializer) : this.decodeNull();
  };
  Decoder.prototype.updateSerializableValue_19c8k5$ = function (deserializer, old) {
    return this.decodeSerializableValue_w63s0f$(deserializer);
  };
  Decoder.prototype.updateNullableSerializableValue_exmlbs$ = function (deserializer, old) {
    return this.decodeNullableSerializableValue_aae3ea$(deserializer);
  };
  Decoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Decoder',
    interfaces: []
  };
  function CompositeDecoder() {
    CompositeDecoder$Companion_getInstance();
  }
  function CompositeDecoder$Companion() {
    CompositeDecoder$Companion_instance = this;
    this.DECODE_DONE = -1;
    this.UNKNOWN_NAME = -3;
    this.READ_DONE = -1;
    this.READ_ALL = -2;
  }
  CompositeDecoder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CompositeDecoder$Companion_instance = null;
  function CompositeDecoder$Companion_getInstance() {
    if (CompositeDecoder$Companion_instance === null) {
      new CompositeDecoder$Companion();
    }return CompositeDecoder$Companion_instance;
  }
  Object.defineProperty(CompositeDecoder.prototype, 'updateMode', {
    configurable: true,
    get: function () {
      return UpdateMode$OVERWRITE_getInstance();
    }
  });
  CompositeDecoder.prototype.decodeSequentially = function () {
    return false;
  };
  CompositeDecoder.prototype.decodeCollectionSize_24f42q$ = function (descriptor) {
    return -1;
  };
  CompositeDecoder.prototype.decodeSerializableElement_186mnl$ = function (descriptor, i, deserializer) {
    return this.decodeSerializableElement_12e8id$(descriptor, i, deserializer, null);
  };
  CompositeDecoder.prototype.decodeSerializableElement_12e8id$$default = function (descriptor, index, deserializer, previousValue) {
    return this.decodeSerializableElement_186mnl$(descriptor, index, deserializer);
  };
  CompositeDecoder.prototype.decodeSerializableElement_12e8id$ = function (descriptor, index, deserializer, previousValue, callback$default) {
    if (previousValue === void 0)
      previousValue = null;
    return callback$default ? callback$default(descriptor, index, deserializer, previousValue) : this.decodeSerializableElement_12e8id$$default(descriptor, index, deserializer, previousValue);
  };
  CompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$$default = function (descriptor, index, deserializer, previousValue) {
    return this.decodeNullableSerializableElement_pzkbua$(descriptor, index, deserializer);
  };
  CompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$ = function (descriptor, index, deserializer, previousValue, callback$default) {
    if (previousValue === void 0)
      previousValue = null;
    return callback$default ? callback$default(descriptor, index, deserializer, previousValue) : this.decodeNullableSerializableElement_8viuyw$$default(descriptor, index, deserializer, previousValue);
  };
  CompositeDecoder.prototype.decodeNullableSerializableElement_pzkbua$ = function (descriptor, i, deserializer) {
    return this.decodeNullableSerializableElement_8viuyw$(descriptor, i, deserializer, null);
  };
  CompositeDecoder.prototype.updateSerializableElement_12e8id$ = function (descriptor, index, deserializer, old) {
    return this.decodeSerializableElement_12e8id$(descriptor, index, deserializer, old);
  };
  CompositeDecoder.prototype.updateNullableSerializableElement_8viuyw$ = function (descriptor, index, deserializer, old) {
    return this.decodeNullableSerializableElement_8viuyw$(descriptor, index, deserializer, old);
  };
  CompositeDecoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CompositeDecoder',
    interfaces: []
  };
  var decodeStructure = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.encoding.decodeStructure_tzrhxq$', function ($receiver, descriptor, block) {
    var composite = $receiver.beginStructure_24f42q$(descriptor);
    try {
      return block(composite);
    }finally {
      composite.endStructure_24f42q$(descriptor);
    }
  });
  var updateModeDeprecated;
  var updateMethodDeprecated;
  var updateElementMethodDeprecated;
  var decodeMethodDeprecated;
  function Encoder() {
  }
  Encoder.prototype.encodeNotNullMark = function () {
  };
  Encoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    return this.beginStructure_jvp2sb$(descriptor, [].slice());
  };
  Encoder.prototype.beginStructure_jvp2sb$ = function (descriptor, typeSerializers) {
    return this.beginStructure_24f42q$(descriptor);
  };
  Encoder.prototype.beginCollection_szpzho$ = function (descriptor, collectionSize) {
    return this.beginCollection_m8o8wh$(descriptor, collectionSize, [].slice());
  };
  Encoder.prototype.beginCollection_m8o8wh$ = function (descriptor, collectionSize, typeSerializers) {
    return this.beginStructure_24f42q$(descriptor);
  };
  Encoder.prototype.encodeSerializableValue_tf03ej$ = function (serializer, value) {
    serializer.serialize_55azsf$(this, value);
  };
  Encoder.prototype.encodeNullableSerializableValue_f4686g$ = function (serializer, value) {
    var tmp$;
    var isNullabilitySupported = serializer.descriptor.isNullable;
    if (isNullabilitySupported) {
      return this.encodeSerializableValue_tf03ej$(Kotlin.isType(tmp$ = serializer, SerializationStrategy) ? tmp$ : throwCCE(), value);
    }if (value == null) {
      this.encodeNull();
    } else {
      this.encodeNotNullMark();
      this.encodeSerializableValue_tf03ej$(serializer, value);
    }
  };
  Encoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Encoder',
    interfaces: []
  };
  function CompositeEncoder() {
  }
  CompositeEncoder.prototype.shouldEncodeElementDefault_szpzho$ = function (descriptor, index) {
    return true;
  };
  CompositeEncoder.prototype.encodeNonSerializableElement_ptgdlt$ = function (descriptor, index, value) {
  };
  CompositeEncoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CompositeEncoder',
    interfaces: []
  };
  var encodeStructure = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.encoding.encodeStructure_iqdhfr$', function ($receiver, descriptor, block) {
    var composite = $receiver.beginStructure_24f42q$(descriptor);
    try {
      block(composite);
    }finally {
      composite.endStructure_24f42q$(descriptor);
    }
  });
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer_0(this, encoder, value);
    var descriptor = this.descriptor;
    var composite = encoder.beginStructure_24f42q$(descriptor);
    try {
      composite.encodeStringElement_iij8qq$(this.descriptor, 0, actualSerializer.descriptor.serialName);
      var tmp$;
      composite.encodeSerializableElement_r4qlx7$(this.descriptor, 1, Kotlin.isType(tmp$ = actualSerializer, SerializationStrategy) ? tmp$ : throwCCE(), value);
    }finally {
      composite.endStructure_24f42q$(descriptor);
    }
  };
  AbstractPolymorphicSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var descriptor = this.descriptor;
    var decodeStructure$result;
    var composite = decoder.beginStructure_24f42q$(descriptor);
    try {
      var tmp$, tmp$_0;
      var klassName = {v: null};
      var value = null;
      if (composite.decodeSequentially()) {
        return this.decodeSequentially_j3xsyv$_0(composite);
      }mainLoop: while (true) {
        var index = composite.decodeElementIndex_24f42q$(this.descriptor);
        switch (index) {
          case -1:
            break mainLoop;
          case 0:
            klassName.v = composite.decodeStringElement_szpzho$(this.descriptor, index);
            break;
          case 1:
            var value_0 = klassName.v;
            var requireNotNull$result;
            if (value_0 == null) {
              var message = 'Cannot read polymorphic value before its type token';
              throw IllegalArgumentException_init(message.toString());
            } else {
              requireNotNull$result = value_0;
            }

            klassName.v = requireNotNull$result;
            var serializer = findPolymorphicSerializer(this, composite, klassName.v);
            value = composite.decodeSerializableElement_12e8id$(this.descriptor, index, serializer);
            break;
          default:throw SerializationException_init_0('Invalid index in polymorphic deserialization of ' + ((tmp$ = klassName.v) != null ? tmp$ : 'unknown class') + ('\n' + ' Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
        }
      }
      var value_1 = value;
      var requireNotNull$result_0;
      if (value_1 == null) {
        var message_0 = 'Polymorphic value has not been read for class ' + toString(klassName.v);
        throw IllegalArgumentException_init(message_0.toString());
      } else {
        requireNotNull$result_0 = value_1;
      }
      decodeStructure$result = Kotlin.isType(tmp$_0 = requireNotNull$result_0, Any) ? tmp$_0 : throwCCE();
    }finally {
      composite.endStructure_24f42q$(descriptor);
    }
    return decodeStructure$result;
  };
  AbstractPolymorphicSerializer.prototype.decodeSequentially_j3xsyv$_0 = function (compositeDecoder) {
    var klassName = compositeDecoder.decodeStringElement_szpzho$(this.descriptor, 0);
    var serializer = findPolymorphicSerializer(this, compositeDecoder, klassName);
    return compositeDecoder.decodeSerializableElement_12e8id$(this.descriptor, 1, serializer);
  };
  AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_ca6uye$ = function (decoder, klassName) {
    return decoder.serializersModule.getPolymorphic_l2fy3k$(this.baseClass, klassName);
  };
  AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_kjsxpj$ = function (encoder, value) {
    return encoder.serializersModule.getPolymorphic_joiicr$(this.baseClass, value);
  };
  AbstractPolymorphicSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractPolymorphicSerializer',
    interfaces: [KSerializer]
  };
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the scope of '" + toString(baseClass.simpleName) + "'";
    throw SerializationException_init_0(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + toString(subClassName) + "' is not registered for polymorphic serialization " + scope + '.' + '\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function throwSubtypeNotRegistered_0(subClass, baseClass) {
    var tmp$;
    return throwSubtypeNotRegistered((tmp$ = subClass.simpleName) != null ? tmp$ : subClass.toString(), baseClass);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.elementDescriptor = elementDescriptor;
    this.elementsCount_axr0xc$_0 = 1;
  }
  Object.defineProperty(ListLikeDescriptor.prototype, 'kind', {
    configurable: true,
    get: function () {
      return StructureKind$LIST_getInstance();
    }
  });
  Object.defineProperty(ListLikeDescriptor.prototype, 'elementsCount', {
    configurable: true,
    get: function () {
      return this.elementsCount_axr0xc$_0;
    }
  });
  ListLikeDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = toIntOrNull(name);
    if (tmp$ == null) {
      throw IllegalArgumentException_init(name + ' is not a valid list index');
    }return tmp$;
  };
  ListLikeDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.serialName + ' expects only non-negative indices';
      throw IllegalArgumentException_init(message.toString());
    }return false;
  };
  ListLikeDescriptor.prototype.getElementAnnotations_za3lpa$ = function (index) {
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.serialName + ' expects only non-negative indices';
      throw IllegalArgumentException_init(message.toString());
    }return emptyList();
  };
  ListLikeDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.serialName + ' expects only non-negative indices';
      throw IllegalArgumentException_init(message.toString());
    }return this.elementDescriptor;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, ListLikeDescriptor))
      return false;
    if (equals(this.elementDescriptor, other.elementDescriptor) && equals(this.serialName, other.serialName))
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return (hashCode(this.elementDescriptor) * 31 | 0) + hashCode(this.serialName) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.serialName + '(' + this.elementDescriptor + ')';
  };
  ListLikeDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListLikeDescriptor',
    interfaces: [SerialDescriptor]
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.serialName_ra35nx$_0 = serialName;
    this.keyDescriptor = keyDescriptor;
    this.valueDescriptor = valueDescriptor;
    this.elementsCount_qp2ocq$_0 = 2;
  }
  Object.defineProperty(MapLikeDescriptor.prototype, 'serialName', {
    get: function () {
      return this.serialName_ra35nx$_0;
    }
  });
  Object.defineProperty(MapLikeDescriptor.prototype, 'kind', {
    configurable: true,
    get: function () {
      return StructureKind$MAP_getInstance();
    }
  });
  Object.defineProperty(MapLikeDescriptor.prototype, 'elementsCount', {
    configurable: true,
    get: function () {
      return this.elementsCount_qp2ocq$_0;
    }
  });
  MapLikeDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = toIntOrNull(name);
    if (tmp$ == null) {
      throw IllegalArgumentException_init(name + ' is not a valid map index');
    }return tmp$;
  };
  MapLikeDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.serialName + ' expects only non-negative indices';
      throw IllegalArgumentException_init(message.toString());
    }return false;
  };
  MapLikeDescriptor.prototype.getElementAnnotations_za3lpa$ = function (index) {
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.serialName + ' expects only non-negative indices';
      throw IllegalArgumentException_init(message.toString());
    }return emptyList();
  };
  MapLikeDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    var tmp$;
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.serialName + ' expects only non-negative indices';
      throw IllegalArgumentException_init(message.toString());
    }switch (index % 2) {
      case 0:
        tmp$ = this.keyDescriptor;
        break;
      case 1:
        tmp$ = this.valueDescriptor;
        break;
      default:throw IllegalStateException_init('Unreached'.toString());
    }
    return tmp$;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, MapLikeDescriptor))
      return false;
    if (!equals(this.serialName, other.serialName))
      return false;
    if (!equals(this.keyDescriptor, other.keyDescriptor))
      return false;
    if (!equals(this.valueDescriptor, other.valueDescriptor))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = hashCode(this.serialName);
    result = (31 * result | 0) + hashCode(this.keyDescriptor) | 0;
    result = (31 * result | 0) + hashCode(this.valueDescriptor) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this.serialName + '(' + this.keyDescriptor + ', ' + this.valueDescriptor + ')';
  };
  MapLikeDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapLikeDescriptor',
    interfaces: [SerialDescriptor]
  };
  var ARRAY_NAME;
  var ARRAY_LIST_NAME;
  var LINKED_HASH_SET_NAME;
  var HASH_SET_NAME;
  var LINKED_HASH_MAP_NAME;
  var HASH_MAP_NAME;
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.serialName_reprdi$_0 = primitive.serialName + 'Array';
  }
  Object.defineProperty(PrimitiveArrayDescriptor.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return this.serialName_reprdi$_0;
    }
  });
  PrimitiveArrayDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrimitiveArrayDescriptor',
    interfaces: [ListLikeDescriptor]
  };
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  Object.defineProperty(ArrayClassDesc.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return ARRAY_NAME;
    }
  });
  ArrayClassDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayClassDesc',
    interfaces: [ListLikeDescriptor]
  };
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  Object.defineProperty(ArrayListClassDesc.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return ARRAY_LIST_NAME;
    }
  });
  ArrayListClassDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayListClassDesc',
    interfaces: [ListLikeDescriptor]
  };
  function NamedListClassDescriptor(serialName, elementDescriptor) {
    ListLikeDescriptor.call(this, elementDescriptor);
    this.serialName_ej0k1l$_0 = serialName;
  }
  Object.defineProperty(NamedListClassDescriptor.prototype, 'serialName', {
    get: function () {
      return this.serialName_ej0k1l$_0;
    }
  });
  NamedListClassDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamedListClassDescriptor',
    interfaces: [ListLikeDescriptor]
  };
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  Object.defineProperty(LinkedHashSetClassDesc.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return LINKED_HASH_SET_NAME;
    }
  });
  LinkedHashSetClassDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkedHashSetClassDesc',
    interfaces: [ListLikeDescriptor]
  };
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  Object.defineProperty(HashSetClassDesc.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return HASH_SET_NAME;
    }
  });
  HashSetClassDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HashSetClassDesc',
    interfaces: [ListLikeDescriptor]
  };
  function NamedMapClassDescriptor(name, keyDescriptor, valueDescriptor) {
    MapLikeDescriptor.call(this, name, keyDescriptor, valueDescriptor);
  }
  NamedMapClassDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamedMapClassDescriptor',
    interfaces: [MapLikeDescriptor]
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, LINKED_HASH_MAP_NAME, keyDesc, valueDesc);
  }
  LinkedHashMapClassDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkedHashMapClassDesc',
    interfaces: [MapLikeDescriptor]
  };
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, HASH_MAP_NAME, keyDesc, valueDesc);
  }
  HashMapClassDesc.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HashMapClassDesc',
    interfaces: [MapLikeDescriptor]
  };
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.merge_h7kg3q$ = function (decoder, previous) {
    var tmp$;
    var builder = (tmp$ = previous != null ? this.toBuilder_wikn$(previous) : null) != null ? tmp$ : this.builder();
    var startIndex = this.builderSize_wili$(builder);
    var compositeDecoder = decoder.beginStructure_24f42q$(this.descriptor);
    if (compositeDecoder.decodeSequentially()) {
      this.readAll_8oyp34$(compositeDecoder, builder, startIndex, this.readSize_bl0yv7$_0(compositeDecoder, builder));
    } else {
      while (true) {
        var index = compositeDecoder.decodeElementIndex_24f42q$(this.descriptor);
        if (index === -1)
          break;
        this.readElement_8pvye7$(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.endStructure_24f42q$(this.descriptor);
    return this.toResult_wili$(builder);
  };
  AbstractCollectionSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.merge_h7kg3q$(decoder, null);
  };
  AbstractCollectionSerializer.prototype.readSize_bl0yv7$_0 = function (decoder, builder) {
    var size = decoder.decodeCollectionSize_24f42q$(this.descriptor);
    this.checkCapacity_rk7bw8$(builder, size);
    return size;
  };
  AbstractCollectionSerializer.prototype.readElement_8pvye7$ = function (decoder, index, builder, checkIndex, callback$default) {
    if (checkIndex === void 0)
      checkIndex = true;
    callback$default ? callback$default(decoder, index, builder, checkIndex) : this.readElement_8pvye7$$default(decoder, index, builder, checkIndex);
  };
  AbstractCollectionSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractCollectionSerializer',
    interfaces: [KSerializer]
  };
  function ListLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.elementSerializer_6sofm1$_0 = elementSerializer;
  }
  ListLikeSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var size = this.collectionSize_wikn$(value);
    var composite = encoder.beginCollection_szpzho$(this.descriptor, size);
    var iterator = this.collectionIterator_wikn$(value);
    for (var index = 0; index < size; index++)
      composite.encodeSerializableElement_r4qlx7$(this.descriptor, index, this.elementSerializer_6sofm1$_0, iterator.next());
    composite.endStructure_24f42q$(this.descriptor);
  };
  ListLikeSerializer.prototype.readAll_8oyp34$ = function (decoder, builder, startIndex, size) {
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init(message.toString());
    }for (var index = 0; index < size; index++)
      this.readElement_8pvye7$(decoder, startIndex + index | 0, builder, false);
  };
  ListLikeSerializer.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    this.insert_p422l$(builder, index, decoder.decodeSerializableElement_12e8id$(this.descriptor, index, this.elementSerializer_6sofm1$_0));
  };
  ListLikeSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListLikeSerializer',
    interfaces: [AbstractCollectionSerializer]
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.keySerializer = keySerializer;
    this.valueSerializer = valueSerializer;
  }
  MapLikeSerializer.prototype.readAll_8oyp34$ = function (decoder, builder, startIndex, size) {
    var tmp$;
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init(message.toString());
    }tmp$ = size * 2 | 0;
    for (var index = 0; index < tmp$; index += 2)
      this.readElement_8pvye7$(decoder, startIndex + index | 0, builder, false);
  };
  MapLikeSerializer.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    var tmp$, tmp$_0;
    var key = decoder.decodeSerializableElement_12e8id$(this.descriptor, index, this.keySerializer);
    if (checkIndex) {
      var $receiver = decoder.decodeElementIndex_24f42q$(this.descriptor);
      if (!($receiver === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + $receiver;
        throw IllegalArgumentException_init(message.toString());
      }tmp$ = $receiver;
    } else {
      tmp$ = index + 1 | 0;
    }
    var vIndex = tmp$;
    if (builder.containsKey_11rb$(key) && !Kotlin.isType(this.valueSerializer.descriptor.kind, PrimitiveKind)) {
      tmp$_0 = decoder.decodeSerializableElement_12e8id$(this.descriptor, vIndex, this.valueSerializer, getValue(builder, key));
    } else {
      tmp$_0 = decoder.decodeSerializableElement_12e8id$(this.descriptor, vIndex, this.valueSerializer);
    }
    var value = tmp$_0;
    builder.put_xwzc9p$(key, value);
  };
  MapLikeSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var size = this.collectionSize_wikn$(value);
    var composite = encoder.beginCollection_szpzho$(this.descriptor, size);
    var iterator = this.collectionIterator_wikn$(value);
    var index = {v: 0};
    while (iterator.hasNext()) {
      var element = iterator.next();
      var k = element.key;
      var v = element.value;
      var tmp$, tmp$_0;
      composite.encodeSerializableElement_r4qlx7$(this.descriptor, (tmp$ = index.v, index.v = tmp$ + 1 | 0, tmp$), this.keySerializer, k);
      composite.encodeSerializableElement_r4qlx7$(this.descriptor, (tmp$_0 = index.v, index.v = tmp$_0 + 1 | 0, tmp$_0), this.valueSerializer, v);
    }
    composite.endStructure_24f42q$(this.descriptor);
  };
  MapLikeSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapLikeSerializer',
    interfaces: [AbstractCollectionSerializer]
  };
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.ensureCapacity_za3lpa$ = function (requiredCapacity, callback$default) {
    if (requiredCapacity === void 0)
      requiredCapacity = this.position + 1 | 0;
    callback$default ? callback$default(requiredCapacity) : this.ensureCapacity_za3lpa$$default(requiredCapacity);
  };
  PrimitiveArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrimitiveArrayBuilder',
    interfaces: []
  };
  function PrimitiveArraySerializer(primitiveSerializer) {
    ListLikeSerializer.call(this, primitiveSerializer);
    this.descriptor_o3qkn1$_0 = new PrimitiveArrayDescriptor(primitiveSerializer.descriptor);
  }
  Object.defineProperty(PrimitiveArraySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_o3qkn1$_0;
    }
  });
  PrimitiveArraySerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.position;
  };
  PrimitiveArraySerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver.build();
  };
  PrimitiveArraySerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
    $receiver.ensureCapacity_za3lpa$(size);
  };
  PrimitiveArraySerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    throw IllegalStateException_init('This method lead to boxing and must not be used, use writeContents instead'.toString());
  };
  PrimitiveArraySerializer.prototype.insert_p422l$ = function ($receiver, index, element) {
    throw IllegalStateException_init('This method lead to boxing and must not be used, use Builder.append instead'.toString());
  };
  PrimitiveArraySerializer.prototype.builder = function () {
    return this.toBuilder_wikn$(this.empty());
  };
  PrimitiveArraySerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var size = this.collectionSize_wikn$(value);
    var composite = encoder.beginCollection_szpzho$(this.descriptor, size);
    this.writeContent_q3xt5$(composite, value, size);
    composite.endStructure_24f42q$(this.descriptor);
  };
  PrimitiveArraySerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.merge_h7kg3q$(decoder, null);
  };
  PrimitiveArraySerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrimitiveArraySerializer',
    interfaces: [ListLikeSerializer]
  };
  function ReferenceArraySerializer(kClass, eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.kClass_0 = kClass;
    this.descriptor_8482jr$_0 = new ArrayClassDesc(eSerializer.descriptor);
  }
  Object.defineProperty(ReferenceArraySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_8482jr$_0;
    }
  });
  ReferenceArraySerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  ReferenceArraySerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return Kotlin.arrayIterator($receiver);
  };
  ReferenceArraySerializer.prototype.builder = function () {
    return ArrayList_init_0();
  };
  ReferenceArraySerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  ReferenceArraySerializer.prototype.toResult_wili$ = function ($receiver) {
    return toNativeArrayImpl($receiver, this.kClass_0);
  };
  ReferenceArraySerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    return ArrayList_init_1(asList($receiver));
  };
  ReferenceArraySerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
    $receiver.ensureCapacity_za3lpa$(size);
  };
  ReferenceArraySerializer.prototype.insert_p422l$ = function ($receiver, index, element) {
    $receiver.add_wxm5ur$(index, element);
  };
  ReferenceArraySerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReferenceArraySerializer',
    interfaces: [ListLikeSerializer]
  };
  function ArrayListSerializer(element) {
    ListLikeSerializer.call(this, element);
    this.descriptor_7uwoa2$_0 = new ArrayListClassDesc(element.descriptor);
  }
  Object.defineProperty(ArrayListSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_7uwoa2$_0;
    }
  });
  ArrayListSerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  ArrayListSerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return $receiver.iterator();
  };
  ArrayListSerializer.prototype.builder = function () {
    return ArrayList_init_0();
  };
  ArrayListSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  ArrayListSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  ArrayListSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, ArrayList) ? tmp$ : null) != null ? tmp$_0 : ArrayList_init_1($receiver);
  };
  ArrayListSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
    $receiver.ensureCapacity_za3lpa$(size);
  };
  ArrayListSerializer.prototype.insert_p422l$ = function ($receiver, index, element) {
    $receiver.add_wxm5ur$(index, element);
  };
  ArrayListSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayListSerializer',
    interfaces: [ListLikeSerializer]
  };
  function LinkedHashSetSerializer(eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.descriptor_vnfc7m$_0 = new LinkedHashSetClassDesc(eSerializer.descriptor);
  }
  Object.defineProperty(LinkedHashSetSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_vnfc7m$_0;
    }
  });
  LinkedHashSetSerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  LinkedHashSetSerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return $receiver.iterator();
  };
  LinkedHashSetSerializer.prototype.builder = function () {
    return LinkedHashSet_init_0();
  };
  LinkedHashSetSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  LinkedHashSetSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  LinkedHashSetSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, LinkedHashSet) ? tmp$ : null) != null ? tmp$_0 : LinkedHashSet_init($receiver);
  };
  LinkedHashSetSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
  };
  LinkedHashSetSerializer.prototype.insert_p422l$ = function ($receiver, index, element) {
    $receiver.add_11rb$(element);
  };
  LinkedHashSetSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkedHashSetSerializer',
    interfaces: [ListLikeSerializer]
  };
  function HashSetSerializer(eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.descriptor_yqpz47$_0 = new HashSetClassDesc(eSerializer.descriptor);
  }
  Object.defineProperty(HashSetSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_yqpz47$_0;
    }
  });
  HashSetSerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  HashSetSerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return $receiver.iterator();
  };
  HashSetSerializer.prototype.builder = function () {
    return HashSet_init();
  };
  HashSetSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  HashSetSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  HashSetSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, HashSet) ? tmp$ : null) != null ? tmp$_0 : HashSet_init_0($receiver);
  };
  HashSetSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
  };
  HashSetSerializer.prototype.insert_p422l$ = function ($receiver, index, element) {
    $receiver.add_11rb$(element);
  };
  HashSetSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HashSetSerializer',
    interfaces: [ListLikeSerializer]
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_pixp0o$_0 = new LinkedHashMapClassDesc(kSerializer.descriptor, vSerializer.descriptor);
  }
  Object.defineProperty(LinkedHashMapSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_pixp0o$_0;
    }
  });
  LinkedHashMapSerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  LinkedHashMapSerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return $receiver.entries.iterator();
  };
  LinkedHashMapSerializer.prototype.builder = function () {
    return LinkedHashMap_init();
  };
  LinkedHashMapSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  LinkedHashMapSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  LinkedHashMapSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, LinkedHashMap) ? tmp$ : null) != null ? tmp$_0 : LinkedHashMap_init_0($receiver);
  };
  LinkedHashMapSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
  };
  LinkedHashMapSerializer.prototype.insertKeyValuePair_fbr58l$ = function ($receiver, index, key, value) {
    $receiver.put_xwzc9p$(key, value);
  };
  LinkedHashMapSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkedHashMapSerializer',
    interfaces: [MapLikeSerializer]
  };
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_kvyydd$_0 = new HashMapClassDesc(kSerializer.descriptor, vSerializer.descriptor);
  }
  Object.defineProperty(HashMapSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_kvyydd$_0;
    }
  });
  HashMapSerializer.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  HashMapSerializer.prototype.collectionIterator_wikn$ = function ($receiver) {
    return $receiver.entries.iterator();
  };
  HashMapSerializer.prototype.builder = function () {
    return HashMap_init();
  };
  HashMapSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  HashMapSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  HashMapSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, HashMap) ? tmp$ : null) != null ? tmp$_0 : HashMap_init_0($receiver);
  };
  HashMapSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
  };
  HashMapSerializer.prototype.insertKeyValuePair_fbr58l$ = function ($receiver, index, key, value) {
    $receiver.put_xwzc9p$(key, value);
  };
  HashMapSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HashMapSerializer',
    interfaces: [MapLikeSerializer]
  };
  var elementsHashCodeBy$lambda_0 = wrapFunction(function () {
    var hashCode = Kotlin.hashCode;
    return function (closure$selector) {
      return function (hash, element) {
        var tmp$ = 31 * hash | 0;
        var $receiver = closure$selector(element);
        var tmp$_0;
        return tmp$ + ((tmp$_0 = $receiver != null ? hashCode($receiver) : null) != null ? tmp$_0 : 0) | 0;
      };
    };
  });
  function EnumDescriptor(name, elementsCount) {
    PluginGeneratedSerialDescriptor.call(this, name, void 0, elementsCount);
    this.kind_8antlo$_0 = SerialKind$ENUM_getInstance();
    this.elementDescriptors_r8dl0w$_0 = lazy(EnumDescriptor$elementDescriptors$lambda(elementsCount, name, this));
  }
  Object.defineProperty(EnumDescriptor.prototype, 'kind', {
    configurable: true,
    get: function () {
      return this.kind_8antlo$_0;
    }
  });
  Object.defineProperty(EnumDescriptor.prototype, 'elementDescriptors_0', {
    configurable: true,
    get: function () {
      return this.elementDescriptors_r8dl0w$_0.value;
    }
  });
  EnumDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return getChecked(this.elementDescriptors_0, index);
  };
  EnumDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!Kotlin.isType(other, SerialDescriptor))
      return false;
    if (other.kind !== SerialKind$ENUM_getInstance())
      return false;
    if (!equals(this.serialName, other.serialName))
      return false;
    if (!equals(cachedSerialNames(this), cachedSerialNames(other)))
      return false;
    return true;
  };
  EnumDescriptor.prototype.toString = function () {
    return joinToString(get_elementNames(this), ', ', this.serialName + '(', ')');
  };
  EnumDescriptor.prototype.hashCode = function () {
    var result = hashCode(this.serialName);
    var tmp$;
    var accumulator = 1;
    tmp$ = get_elementNames(this).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      accumulator = (31 * accumulator | 0) + ((tmp$_0 = element != null ? hashCode(element) : null) != null ? tmp$_0 : 0) | 0;
    }
    var elementsHashCode = accumulator;
    result = (31 * result | 0) + elementsHashCode | 0;
    return result;
  };
  function EnumDescriptor$elementDescriptors$lambda(closure$elementsCount, closure$name, this$EnumDescriptor) {
    return function () {
      var size = closure$elementsCount;
      var array = Array_0(size);
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        array[i] = buildSerialDescriptor(closure$name + '.' + this$EnumDescriptor.getElementName_za3lpa$(i), StructureKind$OBJECT_getInstance(), []);
      }
      return array;
    };
  }
  EnumDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumDescriptor',
    interfaces: [PluginGeneratedSerialDescriptor]
  };
  function EnumSerializer(serialName, values) {
    this.values_0 = values;
    this.descriptor_ulj9cc$_0 = buildSerialDescriptor(serialName, SerialKind$ENUM_getInstance(), [], EnumSerializer$descriptor$lambda(this, serialName));
  }
  Object.defineProperty(EnumSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_ulj9cc$_0;
    }
  });
  EnumSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var index = indexOf(this.values_0, value);
    if (!(index !== -1)) {
      var message = value.toString() + ' is not a valid enum ' + this.descriptor.serialName + ', must be one of ' + contentToString(this.values_0);
      throw IllegalStateException_init(message.toString());
    }encoder.encodeEnum_szpzho$(this.descriptor, index);
  };
  EnumSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index = decoder.decodeEnum_24f42q$(this.descriptor);
    if (!get_indices(this.values_0).contains_mef7kx$(index)) {
      var message = index.toString() + ' is not among valid ' + '$' + this.descriptor.serialName + ' enum values, values size is ' + this.values_0.length;
      throw IllegalStateException_init(message.toString());
    }return this.values_0[index];
  };
  EnumSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.internal.EnumSerializer<' + this.descriptor.serialName + '>';
  };
  function EnumSerializer$descriptor$lambda(this$EnumSerializer, closure$serialName) {
    return function ($receiver) {
      var $receiver_0 = this$EnumSerializer.values_0;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        var fqn = closure$serialName + '.' + element.name;
        var enumMemberDescriptor = buildSerialDescriptor(fqn, StructureKind$OBJECT_getInstance(), []);
        $receiver.element_vxrguq$(element.name, enumMemberDescriptor);
      }
      return Unit;
    };
  }
  EnumSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumSerializer',
    interfaces: [KSerializer]
  };
  function NullableSerializer(serializer) {
    this.serializer_0 = serializer;
    this.descriptor_kbvl2k$_0 = new SerialDescriptorForNullable(this.serializer_0.descriptor);
  }
  Object.defineProperty(NullableSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_kbvl2k$_0;
    }
  });
  NullableSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    if (value != null) {
      encoder.encodeNotNullMark();
      encoder.encodeSerializableValue_tf03ej$(this.serializer_0, value);
    } else {
      encoder.encodeNull();
    }
  };
  NullableSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeNotNullMark() ? decoder.decodeSerializableValue_w63s0f$(this.serializer_0) : decoder.decodeNull();
  };
  NullableSerializer.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, NullableSerializer) ? tmp$_0 : throwCCE();
    if (!equals(this.serializer_0, other.serializer_0))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.serializer_0);
  };
  NullableSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NullableSerializer',
    interfaces: [KSerializer]
  };
  function SerialDescriptorForNullable(original) {
    this.original_8be2vx$ = original;
    this.serialName_szvoqg$_0 = this.original_8be2vx$.serialName + '?';
  }
  Object.defineProperty(SerialDescriptorForNullable.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return this.serialName_szvoqg$_0;
    }
  });
  Object.defineProperty(SerialDescriptorForNullable.prototype, 'isNullable', {
    configurable: true,
    get: function () {
      return true;
    }
  });
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, SerialDescriptorForNullable))
      return false;
    if (!equals(this.original_8be2vx$, other.original_8be2vx$))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return this.original_8be2vx$.toString() + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return hashCode(this.original_8be2vx$) * 31 | 0;
  };
  Object.defineProperty(SerialDescriptorForNullable.prototype, 'annotations', {
    get: function () {
      return this.original_8be2vx$.annotations;
    }
  });
  Object.defineProperty(SerialDescriptorForNullable.prototype, 'elementsCount', {
    get: function () {
      return this.original_8be2vx$.elementsCount;
    }
  });
  Object.defineProperty(SerialDescriptorForNullable.prototype, 'kind', {
    get: function () {
      return this.original_8be2vx$.kind;
    }
  });
  SerialDescriptorForNullable.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.original_8be2vx$.getElementAnnotations_za3lpa$(index);
  };
  SerialDescriptorForNullable.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.original_8be2vx$.getElementDescriptor_za3lpa$(index);
  };
  SerialDescriptorForNullable.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.original_8be2vx$.getElementIndex_61zpoe$(name);
  };
  SerialDescriptorForNullable.prototype.getElementName_za3lpa$ = function (index) {
    return this.original_8be2vx$.getElementName_za3lpa$(index);
  };
  SerialDescriptorForNullable.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.original_8be2vx$.isElementOptional_za3lpa$(index);
  };
  SerialDescriptorForNullable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerialDescriptorForNullable',
    interfaces: [SerialDescriptor]
  };
  function ObjectSerializer(serialName, objectInstance) {
    this.objectInstance_0 = objectInstance;
    this.descriptor_uhy216$_0 = buildSerialDescriptor(serialName, StructureKind$OBJECT_getInstance(), []);
  }
  Object.defineProperty(ObjectSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_uhy216$_0;
    }
  });
  ObjectSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.beginStructure_24f42q$(this.descriptor).endStructure_24f42q$(this.descriptor);
  };
  ObjectSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    decoder.beginStructure_24f42q$(this.descriptor).endStructure_24f42q$(this.descriptor);
    return this.objectInstance_0;
  };
  ObjectSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjectSerializer',
    interfaces: [KSerializer]
  };
  function HexConverter() {
    HexConverter_instance = this;
    this.hexCode_0 = '0123456789ABCDEF';
  }
  HexConverter.prototype.parseHexBinary_61zpoe$ = function (s) {
    return InternalHexConverter_getInstance().parseHexBinary_61zpoe$(s);
  };
  HexConverter.prototype.printHexBinary_1fhb37$ = function (data, lowerCase) {
    if (lowerCase === void 0)
      lowerCase = false;
    return InternalHexConverter_getInstance().printHexBinary_1fhb37$(data, lowerCase);
  };
  HexConverter.prototype.toHexString_za3lpa$ = function (n) {
    return InternalHexConverter_getInstance().toHexString_za3lpa$(n);
  };
  HexConverter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HexConverter',
    interfaces: []
  };
  var HexConverter_instance = null;
  function HexConverter_getInstance() {
    if (HexConverter_instance === null) {
      new HexConverter();
    }return HexConverter_instance;
  }
  function InternalHexConverter() {
    InternalHexConverter_instance = this;
    this.hexCode_0 = '0123456789ABCDEF';
  }
  InternalHexConverter.prototype.parseHexBinary_61zpoe$ = function (s) {
    var len = s.length;
    if (!(len % 2 === 0)) {
      var message = 'HexBinary string must be even length';
      throw IllegalArgumentException_init(message.toString());
    }var bytes = new Int8Array(len / 2 | 0);
    var i = {v: 0};
    while (i.v < len) {
      var h = this.hexToInt_0(s.charCodeAt(i.v));
      var l = this.hexToInt_0(s.charCodeAt(i.v + 1 | 0));
      if (!!(h === -1 || l === -1)) {
        var message_0 = 'Invalid hex chars: ' + String.fromCharCode(s.charCodeAt(i.v)) + String.fromCharCode(s.charCodeAt(i.v + 1 | 0));
        throw IllegalArgumentException_init(message_0.toString());
      }bytes[i.v / 2 | 0] = toByte((h << 4) + l | 0);
      i.v = i.v + 2 | 0;
    }
    return bytes;
  };
  InternalHexConverter.prototype.hexToInt_0 = function (ch) {
    if ((new CharRange(48, 57)).contains_mef7kx$(ch))
      return ch - 48;
    else if ((new CharRange(65, 70)).contains_mef7kx$(ch))
      return ch - 65 + 10 | 0;
    else if ((new CharRange(97, 102)).contains_mef7kx$(ch))
      return ch - 97 + 10 | 0;
    else
      return -1;
  };
  InternalHexConverter.prototype.printHexBinary_1fhb37$ = function (data, lowerCase) {
    if (lowerCase === void 0)
      lowerCase = false;
    var tmp$;
    var r = StringBuilder_init(data.length * 2 | 0);
    for (tmp$ = 0; tmp$ !== data.length; ++tmp$) {
      var b = data[tmp$];
      r.append_s8itvh$(this.hexCode_0.charCodeAt(b >> 4 & 15));
      r.append_s8itvh$(this.hexCode_0.charCodeAt(b & 15));
    }
    return lowerCase ? r.toString().toLowerCase() : r.toString();
  };
  InternalHexConverter.prototype.toHexString_za3lpa$ = function (n) {
    var tmp$;
    var arr = new Int8Array(4);
    for (var i = 0; i < 4; i++) {
      arr[i] = toByte(n >> 24 - (i * 8 | 0));
    }
    var $receiver = trimStart(this.printHexBinary_1fhb37$(arr, true), Kotlin.charArrayOf(48));
    return (tmp$ = $receiver.length > 0 ? $receiver : null) != null ? tmp$ : '0';
  };
  InternalHexConverter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InternalHexConverter',
    interfaces: []
  };
  var InternalHexConverter_instance = null;
  function InternalHexConverter_getInstance() {
    if (InternalHexConverter_instance === null) {
      new InternalHexConverter();
    }return InternalHexConverter_instance;
  }
  function cachedSerialNames($receiver) {
    var tmp$;
    if (Kotlin.isType($receiver, PluginGeneratedSerialDescriptor))
      return $receiver.namesSet_8be2vx$;
    var result = HashSet_init_1($receiver.elementsCount);
    tmp$ = $receiver.elementsCount;
    for (var i = 0; i < tmp$; i++) {
      var element = $receiver.getElementName_za3lpa$(i);
      result.add_11rb$(element);
    }
    return result;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function compactArray($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = !($receiver == null || $receiver.isEmpty()) ? $receiver : null) != null ? copyToArray(tmp$) : null) != null ? tmp$_0 : EMPTY_DESCRIPTOR_ARRAY;
  }
  function defer$ObjectLiteral(closure$deferred) {
    this.original_s64f0k$_0 = lazy(closure$deferred);
  }
  Object.defineProperty(defer$ObjectLiteral.prototype, 'original_0', {
    configurable: true,
    get: function () {
      return this.original_s64f0k$_0.value;
    }
  });
  Object.defineProperty(defer$ObjectLiteral.prototype, 'serialName', {
    configurable: true,
    get: function () {
      return this.original_0.serialName;
    }
  });
  Object.defineProperty(defer$ObjectLiteral.prototype, 'kind', {
    configurable: true,
    get: function () {
      return this.original_0.kind;
    }
  });
  Object.defineProperty(defer$ObjectLiteral.prototype, 'elementsCount', {
    configurable: true,
    get: function () {
      return this.original_0.elementsCount;
    }
  });
  defer$ObjectLiteral.prototype.getElementName_za3lpa$ = function (index) {
    return this.original_0.getElementName_za3lpa$(index);
  };
  defer$ObjectLiteral.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.original_0.getElementIndex_61zpoe$(name);
  };
  defer$ObjectLiteral.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.original_0.getElementAnnotations_za3lpa$(index);
  };
  defer$ObjectLiteral.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.original_0.getElementDescriptor_za3lpa$(index);
  };
  defer$ObjectLiteral.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.original_0.isElementOptional_za3lpa$(index);
  };
  defer$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SerialDescriptor]
  };
  function defer(deferred) {
    return new defer$ObjectLiteral(deferred);
  }
  var cast = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.internal.cast_irzu8f$', wrapFunction(function () {
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function ($receiver) {
      var tmp$;
      return Kotlin.isType(tmp$ = $receiver, KSerializer) ? tmp$ : throwCCE();
    };
  }));
  var cast_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.internal.cast_sjryxj$', wrapFunction(function () {
    var SerializationStrategy = _.kotlinx.serialization.SerializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    return function ($receiver) {
      var tmp$;
      return Kotlin.isType(tmp$ = $receiver, SerializationStrategy) ? tmp$ : throwCCE();
    };
  }));
  var cast_1 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.internal.cast_pbw0sq$', wrapFunction(function () {
    var DeserializationStrategy = _.kotlinx.serialization.DeserializationStrategy;
    var throwCCE = Kotlin.throwCCE;
    return function ($receiver) {
      var tmp$;
      return Kotlin.isType(tmp$ = $receiver, DeserializationStrategy) ? tmp$ : throwCCE();
    };
  }));
  function serializerNotRegistered($receiver) {
    throw SerializationException_init_0("Serializer for class '" + toString($receiver.simpleName) + "' is not found." + '\n' + 'Mark the class as @Serializable or provide the serializer explicitly.');
  }
  function kclass($receiver) {
    var tmp$, tmp$_0;
    var t = $receiver.classifier;
    if (Kotlin.isType(t, KClass))
      tmp$ = t;
    else {
      throw IllegalStateException_init(('Only KClass supported as classifier, got ' + toString(t)).toString());
    }
    return Kotlin.isType(tmp$_0 = tmp$, KClass) ? tmp$_0 : throwCCE();
  }
  function getElementIndexOrThrow($receiver, name) {
    var index = $receiver.getElementIndex_61zpoe$(name);
    if (index === -3)
      throw SerializationException_init_0($receiver.serialName + " does not contain element with name '" + name + "'");
    return index;
  }
  var elementsHashCodeBy = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.internal.elementsHashCodeBy_9ua6wn$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var hashCode = Kotlin.hashCode;
    var elementsHashCodeBy$lambda = wrapFunction(function () {
      var hashCode = Kotlin.hashCode;
      return function (closure$selector) {
        return function (hash, element) {
          var tmp$ = 31 * hash | 0;
          var $receiver = closure$selector(element);
          var tmp$_0;
          return tmp$ + ((tmp$_0 = $receiver != null ? hashCode($receiver) : null) != null ? tmp$_0 : 0) | 0;
        };
      };
    });
    return function ($receiver, selector) {
      var tmp$;
      var accumulator = 1;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0 = 31 * accumulator | 0;
        var $receiver_0 = selector(element);
        var tmp$_1;
        accumulator = tmp$_0 + ((tmp$_1 = $receiver_0 != null ? hashCode($receiver_0) : null) != null ? tmp$_1 : 0) | 0;
      }
      return accumulator;
    };
  }));
  var elementsHashCodeBy$lambda_1 = wrapFunction(function () {
    var hashCode = Kotlin.hashCode;
    return function (closure$selector) {
      return function (hash, element) {
        var tmp$ = 31 * hash | 0;
        var $receiver = closure$selector(element);
        var tmp$_0;
        return tmp$ + ((tmp$_0 = $receiver != null ? hashCode($receiver) : null) != null ? tmp$_0 : 0) | 0;
      };
    };
  });
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    if (generatedSerializer === void 0)
      generatedSerializer = null;
    this.serialName_igazkg$_0 = serialName;
    this.generatedSerializer_0 = generatedSerializer;
    this.elementsCount_qx3iur$_0 = elementsCount;
    this.added_0 = -1;
    var array = Array_0(this.elementsCount);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = '[UNINITIALIZED]';
    }
    this.names_0 = array;
    this.propertiesAnnotations_0 = Kotlin.newArray(this.elementsCount, null);
    this.classAnnotations_0 = null;
    this.elementsOptionality_0 = Kotlin.booleanArray(this.elementsCount);
    this.indices_73aj4y$_0 = lazy(PluginGeneratedSerialDescriptor$indices$lambda(this));
    this.typeParameterDescriptors_ggwkl6$_0 = lazy(PluginGeneratedSerialDescriptor$typeParameterDescriptors$lambda(this));
    this._hashCode_61j445$_0 = lazy(PluginGeneratedSerialDescriptor$_hashCode$lambda(this));
  }
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'serialName', {
    get: function () {
      return this.serialName_igazkg$_0;
    }
  });
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'elementsCount', {
    get: function () {
      return this.elementsCount_qx3iur$_0;
    }
  });
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'kind', {
    configurable: true,
    get: function () {
      return StructureKind$CLASS_getInstance();
    }
  });
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'annotations', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.classAnnotations_0) != null ? tmp$ : emptyList();
    }
  });
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'namesSet_8be2vx$', {
    configurable: true,
    get: function () {
      return this.indices_0.keys;
    }
  });
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'indices_0', {
    configurable: true,
    get: function () {
      return this.indices_73aj4y$_0.value;
    }
  });
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'typeParameterDescriptors_0', {
    configurable: true,
    get: function () {
      return this.typeParameterDescriptors_ggwkl6$_0.value;
    }
  });
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, '_hashCode_0', {
    configurable: true,
    get: function () {
      return this._hashCode_61j445$_0.value;
    }
  });
  PluginGeneratedSerialDescriptor.prototype.addElement_ivxn3r$ = function (name, isOptional) {
    if (isOptional === void 0)
      isOptional = false;
    this.names_0[this.added_0 = this.added_0 + 1 | 0, this.added_0] = name;
    this.elementsOptionality_0[this.added_0] = isOptional;
    this.propertiesAnnotations_0[this.added_0] = null;
  };
  PluginGeneratedSerialDescriptor.prototype.pushAnnotation_yj921w$ = function (annotation) {
    var it = this.propertiesAnnotations_0[this.added_0];
    var block$result;
    if (it == null) {
      var result = ArrayList_init(1);
      this.propertiesAnnotations_0[this.added_0] = result;
      block$result = result;
    } else {
      block$result = it;
    }
    var list = block$result;
    list.add_11rb$(annotation);
  };
  PluginGeneratedSerialDescriptor.prototype.pushClassAnnotation_yj921w$ = function (a) {
    if (this.classAnnotations_0 == null) {
      this.classAnnotations_0 = ArrayList_init(1);
    }ensureNotNull(this.classAnnotations_0).add_11rb$(a);
  };
  PluginGeneratedSerialDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.generatedSerializer_0) != null ? tmp$.childSerializers() : null) != null ? tmp$_0[index] : null) != null ? tmp$_1.descriptor : null;
    if (tmp$_2 == null) {
      throw new IndexOutOfBoundsException(this.serialName + ' descriptor has only ' + this.elementsCount + ' elements, index: ' + index);
    }return tmp$_2;
  };
  PluginGeneratedSerialDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    return getChecked_0(this.elementsOptionality_0, index);
  };
  PluginGeneratedSerialDescriptor.prototype.getElementAnnotations_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = getChecked(this.propertiesAnnotations_0, index)) != null ? tmp$ : emptyList();
  };
  PluginGeneratedSerialDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return getChecked(this.names_0, index);
  };
  PluginGeneratedSerialDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.indices_0.get_11rb$(name)) != null ? tmp$ : -3;
  };
  PluginGeneratedSerialDescriptor.prototype.buildIndices_0 = function () {
    var tmp$;
    var indices = HashMap_init();
    tmp$ = this.names_0;
    for (var i = 0; i !== tmp$.length; ++i) {
      var key = this.names_0[i];
      indices.put_xwzc9p$(key, i);
    }
    return indices;
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var equalsImpl$result;
    equalsImpl$break: do {
      var tmp$;
      if (this === other) {
        equalsImpl$result = true;
        break equalsImpl$break;
      }if (!Kotlin.isType(other, PluginGeneratedSerialDescriptor)) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }if (!equals(this.serialName, other.serialName)) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }if (!contentEquals(this.typeParameterDescriptors_0, other.typeParameterDescriptors_0)) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }if (this.elementsCount !== other.elementsCount) {
        equalsImpl$result = false;
        break equalsImpl$break;
      }tmp$ = this.elementsCount;
      for (var index = 0; index < tmp$; index++) {
        if (!equals(this.getElementDescriptor_za3lpa$(index).serialName, other.getElementDescriptor_za3lpa$(index).serialName)) {
          equalsImpl$result = false;
          break equalsImpl$break;
        }if (!equals(this.getElementDescriptor_za3lpa$(index).kind, other.getElementDescriptor_za3lpa$(index).kind)) {
          equalsImpl$result = false;
          break equalsImpl$break;
        }}
      equalsImpl$result = true;
    }
     while (false);
    return equalsImpl$result;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return this._hashCode_0;
  };
  function PluginGeneratedSerialDescriptor$toString$lambda(this$PluginGeneratedSerialDescriptor) {
    return function (it) {
      return it.key + ': ' + this$PluginGeneratedSerialDescriptor.getElementDescriptor_za3lpa$(it.value).serialName;
    };
  }
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    return joinToString(this.indices_0.entries, ', ', this.serialName + '(', ')', void 0, void 0, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function PluginGeneratedSerialDescriptor$indices$lambda(this$PluginGeneratedSerialDescriptor) {
    return function () {
      return this$PluginGeneratedSerialDescriptor.buildIndices_0();
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$lambda(this$PluginGeneratedSerialDescriptor) {
    return function () {
      var tmp$, tmp$_0;
      var tmp$_1;
      if ((tmp$_0 = (tmp$ = this$PluginGeneratedSerialDescriptor.generatedSerializer_0) != null ? tmp$.typeParametersSerializers() : null) != null) {
        var destination = ArrayList_init(tmp$_0.length);
        var tmp$_2;
        for (tmp$_2 = 0; tmp$_2 !== tmp$_0.length; ++tmp$_2) {
          var item = tmp$_0[tmp$_2];
          destination.add_11rb$(item.descriptor);
        }
        tmp$_1 = destination;
      } else
        tmp$_1 = null;
      return compactArray(tmp$_1);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$lambda(this$PluginGeneratedSerialDescriptor) {
    return function () {
      var $receiver = this$PluginGeneratedSerialDescriptor;
      var typeParams = this$PluginGeneratedSerialDescriptor.typeParameterDescriptors_0;
      var result = hashCode($receiver.serialName);
      result = (31 * result | 0) + contentHashCode(typeParams) | 0;
      var elementDescriptors = get_elementDescriptors($receiver);
      var tmp$;
      var accumulator = 1;
      tmp$ = elementDescriptors.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0 = 31 * accumulator | 0;
        var $receiver_0 = element.serialName;
        var tmp$_1;
        accumulator = tmp$_0 + ((tmp$_1 = $receiver_0 != null ? hashCode($receiver_0) : null) != null ? tmp$_1 : 0) | 0;
      }
      var namesHash = accumulator;
      var tmp$_2;
      var accumulator_0 = 1;
      tmp$_2 = elementDescriptors.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        var tmp$_3 = 31 * accumulator_0 | 0;
        var $receiver_1 = element_0.kind;
        var tmp$_4;
        accumulator_0 = tmp$_3 + ((tmp$_4 = $receiver_1 != null ? hashCode($receiver_1) : null) != null ? tmp$_4 : 0) | 0;
      }
      var kindHash = accumulator_0;
      result = (31 * result | 0) + namesHash | 0;
      result = (31 * result | 0) + kindHash | 0;
      return result;
    };
  }
  PluginGeneratedSerialDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PluginGeneratedSerialDescriptor',
    interfaces: [SerialDescriptor]
  };
  var equalsImpl = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.internal.equalsImpl_n6kco9$', wrapFunction(function () {
    var equals = Kotlin.equals;
    return function (SD_0, isSD, $receiver, other, typeParamsAreEqual) {
      var tmp$;
      if ($receiver === other)
        return true;
      if (!isSD(other))
        return false;
      if (!equals($receiver.serialName, other.serialName))
        return false;
      if (!typeParamsAreEqual(other))
        return false;
      if ($receiver.elementsCount !== other.elementsCount)
        return false;
      tmp$ = $receiver.elementsCount;
      for (var index = 0; index < tmp$; index++) {
        if (!equals($receiver.getElementDescriptor_za3lpa$(index).serialName, other.getElementDescriptor_za3lpa$(index).serialName))
          return false;
        if (!equals($receiver.getElementDescriptor_za3lpa$(index).kind, other.getElementDescriptor_za3lpa$(index).kind))
          return false;
      }
      return true;
    };
  }));
  var hashCodeImpl = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.internal.hashCodeImpl_y01f7g$', wrapFunction(function () {
    var hashCode = Kotlin.hashCode;
    var contentHashCode = Kotlin.arrayHashCode;
    var get_elementDescriptors = _.kotlinx.serialization.descriptors.get_elementDescriptors_583jlf$;
    var wrapFunction = Kotlin.wrapFunction;
    var elementsHashCodeBy$lambda = wrapFunction(function () {
      var hashCode = Kotlin.hashCode;
      return function (closure$selector) {
        return function (hash, element) {
          var tmp$ = 31 * hash | 0;
          var $receiver = closure$selector(element);
          var tmp$_0;
          return tmp$ + ((tmp$_0 = $receiver != null ? hashCode($receiver) : null) != null ? tmp$_0 : 0) | 0;
        };
      };
    });
    return function ($receiver, typeParams) {
      var result = hashCode($receiver.serialName);
      result = (31 * result | 0) + contentHashCode(typeParams) | 0;
      var elementDescriptors = get_elementDescriptors($receiver);
      var tmp$;
      var accumulator = 1;
      tmp$ = elementDescriptors.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0 = 31 * accumulator | 0;
        var $receiver_0 = element.serialName;
        var tmp$_1;
        accumulator = tmp$_0 + ((tmp$_1 = $receiver_0 != null ? hashCode($receiver_0) : null) != null ? tmp$_1 : 0) | 0;
      }
      var namesHash = accumulator;
      var tmp$_2;
      var accumulator_0 = 1;
      tmp$_2 = elementDescriptors.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        var tmp$_3 = 31 * accumulator_0 | 0;
        var $receiver_1 = element_0.kind;
        var tmp$_4;
        accumulator_0 = tmp$_3 + ((tmp$_4 = $receiver_1 != null ? hashCode($receiver_1) : null) != null ? tmp$_4 : 0) | 0;
      }
      var kindHash = accumulator_0;
      result = (31 * result | 0) + namesHash | 0;
      result = (31 * result | 0) + kindHash | 0;
      return result;
    };
  }));
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  GeneratedSerializer.prototype.typeParametersSerializers = function () {
    return EMPTY_SERIALIZER_ARRAY;
  };
  GeneratedSerializer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GeneratedSerializer',
    interfaces: [KSerializer]
  };
  function SerializerFactory() {
  }
  SerializerFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SerializerFactory',
    interfaces: []
  };
  var INITIAL_SIZE;
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_0(kotlin_js_internal_ByteCompanionObject));
  }
  ByteArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  ByteArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new ByteArrayBuilder($receiver);
  };
  ByteArraySerializer_0.prototype.empty = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_8e99oo$(decoder.decodeByteElement_szpzho$(this.descriptor, index));
  };
  ByteArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeByteElement_j0u8y3$(this.descriptor, i, content[i]);
  };
  ByteArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ByteArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var ByteArraySerializer_instance = null;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance === null) {
      new ByteArraySerializer_0();
    }return ByteArraySerializer_instance;
  }
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_8vrcnd$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(ByteArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_8vrcnd$_0;
    },
    set: function (position) {
      this.position_8vrcnd$_0 = position;
    }
  });
  ByteArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  ByteArrayBuilder.prototype.append_8e99oo$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  ByteArrayBuilder.prototype.build = function () {
    return copyOf(this.buffer_0, this.position);
  };
  ByteArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(kotlin_js_internal_ShortCompanionObject));
  }
  ShortArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  ShortArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new ShortArrayBuilder($receiver);
  };
  ShortArraySerializer_0.prototype.empty = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_o3ifnw$(decoder.decodeShortElement_szpzho$(this.descriptor, index));
  };
  ShortArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeShortElement_l83pjl$(this.descriptor, i, content[i]);
  };
  ShortArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ShortArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var ShortArraySerializer_instance = null;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance === null) {
      new ShortArraySerializer_0();
    }return ShortArraySerializer_instance;
  }
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_aswgsb$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(ShortArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_aswgsb$_0;
    },
    set: function (position) {
      this.position_aswgsb$_0 = position;
    }
  });
  ShortArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf_0(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  ShortArrayBuilder.prototype.append_o3ifnw$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  ShortArrayBuilder.prototype.build = function () {
    return copyOf_0(this.buffer_0, this.position);
  };
  ShortArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ShortArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(kotlin_js_internal_IntCompanionObject));
  }
  IntArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  IntArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new IntArrayBuilder($receiver);
  };
  IntArraySerializer_0.prototype.empty = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_kcn2v3$(decoder.decodeIntElement_szpzho$(this.descriptor, index));
  };
  IntArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeIntElement_ptg7oe$(this.descriptor, i, content[i]);
  };
  IntArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'IntArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var IntArraySerializer_instance = null;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance === null) {
      new IntArraySerializer_0();
    }return IntArraySerializer_instance;
  }
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_9owhjc$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(IntArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_9owhjc$_0;
    },
    set: function (position) {
      this.position_9owhjc$_0 = position;
    }
  });
  IntArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf_1(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  IntArrayBuilder.prototype.append_kcn2v3$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  IntArrayBuilder.prototype.build = function () {
    return copyOf_1(this.buffer_0, this.position);
  };
  IntArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(kotlin_js_internal_LongCompanionObject));
  }
  LongArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  LongArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new LongArrayBuilder($receiver);
  };
  LongArraySerializer_0.prototype.empty = function () {
    return Kotlin.longArray(0);
  };
  LongArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_8e33dg$(decoder.decodeLongElement_szpzho$(this.descriptor, index));
  };
  LongArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeLongElement_j0o2mv$(this.descriptor, i, content[i]);
  };
  LongArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LongArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var LongArraySerializer_instance = null;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance === null) {
      new LongArraySerializer_0();
    }return LongArraySerializer_instance;
  }
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_kthxoj$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(LongArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_kthxoj$_0;
    },
    set: function (position) {
      this.position_kthxoj$_0 = position;
    }
  });
  LongArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf_2(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  LongArrayBuilder.prototype.append_8e33dg$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  LongArrayBuilder.prototype.build = function () {
    return copyOf_2(this.buffer_0, this.position);
  };
  LongArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LongArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(kotlin_js_internal_FloatCompanionObject));
  }
  FloatArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  FloatArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new FloatArrayBuilder($receiver);
  };
  FloatArraySerializer_0.prototype.empty = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_nwfnho$(decoder.decodeFloatElement_szpzho$(this.descriptor, index));
  };
  FloatArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeFloatElement_lf6hpt$(this.descriptor, i, content[i]);
  };
  FloatArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FloatArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var FloatArraySerializer_instance = null;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance === null) {
      new FloatArraySerializer_0();
    }return FloatArraySerializer_instance;
  }
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_gfqw9x$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(FloatArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_gfqw9x$_0;
    },
    set: function (position) {
      this.position_gfqw9x$_0 = position;
    }
  });
  FloatArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf_3(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  FloatArrayBuilder.prototype.append_nwfnho$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  FloatArrayBuilder.prototype.build = function () {
    return copyOf_3(this.buffer_0, this.position);
  };
  FloatArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FloatArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(kotlin_js_internal_DoubleCompanionObject));
  }
  DoubleArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  DoubleArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new DoubleArrayBuilder($receiver);
  };
  DoubleArraySerializer_0.prototype.empty = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_tq0o01$(decoder.decodeDoubleElement_szpzho$(this.descriptor, index));
  };
  DoubleArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeDoubleElement_powrwi$(this.descriptor, i, content[i]);
  };
  DoubleArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DoubleArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var DoubleArraySerializer_instance = null;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance === null) {
      new DoubleArraySerializer_0();
    }return DoubleArraySerializer_instance;
  }
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_qka0uq$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(DoubleArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_qka0uq$_0;
    },
    set: function (position) {
      this.position_qka0uq$_0 = position;
    }
  });
  DoubleArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf_4(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  DoubleArrayBuilder.prototype.append_tq0o01$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  DoubleArrayBuilder.prototype.build = function () {
    return copyOf_4(this.buffer_0, this.position);
  };
  DoubleArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer(kotlin_js_internal_CharCompanionObject));
  }
  CharArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  CharArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new CharArrayBuilder($receiver);
  };
  CharArraySerializer_0.prototype.empty = function () {
    return Kotlin.charArray(0);
  };
  CharArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_8e8zqy$(unboxChar(decoder.decodeCharElement_szpzho$(this.descriptor, index)));
  };
  CharArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeCharElement_j0tz0d$(this.descriptor, i, content[i]);
  };
  CharArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CharArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var CharArraySerializer_instance = null;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance === null) {
      new CharArraySerializer_0();
    }return CharArraySerializer_instance;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_tpcwbb$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(CharArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_tpcwbb$_0;
    },
    set: function (position) {
      this.position_tpcwbb$_0 = position;
    }
  });
  CharArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf_5(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  CharArrayBuilder.prototype.append_8e8zqy$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  CharArrayBuilder.prototype.build = function () {
    return copyOf_5(this.buffer_0, this.position);
  };
  CharArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CharArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(kotlin_js_internal_BooleanCompanionObject));
  }
  BooleanArraySerializer_0.prototype.collectionSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  BooleanArraySerializer_0.prototype.toBuilder_wikn$ = function ($receiver) {
    return new BooleanArrayBuilder($receiver);
  };
  BooleanArraySerializer_0.prototype.empty = function () {
    return Kotlin.booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.readElement_8pvye7$$default = function (decoder, index, builder, checkIndex) {
    builder.append_vft4zs$(decoder.decodeBooleanElement_szpzho$(this.descriptor, index));
  };
  BooleanArraySerializer_0.prototype.writeContent_q3xt5$ = function (encoder, content, size) {
    for (var i = 0; i < size; i++)
      encoder.encodeBooleanElement_qh7jdn$(this.descriptor, i, content[i]);
  };
  BooleanArraySerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BooleanArraySerializer',
    interfaces: [PrimitiveArraySerializer, KSerializer]
  };
  var BooleanArraySerializer_instance = null;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance === null) {
      new BooleanArraySerializer_0();
    }return BooleanArraySerializer_instance;
  }
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_0 = bufferWithData;
    this.position_fkn8lr$_0 = bufferWithData.length;
    this.ensureCapacity_za3lpa$(10);
  }
  Object.defineProperty(BooleanArrayBuilder.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.position_fkn8lr$_0;
    },
    set: function (position) {
      this.position_fkn8lr$_0 = position;
    }
  });
  BooleanArrayBuilder.prototype.ensureCapacity_za3lpa$$default = function (requiredCapacity) {
    if (this.buffer_0.length < requiredCapacity)
      this.buffer_0 = copyOf_6(this.buffer_0, coerceAtLeast(requiredCapacity, this.buffer_0.length * 2 | 0));
  };
  BooleanArrayBuilder.prototype.append_vft4zs$ = function (c) {
    var tmp$;
    this.ensureCapacity_za3lpa$();
    this.buffer_0[tmp$ = this.position, this.position = tmp$ + 1 | 0, tmp$] = c;
  };
  BooleanArrayBuilder.prototype.build = function () {
    return copyOf_6(this.buffer_0, this.position);
  };
  BooleanArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BooleanArrayBuilder',
    interfaces: [PrimitiveArrayBuilder]
  };
  var BUILTIN_SERIALIZERS;
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.serialName_h9gugr$_0 = serialName;
    this.kind_rqp61y$_0 = kind;
  }
  Object.defineProperty(PrimitiveSerialDescriptor_0.prototype, 'serialName', {
    get: function () {
      return this.serialName_h9gugr$_0;
    }
  });
  Object.defineProperty(PrimitiveSerialDescriptor_0.prototype, 'kind', {
    get: function () {
      return this.kind_rqp61y$_0;
    }
  });
  Object.defineProperty(PrimitiveSerialDescriptor_0.prototype, 'elementsCount', {
    configurable: true,
    get: function () {
      return 0;
    }
  });
  PrimitiveSerialDescriptor_0.prototype.getElementName_za3lpa$ = function (index) {
    return this.error_0();
  };
  PrimitiveSerialDescriptor_0.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.error_0();
  };
  PrimitiveSerialDescriptor_0.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.error_0();
  };
  PrimitiveSerialDescriptor_0.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.error_0();
  };
  PrimitiveSerialDescriptor_0.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.error_0();
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.serialName + ')';
  };
  PrimitiveSerialDescriptor_0.prototype.error_0 = function () {
    throw IllegalStateException_init('Primitive descriptor does not have elements');
  };
  PrimitiveSerialDescriptor_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrimitiveSerialDescriptor',
    interfaces: [SerialDescriptor]
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    var tmp$;
    var keys = BUILTIN_SERIALIZERS.keys;
    tmp$ = keys.iterator();
    while (tmp$.hasNext()) {
      var primitive = tmp$.next();
      var simpleName = capitalize(ensureNotNull(primitive.simpleName));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) || equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init(trimIndent('\n' + '                The name of serial descriptor should uniquely identify associated serializer.' + '\n' + '                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.' + '\n' + '                Please refer to SerialDescriptor documentation for additional information.' + '\n' + '            '));
      }}
  }
  function builtinSerializerOrNull($receiver) {
    var tmp$;
    return (tmp$ = BUILTIN_SERIALIZERS.get_11rb$($receiver)) == null || Kotlin.isType(tmp$, KSerializer) ? tmp$ : throwCCE();
  }
  function UnitSerializer_0() {
    UnitSerializer_instance = this;
    this.$delegate_t0wm8i$_0 = new ObjectSerializer('kotlin.Unit', Unit);
  }
  Object.defineProperty(UnitSerializer_0.prototype, 'descriptor', {
    get: function () {
      return this.$delegate_t0wm8i$_0.descriptor;
    }
  });
  UnitSerializer_0.prototype.deserialize_bq71mq$ = function (decoder) {
    return this.$delegate_t0wm8i$_0.deserialize_bq71mq$(decoder);
  };
  UnitSerializer_0.prototype.patch_h7kg3r$ = function (decoder, old) {
    return this.$delegate_t0wm8i$_0.patch_h7kg3r$(decoder, old);
  };
  UnitSerializer_0.prototype.serialize_55azsf$ = function (encoder, value) {
    return this.$delegate_t0wm8i$_0.serialize_55azsf$(encoder, value);
  };
  UnitSerializer_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UnitSerializer',
    interfaces: [KSerializer]
  };
  var UnitSerializer_instance = null;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance === null) {
      new UnitSerializer_0();
    }return UnitSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.descriptor_vdtvaz$_0 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', PrimitiveKind$BOOLEAN_getInstance());
  }
  Object.defineProperty(BooleanSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_vdtvaz$_0;
    }
  });
  BooleanSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeBoolean_6taknv$(value);
  };
  BooleanSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeBoolean();
  };
  BooleanSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BooleanSerializer',
    interfaces: [KSerializer]
  };
  var BooleanSerializer_instance = null;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance === null) {
      new BooleanSerializer();
    }return BooleanSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.descriptor_f6vlf1$_0 = new PrimitiveSerialDescriptor_0('kotlin.Byte', PrimitiveKind$BYTE_getInstance());
  }
  Object.defineProperty(ByteSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_f6vlf1$_0;
    }
  });
  ByteSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeByte_s8j3t7$(value);
  };
  ByteSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeByte();
  };
  ByteSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ByteSerializer',
    interfaces: [KSerializer]
  };
  var ByteSerializer_instance = null;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance === null) {
      new ByteSerializer();
    }return ByteSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.descriptor_yvjeup$_0 = new PrimitiveSerialDescriptor_0('kotlin.Short', PrimitiveKind$SHORT_getInstance());
  }
  Object.defineProperty(ShortSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_yvjeup$_0;
    }
  });
  ShortSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeShort_mq22fl$(value);
  };
  ShortSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeShort();
  };
  ShortSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ShortSerializer',
    interfaces: [KSerializer]
  };
  var ShortSerializer_instance = null;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance === null) {
      new ShortSerializer();
    }return ShortSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.descriptor_xrjflq$_0 = new PrimitiveSerialDescriptor_0('kotlin.Int', PrimitiveKind$INT_getInstance());
  }
  Object.defineProperty(IntSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_xrjflq$_0;
    }
  });
  IntSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeInt_za3lpa$(value);
  };
  IntSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeInt();
  };
  IntSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'IntSerializer',
    interfaces: [KSerializer]
  };
  var IntSerializer_instance = null;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance === null) {
      new IntSerializer();
    }return IntSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.descriptor_q4z687$_0 = new PrimitiveSerialDescriptor_0('kotlin.Long', PrimitiveKind$LONG_getInstance());
  }
  Object.defineProperty(LongSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_q4z687$_0;
    }
  });
  LongSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeLong_s8cxhz$(value);
  };
  LongSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeLong();
  };
  LongSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LongSerializer',
    interfaces: [KSerializer]
  };
  var LongSerializer_instance = null;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance === null) {
      new LongSerializer();
    }return LongSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.descriptor_7mw1sh$_0 = new PrimitiveSerialDescriptor_0('kotlin.Float', PrimitiveKind$FLOAT_getInstance());
  }
  Object.defineProperty(FloatSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_7mw1sh$_0;
    }
  });
  FloatSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeFloat_mx4ult$(value);
  };
  FloatSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeFloat();
  };
  FloatSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FloatSerializer',
    interfaces: [KSerializer]
  };
  var FloatSerializer_instance = null;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance === null) {
      new FloatSerializer();
    }return FloatSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.descriptor_2hn2sc$_0 = new PrimitiveSerialDescriptor_0('kotlin.Double', PrimitiveKind$DOUBLE_getInstance());
  }
  Object.defineProperty(DoubleSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_2hn2sc$_0;
    }
  });
  DoubleSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeDouble_14dthe$(value);
  };
  DoubleSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeDouble();
  };
  DoubleSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DoubleSerializer',
    interfaces: [KSerializer]
  };
  var DoubleSerializer_instance = null;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance === null) {
      new DoubleSerializer();
    }return DoubleSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.descriptor_5mpy8x$_0 = new PrimitiveSerialDescriptor_0('kotlin.Char', PrimitiveKind$CHAR_getInstance());
  }
  Object.defineProperty(CharSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_5mpy8x$_0;
    }
  });
  CharSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeChar_s8itvh$(value);
  };
  CharSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeChar();
  };
  CharSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CharSerializer',
    interfaces: [KSerializer]
  };
  var CharSerializer_instance = null;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance === null) {
      new CharSerializer();
    }return CharSerializer_instance;
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.descriptor_sum718$_0 = new PrimitiveSerialDescriptor_0('kotlin.String', PrimitiveKind$STRING_getInstance());
  }
  Object.defineProperty(StringSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_sum718$_0;
    }
  });
  StringSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    encoder.encodeString_61zpoe$(value);
  };
  StringSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    return decoder.decodeString();
  };
  StringSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StringSerializer',
    interfaces: [KSerializer]
  };
  var StringSerializer_instance = null;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance === null) {
      new StringSerializer();
    }return StringSerializer_instance;
  }
  function Migration() {
  }
  Object.defineProperty(Migration.prototype, 'serialName', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init('Class used only for source-level migration'.toString());
    }
  });
  Object.defineProperty(Migration.prototype, 'kind', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init('Class used only for source-level migration'.toString());
    }
  });
  Object.defineProperty(Migration.prototype, 'elementsCount', {
    configurable: true,
    get: function () {
      throw IllegalStateException_init('Class used only for source-level migration'.toString());
    }
  });
  Migration.prototype.getElementName_za3lpa$ = function (index) {
    throw IllegalStateException_init('Class used only for source-level migration'.toString());
  };
  Migration.prototype.getElementIndex_61zpoe$ = function (name) {
    throw IllegalStateException_init('Class used only for source-level migration'.toString());
  };
  Migration.prototype.getElementAnnotations_za3lpa$ = function (index) {
    throw IllegalStateException_init('Class used only for source-level migration'.toString());
  };
  Migration.prototype.getElementDescriptor_za3lpa$ = function (index) {
    throw IllegalStateException_init('Class used only for source-level migration'.toString());
  };
  Migration.prototype.isElementOptional_za3lpa$ = function (index) {
    throw IllegalStateException_init('Class used only for source-level migration'.toString());
  };
  Migration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Migration',
    interfaces: [SerialDescriptor]
  };
  var message;
  function IntDescriptor() {
    IntDescriptor_instance = this;
    Migration.call(this);
  }
  IntDescriptor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'IntDescriptor',
    interfaces: [Migration]
  };
  var IntDescriptor_instance = null;
  function IntDescriptor_getInstance() {
    if (IntDescriptor_instance === null) {
      new IntDescriptor();
    }return IntDescriptor_instance;
  }
  function UnitDescriptor() {
    UnitDescriptor_instance = this;
    Migration.call(this);
  }
  UnitDescriptor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UnitDescriptor',
    interfaces: [Migration]
  };
  var UnitDescriptor_instance = null;
  function UnitDescriptor_getInstance() {
    if (UnitDescriptor_instance === null) {
      new UnitDescriptor();
    }return UnitDescriptor_instance;
  }
  function BooleanDescriptor() {
    BooleanDescriptor_instance = this;
    Migration.call(this);
  }
  BooleanDescriptor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BooleanDescriptor',
    interfaces: [Migration]
  };
  var BooleanDescriptor_instance = null;
  function BooleanDescriptor_getInstance() {
    if (BooleanDescriptor_instance === null) {
      new BooleanDescriptor();
    }return BooleanDescriptor_instance;
  }
  function ByteDescriptor() {
    ByteDescriptor_instance = this;
    Migration.call(this);
  }
  ByteDescriptor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ByteDescriptor',
    interfaces: [Migration]
  };
  var ByteDescriptor_instance = null;
  function ByteDescriptor_getInstance() {
    if (ByteDescriptor_instance === null) {
      new ByteDescriptor();
    }return ByteDescriptor_instance;
  }
  function ShortDescriptor() {
    ShortDescriptor_instance = this;
    Migration.call(this);
  }
  ShortDescriptor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ShortDescriptor',
    interfaces: [Migration]
  };
  var ShortDescriptor_instance = null;
  function ShortDescriptor_getInstance() {
    if (ShortDescriptor_instance === null) {
      new ShortDescriptor();
    }return ShortDescriptor_instance;
  }
  function LongDescriptor() {
    LongDescriptor_instance = this;
    Migration.call(this);
  }
  LongDescriptor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LongDescriptor',
    interfaces: [Migration]
  };
  var LongDescriptor_instance = null;
  function LongDescriptor_getInstance() {
    if (LongDescriptor_instance === null) {
      new LongDescriptor();
    }return LongDescriptor_instance;
  }
  function FloatDescriptor() {
    FloatDescriptor_instance = this;
    Migration.call(this);
  }
  FloatDescriptor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FloatDescriptor',
    interfaces: [Migration]
  };
  var FloatDescriptor_instance = null;
  function FloatDescriptor_getInstance() {
    if (FloatDescriptor_instance === null) {
      new FloatDescriptor();
    }return FloatDescriptor_instance;
  }
  function DoubleDescriptor() {
    DoubleDescriptor_instance = this;
    Migration.call(this);
  }
  DoubleDescriptor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DoubleDescriptor',
    interfaces: [Migration]
  };
  var DoubleDescriptor_instance = null;
  function DoubleDescriptor_getInstance() {
    if (DoubleDescriptor_instance === null) {
      new DoubleDescriptor();
    }return DoubleDescriptor_instance;
  }
  function CharDescriptor() {
    CharDescriptor_instance = this;
    Migration.call(this);
  }
  CharDescriptor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CharDescriptor',
    interfaces: [Migration]
  };
  var CharDescriptor_instance = null;
  function CharDescriptor_getInstance() {
    if (CharDescriptor_instance === null) {
      new CharDescriptor();
    }return CharDescriptor_instance;
  }
  function StringDescriptor() {
    StringDescriptor_instance = this;
    Migration.call(this);
  }
  StringDescriptor.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StringDescriptor',
    interfaces: [Migration]
  };
  var StringDescriptor_instance = null;
  function StringDescriptor_getInstance() {
    if (StringDescriptor_instance === null) {
      new StringDescriptor();
    }return StringDescriptor_instance;
  }
  function SerializationConstructorMarker() {
  }
  SerializationConstructorMarker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializationConstructorMarker',
    interfaces: []
  };
  function TaggedEncoder() {
    this.tagStack_cfsfm$_0 = ArrayList_init_0();
  }
  Object.defineProperty(TaggedEncoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return EmptySerializersModule;
    }
  });
  TaggedEncoder.prototype.encodeTaggedValue_dpg7wc$ = function (tag, value) {
    throw SerializationException_init_0('Non-serializable ' + Kotlin.getKClassFromExpression(value) + ' is not supported by ' + Kotlin.getKClassFromExpression(this) + ' encoder');
  };
  TaggedEncoder.prototype.encodeTaggedNotNullMark_11rb$ = function (tag) {
  };
  TaggedEncoder.prototype.encodeTaggedNull_11rb$ = function (tag) {
    throw SerializationException_init_0('null is not supported');
  };
  TaggedEncoder.prototype.encodeTaggedInt_dpg1yx$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedByte_19qe40$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedShort_veccj0$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedLong_19wkf8$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedFloat_vlf4p8$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedDouble_e37ph5$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedBoolean_iuyhfk$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedChar_19qo1q$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, toBoxedChar(value));
  };
  TaggedEncoder.prototype.encodeTaggedString_l9l8mx$ = function (tag, value) {
    this.encodeTaggedValue_dpg7wc$(tag, value);
  };
  TaggedEncoder.prototype.encodeTaggedEnum_4xdzqf$ = function (tag, enumDescriptor, ordinal) {
    this.encodeTaggedValue_dpg7wc$(tag, ordinal);
  };
  TaggedEncoder.prototype.encodeElement_qp90hq$_0 = function (desc, index) {
    var tag = this.getTag_av9bu7$(desc, index);
    this.pushTag_11rb$(tag);
    return true;
  };
  TaggedEncoder.prototype.encodeNotNullMark = function () {
    this.encodeTaggedNotNullMark_11rb$(this.currentTag);
  };
  TaggedEncoder.prototype.encodeNull = function () {
    this.encodeTaggedNull_11rb$(this.popTag());
  };
  TaggedEncoder.prototype.encodeBoolean_6taknv$ = function (value) {
    this.encodeTaggedBoolean_iuyhfk$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeByte_s8j3t7$ = function (value) {
    this.encodeTaggedByte_19qe40$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeShort_mq22fl$ = function (value) {
    this.encodeTaggedShort_veccj0$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeInt_za3lpa$ = function (value) {
    this.encodeTaggedInt_dpg1yx$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    this.encodeTaggedLong_19wkf8$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
    this.encodeTaggedFloat_vlf4p8$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeDouble_14dthe$ = function (value) {
    this.encodeTaggedDouble_e37ph5$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeTaggedChar_19qo1q$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeString_61zpoe$ = function (value) {
    this.encodeTaggedString_l9l8mx$(this.popTag(), value);
  };
  TaggedEncoder.prototype.encodeEnum_szpzho$ = function (enumDescriptor, index) {
    this.encodeTaggedEnum_4xdzqf$(this.popTag(), enumDescriptor, index);
  };
  TaggedEncoder.prototype.beginStructure_jvp2sb$ = function (descriptor, typeSerializers) {
    return this;
  };
  TaggedEncoder.prototype.endStructure_24f42q$ = function (descriptor) {
    if (!this.tagStack_cfsfm$_0.isEmpty()) {
      this.popTag();
    }this.endEncode_24f42q$(descriptor);
  };
  TaggedEncoder.prototype.endEncode_24f42q$ = function (descriptor) {
  };
  TaggedEncoder.prototype.encodeBooleanElement_qh7jdn$ = function (descriptor, index, value) {
    this.encodeTaggedBoolean_iuyhfk$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeByteElement_j0u8y3$ = function (descriptor, index, value) {
    this.encodeTaggedByte_19qe40$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeShortElement_l83pjl$ = function (descriptor, index, value) {
    this.encodeTaggedShort_veccj0$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeIntElement_ptg7oe$ = function (descriptor, index, value) {
    this.encodeTaggedInt_dpg1yx$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeLongElement_j0o2mv$ = function (descriptor, index, value) {
    this.encodeTaggedLong_19wkf8$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeFloatElement_lf6hpt$ = function (descriptor, index, value) {
    this.encodeTaggedFloat_vlf4p8$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeDoubleElement_powrwi$ = function (descriptor, index, value) {
    this.encodeTaggedDouble_e37ph5$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeCharElement_j0tz0d$ = function (descriptor, index, value) {
    this.encodeTaggedChar_19qo1q$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeStringElement_iij8qq$ = function (descriptor, index, value) {
    this.encodeTaggedString_l9l8mx$(this.getTag_av9bu7$(descriptor, index), value);
  };
  TaggedEncoder.prototype.encodeSerializableElement_r4qlx7$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_qp90hq$_0(descriptor, index))
      this.encodeSerializableValue_tf03ej$(serializer, value);
  };
  TaggedEncoder.prototype.encodeNullableSerializableElement_qw92s8$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_qp90hq$_0(descriptor, index))
      this.encodeNullableSerializableValue_f4686g$(serializer, value);
  };
  Object.defineProperty(TaggedEncoder.prototype, 'currentTag', {
    configurable: true,
    get: function () {
      return last(this.tagStack_cfsfm$_0);
    }
  });
  Object.defineProperty(TaggedEncoder.prototype, 'currentTagOrNull', {
    configurable: true,
    get: function () {
      return lastOrNull(this.tagStack_cfsfm$_0);
    }
  });
  TaggedEncoder.prototype.pushTag_11rb$ = function (name) {
    this.tagStack_cfsfm$_0.add_11rb$(name);
  };
  TaggedEncoder.prototype.popTag = function () {
    if (!this.tagStack_cfsfm$_0.isEmpty())
      return this.tagStack_cfsfm$_0.removeAt_za3lpa$(get_lastIndex(this.tagStack_cfsfm$_0));
    else
      throw SerializationException_init_0('No tag in stack for requested element');
  };
  TaggedEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TaggedEncoder',
    interfaces: [CompositeEncoder, Encoder]
  };
  function NamedValueEncoder(rootName) {
    if (rootName === void 0)
      rootName = '';
    TaggedEncoder.call(this);
    this.rootName = rootName;
  }
  NamedValueEncoder.prototype.getTag_av9bu7$ = function ($receiver, index) {
    return this.nested_61zpoe$(this.elementName_szpzho$($receiver, index));
  };
  NamedValueEncoder.prototype.nested_61zpoe$ = function (nestedName) {
    var tmp$;
    return this.composeName_puj7f4$((tmp$ = this.currentTagOrNull) != null ? tmp$ : this.rootName, nestedName);
  };
  NamedValueEncoder.prototype.elementName_szpzho$ = function (descriptor, index) {
    return descriptor.getElementName_za3lpa$(index);
  };
  NamedValueEncoder.prototype.composeName_puj7f4$ = function (parentName, childName) {
    return parentName.length === 0 ? childName : parentName + '.' + childName;
  };
  NamedValueEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamedValueEncoder',
    interfaces: [TaggedEncoder]
  };
  function TaggedDecoder() {
    this.updateMode_cp3ftw$_0 = UpdateMode$OVERWRITE_getInstance();
    this.tagStack_h2rpra$_0 = ArrayList_init_0();
    this.flag_kguhq4$_0 = false;
  }
  Object.defineProperty(TaggedDecoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return EmptySerializersModule;
    }
  });
  Object.defineProperty(TaggedDecoder.prototype, 'updateMode', {
    configurable: true,
    get: function () {
      return this.updateMode_cp3ftw$_0;
    }
  });
  TaggedDecoder.prototype.decodeTaggedValue_11rb$ = function (tag) {
    throw SerializationException_init_0(Kotlin.getKClassFromExpression(this).toString() + " can't retrieve untyped values");
  };
  TaggedDecoder.prototype.decodeTaggedNotNullMark_11rb$ = function (tag) {
    return true;
  };
  TaggedDecoder.prototype.decodeTaggedNull_11rb$ = function (tag) {
    return null;
  };
  TaggedDecoder.prototype.decodeTaggedBoolean_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'boolean' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedByte_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedShort_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedInt_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedLong_11rb$ = function (tag) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.decodeTaggedValue_11rb$(tag), Kotlin.Long) ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedFloat_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedDouble_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedChar_11rb$ = function (tag) {
    var tmp$;
    return Kotlin.isChar(tmp$ = this.decodeTaggedValue_11rb$(tag)) ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedString_11rb$ = function (tag) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'string' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeTaggedEnum_gaombr$ = function (tag, enumDescriptor) {
    var tmp$;
    return typeof (tmp$ = this.decodeTaggedValue_11rb$(tag)) === 'number' ? tmp$ : throwCCE();
  };
  TaggedDecoder.prototype.decodeSerializableValue_19c8k5$ = function (deserializer, previousValue) {
    return this.decodeSerializableValue_w63s0f$(deserializer);
  };
  TaggedDecoder.prototype.decodeNotNullMark = function () {
    return this.decodeTaggedNotNullMark_11rb$(this.currentTag);
  };
  TaggedDecoder.prototype.decodeNull = function () {
    return null;
  };
  TaggedDecoder.prototype.decodeBoolean = function () {
    return this.decodeTaggedBoolean_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeByte = function () {
    return this.decodeTaggedByte_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeShort = function () {
    return this.decodeTaggedShort_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeInt = function () {
    return this.decodeTaggedInt_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeLong = function () {
    return this.decodeTaggedLong_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeFloat = function () {
    return this.decodeTaggedFloat_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeDouble = function () {
    return this.decodeTaggedDouble_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeChar = function () {
    return this.decodeTaggedChar_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeString = function () {
    return this.decodeTaggedString_11rb$(this.popTag());
  };
  TaggedDecoder.prototype.decodeEnum_24f42q$ = function (enumDescriptor) {
    return this.decodeTaggedEnum_gaombr$(this.popTag(), enumDescriptor);
  };
  TaggedDecoder.prototype.beginStructure_jvp2sb$ = function (descriptor, typeParams) {
    return this;
  };
  TaggedDecoder.prototype.endStructure_24f42q$ = function (descriptor) {
  };
  TaggedDecoder.prototype.decodeBooleanElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedBoolean_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeByteElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedByte_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeShortElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedShort_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeIntElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedInt_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeLongElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedLong_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeFloatElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedFloat_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeDoubleElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedDouble_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeCharElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedChar_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  TaggedDecoder.prototype.decodeStringElement_szpzho$ = function (descriptor, index) {
    return this.decodeTaggedString_11rb$(this.getTag_av9bu7$(descriptor, index));
  };
  function TaggedDecoder$decodeSerializableElement$lambda(closure$deserializer, closure$previousValue, this$TaggedDecoder) {
    return function () {
      return this$TaggedDecoder.decodeSerializableValue_19c8k5$(closure$deserializer, closure$previousValue);
    };
  }
  TaggedDecoder.prototype.decodeSerializableElement_12e8id$$default = function (descriptor, index, deserializer, previousValue) {
    return this.tagBlock_lngyui$_0(this.getTag_av9bu7$(descriptor, index), TaggedDecoder$decodeSerializableElement$lambda(deserializer, previousValue, this));
  };
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$TaggedDecoder, closure$deserializer, closure$previousValue) {
    return function () {
      return this$TaggedDecoder.decodeNotNullMark() ? this$TaggedDecoder.decodeSerializableValue_19c8k5$(closure$deserializer, closure$previousValue) : this$TaggedDecoder.decodeNull();
    };
  }
  TaggedDecoder.prototype.decodeNullableSerializableElement_8viuyw$$default = function (descriptor, index, deserializer, previousValue) {
    return this.tagBlock_lngyui$_0(this.getTag_av9bu7$(descriptor, index), TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  TaggedDecoder.prototype.tagBlock_lngyui$_0 = function (tag, block) {
    this.pushTag_11rb$(tag);
    var r = block();
    if (!this.flag_kguhq4$_0) {
      this.popTag();
    }this.flag_kguhq4$_0 = false;
    return r;
  };
  Object.defineProperty(TaggedDecoder.prototype, 'currentTag', {
    configurable: true,
    get: function () {
      return last(this.tagStack_h2rpra$_0);
    }
  });
  Object.defineProperty(TaggedDecoder.prototype, 'currentTagOrNull', {
    configurable: true,
    get: function () {
      return lastOrNull(this.tagStack_h2rpra$_0);
    }
  });
  TaggedDecoder.prototype.pushTag_11rb$ = function (name) {
    this.tagStack_h2rpra$_0.add_11rb$(name);
  };
  TaggedDecoder.prototype.copyTagsTo_lgvuxj$ = function (other) {
    other.tagStack_h2rpra$_0.addAll_brywnq$(this.tagStack_h2rpra$_0);
  };
  TaggedDecoder.prototype.popTag = function () {
    var r = this.tagStack_h2rpra$_0.removeAt_za3lpa$(get_lastIndex(this.tagStack_h2rpra$_0));
    this.flag_kguhq4$_0 = true;
    return r;
  };
  TaggedDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TaggedDecoder',
    interfaces: [CompositeDecoder, Decoder]
  };
  function NamedValueDecoder(rootName) {
    if (rootName === void 0)
      rootName = '';
    TaggedDecoder.call(this);
    this.rootName = rootName;
  }
  NamedValueDecoder.prototype.getTag_av9bu7$ = function ($receiver, index) {
    return this.nested_61zpoe$(this.elementName_szpzho$($receiver, index));
  };
  NamedValueDecoder.prototype.nested_61zpoe$ = function (nestedName) {
    var tmp$;
    return this.composeName_puj7f4$((tmp$ = this.currentTagOrNull) != null ? tmp$ : this.rootName, nestedName);
  };
  NamedValueDecoder.prototype.elementName_szpzho$ = function (desc, index) {
    return desc.getElementName_za3lpa$(index);
  };
  NamedValueDecoder.prototype.composeName_puj7f4$ = function (parentName, childName) {
    return parentName.length === 0 ? childName : parentName + '.' + childName;
  };
  NamedValueDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NamedValueDecoder',
    interfaces: [TaggedDecoder]
  };
  var NULL;
  var deprecationMessage;
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.keySerializer = keySerializer;
    this.valueSerializer = valueSerializer;
  }
  KeyValueSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_24f42q$(this.descriptor);
    structuredEncoder.encodeSerializableElement_r4qlx7$(this.descriptor, 0, this.keySerializer, this.get_key_wili$(value));
    structuredEncoder.encodeSerializableElement_r4qlx7$(this.descriptor, 1, this.valueSerializer, this.get_value_wili$(value));
    structuredEncoder.endStructure_24f42q$(this.descriptor);
  };
  KeyValueSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var tmp$, tmp$_0;
    var composite = decoder.beginStructure_24f42q$(this.descriptor);
    if (composite.decodeSequentially()) {
      var key = composite.decodeSerializableElement_12e8id$(this.descriptor, 0, this.keySerializer);
      var value = composite.decodeSerializableElement_12e8id$(this.descriptor, 1, this.valueSerializer);
      return this.toResult_xwzc9p$(key, value);
    }var key_0 = NULL;
    var value_0 = NULL;
    mainLoop: while (true) {
      var idx = composite.decodeElementIndex_24f42q$(this.descriptor);
      switch (idx) {
        case -1:
          break mainLoop;
        case 0:
          key_0 = composite.decodeSerializableElement_12e8id$(this.descriptor, 0, this.keySerializer);
          break;
        case 1:
          value_0 = composite.decodeSerializableElement_12e8id$(this.descriptor, 1, this.valueSerializer);
          break;
        default:throw SerializationException_init_0('Invalid index: ' + idx);
      }
    }
    composite.endStructure_24f42q$(this.descriptor);
    if (key_0 === NULL)
      throw SerializationException_init_0("Element 'key' is missing");
    if (value_0 === NULL)
      throw SerializationException_init_0("Element 'value' is missing");
    return this.toResult_xwzc9p$((tmp$ = key_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), (tmp$_0 = value_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  };
  KeyValueSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyValueSerializer',
    interfaces: [KSerializer]
  };
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    this.descriptor_cnmk75$_0 = buildSerialDescriptor('kotlin.collections.Map.Entry', StructureKind$MAP_getInstance(), [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  function MapEntrySerializer$MapEntry(key, value) {
    this.key_7uv6mv$_0 = key;
    this.value_gjenjd$_0 = value;
  }
  Object.defineProperty(MapEntrySerializer$MapEntry.prototype, 'key', {
    get: function () {
      return this.key_7uv6mv$_0;
    }
  });
  Object.defineProperty(MapEntrySerializer$MapEntry.prototype, 'value', {
    get: function () {
      return this.value_gjenjd$_0;
    }
  });
  MapEntrySerializer$MapEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapEntry',
    interfaces: [Map$Entry]
  };
  MapEntrySerializer$MapEntry.prototype.component1 = function () {
    return this.key;
  };
  MapEntrySerializer$MapEntry.prototype.component2 = function () {
    return this.value;
  };
  MapEntrySerializer$MapEntry.prototype.copy_xwzc9p$ = function (key, value) {
    return new MapEntrySerializer$MapEntry(key === void 0 ? this.key : key, value === void 0 ? this.value : value);
  };
  MapEntrySerializer$MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  MapEntrySerializer$MapEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  MapEntrySerializer$MapEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value)))));
  };
  Object.defineProperty(MapEntrySerializer_0.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_cnmk75$_0;
    }
  });
  MapEntrySerializer_0.prototype.get_key_wili$ = function ($receiver) {
    return $receiver.key;
  };
  MapEntrySerializer_0.prototype.get_value_wili$ = function ($receiver) {
    return $receiver.value;
  };
  MapEntrySerializer_0.prototype.toResult_xwzc9p$ = function (key, value) {
    return new MapEntrySerializer$MapEntry(key, value);
  };
  function MapEntrySerializer$descriptor$lambda(closure$keySerializer, closure$valueSerializer) {
    return function ($receiver) {
      $receiver.element_vxrguq$('key', closure$keySerializer.descriptor);
      $receiver.element_vxrguq$('value', closure$valueSerializer.descriptor);
      return Unit;
    };
  }
  MapEntrySerializer_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapEntrySerializer',
    interfaces: [KeyValueSerializer]
  };
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    this.descriptor_utc4rp$_0 = buildClassSerialDescriptor('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer));
  }
  Object.defineProperty(PairSerializer_0.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_utc4rp$_0;
    }
  });
  PairSerializer_0.prototype.get_key_wili$ = function ($receiver) {
    return $receiver.first;
  };
  PairSerializer_0.prototype.get_value_wili$ = function ($receiver) {
    return $receiver.second;
  };
  PairSerializer_0.prototype.toResult_xwzc9p$ = function (key, value) {
    return to(key, value);
  };
  function PairSerializer$descriptor$lambda(closure$keySerializer, closure$valueSerializer) {
    return function ($receiver) {
      $receiver.element_vxrguq$('first', closure$keySerializer.descriptor);
      $receiver.element_vxrguq$('second', closure$valueSerializer.descriptor);
      return Unit;
    };
  }
  PairSerializer_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PairSerializer',
    interfaces: [KeyValueSerializer]
  };
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.aSerializer_0 = aSerializer;
    this.bSerializer_0 = bSerializer;
    this.cSerializer_0 = cSerializer;
    this.descriptor_73a6vr$_0 = buildClassSerialDescriptor('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this));
  }
  Object.defineProperty(TripleSerializer_0.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_73a6vr$_0;
    }
  });
  TripleSerializer_0.prototype.serialize_55azsf$ = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_24f42q$(this.descriptor);
    structuredEncoder.encodeSerializableElement_r4qlx7$(this.descriptor, 0, this.aSerializer_0, value.first);
    structuredEncoder.encodeSerializableElement_r4qlx7$(this.descriptor, 1, this.bSerializer_0, value.second);
    structuredEncoder.encodeSerializableElement_r4qlx7$(this.descriptor, 2, this.cSerializer_0, value.third);
    structuredEncoder.endStructure_24f42q$(this.descriptor);
  };
  TripleSerializer_0.prototype.deserialize_bq71mq$ = function (decoder) {
    var composite = decoder.beginStructure_24f42q$(this.descriptor);
    if (composite.decodeSequentially()) {
      return this.decodeSequentially_0(composite);
    }return this.decodeStructure_0(composite);
  };
  TripleSerializer_0.prototype.decodeSequentially_0 = function (composite) {
    var a = composite.decodeSerializableElement_12e8id$(this.descriptor, 0, this.aSerializer_0);
    var b = composite.decodeSerializableElement_12e8id$(this.descriptor, 1, this.bSerializer_0);
    var c = composite.decodeSerializableElement_12e8id$(this.descriptor, 2, this.cSerializer_0);
    composite.endStructure_24f42q$(this.descriptor);
    return new Triple(a, b, c);
  };
  TripleSerializer_0.prototype.decodeStructure_0 = function (composite) {
    var tmp$, tmp$_0, tmp$_1;
    var a = NULL;
    var b = NULL;
    var c = NULL;
    mainLoop: while (true) {
      var index = composite.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case -1:
          break mainLoop;
        case 0:
          a = composite.decodeSerializableElement_12e8id$(this.descriptor, 0, this.aSerializer_0);
          break;
        case 1:
          b = composite.decodeSerializableElement_12e8id$(this.descriptor, 1, this.bSerializer_0);
          break;
        case 2:
          c = composite.decodeSerializableElement_12e8id$(this.descriptor, 2, this.cSerializer_0);
          break;
        default:throw SerializationException_init_0('Unexpected index ' + index);
      }
    }
    composite.endStructure_24f42q$(this.descriptor);
    if (a === NULL)
      throw SerializationException_init_0("Element 'first' is missing");
    if (b === NULL)
      throw SerializationException_init_0("Element 'second' is missing");
    if (c === NULL)
      throw SerializationException_init_0("Element 'third' is missing");
    return new Triple((tmp$ = a) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), (tmp$_0 = b) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE(), (tmp$_1 = c) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE());
  };
  function TripleSerializer$descriptor$lambda(this$TripleSerializer) {
    return function ($receiver) {
      $receiver.element_vxrguq$('first', this$TripleSerializer.aSerializer_0.descriptor);
      $receiver.element_vxrguq$('second', this$TripleSerializer.bSerializer_0.descriptor);
      $receiver.element_vxrguq$('third', this$TripleSerializer.cSerializer_0.descriptor);
      return Unit;
    };
  }
  TripleSerializer_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TripleSerializer',
    interfaces: [KSerializer]
  };
  function JsonConf(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, serializersModule) {
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    if (ignoreUnknownKeys === void 0)
      ignoreUnknownKeys = false;
    if (isLenient === void 0)
      isLenient = false;
    if (allowStructuredMapKeys === void 0)
      allowStructuredMapKeys = false;
    if (prettyPrint === void 0)
      prettyPrint = false;
    if (prettyPrintIndent === void 0)
      prettyPrintIndent = '    ';
    if (coerceInputValues === void 0)
      coerceInputValues = false;
    if (useArrayPolymorphism === void 0)
      useArrayPolymorphism = false;
    if (classDiscriminator === void 0)
      classDiscriminator = 'type';
    if (allowSpecialFloatingPointValues === void 0)
      allowSpecialFloatingPointValues = false;
    if (serializersModule === void 0)
      serializersModule = EmptySerializersModule;
    this.encodeDefaults = encodeDefaults;
    this.ignoreUnknownKeys = ignoreUnknownKeys;
    this.isLenient = isLenient;
    this.allowStructuredMapKeys = allowStructuredMapKeys;
    this.prettyPrint = prettyPrint;
    this.prettyPrintIndent = prettyPrintIndent;
    this.coerceInputValues = coerceInputValues;
    this.useArrayPolymorphism = useArrayPolymorphism;
    this.classDiscriminator = classDiscriminator;
    this.allowSpecialFloatingPointValues = allowSpecialFloatingPointValues;
    this.serializersModule = serializersModule;
  }
  JsonConf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonConf',
    interfaces: []
  };
  JsonConf.prototype.component1 = function () {
    return this.encodeDefaults;
  };
  JsonConf.prototype.component2 = function () {
    return this.ignoreUnknownKeys;
  };
  JsonConf.prototype.component3 = function () {
    return this.isLenient;
  };
  JsonConf.prototype.component4 = function () {
    return this.allowStructuredMapKeys;
  };
  JsonConf.prototype.component5 = function () {
    return this.prettyPrint;
  };
  JsonConf.prototype.component6 = function () {
    return this.prettyPrintIndent;
  };
  JsonConf.prototype.component7 = function () {
    return this.coerceInputValues;
  };
  JsonConf.prototype.component8 = function () {
    return this.useArrayPolymorphism;
  };
  JsonConf.prototype.component9 = function () {
    return this.classDiscriminator;
  };
  JsonConf.prototype.component10 = function () {
    return this.allowSpecialFloatingPointValues;
  };
  JsonConf.prototype.component11 = function () {
    return this.serializersModule;
  };
  JsonConf.prototype.copy_2joh8z$ = function (encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, serializersModule) {
    return new JsonConf(encodeDefaults === void 0 ? this.encodeDefaults : encodeDefaults, ignoreUnknownKeys === void 0 ? this.ignoreUnknownKeys : ignoreUnknownKeys, isLenient === void 0 ? this.isLenient : isLenient, allowStructuredMapKeys === void 0 ? this.allowStructuredMapKeys : allowStructuredMapKeys, prettyPrint === void 0 ? this.prettyPrint : prettyPrint, prettyPrintIndent === void 0 ? this.prettyPrintIndent : prettyPrintIndent, coerceInputValues === void 0 ? this.coerceInputValues : coerceInputValues, useArrayPolymorphism === void 0 ? this.useArrayPolymorphism : useArrayPolymorphism, classDiscriminator === void 0 ? this.classDiscriminator : classDiscriminator, allowSpecialFloatingPointValues === void 0 ? this.allowSpecialFloatingPointValues : allowSpecialFloatingPointValues, serializersModule === void 0 ? this.serializersModule : serializersModule);
  };
  JsonConf.prototype.toString = function () {
    return 'JsonConf(encodeDefaults=' + Kotlin.toString(this.encodeDefaults) + (', ignoreUnknownKeys=' + Kotlin.toString(this.ignoreUnknownKeys)) + (', isLenient=' + Kotlin.toString(this.isLenient)) + (', allowStructuredMapKeys=' + Kotlin.toString(this.allowStructuredMapKeys)) + (', prettyPrint=' + Kotlin.toString(this.prettyPrint)) + (', prettyPrintIndent=' + Kotlin.toString(this.prettyPrintIndent)) + (', coerceInputValues=' + Kotlin.toString(this.coerceInputValues)) + (', useArrayPolymorphism=' + Kotlin.toString(this.useArrayPolymorphism)) + (', classDiscriminator=' + Kotlin.toString(this.classDiscriminator)) + (', allowSpecialFloatingPointValues=' + Kotlin.toString(this.allowSpecialFloatingPointValues)) + (', serializersModule=' + Kotlin.toString(this.serializersModule)) + ')';
  };
  JsonConf.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.encodeDefaults) | 0;
    result = result * 31 + Kotlin.hashCode(this.ignoreUnknownKeys) | 0;
    result = result * 31 + Kotlin.hashCode(this.isLenient) | 0;
    result = result * 31 + Kotlin.hashCode(this.allowStructuredMapKeys) | 0;
    result = result * 31 + Kotlin.hashCode(this.prettyPrint) | 0;
    result = result * 31 + Kotlin.hashCode(this.prettyPrintIndent) | 0;
    result = result * 31 + Kotlin.hashCode(this.coerceInputValues) | 0;
    result = result * 31 + Kotlin.hashCode(this.useArrayPolymorphism) | 0;
    result = result * 31 + Kotlin.hashCode(this.classDiscriminator) | 0;
    result = result * 31 + Kotlin.hashCode(this.allowSpecialFloatingPointValues) | 0;
    result = result * 31 + Kotlin.hashCode(this.serializersModule) | 0;
    return result;
  };
  JsonConf.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.encodeDefaults, other.encodeDefaults) && Kotlin.equals(this.ignoreUnknownKeys, other.ignoreUnknownKeys) && Kotlin.equals(this.isLenient, other.isLenient) && Kotlin.equals(this.allowStructuredMapKeys, other.allowStructuredMapKeys) && Kotlin.equals(this.prettyPrint, other.prettyPrint) && Kotlin.equals(this.prettyPrintIndent, other.prettyPrintIndent) && Kotlin.equals(this.coerceInputValues, other.coerceInputValues) && Kotlin.equals(this.useArrayPolymorphism, other.useArrayPolymorphism) && Kotlin.equals(this.classDiscriminator, other.classDiscriminator) && Kotlin.equals(this.allowSpecialFloatingPointValues, other.allowSpecialFloatingPointValues) && Kotlin.equals(this.serializersModule, other.serializersModule)))));
  };
  function JsonException(message) {
    SerializationException_init_0(message, this);
    this.name = 'JsonException';
  }
  JsonException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonException',
    interfaces: [SerializationException]
  };
  function JsonDecodingException(offset, message) {
    JsonException.call(this, offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
    this.name = 'JsonDecodingException';
  }
  JsonDecodingException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonDecodingException',
    interfaces: [JsonException]
  };
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    this.name = 'JsonEncodingException';
  }
  JsonEncodingException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonEncodingException',
    interfaces: [JsonException]
  };
  function JsonDecodingException_0(offset, message, input) {
    return new JsonDecodingException(offset, message + '\n' + 'JSON input: ' + minify(input, offset));
  }
  function InvalidFloatingPointEncoded(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + value.toString() + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + minify(output)));
  }
  function InvalidFloatingPointEncoded_0(value, key, output) {
    return new JsonEncodingException(unexpectedFpErrorMessage(value, key, output));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return new JsonDecodingException(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function throwInvalidFloatingPointDecoded($receiver, result) {
    $receiver.fail_bm4lxs$('Unexpected special floating-point value ' + result.toString() + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + specialFlowingValuesHint);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + value.toString() + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + minify(output));
  }
  function UnknownKeyException(key, input) {
    return new JsonDecodingException(-1, "Encountered unknown key '" + key + "'." + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.\n" + ('Current input: ' + minify(input)));
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.serialName + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.kind + "'." + '\n') + allowStructuredMapKeysHint);
  }
  function minify($receiver, offset) {
    if (offset === void 0)
      offset = -1;
    if ($receiver.length < 200)
      return $receiver;
    if (offset === -1) {
      var start = $receiver.length - 60 | 0;
      if (start <= 0)
        return $receiver;
      return '.....' + $receiver.substring(start);
    }var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= $receiver.length ? '' : '.....';
    var startIndex = coerceAtLeast(start_0, 0);
    var endIndex = coerceAtMost(end, $receiver.length);
    return prefix + $receiver.substring(startIndex, endIndex) + suffix;
  }
  function JsonParser(configuration, reader) {
    this.reader_0 = reader;
    this.isLenient_0 = configuration.isLenient;
  }
  JsonParser.prototype.readObject_0 = function () {
    var $this = this.reader_0;
    if ($this.tokenClass !== TC_BEGIN_OBJ) {
      toBoxedChar(toChar($this.tokenClass));
      $this.fail_bm4lxs$('Expected start of the object', $this.tokenPosition_0);
    }this.reader_0.nextToken();
    var $this_0 = this.reader_0;
    var condition = this.reader_0.tokenClass !== TC_COMMA;
    var position = this.reader_0.currentPosition;
    if (!condition) {
      $this_0.fail_bm4lxs$('Unexpected leading comma', position);
    }var result = LinkedHashMap_init();
    var valueExpected = false;
    while (this.reader_0.canBeginValue) {
      valueExpected = false;
      var key = this.isLenient_0 ? this.reader_0.takeString() : this.reader_0.takeStringQuoted();
      var $this_1 = this.reader_0;
      if ($this_1.tokenClass !== TC_COLON) {
        toBoxedChar(toChar($this_1.tokenClass));
        $this_1.fail_bm4lxs$("Expected ':'", $this_1.tokenPosition_0);
      }this.reader_0.nextToken();
      var element = this.read();
      result.put_xwzc9p$(key, element);
      if (this.reader_0.tokenClass !== TC_COMMA) {
        var $this_2 = this.reader_0;
        if ($this_2.tokenClass !== TC_END_OBJ) {
          toBoxedChar(toChar($this_2.tokenClass));
          $this_2.fail_bm4lxs$('Expected end of the object or comma', $this_2.tokenPosition_0);
        }} else {
        valueExpected = true;
        this.reader_0.nextToken();
      }
    }
    var $this_3 = this.reader_0;
    var condition_0 = !valueExpected && this.reader_0.tokenClass === TC_END_OBJ;
    var position_0 = this.reader_0.currentPosition;
    if (!condition_0) {
      $this_3.fail_bm4lxs$('Expected end of the object', position_0);
    }this.reader_0.nextToken();
    return new JsonObject(result);
  };
  JsonParser.prototype.readArray_0 = function () {
    var $this = this.reader_0;
    if ($this.tokenClass !== TC_BEGIN_LIST) {
      toBoxedChar(toChar($this.tokenClass));
      $this.fail_bm4lxs$('Expected start of the array', $this.tokenPosition_0);
    }this.reader_0.nextToken();
    var $this_0 = this.reader_0;
    var condition = this.reader_0.tokenClass !== TC_COMMA;
    var position = this.reader_0.currentPosition;
    if (!condition) {
      $this_0.fail_bm4lxs$('Unexpected leading comma', position);
    }var result = ArrayList_init_0();
    var valueExpected = false;
    while (this.reader_0.canBeginValue) {
      valueExpected = false;
      var element = this.read();
      result.add_11rb$(element);
      if (this.reader_0.tokenClass !== TC_COMMA) {
        var $this_1 = this.reader_0;
        if ($this_1.tokenClass !== TC_END_LIST) {
          toBoxedChar(toChar($this_1.tokenClass));
          $this_1.fail_bm4lxs$('Expected end of the array or comma', $this_1.tokenPosition_0);
        }} else {
        valueExpected = true;
        this.reader_0.nextToken();
      }
    }
    var $this_2 = this.reader_0;
    var condition_0 = !valueExpected;
    var position_0 = this.reader_0.currentPosition;
    if (!condition_0) {
      $this_2.fail_bm4lxs$('Unexpected trailing comma', position_0);
    }this.reader_0.nextToken();
    return new JsonArray(result);
  };
  JsonParser.prototype.readValue_0 = function (isString) {
    var tmp$;
    if (this.isLenient_0) {
      tmp$ = this.reader_0.takeString();
    } else {
      tmp$ = isString ? this.reader_0.takeStringQuoted() : this.reader_0.takeString();
    }
    var str = tmp$;
    return new JsonLiteral(str, isString);
  };
  JsonParser.prototype.read = function () {
    var tmp$;
    if (!this.reader_0.canBeginValue)
      this.reader_0.fail_bm4lxs$("Can't begin reading value from here");
    switch (this.reader_0.tokenClass) {
      case 10:
        var $receiver = JsonNull_getInstance();
        this.reader_0.nextToken();
        tmp$ = $receiver;
        break;
      case 1:
        tmp$ = this.readValue_0(true);
        break;
      case 0:
        tmp$ = this.readValue_0(false);
        break;
      case 6:
        tmp$ = this.readObject_0();
        break;
      case 8:
        tmp$ = this.readArray_0();
        break;
      default:tmp$ = this.reader_0.fail_bm4lxs$("Can't begin reading element, unexpected token");
        break;
    }
    return tmp$;
  };
  JsonParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonParser',
    interfaces: []
  };
  var lenientHint;
  var coerceInputValuesHint;
  var specialFlowingValuesHint;
  var ignoreUnknownKeysHint;
  var allowStructuredMapKeysHint;
  var NULL_0;
  var COMMA;
  var COLON;
  var BEGIN_OBJ;
  var END_OBJ;
  var BEGIN_LIST;
  var END_LIST;
  var STRING;
  var STRING_ESC;
  var INVALID;
  var UNICODE_ESC;
  var TC_OTHER;
  var TC_STRING;
  var TC_STRING_ESC;
  var TC_WS;
  var TC_COMMA;
  var TC_COLON;
  var TC_BEGIN_OBJ;
  var TC_END_OBJ;
  var TC_BEGIN_LIST;
  var TC_END_LIST;
  var TC_NULL;
  var TC_INVALID;
  var TC_EOF;
  var CTC_MAX;
  var ESC2C_MAX;
  var C2TC;
  function EscapeCharMappings() {
    EscapeCharMappings_instance = this;
    this.ESCAPE_2_CHAR = Kotlin.charArray(117);
    for (var i = 0; i <= 31; i++) {
      this.initC2ESC_0(i, UNICODE_ESC);
    }
    this.initC2ESC_0(8, 98);
    this.initC2ESC_0(9, 116);
    this.initC2ESC_0(10, 110);
    this.initC2ESC_0(12, 102);
    this.initC2ESC_0(13, 114);
    this.initC2ESC_1(47, 47);
    this.initC2ESC_1(STRING, STRING);
    this.initC2ESC_1(STRING_ESC, STRING_ESC);
  }
  EscapeCharMappings.prototype.initC2ESC_0 = function (c, esc) {
    if (esc !== UNICODE_ESC)
      this.ESCAPE_2_CHAR[esc | 0] = toChar(c);
  };
  EscapeCharMappings.prototype.initC2ESC_1 = function (c, esc) {
    this.initC2ESC_0(c | 0, esc);
  };
  EscapeCharMappings.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'EscapeCharMappings',
    interfaces: []
  };
  var EscapeCharMappings_instance = null;
  function EscapeCharMappings_getInstance() {
    if (EscapeCharMappings_instance === null) {
      new EscapeCharMappings();
    }return EscapeCharMappings_instance;
  }
  function initC2TC($receiver, c, cl) {
    $receiver[c] = cl;
  }
  function initC2TC_0($receiver, c, cl) {
    initC2TC($receiver, c | 0, cl);
  }
  function charToTokenClass(c) {
    return (c | 0) < 126 ? C2TC[c | 0] : TC_OTHER;
  }
  function escapeToChar(c) {
    return unboxChar(c < 117 ? EscapeCharMappings_getInstance().ESCAPE_2_CHAR[c] : INVALID);
  }
  function JsonReader(source) {
    this.source_0 = source;
    this.currentPosition = 0;
    this.tokenClass = TC_EOF;
    this.tokenPosition_0 = 0;
    this.offset_0 = -1;
    this.length_0 = 0;
    this.buf_0 = Kotlin.charArray(16);
    this.nextToken();
  }
  Object.defineProperty(JsonReader.prototype, 'isDone', {
    configurable: true,
    get: function () {
      return this.tokenClass === TC_EOF;
    }
  });
  Object.defineProperty(JsonReader.prototype, 'canBeginValue', {
    configurable: true,
    get: function () {
      switch (this.tokenClass) {
        case 8:
        case 6:
        case 0:
        case 1:
        case 10:
          return true;
        default:return false;
      }
    }
  });
  JsonReader.prototype.requireTokenClass_mvfnf3$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.json.internal.JsonReader.requireTokenClass_mvfnf3$', wrapFunction(function () {
    var toChar = Kotlin.toChar;
    var toBoxedChar = Kotlin.toBoxedChar;
    return function (expected, errorMessage) {
      if (this.tokenClass !== expected)
        this.fail_bm4lxs$(errorMessage(toBoxedChar(toChar(this.tokenClass))), this.tokenPosition_0);
    };
  }));
  JsonReader.prototype.takeString = function () {
    if (this.tokenClass !== TC_OTHER && this.tokenClass !== TC_STRING)
      this.fail_bm4lxs$('Expected string or non-null literal', this.tokenPosition_0);
    return this.takeStringInternal_0();
  };
  JsonReader.prototype.peekString_6taknv$ = function (isLenient) {
    return this.tokenClass !== TC_STRING && (!isLenient || this.tokenClass !== TC_OTHER) ? null : this.takeStringInternal_0(false);
  };
  JsonReader.prototype.takeStringQuoted = function () {
    switch (this.tokenClass) {
      case 1:
        break;
      case 10:
        this.fail_bm4lxs$("Expected string literal but 'null' literal was found.\nUse 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.", this.tokenPosition_0);
        break;
      default:this.fail_bm4lxs$("Expected string literal with quotes.\nUse 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.", this.tokenPosition_0);
        break;
    }
    return this.takeStringInternal_0();
  };
  JsonReader.prototype.takeBooleanStringUnquoted = function () {
    if (this.tokenClass !== TC_OTHER)
      this.fail_bm4lxs$("Expected start of the unquoted boolean literal.\nUse 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.", this.tokenPosition_0);
    return this.takeStringInternal_0();
  };
  JsonReader.prototype.takeStringInternal_0 = function (advance) {
    if (advance === void 0)
      advance = true;
    var tmp$;
    if (this.offset_0 < 0)
      tmp$ = concatToString(this.buf_0, 0, 0 + this.length_0 | 0);
    else {
      var $receiver = this.source_0;
      var startIndex = this.offset_0;
      var endIndex = this.offset_0 + this.length_0 | 0;
      tmp$ = $receiver.substring(startIndex, endIndex);
    }
    var prevStr = tmp$;
    if (advance)
      this.nextToken();
    return prevStr;
  };
  JsonReader.prototype.append_0 = function (ch) {
    var tmp$;
    if (this.length_0 >= this.buf_0.length)
      this.buf_0 = copyOf_5(this.buf_0, 2 * this.buf_0.length | 0);
    this.buf_0[tmp$ = this.length_0, this.length_0 = tmp$ + 1 | 0, tmp$] = ch;
  };
  JsonReader.prototype.appendRange_0 = function (source, fromIndex, toIndex) {
    var addLen = toIndex - fromIndex | 0;
    var oldLen = this.length_0;
    var newLen = oldLen + addLen | 0;
    if (newLen > this.buf_0.length)
      this.buf_0 = copyOf_5(this.buf_0, coerceAtLeast(newLen, 2 * this.buf_0.length | 0));
    for (var i = 0; i < addLen; i++)
      this.buf_0[oldLen + i | 0] = source.charCodeAt(fromIndex + i | 0);
    this.length_0 = this.length_0 + addLen | 0;
  };
  JsonReader.prototype.nextToken = function () {
    var source = this.source_0;
    var currentPosition = this.currentPosition;
    while (currentPosition < source.length) {
      var ch = source.charCodeAt(currentPosition);
      var tc = charToTokenClass(ch);
      switch (tc) {
        case 3:
          currentPosition = currentPosition + 1 | 0;
          break;
        case 0:
          this.nextLiteral_0(source, currentPosition);
          return;
        case 1:
          this.nextString_0(source, currentPosition);
          return;
        default:this.tokenPosition_0 = currentPosition;
          this.tokenClass = tc;
          this.currentPosition = currentPosition + 1 | 0;
          return;
      }
    }
    this.tokenPosition_0 = currentPosition;
    this.tokenClass = TC_EOF;
  };
  JsonReader.prototype.nextLiteral_0 = function (source, startPos) {
    this.tokenPosition_0 = startPos;
    this.offset_0 = startPos;
    var currentPosition = startPos;
    while (currentPosition < source.length && charToTokenClass(source.charCodeAt(currentPosition)) === TC_OTHER) {
      currentPosition = currentPosition + 1 | 0;
    }
    this.currentPosition = currentPosition;
    this.length_0 = currentPosition - this.offset_0 | 0;
    this.tokenClass = rangeEquals(source, this.offset_0, this.length_0, NULL_0) ? TC_NULL : TC_OTHER;
  };
  JsonReader.prototype.nextString_0 = function (source, startPosition) {
    this.tokenPosition_0 = startPosition;
    this.length_0 = 0;
    var currentPosition = startPosition + 1 | 0;
    var lastPosition = currentPosition;
    while (source.charCodeAt(currentPosition) !== STRING) {
      if (source.charCodeAt(currentPosition) === STRING_ESC) {
        this.appendRange_0(source, lastPosition, currentPosition);
        var newPosition = this.appendEsc_0(source, currentPosition + 1 | 0);
        currentPosition = newPosition;
        lastPosition = newPosition;
      } else if ((currentPosition = currentPosition + 1 | 0, currentPosition) >= source.length) {
        this.fail_bm4lxs$('EOF', currentPosition);
      }}
    if (lastPosition === (startPosition + 1 | 0)) {
      this.offset_0 = lastPosition;
      this.length_0 = currentPosition - lastPosition | 0;
    } else {
      this.appendRange_0(source, lastPosition, currentPosition);
      this.offset_0 = -1;
    }
    this.currentPosition = currentPosition + 1 | 0;
    this.tokenClass = TC_STRING;
  };
  JsonReader.prototype.appendEsc_0 = function (source, startPosition) {
    var tmp$;
    var currentPosition = startPosition;
    var condition = currentPosition < source.length;
    var position = currentPosition;
    if (!condition) {
      this.fail_bm4lxs$('Unexpected EOF after escape character', position);
    }var currentChar = source.charCodeAt((tmp$ = currentPosition, currentPosition = tmp$ + 1 | 0, tmp$));
    if (currentChar === UNICODE_ESC) {
      return this.appendHex_0(source, currentPosition);
    }var c = escapeToChar(currentChar | 0);
    var condition_0 = c !== INVALID;
    var position_0 = currentPosition;
    if (!condition_0) {
      this.fail_bm4lxs$("Invalid escaped char '" + String.fromCharCode(currentChar) + "'", position_0);
    }this.append_0(c);
    return currentPosition;
  };
  JsonReader.prototype.appendHex_0 = function (source, startPos) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var curPos = startPos;
    this.append_0(toChar((this.fromHexChar_0(source, (tmp$ = curPos, curPos = tmp$ + 1 | 0, tmp$)) << 12) + (this.fromHexChar_0(source, (tmp$_0 = curPos, curPos = tmp$_0 + 1 | 0, tmp$_0)) << 8) + (this.fromHexChar_0(source, (tmp$_1 = curPos, curPos = tmp$_1 + 1 | 0, tmp$_1)) << 4) + this.fromHexChar_0(source, (tmp$_2 = curPos, curPos = tmp$_2 + 1 | 0, tmp$_2)) | 0));
    return curPos;
  };
  JsonReader.prototype.skipElement = function () {
    if (this.tokenClass !== TC_BEGIN_OBJ && this.tokenClass !== TC_BEGIN_LIST) {
      this.nextToken();
      return;
    }var tokenStack = ArrayList_init_0();
    do {
      switch (this.tokenClass) {
        case 8:
        case 6:
          tokenStack.add_11rb$(this.tokenClass);
          break;
        case 9:
          if (last(tokenStack) !== TC_BEGIN_LIST)
            throw JsonDecodingException_0(this.currentPosition, 'found ] instead of }', this.source_0);
          tokenStack.removeAt_za3lpa$(tokenStack.size - 1 | 0);
          break;
        case 7:
          if (last(tokenStack) !== TC_BEGIN_OBJ)
            throw JsonDecodingException_0(this.currentPosition, 'found } instead of ]', this.source_0);
          tokenStack.removeAt_za3lpa$(tokenStack.size - 1 | 0);
          break;
      }
      this.nextToken();
      var isNotEmpty$result;
      isNotEmpty$result = !tokenStack.isEmpty();
    }
     while (isNotEmpty$result);
  };
  JsonReader.prototype.toString = function () {
    return "JsonReader(source='" + this.source_0 + "', currentPosition=" + this.currentPosition + ', tokenClass=' + this.tokenClass + ', tokenPosition=' + this.tokenPosition_0 + ', offset=' + this.offset_0 + ')';
  };
  JsonReader.prototype.fail_bm4lxs$ = function (message, position) {
    if (position === void 0)
      position = this.currentPosition;
    throw JsonDecodingException_0(position, message, this.source_0);
  };
  JsonReader.prototype.require_wqn2ds$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.json.internal.JsonReader.require_wqn2ds$', function (condition, position, message) {
    if (position === void 0)
      position = this.currentPosition;
    if (!condition)
      this.fail_bm4lxs$(message(), position);
  });
  JsonReader.prototype.fromHexChar_0 = function (source, currentPosition) {
    var tmp$;
    if (!(currentPosition < source.length)) {
      this.fail_bm4lxs$('Unexpected EOF during unicode escape', currentPosition);
    }var curChar = source.charCodeAt(currentPosition);
    if ((new CharRange(48, 57)).contains_mef7kx$(curChar))
      tmp$ = (curChar | 0) - 48 | 0;
    else if ((new CharRange(97, 102)).contains_mef7kx$(curChar))
      tmp$ = (curChar | 0) - 97 + 10 | 0;
    else if ((new CharRange(65, 70)).contains_mef7kx$(curChar))
      tmp$ = (curChar | 0) - 65 + 10 | 0;
    else
      tmp$ = this.fail_bm4lxs$("Invalid toHexChar char '" + String.fromCharCode(curChar) + "' in unicode escape");
    return tmp$;
  };
  JsonReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonReader',
    interfaces: []
  };
  function rangeEquals(source, start, length, str) {
    var n = str.length;
    if (length !== n)
      return false;
    for (var i = 0; i < n; i++)
      if (source.charCodeAt(start + i | 0) !== str.charCodeAt(i))
        return false;
    return true;
  }
  var encodePolymorphically = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.json.internal.encodePolymorphically_51w9c5$', wrapFunction(function () {
    var AbstractPolymorphicSerializer = _.kotlinx.serialization.internal.AbstractPolymorphicSerializer;
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    return function ($receiver, serializer, value, ifPolymorphic) {
      var tmp$;
      if (!Kotlin.isType(serializer, AbstractPolymorphicSerializer) || $receiver.json.configuration_8be2vx$.useArrayPolymorphism) {
        serializer.serialize_55azsf$($receiver, value);
        return;
      }var tmp$_0;
      var actualSerializer = findActualSerializer($receiver, Kotlin.isType(tmp$_0 = serializer, KSerializer) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$ = value, Any) ? tmp$ : throwCCE());
      ifPolymorphic();
      actualSerializer.serialize_55azsf$($receiver, value);
    };
  }));
  function findActualSerializer($receiver, serializer, value) {
    var tmp$, tmp$_0;
    var casted = Kotlin.isType(tmp$ = serializer, AbstractPolymorphicSerializer) ? tmp$ : throwCCE();
    var actualSerializer = findPolymorphicSerializer_0(casted, $receiver, Kotlin.isType(tmp$_0 = value, Any) ? tmp$_0 : throwCCE());
    validateIfSealed(casted, actualSerializer, $receiver.json.configuration_8be2vx$.classDiscriminator);
    var kind = actualSerializer.descriptor.kind;
    checkKind(kind);
    return actualSerializer;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!Kotlin.isType(serializer, SealedClassSerializer))
      return;
    if (cachedSerialNames(actualSerializer.descriptor).contains_11rb$(classDiscriminator)) {
      var baseName = serializer.descriptor.serialName;
      var actualName = actualSerializer.descriptor.serialName;
      throw IllegalStateException_init(("Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism').toString());
    }}
  function checkKind(kind) {
    if (Kotlin.isType(kind, SerialKind$ENUM)) {
      throw IllegalStateException_init("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead".toString());
    }if (Kotlin.isType(kind, PrimitiveKind)) {
      throw IllegalStateException_init("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead".toString());
    }if (Kotlin.isType(kind, PolymorphicKind)) {
      throw IllegalStateException_init('Actual serializer for polymorphic cannot be polymorphic itself'.toString());
    }}
  function decodeSerializableValuePolymorphic($receiver, deserializer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (!Kotlin.isType(deserializer, AbstractPolymorphicSerializer) || $receiver.json.configuration_8be2vx$.useArrayPolymorphism) {
      return deserializer.deserialize_bq71mq$($receiver);
    }var value = $receiver.decodeJsonElement();
    var descriptor = deserializer.descriptor;
    if (!Kotlin.isType(value, JsonObject)) {
      throw new JsonDecodingException(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.serialName + ', but had ' + Kotlin.getKClassFromExpression(value));
    }var jsonTree = value;
    var discriminator = $receiver.json.configuration_8be2vx$.classDiscriminator;
    var type = (tmp$_0 = (tmp$ = jsonTree.get_11rb$(discriminator)) != null ? get_jsonPrimitive(tmp$) : null) != null ? tmp$_0.content : null;
    var tmp$_3;
    if ((tmp$_1 = deserializer.findPolymorphicSerializerOrNull_ca6uye$($receiver, type)) != null) {
      var tmp$_4;
      tmp$_3 = Kotlin.isType(tmp$_4 = tmp$_1, DeserializationStrategy) ? tmp$_4 : throwCCE();
    } else
      tmp$_3 = null;
    var actualSerializer = (tmp$_2 = tmp$_3) != null ? tmp$_2 : throwSerializerNotFound(type, jsonTree);
    return readPolymorphicJson($receiver.json, discriminator, jsonTree, actualSerializer);
  }
  function throwSerializerNotFound(type, jsonTree) {
    var suffix = type == null ? "missing class discriminator ('null')" : "class discriminator '" + toString(type) + "'";
    throw JsonDecodingException_0(-1, 'Polymorphic serializer was not found for ' + suffix, jsonTree.toString());
  }
  function PolymorphismValidator(useArrayPolymorphism, discriminator) {
    this.useArrayPolymorphism_0 = useArrayPolymorphism;
    this.discriminator_0 = discriminator;
  }
  PolymorphismValidator.prototype.contextual_cfhkba$ = function (kClass, serializer) {
  };
  PolymorphismValidator.prototype.polymorphic_kfyidi$ = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.descriptor;
    this.checkKind_0(descriptor, actualClass);
    if (!this.useArrayPolymorphism_0) {
      this.checkDiscriminatorCollisions_0(descriptor, actualClass);
    }};
  PolymorphismValidator.prototype.checkKind_0 = function (descriptor, actualClass) {
    var kind = descriptor.kind;
    if (Kotlin.isType(kind, PolymorphicKind) || equals(kind, SerialKind$CONTEXTUAL_getInstance())) {
      throw IllegalArgumentException_init('Serializer for ' + toString(actualClass.simpleName) + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }if (this.useArrayPolymorphism_0)
      return;
    if (equals(kind, StructureKind$LIST_getInstance()) || equals(kind, StructureKind$MAP_getInstance()) || Kotlin.isType(kind, PrimitiveKind) || Kotlin.isType(kind, SerialKind$ENUM)) {
      throw IllegalArgumentException_init('Serializer for ' + toString(actualClass.simpleName) + ' of kind ' + kind + ' cannot be serialized polymorphically with class discriminator.');
    }};
  PolymorphismValidator.prototype.checkDiscriminatorCollisions_0 = function (descriptor, actualClass) {
    var tmp$;
    tmp$ = descriptor.elementsCount;
    for (var i = 0; i < tmp$; i++) {
      var name = descriptor.getElementName_za3lpa$(i);
      if (equals(name, this.discriminator_0)) {
        throw IllegalArgumentException_init('Polymorphic serializer for ' + actualClass + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
      }}
  };
  PolymorphismValidator.prototype.polymorphicDefault_yd5wsm$ = function (baseClass, defaultSerializerProvider) {
  };
  PolymorphismValidator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolymorphismValidator',
    interfaces: [SerializersModuleCollector]
  };
  function StreamingJsonDecoder(json, mode, reader) {
    AbstractDecoder.call(this);
    this.json_n7tmf6$_0 = json;
    this.mode_0 = mode;
    this.reader_8be2vx$ = reader;
    this.serializersModule_5carun$_0 = this.json.serializersModule;
    this.currentIndex_0 = -1;
    this.configuration_0 = this.json.configuration_8be2vx$;
  }
  Object.defineProperty(StreamingJsonDecoder.prototype, 'json', {
    get: function () {
      return this.json_n7tmf6$_0;
    }
  });
  Object.defineProperty(StreamingJsonDecoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.serializersModule_5carun$_0;
    }
  });
  Object.defineProperty(StreamingJsonDecoder.prototype, 'updateMode', {
    configurable: true,
    get: function () {
      return UpdateMode$OVERWRITE_getInstance();
    }
  });
  StreamingJsonDecoder.prototype.decodeJsonElement = function () {
    return (new JsonParser(this.json.configuration_8be2vx$, this.reader_8be2vx$)).read();
  };
  StreamingJsonDecoder.prototype.decodeSerializableValue_w63s0f$ = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  StreamingJsonDecoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    var tmp$;
    var newMode = switchMode(this.json, descriptor);
    if (unboxChar(newMode.begin) !== INVALID) {
      var $this = this.reader_8be2vx$;
      if ($this.tokenClass !== newMode.beginTc) {
        toBoxedChar(toChar($this.tokenClass));
        $this.fail_bm4lxs$("Expected '" + String.fromCharCode(unboxChar(newMode.begin)) + ', kind: ' + descriptor.kind + "'", $this.tokenPosition_0);
      }this.reader_8be2vx$.nextToken();
    }switch (newMode.name) {
      case 'LIST':
      case 'MAP':
      case 'POLY_OBJ':
        tmp$ = new StreamingJsonDecoder(this.json, newMode, this.reader_8be2vx$);
        break;
      default:tmp$ = this.mode_0 === newMode ? this : new StreamingJsonDecoder(this.json, newMode, this.reader_8be2vx$);
        break;
    }
    return tmp$;
  };
  StreamingJsonDecoder.prototype.endStructure_24f42q$ = function (descriptor) {
    if (unboxChar(this.mode_0.end) !== INVALID) {
      var $this = this.reader_8be2vx$;
      if ($this.tokenClass !== this.mode_0.endTc) {
        toBoxedChar(toChar($this.tokenClass));
        $this.fail_bm4lxs$("Expected '" + String.fromCharCode(unboxChar(this.mode_0.end)) + "'", $this.tokenPosition_0);
      }this.reader_8be2vx$.nextToken();
    }};
  StreamingJsonDecoder.prototype.decodeNotNullMark = function () {
    return this.reader_8be2vx$.tokenClass !== TC_NULL;
  };
  StreamingJsonDecoder.prototype.decodeNull = function () {
    var $this = this.reader_8be2vx$;
    if ($this.tokenClass !== TC_NULL) {
      toBoxedChar(toChar($this.tokenClass));
      $this.fail_bm4lxs$("Expected 'null' literal", $this.tokenPosition_0);
    }this.reader_8be2vx$.nextToken();
    return null;
  };
  StreamingJsonDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    var tmp$;
    var tokenClass = this.reader_8be2vx$.tokenClass;
    if (tokenClass === TC_COMMA) {
      var $this = this.reader_8be2vx$;
      var condition = this.currentIndex_0 !== -1;
      var position = this.reader_8be2vx$.currentPosition;
      if (!condition) {
        $this.fail_bm4lxs$('Unexpected leading comma', position);
      }this.reader_8be2vx$.nextToken();
    }switch (this.mode_0.name) {
      case 'LIST':
        tmp$ = this.decodeListIndex_0(tokenClass);
        break;
      case 'MAP':
        tmp$ = this.decodeMapIndex_0(tokenClass);
        break;
      case 'POLY_OBJ':
        switch (this.currentIndex_0 = this.currentIndex_0 + 1 | 0, this.currentIndex_0) {
          case 0:
            tmp$ = 0;
            break;
          case 1:
            tmp$ = 1;
            break;
          default:tmp$ = -1;
            break;
        }

        break;
      default:tmp$ = this.decodeObjectIndex_0(tokenClass, descriptor);
        break;
    }
    return tmp$;
  };
  StreamingJsonDecoder.prototype.decodeMapIndex_0 = function (tokenClass) {
    var tmp$;
    if (tokenClass !== TC_COMMA && this.currentIndex_0 % 2 === 1) {
      var $this = this.reader_8be2vx$;
      if ($this.tokenClass !== TC_END_OBJ) {
        toBoxedChar(toChar($this.tokenClass));
        $this.fail_bm4lxs$('Expected end of the object or comma', $this.tokenPosition_0);
      }}if (this.currentIndex_0 % 2 === 0) {
      var $this_0 = this.reader_8be2vx$;
      if ($this_0.tokenClass !== TC_COLON) {
        toBoxedChar(toChar($this_0.tokenClass));
        $this_0.fail_bm4lxs$("Expected ':' after the key", $this_0.tokenPosition_0);
      }this.reader_8be2vx$.nextToken();
    }if (!this.reader_8be2vx$.canBeginValue) {
      var $this_1 = this.reader_8be2vx$;
      var condition = tokenClass !== TC_COMMA;
      var position;
      position = $this_1.currentPosition;
      if (!condition) {
        $this_1.fail_bm4lxs$('Unexpected trailing comma', position);
      }tmp$ = -1;
    } else {
      tmp$ = (this.currentIndex_0 = this.currentIndex_0 + 1 | 0, this.currentIndex_0);
    }
    return tmp$;
  };
  StreamingJsonDecoder.prototype.coerceInputValue_0 = function (descriptor, index) {
    var tmp$;
    var elementDescriptor = descriptor.getElementDescriptor_za3lpa$(index);
    if (this.reader_8be2vx$.tokenClass === TC_NULL && !elementDescriptor.isNullable)
      return true;
    if (equals(elementDescriptor.kind, SerialKind$ENUM_getInstance())) {
      tmp$ = this.reader_8be2vx$.peekString_6taknv$(this.configuration_0.isLenient);
      if (tmp$ == null) {
        return false;
      }var enumValue = tmp$;
      var enumIndex = elementDescriptor.getElementIndex_61zpoe$(enumValue);
      if (enumIndex === -3)
        return true;
    }return false;
  };
  StreamingJsonDecoder.prototype.decodeObjectIndex_0 = function (tokenClass, descriptor) {
    var tmp$;
    if (tokenClass === TC_COMMA && !this.reader_8be2vx$.canBeginValue) {
      this.reader_8be2vx$.fail_bm4lxs$('Unexpected trailing comma');
    }while (this.reader_8be2vx$.canBeginValue) {
      this.currentIndex_0 = this.currentIndex_0 + 1 | 0;
      var key = this.decodeString();
      var $this = this.reader_8be2vx$;
      if ($this.tokenClass !== TC_COLON) {
        toBoxedChar(toChar($this.tokenClass));
        $this.fail_bm4lxs$("Expected ':'", $this.tokenPosition_0);
      }this.reader_8be2vx$.nextToken();
      var index = descriptor.getElementIndex_61zpoe$(key);
      if (index !== -3) {
        if (this.configuration_0.coerceInputValues && this.coerceInputValue_0(descriptor, index)) {
          tmp$ = false;
        } else {
          return index;
        }
      } else {
        tmp$ = true;
      }
      var isUnknown = tmp$;
      if (isUnknown && !this.configuration_0.ignoreUnknownKeys) {
        this.reader_8be2vx$.fail_bm4lxs$("Encountered an unknown key '" + key + "'." + '\n' + ignoreUnknownKeysHint);
      } else {
        this.reader_8be2vx$.skipElement();
      }
      if (this.reader_8be2vx$.tokenClass === TC_COMMA) {
        this.reader_8be2vx$.nextToken();
        var $this_0 = this.reader_8be2vx$;
        var condition = this.reader_8be2vx$.canBeginValue;
        var position = this.reader_8be2vx$.currentPosition;
        if (!condition) {
          $this_0.fail_bm4lxs$('Unexpected trailing comma', position);
        }}}
    return -1;
  };
  StreamingJsonDecoder.prototype.decodeListIndex_0 = function (tokenClass) {
    var tmp$;
    if (tokenClass !== TC_COMMA && this.currentIndex_0 !== -1) {
      var $this = this.reader_8be2vx$;
      if ($this.tokenClass !== TC_END_LIST) {
        toBoxedChar(toChar($this.tokenClass));
        $this.fail_bm4lxs$('Expected end of the array or comma', $this.tokenPosition_0);
      }}if (!this.reader_8be2vx$.canBeginValue) {
      var $this_0 = this.reader_8be2vx$;
      var condition = tokenClass !== TC_COMMA;
      var position;
      position = $this_0.currentPosition;
      if (!condition) {
        $this_0.fail_bm4lxs$('Unexpected trailing comma', position);
      }tmp$ = -1;
    } else {
      tmp$ = (this.currentIndex_0 = this.currentIndex_0 + 1 | 0, this.currentIndex_0);
    }
    return tmp$;
  };
  StreamingJsonDecoder.prototype.decodeBoolean = function () {
    var tmp$;
    if (this.configuration_0.isLenient) {
      tmp$ = toBooleanStrict(this.reader_8be2vx$.takeString());
    } else {
      tmp$ = toBooleanStrict(this.reader_8be2vx$.takeBooleanStringUnquoted());
    }
    return tmp$;
  };
  StreamingJsonDecoder.prototype.decodeByte = function () {
    var $receiver = this.reader_8be2vx$.takeString();
    var parse_0$result;
    try {
      parse_0$result = toByte_0($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + 'byte' + "'");
      } else
        throw e;
    }
    return parse_0$result;
  };
  StreamingJsonDecoder.prototype.decodeShort = function () {
    var $receiver = this.reader_8be2vx$.takeString();
    var parse_0$result;
    try {
      parse_0$result = toShort($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + 'short' + "'");
      } else
        throw e;
    }
    return parse_0$result;
  };
  StreamingJsonDecoder.prototype.decodeInt = function () {
    var $receiver = this.reader_8be2vx$.takeString();
    var parse_0$result;
    try {
      parse_0$result = toInt($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + 'int' + "'");
      } else
        throw e;
    }
    return parse_0$result;
  };
  StreamingJsonDecoder.prototype.decodeLong = function () {
    var $receiver = this.reader_8be2vx$.takeString();
    var parse_0$result;
    try {
      parse_0$result = toLong($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + 'long' + "'");
      } else
        throw e;
    }
    return parse_0$result;
  };
  StreamingJsonDecoder.prototype.decodeFloat = function () {
    var $receiver = this.reader_8be2vx$.takeString();
    var parse_0$result;
    try {
      parse_0$result = toDouble($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + 'float' + "'");
      } else
        throw e;
    }
    var result = parse_0$result;
    var specialFp = this.json.configuration_8be2vx$.allowSpecialFloatingPointValues;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.reader_8be2vx$, result);
  };
  StreamingJsonDecoder.prototype.decodeDouble = function () {
    var $receiver = this.reader_8be2vx$.takeString();
    var parse_0$result;
    try {
      parse_0$result = toDouble($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + 'double' + "'");
      } else
        throw e;
    }
    var result = parse_0$result;
    var specialFp = this.json.configuration_8be2vx$.allowSpecialFloatingPointValues;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.reader_8be2vx$, result);
  };
  StreamingJsonDecoder.prototype.decodeChar = function () {
    var $receiver = this.reader_8be2vx$.takeString();
    var parse_0$result;
    try {
      parse_0$result = toBoxedChar(single($receiver));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + 'char' + "'");
      } else
        throw e;
    }
    return parse_0$result;
  };
  StreamingJsonDecoder.prototype.decodeString = function () {
    var tmp$;
    if (this.configuration_0.isLenient) {
      tmp$ = this.reader_8be2vx$.takeString();
    } else {
      tmp$ = this.reader_8be2vx$.takeStringQuoted();
    }
    return tmp$;
  };
  StreamingJsonDecoder.prototype.parse_0 = function ($receiver, type, block) {
    try {
      return block($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.reader_8be2vx$.fail_bm4lxs$("Failed to parse '" + type + "'");
      } else
        throw e;
    }
  };
  StreamingJsonDecoder.prototype.decodeEnum_24f42q$ = function (enumDescriptor) {
    return getElementIndexOrThrow(enumDescriptor, this.decodeString());
  };
  StreamingJsonDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StreamingJsonDecoder',
    interfaces: [AbstractDecoder, JsonDecoder]
  };
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.composer_0 = composer;
    this.json_8uu1uy$_0 = json;
    this.mode_0 = mode;
    this.modeReuseCache_0 = modeReuseCache;
    this.serializersModule_tvtxsn$_0 = this.json.serializersModule;
    this.configuration_0 = this.json.configuration_8be2vx$;
    this.forceQuoting_0 = false;
    this.writePolymorphic_0 = false;
    var i = this.mode_0.ordinal;
    if (this.modeReuseCache_0[i] !== null || this.modeReuseCache_0[i] !== this)
      this.modeReuseCache_0[i] = this;
  }
  Object.defineProperty(StreamingJsonEncoder.prototype, 'json', {
    get: function () {
      return this.json_8uu1uy$_0;
    }
  });
  Object.defineProperty(StreamingJsonEncoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.serializersModule_tvtxsn$_0;
    }
  });
  StreamingJsonEncoder.prototype.encodeJsonElement_qiw0cd$ = function (element) {
    this.encodeSerializableValue_tf03ej$(JsonElementSerializer_getInstance(), element);
  };
  StreamingJsonEncoder.prototype.shouldEncodeElementDefault_szpzho$ = function (descriptor, index) {
    return this.configuration_0.encodeDefaults;
  };
  StreamingJsonEncoder.prototype.encodeSerializableValue_tf03ej$ = function (serializer, value) {
    encodePolymorphically$break: do {
      var tmp$;
      if (!Kotlin.isType(serializer, AbstractPolymorphicSerializer) || this.json.configuration_8be2vx$.useArrayPolymorphism) {
        serializer.serialize_55azsf$(this, value);
        break encodePolymorphically$break;
      }var tmp$_0;
      var actualSerializer = findActualSerializer(this, Kotlin.isType(tmp$_0 = serializer, KSerializer) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$ = value, Any) ? tmp$ : throwCCE());
      this.writePolymorphic_0 = true;
      actualSerializer.serialize_55azsf$(this, value);
    }
     while (false);
  };
  StreamingJsonEncoder.prototype.encodeTypeInfo_0 = function (descriptor) {
    this.composer_0.nextItem();
    this.encodeString_61zpoe$(this.configuration_0.classDiscriminator);
    this.composer_0.print_s8itvh$(COLON);
    this.composer_0.space();
    this.encodeString_61zpoe$(descriptor.serialName);
  };
  StreamingJsonEncoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    var tmp$;
    var newMode = switchMode(this.json, descriptor);
    if (unboxChar(newMode.begin) !== INVALID) {
      this.composer_0.print_s8itvh$(unboxChar(newMode.begin));
      this.composer_0.indent();
    }if (this.writePolymorphic_0) {
      this.writePolymorphic_0 = false;
      this.encodeTypeInfo_0(descriptor);
    }if (this.mode_0 === newMode) {
      return this;
    }return (tmp$ = this.modeReuseCache_0[newMode.ordinal]) != null ? tmp$ : new StreamingJsonEncoder(this.composer_0, this.json, newMode, this.modeReuseCache_0);
  };
  StreamingJsonEncoder.prototype.endStructure_24f42q$ = function (descriptor) {
    if (unboxChar(this.mode_0.end) !== INVALID) {
      this.composer_0.unIndent();
      this.composer_0.nextItem();
      this.composer_0.print_s8itvh$(unboxChar(this.mode_0.end));
    }};
  StreamingJsonEncoder.prototype.encodeElement_szpzho$ = function (descriptor, index) {
    var tmp$;
    switch (this.mode_0.name) {
      case 'LIST':
        if (!this.composer_0.writingFirst)
          this.composer_0.print_s8itvh$(COMMA);
        this.composer_0.nextItem();
        break;
      case 'MAP':
        if (!this.composer_0.writingFirst) {
          if (index % 2 === 0) {
            this.composer_0.print_s8itvh$(COMMA);
            this.composer_0.nextItem();
            tmp$ = true;
          } else {
            this.composer_0.print_s8itvh$(COLON);
            this.composer_0.space();
            tmp$ = false;
          }
          this.forceQuoting_0 = tmp$;
        } else {
          this.forceQuoting_0 = true;
          this.composer_0.nextItem();
        }

        break;
      case 'POLY_OBJ':
        if (index === 0)
          this.forceQuoting_0 = true;
        if (index === 1) {
          this.composer_0.print_s8itvh$(COMMA);
          this.composer_0.space();
          this.forceQuoting_0 = false;
        }
        break;
      default:if (!this.composer_0.writingFirst)
          this.composer_0.print_s8itvh$(COMMA);
        this.composer_0.nextItem();
        this.encodeString_61zpoe$(descriptor.getElementName_za3lpa$(index));
        this.composer_0.print_s8itvh$(COLON);
        this.composer_0.space();
        break;
    }
    return true;
  };
  StreamingJsonEncoder.prototype.encodeNull = function () {
    this.composer_0.print_61zpoe$(NULL_0);
  };
  StreamingJsonEncoder.prototype.encodeBoolean_6taknv$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_6taknv$(value);
  };
  StreamingJsonEncoder.prototype.encodeByte_s8j3t7$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_s8j3t7$(value);
  };
  StreamingJsonEncoder.prototype.encodeShort_mq22fl$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_mq22fl$(value);
  };
  StreamingJsonEncoder.prototype.encodeInt_za3lpa$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_za3lpa$(value);
  };
  StreamingJsonEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_s8cxhz$(value);
  };
  StreamingJsonEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_mx4ult$(value);
    if (!this.configuration_0.allowSpecialFloatingPointValues && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, this.composer_0.sb_8be2vx$.toString());
    }};
  StreamingJsonEncoder.prototype.encodeDouble_14dthe$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.composer_0.print_14dthe$(value);
    if (!this.configuration_0.allowSpecialFloatingPointValues && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, this.composer_0.sb_8be2vx$.toString());
    }};
  StreamingJsonEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeString_61zpoe$(String.fromCharCode(value));
  };
  StreamingJsonEncoder.prototype.encodeString_61zpoe$ = function (value) {
    this.composer_0.printQuoted_61zpoe$(value);
  };
  StreamingJsonEncoder.prototype.encodeEnum_szpzho$ = function (enumDescriptor, index) {
    this.encodeString_61zpoe$(enumDescriptor.getElementName_za3lpa$(index));
  };
  function StreamingJsonEncoder$Composer(sb, json) {
    this.sb_8be2vx$ = sb;
    this.json_0 = json;
    this.level_0 = 0;
    this.writingFirst_4lagic$_0 = true;
  }
  Object.defineProperty(StreamingJsonEncoder$Composer.prototype, 'writingFirst', {
    configurable: true,
    get: function () {
      return this.writingFirst_4lagic$_0;
    },
    set: function (writingFirst) {
      this.writingFirst_4lagic$_0 = writingFirst;
    }
  });
  StreamingJsonEncoder$Composer.prototype.indent = function () {
    this.writingFirst = true;
    this.level_0 = this.level_0 + 1 | 0;
  };
  StreamingJsonEncoder$Composer.prototype.unIndent = function () {
    this.level_0 = this.level_0 - 1 | 0;
  };
  StreamingJsonEncoder$Composer.prototype.nextItem = function () {
    this.writingFirst = false;
    if (this.json_0.configuration_8be2vx$.prettyPrint) {
      this.print_61zpoe$('\n');
      var times = this.level_0;
      for (var index = 0; index < times; index++) {
        this.print_61zpoe$(this.json_0.configuration_8be2vx$.prettyPrintIndent);
      }
    }};
  StreamingJsonEncoder$Composer.prototype.space = function () {
    if (this.json_0.configuration_8be2vx$.prettyPrint)
      this.print_s8itvh$(32);
  };
  StreamingJsonEncoder$Composer.prototype.print_s8itvh$ = function (v) {
    return this.sb_8be2vx$.append_s8itvh$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_61zpoe$ = function (v) {
    return this.sb_8be2vx$.append_pdl1vj$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_mx4ult$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_14dthe$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_s8j3t7$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_mq22fl$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_za3lpa$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_s8cxhz$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  StreamingJsonEncoder$Composer.prototype.print_6taknv$ = function (v) {
    return this.sb_8be2vx$.append_6taknv$(v);
  };
  StreamingJsonEncoder$Composer.prototype.printQuoted_61zpoe$ = function (value) {
    printQuoted(this.sb_8be2vx$, value);
  };
  StreamingJsonEncoder$Composer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Composer',
    interfaces: []
  };
  StreamingJsonEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StreamingJsonEncoder',
    interfaces: [AbstractEncoder, JsonEncoder]
  };
  function StreamingJsonEncoder_init(output, json, mode, modeReuseCache, $this) {
    $this = $this || Object.create(StreamingJsonEncoder.prototype);
    StreamingJsonEncoder.call($this, new StreamingJsonEncoder$Composer(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function toHexChar(i) {
    var d = i & 15;
    return d < 10 ? toChar(d + 48 | 0) : toChar(d - 10 + 97 | 0);
  }
  var ESCAPE_CHARS;
  function printQuoted($receiver, value) {
    var tmp$;
    $receiver.append_s8itvh$(STRING);
    var lastPos = 0;
    var length = value.length;
    for (var i = 0; i < length; i++) {
      var c = value.charCodeAt(i) | 0;
      if (c >= ESCAPE_CHARS.length)
        continue;
      tmp$ = ESCAPE_CHARS[c];
      if (tmp$ == null) {
        continue;
      }var esc = tmp$;
      $receiver.append_ezbsdh$(value, lastPos, i);
      $receiver.append_pdl1vj$(esc);
      lastPos = i + 1 | 0;
    }
    $receiver.append_ezbsdh$(value, lastPos, length);
    $receiver.append_s8itvh$(STRING);
  }
  function toBooleanStrict($receiver) {
    var tmp$;
    tmp$ = toBooleanStrictOrNull($receiver);
    if (tmp$ == null) {
      throw IllegalStateException_init($receiver + ' does not represent a Boolean');
    }return tmp$;
  }
  function toBooleanStrictOrNull($receiver) {
    if (equals_0($receiver, 'true', true))
      return true;
    else if (equals_0($receiver, 'false', true))
      return false;
    else
      return null;
  }
  function shouldBeQuoted(str) {
    var tmp$;
    if (equals(str, NULL_0))
      return true;
    tmp$ = iterator(str);
    while (tmp$.hasNext()) {
      var ch = unboxChar(tmp$.next());
      if (charToTokenClass(ch) !== TC_OTHER)
        return true;
    }
    return false;
  }
  function readJson($receiver, element, deserializer) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(element, JsonObject))
      tmp$_0 = new JsonTreeDecoder($receiver, element);
    else if (Kotlin.isType(element, JsonArray))
      tmp$_0 = new JsonTreeListDecoder($receiver, element);
    else if (Kotlin.isType(element, JsonLiteral) || equals(element, JsonNull_getInstance())) {
      tmp$_0 = new JsonPrimitiveDecoder($receiver, Kotlin.isType(tmp$ = element, JsonPrimitive) ? tmp$ : throwCCE());
    } else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    var input = tmp$_0;
    return input.decodeSerializableValue_w63s0f$(deserializer);
  }
  function readPolymorphicJson($receiver, discriminator, element, deserializer) {
    return (new JsonTreeDecoder($receiver, element, discriminator, deserializer.descriptor)).decodeSerializableValue_w63s0f$(deserializer);
  }
  function AbstractJsonTreeDecoder(json, value) {
    NamedValueDecoder.call(this);
    this.json_nf7dq8$_0 = json;
    this.value_admuh1$_0 = value;
    this.configuration_0 = this.json.configuration_8be2vx$;
  }
  Object.defineProperty(AbstractJsonTreeDecoder.prototype, 'json', {
    get: function () {
      return this.json_nf7dq8$_0;
    }
  });
  Object.defineProperty(AbstractJsonTreeDecoder.prototype, 'value', {
    get: function () {
      return this.value_admuh1$_0;
    }
  });
  Object.defineProperty(AbstractJsonTreeDecoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.json.serializersModule;
    }
  });
  Object.defineProperty(AbstractJsonTreeDecoder.prototype, 'updateMode', {
    configurable: true,
    get: function () {
      return UpdateMode$OVERWRITE_getInstance();
    }
  });
  AbstractJsonTreeDecoder.prototype.currentObject_0 = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.currentTagOrNull) != null ? this.currentElement_61zpoe$(tmp$) : null) != null ? tmp$_0 : this.value;
  };
  AbstractJsonTreeDecoder.prototype.decodeJsonElement = function () {
    return this.currentObject_0();
  };
  AbstractJsonTreeDecoder.prototype.decodeSerializableValue_w63s0f$ = function (deserializer) {
    return decodeSerializableValuePolymorphic(this, deserializer);
  };
  AbstractJsonTreeDecoder.prototype.composeName_puj7f4$ = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeDecoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    var tmp$, tmp$_0;
    var currentObject = this.currentObject_0();
    tmp$ = descriptor.kind;
    if (equals(tmp$, StructureKind$LIST_getInstance()) || Kotlin.isType(tmp$, PolymorphicKind)) {
      var tmp$_1 = this.json;
      if (!Kotlin.isType(currentObject, JsonArray)) {
        throw new JsonDecodingException(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.serialName + ', but had ' + Kotlin.getKClassFromExpression(currentObject));
      }tmp$_0 = new JsonTreeListDecoder(tmp$_1, currentObject);
    } else if (equals(tmp$, StructureKind$MAP_getInstance())) {
      var $receiver = this.json;
      var tmp$_2;
      var keyDescriptor = descriptor.getElementDescriptor_za3lpa$(0);
      var keyKind = keyDescriptor.kind;
      if (Kotlin.isType(keyKind, PrimitiveKind) || equals(keyKind, SerialKind.ENUM)) {
        var tmp$_3 = this.json;
        if (!Kotlin.isType(currentObject, JsonObject)) {
          throw new JsonDecodingException(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.serialName + ', but had ' + Kotlin.getKClassFromExpression(currentObject));
        }tmp$_2 = new JsonTreeMapDecoder(tmp$_3, currentObject);
      } else if ($receiver.configuration_8be2vx$.allowStructuredMapKeys) {
        var tmp$_4 = this.json;
        if (!Kotlin.isType(currentObject, JsonArray)) {
          throw new JsonDecodingException(-1, 'Expected ' + getKClass(JsonArray) + ' as the serialized body of ' + descriptor.serialName + ', but had ' + Kotlin.getKClassFromExpression(currentObject));
        }tmp$_2 = new JsonTreeListDecoder(tmp$_4, currentObject);
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
      tmp$_0 = tmp$_2;
    } else {
      var tmp$_5 = this.json;
      if (!Kotlin.isType(currentObject, JsonObject)) {
        throw new JsonDecodingException(-1, 'Expected ' + getKClass(JsonObject) + ' as the serialized body of ' + descriptor.serialName + ', but had ' + Kotlin.getKClassFromExpression(currentObject));
      }tmp$_0 = new JsonTreeDecoder(tmp$_5, currentObject);
    }
    return tmp$_0;
  };
  AbstractJsonTreeDecoder.prototype.endStructure_24f42q$ = function (descriptor) {
  };
  AbstractJsonTreeDecoder.prototype.getValue_61zpoe$ = function (tag) {
    var tmp$, tmp$_0;
    var currentElement = this.currentElement_61zpoe$(tag);
    tmp$_0 = Kotlin.isType(tmp$ = currentElement, JsonPrimitive) ? tmp$ : null;
    if (tmp$_0 == null) {
      throw JsonDecodingException_0(-1, 'Expected JsonPrimitive at ' + tag + ', found ' + currentElement, this.currentObject_0().toString());
    }return tmp$_0;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedEnum_gaombr$ = function (tag, enumDescriptor) {
    return getElementIndexOrThrow(enumDescriptor, this.getValue_61zpoe$(tag).content);
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNull_11rb$ = function (tag) {
    return null;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedNotNullMark_11rb$ = function (tag) {
    return this.currentElement_61zpoe$(tag) !== JsonNull_getInstance();
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedBoolean_11rb$ = function (tag) {
    var tmp$;
    var value = this.getValue_61zpoe$(tag);
    if (!this.json.configuration_8be2vx$.isLenient) {
      var literal = Kotlin.isType(tmp$ = value, JsonLiteral) ? tmp$ : throwCCE();
      if (literal.isString)
        throw JsonDecodingException_0(-1, "Boolean literal for key '" + tag + "' should be unquoted." + '\n' + lenientHint, this.currentObject_0().toString());
    }return get_boolean(value);
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedByte_11rb$ = function (tag) {
    var $receiver = this.getValue_61zpoe$(tag);
    var primitive_0$result;
    try {
      primitive_0$result = toByte(get_int($receiver));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_0(-1, "Failed to parse '" + 'byte' + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
    return primitive_0$result;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedShort_11rb$ = function (tag) {
    var $receiver = this.getValue_61zpoe$(tag);
    var primitive_0$result;
    try {
      primitive_0$result = toShort_0(get_int($receiver));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_0(-1, "Failed to parse '" + 'short' + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
    return primitive_0$result;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedInt_11rb$ = function (tag) {
    var $receiver = this.getValue_61zpoe$(tag);
    var primitive_0$result;
    try {
      primitive_0$result = get_int($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_0(-1, "Failed to parse '" + 'int' + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
    return primitive_0$result;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedLong_11rb$ = function (tag) {
    var $receiver = this.getValue_61zpoe$(tag);
    var primitive_0$result;
    try {
      primitive_0$result = get_long($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_0(-1, "Failed to parse '" + 'long' + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
    return primitive_0$result;
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedFloat_11rb$ = function (tag) {
    var $receiver = this.getValue_61zpoe$(tag);
    var primitive_0$result;
    try {
      primitive_0$result = get_float($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_0(-1, "Failed to parse '" + 'float' + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
    var result = primitive_0$result;
    var specialFp = this.json.configuration_8be2vx$.allowSpecialFloatingPointValues;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, this.currentObject_0().toString());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedDouble_11rb$ = function (tag) {
    var $receiver = this.getValue_61zpoe$(tag);
    var primitive_0$result;
    try {
      primitive_0$result = get_double($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_0(-1, "Failed to parse '" + 'double' + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
    var result = primitive_0$result;
    var specialFp = this.json.configuration_8be2vx$.allowSpecialFloatingPointValues;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, this.currentObject_0().toString());
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedChar_11rb$ = function (tag) {
    var $receiver = this.getValue_61zpoe$(tag);
    var primitive_0$result;
    try {
      primitive_0$result = toBoxedChar(single($receiver.content));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_0(-1, "Failed to parse '" + 'char' + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
    return primitive_0$result;
  };
  AbstractJsonTreeDecoder.prototype.primitive_0 = function ($receiver, primitive, block) {
    try {
      return block($receiver);
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw JsonDecodingException_0(-1, "Failed to parse '" + primitive + "'", this.currentObject_0().toString());
      } else
        throw e;
    }
  };
  AbstractJsonTreeDecoder.prototype.decodeTaggedString_11rb$ = function (tag) {
    var tmp$;
    var value = this.getValue_61zpoe$(tag);
    if (!this.json.configuration_8be2vx$.isLenient) {
      var literal = Kotlin.isType(tmp$ = value, JsonLiteral) ? tmp$ : throwCCE();
      if (!literal.isString)
        throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted." + '\n' + lenientHint, this.currentObject_0().toString());
    }return value.content;
  };
  AbstractJsonTreeDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractJsonTreeDecoder',
    interfaces: [JsonDecoder, NamedValueDecoder]
  };
  function JsonPrimitiveDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_icegni$_0 = value;
    this.pushTag_11rb$(PRIMITIVE_TAG);
  }
  Object.defineProperty(JsonPrimitiveDecoder.prototype, 'value', {
    get: function () {
      return this.value_icegni$_0;
    }
  });
  JsonPrimitiveDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    return 0;
  };
  JsonPrimitiveDecoder.prototype.currentElement_61zpoe$ = function (tag) {
    if (!(tag === PRIMITIVE_TAG)) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init(message.toString());
    }return this.value;
  };
  JsonPrimitiveDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonPrimitiveDecoder',
    interfaces: [AbstractJsonTreeDecoder]
  };
  function JsonTreeDecoder(json, value, polyDiscriminator, polyDescriptor) {
    if (polyDiscriminator === void 0)
      polyDiscriminator = null;
    if (polyDescriptor === void 0)
      polyDescriptor = null;
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_nyd9q1$_0 = value;
    this.polyDiscriminator_0 = polyDiscriminator;
    this.polyDescriptor_0 = polyDescriptor;
    this.position_0 = 0;
  }
  Object.defineProperty(JsonTreeDecoder.prototype, 'value', {
    get: function () {
      return this.value_nyd9q1$_0;
    }
  });
  JsonTreeDecoder.prototype.coerceInputValue_0 = function (descriptor, index, tag) {
    var tmp$, tmp$_0, tmp$_1;
    var elementDescriptor = descriptor.getElementDescriptor_za3lpa$(index);
    if (Kotlin.isType(this.currentElement_61zpoe$(tag), JsonNull) && !elementDescriptor.isNullable)
      return true;
    if (equals(elementDescriptor.kind, SerialKind$ENUM_getInstance())) {
      tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = this.currentElement_61zpoe$(tag), JsonPrimitive) ? tmp$ : null) != null ? get_contentOrNull(tmp$_0) : null;
      if (tmp$_1 == null) {
        return false;
      }var enumValue = tmp$_1;
      var enumIndex = elementDescriptor.getElementIndex_61zpoe$(enumValue);
      if (enumIndex === -3)
        return true;
    }return false;
  };
  JsonTreeDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    var tmp$;
    while (this.position_0 < descriptor.elementsCount) {
      var name = this.getTag_av9bu7$(descriptor, (tmp$ = this.position_0, this.position_0 = tmp$ + 1 | 0, tmp$));
      var $receiver = this.value;
      var tmp$_0;
      if ((Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(name) && (!this.configuration_0.coerceInputValues || !this.coerceInputValue_0(descriptor, this.position_0 - 1 | 0, name))) {
        return this.position_0 - 1 | 0;
      }}
    return -1;
  };
  JsonTreeDecoder.prototype.currentElement_61zpoe$ = function (tag) {
    return getValue(this.value, tag);
  };
  JsonTreeDecoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    if (descriptor === this.polyDescriptor_0)
      return this;
    return AbstractJsonTreeDecoder.prototype.beginStructure_24f42q$.call(this, descriptor);
  };
  JsonTreeDecoder.prototype.endStructure_24f42q$ = function (descriptor) {
    var tmp$;
    if (this.configuration_0.ignoreUnknownKeys || Kotlin.isType(descriptor.kind, PolymorphicKind))
      return;
    var names = cachedSerialNames(descriptor);
    tmp$ = this.value.keys.iterator();
    while (tmp$.hasNext()) {
      var key = tmp$.next();
      if (!names.contains_11rb$(key) && !equals(key, this.polyDiscriminator_0)) {
        throw UnknownKeyException(key, this.value.toString());
      }}
  };
  JsonTreeDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonTreeDecoder',
    interfaces: [AbstractJsonTreeDecoder]
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.value_ozc1lj$_0 = value;
    this.keys_0 = toList_0(this.value.keys);
    this.size_0 = this.keys_0.size * 2 | 0;
    this.position_1 = -1;
  }
  Object.defineProperty(JsonTreeMapDecoder.prototype, 'value', {
    get: function () {
      return this.value_ozc1lj$_0;
    }
  });
  JsonTreeMapDecoder.prototype.elementName_szpzho$ = function (desc, index) {
    var i = index / 2 | 0;
    return this.keys_0.get_za3lpa$(i);
  };
  JsonTreeMapDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    while (this.position_1 < (this.size_0 - 1 | 0)) {
      this.position_1 = this.position_1 + 1 | 0;
      return this.position_1;
    }
    return -1;
  };
  JsonTreeMapDecoder.prototype.currentElement_61zpoe$ = function (tag) {
    return this.position_1 % 2 === 0 ? JsonPrimitive_2(tag) : getValue(this.value, tag);
  };
  JsonTreeMapDecoder.prototype.endStructure_24f42q$ = function (descriptor) {
  };
  JsonTreeMapDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonTreeMapDecoder',
    interfaces: [JsonTreeDecoder]
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.value_z81zg7$_0 = value;
    this.size_0 = this.value.size;
    this.currentIndex_0 = -1;
  }
  Object.defineProperty(JsonTreeListDecoder.prototype, 'value', {
    get: function () {
      return this.value_z81zg7$_0;
    }
  });
  JsonTreeListDecoder.prototype.elementName_szpzho$ = function (desc, index) {
    return index.toString();
  };
  JsonTreeListDecoder.prototype.currentElement_61zpoe$ = function (tag) {
    return this.value.get_za3lpa$(toInt(tag));
  };
  JsonTreeListDecoder.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    while (this.currentIndex_0 < (this.size_0 - 1 | 0)) {
      this.currentIndex_0 = this.currentIndex_0 + 1 | 0;
      return this.currentIndex_0;
    }
    return -1;
  };
  JsonTreeListDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonTreeListDecoder',
    interfaces: [AbstractJsonTreeDecoder]
  };
  function writeJson$lambda(closure$result) {
    return function (it) {
      closure$result.v = it;
      return Unit;
    };
  }
  function writeJson($receiver, value, serializer) {
    var result = {v: null};
    var encoder = new JsonTreeEncoder($receiver, writeJson$lambda(result));
    encoder.encodeSerializableValue_tf03ej$(serializer, value);
    return result.v == null ? throwUPAE('result') : result.v;
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.json_927t60$_0 = json;
    this.nodeConsumer = nodeConsumer;
    this.configuration_0 = this.json.configuration_8be2vx$;
    this.writePolymorphic_0 = false;
  }
  Object.defineProperty(AbstractJsonTreeEncoder.prototype, 'json', {
    get: function () {
      return this.json_927t60$_0;
    }
  });
  Object.defineProperty(AbstractJsonTreeEncoder.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.json.serializersModule;
    }
  });
  AbstractJsonTreeEncoder.prototype.encodeJsonElement_qiw0cd$ = function (element) {
    this.encodeSerializableValue_tf03ej$(JsonElementSerializer_getInstance(), element);
  };
  AbstractJsonTreeEncoder.prototype.shouldEncodeElementDefault_szpzho$ = function (descriptor, index) {
    return this.configuration_0.encodeDefaults;
  };
  AbstractJsonTreeEncoder.prototype.composeName_puj7f4$ = function (parentName, childName) {
    return childName;
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedNull_11rb$ = function (tag) {
    this.putElement_zafu29$(tag, JsonNull_getInstance());
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedInt_dpg1yx$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_1(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedByte_19qe40$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_1(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedShort_veccj0$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_1(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedLong_19wkf8$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_1(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedFloat_vlf4p8$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_1(value));
    if (!this.configuration_0.allowSpecialFloatingPointValues && !isFinite(value)) {
      throw InvalidFloatingPointEncoded_0(value, tag, this.getCurrent().toString());
    }};
  AbstractJsonTreeEncoder.prototype.encodeSerializableValue_tf03ej$ = function (serializer, value) {
    if (this.currentTagOrNull != null || (!Kotlin.isType(serializer.descriptor.kind, PrimitiveKind) && serializer.descriptor.kind !== SerialKind$ENUM_getInstance())) {
      encodePolymorphically$break: do {
        var tmp$;
        if (!Kotlin.isType(serializer, AbstractPolymorphicSerializer) || this.json.configuration_8be2vx$.useArrayPolymorphism) {
          serializer.serialize_55azsf$(this, value);
          break encodePolymorphically$break;
        }var tmp$_0;
        var actualSerializer = findActualSerializer(this, Kotlin.isType(tmp$_0 = serializer, KSerializer) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$ = value, Any) ? tmp$ : throwCCE());
        this.writePolymorphic_0 = true;
        actualSerializer.serialize_55azsf$(this, value);
      }
       while (false);
    } else {
      var $receiver = new JsonPrimitiveEncoder(this.json, this.nodeConsumer);
      $receiver.encodeSerializableValue_tf03ej$(serializer, value);
      $receiver.endEncode_24f42q$(serializer.descriptor);
    }
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedDouble_e37ph5$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_1(value));
    if (!this.configuration_0.allowSpecialFloatingPointValues && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded_0(value, tag, this.getCurrent().toString());
    }};
  AbstractJsonTreeEncoder.prototype.encodeTaggedBoolean_iuyhfk$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_0(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedChar_19qo1q$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_2(String.fromCharCode(value)));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedString_l9l8mx$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_2(value));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedEnum_4xdzqf$ = function (tag, enumDescriptor, ordinal) {
    this.putElement_zafu29$(tag, JsonPrimitive_2(enumDescriptor.getElementName_za3lpa$(ordinal)));
  };
  AbstractJsonTreeEncoder.prototype.encodeTaggedValue_dpg7wc$ = function (tag, value) {
    this.putElement_zafu29$(tag, JsonPrimitive_2(value.toString()));
  };
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$AbstractJsonTreeEncoder) {
    return function (node) {
      this$AbstractJsonTreeEncoder.putElement_zafu29$(this$AbstractJsonTreeEncoder.currentTag, node);
      return Unit;
    };
  }
  AbstractJsonTreeEncoder.prototype.beginStructure_24f42q$ = function (descriptor) {
    var tmp$, tmp$_0;
    var consumer = this.currentTagOrNull == null ? this.nodeConsumer : AbstractJsonTreeEncoder$beginStructure$lambda(this);
    tmp$ = descriptor.kind;
    if (equals(tmp$, StructureKind$LIST_getInstance()) || Kotlin.isType(tmp$, PolymorphicKind))
      tmp$_0 = new JsonTreeListEncoder(this.json, consumer);
    else if (equals(tmp$, StructureKind$MAP_getInstance())) {
      var $receiver = this.json;
      var tmp$_1;
      var keyDescriptor = descriptor.getElementDescriptor_za3lpa$(0);
      var keyKind = keyDescriptor.kind;
      if (Kotlin.isType(keyKind, PrimitiveKind) || equals(keyKind, SerialKind.ENUM)) {
        tmp$_1 = new JsonTreeMapEncoder(this.json, consumer);
      } else if ($receiver.configuration_8be2vx$.allowStructuredMapKeys) {
        tmp$_1 = new JsonTreeListEncoder(this.json, consumer);
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
      tmp$_0 = tmp$_1;
    } else
      tmp$_0 = new JsonTreeEncoder(this.json, consumer);
    var encoder = tmp$_0;
    if (this.writePolymorphic_0) {
      this.writePolymorphic_0 = false;
      encoder.putElement_zafu29$(this.configuration_0.classDiscriminator, JsonPrimitive_2(descriptor.serialName));
    }return encoder;
  };
  AbstractJsonTreeEncoder.prototype.endEncode_24f42q$ = function (descriptor) {
    this.nodeConsumer(this.getCurrent());
  };
  AbstractJsonTreeEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractJsonTreeEncoder',
    interfaces: [JsonEncoder, NamedValueEncoder]
  };
  var PRIMITIVE_TAG;
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.content_0 = null;
    this.pushTag_11rb$(PRIMITIVE_TAG);
  }
  JsonPrimitiveEncoder.prototype.putElement_zafu29$ = function (key, element) {
    if (!(key === PRIMITIVE_TAG)) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException_init(message.toString());
    }if (!(this.content_0 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException_init(message_0.toString());
    }this.content_0 = element;
  };
  JsonPrimitiveEncoder.prototype.getCurrent = function () {
    var value = this.content_0;
    var requireNotNull$result;
    if (value == null) {
      var message = 'Primitive element has not been recorded. Is call to .encodeXxx is missing in serializer?';
      throw IllegalArgumentException_init(message.toString());
    } else {
      requireNotNull$result = value;
    }
    return requireNotNull$result;
  };
  JsonPrimitiveEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonPrimitiveEncoder',
    interfaces: [AbstractJsonTreeEncoder]
  };
  function JsonTreeEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.content_0 = LinkedHashMap_init();
  }
  JsonTreeEncoder.prototype.putElement_zafu29$ = function (key, element) {
    this.content_0.put_xwzc9p$(key, element);
  };
  JsonTreeEncoder.prototype.getCurrent = function () {
    return new JsonObject(this.content_0);
  };
  JsonTreeEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonTreeEncoder',
    interfaces: [AbstractJsonTreeEncoder]
  };
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.tag_s622uw$_0 = this.tag_s622uw$_0;
    this.isKey_0 = true;
  }
  Object.defineProperty(JsonTreeMapEncoder.prototype, 'tag_0', {
    configurable: true,
    get: function () {
      if (this.tag_s622uw$_0 == null)
        return throwUPAE('tag');
      return this.tag_s622uw$_0;
    },
    set: function (tag) {
      this.tag_s622uw$_0 = tag;
    }
  });
  JsonTreeMapEncoder.prototype.putElement_zafu29$ = function (key, element) {
    var tmp$;
    if (this.isKey_0) {
      if (Kotlin.isType(element, JsonPrimitive))
        tmp$ = element.content;
      else if (Kotlin.isType(element, JsonObject))
        throw InvalidKeyKindException(JsonObjectSerializer_getInstance().descriptor);
      else if (Kotlin.isType(element, JsonArray))
        throw InvalidKeyKindException(JsonArraySerializer_getInstance().descriptor);
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      this.tag_0 = tmp$;
      this.isKey_0 = false;
    } else {
      var $receiver = this.content_0;
      var key_0 = this.tag_0;
      $receiver.put_xwzc9p$(key_0, element);
      this.isKey_0 = true;
    }
  };
  JsonTreeMapEncoder.prototype.getCurrent = function () {
    return new JsonObject(this.content_0);
  };
  JsonTreeMapEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonTreeMapEncoder',
    interfaces: [JsonTreeEncoder]
  };
  function JsonTreeListEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.array_0 = ArrayList_init_0();
  }
  JsonTreeListEncoder.prototype.elementName_szpzho$ = function (descriptor, index) {
    return index.toString();
  };
  JsonTreeListEncoder.prototype.putElement_zafu29$ = function (key, element) {
    var idx = toInt(key);
    this.array_0.add_wxm5ur$(idx, element);
  };
  JsonTreeListEncoder.prototype.getCurrent = function () {
    return new JsonArray(this.array_0);
  };
  JsonTreeListEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonTreeListEncoder',
    interfaces: [AbstractJsonTreeEncoder]
  };
  var cast_2 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.json.internal.cast_f6pxlz$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var JsonDecodingException_init = _.kotlinx.serialization.json.internal.JsonDecodingException;
    return function (T_0, isT, value, descriptor) {
      if (!isT(value)) {
        throw new JsonDecodingException_init(-1, 'Expected ' + getKClass(T_0) + ' as the serialized body of ' + descriptor.serialName + ', but had ' + Kotlin.getKClassFromExpression(value));
      }return value;
    };
  }));
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this);
    this.begin = toBoxedChar(begin);
    this.end = toBoxedChar(end);
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.beginTc = charToTokenClass(unboxChar(this.begin));
    this.endTc = charToTokenClass(unboxChar(this.end));
  }
  function WriteMode_initFields() {
    WriteMode_initFields = function () {
    };
    WriteMode$OBJ_instance = new WriteMode('OBJ', 0, BEGIN_OBJ, END_OBJ);
    WriteMode$LIST_instance = new WriteMode('LIST', 1, BEGIN_LIST, END_LIST);
    WriteMode$MAP_instance = new WriteMode('MAP', 2, BEGIN_OBJ, END_OBJ);
    WriteMode$POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, BEGIN_LIST, END_LIST);
  }
  var WriteMode$OBJ_instance;
  function WriteMode$OBJ_getInstance() {
    WriteMode_initFields();
    return WriteMode$OBJ_instance;
  }
  var WriteMode$LIST_instance;
  function WriteMode$LIST_getInstance() {
    WriteMode_initFields();
    return WriteMode$LIST_instance;
  }
  var WriteMode$MAP_instance;
  function WriteMode$MAP_getInstance() {
    WriteMode_initFields();
    return WriteMode$MAP_instance;
  }
  var WriteMode$POLY_OBJ_instance;
  function WriteMode$POLY_OBJ_getInstance() {
    WriteMode_initFields();
    return WriteMode$POLY_OBJ_instance;
  }
  WriteMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WriteMode',
    interfaces: [Enum]
  };
  function WriteMode$values() {
    return [WriteMode$OBJ_getInstance(), WriteMode$LIST_getInstance(), WriteMode$MAP_getInstance(), WriteMode$POLY_OBJ_getInstance()];
  }
  WriteMode.values = WriteMode$values;
  function WriteMode$valueOf(name) {
    switch (name) {
      case 'OBJ':
        return WriteMode$OBJ_getInstance();
      case 'LIST':
        return WriteMode$LIST_getInstance();
      case 'MAP':
        return WriteMode$MAP_getInstance();
      case 'POLY_OBJ':
        return WriteMode$POLY_OBJ_getInstance();
      default:throwISE('No enum constant kotlinx.serialization.json.internal.WriteMode.' + name);
    }
  }
  WriteMode.valueOf_61zpoe$ = WriteMode$valueOf;
  function switchMode($receiver, desc) {
    var tmp$;
    tmp$ = desc.kind;
    if (Kotlin.isType(tmp$, PolymorphicKind))
      return WriteMode$POLY_OBJ_getInstance();
    else if (equals(tmp$, StructureKind$LIST_getInstance()))
      return WriteMode$LIST_getInstance();
    else if (equals(tmp$, StructureKind$MAP_getInstance())) {
      var tmp$_0;
      var keyDescriptor = desc.getElementDescriptor_za3lpa$(0);
      var keyKind = keyDescriptor.kind;
      if (Kotlin.isType(keyKind, PrimitiveKind) || equals(keyKind, SerialKind.ENUM)) {
        tmp$_0 = WriteMode$MAP_getInstance();
      } else if ($receiver.configuration_8be2vx$.allowStructuredMapKeys) {
        tmp$_0 = WriteMode$LIST_getInstance();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
      return tmp$_0;
    } else
      return WriteMode$OBJ_getInstance();
  }
  var selectMapMode = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.json.internal.selectMapMode_clqyd9$', wrapFunction(function () {
    var PrimitiveKind = _.kotlinx.serialization.descriptors.PrimitiveKind;
    var SerialKind = _.kotlinx.serialization.descriptors.SerialKind;
    var equals = Kotlin.equals;
    var InvalidKeyKindException = _.kotlinx.serialization.json.internal.InvalidKeyKindException_jo479d$;
    return function ($receiver, mapDescriptor, ifMap, ifList) {
      var tmp$;
      var keyDescriptor = mapDescriptor.getElementDescriptor_za3lpa$(0);
      var keyKind = keyDescriptor.kind;
      if (Kotlin.isType(keyKind, PrimitiveKind) || equals(keyKind, SerialKind.ENUM)) {
        tmp$ = ifMap();
      } else if ($receiver.configuration_8be2vx$.allowStructuredMapKeys) {
        tmp$ = ifList();
      } else {
        throw InvalidKeyKindException(keyDescriptor);
      }
      return tmp$;
    };
  }));
  function Json(configuration) {
    Json$Default_getInstance();
    this.configuration_8be2vx$ = configuration;
  }
  Object.defineProperty(Json.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.configuration_8be2vx$.serializersModule;
    }
  });
  function Json$Default() {
    Json$Default_instance = this;
    Json.call(this, new JsonConf());
  }
  Json$Default.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Default',
    interfaces: [Json]
  };
  var Json$Default_instance = null;
  function Json$Default_getInstance() {
    if (Json$Default_instance === null) {
      new Json$Default();
    }return Json$Default_instance;
  }
  Json.prototype.encodeToString_tf03ej$ = function (serializer, value) {
    var result = StringBuilder_init_0();
    var encoder = StreamingJsonEncoder_init(result, this, WriteMode$OBJ_getInstance(), Kotlin.newArray(WriteMode$values().length, null));
    encoder.encodeSerializableValue_tf03ej$(serializer, value);
    return result.toString();
  };
  Json.prototype.decodeFromString_awif5v$ = function (deserializer, string) {
    var reader = new JsonReader(string);
    var input = new StreamingJsonDecoder(this, WriteMode$OBJ_getInstance(), reader);
    var result = input.decodeSerializableValue_w63s0f$(deserializer);
    if (!reader.isDone) {
      throw IllegalStateException_init(('Reader has not consumed the whole input: ' + reader).toString());
    }return result;
  };
  Json.prototype.encodeToJsonElement_tf03ej$ = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  Json.prototype.decodeFromJsonElement_htt2tq$ = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  Json.prototype.parseToJsonElement_61zpoe$ = function (string) {
    return this.decodeFromString_awif5v$(JsonElementSerializer_getInstance(), string);
  };
  Json.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Json',
    interfaces: [StringFormat]
  };
  function Json_0(from, builderAction) {
    if (from === void 0)
      from = Json$Default_getInstance();
    var builder = new JsonBuilder(from.configuration_8be2vx$);
    builderAction(builder);
    var conf = builder.build_8be2vx$();
    return new JsonImpl(conf);
  }
  var encodeToJsonElement = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.json.encodeToJsonElement_eahrye$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, value) {
      var tmp$;
      return $receiver.encodeToJsonElement_tf03ej$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), value);
    };
  }));
  var decodeFromJsonElement = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.json.decodeFromJsonElement_cmu2rn$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, json) {
      var tmp$;
      return $receiver.decodeFromJsonElement_htt2tq$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), json);
    };
  }));
  function JsonBuilder(conf) {
    this.encodeDefaults = conf.encodeDefaults;
    this.ignoreUnknownKeys = conf.ignoreUnknownKeys;
    this.isLenient = conf.isLenient;
    this.allowStructuredMapKeys = conf.allowStructuredMapKeys;
    this.prettyPrint = conf.prettyPrint;
    this.prettyPrintIndent = conf.prettyPrintIndent;
    this.coerceInputValues = conf.coerceInputValues;
    this.useArrayPolymorphism = conf.useArrayPolymorphism;
    this.classDiscriminator = conf.classDiscriminator;
    this.allowSpecialFloatingPointValues = conf.allowSpecialFloatingPointValues;
    this.serializersModule = conf.serializersModule;
    this.serializeSpecialFloatingPointValues = false;
    this.indent = '    ';
    this.strictMode = true;
    this.unquoted = false;
    this.unquotedPrint = false;
    this.serialModule = EmptySerializersModule;
  }
  JsonBuilder.prototype.build_8be2vx$ = function () {
    if (this.useArrayPolymorphism) {
      if (!equals(this.classDiscriminator, defaultDiscriminator)) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init(message.toString());
      }}if (!this.prettyPrint) {
      if (!equals(this.prettyPrintIndent, defaultIndent)) {
        var message_0 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init(message_0.toString());
      }} else if (!equals(this.prettyPrintIndent, defaultIndent)) {
      var $receiver = this.prettyPrintIndent;
      var all$result;
      all$break: do {
        var tmp$;
        tmp$ = iterator($receiver);
        while (tmp$.hasNext()) {
          var element = unboxChar(tmp$.next());
          var it = toBoxedChar(element);
          if (!(unboxChar(it) === 32 || unboxChar(it) === 9 || unboxChar(it) === 13 || unboxChar(it) === 10)) {
            all$result = false;
            break all$break;
          }}
        all$result = true;
      }
       while (false);
      var allWhitespaces = all$result;
      if (!allWhitespaces) {
        var message_1 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.prettyPrintIndent;
        throw IllegalArgumentException_init(message_1.toString());
      }}return new JsonConf(this.encodeDefaults, this.ignoreUnknownKeys, this.isLenient, this.allowStructuredMapKeys, this.prettyPrint, this.prettyPrintIndent, this.coerceInputValues, this.useArrayPolymorphism, this.classDiscriminator, this.allowSpecialFloatingPointValues, this.serializersModule);
  };
  JsonBuilder.prototype.buildConfiguration = function () {
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  };
  JsonBuilder.prototype.buildModule = function () {
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  };
  JsonBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonBuilder',
    interfaces: []
  };
  function JsonImpl(configuration) {
    Json.call(this, configuration);
    this.validateConfiguration_0();
  }
  JsonImpl.prototype.validateConfiguration_0 = function () {
    if (equals(this.serializersModule, EmptySerializersModule))
      return;
    var collector = new PolymorphismValidator(this.configuration_8be2vx$.useArrayPolymorphism, this.configuration_8be2vx$.classDiscriminator);
    this.serializersModule.dumpTo_ukvgvw$(collector);
  };
  JsonImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonImpl',
    interfaces: [Json]
  };
  function Json_1(configuration, context) {
    if (context === void 0)
      context = EmptySerializersModule;
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  }
  function Json_2(configuration) {
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  }
  function Json_3(configuration) {
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  }
  function Json_4(configuration, context) {
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  }
  function Json_5(context) {
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  }
  function Json_6() {
    throw IllegalStateException_init('Deprecated and should not be called'.toString());
  }
  var defaultIndent;
  var defaultDiscriminator;
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, serializeSpecialFloatingPointValues, allowStructuredMapKeys, prettyPrint, unquotedPrint, indent, coerceInputValues, useArrayPolymorphism, classDiscriminator) {
    JsonConfiguration$Companion_getInstance();
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    if (ignoreUnknownKeys === void 0)
      ignoreUnknownKeys = false;
    if (isLenient === void 0)
      isLenient = false;
    if (serializeSpecialFloatingPointValues === void 0)
      serializeSpecialFloatingPointValues = false;
    if (allowStructuredMapKeys === void 0)
      allowStructuredMapKeys = false;
    if (prettyPrint === void 0)
      prettyPrint = false;
    if (unquotedPrint === void 0)
      unquotedPrint = false;
    if (indent === void 0)
      indent = JsonConfiguration$Companion_getInstance().defaultIndent_0;
    if (coerceInputValues === void 0)
      coerceInputValues = false;
    if (useArrayPolymorphism === void 0)
      useArrayPolymorphism = false;
    if (classDiscriminator === void 0)
      classDiscriminator = JsonConfiguration$Companion_getInstance().defaultDiscriminator_0;
    this.encodeDefaults_8be2vx$ = encodeDefaults;
    this.ignoreUnknownKeys_8be2vx$ = ignoreUnknownKeys;
    this.isLenient_8be2vx$ = isLenient;
    this.serializeSpecialFloatingPointValues_8be2vx$ = serializeSpecialFloatingPointValues;
    this.allowStructuredMapKeys_8be2vx$ = allowStructuredMapKeys;
    this.prettyPrint_8be2vx$ = prettyPrint;
    this.unquotedPrint_8be2vx$ = unquotedPrint;
    this.indent_8be2vx$ = indent;
    this.coerceInputValues_8be2vx$ = coerceInputValues;
    this.useArrayPolymorphism_8be2vx$ = useArrayPolymorphism;
    this.classDiscriminator_8be2vx$ = classDiscriminator;
    if (this.useArrayPolymorphism_8be2vx$) {
      if (!equals(this.classDiscriminator_8be2vx$, JsonConfiguration$Companion_getInstance().defaultDiscriminator_0)) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init(message.toString());
      }}if (!this.prettyPrint_8be2vx$) {
      if (!equals(this.indent_8be2vx$, JsonConfiguration$Companion_getInstance().defaultIndent_0)) {
        var message_0 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init(message_0.toString());
      }}}
  JsonConfiguration.prototype.copy_aq75xd$ = function (encodeDefaults, ignoreUnknownKeys, isLenient, serializeSpecialFloatingPointValues, allowStructuredMapKeys, prettyPrint, unquotedPrint, indent, coerceInputValues, useArrayPolymorphism, classDiscriminator) {
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    if (ignoreUnknownKeys === void 0)
      ignoreUnknownKeys = false;
    if (isLenient === void 0)
      isLenient = false;
    if (serializeSpecialFloatingPointValues === void 0)
      serializeSpecialFloatingPointValues = false;
    if (allowStructuredMapKeys === void 0)
      allowStructuredMapKeys = false;
    if (prettyPrint === void 0)
      prettyPrint = false;
    if (unquotedPrint === void 0)
      unquotedPrint = false;
    if (indent === void 0)
      indent = JsonConfiguration$Companion_getInstance().defaultIndent_0;
    if (coerceInputValues === void 0)
      coerceInputValues = false;
    if (useArrayPolymorphism === void 0)
      useArrayPolymorphism = false;
    if (classDiscriminator === void 0)
      classDiscriminator = JsonConfiguration$Companion_getInstance().defaultDiscriminator_0;
    return new JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, serializeSpecialFloatingPointValues, allowStructuredMapKeys, prettyPrint, unquotedPrint, indent, coerceInputValues, useArrayPolymorphism, classDiscriminator);
  };
  function JsonConfiguration$Companion() {
    JsonConfiguration$Companion_instance = this;
    this.defaultIndent_0 = '    ';
    this.defaultDiscriminator_0 = 'type';
    this.Default = new SubtypeToDetectDefault();
    this.Stable = new SubtypeToDetectStable();
  }
  JsonConfiguration$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsonConfiguration$Companion_instance = null;
  function JsonConfiguration$Companion_getInstance() {
    if (JsonConfiguration$Companion_instance === null) {
      new JsonConfiguration$Companion();
    }return JsonConfiguration$Companion_instance;
  }
  JsonConfiguration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonConfiguration',
    interfaces: []
  };
  function SubtypeToDetectDefault() {
    JsonConfiguration.call(this);
  }
  SubtypeToDetectDefault.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubtypeToDetectDefault',
    interfaces: [JsonConfiguration]
  };
  function SubtypeToDetectStable() {
    JsonConfiguration.call(this);
  }
  SubtypeToDetectStable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubtypeToDetectStable',
    interfaces: [JsonConfiguration]
  };
  function JsonConfiguration_0(strictMode, unquoted) {
    if (strictMode === void 0)
      strictMode = true;
    if (unquoted === void 0)
      unquoted = false;
    throw IllegalStateException_init('Should not be called'.toString());
  }
  function JsonContentPolymorphicSerializer(baseClass) {
    this.baseClass_saxo55$_0 = baseClass;
    this.descriptor_fdk25h$_0 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + toString(this.baseClass_saxo55$_0.simpleName) + '>', PolymorphicKind$SEALED_getInstance(), []);
  }
  Object.defineProperty(JsonContentPolymorphicSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_fdk25h$_0;
    }
  });
  JsonContentPolymorphicSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var tmp$, tmp$_0, tmp$_1;
    var actualSerializer = (tmp$_0 = (tmp$ = encoder.serializersModule.getPolymorphic_joiicr$(this.baseClass_saxo55$_0, value)) != null ? tmp$ : serializerOrNull(Kotlin.getKClassFromExpression(value))) != null ? tmp$_0 : throwSubtypeNotRegistered_0(Kotlin.getKClassFromExpression(value), this.baseClass_saxo55$_0);
    (Kotlin.isType(tmp$_1 = actualSerializer, KSerializer) ? tmp$_1 : throwCCE()).serialize_55azsf$(encoder, value);
  };
  JsonContentPolymorphicSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var tmp$;
    var input = asJsonDecoder(decoder);
    var tree = input.decodeJsonElement();
    var actualSerializer = Kotlin.isType(tmp$ = this.selectDeserializer_qiw0cd$(tree), KSerializer) ? tmp$ : throwCCE();
    return input.json.decodeFromJsonElement_htt2tq$(actualSerializer, tree);
  };
  JsonContentPolymorphicSerializer.prototype.selectSerializer_qiw0cd$ = function (element) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.selectDeserializer_qiw0cd$(element), KSerializer) ? tmp$ : throwCCE();
  };
  JsonContentPolymorphicSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonContentPolymorphicSerializer',
    interfaces: [KSerializer]
  };
  function JsonDecoder() {
  }
  Object.defineProperty(JsonDecoder.prototype, 'updateMode', {
    configurable: true,
    get: function () {
      return UpdateMode$OVERWRITE_getInstance();
    }
  });
  JsonDecoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsonDecoder',
    interfaces: [CompositeDecoder, Decoder]
  };
  function JsonElement() {
    JsonElement$Companion_getInstance();
  }
  function JsonElement$Companion() {
    JsonElement$Companion_instance = this;
  }
  JsonElement$Companion.prototype.serializer = function () {
    return JsonElementSerializer_getInstance();
  };
  JsonElement$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsonElement$Companion_instance = null;
  function JsonElement$Companion_getInstance() {
    if (JsonElement$Companion_instance === null) {
      new JsonElement$Companion();
    }return JsonElement$Companion_instance;
  }
  JsonElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonElement',
    interfaces: []
  };
  function JsonPrimitive() {
    JsonPrimitive$Companion_getInstance();
    JsonElement.call(this);
  }
  JsonPrimitive.prototype.toString = function () {
    return this.content;
  };
  function JsonPrimitive$Companion() {
    JsonPrimitive$Companion_instance = this;
  }
  JsonPrimitive$Companion.prototype.serializer = function () {
    return JsonPrimitiveSerializer_getInstance();
  };
  JsonPrimitive$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsonPrimitive$Companion_instance = null;
  function JsonPrimitive$Companion_getInstance() {
    if (JsonPrimitive$Companion_instance === null) {
      new JsonPrimitive$Companion();
    }return JsonPrimitive$Companion_instance;
  }
  JsonPrimitive.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonPrimitive',
    interfaces: [JsonElement]
  };
  function JsonPrimitive_0(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_1(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonPrimitive_2(value) {
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.isString_jhh1on$_0 = isString;
    this.content_prrjtz$_0 = body.toString();
  }
  Object.defineProperty(JsonLiteral.prototype, 'isString', {
    get: function () {
      return this.isString_jhh1on$_0;
    }
  });
  Object.defineProperty(JsonLiteral.prototype, 'content', {
    configurable: true,
    get: function () {
      return this.content_prrjtz$_0;
    }
  });
  JsonLiteral.prototype.toString = function () {
    var tmp$;
    if (this.isString) {
      var $receiver = StringBuilder_init_0();
      printQuoted($receiver, this.content);
      tmp$ = $receiver.toString();
    } else
      tmp$ = this.content;
    return tmp$;
  };
  JsonLiteral.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, JsonLiteral) ? tmp$_0 : throwCCE();
    if (this.isString !== other.isString)
      return false;
    if (!equals(this.content, other.content))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = hashCode(this.isString);
    result = (31 * result | 0) + hashCode(this.content) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonLiteral',
    interfaces: [JsonPrimitive]
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.content_w1vkof$_0 = 'null';
  }
  Object.defineProperty(JsonNull.prototype, 'isString', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  Object.defineProperty(JsonNull.prototype, 'content', {
    configurable: true,
    get: function () {
      return this.content_w1vkof$_0;
    }
  });
  JsonNull.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonNull',
    interfaces: [JsonPrimitive]
  };
  var JsonNull_instance = null;
  function JsonNull_getInstance() {
    if (JsonNull_instance === null) {
      new JsonNull();
    }return JsonNull_instance;
  }
  function JsonObject(content) {
    JsonObject$Companion_getInstance();
    JsonElement.call(this);
    this.content_0 = content;
  }
  JsonObject.prototype.equals = function (other) {
    return equals(this.content_0, other);
  };
  JsonObject.prototype.hashCode = function () {
    return hashCode(this.content_0);
  };
  function JsonObject$toString$lambda(f) {
    var k = f.key;
    var v = f.value;
    return '"' + k + '"' + ':' + v;
  }
  JsonObject.prototype.toString = function () {
    return joinToString(this.content_0.entries, ',', '{', '}', void 0, void 0, JsonObject$toString$lambda);
  };
  function JsonObject$Companion() {
    JsonObject$Companion_instance = this;
  }
  JsonObject$Companion.prototype.serializer = function () {
    return JsonObjectSerializer_getInstance();
  };
  JsonObject$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsonObject$Companion_instance = null;
  function JsonObject$Companion_getInstance() {
    if (JsonObject$Companion_instance === null) {
      new JsonObject$Companion();
    }return JsonObject$Companion_instance;
  }
  Object.defineProperty(JsonObject.prototype, 'entries', {
    get: function () {
      return this.content_0.entries;
    }
  });
  Object.defineProperty(JsonObject.prototype, 'keys', {
    get: function () {
      return this.content_0.keys;
    }
  });
  Object.defineProperty(JsonObject.prototype, 'size', {
    get: function () {
      return this.content_0.size;
    }
  });
  Object.defineProperty(JsonObject.prototype, 'values', {
    get: function () {
      return this.content_0.values;
    }
  });
  JsonObject.prototype.containsKey_11rb$ = function (key) {
    return this.content_0.containsKey_11rb$(key);
  };
  JsonObject.prototype.containsValue_11rc$ = function (value) {
    return this.content_0.containsValue_11rc$(value);
  };
  JsonObject.prototype.get_11rb$ = function (key) {
    return this.content_0.get_11rb$(key);
  };
  JsonObject.prototype.isEmpty = function () {
    return this.content_0.isEmpty();
  };
  JsonObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonObject',
    interfaces: [Map, JsonElement]
  };
  function JsonArray(content) {
    JsonArray$Companion_getInstance();
    JsonElement.call(this);
    this.content_0 = content;
  }
  JsonArray.prototype.equals = function (other) {
    return equals(this.content_0, other);
  };
  JsonArray.prototype.hashCode = function () {
    return hashCode(this.content_0);
  };
  JsonArray.prototype.toString = function () {
    return joinToString(this.content_0, ',', '[', ']');
  };
  function JsonArray$Companion() {
    JsonArray$Companion_instance = this;
  }
  JsonArray$Companion.prototype.serializer = function () {
    return JsonArraySerializer_getInstance();
  };
  JsonArray$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsonArray$Companion_instance = null;
  function JsonArray$Companion_getInstance() {
    if (JsonArray$Companion_instance === null) {
      new JsonArray$Companion();
    }return JsonArray$Companion_instance;
  }
  Object.defineProperty(JsonArray.prototype, 'size', {
    get: function () {
      return this.content_0.size;
    }
  });
  JsonArray.prototype.contains_11rb$ = function (element) {
    return this.content_0.contains_11rb$(element);
  };
  JsonArray.prototype.containsAll_brywnq$ = function (elements) {
    return this.content_0.containsAll_brywnq$(elements);
  };
  JsonArray.prototype.get_za3lpa$ = function (index) {
    return this.content_0.get_za3lpa$(index);
  };
  JsonArray.prototype.indexOf_11rb$ = function (element) {
    return this.content_0.indexOf_11rb$(element);
  };
  JsonArray.prototype.isEmpty = function () {
    return this.content_0.isEmpty();
  };
  JsonArray.prototype.iterator = function () {
    return this.content_0.iterator();
  };
  JsonArray.prototype.lastIndexOf_11rb$ = function (element) {
    return this.content_0.lastIndexOf_11rb$(element);
  };
  JsonArray.prototype.listIterator = function () {
    return this.content_0.listIterator();
  };
  JsonArray.prototype.listIterator_za3lpa$ = function (index) {
    return this.content_0.listIterator_za3lpa$(index);
  };
  JsonArray.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.content_0.subList_vux9f0$(fromIndex, toIndex);
  };
  JsonArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonArray',
    interfaces: [List, JsonElement]
  };
  function get_jsonPrimitive($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, JsonPrimitive) ? tmp$ : null) != null ? tmp$_0 : error($receiver, 'JsonPrimitive');
  }
  function get_jsonObject($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, JsonObject) ? tmp$ : null) != null ? tmp$_0 : error($receiver, 'JsonObject');
  }
  function get_jsonArray($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, JsonArray) ? tmp$ : null) != null ? tmp$_0 : error($receiver, 'JsonArray');
  }
  function get_jsonNull($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, JsonNull) ? tmp$ : null) != null ? tmp$_0 : error($receiver, 'JsonNull');
  }
  function get_int($receiver) {
    return toInt($receiver.content);
  }
  function get_intOrNull($receiver) {
    return toIntOrNull($receiver.content);
  }
  function get_long($receiver) {
    return toLong($receiver.content);
  }
  function get_longOrNull($receiver) {
    return toLongOrNull($receiver.content);
  }
  function get_double($receiver) {
    return toDouble($receiver.content);
  }
  function get_doubleOrNull($receiver) {
    return toDoubleOrNull($receiver.content);
  }
  function get_float($receiver) {
    return toDouble($receiver.content);
  }
  function get_floatOrNull($receiver) {
    return toDoubleOrNull($receiver.content);
  }
  function get_boolean($receiver) {
    return toBooleanStrict($receiver.content);
  }
  function get_booleanOrNull($receiver) {
    return toBooleanStrictOrNull($receiver.content);
  }
  function get_contentOrNull($receiver) {
    return Kotlin.isType($receiver, JsonNull) ? null : $receiver.content;
  }
  function error($receiver, element) {
    throw IllegalArgumentException_init('Element ' + Kotlin.getKClassFromExpression($receiver) + ' is not a ' + element);
  }
  function unexpectedJson(key, expected) {
    throw IllegalArgumentException_init('Element ' + key + ' is not a ' + expected);
  }
  var buildJsonObject = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.json.buildJsonObject_s5o6vg$', wrapFunction(function () {
    var JsonObjectBuilder_init = _.kotlinx.serialization.json.JsonObjectBuilder;
    return function (builderAction) {
      var builder = new JsonObjectBuilder_init();
      builderAction(builder);
      return builder.build();
    };
  }));
  var buildJsonArray = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.json.buildJsonArray_mb52fq$', wrapFunction(function () {
    var JsonArrayBuilder_init = _.kotlinx.serialization.json.JsonArrayBuilder;
    return function (builderAction) {
      var builder = new JsonArrayBuilder_init();
      builderAction(builder);
      return builder.build();
    };
  }));
  function JsonObjectBuilder() {
    this.content_0 = LinkedHashMap_init();
  }
  JsonObjectBuilder.prototype.put_zafu29$ = function (key, element) {
    return this.content_0.put_xwzc9p$(key, element);
  };
  JsonObjectBuilder.prototype.build = function () {
    return new JsonObject(this.content_0);
  };
  JsonObjectBuilder.prototype.to_ahl3kc$ = function ($receiver, value) {
    if (!(this.content_0.get_11rb$($receiver) == null)) {
      var message = 'Key ' + $receiver + ' is already registered in builder';
      throw IllegalArgumentException_init(message.toString());
    }this.content_0.put_xwzc9p$($receiver, value);
  };
  JsonObjectBuilder.prototype.to_lr5kl6$ = function ($receiver, value) {
    if (!(this.content_0.get_11rb$($receiver) == null)) {
      var message = 'Key ' + $receiver + ' is already registered in builder';
      throw IllegalArgumentException_init(message.toString());
    }var $receiver_0 = this.content_0;
    var value_0 = JsonPrimitive_1(value);
    $receiver_0.put_xwzc9p$($receiver, value_0);
  };
  JsonObjectBuilder.prototype.to_sg61ir$ = function ($receiver, value) {
    if (!(this.content_0.get_11rb$($receiver) == null)) {
      var message = 'Key ' + $receiver + ' is already registered in builder';
      throw IllegalArgumentException_init(message.toString());
    }var $receiver_0 = this.content_0;
    var value_0 = JsonPrimitive_0(value);
    $receiver_0.put_xwzc9p$($receiver, value_0);
  };
  JsonObjectBuilder.prototype.to_npuxma$ = function ($receiver, value) {
    if (!(this.content_0.get_11rb$($receiver) == null)) {
      var message = 'Key ' + $receiver + ' is already registered in builder';
      throw IllegalArgumentException_init(message.toString());
    }var $receiver_0 = this.content_0;
    var value_0 = JsonPrimitive_2(value);
    $receiver_0.put_xwzc9p$($receiver, value_0);
  };
  JsonObjectBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonObjectBuilder',
    interfaces: []
  };
  function putJsonObject($receiver, key, builderAction) {
    var builder = new JsonObjectBuilder();
    builderAction(builder);
    return $receiver.put_zafu29$(key, builder.build());
  }
  function putJsonArray($receiver, key, builderAction) {
    var builder = new JsonArrayBuilder();
    builderAction(builder);
    return $receiver.put_zafu29$(key, builder.build());
  }
  function put($receiver, key, value) {
    return $receiver.put_zafu29$(key, JsonPrimitive_0(value));
  }
  function put_0($receiver, key, value) {
    return $receiver.put_zafu29$(key, JsonPrimitive_1(value));
  }
  function put_1($receiver, key, value) {
    return $receiver.put_zafu29$(key, JsonPrimitive_2(value));
  }
  function JsonArrayBuilder() {
    this.content_0 = ArrayList_init_0();
  }
  JsonArrayBuilder.prototype.add_qiw0cd$ = function (element) {
    this.content_0.add_11rb$(element);
    return true;
  };
  JsonArrayBuilder.prototype.build = function () {
    return new JsonArray(this.content_0);
  };
  JsonArrayBuilder.prototype.unaryPlus_5cw0du$ = function ($receiver) {
    this.content_0.add_11rb$(JsonPrimitive_2($receiver));
  };
  JsonArrayBuilder.prototype.unaryPlus_4sdtmu$ = function ($receiver) {
    this.content_0.add_11rb$(JsonPrimitive_1($receiver));
  };
  JsonArrayBuilder.prototype.unaryPlus_d4wkrv$ = function ($receiver) {
    this.content_0.add_11rb$(JsonPrimitive_0($receiver));
  };
  JsonArrayBuilder.prototype.unaryPlus_u3sd3g$ = function ($receiver) {
    this.content_0.add_11rb$($receiver);
  };
  JsonArrayBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonArrayBuilder',
    interfaces: []
  };
  function add($receiver, value) {
    return $receiver.add_qiw0cd$(JsonPrimitive_0(value));
  }
  function add_0($receiver, value) {
    return $receiver.add_qiw0cd$(JsonPrimitive_1(value));
  }
  function add_1($receiver, value) {
    return $receiver.add_qiw0cd$(JsonPrimitive_2(value));
  }
  function addJsonObject($receiver, builderAction) {
    var builder = new JsonObjectBuilder();
    builderAction(builder);
    return $receiver.add_qiw0cd$(builder.build());
  }
  function addJsonArray($receiver, builderAction) {
    var builder = new JsonArrayBuilder();
    builderAction(builder);
    return $receiver.add_qiw0cd$(builder.build());
  }
  var infixToDeprecated;
  var unaryPlusDeprecated;
  function JsonDslMarker() {
  }
  JsonDslMarker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonDslMarker',
    interfaces: [Annotation]
  };
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    this.descriptor_u8kpse$_0 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', PolymorphicKind$SEALED_getInstance(), [], JsonElementSerializer$descriptor$lambda);
  }
  Object.defineProperty(JsonElementSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_u8kpse$_0;
    }
  });
  JsonElementSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    verify(encoder);
    if (Kotlin.isType(value, JsonPrimitive))
      encoder.encodeSerializableValue_tf03ej$(JsonPrimitiveSerializer_getInstance(), value);
    else if (Kotlin.isType(value, JsonObject))
      encoder.encodeSerializableValue_tf03ej$(JsonObjectSerializer_getInstance(), value);
    else if (Kotlin.isType(value, JsonArray))
      encoder.encodeSerializableValue_tf03ej$(JsonArraySerializer_getInstance(), value);
  };
  JsonElementSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.decodeJsonElement();
  };
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().descriptor;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().descriptor;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().descriptor;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().descriptor;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().descriptor;
  }
  function JsonElementSerializer$descriptor$lambda($receiver) {
    $receiver.element_vxrguq$('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $receiver.element_vxrguq$('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $receiver.element_vxrguq$('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $receiver.element_vxrguq$('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $receiver.element_vxrguq$('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit;
  }
  JsonElementSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonElementSerializer',
    interfaces: [KSerializer]
  };
  var JsonElementSerializer_instance = null;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance === null) {
      new JsonElementSerializer();
    }return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.descriptor_1d7xi5$_0 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', PrimitiveKind$STRING_getInstance(), []);
  }
  Object.defineProperty(JsonPrimitiveSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_1d7xi5$_0;
    }
  });
  JsonPrimitiveSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var tmp$, tmp$_0;
    verify(encoder);
    if (Kotlin.isType(value, JsonNull)) {
      tmp$_0 = encoder.encodeSerializableValue_tf03ej$(JsonNullSerializer_getInstance(), JsonNull_getInstance());
    } else {
      tmp$_0 = encoder.encodeSerializableValue_tf03ej$(JsonLiteralSerializer_getInstance(), Kotlin.isType(tmp$ = value, JsonLiteral) ? tmp$ : throwCCE());
    }
    return tmp$_0;
  };
  JsonPrimitiveSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var result = asJsonDecoder(decoder).decodeJsonElement();
    if (!Kotlin.isType(result, JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + Kotlin.getKClassFromExpression(result), result.toString());
    return result;
  };
  JsonPrimitiveSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonPrimitiveSerializer',
    interfaces: [KSerializer]
  };
  var JsonPrimitiveSerializer_instance = null;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance === null) {
      new JsonPrimitiveSerializer();
    }return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.descriptor_kuqqdr$_0 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', SerialKind$ENUM_getInstance(), []);
  }
  Object.defineProperty(JsonNullSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_kuqqdr$_0;
    }
  });
  JsonNullSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    verify(encoder);
    encoder.encodeNull();
  };
  JsonNullSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    verify_0(decoder);
    decoder.decodeNull();
    return JsonNull_getInstance();
  };
  JsonNullSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonNullSerializer',
    interfaces: [KSerializer]
  };
  var JsonNullSerializer_instance = null;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance === null) {
      new JsonNullSerializer();
    }return JsonNullSerializer_instance;
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.descriptor_fnzu3f$_0 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', PrimitiveKind$STRING_getInstance());
  }
  Object.defineProperty(JsonLiteralSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_fnzu3f$_0;
    }
  });
  JsonLiteralSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    verify(encoder);
    if (value.isString) {
      return encoder.encodeString_61zpoe$(value.content);
    }var long = get_longOrNull(value);
    if (long != null) {
      return encoder.encodeLong_s8cxhz$(long);
    }var double = get_doubleOrNull(value);
    if (double != null) {
      return encoder.encodeDouble_14dthe$(double);
    }var boolean = get_booleanOrNull(value);
    if (boolean != null) {
      return encoder.encodeBoolean_6taknv$(boolean);
    }encoder.encodeString_61zpoe$(value.content);
  };
  JsonLiteralSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var result = asJsonDecoder(decoder).decodeJsonElement();
    if (!Kotlin.isType(result, JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + Kotlin.getKClassFromExpression(result), result.toString());
    return result;
  };
  JsonLiteralSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonLiteralSerializer',
    interfaces: [KSerializer]
  };
  var JsonLiteralSerializer_instance = null;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance === null) {
      new JsonLiteralSerializer();
    }return JsonLiteralSerializer_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.descriptor_a992tj$_0 = new NamedMapClassDescriptor('kotlinx.serialization.json.JsonObject', serializer_8(kotlin_js_internal_StringCompanionObject).descriptor, JsonElementSerializer_getInstance().descriptor);
  }
  Object.defineProperty(JsonObjectSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_a992tj$_0;
    }
  });
  JsonObjectSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer_8(kotlin_js_internal_StringCompanionObject), JsonElementSerializer_getInstance()).serialize_55azsf$(encoder, value);
  };
  JsonObjectSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer_8(kotlin_js_internal_StringCompanionObject), JsonElementSerializer_getInstance()).deserialize_bq71mq$(decoder));
  };
  JsonObjectSerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonObjectSerializer',
    interfaces: [KSerializer]
  };
  var JsonObjectSerializer_instance = null;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance === null) {
      new JsonObjectSerializer();
    }return JsonObjectSerializer_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.descriptor_935ivj$_0 = new NamedListClassDescriptor('kotlinx.serialization.json.JsonArray', JsonElementSerializer_getInstance().descriptor);
  }
  Object.defineProperty(JsonArraySerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_935ivj$_0;
    }
  });
  JsonArraySerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).serialize_55azsf$(encoder, value);
  };
  JsonArraySerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).deserialize_bq71mq$(decoder));
  };
  JsonArraySerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsonArraySerializer',
    interfaces: [KSerializer]
  };
  var JsonArraySerializer_instance = null;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance === null) {
      new JsonArraySerializer();
    }return JsonArraySerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function asJsonDecoder($receiver) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = $receiver, JsonDecoder) ? tmp$ : null;
    if (tmp$_0 == null) {
      throw IllegalStateException_init('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + Kotlin.getKClassFromExpression($receiver)));
    }return tmp$_0;
  }
  function asJsonEncoder($receiver) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = $receiver, JsonEncoder) ? tmp$ : null;
    if (tmp$_0 == null) {
      throw IllegalStateException_init('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + Kotlin.getKClassFromExpression($receiver)));
    }return tmp$_0;
  }
  function JsonEncoder() {
  }
  JsonEncoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsonEncoder',
    interfaces: [CompositeEncoder, Encoder]
  };
  var message_0;
  function noImpl() {
    throw UnsupportedOperationException_init('Not implemented, should not be called');
  }
  function get_plain($receiver) {
    return noImpl();
  }
  function get_unquoted($receiver) {
    return noImpl();
  }
  function get_indented($receiver) {
    return noImpl();
  }
  function get_nonstrict($receiver) {
    return noImpl();
  }
  function toJson($receiver, serializer, value) {
    return noImpl();
  }
  function toJson_0($receiver, value) {
    return noImpl();
  }
  function parseJson($receiver, string) {
    return noImpl();
  }
  function fromJson($receiver, deserializer, json) {
    return noImpl();
  }
  function fromJson_0($receiver, tree) {
    return noImpl();
  }
  function JsonInput() {
  }
  JsonInput.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsonInput',
    interfaces: []
  };
  function decodeJson($receiver) {
    return $receiver.decodeJsonElement();
  }
  function JsonOutput() {
  }
  JsonOutput.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JsonOutput',
    interfaces: []
  };
  function encodeJson($receiver, element) {
    $receiver.encodeJsonElement_qiw0cd$(element);
  }
  function get_isNull($receiver) {
    return noImpl();
  }
  function getPrimitive($receiver, index) {
    return noImpl();
  }
  function getObject($receiver, index) {
    return noImpl();
  }
  function getArray($receiver, index) {
    return noImpl();
  }
  function getPrimitiveOrNull($receiver, index) {
    return noImpl();
  }
  function getObjectOrNull($receiver, index) {
    return noImpl();
  }
  function getArrayOrNull($receiver, index) {
    return noImpl();
  }
  function getAs($receiver, index) {
    return noImpl();
  }
  function getAsOrNull($receiver, index) {
    return noImpl();
  }
  function getPrimitive_0($receiver, key) {
    return noImpl();
  }
  function getObject_0($receiver, key) {
    return noImpl();
  }
  function getArray_0($receiver, key) {
    return noImpl();
  }
  function getPrimitiveOrNull_0($receiver, key) {
    return noImpl();
  }
  function getObjectOrNull_0($receiver, key) {
    return noImpl();
  }
  function getArrayOrNull_0($receiver, key) {
    return noImpl();
  }
  function getAs_0($receiver, key) {
    return noImpl();
  }
  function getAsOrNull_0($receiver, key) {
    return noImpl();
  }
  function get_primitive($receiver) {
    return noImpl();
  }
  function contains($receiver, key) {
    return noImpl();
  }
  function get_int_0($receiver) {
    return noImpl();
  }
  function get_intOrNull_0($receiver) {
    return noImpl();
  }
  function get_long_0($receiver) {
    return noImpl();
  }
  function get_longOrNull_0($receiver) {
    return noImpl();
  }
  function get_double_0($receiver) {
    return noImpl();
  }
  function get_doubleOrNull_0($receiver) {
    return noImpl();
  }
  function get_float_0($receiver) {
    return noImpl();
  }
  function get_floatOrNull_0($receiver) {
    return noImpl();
  }
  function get_boolean_0($receiver) {
    return noImpl();
  }
  function get_booleanOrNull_0($receiver) {
    return noImpl();
  }
  function get_content($receiver) {
    return noImpl();
  }
  function get_contentOrNull_0($receiver) {
    return noImpl();
  }
  function JsonLiteral_0(value) {
    return noImpl();
  }
  function json(init) {
    return noImpl();
  }
  function jsonArray(init) {
    var builder = new JsonArrayBuilder();
    init(builder);
    return builder.build();
  }
  function JsonTransformingSerializer(tSerializer) {
    this.tSerializer_nuzucf$_0 = tSerializer;
  }
  Object.defineProperty(JsonTransformingSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.tSerializer_nuzucf$_0.descriptor;
    }
  });
  JsonTransformingSerializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = asJsonEncoder(encoder);
    var element = writeJson(output.json, value, this.tSerializer_nuzucf$_0);
    element = this.transformSerialize_qiw0cd$(element);
    output.encodeJsonElement_qiw0cd$(element);
  };
  JsonTransformingSerializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var input = asJsonDecoder(decoder);
    var element = input.decodeJsonElement();
    return input.json.decodeFromJsonElement_htt2tq$(this.tSerializer_nuzucf$_0, this.transformDeserialize_qiw0cd$(element));
  };
  JsonTransformingSerializer.prototype.readTransform_qiw0cd$ = function (element) {
    return this.transformDeserialize_qiw0cd$(element);
  };
  JsonTransformingSerializer.prototype.transformDeserialize_qiw0cd$ = function (element) {
    return element;
  };
  JsonTransformingSerializer.prototype.writeTransform_qiw0cd$ = function (element) {
    return this.transformSerialize_qiw0cd$(element);
  };
  JsonTransformingSerializer.prototype.transformSerialize_qiw0cd$ = function (element) {
    return element;
  };
  JsonTransformingSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonTransformingSerializer',
    interfaces: [KSerializer]
  };
  function JsonTransformingSerializer_init(tSerializer, transformationName, $this) {
    $this = $this || Object.create(JsonTransformingSerializer.prototype);
    JsonTransformingSerializer.call($this, tSerializer);
    return $this;
  }
  function KSerializer() {
  }
  KSerializer.prototype.patch_h7kg3r$ = function (decoder, old) {
    throw UnsupportedOperationException_init('Not implemented, should not be called');
  };
  KSerializer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KSerializer',
    interfaces: [DeserializationStrategy, SerializationStrategy]
  };
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SerializationStrategy',
    interfaces: []
  };
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DeserializationStrategy',
    interfaces: []
  };
  function UpdateMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function UpdateMode_initFields() {
    UpdateMode_initFields = function () {
    };
    UpdateMode$BANNED_instance = new UpdateMode('BANNED', 0);
    UpdateMode$OVERWRITE_instance = new UpdateMode('OVERWRITE', 1);
    UpdateMode$UPDATE_instance = new UpdateMode('UPDATE', 2);
  }
  var UpdateMode$BANNED_instance;
  function UpdateMode$BANNED_getInstance() {
    UpdateMode_initFields();
    return UpdateMode$BANNED_instance;
  }
  var UpdateMode$OVERWRITE_instance;
  function UpdateMode$OVERWRITE_getInstance() {
    UpdateMode_initFields();
    return UpdateMode$OVERWRITE_instance;
  }
  var UpdateMode$UPDATE_instance;
  function UpdateMode$UPDATE_getInstance() {
    UpdateMode_initFields();
    return UpdateMode$UPDATE_instance;
  }
  UpdateMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UpdateMode',
    interfaces: [Enum]
  };
  function UpdateMode$values() {
    return [UpdateMode$BANNED_getInstance(), UpdateMode$OVERWRITE_getInstance(), UpdateMode$UPDATE_getInstance()];
  }
  UpdateMode.values = UpdateMode$values;
  function UpdateMode$valueOf(name) {
    switch (name) {
      case 'BANNED':
        return UpdateMode$BANNED_getInstance();
      case 'OVERWRITE':
        return UpdateMode$OVERWRITE_getInstance();
      case 'UPDATE':
        return UpdateMode$UPDATE_getInstance();
      default:throwISE('No enum constant kotlinx.serialization.UpdateMode.' + name);
    }
  }
  UpdateMode.valueOf_61zpoe$ = UpdateMode$valueOf;
  var patchDeprecated;
  function noImpl_0() {
    throw UnsupportedOperationException_init('Not implemented, should not be called');
  }
  function PrimitiveDescriptorWithName(serialName, original) {
    this.serialName_fue71b$_0 = serialName;
    this.original_0 = original;
  }
  Object.defineProperty(PrimitiveDescriptorWithName.prototype, 'serialName', {
    get: function () {
      return this.serialName_fue71b$_0;
    }
  });
  Object.defineProperty(PrimitiveDescriptorWithName.prototype, 'annotations', {
    get: function () {
      return this.original_0.annotations;
    }
  });
  Object.defineProperty(PrimitiveDescriptorWithName.prototype, 'elementsCount', {
    get: function () {
      return this.original_0.elementsCount;
    }
  });
  Object.defineProperty(PrimitiveDescriptorWithName.prototype, 'isNullable', {
    get: function () {
      return this.original_0.isNullable;
    }
  });
  Object.defineProperty(PrimitiveDescriptorWithName.prototype, 'kind', {
    get: function () {
      return this.original_0.kind;
    }
  });
  PrimitiveDescriptorWithName.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.original_0.getElementAnnotations_za3lpa$(index);
  };
  PrimitiveDescriptorWithName.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.original_0.getElementDescriptor_za3lpa$(index);
  };
  PrimitiveDescriptorWithName.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.original_0.getElementIndex_61zpoe$(name);
  };
  PrimitiveDescriptorWithName.prototype.getElementName_za3lpa$ = function (index) {
    return this.original_0.getElementName_za3lpa$(index);
  };
  PrimitiveDescriptorWithName.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.original_0.isElementOptional_za3lpa$(index);
  };
  PrimitiveDescriptorWithName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrimitiveDescriptorWithName',
    interfaces: [SerialDescriptor]
  };
  function withName($receiver, name) {
    throw IllegalStateException_init('No longer supported'.toString());
  }
  function get_nullable_1($receiver) {
    var tmp$;
    return $receiver.descriptor.isNullable ? Kotlin.isType(tmp$ = $receiver, KSerializer) ? tmp$ : throwCCE() : new NullableSerializer($receiver);
  }
  function get_list_0($receiver) {
    return new ArrayListSerializer($receiver);
  }
  function get_set_0($receiver) {
    return new LinkedHashSetSerializer($receiver);
  }
  function get_map($receiver) {
    return new LinkedHashMapSerializer($receiver.first, $receiver.second);
  }
  function compiledSerializer($receiver) {
    return compiledSerializerImpl($receiver);
  }
  var message_1;
  function Mapper() {
  }
  Mapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mapper',
    interfaces: []
  };
  function SerialId(id) {
    this.id = id;
  }
  SerialId.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerialId',
    interfaces: [Annotation]
  };
  var parseList = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.parseList_rw0txp$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var ListSerializer = _.kotlinx.serialization.builtins.ListSerializer_swdriu$;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, objects) {
      var tmp$;
      return $receiver.decodeFromString_awif5v$(ListSerializer(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE()), objects);
    };
  }));
  var parseMap = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.parseMap_egzuvf$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var MapSerializer = _.kotlinx.serialization.builtins.MapSerializer_2yqygg$;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (K_0, isK, V_0, isV, $receiver, map) {
      var tmp$;
      var tmp$_0;
      return $receiver.decodeFromString_awif5v$(MapSerializer(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(K_0)), KSerializer) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, getReifiedTypeParameterKType(V_0)), KSerializer) ? tmp$_0 : throwCCE()), map);
    };
  }));
  var stringify = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.stringify_y3khs0$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var ListSerializer = _.kotlinx.serialization.builtins.ListSerializer_swdriu$;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, objects) {
      var tmp$;
      return $receiver.encodeToString_tf03ej$(ListSerializer(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE()), objects);
    };
  }));
  var stringify_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.stringify_yz7s7b$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var MapSerializer = _.kotlinx.serialization.builtins.MapSerializer_2yqygg$;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (K_0, isK, V_0, isV, $receiver, map) {
      var tmp$;
      var tmp$_0;
      return $receiver.encodeToString_tf03ej$(MapSerializer(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(K_0)), KSerializer) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, getReifiedTypeParameterKType(V_0)), KSerializer) ? tmp$_0 : throwCCE()), map);
    };
  }));
  function getContextualOrDefault($receiver, klass) {
    return noImpl_0();
  }
  function getContextualOrDefault_0($receiver, value) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = $receiver.getContextual_lmshww$(Kotlin.getKClassFromExpression(value))) != null) {
      var tmp$_2;
      tmp$_1 = Kotlin.isType(tmp$_2 = tmp$, KSerializer) ? tmp$_2 : throwCCE();
    } else
      tmp$_1 = null;
    var tmp$_3;
    if ((tmp$_0 = tmp$_1) != null)
      tmp$_3 = tmp$_0;
    else {
      var tmp$_4;
      tmp$_3 = Kotlin.isType(tmp$_4 = serializer_13(Kotlin.getKClassFromExpression(value)), KSerializer) ? tmp$_4 : throwCCE();
    }
    return tmp$_3;
  }
  function get_PolymorphicClassDescriptor() {
    throw IllegalStateException_init('This property is no longer supported'.toString());
  }
  function AbstractSerialFormat(serializersModule) {
    this.serializersModule_3op4hl$_0 = serializersModule;
  }
  Object.defineProperty(AbstractSerialFormat.prototype, 'serializersModule', {
    get: function () {
      return this.serializersModule_3op4hl$_0;
    }
  });
  AbstractSerialFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractSerialFormat',
    interfaces: [SerialFormat]
  };
  function stringify_1($receiver, value) {
    return noImpl_0();
  }
  function parse($receiver, string) {
    return noImpl_0();
  }
  function stringify_2($receiver, serializer, value) {
    return noImpl_0();
  }
  function parse_0($receiver, deserializer, string) {
    return noImpl_0();
  }
  function load($receiver, deserializer, bytes) {
    return noImpl_0();
  }
  function dump($receiver, serializer, value) {
    return noImpl_0();
  }
  function dumps($receiver, serializer, value) {
    return noImpl_0();
  }
  function loads($receiver, deserializer, hex) {
    return noImpl_0();
  }
  function dump_0($receiver, value) {
    return noImpl_0();
  }
  function dumps_0($receiver, value) {
    return noImpl_0();
  }
  function load_0($receiver, raw) {
    return noImpl_0();
  }
  function loads_0($receiver, hex) {
    return noImpl_0();
  }
  function decode($receiver, deserializer) {
    return noImpl_0();
  }
  function decode_0($receiver) {
    return noImpl_0();
  }
  function encode($receiver, strategy, value) {
    noImpl_0();
  }
  function encode_0($receiver, obj) {
    noImpl_0();
  }
  function SerialDescriptor$lambda($receiver) {
    return Unit;
  }
  function SerialDescriptor_0(serialName, typeParameters, builderAction) {
    if (builderAction === void 0)
      builderAction = SerialDescriptor$lambda;
    return noImpl_0();
  }
  function SerialDescriptor$lambda_0($receiver) {
    return Unit;
  }
  function SerialDescriptor_1(serialName, kind, typeParameters, builderAction) {
    if (builderAction === void 0)
      builderAction = SerialDescriptor$lambda_0;
    return noImpl_0();
  }
  function PrimitiveDescriptor(serialName, kind) {
    return noImpl_0();
  }
  function get_context($receiver) {
    return noImpl_0();
  }
  function elementDescriptors($receiver) {
    return noImpl_0();
  }
  function elementNames($receiver) {
    return noImpl_0();
  }
  function ImplicitReflectionSerializer() {
  }
  ImplicitReflectionSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImplicitReflectionSerializer',
    interfaces: [Annotation]
  };
  function UnstableDefault() {
  }
  UnstableDefault.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnstableDefault',
    interfaces: [Annotation]
  };
  function noImpl_1() {
    throw UnsupportedOperationException_init('Not implemented, should not be called');
  }
  var EmptyModule;
  function serializersModule(serializer) {
    return noImpl_1();
  }
  function serializersModuleOf(map) {
    return noImpl_1();
  }
  function polymorphic$lambda($receiver) {
    return Unit;
  }
  function polymorphic($receiver, baseSerializer, builderAction) {
    if (baseSerializer === void 0)
      baseSerializer = null;
    if (builderAction === void 0)
      builderAction = polymorphic$lambda;
    noImpl_1();
  }
  function polymorphic_0($receiver, baseClass, baseClasses, buildAction) {
    noImpl_1();
  }
  function defaultPolymorphic($receiver, baseClass, defaultSerializerProvider) {
    noImpl_1();
  }
  function getContextual($receiver) {
    return noImpl_1();
  }
  function getContextual_0($receiver, value) {
    return noImpl_1();
  }
  function PolymorphicModuleBuilder(baseClass, baseSerializer) {
    if (baseSerializer === void 0)
      baseSerializer = null;
    this.baseClass_0 = baseClass;
    this.baseSerializer_0 = baseSerializer;
    this.subclasses_0 = ArrayList_init_0();
    this.defaultSerializerProvider_0 = null;
  }
  PolymorphicModuleBuilder.prototype.subclass_g8f9ns$ = function (subclass, serializer) {
    this.subclasses_0.add_11rb$(to(subclass, serializer));
  };
  PolymorphicModuleBuilder.prototype.default_98asm5$ = function (defaultSerializerProvider) {
    if (!(this.defaultSerializerProvider_0 == null)) {
      var message = 'Default serializer provider is already registered for class ' + this.baseClass_0 + ': ' + toString(this.defaultSerializerProvider_0);
      throw IllegalArgumentException_init(message.toString());
    }this.defaultSerializerProvider_0 = defaultSerializerProvider;
  };
  PolymorphicModuleBuilder.prototype.buildTo_gz4556$ = function (builder) {
    if (this.baseSerializer_0 != null)
      builder.registerPolymorphicSerializer_yca12w$(this.baseClass_0, this.baseClass_0, this.baseSerializer_0);
    var tmp$;
    tmp$ = this.subclasses_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var kclass = element.component1()
      , serializer = element.component2();
      var tmp$_0;
      var tmp$_1;
      builder.registerPolymorphicSerializer_yca12w$(this.baseClass_0, Kotlin.isType(tmp$_0 = kclass, KClass) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = serializer, KSerializer) ? tmp$_1 : throwCCE());
    }
    var default_0 = this.defaultSerializerProvider_0;
    if (default_0 != null) {
      builder.registerDefaultPolymorphicSerializer_b3da2m$(this.baseClass_0, default_0, false);
    }};
  PolymorphicModuleBuilder.prototype.addSubclass_n8yg2x$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.modules.PolymorphicModuleBuilder.addSubclass_n8yg2x$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      this.subclass_g8f9ns$(getKClass(T_0), Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE());
    };
  }));
  PolymorphicModuleBuilder.prototype.addSubclass_97auzv$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.modules.PolymorphicModuleBuilder.addSubclass_97auzv$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, serializer) {
      this.subclass_g8f9ns$(getKClass(T_0), serializer);
    };
  }));
  PolymorphicModuleBuilder.prototype.addSubclass_g8f9ns$ = function (subclass, serializer) {
    this.subclass_g8f9ns$(subclass, serializer);
  };
  PolymorphicModuleBuilder.prototype.with_kmpi2j$ = function ($receiver, serializer) {
    this.subclass_g8f9ns$($receiver, serializer);
  };
  PolymorphicModuleBuilder.prototype.subclass_30y1fr$ = function () {
    throw new NotImplementedError_init();
  };
  PolymorphicModuleBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolymorphicModuleBuilder',
    interfaces: []
  };
  var subclass = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.modules.subclass_nygl7a$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver, serializer) {
      $receiver.subclass_g8f9ns$(getKClass(T_0), serializer);
    };
  }));
  var subclass_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.modules.subclass_iaiprn$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, clazz) {
      var tmp$;
      $receiver.subclass_g8f9ns$(clazz, Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE());
    };
  }));
  function SerializersModule() {
  }
  SerializersModule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializersModule',
    interfaces: []
  };
  var EmptySerializersModule;
  function plus($receiver, other) {
    var builder = new SerializersModuleBuilder();
    builder.include_4jix7z$($receiver);
    builder.include_4jix7z$(other);
    return builder.build();
  }
  function overwriteWith$lambda$ObjectLiteral(this$) {
    this.this$ = this$;
  }
  overwriteWith$lambda$ObjectLiteral.prototype.contextual_cfhkba$ = function (kClass, serializer) {
    this.this$.registerSerializer_z3bkzg$(kClass, serializer, true);
  };
  overwriteWith$lambda$ObjectLiteral.prototype.polymorphic_kfyidi$ = function (baseClass, actualClass, actualSerializer) {
    this.this$.registerPolymorphicSerializer_yca12w$(baseClass, actualClass, actualSerializer, true);
  };
  overwriteWith$lambda$ObjectLiteral.prototype.polymorphicDefault_yd5wsm$ = function (baseClass, defaultSerializerProvider) {
    this.this$.registerDefaultPolymorphicSerializer_b3da2m$(baseClass, defaultSerializerProvider, true);
  };
  overwriteWith$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [SerializersModuleCollector]
  };
  function overwriteWith($receiver, other) {
    var builder = new SerializersModuleBuilder();
    builder.include_4jix7z$($receiver);
    other.dumpTo_ukvgvw$(new overwriteWith$lambda$ObjectLiteral(builder));
    return builder.build();
  }
  function SerialModuleImpl(class2Serializer, polyBase2Serializers, polyBase2NamedSerializers, polyBase2DefaultProvider) {
    SerializersModule.call(this);
    this.class2Serializer_0 = class2Serializer;
    this.polyBase2Serializers = polyBase2Serializers;
    this.polyBase2NamedSerializers_0 = polyBase2NamedSerializers;
    this.polyBase2DefaultProvider_0 = polyBase2DefaultProvider;
  }
  SerialModuleImpl.prototype.getPolymorphic_joiicr$ = function (baseClass, value) {
    var tmp$, tmp$_0;
    if (!isInstanceOf(value, baseClass))
      return null;
    return Kotlin.isType(tmp$_0 = (tmp$ = this.polyBase2Serializers.get_11rb$(baseClass)) != null ? tmp$.get_11rb$(Kotlin.getKClassFromExpression(value)) : null, SerializationStrategy) ? tmp$_0 : null;
  };
  SerialModuleImpl.prototype.getPolymorphic_l2fy3k$ = function (baseClass, serializedClassName) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var tmp$_3;
    if ((tmp$ = this.polyBase2NamedSerializers_0.get_11rb$(baseClass)) != null) {
      var tmp$_4;
      tmp$_3 = (Kotlin.isType(tmp$_4 = tmp$, Map) ? tmp$_4 : throwCCE()).get_11rb$(serializedClassName);
    } else
      tmp$_3 = null;
    var registered = Kotlin.isType(tmp$_0 = tmp$_3, KSerializer) ? tmp$_0 : null;
    if (registered != null)
      return registered;
    return (tmp$_2 = typeof (tmp$_1 = this.polyBase2DefaultProvider_0.get_11rb$(baseClass)) === 'function' ? tmp$_1 : null) != null ? tmp$_2(serializedClassName) : null;
  };
  SerialModuleImpl.prototype.getContextual_lmshww$ = function (kclass) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.class2Serializer_0.get_11rb$(kclass), KSerializer) ? tmp$ : null;
  };
  SerialModuleImpl.prototype.dumpTo_ukvgvw$ = function (collector) {
    var tmp$;
    tmp$ = this.class2Serializer_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var kclass = element.key;
      var serial = element.value;
      var tmp$_0;
      var tmp$_1;
      collector.contextual_cfhkba$(Kotlin.isType(tmp$_0 = kclass, KClass) ? tmp$_0 : throwCCE(), Kotlin.isType(tmp$_1 = serial, KSerializer) ? tmp$_1 : throwCCE());
    }
    var tmp$_2;
    tmp$_2 = this.polyBase2Serializers.entries.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      var baseClass = element_0.key;
      var classMap = element_0.value;
      var tmp$_3;
      tmp$_3 = classMap.entries.iterator();
      while (tmp$_3.hasNext()) {
        var element_1 = tmp$_3.next();
        var actualClass = element_1.key;
        var serializer = element_1.value;
        var tmp$_4, tmp$_5;
        var tmp$_6;
        collector.polymorphic_kfyidi$(Kotlin.isType(tmp$_4 = baseClass, KClass) ? tmp$_4 : throwCCE(), Kotlin.isType(tmp$_5 = actualClass, KClass) ? tmp$_5 : throwCCE(), Kotlin.isType(tmp$_6 = serializer, KSerializer) ? tmp$_6 : throwCCE());
      }
    }
    var tmp$_7;
    tmp$_7 = this.polyBase2DefaultProvider_0.entries.iterator();
    while (tmp$_7.hasNext()) {
      var element_2 = tmp$_7.next();
      var baseClass_0 = element_2.key;
      var provider = element_2.value;
      var tmp$_8, tmp$_9;
      collector.polymorphicDefault_yd5wsm$(Kotlin.isType(tmp$_8 = baseClass_0, KClass) ? tmp$_8 : throwCCE(), typeof (tmp$_9 = provider) === 'function' ? tmp$_9 : throwCCE());
    }
  };
  SerialModuleImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerialModuleImpl',
    interfaces: [SerializersModule]
  };
  function serializersModuleOf_0(kClass, serializer) {
    var builder = new SerializersModuleBuilder();
    builder.contextual_cfhkba$(kClass, serializer);
    return builder.build();
  }
  var serializersModuleOf_1 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.modules.serializersModuleOf_ewacr1$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var serializersModuleOf = _.kotlinx.serialization.modules.serializersModuleOf_cfhkba$;
    return function (T_0, isT, serializer) {
      return serializersModuleOf(getKClass(T_0), serializer);
    };
  }));
  var SerializersModule_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.modules.SerializersModule_q4tcel$', wrapFunction(function () {
    var SerializersModuleBuilder_init = _.kotlinx.serialization.modules.SerializersModuleBuilder;
    return function (builderAction) {
      var builder = new SerializersModuleBuilder_init();
      builderAction(builder);
      return builder.build();
    };
  }));
  function SerializersModuleBuilder() {
    this.class2Serializer_0 = HashMap_init();
    this.polyBase2Serializers_0 = HashMap_init();
    this.polyBase2NamedSerializers_0 = HashMap_init();
    this.polyBase2DefaultProvider_0 = HashMap_init();
  }
  SerializersModuleBuilder.prototype.contextual_cfhkba$ = function (kClass, serializer) {
    this.registerSerializer_z3bkzg$(kClass, serializer);
  };
  SerializersModuleBuilder.prototype.polymorphic_kfyidi$ = function (baseClass, actualClass, actualSerializer) {
    this.registerPolymorphicSerializer_yca12w$(baseClass, actualClass, actualSerializer);
  };
  SerializersModuleBuilder.prototype.polymorphicDefault_yd5wsm$ = function (baseClass, defaultSerializerProvider) {
    this.registerDefaultPolymorphicSerializer_b3da2m$(baseClass, defaultSerializerProvider, false);
  };
  SerializersModuleBuilder.prototype.include_4jix7z$ = function (module_0) {
    module_0.dumpTo_ukvgvw$(this);
  };
  SerializersModuleBuilder.prototype.registerSerializer_z3bkzg$ = function (forClass, serializer, allowOverwrite) {
    if (allowOverwrite === void 0)
      allowOverwrite = false;
    if (!allowOverwrite) {
      var previous = this.class2Serializer_0.get_11rb$(forClass);
      if (previous != null && !equals(previous, serializer)) {
        var currentName = serializer.descriptor.serialName;
        var previousName = previous.descriptor.serialName;
        throw new SerializerAlreadyRegisteredException('Serializer for ' + forClass + ' already registered in this module: ' + toString(previous) + ' (' + previousName + '), ' + ('attempted to register ' + serializer + ' (' + currentName + ')'));
      }}this.class2Serializer_0.put_xwzc9p$(forClass, serializer);
  };
  SerializersModuleBuilder.prototype.registerDefaultPolymorphicSerializer_b3da2m$ = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.polyBase2DefaultProvider_0.get_11rb$(baseClass);
    if (previous != null && !equals(previous, defaultSerializerProvider) && !allowOverwrite) {
      throw IllegalArgumentException_init('Default serializers provider for class ' + baseClass + ' is already registered: ' + toString(previous));
    }this.polyBase2DefaultProvider_0.put_xwzc9p$(baseClass, defaultSerializerProvider);
  };
  SerializersModuleBuilder.prototype.registerPolymorphicSerializer_yca12w$ = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    if (allowOverwrite === void 0)
      allowOverwrite = false;
    var name = concreteSerializer.descriptor.serialName;
    var $receiver = this.polyBase2Serializers_0;
    var tmp$;
    var value = $receiver.get_11rb$(baseClass);
    if (value == null) {
      var answer = HashMap_init();
      $receiver.put_xwzc9p$(baseClass, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    var baseClassSerializers = tmp$;
    var previousSerializer = baseClassSerializers.get_11rb$(concreteClass);
    var $receiver_0 = this.polyBase2NamedSerializers_0;
    var tmp$_0;
    var value_0 = $receiver_0.get_11rb$(baseClass);
    if (value_0 == null) {
      var answer_0 = HashMap_init();
      $receiver_0.put_xwzc9p$(baseClass, answer_0);
      tmp$_0 = answer_0;
    } else {
      tmp$_0 = value_0;
    }
    var names = tmp$_0;
    if (allowOverwrite) {
      if (previousSerializer != null) {
        names.remove_11rb$(previousSerializer.descriptor.serialName);
      }baseClassSerializers.put_xwzc9p$(concreteClass, concreteSerializer);
      names.put_xwzc9p$(name, concreteSerializer);
      return;
    }if (previousSerializer != null) {
      if (!equals(previousSerializer, concreteSerializer)) {
        throw SerializerAlreadyRegisteredException_init(baseClass, concreteClass);
      } else {
        names.remove_11rb$(previousSerializer.descriptor.serialName);
      }
    }var previousByName = names.get_11rb$(name);
    if (previousByName != null) {
      var $receiver_1 = asSequence(ensureNotNull(this.polyBase2Serializers_0.get_11rb$(baseClass)));
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_1;
        tmp$_1 = $receiver_1.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          if (element.value === previousByName) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      var conflictingClass = firstOrNull$result;
      throw IllegalArgumentException_init("Multiple polymorphic serializers for base class '" + baseClass + "' " + ("have the same serial name '" + name + "': '" + concreteClass + "' and '" + toString(conflictingClass) + "'"));
    }baseClassSerializers.put_xwzc9p$(concreteClass, concreteSerializer);
    names.put_xwzc9p$(name, concreteSerializer);
  };
  SerializersModuleBuilder.prototype.build = function () {
    return new SerialModuleImpl(this.class2Serializer_0, this.polyBase2Serializers_0, this.polyBase2NamedSerializers_0, this.polyBase2DefaultProvider_0);
  };
  SerializersModuleBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializersModuleBuilder',
    interfaces: [SerializersModuleCollector]
  };
  var contextual = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.modules.contextual_692uso$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver, serializer) {
      $receiver.contextual_cfhkba$(getKClass(T_0), serializer);
    };
  }));
  var polymorphic_1 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.modules.polymorphic_fy38n9$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var PolymorphicModuleBuilder_init = _.kotlinx.serialization.modules.PolymorphicModuleBuilder;
    function polymorphic$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, baseClass, baseSerializer, builderAction) {
      if (baseSerializer === void 0)
        baseSerializer = null;
      if (builderAction === void 0)
        builderAction = polymorphic$lambda;
      var builder = new PolymorphicModuleBuilder_init(baseClass, baseSerializer);
      builderAction(builder);
      builder.buildTo_gz4556$($receiver);
    };
  }));
  function SerializerAlreadyRegisteredException(msg) {
    IllegalArgumentException_init(msg, this);
    this.name = 'SerializerAlreadyRegisteredException';
  }
  SerializerAlreadyRegisteredException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializerAlreadyRegisteredException',
    interfaces: [IllegalArgumentException]
  };
  function SerializerAlreadyRegisteredException_init(baseClass, concreteClass, $this) {
    $this = $this || Object.create(SerializerAlreadyRegisteredException.prototype);
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + concreteClass + ' already registered in the scope of ' + baseClass);
    return $this;
  }
  function SerializersModuleCollector() {
  }
  SerializersModuleCollector.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SerializersModuleCollector',
    interfaces: []
  };
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.baseClass_x5jvam$_0 = baseClass;
    this.descriptor_nog3ww$_0 = withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', PolymorphicKind$OPEN_getInstance(), [], PolymorphicSerializer$descriptor$lambda(this)), this.baseClass);
  }
  Object.defineProperty(PolymorphicSerializer.prototype, 'baseClass', {
    get: function () {
      return this.baseClass_x5jvam$_0;
    }
  });
  Object.defineProperty(PolymorphicSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_nog3ww$_0;
    }
  });
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.baseClass + ')';
  };
  function PolymorphicSerializer$descriptor$lambda(this$PolymorphicSerializer) {
    return function ($receiver) {
      $receiver.element_vxrguq$('type', serializer_8(kotlin_js_internal_StringCompanionObject).descriptor);
      $receiver.element_vxrguq$('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + toString(this$PolymorphicSerializer.baseClass.simpleName) + '>', SerialKind$CONTEXTUAL_getInstance(), []));
      return Unit;
    };
  }
  PolymorphicSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolymorphicSerializer',
    interfaces: [AbstractPolymorphicSerializer]
  };
  function findPolymorphicSerializer($receiver, decoder, klassName) {
    var tmp$;
    return (tmp$ = $receiver.findPolymorphicSerializerOrNull_ca6uye$(decoder, klassName)) != null ? tmp$ : throwSubtypeNotRegistered(klassName, $receiver.baseClass);
  }
  function findPolymorphicSerializer_0($receiver, encoder, value) {
    var tmp$;
    return (tmp$ = $receiver.findPolymorphicSerializerOrNull_kjsxpj$(encoder, value)) != null ? tmp$ : throwSubtypeNotRegistered_0(Kotlin.getKClassFromExpression(value), $receiver.baseClass);
  }
  function groupingBy$ObjectLiteral(this$groupingBy, closure$keySelector) {
    this.this$groupingBy = this$groupingBy;
    this.closure$keySelector = closure$keySelector;
  }
  groupingBy$ObjectLiteral.prototype.sourceIterator = function () {
    return this.this$groupingBy.iterator();
  };
  groupingBy$ObjectLiteral.prototype.keyOf_11rb$ = function (element) {
    return this.closure$keySelector(element);
  };
  groupingBy$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Grouping]};
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.baseClass_a0a98o$_0 = baseClass;
    this.descriptor_gganzq$_0 = buildSerialDescriptor(serialName, PolymorphicKind$SEALED_getInstance(), [], SealedClassSerializer$descriptor$lambda(this, subclassSerializers));
    this.class2Serializer_0 = null;
    this.serialName2Serializer_0 = null;
    if (subclasses.length !== subclassSerializers.length) {
      throw IllegalArgumentException_init('All subclasses of sealed class ' + toString(this.baseClass.simpleName) + ' should be marked @Serializable');
    }this.class2Serializer_0 = toMap(zip(subclasses, subclassSerializers));
    var $receiver = new groupingBy$ObjectLiteral(this.class2Serializer_0.entries, SealedClassSerializer_init$lambda);
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.sourceIterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      var key = $receiver.keyOf_11rb$(e);
      var accumulator = destination.get_11rb$(key);
      var tmp$_0 = destination.put_xwzc9p$;
      accumulator == null && !destination.containsKey_11rb$(key);
      if (accumulator != null) {
        throw IllegalStateException_init(("Multiple sealed subclasses of '" + this.baseClass + "' have the same serial name '" + key + "':" + (" '" + accumulator.key + "', '" + e.key + "'")).toString());
      }tmp$_0.call(destination, key, e);
    }
    var destination_0 = LinkedHashMap_init_1(mapCapacity(destination.size));
    var tmp$_1;
    tmp$_1 = destination.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      destination_0.put_xwzc9p$(element.key, element.value.value);
    }
    this.serialName2Serializer_0 = destination_0;
  }
  Object.defineProperty(SealedClassSerializer.prototype, 'baseClass', {
    get: function () {
      return this.baseClass_a0a98o$_0;
    }
  });
  Object.defineProperty(SealedClassSerializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_gganzq$_0;
    }
  });
  SealedClassSerializer.prototype.findPolymorphicSerializerOrNull_ca6uye$ = function (decoder, klassName) {
    var tmp$;
    var $receiver = this.serialName2Serializer_0;
    var tmp$_0;
    return (tmp$ = (Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).get_11rb$(klassName)) != null ? tmp$ : AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_ca6uye$.call(this, decoder, klassName);
  };
  SealedClassSerializer.prototype.findPolymorphicSerializerOrNull_kjsxpj$ = function (encoder, value) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = (tmp$ = this.class2Serializer_0.get_11rb$(Kotlin.getKClassFromExpression(value))) != null ? tmp$ : AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_kjsxpj$.call(this, encoder, value)) != null) {
      var tmp$_2;
      tmp$_1 = Kotlin.isType(tmp$_2 = tmp$_0, SerializationStrategy) ? tmp$_2 : throwCCE();
    } else
      tmp$_1 = null;
    return tmp$_1;
  };
  function SealedClassSerializer$descriptor$lambda$lambda(closure$subclassSerializers) {
    return function ($receiver) {
      var $receiver_0 = closure$subclassSerializers;
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        var d = element.descriptor;
        $receiver.element_vxrguq$(d.serialName, d);
      }
      return Unit;
    };
  }
  function SealedClassSerializer$descriptor$lambda(this$SealedClassSerializer, closure$subclassSerializers) {
    return function ($receiver) {
      $receiver.element_vxrguq$('type', serializer_8(kotlin_js_internal_StringCompanionObject).descriptor);
      var elementDescriptor = buildSerialDescriptor('kotlinx.serialization.Sealed<' + toString(this$SealedClassSerializer.baseClass.simpleName) + '>', SerialKind$CONTEXTUAL_getInstance(), [], SealedClassSerializer$descriptor$lambda$lambda(closure$subclassSerializers));
      $receiver.element_vxrguq$('value', elementDescriptor);
      return Unit;
    };
  }
  function SealedClassSerializer_init$lambda(it) {
    return it.value.descriptor.serialName;
  }
  SealedClassSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SealedClassSerializer',
    interfaces: [AbstractPolymorphicSerializer]
  };
  function SerialFormat() {
  }
  SerialFormat.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SerialFormat',
    interfaces: []
  };
  function BinaryFormat() {
  }
  BinaryFormat.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BinaryFormat',
    interfaces: [SerialFormat]
  };
  function StringFormat() {
  }
  StringFormat.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StringFormat',
    interfaces: [SerialFormat]
  };
  var encodeToString = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.encodeToString_6mcrb2$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, value) {
      var tmp$;
      return $receiver.encodeToString_tf03ej$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), value);
    };
  }));
  var decodeFromString = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.decodeFromString_9hwa22$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, string) {
      var tmp$;
      return $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), string);
    };
  }));
  function encodeToHexString($receiver, serializer, value) {
    return InternalHexConverter_getInstance().printHexBinary_1fhb37$($receiver.encodeToByteArray_tf03ej$(serializer, value), true);
  }
  function decodeFromHexString($receiver, deserializer, hex) {
    return $receiver.decodeFromByteArray_dntfbn$(deserializer, InternalHexConverter_getInstance().parseHexBinary_61zpoe$(hex));
  }
  var encodeToHexString_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.encodeToHexString_8urtbi$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var encodeToHexString = _.kotlinx.serialization.encodeToHexString_4yxkwp$;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, value) {
      var tmp$;
      return encodeToHexString($receiver, Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), value);
    };
  }));
  var decodeFromHexString_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.decodeFromHexString_d2thiy$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var decodeFromHexString = _.kotlinx.serialization.decodeFromHexString_f786sb$;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, hex) {
      var tmp$;
      return decodeFromHexString($receiver, Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), hex);
    };
  }));
  var encodeToByteArray = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.encodeToByteArray_8urtbi$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, value) {
      var tmp$;
      return $receiver.encodeToByteArray_tf03ej$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), value);
    };
  }));
  var decodeFromByteArray = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.decodeFromByteArray_cbh7ow$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, bytes) {
      var tmp$;
      return $receiver.decodeFromByteArray_dntfbn$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), bytes);
    };
  }));
  function SerializationException() {
    this.name = 'SerializationException';
  }
  SerializationException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializationException',
    interfaces: [IllegalArgumentException]
  };
  function SerializationException_init($this) {
    $this = $this || Object.create(SerializationException.prototype);
    IllegalArgumentException_init_0($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_0(message, $this) {
    $this = $this || Object.create(SerializationException.prototype);
    IllegalArgumentException_init(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_1(message, cause, $this) {
    $this = $this || Object.create(SerializationException.prototype);
    IllegalArgumentException.call($this, message, cause);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_2(cause, $this) {
    $this = $this || Object.create(SerializationException.prototype);
    IllegalArgumentException_init_1(cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function MissingFieldException(fieldName) {
    SerializationException_init_0("Field '" + fieldName + "' is required, but it was missing", this);
    this.name = 'MissingFieldException';
  }
  MissingFieldException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MissingFieldException',
    interfaces: [SerializationException]
  };
  function UnknownFieldException(index) {
    SerializationException_init_0('An unknown field for index ' + index, this);
    this.name = 'UnknownFieldException';
  }
  UnknownFieldException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnknownFieldException',
    interfaces: [SerializationException]
  };
  var serializer_9 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.serializer_287e2$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_saj79j$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT) {
      var tmp$;
      return Kotlin.isType(tmp$ = serializer(getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE();
    };
  }));
  var serializer_10 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.serializer_3pytt4$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver) {
      var tmp$;
      return Kotlin.isType(tmp$ = serializer($receiver, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE();
    };
  }));
  function serializer_11(type) {
    var tmp$;
    var result = (tmp$ = serializerByKTypeImpl(EmptySerializersModule, type)) != null ? tmp$ : serializerNotRegistered(kclass(type));
    return nullable(result, type.isMarkedNullable);
  }
  function serializer_12($receiver, type) {
    var tmp$, tmp$_0, tmp$_1;
    var kclass_0 = kclass(type);
    var isNullable = type.isMarkedNullable;
    var builtin = serializerByKTypeImpl($receiver, type);
    if (builtin != null) {
      var tmp$_2;
      return Kotlin.isType(tmp$_2 = nullable(builtin, isNullable), KSerializer) ? tmp$_2 : throwCCE();
    }var tmp$_3;
    if ((tmp$_0 = (tmp$ = $receiver.getContextual_lmshww$(kclass_0)) != null ? nullable(tmp$, isNullable) : null) != null) {
      var tmp$_4;
      tmp$_3 = Kotlin.isType(tmp$_4 = tmp$_0, KSerializer) ? tmp$_4 : throwCCE();
    } else
      tmp$_3 = null;
    return (tmp$_1 = tmp$_3) != null ? tmp$_1 : serializerNotRegistered(kclass(type));
  }
  function serializerByKTypeImpl($receiver, type) {
    var tmp$, tmp$_0;
    var rootClass = kclass(type);
    var $receiver_0 = type.arguments;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2 = destination.add_11rb$;
      var value = item.type;
      var requireNotNull$result;
      if (value == null) {
        var message = 'Star projections in type arguments are not allowed, but had ' + type;
        throw IllegalArgumentException_init(message.toString());
      } else {
        requireNotNull$result = value;
      }
      tmp$_2.call(destination, requireNotNull$result);
    }
    var typeArguments = destination;
    if (typeArguments.isEmpty())
      tmp$_0 = (tmp$ = serializerOrNull(rootClass)) != null ? tmp$ : $receiver.getContextual_lmshww$(rootClass);
    else
      tmp$_0 = builtinSerializerOrNull_0($receiver, typeArguments, rootClass);
    var tmp$_3;
    if (tmp$_0 != null) {
      var tmp$_4;
      tmp$_3 = Kotlin.isType(tmp$_4 = tmp$_0, KSerializer) ? tmp$_4 : throwCCE();
    } else
      tmp$_3 = null;
    return tmp$_3;
  }
  function builtinSerializerOrNull_0($receiver, typeArguments, rootClass) {
    var tmp$, tmp$_0;
    var transform = getCallableRef('serializer', function ($receiver, p1) {
      return serializer_12($receiver, p1);
    }.bind(null, $receiver));
    var destination = ArrayList_init(collectionSizeOrDefault(typeArguments, 10));
    var tmp$_1;
    tmp$_1 = typeArguments.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(transform(item));
    }
    var serializers = destination;
    if (equals(rootClass, getKClass(List)) || equals(rootClass, getKClass(MutableList)) || equals(rootClass, getKClass(ArrayList)))
      tmp$_0 = new ArrayListSerializer(serializers.get_za3lpa$(0));
    else if (equals(rootClass, getKClass(HashSet)))
      tmp$_0 = new HashSetSerializer(serializers.get_za3lpa$(0));
    else if (equals(rootClass, getKClass(Set)) || equals(rootClass, getKClass(MutableSet)) || equals(rootClass, getKClass(LinkedHashSet)))
      tmp$_0 = new LinkedHashSetSerializer(serializers.get_za3lpa$(0));
    else if (equals(rootClass, getKClass(HashMap)))
      tmp$_0 = new HashMapSerializer(serializers.get_za3lpa$(0), serializers.get_za3lpa$(1));
    else if (equals(rootClass, getKClass(Map)) || equals(rootClass, getKClass(MutableMap)) || equals(rootClass, getKClass(LinkedHashMap)))
      tmp$_0 = new LinkedHashMapSerializer(serializers.get_za3lpa$(0), serializers.get_za3lpa$(1));
    else if (equals(rootClass, getKClass(Map$Entry)))
      tmp$_0 = MapEntrySerializer(serializers.get_za3lpa$(0), serializers.get_za3lpa$(1));
    else if (equals(rootClass, getKClass(Pair)))
      tmp$_0 = PairSerializer(serializers.get_za3lpa$(0), serializers.get_za3lpa$(1));
    else if (equals(rootClass, getKClass(Triple)))
      tmp$_0 = TripleSerializer(serializers.get_za3lpa$(0), serializers.get_za3lpa$(1), serializers.get_za3lpa$(2));
    else {
      if (isReferenceArray(rootClass)) {
        var tmp$_2;
        return Kotlin.isType(tmp$_2 = ArraySerializer_0(Kotlin.isType(tmp$ = typeArguments.get_za3lpa$(0).classifier, KClass) ? tmp$ : throwCCE(), serializers.get_za3lpa$(0)), KSerializer) ? tmp$_2 : throwCCE();
      }var value = constructSerializerForGivenTypeArgs(rootClass, copyToArray(serializers).slice());
      var requireNotNull$result;
      if (value == null) {
        var message = "Can't find a method to construct serializer for type " + toString(rootClass.simpleName) + '. ' + 'Make sure this class is marked as @Serializable or provide serializer explicitly.';
        throw IllegalArgumentException_init(message.toString());
      } else {
        requireNotNull$result = value;
      }
      tmp$_0 = requireNotNull$result;
    }
    return tmp$_0;
  }
  function serializer_13($receiver) {
    var tmp$;
    return (tmp$ = serializerOrNull($receiver)) != null ? tmp$ : serializerNotRegistered($receiver);
  }
  function serializerOrNull($receiver) {
    var tmp$;
    return (tmp$ = compiledSerializerImpl($receiver)) != null ? tmp$ : builtinSerializerOrNull($receiver);
  }
  function nullable($receiver, shouldBeNullable) {
    var tmp$;
    if (shouldBeNullable)
      return get_nullable($receiver);
    return Kotlin.isType(tmp$ = $receiver, KSerializer) ? tmp$ : throwCCE();
  }
  function decodeFromDynamic($receiver, deserializer, dynamic) {
    return (new DynamicObjectParser_0($receiver.serializersModule, $receiver.configuration_8be2vx$)).parse_tf9272$(dynamic, deserializer);
  }
  var decodeFromDynamic_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.decodeFromDynamic_is5yld$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var decodeFromDynamic = _.kotlinx.serialization.decodeFromDynamic_76vv94$;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, dynamic) {
      var tmp$;
      return decodeFromDynamic($receiver, Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), dynamic);
    };
  }));
  function encodeToDynamic($receiver, serializer, value) {
    return (new DynamicObjectSerializer($receiver.serializersModule, $receiver.configuration_8be2vx$, false)).serialize_tf03ej$(serializer, value);
  }
  var encodeToDynamic_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.encodeToDynamic_eahrye$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var encodeToDynamic = _.kotlinx.serialization.encodeToDynamic_9ibeu3$;
    var serializer = _.kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.kotlinx.serialization.KSerializer;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, $receiver, value) {
      var tmp$;
      return encodeToDynamic($receiver, Kotlin.isType(tmp$ = serializer($receiver.serializersModule, getReifiedTypeParameterKType(T_0)), KSerializer) ? tmp$ : throwCCE(), value);
    };
  }));
  var parserMessage;
  function DynamicObjectParser(context, configuration) {
    if (context === void 0)
      context = EmptySerializersModule;
    if (configuration === void 0)
      configuration = JsonConfiguration$Companion_getInstance().Default;
    this.context = context;
    this.configuration = configuration;
  }
  DynamicObjectParser.prototype.parse_pgxeca$ = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.DynamicObjectParser.parse_pgxeca$', wrapFunction(function () {
    var noImpl = _.kotlinx.serialization.noImpl;
    return function (T_0, isT, value) {
      return noImpl();
    };
  }));
  DynamicObjectParser.prototype.parse_tf9272$ = function (obj, deserializer) {
    return noImpl_0();
  };
  DynamicObjectParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicObjectParser',
    interfaces: []
  };
  var serializerMessage;
  function serialize($receiver, strategy, obj) {
    return noImpl_0();
  }
  var serialize_0 = defineInlineFunction('kotlinx-serialization-kotlinx-serialization-core-jsLegacy.kotlinx.serialization.serialize_nvcwwn$', wrapFunction(function () {
    var noImpl = _.kotlinx.serialization.noImpl;
    return function (T_0, isT, $receiver, obj) {
      return noImpl();
    };
  }));
  var MAX_SAFE_INTEGER;
  function DynamicObjectParser_0(serializersModule, configuration) {
    this.serializersModule_bfum9y$_0 = serializersModule;
    this.configuration_8be2vx$ = configuration;
  }
  Object.defineProperty(DynamicObjectParser_0.prototype, 'serializersModule', {
    get: function () {
      return this.serializersModule_bfum9y$_0;
    }
  });
  DynamicObjectParser_0.prototype.parse_tf9272$ = function (obj, deserializer) {
    return (new DynamicObjectParser$DynamicInput(this, obj)).decodeSerializableValue_w63s0f$(deserializer);
  };
  function DynamicObjectParser$DynamicInput($outer, obj) {
    this.$outer = $outer;
    NamedValueDecoder.call(this);
    this.obj = obj;
    this.pos_0 = 0;
  }
  Object.defineProperty(DynamicObjectParser$DynamicInput.prototype, 'serializersModule', {
    configurable: true,
    get: function () {
      return this.$outer.serializersModule;
    }
  });
  DynamicObjectParser$DynamicInput.prototype.composeName_puj7f4$ = function (parentName, childName) {
    return childName;
  };
  DynamicObjectParser$DynamicInput.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    var tmp$;
    while (this.pos_0 < descriptor.elementsCount) {
      var name = this.getTag_av9bu7$(descriptor, (tmp$ = this.pos_0, this.pos_0 = tmp$ + 1 | 0, tmp$));
      if (this.obj[name] !== undefined)
        return this.pos_0 - 1 | 0;
    }
    return -1;
  };
  DynamicObjectParser$DynamicInput.prototype.decodeTaggedEnum_gaombr$ = function (tag, enumDescription) {
    var tmp$;
    return getElementIndexOrThrow(enumDescription, typeof (tmp$ = this.getByTag_61zpoe$(tag)) === 'string' ? tmp$ : throwCCE());
  };
  DynamicObjectParser$DynamicInput.prototype.getByTag_61zpoe$ = function (tag) {
    return this.obj[tag];
  };
  DynamicObjectParser$DynamicInput.prototype.decodeTaggedChar_11rb$ = function (tag) {
    var tmp$;
    var o = this.getByTag_61zpoe$(tag);
    if (typeof o === 'string')
      if (o.length === 1)
        tmp$ = o.charCodeAt(0);
      else
        throw SerializationException_init_0(o.toString() + " can't be represented as Char");
    else if (Kotlin.isNumber(o))
      tmp$ = numberToChar(o);
    else
      throw SerializationException_init_0(o.toString() + " can't be represented as Char");
    return toBoxedChar(tmp$);
  };
  DynamicObjectParser$DynamicInput.prototype.decodeTaggedLong_11rb$ = function (tag) {
    var tmp$, tmp$_0;
    var obj = this.getByTag_61zpoe$(tag);
    tmp$_0 = typeof (tmp$ = obj) === 'number' ? tmp$ : null;
    if (tmp$_0 == null) {
      throw SerializationException_init_0(obj.toString() + ' is not a Number');
    }var number = tmp$_0;
    var tmp$_1 = isFinite_0(number);
    if (tmp$_1) {
      tmp$_1 = Math_0.floor(number) === number;
    }var canBeConverted = tmp$_1;
    if (!canBeConverted)
      throw SerializationException_init_0(number.toString() + " can't be represented as Long because it is not finite or has non-zero fractional part");
    var inBound = Math_0.abs(number) <= MAX_SAFE_INTEGER;
    if (!inBound)
      throw SerializationException_init_0(number.toString() + " can't be deserialized to Long due to a potential precision loss");
    return Kotlin.Long.fromNumber(number);
  };
  DynamicObjectParser$DynamicInput.prototype.decodeTaggedValue_11rb$ = function (tag) {
    var tmp$, tmp$_0;
    tmp$ = this.getByTag_61zpoe$(tag);
    if (tmp$ == null) {
      throw new MissingFieldException(tag);
    }var o = tmp$;
    return Kotlin.isType(tmp$_0 = o, Any) ? tmp$_0 : throwCCE();
  };
  DynamicObjectParser$DynamicInput.prototype.decodeTaggedNotNullMark_11rb$ = function (tag) {
    var o = this.getByTag_61zpoe$(tag);
    if (o === undefined)
      throw new MissingFieldException(tag);
    return o != null;
  };
  DynamicObjectParser$DynamicInput.prototype.beginStructure_24f42q$ = function (descriptor) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var curObj = (tmp$_0 = (tmp$ = this.currentTagOrNull) != null ? this.obj[tmp$] : null) != null ? tmp$_0 : this.obj;
    if (Kotlin.isType(descriptor.kind, PolymorphicKind))
      tmp$_1 = this.$outer.configuration_8be2vx$.useArrayPolymorphism ? StructureKind$LIST_getInstance() : StructureKind$MAP_getInstance();
    else
      tmp$_1 = descriptor.kind;
    var kind = tmp$_1;
    if (equals(kind, StructureKind$LIST_getInstance()))
      tmp$_2 = new DynamicObjectParser$DynamicListInput(this.$outer, curObj);
    else if (equals(kind, StructureKind$MAP_getInstance()))
      tmp$_2 = new DynamicObjectParser$DynamicMapInput(this.$outer, curObj);
    else
      tmp$_2 = new DynamicObjectParser$DynamicInput(this.$outer, curObj);
    return tmp$_2;
  };
  DynamicObjectParser$DynamicInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicInput',
    interfaces: [NamedValueDecoder]
  };
  function DynamicObjectParser$DynamicMapInput($outer, obj) {
    this.$outer = $outer;
    DynamicObjectParser$DynamicInput.call(this, this.$outer, obj);
    this.keys_0 = Object.keys(obj);
    var tmp$;
    this.size_0 = (typeof (tmp$ = this.keys_0.length) === 'number' ? tmp$ : throwCCE()) * 2 | 0;
    this.pos_1 = -1;
  }
  DynamicObjectParser$DynamicMapInput.prototype.elementName_szpzho$ = function (desc, index) {
    var tmp$;
    var i = index / 2 | 0;
    return typeof (tmp$ = this.keys_0[i]) === 'string' ? tmp$ : throwCCE();
  };
  DynamicObjectParser$DynamicMapInput.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    var tmp$, tmp$_0;
    while (this.pos_1 < (this.size_0 - 1 | 0)) {
      var i = (tmp$ = this.pos_1, this.pos_1 = tmp$ + 1 | 0, tmp$) / 2 | 0;
      var name = typeof (tmp$_0 = this.keys_0[i]) === 'string' ? tmp$_0 : throwCCE();
      if (this.obj[name] !== undefined)
        return this.pos_1;
    }
    return -1;
  };
  DynamicObjectParser$DynamicMapInput.prototype.getByTag_61zpoe$ = function (tag) {
    return this.pos_1 % 2 === 0 ? tag : this.obj[tag];
  };
  DynamicObjectParser$DynamicMapInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicMapInput',
    interfaces: [DynamicObjectParser$DynamicInput]
  };
  function DynamicObjectParser$DynamicListInput($outer, obj) {
    this.$outer = $outer;
    DynamicObjectParser$DynamicInput.call(this, this.$outer, obj);
    var tmp$;
    this.size_0 = typeof (tmp$ = obj.length) === 'number' ? tmp$ : throwCCE();
    this.pos_1 = -1;
  }
  DynamicObjectParser$DynamicListInput.prototype.elementName_szpzho$ = function (desc, index) {
    return index.toString();
  };
  DynamicObjectParser$DynamicListInput.prototype.decodeElementIndex_24f42q$ = function (descriptor) {
    while (this.pos_1 < (this.size_0 - 1 | 0)) {
      var o = this.obj[this.pos_1 = this.pos_1 + 1 | 0, this.pos_1];
      if (o !== undefined)
        return this.pos_1;
    }
    return -1;
  };
  DynamicObjectParser$DynamicListInput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicListInput',
    interfaces: [DynamicObjectParser$DynamicInput]
  };
  DynamicObjectParser_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicObjectParser',
    interfaces: [SerialFormat]
  };
  function DynamicObjectSerializer(serializersModule, configuration, encodeNullAsUndefined) {
    this.serializersModule_0 = serializersModule;
    this.configuration_0 = configuration;
    this.encodeNullAsUndefined_0 = encodeNullAsUndefined;
  }
  DynamicObjectSerializer.prototype.serialize_tf03ej$ = function (strategy, obj) {
    if (Kotlin.isType(strategy.descriptor.kind, PrimitiveKind) || Kotlin.isType(strategy.descriptor.kind, SerialKind$ENUM)) {
      var serializer = new DynamicPrimitiveEncoder(this.serializersModule_0, this.configuration_0);
      serializer.encodeSerializableValue_tf03ej$(strategy, obj);
      return serializer.result;
    }var serializer_0 = new DynamicObjectEncoder(this.serializersModule_0, this.configuration_0, this.encodeNullAsUndefined_0);
    serializer_0.encodeSerializableValue_tf03ej$(strategy, obj);
    return serializer_0.result;
  };
  DynamicObjectSerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicObjectSerializer',
    interfaces: []
  };
  function DynamicObjectEncoder(serializersModule, configuration, encodeNullAsUndefined) {
    AbstractEncoder.call(this);
    this.serializersModule_lvmuxt$_0 = serializersModule;
    this.configuration = configuration;
    this.encodeNullAsUndefined = encodeNullAsUndefined;
    this.result = DynamicObjectEncoder$NoOutputMark_getInstance();
    this.current_8t7zzf$_0 = this.current_8t7zzf$_0;
    this.currentName = null;
    this.currentDescriptor_glosyu$_0 = this.currentDescriptor_glosyu$_0;
    this.currentElementIsMapKey = false;
  }
  Object.defineProperty(DynamicObjectEncoder.prototype, 'serializersModule', {
    get: function () {
      return this.serializersModule_lvmuxt$_0;
    }
  });
  function DynamicObjectEncoder$NoOutputMark() {
    DynamicObjectEncoder$NoOutputMark_instance = this;
  }
  DynamicObjectEncoder$NoOutputMark.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NoOutputMark',
    interfaces: []
  };
  var DynamicObjectEncoder$NoOutputMark_instance = null;
  function DynamicObjectEncoder$NoOutputMark_getInstance() {
    if (DynamicObjectEncoder$NoOutputMark_instance === null) {
      new DynamicObjectEncoder$NoOutputMark();
    }return DynamicObjectEncoder$NoOutputMark_instance;
  }
  Object.defineProperty(DynamicObjectEncoder.prototype, 'current', {
    configurable: true,
    get: function () {
      if (this.current_8t7zzf$_0 == null)
        return throwUPAE('current');
      return this.current_8t7zzf$_0;
    },
    set: function (current) {
      this.current_8t7zzf$_0 = current;
    }
  });
  Object.defineProperty(DynamicObjectEncoder.prototype, 'currentDescriptor', {
    configurable: true,
    get: function () {
      if (this.currentDescriptor_glosyu$_0 == null)
        return throwUPAE('currentDescriptor');
      return this.currentDescriptor_glosyu$_0;
    },
    set: function (currentDescriptor) {
      this.currentDescriptor_glosyu$_0 = currentDescriptor;
    }
  });
  function DynamicObjectEncoder$Node(writeMode, jsObject) {
    this.writeMode = writeMode;
    this.jsObject = jsObject;
    this.index = 0;
    this.parent_k0jkco$_0 = this.parent_k0jkco$_0;
  }
  Object.defineProperty(DynamicObjectEncoder$Node.prototype, 'parent', {
    configurable: true,
    get: function () {
      if (this.parent_k0jkco$_0 == null)
        return throwUPAE('parent');
      return this.parent_k0jkco$_0;
    },
    set: function (parent) {
      this.parent_k0jkco$_0 = parent;
    }
  });
  DynamicObjectEncoder$Node.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Node',
    interfaces: []
  };
  function DynamicObjectEncoder$WriteMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DynamicObjectEncoder$WriteMode_initFields() {
    DynamicObjectEncoder$WriteMode_initFields = function () {
    };
    DynamicObjectEncoder$WriteMode$OBJ_instance = new DynamicObjectEncoder$WriteMode('OBJ', 0);
    DynamicObjectEncoder$WriteMode$MAP_instance = new DynamicObjectEncoder$WriteMode('MAP', 1);
    DynamicObjectEncoder$WriteMode$LIST_instance = new DynamicObjectEncoder$WriteMode('LIST', 2);
  }
  var DynamicObjectEncoder$WriteMode$OBJ_instance;
  function DynamicObjectEncoder$WriteMode$OBJ_getInstance() {
    DynamicObjectEncoder$WriteMode_initFields();
    return DynamicObjectEncoder$WriteMode$OBJ_instance;
  }
  var DynamicObjectEncoder$WriteMode$MAP_instance;
  function DynamicObjectEncoder$WriteMode$MAP_getInstance() {
    DynamicObjectEncoder$WriteMode_initFields();
    return DynamicObjectEncoder$WriteMode$MAP_instance;
  }
  var DynamicObjectEncoder$WriteMode$LIST_instance;
  function DynamicObjectEncoder$WriteMode$LIST_getInstance() {
    DynamicObjectEncoder$WriteMode_initFields();
    return DynamicObjectEncoder$WriteMode$LIST_instance;
  }
  DynamicObjectEncoder$WriteMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WriteMode',
    interfaces: [Enum]
  };
  function DynamicObjectEncoder$WriteMode$values() {
    return [DynamicObjectEncoder$WriteMode$OBJ_getInstance(), DynamicObjectEncoder$WriteMode$MAP_getInstance(), DynamicObjectEncoder$WriteMode$LIST_getInstance()];
  }
  DynamicObjectEncoder$WriteMode.values = DynamicObjectEncoder$WriteMode$values;
  function DynamicObjectEncoder$WriteMode$valueOf(name) {
    switch (name) {
      case 'OBJ':
        return DynamicObjectEncoder$WriteMode$OBJ_getInstance();
      case 'MAP':
        return DynamicObjectEncoder$WriteMode$MAP_getInstance();
      case 'LIST':
        return DynamicObjectEncoder$WriteMode$LIST_getInstance();
      default:throwISE('No enum constant kotlinx.serialization.internal.DynamicObjectEncoder.WriteMode.' + name);
    }
  }
  DynamicObjectEncoder$WriteMode.valueOf_61zpoe$ = DynamicObjectEncoder$WriteMode$valueOf;
  DynamicObjectEncoder.prototype.encodeElement_szpzho$ = function (descriptor, index) {
    this.current.index = index;
    this.currentDescriptor = descriptor;
    if (this.current.writeMode === DynamicObjectEncoder$WriteMode$MAP_getInstance()) {
      this.currentElementIsMapKey = this.current.index % 2 === 0;
    } else {
      this.currentName = descriptor.getElementName_za3lpa$(index);
    }
    return true;
  };
  DynamicObjectEncoder.prototype.encodeValue_za3rmp$ = function (value) {
    if (this.currentElementIsMapKey) {
      this.currentName = value.toString();
    } else {
      this.current.jsObject[this.currentName] = value;
    }
  };
  DynamicObjectEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeValue_za3rmp$(String.fromCharCode(value));
  };
  DynamicObjectEncoder.prototype.encodeNull = function () {
    if (this.currentElementIsMapKey) {
      this.currentName = null;
    } else {
      if (this.encodeNullAsUndefined)
        return;
      this.current.jsObject[this.currentName] = null;
    }
  };
  DynamicObjectEncoder.prototype.encodeEnum_szpzho$ = function (enumDescriptor, index) {
    this.encodeValue_za3rmp$(enumDescriptor.getElementName_za3lpa$(index));
  };
  DynamicObjectEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    var asDouble = value.toNumber();
    var conversionHasLossOfPrecision = Math_0.abs(asDouble) > MAX_SAFE_INTEGER;
    if (!this.configuration.isLenient && conversionHasLossOfPrecision) {
      throw IllegalArgumentException_init(value.toString() + " can't be serialized to number due to a potential precision loss. " + 'Use the JsonConfiguration option isLenient to serialize anyway');
    }if (this.currentElementIsMapKey && conversionHasLossOfPrecision) {
      throw IllegalArgumentException_init('Long with value ' + value.toString() + " can't be used in json as map key, because its value is larger than Number.MAX_SAFE_INTEGER");
    }this.encodeValue_za3rmp$(asDouble);
  };
  DynamicObjectEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
    this.encodeDouble_14dthe$(value);
  };
  DynamicObjectEncoder.prototype.encodeDouble_14dthe$ = function (value) {
    if (this.currentElementIsMapKey) {
      var hasNonZeroFractionalPart = Math_0.floor(value) !== value;
      if (!isFinite_0(value) || hasNonZeroFractionalPart) {
        throw IllegalArgumentException_init('Double with value ' + value + " can't be used in json as map key, because its value is not an integer.");
      }}this.encodeValue_za3rmp$(value);
  };
  DynamicObjectEncoder.prototype.shouldEncodeElementDefault_szpzho$ = function (descriptor, index) {
    return this.configuration.encodeDefaults;
  };
  DynamicObjectEncoder.prototype.enterNode_vqhxb$ = function (jsObject, writeMode) {
    var child = new DynamicObjectEncoder$Node(writeMode, jsObject);
    child.parent = this.current;
    this.current = child;
  };
  DynamicObjectEncoder.prototype.exitNode = function () {
    this.current = this.current.parent;
    this.currentElementIsMapKey = false;
  };
  DynamicObjectEncoder.prototype.beginStructure_jvp2sb$ = function (descriptor, typeSerializers) {
    if (this.currentElementIsMapKey) {
      throw IllegalArgumentException_init('Value of type ' + descriptor.serialName + " can't be used in json as map key. " + ('It should have either primitive or enum kind, but its kind is ' + descriptor.kind + '.'));
    }var newMode = this.selectMode_24f42q$(descriptor);
    if (this.result === DynamicObjectEncoder$NoOutputMark_getInstance()) {
      this.result = this.newChild_9yqiby$(newMode);
      this.current = new DynamicObjectEncoder$Node(newMode, this.result);
      this.current.parent = this.current;
    } else {
      var child = this.newChild_9yqiby$(newMode);
      this.current.jsObject[this.currentName] = child;
      this.enterNode_vqhxb$(child, newMode);
    }
    this.current.index = 0;
    return this;
  };
  DynamicObjectEncoder.prototype.newChild_9yqiby$ = function (writeMode) {
    switch (writeMode.name) {
      case 'OBJ':
      case 'MAP':
        return {};
      case 'LIST':
        return [];
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  DynamicObjectEncoder.prototype.endStructure_24f42q$ = function (descriptor) {
    this.exitNode();
  };
  DynamicObjectEncoder.prototype.selectMode_24f42q$ = function (desc) {
    var tmp$;
    tmp$ = desc.kind;
    if (equals(tmp$, StructureKind$CLASS_getInstance()) || equals(tmp$, StructureKind$OBJECT_getInstance()) || equals(tmp$, SerialKind$CONTEXTUAL_getInstance()))
      return DynamicObjectEncoder$WriteMode$OBJ_getInstance();
    else if (equals(tmp$, StructureKind$LIST_getInstance()) || Kotlin.isType(tmp$, PolymorphicKind))
      return DynamicObjectEncoder$WriteMode$LIST_getInstance();
    else if (equals(tmp$, StructureKind$MAP_getInstance()))
      return DynamicObjectEncoder$WriteMode$MAP_getInstance();
    else if (Kotlin.isType(tmp$, PrimitiveKind) || equals(tmp$, SerialKind$ENUM_getInstance())) {
      throw IllegalStateException_init('DynamicObjectSerializer does not support serialization of singular primitive values or enum types.'.toString());
    } else
      return Kotlin.noWhenBranchMatched();
  };
  DynamicObjectEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicObjectEncoder',
    interfaces: [AbstractEncoder]
  };
  function DynamicPrimitiveEncoder(serializersModule, configuration) {
    AbstractEncoder.call(this);
    this.serializersModule_fdvftv$_0 = serializersModule;
    this.configuration_0 = configuration;
    this.result = null;
  }
  Object.defineProperty(DynamicPrimitiveEncoder.prototype, 'serializersModule', {
    get: function () {
      return this.serializersModule_fdvftv$_0;
    }
  });
  DynamicPrimitiveEncoder.prototype.encodeNull = function () {
    this.result = null;
  };
  DynamicPrimitiveEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    var asDouble = value.toNumber();
    if (!this.configuration_0.isLenient && abs(value).toNumber() > MAX_SAFE_INTEGER) {
      throw IllegalArgumentException_init(value.toString() + " can't be deserialized to number due to a potential precision loss. " + 'Use the JsonConfiguration option isLenient to serialise anyway');
    }this.encodeValue_za3rmp$(asDouble);
  };
  DynamicPrimitiveEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeValue_za3rmp$(String.fromCharCode(value));
  };
  DynamicPrimitiveEncoder.prototype.encodeValue_za3rmp$ = function (value) {
    this.result = value;
  };
  DynamicPrimitiveEncoder.prototype.encodeEnum_szpzho$ = function (enumDescriptor, index) {
    this.encodeValue_za3rmp$(enumDescriptor.getElementName_za3lpa$(index));
  };
  DynamicPrimitiveEncoder.prototype.endStructure_24f42q$ = function (descriptor) {
  };
  DynamicPrimitiveEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DynamicPrimitiveEncoder',
    interfaces: [AbstractEncoder]
  };
  function getChecked($receiver, index) {
    if (!get_indices($receiver).contains_mef7kx$(index))
      throw new IndexOutOfBoundsException('Index ' + index + ' out of bounds ' + get_indices($receiver));
    return $receiver[index];
  }
  function getChecked_0($receiver, index) {
    if (!get_indices_0($receiver).contains_mef7kx$(index))
      throw new IndexOutOfBoundsException('Index ' + index + ' out of bounds ' + get_indices_0($receiver));
    return $receiver[index];
  }
  function compiledSerializerImpl($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = constructSerializerForGivenTypeArgs($receiver, [])) != null ? tmp$_1 : Kotlin.isType(tmp$_0 = (tmp$ = get_js($receiver).Companion) != null ? tmp$.serializer() : null, KSerializer) ? tmp$_0 : null;
  }
  function toNativeArrayImpl($receiver, eClass) {
    return copyToArray($receiver);
  }
  function isInstanceOf($receiver, kclass) {
    return kclass.isInstance_s8jyv4$($receiver);
  }
  function constructSerializerForGivenTypeArgs($receiver, args) {
    var tmp$, tmp$_0, tmp$_1;
    try {
      var assocObject = findAssociatedObject($receiver, getKClass(SerializableWith));
      if (Kotlin.isType(assocObject, KSerializer))
        tmp$_1 = Kotlin.isType(tmp$ = assocObject, KSerializer) ? tmp$ : throwCCE();
      else if (Kotlin.isType(assocObject, SerializerFactory))
        tmp$_1 = Kotlin.isType(tmp$_0 = assocObject.serializer_lu48y9$(args.slice()), KSerializer) ? tmp$_0 : throwCCE();
      else
        tmp$_1 = null;
    } catch (e) {
      tmp$_1 = null;
    }
    return tmp$_1;
  }
  function isReferenceArray(rootClass) {
    return rootClass != null ? rootClass.equals(PrimitiveClasses$arrayClass) : null;
  }
  function SerializableWith(serializer) {
    this.serializer = serializer;
  }
  SerializableWith.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SerializableWith',
    interfaces: [Annotation]
  };
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$serialization = package$kotlinx.serialization || (package$kotlinx.serialization = {});
  package$serialization.Serializable = Serializable;
  package$serialization.Serializer = Serializer;
  package$serialization.SerialName = SerialName;
  package$serialization.Required = Required;
  package$serialization.Transient = Transient;
  package$serialization.SerialInfo = SerialInfo;
  package$serialization.ContextualSerialization = ContextualSerialization;
  package$serialization.Contextual = Contextual;
  package$serialization.UseContextualSerialization = UseContextualSerialization;
  package$serialization.UseSerializers = UseSerializers;
  package$serialization.Polymorphic = Polymorphic;
  package$serialization.ExperimentalSerializationApi = ExperimentalSerializationApi;
  package$serialization.InternalSerializationApi = InternalSerializationApi;
  var package$builtins = package$serialization.builtins || (package$serialization.builtins = {});
  package$builtins.get_nullable_2418p6$ = get_nullable;
  package$builtins.PairSerializer_2yqygg$ = PairSerializer;
  package$builtins.MapEntrySerializer_2yqygg$ = MapEntrySerializer;
  package$builtins.TripleSerializer_jww85o$ = TripleSerializer;
  package$builtins.serializer_n24eoe$ = serializer;
  package$builtins.CharArraySerializer = CharArraySerializer;
  package$builtins.serializer_k5zfx8$ = serializer_0;
  package$builtins.ByteArraySerializer = ByteArraySerializer;
  package$builtins.serializer_qetqea$ = serializer_1;
  package$builtins.ShortArraySerializer = ShortArraySerializer;
  package$builtins.serializer_qn7glr$ = serializer_2;
  package$builtins.IntArraySerializer = IntArraySerializer;
  package$builtins.serializer_vbrujs$ = serializer_3;
  package$builtins.LongArraySerializer = LongArraySerializer;
  package$builtins.serializer_y9phqa$ = serializer_4;
  package$builtins.FloatArraySerializer = FloatArraySerializer;
  package$builtins.serializer_6a53gt$ = serializer_5;
  package$builtins.DoubleArraySerializer = DoubleArraySerializer;
  package$builtins.serializer_jtjczu$ = serializer_6;
  package$builtins.BooleanArraySerializer = BooleanArraySerializer;
  package$builtins.serializer_mours2$ = serializer_7;
  package$builtins.serializer_6eet4j$ = serializer_8;
  package$builtins.ArraySerializer_8tn5u0$ = ArraySerializer_0;
  package$builtins.ListSerializer_swdriu$ = ListSerializer;
  package$builtins.SetSerializer_swdriu$ = SetSerializer;
  package$builtins.MapSerializer_2yqygg$ = MapSerializer;
  package$builtins.UnitSerializer = UnitSerializer;
  package$builtins.get_list_gekvwj$ = get_list;
  package$builtins.get_set_gekvwj$ = get_set;
  Object.defineProperty(package$builtins, 'LongAsStringSerializer', {
    get: LongAsStringSerializer_getInstance
  });
  package$serialization.ContextualSerializer_init_lmshww$ = ContextualSerializer_init;
  package$serialization.ContextualSerializer = ContextualSerializer;
  var package$descriptors = package$serialization.descriptors || (package$serialization.descriptors = {});
  package$descriptors.get_capturedKClass_583jlf$ = get_capturedKClass;
  package$descriptors.getContextualDescriptor_6wk734$ = getContextualDescriptor;
  package$descriptors.getPolymorphicDescriptors_6wk734$ = getPolymorphicDescriptors;
  package$descriptors.withContext_k9hcuj$ = withContext;
  package$descriptors.SerialDescriptor = SerialDescriptor;
  package$descriptors.get_elementDescriptors_583jlf$ = get_elementDescriptors;
  package$descriptors.get_elementNames_583jlf$ = get_elementNames;
  package$descriptors.buildClassSerialDescriptor_dowfwv$ = buildClassSerialDescriptor;
  package$descriptors.PrimitiveSerialDescriptor_xytc2a$ = PrimitiveSerialDescriptor;
  package$descriptors.buildSerialDescriptor_2yu4m$ = buildSerialDescriptor;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'] = _;
  package$descriptors.serialDescriptor_saj79j$ = serialDescriptor_0;
  package$descriptors.listSerialDescriptor_24f42q$ = listSerialDescriptor;
  package$descriptors.mapSerialDescriptor_2ezn58$ = mapSerialDescriptor;
  package$descriptors.setSerialDescriptor_24f42q$ = setSerialDescriptor;
  package$descriptors.get_nullable_583jlf$ = get_nullable_0;
  package$descriptors.ClassSerialDescriptorBuilder = ClassSerialDescriptorBuilder;
  package$descriptors.SerialDescriptorImpl = SerialDescriptorImpl;
  Object.defineProperty(SerialKind, 'ENUM', {
    get: SerialKind$ENUM_getInstance
  });
  Object.defineProperty(SerialKind, 'CONTEXTUAL', {
    get: SerialKind$CONTEXTUAL_getInstance
  });
  package$descriptors.SerialKind = SerialKind;
  Object.defineProperty(PrimitiveKind, 'BOOLEAN', {
    get: PrimitiveKind$BOOLEAN_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'BYTE', {
    get: PrimitiveKind$BYTE_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'CHAR', {
    get: PrimitiveKind$CHAR_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'SHORT', {
    get: PrimitiveKind$SHORT_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'INT', {
    get: PrimitiveKind$INT_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'LONG', {
    get: PrimitiveKind$LONG_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'FLOAT', {
    get: PrimitiveKind$FLOAT_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'DOUBLE', {
    get: PrimitiveKind$DOUBLE_getInstance
  });
  Object.defineProperty(PrimitiveKind, 'STRING', {
    get: PrimitiveKind$STRING_getInstance
  });
  package$descriptors.PrimitiveKind = PrimitiveKind;
  Object.defineProperty(StructureKind, 'CLASS', {
    get: StructureKind$CLASS_getInstance
  });
  Object.defineProperty(StructureKind, 'LIST', {
    get: StructureKind$LIST_getInstance
  });
  Object.defineProperty(StructureKind, 'MAP', {
    get: StructureKind$MAP_getInstance
  });
  Object.defineProperty(StructureKind, 'OBJECT', {
    get: StructureKind$OBJECT_getInstance
  });
  package$descriptors.StructureKind = StructureKind;
  Object.defineProperty(PolymorphicKind, 'SEALED', {
    get: PolymorphicKind$SEALED_getInstance
  });
  Object.defineProperty(PolymorphicKind, 'OPEN', {
    get: PolymorphicKind$OPEN_getInstance
  });
  package$descriptors.PolymorphicKind = PolymorphicKind;
  Object.defineProperty(package$descriptors, 'UnionKind', {
    get: UnionKind_getInstance
  });
  var package$encoding = package$serialization.encoding || (package$serialization.encoding = {});
  package$encoding.AbstractDecoder = AbstractDecoder;
  package$encoding.AbstractEncoder = AbstractEncoder;
  package$encoding.Decoder = Decoder;
  Object.defineProperty(CompositeDecoder, 'Companion', {
    get: CompositeDecoder$Companion_getInstance
  });
  package$encoding.CompositeDecoder = CompositeDecoder;
  package$encoding.decodeStructure_tzrhxq$ = decodeStructure;
  Object.defineProperty(package$encoding, 'updateModeDeprecated_8be2vx$', {
    get: function () {
      return updateModeDeprecated;
    }
  });
  package$encoding.Encoder = Encoder;
  package$encoding.CompositeEncoder = CompositeEncoder;
  package$encoding.encodeStructure_iqdhfr$ = encodeStructure;
  var package$internal = package$serialization.internal || (package$serialization.internal = {});
  package$internal.AbstractPolymorphicSerializer = AbstractPolymorphicSerializer;
  package$internal.throwSubtypeNotRegistered_it6qj1$ = throwSubtypeNotRegistered;
  package$internal.throwSubtypeNotRegistered_zgnrn5$ = throwSubtypeNotRegistered_0;
  package$internal.ListLikeDescriptor = ListLikeDescriptor;
  package$internal.MapLikeDescriptor = MapLikeDescriptor;
  Object.defineProperty(package$internal, 'ARRAY_NAME_8be2vx$', {
    get: function () {
      return ARRAY_NAME;
    }
  });
  Object.defineProperty(package$internal, 'ARRAY_LIST_NAME_8be2vx$', {
    get: function () {
      return ARRAY_LIST_NAME;
    }
  });
  Object.defineProperty(package$internal, 'LINKED_HASH_SET_NAME_8be2vx$', {
    get: function () {
      return LINKED_HASH_SET_NAME;
    }
  });
  Object.defineProperty(package$internal, 'HASH_SET_NAME_8be2vx$', {
    get: function () {
      return HASH_SET_NAME;
    }
  });
  Object.defineProperty(package$internal, 'LINKED_HASH_MAP_NAME_8be2vx$', {
    get: function () {
      return LINKED_HASH_MAP_NAME;
    }
  });
  Object.defineProperty(package$internal, 'HASH_MAP_NAME_8be2vx$', {
    get: function () {
      return HASH_MAP_NAME;
    }
  });
  package$internal.PrimitiveArrayDescriptor = PrimitiveArrayDescriptor;
  package$internal.ArrayClassDesc = ArrayClassDesc;
  package$internal.ArrayListClassDesc = ArrayListClassDesc;
  package$internal.NamedListClassDescriptor = NamedListClassDescriptor;
  package$internal.LinkedHashSetClassDesc = LinkedHashSetClassDesc;
  package$internal.HashSetClassDesc = HashSetClassDesc;
  package$internal.NamedMapClassDescriptor = NamedMapClassDescriptor;
  package$internal.LinkedHashMapClassDesc = LinkedHashMapClassDesc;
  package$internal.HashMapClassDesc = HashMapClassDesc;
  package$internal.AbstractCollectionSerializer = AbstractCollectionSerializer;
  package$internal.ListLikeSerializer = ListLikeSerializer;
  package$internal.MapLikeSerializer = MapLikeSerializer;
  package$internal.PrimitiveArrayBuilder = PrimitiveArrayBuilder;
  package$internal.PrimitiveArraySerializer = PrimitiveArraySerializer;
  package$internal.ReferenceArraySerializer = ReferenceArraySerializer;
  package$internal.ArrayListSerializer = ArrayListSerializer;
  package$internal.LinkedHashSetSerializer = LinkedHashSetSerializer;
  package$internal.HashSetSerializer = HashSetSerializer;
  package$internal.LinkedHashMapSerializer = LinkedHashMapSerializer;
  package$internal.HashMapSerializer = HashMapSerializer;
  package$internal.EnumDescriptor = EnumDescriptor;
  package$internal.EnumSerializer = EnumSerializer;
  package$internal.NullableSerializer = NullableSerializer;
  package$internal.SerialDescriptorForNullable = SerialDescriptorForNullable;
  package$internal.ObjectSerializer = ObjectSerializer;
  Object.defineProperty(package$internal, 'HexConverter', {
    get: HexConverter_getInstance
  });
  Object.defineProperty(package$internal, 'InternalHexConverter', {
    get: InternalHexConverter_getInstance
  });
  package$internal.cachedSerialNames_tie8r4$ = cachedSerialNames;
  package$internal.compactArray_b0lhx2$ = compactArray;
  package$internal.defer_nmpjmt$ = defer;
  package$serialization.KSerializer = KSerializer;
  package$internal.cast_irzu8f$ = cast;
  package$serialization.SerializationStrategy = SerializationStrategy;
  package$internal.cast_sjryxj$ = cast_0;
  package$serialization.DeserializationStrategy = DeserializationStrategy;
  package$internal.cast_pbw0sq$ = cast_1;
  package$internal.serializerNotRegistered_lu5d9p$ = serializerNotRegistered;
  package$internal.kclass_7v1px$ = kclass;
  package$internal.getElementIndexOrThrow_luk6xe$ = getElementIndexOrThrow;
  package$internal.elementsHashCodeBy_9ua6wn$ = elementsHashCodeBy;
  package$internal.PluginGeneratedSerialDescriptor = PluginGeneratedSerialDescriptor;
  package$internal.hashCodeImpl_y01f7g$ = hashCodeImpl;
  Object.defineProperty(package$internal, 'EMPTY_SERIALIZER_ARRAY_8be2vx$', {
    get: function () {
      return EMPTY_SERIALIZER_ARRAY;
    }
  });
  package$internal.GeneratedSerializer = GeneratedSerializer;
  package$internal.SerializerFactory = SerializerFactory;
  Object.defineProperty(package$internal, 'ByteArraySerializer', {
    get: ByteArraySerializer_getInstance
  });
  package$internal.ByteArrayBuilder = ByteArrayBuilder;
  Object.defineProperty(package$internal, 'ShortArraySerializer', {
    get: ShortArraySerializer_getInstance
  });
  package$internal.ShortArrayBuilder = ShortArrayBuilder;
  Object.defineProperty(package$internal, 'IntArraySerializer', {
    get: IntArraySerializer_getInstance
  });
  package$internal.IntArrayBuilder = IntArrayBuilder;
  Object.defineProperty(package$internal, 'LongArraySerializer', {
    get: LongArraySerializer_getInstance
  });
  package$internal.LongArrayBuilder = LongArrayBuilder;
  Object.defineProperty(package$internal, 'FloatArraySerializer', {
    get: FloatArraySerializer_getInstance
  });
  package$internal.FloatArrayBuilder = FloatArrayBuilder;
  Object.defineProperty(package$internal, 'DoubleArraySerializer', {
    get: DoubleArraySerializer_getInstance
  });
  package$internal.DoubleArrayBuilder = DoubleArrayBuilder;
  Object.defineProperty(package$internal, 'CharArraySerializer', {
    get: CharArraySerializer_getInstance
  });
  package$internal.CharArrayBuilder = CharArrayBuilder;
  Object.defineProperty(package$internal, 'BooleanArraySerializer', {
    get: BooleanArraySerializer_getInstance
  });
  package$internal.BooleanArrayBuilder = BooleanArrayBuilder;
  package$internal.PrimitiveSerialDescriptor = PrimitiveSerialDescriptor_0;
  package$internal.PrimitiveDescriptorSafe_2z23zl$ = PrimitiveDescriptorSafe;
  package$internal.builtinSerializerOrNull_beh9s$ = builtinSerializerOrNull;
  Object.defineProperty(package$internal, 'UnitSerializer', {
    get: UnitSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'BooleanSerializer', {
    get: BooleanSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'ByteSerializer', {
    get: ByteSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'ShortSerializer', {
    get: ShortSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'IntSerializer', {
    get: IntSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'LongSerializer', {
    get: LongSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'FloatSerializer', {
    get: FloatSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'DoubleSerializer', {
    get: DoubleSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'CharSerializer', {
    get: CharSerializer_getInstance
  });
  Object.defineProperty(package$internal, 'StringSerializer', {
    get: StringSerializer_getInstance
  });
  package$internal.Migration = Migration;
  Object.defineProperty(package$internal, 'IntDescriptor', {
    get: IntDescriptor_getInstance
  });
  Object.defineProperty(package$internal, 'UnitDescriptor', {
    get: UnitDescriptor_getInstance
  });
  Object.defineProperty(package$internal, 'BooleanDescriptor', {
    get: BooleanDescriptor_getInstance
  });
  Object.defineProperty(package$internal, 'ByteDescriptor', {
    get: ByteDescriptor_getInstance
  });
  Object.defineProperty(package$internal, 'ShortDescriptor', {
    get: ShortDescriptor_getInstance
  });
  Object.defineProperty(package$internal, 'LongDescriptor', {
    get: LongDescriptor_getInstance
  });
  Object.defineProperty(package$internal, 'FloatDescriptor', {
    get: FloatDescriptor_getInstance
  });
  Object.defineProperty(package$internal, 'DoubleDescriptor', {
    get: DoubleDescriptor_getInstance
  });
  Object.defineProperty(package$internal, 'CharDescriptor', {
    get: CharDescriptor_getInstance
  });
  Object.defineProperty(package$internal, 'StringDescriptor', {
    get: StringDescriptor_getInstance
  });
  package$internal.SerializationConstructorMarker = SerializationConstructorMarker;
  package$internal.TaggedEncoder = TaggedEncoder;
  package$internal.NamedValueEncoder = NamedValueEncoder;
  package$internal.TaggedDecoder = TaggedDecoder;
  package$internal.NamedValueDecoder = NamedValueDecoder;
  package$internal.KeyValueSerializer = KeyValueSerializer;
  package$internal.MapEntrySerializer = MapEntrySerializer_0;
  package$internal.PairSerializer = PairSerializer_0;
  package$internal.TripleSerializer = TripleSerializer_0;
  var package$json = package$serialization.json || (package$serialization.json = {});
  var package$internal_0 = package$json.internal || (package$json.internal = {});
  package$internal_0.JsonConf = JsonConf;
  package$internal_0.JsonException = JsonException;
  package$internal_0.JsonDecodingException = JsonDecodingException;
  package$internal_0.JsonEncodingException = JsonEncodingException;
  package$internal_0.JsonDecodingException_kx378j$ = JsonDecodingException_0;
  package$internal_0.InvalidFloatingPointEncoded_qwibp1$ = InvalidFloatingPointEncoded;
  package$internal_0.InvalidFloatingPointEncoded_x0xb19$ = InvalidFloatingPointEncoded_0;
  package$internal_0.InvalidFloatingPointDecoded_x0xb19$ = InvalidFloatingPointDecoded;
  package$internal_0.throwInvalidFloatingPointDecoded_nyj901$ = throwInvalidFloatingPointDecoded;
  package$internal_0.UnknownKeyException_wdz5eb$ = UnknownKeyException;
  package$internal_0.InvalidKeyKindException_jo479d$ = InvalidKeyKindException;
  package$internal_0.JsonParser = JsonParser;
  Object.defineProperty(package$internal_0, 'lenientHint_8be2vx$', {
    get: function () {
      return lenientHint;
    }
  });
  Object.defineProperty(package$internal_0, 'coerceInputValuesHint_8be2vx$', {
    get: function () {
      return coerceInputValuesHint;
    }
  });
  Object.defineProperty(package$internal_0, 'specialFlowingValuesHint_8be2vx$', {
    get: function () {
      return specialFlowingValuesHint;
    }
  });
  Object.defineProperty(package$internal_0, 'ignoreUnknownKeysHint_8be2vx$', {
    get: function () {
      return ignoreUnknownKeysHint;
    }
  });
  Object.defineProperty(package$internal_0, 'allowStructuredMapKeysHint_8be2vx$', {
    get: function () {
      return allowStructuredMapKeysHint;
    }
  });
  Object.defineProperty(package$internal_0, 'NULL_8be2vx$', {
    get: function () {
      return NULL_0;
    }
  });
  Object.defineProperty(package$internal_0, 'COMMA_8be2vx$', {
    get: function () {
      return COMMA;
    }
  });
  Object.defineProperty(package$internal_0, 'COLON_8be2vx$', {
    get: function () {
      return COLON;
    }
  });
  Object.defineProperty(package$internal_0, 'BEGIN_OBJ_8be2vx$', {
    get: function () {
      return BEGIN_OBJ;
    }
  });
  Object.defineProperty(package$internal_0, 'END_OBJ_8be2vx$', {
    get: function () {
      return END_OBJ;
    }
  });
  Object.defineProperty(package$internal_0, 'BEGIN_LIST_8be2vx$', {
    get: function () {
      return BEGIN_LIST;
    }
  });
  Object.defineProperty(package$internal_0, 'END_LIST_8be2vx$', {
    get: function () {
      return END_LIST;
    }
  });
  Object.defineProperty(package$internal_0, 'STRING_8be2vx$', {
    get: function () {
      return STRING;
    }
  });
  Object.defineProperty(package$internal_0, 'STRING_ESC_8be2vx$', {
    get: function () {
      return STRING_ESC;
    }
  });
  Object.defineProperty(package$internal_0, 'INVALID_8be2vx$', {
    get: function () {
      return INVALID;
    }
  });
  Object.defineProperty(package$internal_0, 'UNICODE_ESC_8be2vx$', {
    get: function () {
      return UNICODE_ESC;
    }
  });
  Object.defineProperty(package$internal_0, 'TC_OTHER_8be2vx$', {
    get: function () {
      return TC_OTHER;
    }
  });
  Object.defineProperty(package$internal_0, 'TC_STRING_8be2vx$', {
    get: function () {
      return TC_STRING;
    }
  });
  Object.defineProperty(package$internal_0, 'TC_STRING_ESC_8be2vx$', {
    get: function () {
      return TC_STRING_ESC;
    }
  });
  Object.defineProperty(package$internal_0, 'TC_WS_8be2vx$', {
    get: function () {
      return TC_WS;
    }
  });
  Object.defineProperty(package$internal_0, 'TC_COMMA_8be2vx$', {
    get: function () {
      return TC_COMMA;
    }
  });
  Object.defineProperty(package$internal_0, 'TC_COLON_8be2vx$', {
    get: function () {
      return TC_COLON;
    }
  });
  Object.defineProperty(package$internal_0, 'TC_BEGIN_OBJ_8be2vx$', {
    get: function () {
      return TC_BEGIN_OBJ;
    }
  });
  Object.defineProperty(package$internal_0, 'TC_END_OBJ_8be2vx$', {
    get: function () {
      return TC_END_OBJ;
    }
  });
  Object.defineProperty(package$internal_0, 'TC_BEGIN_LIST_8be2vx$', {
    get: function () {
      return TC_BEGIN_LIST;
    }
  });
  Object.defineProperty(package$internal_0, 'TC_END_LIST_8be2vx$', {
    get: function () {
      return TC_END_LIST;
    }
  });
  Object.defineProperty(package$internal_0, 'TC_NULL_8be2vx$', {
    get: function () {
      return TC_NULL;
    }
  });
  Object.defineProperty(package$internal_0, 'TC_INVALID_8be2vx$', {
    get: function () {
      return TC_INVALID;
    }
  });
  Object.defineProperty(package$internal_0, 'TC_EOF_8be2vx$', {
    get: function () {
      return TC_EOF;
    }
  });
  Object.defineProperty(package$internal_0, 'C2TC_8be2vx$', {
    get: function () {
      return C2TC;
    }
  });
  Object.defineProperty(package$internal_0, 'EscapeCharMappings', {
    get: EscapeCharMappings_getInstance
  });
  package$internal_0.charToTokenClass_8e8zqy$ = charToTokenClass;
  package$internal_0.escapeToChar_kcn2v3$ = escapeToChar;
  package$internal_0.JsonReader = JsonReader;
  package$internal_0.encodePolymorphically_51w9c5$ = encodePolymorphically;
  package$internal_0.checkKind_x1ow4c$ = checkKind;
  package$internal_0.decodeSerializableValuePolymorphic_3uiavc$ = decodeSerializableValuePolymorphic;
  package$internal_0.PolymorphismValidator = PolymorphismValidator;
  package$internal_0.StreamingJsonDecoder = StreamingJsonDecoder;
  StreamingJsonEncoder.Composer = StreamingJsonEncoder$Composer;
  package$internal_0.StreamingJsonEncoder_init_e4t9r6$ = StreamingJsonEncoder_init;
  package$internal_0.StreamingJsonEncoder = StreamingJsonEncoder;
  package$internal_0.printQuoted_jigvc$ = printQuoted;
  package$internal_0.toBooleanStrict_7efafi$ = toBooleanStrict;
  package$internal_0.toBooleanStrictOrNull_7efafi$ = toBooleanStrictOrNull;
  package$internal_0.shouldBeQuoted_y4putb$ = shouldBeQuoted;
  package$internal_0.readJson_ijhaef$ = readJson;
  package$internal_0.readPolymorphicJson_nnpnh6$ = readPolymorphicJson;
  package$internal_0.writeJson_4dixew$ = writeJson;
  Object.defineProperty(package$internal_0, 'PRIMITIVE_TAG_8be2vx$', {
    get: function () {
      return PRIMITIVE_TAG;
    }
  });
  Object.defineProperty(WriteMode, 'OBJ', {
    get: WriteMode$OBJ_getInstance
  });
  Object.defineProperty(WriteMode, 'LIST', {
    get: WriteMode$LIST_getInstance
  });
  Object.defineProperty(WriteMode, 'MAP', {
    get: WriteMode$MAP_getInstance
  });
  Object.defineProperty(WriteMode, 'POLY_OBJ', {
    get: WriteMode$POLY_OBJ_getInstance
  });
  package$internal_0.WriteMode = WriteMode;
  package$internal_0.switchMode_q3nfcb$ = switchMode;
  package$internal_0.selectMapMode_clqyd9$ = selectMapMode;
  Object.defineProperty(Json, 'Default', {
    get: Json$Default_getInstance
  });
  package$json.Json = Json;
  package$json.Json_x26noe$ = Json_0;
  package$json.JsonBuilder = JsonBuilder;
  package$json.Json_pgorq6$ = Json_1;
  package$json.Json_79ca8q$ = Json_2;
  package$json.Json_qt1oxq$ = Json_3;
  package$json.Json_i4rudb$ = Json_4;
  package$json.Json_4jix7z$ = Json_5;
  package$json._Json = Json_6;
  Object.defineProperty(JsonConfiguration, 'Companion', {
    get: JsonConfiguration$Companion_getInstance
  });
  package$json.JsonConfiguration = JsonConfiguration;
  package$json.SubtypeToDetectDefault = SubtypeToDetectDefault;
  package$json.SubtypeToDetectStable = SubtypeToDetectStable;
  package$json.JsonConfiguration_dqye30$ = JsonConfiguration_0;
  package$json.JsonContentPolymorphicSerializer = JsonContentPolymorphicSerializer;
  package$json.JsonDecoder = JsonDecoder;
  Object.defineProperty(JsonElement, 'Companion', {
    get: JsonElement$Companion_getInstance
  });
  package$json.JsonElement = JsonElement;
  Object.defineProperty(JsonPrimitive, 'Companion', {
    get: JsonPrimitive$Companion_getInstance
  });
  package$json.JsonPrimitive = JsonPrimitive;
  package$json.JsonPrimitive_1v8dbw$ = JsonPrimitive_0;
  package$json.JsonPrimitive_rcaewn$ = JsonPrimitive_1;
  package$json.JsonPrimitive_pdl1vj$ = JsonPrimitive_2;
  package$json.JsonLiteral = JsonLiteral;
  Object.defineProperty(package$json, 'JsonNull', {
    get: JsonNull_getInstance
  });
  Object.defineProperty(JsonObject, 'Companion', {
    get: JsonObject$Companion_getInstance
  });
  package$json.JsonObject = JsonObject;
  Object.defineProperty(JsonArray, 'Companion', {
    get: JsonArray$Companion_getInstance
  });
  package$json.JsonArray = JsonArray;
  package$json.get_jsonPrimitive_u3sd3g$ = get_jsonPrimitive;
  package$json.get_jsonObject_u3sd3g$ = get_jsonObject;
  package$json.get_jsonArray_u3sd3g$ = get_jsonArray;
  package$json.get_jsonNull_u3sd3g$ = get_jsonNull;
  package$json.get_int_59esu7$ = get_int;
  package$json.get_intOrNull_59esu7$ = get_intOrNull;
  package$json.get_long_59esu7$ = get_long;
  package$json.get_longOrNull_59esu7$ = get_longOrNull;
  package$json.get_double_59esu7$ = get_double;
  package$json.get_doubleOrNull_59esu7$ = get_doubleOrNull;
  package$json.get_float_59esu7$ = get_float;
  package$json.get_floatOrNull_59esu7$ = get_floatOrNull;
  package$json.get_boolean_59esu7$ = get_boolean;
  package$json.get_booleanOrNull_59esu7$ = get_booleanOrNull;
  package$json.get_contentOrNull_59esu7$ = get_contentOrNull;
  package$json.unexpectedJson_puj7f4$ = unexpectedJson;
  package$json.buildJsonObject_s5o6vg$ = buildJsonObject;
  package$json.buildJsonArray_mb52fq$ = buildJsonArray;
  package$json.JsonObjectBuilder = JsonObjectBuilder;
  package$json.putJsonObject_qdwamy$ = putJsonObject;
  package$json.putJsonArray_h6ak7k$ = putJsonArray;
  package$json.put_45j0gm$ = put;
  package$json.put_iet0pv$ = put_0;
  package$json.put_kdidqz$ = put_1;
  package$json.JsonArrayBuilder = JsonArrayBuilder;
  package$json.add_2ifez4$ = add;
  package$json.add_imjofx$ = add_0;
  package$json.add_kl91h1$ = add_1;
  package$json.addJsonObject_d58nnk$ = addJsonObject;
  package$json.addJsonArray_t23uk6$ = addJsonArray;
  package$json.JsonDslMarker = JsonDslMarker;
  Object.defineProperty(package$json, 'JsonElementSerializer', {
    get: JsonElementSerializer_getInstance
  });
  Object.defineProperty(package$json, 'JsonPrimitiveSerializer', {
    get: JsonPrimitiveSerializer_getInstance
  });
  Object.defineProperty(package$json, 'JsonNullSerializer', {
    get: JsonNullSerializer_getInstance
  });
  Object.defineProperty(package$json, 'JsonObjectSerializer', {
    get: JsonObjectSerializer_getInstance
  });
  Object.defineProperty(package$json, 'JsonArraySerializer', {
    get: JsonArraySerializer_getInstance
  });
  package$json.asJsonDecoder_k984l0$ = asJsonDecoder;
  package$json.asJsonEncoder_vwx09w$ = asJsonEncoder;
  package$json.JsonEncoder = JsonEncoder;
  package$json.get_plain_wq5qm5$ = get_plain;
  package$json.get_unquoted_wq5qm5$ = get_unquoted;
  package$json.get_indented_wq5qm5$ = get_indented;
  package$json.get_nonstrict_wq5qm5$ = get_nonstrict;
  package$json.toJson_9ibeu3$ = toJson;
  package$json.toJson_nvcwwn$ = toJson_0;
  package$json.parseJson_abqhco$ = parseJson;
  package$json.fromJson_9qmq3o$ = fromJson;
  package$json.fromJson_w77oo0$ = fromJson_0;
  package$json.JsonInput = JsonInput;
  package$json.decodeJson_vciiv0$ = decodeJson;
  package$json.JsonOutput = JsonOutput;
  package$json.encodeJson_wj7nfz$ = encodeJson;
  package$json.get_isNull_u3sd3g$ = get_isNull;
  package$json.getPrimitive_mxi5qn$ = getPrimitive;
  package$json.getObject_mxi5qn$ = getObject;
  package$json.getArray_mxi5qn$ = getArray;
  package$json.getPrimitiveOrNull_mxi5qn$ = getPrimitiveOrNull;
  package$json.getObjectOrNull_mxi5qn$ = getObjectOrNull;
  package$json.getArrayOrNull_mxi5qn$ = getArrayOrNull;
  package$json.getAs_rvwv4s$ = getAs;
  package$json.getAsOrNull_rvwv4s$ = getAsOrNull;
  package$json.getPrimitive_xpx153$ = getPrimitive_0;
  package$json.getObject_xpx153$ = getObject_0;
  package$json.getArray_xpx153$ = getArray_0;
  package$json.getPrimitiveOrNull_xpx153$ = getPrimitiveOrNull_0;
  package$json.getObjectOrNull_xpx153$ = getObjectOrNull_0;
  package$json.getArrayOrNull_xpx153$ = getArrayOrNull_0;
  package$json.getAs_ke50pa$ = getAs_0;
  package$json.getAsOrNull_ke50pa$ = getAsOrNull_0;
  package$json.get_primitive_u3sd3g$ = get_primitive;
  package$json.contains_95e8em$ = contains;
  package$json.get_int_u3sd3g$ = get_int_0;
  package$json.get_intOrNull_u3sd3g$ = get_intOrNull_0;
  package$json.get_long_u3sd3g$ = get_long_0;
  package$json.get_longOrNull_u3sd3g$ = get_longOrNull_0;
  package$json.get_double_u3sd3g$ = get_double_0;
  package$json.get_doubleOrNull_u3sd3g$ = get_doubleOrNull_0;
  package$json.get_float_u3sd3g$ = get_float_0;
  package$json.get_floatOrNull_u3sd3g$ = get_floatOrNull_0;
  package$json.get_boolean_u3sd3g$ = get_boolean_0;
  package$json.get_booleanOrNull_u3sd3g$ = get_booleanOrNull_0;
  package$json.get_content_u3sd3g$ = get_content;
  package$json.get_contentOrNull_u3sd3g$ = get_contentOrNull_0;
  package$json.JsonLiteral_s8jyv4$ = JsonLiteral_0;
  package$json.json_s5o6vg$ = json;
  package$json.jsonArray_mb52fq$ = jsonArray;
  package$json.JsonTransformingSerializer_init_1x4at$ = JsonTransformingSerializer_init;
  package$json.JsonTransformingSerializer = JsonTransformingSerializer;
  Object.defineProperty(UpdateMode, 'BANNED', {
    get: UpdateMode$BANNED_getInstance
  });
  Object.defineProperty(UpdateMode, 'OVERWRITE', {
    get: UpdateMode$OVERWRITE_getInstance
  });
  Object.defineProperty(UpdateMode, 'UPDATE', {
    get: UpdateMode$UPDATE_getInstance
  });
  package$serialization.UpdateMode = UpdateMode;
  Object.defineProperty(package$serialization, 'patchDeprecated_8be2vx$', {
    get: function () {
      return patchDeprecated;
    }
  });
  package$serialization.noImpl = noImpl_0;
  package$serialization.PrimitiveDescriptorWithName = PrimitiveDescriptorWithName;
  package$serialization.withName_nr9qdt$ = withName;
  package$serialization.get_nullable_2418p6$ = get_nullable_1;
  package$serialization.get_list_gekvwj$ = get_list_0;
  package$serialization.get_set_gekvwj$ = get_set_0;
  package$serialization.get_map_kgqhr1$ = get_map;
  package$serialization.compiledSerializer_1yb8b7$ = compiledSerializer;
  package$serialization.Mapper = Mapper;
  package$serialization.SerialId = SerialId;
  package$serialization.getContextualOrDefault_jngc0i$ = getContextualOrDefault;
  package$serialization.getContextualOrDefault_1p95d$ = getContextualOrDefault_0;
  Object.defineProperty(package$serialization, 'PolymorphicClassDescriptor', {
    get: get_PolymorphicClassDescriptor
  });
  package$serialization.AbstractSerialFormat = AbstractSerialFormat;
  package$serialization.stringify_f0yoh1$ = stringify_1;
  package$serialization.parse_rw0txp$ = parse;
  package$serialization.stringify_sjm6nd$ = stringify_2;
  package$serialization.parse_ww7s7p$ = parse_0;
  package$serialization.load_8bbv3$ = load;
  package$serialization.dump_4yxkwp$ = dump;
  package$serialization.dumps_4yxkwp$ = dumps;
  package$serialization.loads_f786sb$ = loads;
  package$serialization.dump_nz3mh7$ = dump_0;
  package$serialization.dumps_nz3mh7$ = dumps_0;
  package$serialization.load_716s99$ = load_0;
  package$serialization.loads_nps2g3$ = loads_0;
  package$serialization.decode_2dlf36$ = decode;
  package$serialization.decode_gwehjc$ = decode_0;
  package$serialization.encode_u6dh32$ = encode;
  package$serialization.encode_j8bg50$ = encode_0;
  package$serialization.SerialDescriptor_dowfwv$ = SerialDescriptor_0;
  package$serialization.SerialDescriptor_2yu4m$ = SerialDescriptor_1;
  package$serialization.PrimitiveDescriptor_xytc2a$ = PrimitiveDescriptor;
  package$serialization.get_context_fxu8s1$ = get_context;
  package$serialization.elementDescriptors_583jlf$ = elementDescriptors;
  package$serialization.elementNames_583jlf$ = elementNames;
  package$serialization.ImplicitReflectionSerializer = ImplicitReflectionSerializer;
  package$serialization.UnstableDefault = UnstableDefault;
  var package$modules = package$serialization.modules || (package$serialization.modules = {});
  Object.defineProperty(package$modules, 'EmptyModule', {
    get: function () {
      return EmptyModule;
    }
  });
  package$modules.serializersModule_ewacr1$ = serializersModule;
  package$modules.serializersModuleOf_azm104$ = serializersModuleOf;
  package$modules.polymorphic_2y8wp8$ = polymorphic;
  package$modules.polymorphic_okqsya$ = polymorphic_0;
  package$modules.defaultPolymorphic_qzetoq$ = defaultPolymorphic;
  package$modules.getContextual_xxfirp$ = getContextual;
  package$modules.getContextual_1p95d$ = getContextual_0;
  package$modules.PolymorphicModuleBuilder = PolymorphicModuleBuilder;
  package$modules.SerializersModule = SerializersModule;
  Object.defineProperty(package$modules, 'EmptySerializersModule', {
    get: function () {
      return EmptySerializersModule;
    }
  });
  package$modules.plus_nz2fmb$ = plus;
  package$modules.overwriteWith_nz2fmb$ = overwriteWith;
  package$modules.SerialModuleImpl = SerialModuleImpl;
  package$modules.serializersModuleOf_cfhkba$ = serializersModuleOf_0;
  package$modules.SerializersModule_q4tcel$ = SerializersModule_0;
  package$modules.SerializersModuleBuilder = SerializersModuleBuilder;
  package$modules.polymorphic_fy38n9$ = polymorphic_1;
  package$modules.SerializersModuleCollector = SerializersModuleCollector;
  package$serialization.PolymorphicSerializer = PolymorphicSerializer;
  package$serialization.findPolymorphicSerializer_uce5au$ = findPolymorphicSerializer;
  package$serialization.findPolymorphicSerializer_dz33bw$ = findPolymorphicSerializer_0;
  package$serialization.SealedClassSerializer = SealedClassSerializer;
  package$serialization.SerialFormat = SerialFormat;
  package$serialization.BinaryFormat = BinaryFormat;
  package$serialization.StringFormat = StringFormat;
  package$serialization.encodeToHexString_4yxkwp$ = encodeToHexString;
  package$serialization.decodeFromHexString_f786sb$ = decodeFromHexString;
  package$serialization.SerializationException_init = SerializationException_init;
  package$serialization.SerializationException_init_pdl1vj$ = SerializationException_init_0;
  package$serialization.SerializationException_init_wspj0f$ = SerializationException_init_1;
  package$serialization.SerializationException_init_dbl4no$ = SerializationException_init_2;
  package$serialization.SerializationException = SerializationException;
  package$serialization.MissingFieldException = MissingFieldException;
  package$serialization.UnknownFieldException = UnknownFieldException;
  package$serialization.serializer_saj79j$ = serializer_11;
  package$serialization.serializer_ca95z9$ = serializer_12;
  package$serialization.serializer_1yb8b7$ = serializer_13;
  package$serialization.serializerOrNull_1yb8b7$ = serializerOrNull;
  package$serialization.decodeFromDynamic_76vv94$ = decodeFromDynamic;
  package$serialization.encodeToDynamic_9ibeu3$ = encodeToDynamic;
  package$serialization.DynamicObjectParser = DynamicObjectParser;
  package$serialization.serialize_9ibeu3$ = serialize;
  Object.defineProperty(package$internal, 'MAX_SAFE_INTEGER_8be2vx$', {
    get: function () {
      return MAX_SAFE_INTEGER;
    }
  });
  package$internal.DynamicObjectParser = DynamicObjectParser_0;
  package$internal.DynamicObjectSerializer = DynamicObjectSerializer;
  package$internal.getChecked_4bqw6o$ = getChecked;
  package$internal.getChecked_3zu3yo$ = getChecked_0;
  package$internal.compiledSerializerImpl_beh9s$ = compiledSerializerImpl;
  package$internal.toNativeArrayImpl_wfz7v1$ = toNativeArrayImpl;
  package$internal.isInstanceOf_ofcvxk$ = isInstanceOf;
  package$internal.constructSerializerForGivenTypeArgs_f7nown$ = constructSerializerForGivenTypeArgs;
  package$internal.isReferenceArray_79m3vz$ = isReferenceArray;
  package$serialization.SerializableWith = SerializableWith;
  LongAsStringSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  ContextualSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  Object.defineProperty(SerialDescriptorImpl.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  AbstractDecoder.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  AbstractDecoder.prototype.beginStructure_24f42q$ = Decoder.prototype.beginStructure_24f42q$;
  AbstractDecoder.prototype.decodeSerializableElement_186mnl$ = CompositeDecoder.prototype.decodeSerializableElement_186mnl$;
  AbstractDecoder.prototype.decodeNullableSerializableElement_pzkbua$ = CompositeDecoder.prototype.decodeNullableSerializableElement_pzkbua$;
  AbstractDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  AbstractDecoder.prototype.updateSerializableValue_19c8k5$ = Decoder.prototype.updateSerializableValue_19c8k5$;
  AbstractDecoder.prototype.updateNullableSerializableValue_exmlbs$ = Decoder.prototype.updateNullableSerializableValue_exmlbs$;
  AbstractDecoder.prototype.decodeSequentially = CompositeDecoder.prototype.decodeSequentially;
  AbstractDecoder.prototype.decodeCollectionSize_24f42q$ = CompositeDecoder.prototype.decodeCollectionSize_24f42q$;
  AbstractDecoder.prototype.updateSerializableElement_12e8id$ = CompositeDecoder.prototype.updateSerializableElement_12e8id$;
  AbstractDecoder.prototype.updateNullableSerializableElement_8viuyw$ = CompositeDecoder.prototype.updateNullableSerializableElement_8viuyw$;
  AbstractDecoder.prototype.decodeSerializableElement_12e8id$ = CompositeDecoder.prototype.decodeSerializableElement_12e8id$;
  AbstractDecoder.prototype.decodeNullableSerializableElement_8viuyw$ = CompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$;
  AbstractEncoder.prototype.beginStructure_24f42q$ = Encoder.prototype.beginStructure_24f42q$;
  AbstractEncoder.prototype.encodeNotNullMark = Encoder.prototype.encodeNotNullMark;
  AbstractEncoder.prototype.beginCollection_szpzho$ = Encoder.prototype.beginCollection_szpzho$;
  AbstractEncoder.prototype.beginCollection_m8o8wh$ = Encoder.prototype.beginCollection_m8o8wh$;
  AbstractEncoder.prototype.encodeSerializableValue_tf03ej$ = Encoder.prototype.encodeSerializableValue_tf03ej$;
  AbstractEncoder.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  AbstractEncoder.prototype.shouldEncodeElementDefault_szpzho$ = CompositeEncoder.prototype.shouldEncodeElementDefault_szpzho$;
  AbstractEncoder.prototype.encodeNonSerializableElement_ptgdlt$ = CompositeEncoder.prototype.encodeNonSerializableElement_ptgdlt$;
  AbstractPolymorphicSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  Object.defineProperty(ListLikeDescriptor.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  Object.defineProperty(ListLikeDescriptor.prototype, 'annotations', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'annotations'));
  Object.defineProperty(MapLikeDescriptor.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  Object.defineProperty(MapLikeDescriptor.prototype, 'annotations', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'annotations'));
  AbstractCollectionSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  Object.defineProperty(PluginGeneratedSerialDescriptor.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  EnumSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  NullableSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  ObjectSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  Object.defineProperty(defer$ObjectLiteral.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  Object.defineProperty(defer$ObjectLiteral.prototype, 'annotations', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'annotations'));
  GeneratedSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  ByteArraySerializer_0.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  ShortArraySerializer_0.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  IntArraySerializer_0.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  LongArraySerializer_0.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  FloatArraySerializer_0.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  DoubleArraySerializer_0.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  CharArraySerializer_0.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  BooleanArraySerializer_0.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  Object.defineProperty(PrimitiveSerialDescriptor_0.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  Object.defineProperty(PrimitiveSerialDescriptor_0.prototype, 'annotations', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'annotations'));
  BooleanSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  ByteSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  ShortSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  IntSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  LongSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  FloatSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  DoubleSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  CharSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  StringSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  Object.defineProperty(Migration.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  Object.defineProperty(Migration.prototype, 'annotations', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'annotations'));
  TaggedEncoder.prototype.beginStructure_24f42q$ = Encoder.prototype.beginStructure_24f42q$;
  TaggedEncoder.prototype.beginCollection_szpzho$ = Encoder.prototype.beginCollection_szpzho$;
  TaggedEncoder.prototype.beginCollection_m8o8wh$ = Encoder.prototype.beginCollection_m8o8wh$;
  TaggedEncoder.prototype.encodeSerializableValue_tf03ej$ = Encoder.prototype.encodeSerializableValue_tf03ej$;
  TaggedEncoder.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  TaggedEncoder.prototype.shouldEncodeElementDefault_szpzho$ = CompositeEncoder.prototype.shouldEncodeElementDefault_szpzho$;
  TaggedEncoder.prototype.encodeNonSerializableElement_ptgdlt$ = CompositeEncoder.prototype.encodeNonSerializableElement_ptgdlt$;
  TaggedDecoder.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  TaggedDecoder.prototype.beginStructure_24f42q$ = Decoder.prototype.beginStructure_24f42q$;
  TaggedDecoder.prototype.decodeSerializableElement_186mnl$ = CompositeDecoder.prototype.decodeSerializableElement_186mnl$;
  TaggedDecoder.prototype.decodeNullableSerializableElement_pzkbua$ = CompositeDecoder.prototype.decodeNullableSerializableElement_pzkbua$;
  TaggedDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  TaggedDecoder.prototype.updateSerializableValue_19c8k5$ = Decoder.prototype.updateSerializableValue_19c8k5$;
  TaggedDecoder.prototype.updateNullableSerializableValue_exmlbs$ = Decoder.prototype.updateNullableSerializableValue_exmlbs$;
  TaggedDecoder.prototype.decodeSequentially = CompositeDecoder.prototype.decodeSequentially;
  TaggedDecoder.prototype.decodeCollectionSize_24f42q$ = CompositeDecoder.prototype.decodeCollectionSize_24f42q$;
  TaggedDecoder.prototype.updateSerializableElement_12e8id$ = CompositeDecoder.prototype.updateSerializableElement_12e8id$;
  TaggedDecoder.prototype.updateNullableSerializableElement_8viuyw$ = CompositeDecoder.prototype.updateNullableSerializableElement_8viuyw$;
  TaggedDecoder.prototype.decodeSerializableElement_12e8id$ = CompositeDecoder.prototype.decodeSerializableElement_12e8id$;
  TaggedDecoder.prototype.decodeNullableSerializableElement_8viuyw$ = CompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$;
  KeyValueSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  TripleSerializer_0.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  JsonDecoder.prototype.beginStructure_24f42q$ = Decoder.prototype.beginStructure_24f42q$;
  JsonDecoder.prototype.beginStructure_jvp2sb$ = Decoder.prototype.beginStructure_jvp2sb$;
  JsonDecoder.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  JsonDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  JsonDecoder.prototype.updateSerializableValue_19c8k5$ = Decoder.prototype.updateSerializableValue_19c8k5$;
  JsonDecoder.prototype.updateNullableSerializableValue_exmlbs$ = Decoder.prototype.updateNullableSerializableValue_exmlbs$;
  JsonDecoder.prototype.decodeSequentially = CompositeDecoder.prototype.decodeSequentially;
  JsonDecoder.prototype.decodeCollectionSize_24f42q$ = CompositeDecoder.prototype.decodeCollectionSize_24f42q$;
  JsonDecoder.prototype.decodeSerializableElement_186mnl$ = CompositeDecoder.prototype.decodeSerializableElement_186mnl$;
  JsonDecoder.prototype.decodeSerializableElement_12e8id$$default = CompositeDecoder.prototype.decodeSerializableElement_12e8id$$default;
  JsonDecoder.prototype.decodeNullableSerializableElement_8viuyw$$default = CompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$$default;
  JsonDecoder.prototype.decodeNullableSerializableElement_pzkbua$ = CompositeDecoder.prototype.decodeNullableSerializableElement_pzkbua$;
  JsonDecoder.prototype.updateSerializableElement_12e8id$ = CompositeDecoder.prototype.updateSerializableElement_12e8id$;
  JsonDecoder.prototype.updateNullableSerializableElement_8viuyw$ = CompositeDecoder.prototype.updateNullableSerializableElement_8viuyw$;
  JsonDecoder.prototype.decodeSerializableElement_12e8id$ = CompositeDecoder.prototype.decodeSerializableElement_12e8id$;
  JsonDecoder.prototype.decodeNullableSerializableElement_8viuyw$ = CompositeDecoder.prototype.decodeNullableSerializableElement_8viuyw$;
  StreamingJsonDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = JsonDecoder.prototype.decodeNullableSerializableValue_aae3ea$;
  StreamingJsonDecoder.prototype.updateSerializableValue_19c8k5$ = JsonDecoder.prototype.updateSerializableValue_19c8k5$;
  StreamingJsonDecoder.prototype.updateNullableSerializableValue_exmlbs$ = JsonDecoder.prototype.updateNullableSerializableValue_exmlbs$;
  StreamingJsonDecoder.prototype.decodeSequentially = JsonDecoder.prototype.decodeSequentially;
  StreamingJsonDecoder.prototype.decodeCollectionSize_24f42q$ = JsonDecoder.prototype.decodeCollectionSize_24f42q$;
  StreamingJsonDecoder.prototype.decodeSerializableElement_186mnl$ = JsonDecoder.prototype.decodeSerializableElement_186mnl$;
  StreamingJsonDecoder.prototype.decodeNullableSerializableElement_pzkbua$ = JsonDecoder.prototype.decodeNullableSerializableElement_pzkbua$;
  StreamingJsonDecoder.prototype.updateSerializableElement_12e8id$ = JsonDecoder.prototype.updateSerializableElement_12e8id$;
  StreamingJsonDecoder.prototype.updateNullableSerializableElement_8viuyw$ = JsonDecoder.prototype.updateNullableSerializableElement_8viuyw$;
  JsonEncoder.prototype.encodeNotNullMark = Encoder.prototype.encodeNotNullMark;
  JsonEncoder.prototype.beginStructure_24f42q$ = Encoder.prototype.beginStructure_24f42q$;
  JsonEncoder.prototype.beginStructure_jvp2sb$ = Encoder.prototype.beginStructure_jvp2sb$;
  JsonEncoder.prototype.beginCollection_szpzho$ = Encoder.prototype.beginCollection_szpzho$;
  JsonEncoder.prototype.beginCollection_m8o8wh$ = Encoder.prototype.beginCollection_m8o8wh$;
  JsonEncoder.prototype.encodeSerializableValue_tf03ej$ = Encoder.prototype.encodeSerializableValue_tf03ej$;
  JsonEncoder.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  JsonEncoder.prototype.shouldEncodeElementDefault_szpzho$ = CompositeEncoder.prototype.shouldEncodeElementDefault_szpzho$;
  JsonEncoder.prototype.encodeNonSerializableElement_ptgdlt$ = CompositeEncoder.prototype.encodeNonSerializableElement_ptgdlt$;
  StreamingJsonEncoder.prototype.encodeNotNullMark = JsonEncoder.prototype.encodeNotNullMark;
  StreamingJsonEncoder.prototype.beginCollection_szpzho$ = JsonEncoder.prototype.beginCollection_szpzho$;
  StreamingJsonEncoder.prototype.beginCollection_m8o8wh$ = JsonEncoder.prototype.beginCollection_m8o8wh$;
  StreamingJsonEncoder.prototype.encodeNullableSerializableValue_f4686g$ = JsonEncoder.prototype.encodeNullableSerializableValue_f4686g$;
  StreamingJsonEncoder.prototype.encodeNonSerializableElement_ptgdlt$ = JsonEncoder.prototype.encodeNonSerializableElement_ptgdlt$;
  JsonContentPolymorphicSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  JsonElementSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  JsonPrimitiveSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  JsonNullSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  JsonLiteralSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  JsonObjectSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  JsonArraySerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  JsonTransformingSerializer.prototype.patch_h7kg3r$ = KSerializer.prototype.patch_h7kg3r$;
  updateModeDeprecated = 'Update mode in Decoder is deprecated for removal. ' + 'Update behaviour is now considered an implementation detail of the format that should not concern serializer.';
  updateMethodDeprecated = 'Update* methods are deprecated for removal. ' + 'Update behaviour is now considered an implementation detail of the format.' + 'Updating elements that are outside of structure is an unsupported operation.';
  updateElementMethodDeprecated = 'Update* methods are deprecated for removal. ' + 'Update behaviour is now considered an implementation detail of the format.' + 'Pass the old value to decodeSerializable*, so formats that support update could use it.';
  decodeMethodDeprecated = 'Please migrate to decodeElement method which accepts old value.' + 'Feel free to ignore it if your format does not support updates.';
  ARRAY_NAME = 'kotlin.Array';
  ARRAY_LIST_NAME = 'kotlin.collections.ArrayList';
  LINKED_HASH_SET_NAME = 'kotlin.collections.LinkedHashSet';
  HASH_SET_NAME = 'kotlin.collections.HashSet';
  LINKED_HASH_MAP_NAME = 'kotlin.collections.LinkedHashMap';
  HASH_MAP_NAME = 'kotlin.collections.HashMap';
  EMPTY_DESCRIPTOR_ARRAY = [];
  EMPTY_SERIALIZER_ARRAY = [];
  INITIAL_SIZE = 10;
  BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses$stringClass, serializer_8(kotlin_js_internal_StringCompanionObject)), to(getKClass(Char), serializer(kotlin_js_internal_CharCompanionObject)), to(PrimitiveClasses$charArrayClass, CharArraySerializer()), to(PrimitiveClasses$doubleClass, serializer_5(kotlin_js_internal_DoubleCompanionObject)), to(PrimitiveClasses$doubleArrayClass, DoubleArraySerializer()), to(PrimitiveClasses$floatClass, serializer_4(kotlin_js_internal_FloatCompanionObject)), to(PrimitiveClasses$floatArrayClass, FloatArraySerializer()), to(getKClass(Long), serializer_3(kotlin_js_internal_LongCompanionObject)), to(PrimitiveClasses$longArrayClass, LongArraySerializer()), to(PrimitiveClasses$intClass, serializer_2(kotlin_js_internal_IntCompanionObject)), to(PrimitiveClasses$intArrayClass, IntArraySerializer()), to(PrimitiveClasses$shortClass, serializer_1(kotlin_js_internal_ShortCompanionObject)), to(PrimitiveClasses$shortArrayClass, ShortArraySerializer()), to(PrimitiveClasses$byteClass, serializer_0(kotlin_js_internal_ByteCompanionObject)), to(PrimitiveClasses$byteArrayClass, ByteArraySerializer()), to(PrimitiveClasses$booleanClass, serializer_6(kotlin_js_internal_BooleanCompanionObject)), to(PrimitiveClasses$booleanArrayClass, BooleanArraySerializer()), to(getKClass(Object.getPrototypeOf(kotlin.Unit).constructor), serializer_7(Unit))]);
  message = 'Top level primitive descriptors are unavailable to avoid accidental misuage. ' + 'Please use kind for comparison and primitive descriptor with a unique name for implementation';
  NULL = new Any();
  deprecationMessage = 'This class is used only by the plugin in generated code and should not be used directly. Use corresponding factory functions instead';
  lenientHint = "Use 'isLenient = true' in 'Json {}` builder to accept non-compliant JSON.";
  coerceInputValuesHint = "Use 'coerceInputValues = true' in 'Json {}` builder to coerce nulls to default values.";
  specialFlowingValuesHint = "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'";
  ignoreUnknownKeysHint = "Use 'ignoreUnknownKeys = true' in 'Json {}' builder to ignore unknown keys.";
  allowStructuredMapKeysHint = "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.";
  NULL_0 = 'null';
  COMMA = 44;
  COLON = 58;
  BEGIN_OBJ = 123;
  END_OBJ = 125;
  BEGIN_LIST = 91;
  END_LIST = 93;
  STRING = 34;
  STRING_ESC = 92;
  INVALID = toChar(0);
  UNICODE_ESC = 117;
  TC_OTHER = 0;
  TC_STRING = 1;
  TC_STRING_ESC = 2;
  TC_WS = 3;
  TC_COMMA = 4;
  TC_COLON = 5;
  TC_BEGIN_OBJ = 6;
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_NULL = 10;
  TC_INVALID = 11;
  TC_EOF = 12;
  CTC_MAX = 126;
  ESC2C_MAX = 117;
  var $receiver = new Int8Array(126);
  for (var i = 0; i <= 32; i++) {
    initC2TC($receiver, i, TC_INVALID);
  }
  initC2TC($receiver, 9, TC_WS);
  initC2TC($receiver, 10, TC_WS);
  initC2TC($receiver, 13, TC_WS);
  initC2TC($receiver, 32, TC_WS);
  initC2TC_0($receiver, COMMA, TC_COMMA);
  initC2TC_0($receiver, COLON, TC_COLON);
  initC2TC_0($receiver, BEGIN_OBJ, TC_BEGIN_OBJ);
  initC2TC_0($receiver, END_OBJ, TC_END_OBJ);
  initC2TC_0($receiver, BEGIN_LIST, TC_BEGIN_LIST);
  initC2TC_0($receiver, END_LIST, TC_END_LIST);
  initC2TC_0($receiver, STRING, TC_STRING);
  initC2TC_0($receiver, STRING_ESC, TC_STRING_ESC);
  C2TC = $receiver;
  var $receiver_0 = Kotlin.newArray(128, null);
  for (var c = 0; c <= 31; c++) {
    var c1 = toHexChar(c >> 12);
    var c2 = toHexChar(c >> 8);
    var c3 = toHexChar(c >> 4);
    var c4 = toHexChar(c);
    $receiver_0[c] = '\\' + 'u' + String.fromCharCode(c1) + String.fromCharCode(c2) + String.fromCharCode(c3) + String.fromCharCode(c4);
  }
  $receiver_0[34] = '\\"';
  $receiver_0[92] = '\\\\';
  $receiver_0[9] = '\\t';
  $receiver_0[8] = '\\b';
  $receiver_0[10] = '\\n';
  $receiver_0[13] = '\\r';
  $receiver_0[12] = '\\f';
  ESCAPE_CHARS = $receiver_0;
  PRIMITIVE_TAG = 'primitive';
  defaultIndent = '    ';
  defaultDiscriminator = 'type';
  infixToDeprecated = "Infix 'to' operator is deprecated for removal for the favour of 'add'";
  unaryPlusDeprecated = "Unary plus is deprecated for removal for the favour of 'add'";
  message_0 = 'Top-level JSON instances are deprecated for removal in the favour of user-configured one. ' + "You can either use a Json top-level object, configure your own instance  via 'Json {}' builder-like constructor, " + "'Json(JsonConfiguration)' constructor or by tweaking stable configuration 'Json(JsonConfiguration.Stable.copy(prettyPrint = true))'";
  patchDeprecated = 'Patch function is deprecated for removal since this functionality is no longer supported by serializer.' + 'Some formats may provide implementation-specific patching in their Decoders.';
  message_1 = 'Mapper was renamed to Properties to better reflect its semantics and extracted to separate artifact kotlinx-serialization-properties';
  EmptyModule = EmptySerializersModule;
  EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap());
  parserMessage = "DynamicObjectParser and its 'parse' method were unified with Json operations. " + "Please use Json's 'decodeFromDynamic' extension.";
  serializerMessage = "DynamicObjectSerializer and its 'serialize' method were unified with Json operations. " + "Please use Json's 'encodeToDynamic' extension.";
  MAX_SAFE_INTEGER = L9007199254740991.toNumber();
  Kotlin.defineModule('kotlinx-serialization-kotlinx-serialization-core-jsLegacy', _);
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-jsLegacy.js.map
