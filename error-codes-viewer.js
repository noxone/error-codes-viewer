if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'error-codes-viewer'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'error-codes-viewer'.");
}if (typeof this['ktor-ktor-client-core-jsLegacy'] === 'undefined') {
  throw new Error("Error loading module 'error-codes-viewer'. Its dependency 'ktor-ktor-client-core-jsLegacy' was not found. Please, check whether 'ktor-ktor-client-core-jsLegacy' is loaded prior to 'error-codes-viewer'.");
}if (typeof this['ktor-ktor-http-jsLegacy'] === 'undefined') {
  throw new Error("Error loading module 'error-codes-viewer'. Its dependency 'ktor-ktor-http-jsLegacy' was not found. Please, check whether 'ktor-ktor-http-jsLegacy' is loaded prior to 'error-codes-viewer'.");
}if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'error-codes-viewer'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'error-codes-viewer'.");
}if (typeof this['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'] === 'undefined') {
  throw new Error("Error loading module 'error-codes-viewer'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-jsLegacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-jsLegacy' is loaded prior to 'error-codes-viewer'.");
}if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'error-codes-viewer'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'error-codes-viewer'.");
}this['error-codes-viewer'] = function (_, Kotlin, $module$ktor_ktor_client_core_jsLegacy, $module$ktor_ktor_http_jsLegacy, $module$kotlinx_html_js, $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toMutableList = Kotlin.kotlin.sequences.toMutableList_veqyi0$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toString = Kotlin.toString;
  var Exception = Kotlin.kotlin.Exception;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var js = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.engine.js;
  var HttpClient = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.HttpClient_744i18$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var createKType = Kotlin.createKType;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var equals = Kotlin.equals;
  var kotlin_js_internal_StringCompanionObject = Kotlin.kotlin.js.internal.StringCompanionObject;
  var get_CASE_INSENSITIVE_ORDER = Kotlin.kotlin.text.get_CASE_INSENSITIVE_ORDER_6eet4j$;
  var Comparator = Kotlin.kotlin.Comparator;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var takeFrom = $module$ktor_ktor_client_core_jsLegacy.$$importsForInline$$['ktor-ktor-http-jsLegacy'].io.ktor.http.takeFrom_wol2ee$;
  var utils = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.utils;
  var url = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod = $module$ktor_ktor_client_core_jsLegacy.$$importsForInline$$['ktor-ktor-http-jsLegacy'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.request.HttpRequestBuilder;
  var HttpStatement_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.HttpStatement;
  var getKClass = Kotlin.getKClass;
  var throwCCE = Kotlin.throwCCE;
  var HttpResponse = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.HttpResponse;
  var complete = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.statement.complete_abn2de$;
  var call = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_ktor_client_core_jsLegacy.io.ktor.client.call.TypeInfo;
  var filter = Kotlin.kotlin.sequences.filter_euau3h$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var Url = $module$ktor_ktor_http_jsLegacy.io.ktor.http.Url_61zpoe$;
  var splitToSequence = Kotlin.kotlin.text.splitToSequence_o64adg$;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var joinToString = Kotlin.kotlin.sequences.joinToString_853xkz$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.MissingFieldException;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var joinToString_1 = Kotlin.kotlin.collections.joinToString_fmv235$;
  var RuntimeException_init_0 = Kotlin.kotlin.RuntimeException;
  var ClassCastException = Kotlin.kotlin.ClassCastException;
  var attributesMapOf = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_jyasbz$;
  var SPAN_init = $module$kotlinx_html_js.kotlinx.html.SPAN;
  var visitTag = $module$kotlinx_html_js.kotlinx.html.visitTag_xwv8ym$;
  var visitTagAndFinalize = $module$kotlinx_html_js.kotlinx.html.visitTagAndFinalize_g9qte5$;
  var enumEncode = $module$kotlinx_html_js.kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_alerag$;
  var BUTTON_init = $module$kotlinx_html_js.kotlinx.html.BUTTON;
  var HTMLButtonElement_0 = HTMLButtonElement;
  var DIV_init = $module$kotlinx_html_js.kotlinx.html.DIV;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var mapNotNull = Kotlin.kotlin.sequences.mapNotNull_qpz9h9$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_5cw0du$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  ApplicationSettings.prototype = Object.create(AbstractApplicationSettings.prototype);
  ApplicationSettings.prototype.constructor = ApplicationSettings;
  AbstractIbmUrlCodeDescriptionProvider.prototype = Object.create(AbstractUrlCodeDescriptionProvider.prototype);
  AbstractIbmUrlCodeDescriptionProvider.prototype.constructor = AbstractIbmUrlCodeDescriptionProvider;
  SqlCodeDescriptionProvider.prototype = Object.create(AbstractIbmUrlCodeDescriptionProvider.prototype);
  SqlCodeDescriptionProvider.prototype.constructor = SqlCodeDescriptionProvider;
  Db2Zos10CodeDescriptionProvider.prototype = Object.create(SqlCodeDescriptionProvider.prototype);
  Db2Zos10CodeDescriptionProvider.prototype.constructor = Db2Zos10CodeDescriptionProvider;
  Db2Zos11CodeDescriptionProvider.prototype = Object.create(SqlCodeDescriptionProvider.prototype);
  Db2Zos11CodeDescriptionProvider.prototype.constructor = Db2Zos11CodeDescriptionProvider;
  Db2Zos12CodeDescriptionProvider.prototype = Object.create(SqlCodeDescriptionProvider.prototype);
  Db2Zos12CodeDescriptionProvider.prototype.constructor = Db2Zos12CodeDescriptionProvider;
  MQ8CodeDescriptionProvider.prototype = Object.create(AbstractIbmUrlCodeDescriptionProvider.prototype);
  MQ8CodeDescriptionProvider.prototype.constructor = MQ8CodeDescriptionProvider;
  SinglePageCodeDescriptionProvider.prototype = Object.create(AbstractUrlCodeDescriptionProvider.prototype);
  SinglePageCodeDescriptionProvider.prototype.constructor = SinglePageCodeDescriptionProvider;
  HttpCodeDescriptionProvider.prototype = Object.create(SinglePageCodeDescriptionProvider.prototype);
  HttpCodeDescriptionProvider.prototype.constructor = HttpCodeDescriptionProvider;
  FtpCodeDescriptionProvider.prototype = Object.create(SinglePageCodeDescriptionProvider.prototype);
  FtpCodeDescriptionProvider.prototype.constructor = FtpCodeDescriptionProvider;
  SmtpCodeDescriptionProvider.prototype = Object.create(SinglePageCodeDescriptionProvider.prototype);
  SmtpCodeDescriptionProvider.prototype.constructor = SmtpCodeDescriptionProvider;
  SipCodeDescriptionProvider.prototype = Object.create(SinglePageCodeDescriptionProvider.prototype);
  SipCodeDescriptionProvider.prototype.constructor = SipCodeDescriptionProvider;
  function ApplicationSettings() {
    ApplicationSettings_instance = this;
    AbstractApplicationSettings.call(this);
    this.KEY_LAST_VERSION_0 = 'user.lastVersion';
    this.KEY_CURRENT_GROUP_NAME_0 = 'current.group.name';
    this.KEY_CURRENT_PREFIX_0 = 'current.prefix';
    this.KEY_CURRENT_SEPARATOR_0 = 'current.separator';
    this.KEY_CURRENT_POSTFIX_0 = 'current.postfix';
    this.KEY_LIST_PREFIXES_0 = 'list.prefixes';
    this.KEY_LIST_SEPARATORS_0 = 'list.separators';
    this.KEY_LIST_POSTFIXES_0 = 'list.postfixes';
    this.VAL_VERSION_0 = 1;
    this.VAL_DEFAULT_GROUP_NAME_0 = '';
    this.VAL_DEFAULT_PREFIX_8be2vx$ = '';
    this.VAL_DEFAULT_SEPARATOR_8be2vx$ = ', ';
    this.VAL_DEFAULT_POSTFIX_8be2vx$ = '';
    this.VAL_DEFAULT_LIST_PREFIXES_0 = '["","Today\'s order: "]';
    this.VAL_DEFAULT_LIST_SEPARATOR_0 = '[", "," : "]';
    this.VAL_DEFAULT_LIST_POSTFIXES_0 = '["","."]';
  }
  ApplicationSettings.prototype.isNewUser = function () {
    var tmp$, tmp$_0;
    return ((tmp$_0 = (tmp$ = this.get_0(this.KEY_LAST_VERSION_0)) != null ? toIntOrNull(tmp$) : null) != null ? tmp$_0 : 0) < 1;
  };
  ApplicationSettings.prototype.storeUserLastInfo = function () {
    this.set_0(this.KEY_LAST_VERSION_0, 1);
  };
  function ApplicationSettings$readArrayToMutableList$lambda(closure$array) {
    return function (it) {
      return closure$array[it];
    };
  }
  function ApplicationSettings$readArrayToMutableList$lambda_0(closure$handler) {
    return function (it) {
      return closure$handler(it);
    };
  }
  ApplicationSettings.prototype.readArrayToMutableList_0 = function (array, handler) {
    var tmp$;
    return toMutableList(map(map(asSequence(until(0, (tmp$ = array.length) != null ? tmp$ : 0)), ApplicationSettings$readArrayToMutableList$lambda(array)), ApplicationSettings$readArrayToMutableList$lambda_0(handler)));
  };
  function ApplicationSettings$readConfigFromArray$lambda(it) {
    return it.toString();
  }
  ApplicationSettings.prototype.readConfigFromArray_0 = function (key, defaultJson) {
    if (defaultJson === void 0)
      defaultJson = '[]';
    var tmp$;
    return this.readArrayToMutableList_0(JSON.parse((tmp$ = this.get_0(key)) != null ? tmp$ : defaultJson), ApplicationSettings$readConfigFromArray$lambda);
  };
  Object.defineProperty(ApplicationSettings.prototype, 'selectedGroupName', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.get_0(this.KEY_CURRENT_GROUP_NAME_0)) != null ? tmp$ : this.VAL_DEFAULT_GROUP_NAME_0;
    },
    set: function (value) {
      this.set_1(this.KEY_CURRENT_GROUP_NAME_0, value);
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'currentPrefix', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.get_0(this.KEY_CURRENT_PREFIX_0)) != null ? tmp$ : this.VAL_DEFAULT_PREFIX_8be2vx$;
    },
    set: function (value) {
      this.set_1(this.KEY_CURRENT_PREFIX_0, value);
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'currentSeparator', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.get_0(this.KEY_CURRENT_SEPARATOR_0)) != null ? tmp$ : this.VAL_DEFAULT_SEPARATOR_8be2vx$;
    },
    set: function (value) {
      this.set_1(this.KEY_CURRENT_SEPARATOR_0, value);
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'currentPostfix', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.get_0(this.KEY_CURRENT_POSTFIX_0)) != null ? tmp$ : this.VAL_DEFAULT_POSTFIX_8be2vx$;
    },
    set: function (value) {
      this.set_1(this.KEY_CURRENT_POSTFIX_0, value);
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'prefixes', {
    configurable: true,
    get: function () {
      return this.readConfigFromArray_0(this.KEY_LIST_PREFIXES_0, this.VAL_DEFAULT_LIST_PREFIXES_0);
    },
    set: function (value) {
      this.set_1(this.KEY_LIST_PREFIXES_0, JSON.stringify(value));
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'separators', {
    configurable: true,
    get: function () {
      return this.readConfigFromArray_0(this.KEY_LIST_SEPARATORS_0, this.VAL_DEFAULT_LIST_SEPARATOR_0);
    },
    set: function (value) {
      this.set_1(this.KEY_LIST_SEPARATORS_0, JSON.stringify(value));
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'postfixes', {
    configurable: true,
    get: function () {
      return this.readConfigFromArray_0(this.KEY_LIST_POSTFIXES_0, this.VAL_DEFAULT_LIST_POSTFIXES_0);
    },
    set: function (value) {
      this.set_1(this.KEY_LIST_POSTFIXES_0, JSON.stringify(value));
    }
  });
  ApplicationSettings.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ApplicationSettings',
    interfaces: [AbstractApplicationSettings]
  };
  var ApplicationSettings_instance = null;
  function ApplicationSettings_getInstance() {
    if (ApplicationSettings_instance === null) {
      new ApplicationSettings();
    }return ApplicationSettings_instance;
  }
  function DisplayContract() {
  }
  function DisplayContract$View() {
  }
  DisplayContract$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  function DisplayContract$Controller() {
  }
  DisplayContract$Controller.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Controller',
    interfaces: []
  };
  DisplayContract.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DisplayContract',
    interfaces: []
  };
  function main() {
    try {
      initErrorCodes();
    } catch (exception) {
      if (Kotlin.isType(exception, Exception)) {
        console.error(exception);
        window.alert('Unable to initialize ErrorCodesViewer: ' + toString(exception.message));
      } else
        throw exception;
    }
  }
  var codeDescriptionProviders;
  function initErrorCodes() {
    var $receiver = codeDescriptionProviders;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = checkCodeDescriptionProvider(element);
      addAll(destination, list);
    }
    var checkErrors = destination;
    if (!checkErrors.isEmpty()) {
      var tmp$_0;
      tmp$_0 = checkErrors.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        console.error(element_0);
      }
      throw RuntimeException_init('ErrorCodeViewer could not be initialized because of init check errors.');
    }new UiController(codeDescriptionProviders);
    ApplicationSettings_getInstance().storeUserLastInfo();
  }
  function checkCodeDescriptionProvider(codeDescriptionProvider) {
    if (contains(codeDescriptionProvider.id, '/'))
      return listOf_0("The ID '" + codeDescriptionProvider.id + "' contains a slash '/'. This is not allowed.");
    return emptyList();
  }
  function get$lambda($receiver) {
    return Unit;
  }
  function AbstractUrlCodeDescriptionProvider(id, product) {
    AbstractUrlCodeDescriptionProvider$Companion_getInstance();
    this.id_mjwnik$_0 = id;
    this.product_y3o8q2$_0 = product;
    this.codes_32kbi7$_0 = null;
    this.comparator_vztgfb$_0 = new Comparator(AbstractUrlCodeDescriptionProvider$comparator$lambda);
  }
  Object.defineProperty(AbstractUrlCodeDescriptionProvider.prototype, 'id', {
    get: function () {
      return this.id_mjwnik$_0;
    }
  });
  Object.defineProperty(AbstractUrlCodeDescriptionProvider.prototype, 'product', {
    get: function () {
      return this.product_y3o8q2$_0;
    }
  });
  function AbstractUrlCodeDescriptionProvider$Companion() {
    AbstractUrlCodeDescriptionProvider$Companion_instance = this;
    this.client_0 = HttpClient(js.Js);
  }
  AbstractUrlCodeDescriptionProvider$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AbstractUrlCodeDescriptionProvider$Companion_instance = null;
  function AbstractUrlCodeDescriptionProvider$Companion_getInstance() {
    if (AbstractUrlCodeDescriptionProvider$Companion_instance === null) {
      new AbstractUrlCodeDescriptionProvider$Companion();
    }return AbstractUrlCodeDescriptionProvider$Companion_instance;
  }
  function AbstractUrlCodeDescriptionProvider$loadLocationList$lambda(this$AbstractUrlCodeDescriptionProvider) {
    return function (it) {
      return this$AbstractUrlCodeDescriptionProvider.convertMatchToCodeDescriptionLocation_bl4kwi$(it);
    };
  }
  function Coroutine$loadLocationList($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$response = void 0;
  }
  Coroutine$loadLocationList.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadLocationList.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadLocationList.prototype.constructor = Coroutine$loadLocationList;
  Coroutine$loadLocationList.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.$this.codes_32kbi7$_0 == null) {
              var $receiver_0 = AbstractUrlCodeDescriptionProvider$Companion_getInstance().client_0;
              var url_0 = this.$this.indexUrl;
              var host_0;
              var body_0;
              host_0 = 'localhost';
              body_0 = utils.EmptyContent;
              var $receiver_1 = new HttpRequestBuilder_init();
              url($receiver_1, 'http', host_0, 0, '/');
              $receiver_1.method = HttpMethod.Companion.Get;
              $receiver_1.body = body_0;
              takeFrom($receiver_1.url, url_0);
              get$lambda($receiver_1);
              var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
              var tmp$_4, tmp$_5, tmp$_6;
              tmp$_4 = PrimitiveClasses$stringClass;
              if (equals(tmp$_4, getKClass(HttpStatement_init))) {
                this.result_0 = typeof (tmp$_5 = $this_0) === 'string' ? tmp$_5 : throwCCE();
                this.state_0 = 9;
                continue;
              } else {
                if (equals(tmp$_4, getKClass(HttpResponse))) {
                  this.state_0 = 7;
                  this.result_0 = $this_0.execute(this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                } else {
                  this.state_0 = 1;
                  this.result_0 = $this_0.executeUnsafe(this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                }
              }
            } else {
              this.state_0 = 10;
              continue;
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = new TypeInfo_init(PrimitiveClasses$stringClass, call.JsType, createKType(PrimitiveClasses$stringClass, [], false));
              } catch (_) {
                typeInfo$result_0 = new TypeInfo_init(PrimitiveClasses$stringClass, call.JsType);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_jo9acv$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = typeof (tmp$_7 = this.result_0) === 'string' ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 8;
            continue;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            this.result_0 = typeof (tmp$_6 = this.result_0) === 'string' ? tmp$_6 : throwCCE();
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.result_0;
            var siteContent = this.result_0;
            this.$this.codes_32kbi7$_0 = toList(map(this.$this.codeDescriptionRegex.findAll_905azu$(siteContent), AbstractUrlCodeDescriptionProvider$loadLocationList$lambda(this.$this)));
            this.state_0 = 10;
            continue;
          case 10:
            return ensureNotNull(this.$this.codes_32kbi7$_0);
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AbstractUrlCodeDescriptionProvider.prototype.loadLocationList = function (continuation_0, suspended) {
    var instance = new Coroutine$loadLocationList(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$loadCodeDescription_8witqk$($this, location_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$response = void 0;
    this.local$location = location_0;
  }
  Coroutine$loadCodeDescription_8witqk$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadCodeDescription_8witqk$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadCodeDescription_8witqk$.prototype.constructor = Coroutine$loadCodeDescription_8witqk$;
  Coroutine$loadCodeDescription_8witqk$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$location.url) != null) {
              var $receiver_0 = AbstractUrlCodeDescriptionProvider$Companion_getInstance().client_0;
              var host_0;
              var body_0;
              host_0 = 'localhost';
              body_0 = utils.EmptyContent;
              var $receiver_1 = new HttpRequestBuilder_init();
              url($receiver_1, 'http', host_0, 0, '/');
              $receiver_1.method = HttpMethod.Companion.Get;
              $receiver_1.body = body_0;
              takeFrom($receiver_1.url, tmp$);
              get$lambda($receiver_1);
              var $this_0 = new HttpStatement_init($receiver_1, $receiver_0);
              var tmp$_4, tmp$_5, tmp$_6;
              tmp$_4 = PrimitiveClasses$stringClass;
              if (equals(tmp$_4, getKClass(HttpStatement_init))) {
                this.result_0 = typeof (tmp$_5 = $this_0) === 'string' ? tmp$_5 : throwCCE();
                this.state_0 = 9;
                continue;
              } else {
                if (equals(tmp$_4, getKClass(HttpResponse))) {
                  this.state_0 = 7;
                  this.result_0 = $this_0.execute(this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                } else {
                  this.state_0 = 1;
                  this.result_0 = $this_0.executeUnsafe(this);
                  if (this.result_0 === COROUTINE_SUSPENDED)
                    return COROUTINE_SUSPENDED;
                  continue;
                }
              }
            } else {
              this.local$tmp$ = null;
              this.state_0 = 11;
              continue;
            }

          case 1:
            this.local$response = this.result_0;
            this.exceptionState_0 = 4;
            var tmp$_7;
            var tmp$_8 = this.local$response.call;
            var typeInfo$result_0;
            typeInfo$break: do {
              try {
                typeInfo$result_0 = new TypeInfo_init(PrimitiveClasses$stringClass, call.JsType, createKType(PrimitiveClasses$stringClass, [], false));
              } catch (_) {
                typeInfo$result_0 = new TypeInfo_init(PrimitiveClasses$stringClass, call.JsType);
                break typeInfo$break;
              }
            }
             while (false);
            this.state_0 = 2;
            this.result_0 = tmp$_8.receive_jo9acv$(typeInfo$result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.result_0 = typeof (tmp$_7 = this.result_0) === 'string' ? tmp$_7 : throwCCE();
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [3];
            this.state_0 = 5;
            continue;
          case 3:
            this.state_0 = 8;
            continue;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            complete(this.local$response);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          case 7:
            this.result_0 = typeof (tmp$_6 = this.result_0) === 'string' ? tmp$_6 : throwCCE();
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            this.result_0;
            this.state_0 = 10;
            this.result_0 = this.$this.convertCodeDescriptionContent_61zpoe$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            var siteContent = this.result_0;
            this.local$tmp$ = new CodeDescription(siteContent, new Date());
            this.state_0 = 11;
            continue;
          case 11:
            return this.local$tmp$;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 6) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AbstractUrlCodeDescriptionProvider.prototype.loadCodeDescription_8witqk$ = function (location_0, continuation_0, suspended) {
    var instance = new Coroutine$loadCodeDescription_8witqk$(this, location_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  AbstractUrlCodeDescriptionProvider.prototype.convertCodeDescriptionContent_61zpoe$ = function (downloadedContent, continuation) {
    return HtmlCleaner_getInstance().clean_61zpoe$(downloadedContent);
  };
  function Coroutine$getLocationByCode_61zpoe$($this, code_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$code = code_0;
  }
  Coroutine$getLocationByCode_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getLocationByCode_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getLocationByCode_61zpoe$.prototype.constructor = Coroutine$getLocationByCode_61zpoe$;
  Coroutine$getLocationByCode_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.loadLocationList(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0;
            var firstOrNull$result;
            firstOrNull$break: do {
              var tmp$;
              tmp$ = $receiver.iterator();
              while (tmp$.hasNext()) {
                var element = tmp$.next();
                if (equals(element.code, this.local$code)) {
                  firstOrNull$result = element;
                  break firstOrNull$break;
                }}
              firstOrNull$result = null;
            }
             while (false);
            return firstOrNull$result;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AbstractUrlCodeDescriptionProvider.prototype.getLocationByCode_61zpoe$ = function (code_0, continuation_0, suspended) {
    var instance = new Coroutine$getLocationByCode_61zpoe$(this, code_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Object.defineProperty(AbstractUrlCodeDescriptionProvider.prototype, 'comparator', {
    configurable: true,
    get: function () {
      return this.comparator_vztgfb$_0;
    }
  });
  function AbstractUrlCodeDescriptionProvider$comparator$lambda(a, b) {
    return get_CASE_INSENSITIVE_ORDER(kotlin_js_internal_StringCompanionObject).compare(a.code, b.code);
  }
  AbstractUrlCodeDescriptionProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractUrlCodeDescriptionProvider',
    interfaces: [CodeDescriptionProvider]
  };
  function CodeDescription(content, dataOfLoading) {
    if (dataOfLoading === void 0)
      dataOfLoading = new Date();
    this.content = content;
    this.dataOfLoading = dataOfLoading;
  }
  CodeDescription.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CodeDescription',
    interfaces: []
  };
  CodeDescription.prototype.component1 = function () {
    return this.content;
  };
  CodeDescription.prototype.component2 = function () {
    return this.dataOfLoading;
  };
  CodeDescription.prototype.copy_urj10$ = function (content, dataOfLoading) {
    return new CodeDescription(content === void 0 ? this.content : content, dataOfLoading === void 0 ? this.dataOfLoading : dataOfLoading);
  };
  CodeDescription.prototype.toString = function () {
    return 'CodeDescription(content=' + Kotlin.toString(this.content) + (', dataOfLoading=' + Kotlin.toString(this.dataOfLoading)) + ')';
  };
  CodeDescription.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    result = result * 31 + Kotlin.hashCode(this.dataOfLoading) | 0;
    return result;
  };
  CodeDescription.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.content, other.content) && Kotlin.equals(this.dataOfLoading, other.dataOfLoading)))));
  };
  function CodeDescriptionLocation(provider, code, summary, url, displayUrl, forceLoad, content) {
    if (summary === void 0)
      summary = null;
    if (displayUrl === void 0)
      displayUrl = url;
    if (forceLoad === void 0)
      forceLoad = false;
    if (content === void 0)
      content = null;
    this.provider = provider;
    this.code = code;
    this.summary = summary;
    this.url = url;
    this.displayUrl = displayUrl;
    this.forceLoad = forceLoad;
    this.content = content;
  }
  CodeDescriptionLocation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CodeDescriptionLocation',
    interfaces: []
  };
  CodeDescriptionLocation.prototype.component1 = function () {
    return this.provider;
  };
  CodeDescriptionLocation.prototype.component2 = function () {
    return this.code;
  };
  CodeDescriptionLocation.prototype.component3 = function () {
    return this.summary;
  };
  CodeDescriptionLocation.prototype.component4 = function () {
    return this.url;
  };
  CodeDescriptionLocation.prototype.component5 = function () {
    return this.displayUrl;
  };
  CodeDescriptionLocation.prototype.component6 = function () {
    return this.forceLoad;
  };
  CodeDescriptionLocation.prototype.component7 = function () {
    return this.content;
  };
  CodeDescriptionLocation.prototype.copy_xnc19s$ = function (provider, code, summary, url, displayUrl, forceLoad, content) {
    return new CodeDescriptionLocation(provider === void 0 ? this.provider : provider, code === void 0 ? this.code : code, summary === void 0 ? this.summary : summary, url === void 0 ? this.url : url, displayUrl === void 0 ? this.displayUrl : displayUrl, forceLoad === void 0 ? this.forceLoad : forceLoad, content === void 0 ? this.content : content);
  };
  CodeDescriptionLocation.prototype.toString = function () {
    return 'CodeDescriptionLocation(provider=' + Kotlin.toString(this.provider) + (', code=' + Kotlin.toString(this.code)) + (', summary=' + Kotlin.toString(this.summary)) + (', url=' + Kotlin.toString(this.url)) + (', displayUrl=' + Kotlin.toString(this.displayUrl)) + (', forceLoad=' + Kotlin.toString(this.forceLoad)) + (', content=' + Kotlin.toString(this.content)) + ')';
  };
  CodeDescriptionLocation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.provider) | 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.summary) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.displayUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.forceLoad) | 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  CodeDescriptionLocation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.provider, other.provider) && Kotlin.equals(this.code, other.code) && Kotlin.equals(this.summary, other.summary) && Kotlin.equals(this.url, other.url) && Kotlin.equals(this.displayUrl, other.displayUrl) && Kotlin.equals(this.forceLoad, other.forceLoad) && Kotlin.equals(this.content, other.content)))));
  };
  function CodeDescriptionProvider() {
  }
  Object.defineProperty(CodeDescriptionProvider.prototype, 'name', {
    configurable: true,
    get: function () {
      return this.product.vendor + ' ' + this.product.title + ' ' + this.product.version;
    }
  });
  function CodeDescriptionProvider$Product(vendor, title, version) {
    this.vendor = vendor;
    this.title = title;
    this.version = version;
  }
  CodeDescriptionProvider$Product.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Product',
    interfaces: []
  };
  CodeDescriptionProvider$Product.prototype.component1 = function () {
    return this.vendor;
  };
  CodeDescriptionProvider$Product.prototype.component2 = function () {
    return this.title;
  };
  CodeDescriptionProvider$Product.prototype.component3 = function () {
    return this.version;
  };
  CodeDescriptionProvider$Product.prototype.copy_6hosri$ = function (vendor, title, version) {
    return new CodeDescriptionProvider$Product(vendor === void 0 ? this.vendor : vendor, title === void 0 ? this.title : title, version === void 0 ? this.version : version);
  };
  CodeDescriptionProvider$Product.prototype.toString = function () {
    return 'Product(vendor=' + Kotlin.toString(this.vendor) + (', title=' + Kotlin.toString(this.title)) + (', version=' + Kotlin.toString(this.version)) + ')';
  };
  CodeDescriptionProvider$Product.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.vendor) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    return result;
  };
  CodeDescriptionProvider$Product.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.vendor, other.vendor) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.version, other.version)))));
  };
  CodeDescriptionProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CodeDescriptionProvider',
    interfaces: []
  };
  function HtmlCleaner() {
    HtmlCleaner_instance = this;
    this.CUSTOM_CLASS_0 = 'ec-custom';
    this.ALLOWED_TAGS_0 = listOf(['b', 'i', 'u', 'dd', 'dl', 'dt', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'abbr', 'code', 'em', 's', 'var', 'pre', 'hr', 'p', 'strike', 'strong', 'sub', 'sup', 'wbr', 'table', 'td', 'th', 'tr']);
    this.REGEX_TAG_0 = Regex_init('<(/)?([-a-zA-Z0-9]+)(?:\\s+[-a-zA-Z0-9]+=(?:"[^"]*"|\'[^\']*\'|\\S*))*>');
  }
  HtmlCleaner.prototype.clean_61zpoe$ = function (html) {
    return this.cleanHtmlElements_ig77u1$(this.stripTagsExceptAllowed_kwv3np$(html));
  };
  function HtmlCleaner$stripTagsExceptAllowed$lambda(closure$allowedTagNames, this$HtmlCleaner) {
    return function (it) {
      return !this$HtmlCleaner.containsAllowedTag_0(it, closure$allowedTagNames);
    };
  }
  HtmlCleaner.prototype.stripTagsExceptAllowed_kwv3np$ = function (html, allowedTagNames) {
    if (allowedTagNames === void 0)
      allowedTagNames = this.ALLOWED_TAGS_0;
    var changedHtml = {v: html};
    var tmp$;
    tmp$ = filter(this.REGEX_TAG_0.findAll_905azu$(html), HtmlCleaner$stripTagsExceptAllowed$lambda(allowedTagNames, this)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      changedHtml.v = replace(changedHtml.v, element.value, '');
    }
    return changedHtml.v;
  };
  function HtmlCleaner$cleanHtmlElements$lambda(it) {
    return it.groups.get_za3lpa$(1) == null;
  }
  function HtmlCleaner$cleanHtmlElements$lambda_0(closure$allowedTagNames, this$HtmlCleaner) {
    return function (it) {
      return this$HtmlCleaner.containsAllowedTag_0(it, closure$allowedTagNames);
    };
  }
  HtmlCleaner.prototype.cleanHtmlElements_ig77u1$ = function (html, allowedTagNames, classToAdd) {
    if (allowedTagNames === void 0)
      allowedTagNames = this.ALLOWED_TAGS_0;
    if (classToAdd === void 0)
      classToAdd = this.CUSTOM_CLASS_0;
    var changedHtml = {v: html};
    var tmp$;
    tmp$ = filter(filter(this.REGEX_TAG_0.findAll_905azu$(html), HtmlCleaner$cleanHtmlElements$lambda), HtmlCleaner$cleanHtmlElements$lambda_0(allowedTagNames, this)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var textToReplace = ensureNotNull(element.groups.get_za3lpa$(0)).value;
      var replacement = this.toCustomizedHtmlTag_0(ensureNotNull(element.groups.get_za3lpa$(2)).value, classToAdd);
      changedHtml.v = replace(changedHtml.v, textToReplace, replacement);
    }
    return changedHtml.v;
  };
  HtmlCleaner.prototype.toCustomizedHtmlTag_0 = function (tagName, classToAdd) {
    return '<' + tagName + ' class=' + '"' + classToAdd + '"' + '>';
  };
  HtmlCleaner.prototype.containsAllowedTag_0 = function ($receiver, allowedTagNames) {
    var tmp$;
    return ((tmp$ = $receiver.groups.get_za3lpa$(2)) != null ? tmp$.value : null) != null && allowedTagNames.contains_11rb$(ensureNotNull($receiver.groups.get_za3lpa$(2)).value);
  };
  HtmlCleaner.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlCleaner',
    interfaces: []
  };
  var HtmlCleaner_instance = null;
  function HtmlCleaner_getInstance() {
    if (HtmlCleaner_instance === null) {
      new HtmlCleaner();
    }return HtmlCleaner_instance;
  }
  function AbstractIbmUrlCodeDescriptionProvider(id, product, version, indexUrl, codeDescriptionRegex, detailBaseUrlString, contentUrlAddition) {
    AbstractIbmUrlCodeDescriptionProvider$Companion_getInstance();
    if (contentUrlAddition === void 0)
      contentUrlAddition = '?view=embed';
    AbstractUrlCodeDescriptionProvider.call(this, id, new CodeDescriptionProvider$Product('IBM', product, version));
    this.id_ghucf8$_0 = id;
    this.indexUrl_kta3pa$_0 = indexUrl;
    this.codeDescriptionRegex_mgfvfd$_0 = codeDescriptionRegex;
    this.detailBaseUrlString = detailBaseUrlString;
    this.contentUrlAddition = contentUrlAddition;
    this.comparator_wsjjr$_0 = new Comparator(AbstractIbmUrlCodeDescriptionProvider$comparator$lambda);
  }
  Object.defineProperty(AbstractIbmUrlCodeDescriptionProvider.prototype, 'id', {
    get: function () {
      return this.id_ghucf8$_0;
    }
  });
  Object.defineProperty(AbstractIbmUrlCodeDescriptionProvider.prototype, 'indexUrl', {
    get: function () {
      return this.indexUrl_kta3pa$_0;
    }
  });
  Object.defineProperty(AbstractIbmUrlCodeDescriptionProvider.prototype, 'codeDescriptionRegex', {
    get: function () {
      return this.codeDescriptionRegex_mgfvfd$_0;
    }
  });
  AbstractIbmUrlCodeDescriptionProvider.prototype.convertMatchToCodeDescriptionLocation_bl4kwi$ = function (matchResult) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var href = (tmp$_0 = (tmp$ = matchResult.groups.get_za3lpa$(1)) != null ? tmp$.value : null) != null ? tmp$_0 : 'NO HREF';
    var text = (tmp$_2 = (tmp$_1 = matchResult.groups.get_za3lpa$(2)) != null ? tmp$_1.value : null) != null ? tmp$_2 : 'NO TEXT';
    var summaryHtml = (tmp$_3 = matchResult.groups.get_za3lpa$(3)) != null ? tmp$_3.value : null;
    return new CodeDescriptionLocation(this, text, this.editSummary_pdl1vj$(summaryHtml), Url(this.detailBaseUrlString + href + this.contentUrlAddition), Url(this.detailBaseUrlString + href));
  };
  function AbstractIbmUrlCodeDescriptionProvider$editSummary$lambda(it) {
    return it.length > 3 ? capitalize(it) : it;
  }
  AbstractIbmUrlCodeDescriptionProvider.prototype.editSummary_pdl1vj$ = function (rawSummary) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var tmp$_5;
    if ((tmp$ = rawSummary != null ? Regex_init('<[^>]+>').replace_x2uqeu$(rawSummary, '') : null) != null) {
      var tmp$_6;
      tmp$_5 = trim(Kotlin.isCharSequence(tmp$_6 = tmp$) ? tmp$_6 : throwCCE()).toString();
    } else
      tmp$_5 = null;
    return (tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = tmp$_5) != null ? tmp$_0.toLowerCase() : null) != null ? splitToSequence(tmp$_1, Kotlin.charArrayOf(32)) : null) != null ? map(tmp$_2, AbstractIbmUrlCodeDescriptionProvider$editSummary$lambda) : null) != null ? joinToString(tmp$_3, ' ') : null) != null ? capitalize(tmp$_4) : null;
  };
  Object.defineProperty(AbstractIbmUrlCodeDescriptionProvider.prototype, 'comparator', {
    configurable: true,
    get: function () {
      return this.comparator_wsjjr$_0;
    }
  });
  function AbstractIbmUrlCodeDescriptionProvider$Companion() {
    AbstractIbmUrlCodeDescriptionProvider$Companion_instance = this;
    this.REGEX_UNDERSCORE_8be2vx$ = Regex_init('^MQRC_|_');
    this.REGEX_Q_8be2vx$ = Regex_init('\\b[q]\\b');
    this.REGEX_Q_MGR_8be2vx$ = Regex_init('\\bQ\\s+mgr\\b');
    this.REGEX_MSG_8be2vx$ = Regex_init('\\b[Mm]sg\\b');
    this.REGEX_SQL_8be2vx$ = Regex_init('\\b[Ss][Qq][Ll]\\b');
  }
  AbstractIbmUrlCodeDescriptionProvider$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AbstractIbmUrlCodeDescriptionProvider$Companion_instance = null;
  function AbstractIbmUrlCodeDescriptionProvider$Companion_getInstance() {
    if (AbstractIbmUrlCodeDescriptionProvider$Companion_instance === null) {
      new AbstractIbmUrlCodeDescriptionProvider$Companion();
    }return AbstractIbmUrlCodeDescriptionProvider$Companion_instance;
  }
  function AbstractIbmUrlCodeDescriptionProvider$comparator$lambda(a, b) {
    return Kotlin.primitiveCompareTo(abs(toInt(a.code)), abs(toInt(b.code)));
  }
  AbstractIbmUrlCodeDescriptionProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractIbmUrlCodeDescriptionProvider',
    interfaces: [AbstractUrlCodeDescriptionProvider]
  };
  function SqlCodeDescriptionProvider(id, product, version, indexUrl, codeDescriptionRegex, detailBaseUrlString, contentUrlAddition) {
    if (contentUrlAddition === void 0)
      contentUrlAddition = '?view=embed';
    AbstractIbmUrlCodeDescriptionProvider.call(this, id, product, version, indexUrl, codeDescriptionRegex, detailBaseUrlString, contentUrlAddition);
  }
  SqlCodeDescriptionProvider.prototype.editSummary_pdl1vj$ = function (rawSummary) {
    var tmp$;
    return (tmp$ = AbstractIbmUrlCodeDescriptionProvider.prototype.editSummary_pdl1vj$.call(this, rawSummary)) != null ? AbstractIbmUrlCodeDescriptionProvider$Companion_getInstance().REGEX_SQL_8be2vx$.replace_x2uqeu$(tmp$, 'SQL') : null;
  };
  SqlCodeDescriptionProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SqlCodeDescriptionProvider',
    interfaces: [AbstractIbmUrlCodeDescriptionProvider]
  };
  function Db2Zos10CodeDescriptionProvider() {
    SqlCodeDescriptionProvider.call(this, 'ibm-db2-for-zos-10', 'Db2 for z/OS', '10.0.0', Url('https://www.ibm.com/support/knowledgecenter/SSEPEK_10.0.0/codes/src/tpc/db2z_n.html?view=embed'), Regex_init('<li class="ulchildlink"[^>]*>.*?<a\\s[^>]*href="([^"]+)"[^>]*>(-?[0-9]+)<\/a>((?:[^<]|<(?!/li))*?)<\/li>'), 'https://www.ibm.com/support/knowledgecenter/SSEPEK_10.0.0/codes/src/tpc/');
  }
  Db2Zos10CodeDescriptionProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Db2Zos10CodeDescriptionProvider',
    interfaces: [SqlCodeDescriptionProvider]
  };
  function Db2Zos11CodeDescriptionProvider() {
    SqlCodeDescriptionProvider.call(this, 'ibm-db2-for-zos-11', 'Db2 for z/OS', '11.0.0', Url('https://www.ibm.com/support/knowledgecenter/SSEPEK_11.0.0/codes/src/tpc/db2z_n.html?view=embed'), Regex_init('<li class="ulchildlink"[^>]*>.*?<a\\s[^>]*href="([^"]+)"[^>]*>(-?[0-9]+)<\/a>((?:[^<]|<(?!/li))*?)<\/li>'), 'https://www.ibm.com/support/knowledgecenter/SSEPEK_11.0.0/codes/src/tpc/');
  }
  Db2Zos11CodeDescriptionProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Db2Zos11CodeDescriptionProvider',
    interfaces: [SqlCodeDescriptionProvider]
  };
  function Db2Zos12CodeDescriptionProvider() {
    SqlCodeDescriptionProvider.call(this, 'ibm-db2-for-zos-12', 'Db2 for z/OS', '12.0.0', Url('https://www.ibm.com/support/knowledgecenter/SSEPEK_12.0.0/codes/src/tpc/db2z_n.html?view=embed'), Regex_init('<li class="ulchildlink"[^>]*>.*?<a\\s[^>]*href="([^"]+)"[^>]*>(-?[0-9]+)<\/a>((?:[^<]|<(?!/li))*?)<\/li>'), 'https://www.ibm.com/support/knowledgecenter/SSEPEK_12.0.0/codes/src/tpc/');
  }
  Db2Zos12CodeDescriptionProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Db2Zos12CodeDescriptionProvider',
    interfaces: [SqlCodeDescriptionProvider]
  };
  function MQ8CodeDescriptionProvider() {
    AbstractIbmUrlCodeDescriptionProvider.call(this, 'ibm-mq-8', 'MQ', '8.0.0', Url('https://www.ibm.com/support/knowledgecenter/SSFKSJ_8.0.0/com.ibm.mq.tro.doc/q040710_.htm?view=embed'), Regex_init('<li class="ulchildlink"[^>]*>.*?<a\\s[^>]*href="([^"]+)"[^>]*>(-?[0-9]+)[^:]*: ([^<]*)<\/a>'), 'https://www.ibm.com/support/knowledgecenter/SSFKSJ_8.0.0/com.ibm.mq.tro.doc/');
  }
  MQ8CodeDescriptionProvider.prototype.editSummary_pdl1vj$ = function (rawSummary) {
    var tmp$, tmp$_0, tmp$_1;
    var tmp$_2;
    if ((tmp$_0 = (tmp$ = AbstractIbmUrlCodeDescriptionProvider.prototype.editSummary_pdl1vj$.call(this, rawSummary != null ? AbstractIbmUrlCodeDescriptionProvider$Companion_getInstance().REGEX_UNDERSCORE_8be2vx$.replace_x2uqeu$(rawSummary, ' ') : null)) != null ? AbstractIbmUrlCodeDescriptionProvider$Companion_getInstance().REGEX_Q_8be2vx$.replace_x2uqeu$(tmp$, 'Q') : null) != null) {
      var regex = AbstractIbmUrlCodeDescriptionProvider$Companion_getInstance().REGEX_Q_MGR_8be2vx$;
      var replacement = 'Q-Manager';
      tmp$_2 = regex.replace_x2uqeu$(tmp$_0, replacement);
    } else
      tmp$_2 = null;
    return (tmp$_1 = tmp$_2) != null ? AbstractIbmUrlCodeDescriptionProvider$Companion_getInstance().REGEX_MSG_8be2vx$.replace_x2uqeu$(tmp$_1, 'Message') : null;
  };
  MQ8CodeDescriptionProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MQ8CodeDescriptionProvider',
    interfaces: [AbstractIbmUrlCodeDescriptionProvider]
  };
  function SinglePageCodeDescriptionProvider(id, product, indexUrl, codeDescriptionRegex) {
    AbstractUrlCodeDescriptionProvider.call(this, id, product);
    this.indexUrl_d5al9k$_0 = indexUrl;
    this.codeDescriptionRegex_1w2zd9$_0 = codeDescriptionRegex;
    this.comparator_vuwrn3$_0 = new Comparator(SinglePageCodeDescriptionProvider$comparator$lambda);
  }
  Object.defineProperty(SinglePageCodeDescriptionProvider.prototype, 'indexUrl', {
    get: function () {
      return this.indexUrl_d5al9k$_0;
    }
  });
  Object.defineProperty(SinglePageCodeDescriptionProvider.prototype, 'codeDescriptionRegex', {
    get: function () {
      return this.codeDescriptionRegex_1w2zd9$_0;
    }
  });
  function SinglePageCodeDescriptionProvider$createContentString$lambda(it) {
    return it.first + '<\/dt><dd>' + it.second;
  }
  SinglePageCodeDescriptionProvider.prototype.createContentString_9ih0sy$ = function (pairs) {
    return '<dl><dt>' + joinToString_0(pairs, '<\/dd><dt>', void 0, void 0, void 0, void 0, SinglePageCodeDescriptionProvider$createContentString$lambda) + '<\/dd><\/dl>';
  };
  Object.defineProperty(SinglePageCodeDescriptionProvider.prototype, 'comparator', {
    configurable: true,
    get: function () {
      return this.comparator_vuwrn3$_0;
    }
  });
  function SinglePageCodeDescriptionProvider$comparator$lambda(a, b) {
    return Kotlin.primitiveCompareTo(abs(toInt(a.code)), abs(toInt(b.code)));
  }
  SinglePageCodeDescriptionProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SinglePageCodeDescriptionProvider',
    interfaces: [AbstractUrlCodeDescriptionProvider]
  };
  function HttpCodeDescriptionProvider() {
    HttpCodeDescriptionProvider$Companion_getInstance();
    SinglePageCodeDescriptionProvider.call(this, 'http', new CodeDescriptionProvider$Product('W3C', 'HTTP', ''), Url(HttpCodeDescriptionProvider$Companion_getInstance().INDEX_URL_0), Regex_init('<dt><a\\s[^>]*?href="([^"]+)"[^>]+><code>([0-9]+)\\s+([^<]+)<\/code><\/a>( \\()?(?:.|\\s)*?<dd>(.+?)<\/dd>'));
    this.contentExtractionRegex_0 = Regex_init('<article[^>]*>((?:.|\\s)*?)<h2 id="Specifications">Specifications<\/h2>');
  }
  function HttpCodeDescriptionProvider$Companion() {
    HttpCodeDescriptionProvider$Companion_instance = this;
    this.INDEX_URL_0 = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status';
  }
  HttpCodeDescriptionProvider$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HttpCodeDescriptionProvider$Companion_instance = null;
  function HttpCodeDescriptionProvider$Companion_getInstance() {
    if (HttpCodeDescriptionProvider$Companion_instance === null) {
      new HttpCodeDescriptionProvider$Companion();
    }return HttpCodeDescriptionProvider$Companion_instance;
  }
  HttpCodeDescriptionProvider.prototype.convertMatchToCodeDescriptionLocation_bl4kwi$ = function (matchResult) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var link = (tmp$_0 = (tmp$ = matchResult.groups.get_za3lpa$(1)) != null ? tmp$.value : null) != null ? tmp$_0 : 'NO HREF';
    var code = (tmp$_2 = (tmp$_1 = matchResult.groups.get_za3lpa$(2)) != null ? tmp$_1.value : null) != null ? tmp$_2 : 'NO CODE';
    var summary = (tmp$_4 = (tmp$_3 = matchResult.groups.get_za3lpa$(3)) != null ? tmp$_3.value : null) != null ? tmp$_4 : 'NO SUMMARY';
    var description = (tmp$_6 = (tmp$_5 = matchResult.groups.get_za3lpa$(5)) != null ? tmp$_5.value : null) != null ? tmp$_6 : 'NO DESCRIPTION';
    var linkAvailable = matchResult.groups.get_za3lpa$(4) == null;
    var url = linkAvailable ? Url('https://developer.mozilla.org' + link) : Url(HttpCodeDescriptionProvider$Companion_getInstance().INDEX_URL_0);
    return new CodeDescriptionLocation(this, code, summary, url, url, true, !linkAvailable ? new CodeDescription(this.createContentString_9ih0sy$([to('Code', code), to('Summary', summary), to('Description', description)])) : null);
  };
  HttpCodeDescriptionProvider.prototype.convertCodeDescriptionContent_61zpoe$ = function (downloadedContent, continuation) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.contentExtractionRegex_0.find_905azu$(downloadedContent)) != null ? tmp$.groups : null) != null ? tmp$_0.get_za3lpa$(1) : null) != null ? tmp$_1.value : null) != null ? tmp$_2 : downloadedContent;
    return SinglePageCodeDescriptionProvider.prototype.convertCodeDescriptionContent_61zpoe$.call(this, tmp$_3, continuation);
  };
  HttpCodeDescriptionProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HttpCodeDescriptionProvider',
    interfaces: [SinglePageCodeDescriptionProvider]
  };
  function FtpCodeDescriptionProvider() {
    FtpCodeDescriptionProvider$Companion_getInstance();
    SinglePageCodeDescriptionProvider.call(this, 'ftp', new CodeDescriptionProvider$Product('', 'FTP', ''), Url(FtpCodeDescriptionProvider$Companion_getInstance().INDEX_URL_0), Regex_init('<tr>\\s*<td>\\s*<code>(\\d+)<\/code>\\s*<\/td>\\s*<td>((.|\\s)*?)<\/td>\\s*<\/tr>'));
  }
  function FtpCodeDescriptionProvider$Companion() {
    FtpCodeDescriptionProvider$Companion_instance = this;
    this.DISPLAY_URL_0 = 'https://en.wikipedia.org/wiki/List_of_FTP_server_return_codes';
    this.INDEX_URL_0 = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/List_of_FTP_server_return_codes';
  }
  FtpCodeDescriptionProvider$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FtpCodeDescriptionProvider$Companion_instance = null;
  function FtpCodeDescriptionProvider$Companion_getInstance() {
    if (FtpCodeDescriptionProvider$Companion_instance === null) {
      new FtpCodeDescriptionProvider$Companion();
    }return FtpCodeDescriptionProvider$Companion_instance;
  }
  FtpCodeDescriptionProvider.prototype.convertMatchToCodeDescriptionLocation_bl4kwi$ = function (matchResult) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var code = (tmp$_0 = (tmp$ = matchResult.groups.get_za3lpa$(1)) != null ? tmp$.value : null) != null ? tmp$_0 : 'NO CODE';
    var description = (tmp$_2 = (tmp$_1 = matchResult.groups.get_za3lpa$(2)) != null ? tmp$_1.value : null) != null ? tmp$_2 : 'NO DESCRIPTION';
    tmp$_3 = new CodeDescription(this.createContentString_9ih0sy$([to('Code', code), to('Description', description)]));
    return new CodeDescriptionLocation(this, code, void 0, Url(FtpCodeDescriptionProvider$Companion_getInstance().DISPLAY_URL_0), void 0, void 0, tmp$_3);
  };
  FtpCodeDescriptionProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FtpCodeDescriptionProvider',
    interfaces: [SinglePageCodeDescriptionProvider]
  };
  function SmtpCodeDescriptionProvider() {
    SmtpCodeDescriptionProvider$Companion_getInstance();
    SinglePageCodeDescriptionProvider.call(this, 'smtp', new CodeDescriptionProvider$Product('', 'SMTP', ''), Url(SmtpCodeDescriptionProvider$Companion_getInstance().INDEX_URL_0), Regex_init('<p>\\s*<b>\\s*([0-9]+)<\/b>\\s*<i>\\s*((?:.|\\s)*?)<\/i>'));
  }
  function SmtpCodeDescriptionProvider$Companion() {
    SmtpCodeDescriptionProvider$Companion_instance = this;
    this.DISPLAY_URL_0 = 'https://en.wikipedia.org/wiki/List_of_SMTP_server_return_codes';
    this.INDEX_URL_0 = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/List_of_SMTP_server_return_codes';
  }
  SmtpCodeDescriptionProvider$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SmtpCodeDescriptionProvider$Companion_instance = null;
  function SmtpCodeDescriptionProvider$Companion_getInstance() {
    if (SmtpCodeDescriptionProvider$Companion_instance === null) {
      new SmtpCodeDescriptionProvider$Companion();
    }return SmtpCodeDescriptionProvider$Companion_instance;
  }
  SmtpCodeDescriptionProvider.prototype.convertMatchToCodeDescriptionLocation_bl4kwi$ = function (matchResult) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var code = (tmp$_0 = (tmp$ = matchResult.groups.get_za3lpa$(1)) != null ? tmp$.value : null) != null ? tmp$_0 : 'NO CODE';
    var description = (tmp$_2 = (tmp$_1 = matchResult.groups.get_za3lpa$(2)) != null ? tmp$_1.value : null) != null ? tmp$_2 : 'NO DESCRIPTION';
    tmp$_3 = new CodeDescription(this.createContentString_9ih0sy$([to('Code', code), to('Description', description)]));
    return new CodeDescriptionLocation(this, code, void 0, Url(SmtpCodeDescriptionProvider$Companion_getInstance().DISPLAY_URL_0), void 0, void 0, tmp$_3);
  };
  SmtpCodeDescriptionProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SmtpCodeDescriptionProvider',
    interfaces: [SinglePageCodeDescriptionProvider]
  };
  function SipCodeDescriptionProvider() {
    SipCodeDescriptionProvider$Companion_getInstance();
    SinglePageCodeDescriptionProvider.call(this, 'sip', new CodeDescriptionProvider$Product('', 'SIP', ''), Url(SipCodeDescriptionProvider$Companion_getInstance().INDEX_URL_0), Regex_init('<dt>\\s*<span[^>]*>\\s*<\/span>\\s*([0-9]+)\\s*([^<]*)<\/dt>\\s*<dd>((?:.|\\s)*?)<\/dd>'));
  }
  function SipCodeDescriptionProvider$Companion() {
    SipCodeDescriptionProvider$Companion_instance = this;
    this.DISPLAY_URL_0 = 'https://en.wikipedia.org/wiki/List_of_SIP_response_codes';
    this.INDEX_URL_0 = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/List_of_SIP_response_codes';
  }
  SipCodeDescriptionProvider$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SipCodeDescriptionProvider$Companion_instance = null;
  function SipCodeDescriptionProvider$Companion_getInstance() {
    if (SipCodeDescriptionProvider$Companion_instance === null) {
      new SipCodeDescriptionProvider$Companion();
    }return SipCodeDescriptionProvider$Companion_instance;
  }
  SipCodeDescriptionProvider.prototype.convertMatchToCodeDescriptionLocation_bl4kwi$ = function (matchResult) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var code = (tmp$_0 = (tmp$ = matchResult.groups.get_za3lpa$(1)) != null ? tmp$.value : null) != null ? tmp$_0 : 'NO CODE';
    var summary = (tmp$_2 = (tmp$_1 = matchResult.groups.get_za3lpa$(2)) != null ? tmp$_1.value : null) != null ? tmp$_2 : 'NO SUMMARY';
    var description = (tmp$_4 = (tmp$_3 = matchResult.groups.get_za3lpa$(3)) != null ? tmp$_3.value : null) != null ? tmp$_4 : 'NO DESCRIPTION';
    tmp$_5 = new CodeDescription(this.createContentString_9ih0sy$([to('Code', code), to('Summary', summary), to('Description', HtmlCleaner_getInstance().clean_61zpoe$(description))]));
    return new CodeDescriptionLocation(this, code, summary, Url(SipCodeDescriptionProvider$Companion_getInstance().DISPLAY_URL_0), void 0, void 0, tmp$_5);
  };
  SipCodeDescriptionProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SipCodeDescriptionProvider',
    interfaces: [SinglePageCodeDescriptionProvider]
  };
  function visit$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function span$lambda($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function span$lambda_0($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function button$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda($receiver) {
    return Unit;
  }
  function HtmlView(controller) {
    HtmlView$Companion_getInstance();
    this.controller_0 = controller;
    var id = HtmlView$Companion_getInstance().ID_LABEL_PRODUCTS;
    var getElementById_359kph$result;
    var tmp$;
    try {
      getElementById_359kph$result = Kotlin.isType(tmp$ = document.getElementById(id), HTMLElement) ? tmp$ : throwCCE();
    } catch (e) {
      if (Kotlin.isType(e, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id + "'.", e);
      } else
        throw e;
    }
    this.divLabelProducts_0 = getElementById_359kph$result;
    var id_0 = HtmlView$Companion_getInstance().ID_LIST_PRODUCTS;
    var getElementById_359kph$result_0;
    var tmp$_0;
    try {
      getElementById_359kph$result_0 = Kotlin.isType(tmp$_0 = document.getElementById(id_0), HTMLDivElement) ? tmp$_0 : throwCCE();
    } catch (e_0) {
      if (Kotlin.isType(e_0, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_0 + "'.", e_0);
      } else
        throw e_0;
    }
    this.divListProducts_0 = getElementById_359kph$result_0;
    var id_1 = HtmlView$Companion_getInstance().ID_LIST_CODES;
    var getElementById_359kph$result_1;
    var tmp$_1;
    try {
      getElementById_359kph$result_1 = Kotlin.isType(tmp$_1 = document.getElementById(id_1), HTMLDivElement) ? tmp$_1 : throwCCE();
    } catch (e_1) {
      if (Kotlin.isType(e_1, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_1 + "'.", e_1);
      } else
        throw e_1;
    }
    this.divListCodes_0 = getElementById_359kph$result_1;
    var id_2 = HtmlView$Companion_getInstance().ID_INPUT_SEARCH;
    var getElementById_359kph$result_2;
    var tmp$_2;
    try {
      getElementById_359kph$result_2 = Kotlin.isType(tmp$_2 = document.getElementById(id_2), HTMLInputElement) ? tmp$_2 : throwCCE();
    } catch (e_2) {
      if (Kotlin.isType(e_2, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_2 + "'.", e_2);
      } else
        throw e_2;
    }
    this.inputSearch_0 = getElementById_359kph$result_2;
    var id_3 = HtmlView$Companion_getInstance().ID_CONTENT_CODE;
    var getElementById_359kph$result_3;
    var tmp$_3;
    try {
      getElementById_359kph$result_3 = Kotlin.isType(tmp$_3 = document.getElementById(id_3), HTMLDivElement) ? tmp$_3 : throwCCE();
    } catch (e_3) {
      if (Kotlin.isType(e_3, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_3 + "'.", e_3);
      } else
        throw e_3;
    }
    this.divContentCode_0 = getElementById_359kph$result_3;
    var id_4 = HtmlView$Companion_getInstance().ID_CONTENT_FRAME;
    var getElementById_359kph$result_4;
    var tmp$_4;
    try {
      getElementById_359kph$result_4 = Kotlin.isType(tmp$_4 = document.getElementById(id_4), HTMLIFrameElement) ? tmp$_4 : throwCCE();
    } catch (e_4) {
      if (Kotlin.isType(e_4, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_4 + "'.", e_4);
      } else
        throw e_4;
    }
    this.divContentFrame_0 = getElementById_359kph$result_4;
    var id_5 = HtmlView$Companion_getInstance().ID_CONTENT_HEADER;
    var getElementById_359kph$result_5;
    var tmp$_5;
    try {
      getElementById_359kph$result_5 = Kotlin.isType(tmp$_5 = document.getElementById(id_5), HTMLHeadingElement) ? tmp$_5 : throwCCE();
    } catch (e_5) {
      if (Kotlin.isType(e_5, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_5 + "'.", e_5);
      } else
        throw e_5;
    }
    this.divContentHeader_0 = getElementById_359kph$result_5;
    var id_6 = HtmlView$Companion_getInstance().ID_CONTENT_SOURCE;
    var getElementById_359kph$result_6;
    var tmp$_6;
    try {
      getElementById_359kph$result_6 = Kotlin.isType(tmp$_6 = document.getElementById(id_6), HTMLAnchorElement) ? tmp$_6 : throwCCE();
    } catch (e_6) {
      if (Kotlin.isType(e_6, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_6 + "'.", e_6);
      } else
        throw e_6;
    }
    this.linkContentSource_0 = getElementById_359kph$result_6;
    this.stateContainer_0 = new StateContainer(new HtmlView$CodeLocationStateTransformer(this.controller_0), new HtmlView$CodeLocationStateComparator());
    this.inputSearch_0.addEventListener('input', HtmlView_init$lambda(this));
    var id_7 = HtmlView$Companion_getInstance().ID_CONTENT_SOURCE_COPY;
    var getElementById_359kph$result_7;
    var tmp$_7;
    try {
      getElementById_359kph$result_7 = Kotlin.isType(tmp$_7 = document.getElementById(id_7), HTMLElement) ? tmp$_7 : throwCCE();
    } catch (e_7) {
      if (Kotlin.isType(e_7, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id_7 + "'.", e_7);
      } else
        throw e_7;
    }
    getElementById_359kph$result_7.addEventListener('click', HtmlView_init$lambda_0(this));
    this.listProducts_0 = new ListMaintainer(this.divListProducts_0, HtmlView$listProducts$lambda(this), new Comparator(HtmlView$listProducts$lambda_0));
    this.listCodes_0 = new ListMaintainer(this.divListCodes_0, HtmlView$listCodes$lambda(this));
    this.currentLocation_0 = null;
  }
  HtmlView.prototype.tryToSelectPreselectedErrorCode = function () {
    var tmp$;
    if ((tmp$ = this.stateContainer_0.getSelectedState()) != null) {
      this.controller_0.selectCodeDescriptionLocation_puj7f4$(tmp$.providerId, tmp$.code);
    }};
  HtmlView.prototype.showCodeDescriptionProviders_up4njv$ = function (providers) {
    this.listProducts_0.showItems_rmogi$(providers);
  };
  HtmlView.prototype.selectCodeDescriptionProvider_ecttm8$ = function (provider) {
    this.inputSearch_0.value = '';
    this.divLabelProducts_0.innerText = provider.name;
    this.listProducts_0.toggleActive_11rb$(provider);
    this.stateContainer_0.cleanState();
  };
  HtmlView.prototype.showCodeDescriptionLocations_koqndk$ = function (locations) {
    if (locations != null) {
      this.listCodes_0.showItems_rmogi$(locations, first(locations).provider.comparator);
      this.inputSearch_0.focus();
    } else {
      this.listCodes_0.setLoading_8be2vx$();
    }
  };
  function HtmlView$showCodeDescription$lambda$lambda(closure$location) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$location.provider.product.vendor);
      return Unit;
    };
  }
  function HtmlView$showCodeDescription$lambda$lambda_0(closure$location) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$location.provider.product.title);
      return Unit;
    };
  }
  function HtmlView$showCodeDescription$lambda$lambda_1(closure$location) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$location.provider.product.version);
      return Unit;
    };
  }
  function HtmlView$showCodeDescription$lambda$lambda_2(closure$location) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$location.code);
      return Unit;
    };
  }
  function HtmlView$showCodeDescription$lambda(closure$location) {
    return function ($receiver) {
      var classes = 'ec-product-vendor';
      var block = HtmlView$showCodeDescription$lambda$lambda(closure$location);
      visitTag(new SPAN_init(attributesMapOf('class', classes), $receiver.consumer), visit$lambda(block));
      var classes_0 = 'ec-product-title';
      var block_0 = HtmlView$showCodeDescription$lambda$lambda_0(closure$location);
      visitTag(new SPAN_init(attributesMapOf('class', classes_0), $receiver.consumer), visit$lambda(block_0));
      var classes_1 = 'ec-product-version';
      var block_1 = HtmlView$showCodeDescription$lambda$lambda_1(closure$location);
      visitTag(new SPAN_init(attributesMapOf('class', classes_1), $receiver.consumer), visit$lambda(block_1));
      $receiver.unaryPlus_pdl1vz$(': ');
      var classes_2 = 'font-weight-bold';
      var block_2 = HtmlView$showCodeDescription$lambda$lambda_2(closure$location);
      visitTag(new SPAN_init(attributesMapOf('class', classes_2), $receiver.consumer), visit$lambda(block_2));
      return Unit;
    };
  }
  HtmlView.prototype.showCodeDescription_848m2z$ = function (location) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (location != null && !equals((tmp$ = this.currentLocation_0) != null ? tmp$.code : null, location.code)) {
      this.stateContainer_0.setState_etlf2c$(HtmlView$HtmlView$CodeLocationState_init_0(location));
    }var $receiver = downTo(this.divContentHeader_0.childElementCount, 0);
    var destination = ArrayList_init();
    var tmp$_4;
    tmp$_4 = $receiver.iterator();
    while (tmp$_4.hasNext()) {
      var element = tmp$_4.next();
      var tmp$_0_0;
      if ((tmp$_0_0 = this.divContentHeader_0.children[element]) != null) {
        destination.add_11rb$(tmp$_0_0);
      }}
    var tmp$_5;
    tmp$_5 = destination.iterator();
    while (tmp$_5.hasNext()) {
      var element_0 = tmp$_5.next();
      this.divContentHeader_0.removeChild(element_0);
    }
    if (location != null) {
      this.listCodes_0.toggleActive_11rb$(location);
      var tmp$_6 = this.divContentHeader_0;
      var $receiver_0 = get_create(document);
      tmp$_6.appendChild(visitTagAndFinalize(new SPAN_init(attributesMapOf('class', 'ec-code-header'), $receiver_0), $receiver_0, visitAndFinalize$lambda(HtmlView$showCodeDescription$lambda(location))));
      if (location.displayUrl != null) {
        this.linkContentSource_0.href = location.displayUrl.toString();
        this.linkContentSource_0.innerText = location.displayUrl.toString();
      } else {
        this.linkContentSource_0.href = '#';
        this.linkContentSource_0.innerText = '';
      }
      if (location.content != null) {
        this.divContentFrame_0.classList.toggle('d-none', true);
        this.divContentCode_0.classList.toggle('d-none', false);
        this.divContentFrame_0.src = '';
        this.divContentCode_0.innerHTML = (tmp$_1 = (tmp$_0 = location.content) != null ? tmp$_0.content : null) != null ? tmp$_1 : 'NO CONTENT';
      } else {
        this.divContentFrame_0.classList.toggle('d-none', false);
        this.divContentCode_0.classList.toggle('d-none', true);
        (tmp$_3 = (tmp$_2 = this.divContentFrame_0.contentWindow) != null ? tmp$_2.location : null) != null ? (tmp$_3.replace(toString(location.url)), Unit) : null;
        this.divContentCode_0.innerHTML = '';
      }
    } else {
      this.linkContentSource_0.href = '#';
      this.linkContentSource_0.innerText = '\xA0';
      this.divContentFrame_0.src = '';
      this.divContentCode_0.innerHTML = '';
    }
    this.currentLocation_0 = location;
  };
  function HtmlView$createProductLink$lambda$lambda(this$HtmlView, closure$provider) {
    return function (it) {
      it.stopPropagation();
      $(ensureNotNull(this$HtmlView.divListProducts_0.parentNode)).dropdown('toggle');
      this$HtmlView.controller_0.selectCodeDescriptionProvider_ecttm8$(closure$provider);
      return Unit;
    };
  }
  function HtmlView$createProductLink$lambda$lambda_0(closure$provider) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$provider.product.vendor);
      return Unit;
    };
  }
  function HtmlView$createProductLink$lambda$lambda_1(closure$provider) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$provider.product.title);
      return Unit;
    };
  }
  function HtmlView$createProductLink$lambda$lambda_2(closure$provider) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$provider.product.version);
      return Unit;
    };
  }
  function HtmlView$createProductLink$lambda(this$HtmlView, closure$provider) {
    return function ($receiver) {
      set_onClickFunction($receiver, HtmlView$createProductLink$lambda$lambda(this$HtmlView, closure$provider));
      var classes = 'ec-product-vendor';
      var block = HtmlView$createProductLink$lambda$lambda_0(closure$provider);
      visitTag(new SPAN_init(attributesMapOf('class', classes), $receiver.consumer), visit$lambda(block));
      var classes_0 = 'ec-product-title';
      var block_0 = HtmlView$createProductLink$lambda$lambda_1(closure$provider);
      visitTag(new SPAN_init(attributesMapOf('class', classes_0), $receiver.consumer), visit$lambda(block_0));
      var classes_1 = 'ec-product-version';
      var block_1 = HtmlView$createProductLink$lambda$lambda_2(closure$provider);
      visitTag(new SPAN_init(attributesMapOf('class', classes_1), $receiver.consumer), visit$lambda(block_1));
      return Unit;
    };
  }
  HtmlView.prototype.createProductLink_0 = function (provider) {
    var tmp$;
    tmp$ = get_create(document);
    var type = ButtonType.button;
    var classes = 'dropdown-item';
    var tmp$_0;
    return Kotlin.isType(tmp$_0 = visitTagAndFinalize(new BUTTON_init(attributesMapOf_0(['formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'type', type != null ? enumEncode(type) : null, 'class', classes]), tmp$), tmp$, visitAndFinalize$lambda_0(HtmlView$createProductLink$lambda(this, provider))), HTMLButtonElement_0) ? tmp$_0 : throwCCE();
  };
  function HtmlView$createCodeDescriptionLink$lambda$lambda(this$HtmlView, closure$location) {
    return function (it) {
      it.stopPropagation();
      this$HtmlView.controller_0.selectCodeDescriptionLocation_8witqk$(closure$location);
      return Unit;
    };
  }
  function HtmlView$createCodeDescriptionLink$lambda$lambda$lambda(closure$location) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$location.code);
      return Unit;
    };
  }
  function HtmlView$createCodeDescriptionLink$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it);
      return Unit;
    };
  }
  function HtmlView$createCodeDescriptionLink$lambda$lambda_0(closure$location) {
    return function ($receiver) {
      var tmp$;
      var block = HtmlView$createCodeDescriptionLink$lambda$lambda$lambda(closure$location);
      visitTag(new SPAN_init(attributesMapOf('class', 'ec-code'), $receiver.consumer), visit$lambda(block));
      if ((tmp$ = closure$location.summary) != null) {
        visitTag(new SPAN_init(attributesMapOf('class', 'ec-summary'), $receiver.consumer), visit$lambda(HtmlView$createCodeDescriptionLink$lambda$lambda$lambda$lambda(tmp$)));
      }return Unit;
    };
  }
  function HtmlView$createCodeDescriptionLink$lambda(this$HtmlView, closure$location) {
    return function ($receiver) {
      set_onClickFunction($receiver, HtmlView$createCodeDescriptionLink$lambda$lambda(this$HtmlView, closure$location));
      var classes = 'ec-location-link';
      var block = HtmlView$createCodeDescriptionLink$lambda$lambda_0(closure$location);
      visitTag(new DIV_init(attributesMapOf('class', classes), $receiver.consumer), visit$lambda_0(block));
      return Unit;
    };
  }
  HtmlView.prototype.createCodeDescriptionLink_0 = function (location) {
    var $receiver = get_create(document);
    var classes = 'list-group-item list-group-item-action';
    var tmp$;
    return Kotlin.isType(tmp$ = visitTagAndFinalize(new BUTTON_init(attributesMapOf_0(['formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'type', null != null ? enumEncode(null) : null, 'class', classes]), $receiver), $receiver, visitAndFinalize$lambda_0(HtmlView$createCodeDescriptionLink$lambda(this, location))), HTMLButtonElement_0) ? tmp$ : throwCCE();
  };
  function HtmlView$Companion() {
    HtmlView$Companion_instance = this;
    this.ID_LABEL_PRODUCTS = 'ec_label_products';
    this.ID_LIST_PRODUCTS = 'ec_list_products';
    this.ID_LIST_CODES = 'ec_list_codes';
    this.ID_INPUT_SEARCH = 'ec_input_search';
    this.ID_CONTENT_CODE = 'ec_content_code';
    this.ID_CONTENT_FRAME = 'ec_content_frame';
    this.ID_CONTENT_HEADER = 'ec_source_header';
    this.ID_CONTENT_SOURCE = 'ec_source_link';
    this.ID_CONTENT_SOURCE_COPY = 'ec_source_link_copy';
  }
  HtmlView$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HtmlView$Companion_instance = null;
  function HtmlView$Companion_getInstance() {
    if (HtmlView$Companion_instance === null) {
      new HtmlView$Companion();
    }return HtmlView$Companion_instance;
  }
  function HtmlView$CodeLocationState(providerId, code) {
    HtmlView$CodeLocationState$Companion_getInstance();
    this.providerId = providerId;
    this.code = code;
  }
  function HtmlView$CodeLocationState$Companion() {
    HtmlView$CodeLocationState$Companion_instance = this;
  }
  HtmlView$CodeLocationState$Companion.prototype.serializer = function () {
    return HtmlView$CodeLocationState$$serializer_getInstance();
  };
  HtmlView$CodeLocationState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HtmlView$CodeLocationState$Companion_instance = null;
  function HtmlView$CodeLocationState$Companion_getInstance() {
    if (HtmlView$CodeLocationState$Companion_instance === null) {
      new HtmlView$CodeLocationState$Companion();
    }return HtmlView$CodeLocationState$Companion_instance;
  }
  function HtmlView$CodeLocationState$$serializer() {
    this.descriptor_o7j4xb$_0 = new PluginGeneratedSerialDescriptor('org.olafneumann.errorcodes.html.HtmlView.CodeLocationState', this, 2);
    this.descriptor.addElement_ivxn3r$('providerId', false);
    this.descriptor.addElement_ivxn3r$('code', false);
    HtmlView$CodeLocationState$$serializer_instance = this;
  }
  Object.defineProperty(HtmlView$CodeLocationState$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_o7j4xb$_0;
    }
  });
  HtmlView$CodeLocationState$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.providerId);
    output.encodeStringElement_iij8qq$(this.descriptor, 1, value.code);
    output.endStructure_24f42q$(this.descriptor);
  };
  HtmlView$CodeLocationState$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeStringElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return HtmlView$HtmlView$CodeLocationState_init(bitMask0, local0, local1, null);
  };
  HtmlView$CodeLocationState$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.StringSerializer];
  };
  HtmlView$CodeLocationState$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var HtmlView$CodeLocationState$$serializer_instance = null;
  function HtmlView$CodeLocationState$$serializer_getInstance() {
    if (HtmlView$CodeLocationState$$serializer_instance === null) {
      new HtmlView$CodeLocationState$$serializer();
    }return HtmlView$CodeLocationState$$serializer_instance;
  }
  function HtmlView$HtmlView$CodeLocationState_init(seen1, providerId, code, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(HtmlView$CodeLocationState.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('providerId');
    else
      $this.providerId = providerId;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('code');
    else
      $this.code = code;
    return $this;
  }
  HtmlView$CodeLocationState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CodeLocationState',
    interfaces: [StateContainer$State]
  };
  function HtmlView$HtmlView$CodeLocationState_init_0(location, $this) {
    $this = $this || Object.create(HtmlView$CodeLocationState.prototype);
    HtmlView$CodeLocationState.call($this, location.provider.id, location.code);
    return $this;
  }
  HtmlView$CodeLocationState.prototype.component1 = function () {
    return this.providerId;
  };
  HtmlView$CodeLocationState.prototype.component2 = function () {
    return this.code;
  };
  HtmlView$CodeLocationState.prototype.copy_puj7f4$ = function (providerId, code) {
    return new HtmlView$CodeLocationState(providerId === void 0 ? this.providerId : providerId, code === void 0 ? this.code : code);
  };
  HtmlView$CodeLocationState.prototype.toString = function () {
    return 'CodeLocationState(providerId=' + Kotlin.toString(this.providerId) + (', code=' + Kotlin.toString(this.code)) + ')';
  };
  HtmlView$CodeLocationState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.providerId) | 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    return result;
  };
  HtmlView$CodeLocationState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.providerId, other.providerId) && Kotlin.equals(this.code, other.code)))));
  };
  function HtmlView$CodeLocationStateTransformer(controller) {
    this.controller_0 = controller;
  }
  HtmlView$CodeLocationStateTransformer.prototype.fromHash_61zpoe$ = function (hash) {
    var it = split(hash, [['/']], false, 2);
    return new HtmlView$CodeLocationState(it.get_za3lpa$(0), it.get_za3lpa$(1));
  };
  HtmlView$CodeLocationStateTransformer.prototype.toHash_11rb$ = function (state) {
    return new StateContainer$HashContainer(joinToString_1(listOf([state.providerId, state.code]), '/'), state.providerId + ': ' + state.code);
  };
  HtmlView$CodeLocationStateTransformer.prototype.handle_za3rmp$ = function (state) {
    var tmp$, tmp$_0;
    var dyn = state;
    this.controller_0.selectCodeDescriptionLocation_puj7f4$(typeof (tmp$ = dyn.providerId) === 'string' ? tmp$ : throwCCE(), typeof (tmp$_0 = dyn.code) === 'string' ? tmp$_0 : throwCCE());
  };
  HtmlView$CodeLocationStateTransformer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CodeLocationStateTransformer',
    interfaces: [StateContainer$StateHandler]
  };
  function HtmlView$CodeLocationStateComparator() {
  }
  HtmlView$CodeLocationStateComparator.prototype.compare = function (a, b) {
    var tmp$, tmp$_0;
    var da = a;
    var db = b;
    return Kotlin.compareTo(typeof (tmp$ = da.code) === 'string' ? tmp$ : throwCCE(), typeof (tmp$_0 = db.code) === 'string' ? tmp$_0 : throwCCE());
  };
  HtmlView$CodeLocationStateComparator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CodeLocationStateComparator',
    interfaces: [Comparator]
  };
  function HtmlView_init$lambda$lambda(closure$lowerCaseFilter) {
    return function (it) {
      return contains(it.code.toLowerCase(), closure$lowerCaseFilter);
    };
  }
  function HtmlView_init$lambda(this$HtmlView) {
    return function (event) {
      event.stopPropagation();
      var lowerCaseFilter = this$HtmlView.inputSearch_0.value.toLowerCase();
      this$HtmlView.listCodes_0.filter_ioxh9z$(HtmlView_init$lambda$lambda(lowerCaseFilter));
      return Unit;
    };
  }
  function HtmlView_init$lambda_0(this$HtmlView) {
    return function (event) {
      event.stopPropagation();
      navigator.clipboard.writeText(this$HtmlView.linkContentSource_0.href);
      return Unit;
    };
  }
  function HtmlView$listProducts$lambda(this$HtmlView) {
    return function (it) {
      return this$HtmlView.createProductLink_0(it);
    };
  }
  function HtmlView$listProducts$lambda_0(a, b) {
    return get_CASE_INSENSITIVE_ORDER(kotlin_js_internal_StringCompanionObject).compare(a.name, b.name);
  }
  function HtmlView$listCodes$lambda(this$HtmlView) {
    return function (it) {
      return this$HtmlView.createCodeDescriptionLink_0(it);
    };
  }
  HtmlView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlView',
    interfaces: [DisplayContract$View]
  };
  function visit$lambda_1(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function span$lambda_1($receiver) {
    return Unit;
  }
  function visit$lambda_2(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda_0($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda_1(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda_1($receiver) {
    return Unit;
  }
  function ListMaintainer(parent, elementCreator, comparator) {
    if (comparator === void 0)
      comparator = new Comparator(ListMaintainer_init$lambda);
    this.parent_0 = parent;
    this.elementCreator_0 = elementCreator;
    this.comparator = comparator;
    this.elements_0 = emptyMap();
  }
  ListMaintainer.prototype.showItems_rmogi$ = function (items, comparator) {
    if (comparator === void 0)
      comparator = this.comparator;
    this.comparator = comparator;
    this.removeChildren_0(this.parent_0);
    var $receiver = reversed(sortedWith(items, comparator));
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, this.elementCreator_0(item)));
    }
    this.elements_0 = toMap(destination);
    var tmp$_0;
    tmp$_0 = this.elements_0.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      this.parent_0.prepend(element.value);
    }
  };
  ListMaintainer.prototype.setLoading_8be2vx$ = function () {
    this.removeChildren_0(this.parent_0);
    this.parent_0.appendChild(this.createLoader_0());
  };
  ListMaintainer.prototype.filter_ioxh9z$ = function (filter) {
    var tmp$;
    tmp$ = this.elements_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.value.classList.toggle('d-none', !filter(element.key));
    }
  };
  function ListMaintainer$createLoader$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Loading...');
    return Unit;
  }
  function ListMaintainer$createLoader$lambda$lambda($receiver) {
    visitTag(new SPAN_init(attributesMapOf('class', 'sr-only'), $receiver.consumer), visit$lambda_1(ListMaintainer$createLoader$lambda$lambda$lambda));
    return Unit;
  }
  function ListMaintainer$createLoader$lambda($receiver) {
    visitTag(new DIV_init(attributesMapOf('class', 'spinner-grow'), $receiver.consumer), visit$lambda_2(ListMaintainer$createLoader$lambda$lambda));
    return Unit;
  }
  ListMaintainer.prototype.createLoader_0 = function () {
    var $receiver = get_create(document);
    return visitTagAndFinalize(new DIV_init(attributesMapOf('class', 'd-flex justify-content-center my-5'), $receiver), $receiver, visitAndFinalize$lambda_1(ListMaintainer$createLoader$lambda));
  };
  ListMaintainer.prototype.removeChildren_0 = function ($receiver) {
    var $receiver_0 = downTo($receiver.childElementCount, 0);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if ((tmp$_0 = $receiver.children[element]) != null) {
        destination.add_11rb$(tmp$_0);
      }}
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      $receiver.removeChild(element_0);
    }
  };
  ListMaintainer.prototype.toggleActive_11rb$ = function (item) {
    var tmp$;
    tmp$ = this.elements_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.value.classList.toggle('active', item != null && equals(element.key, item));
    }
  };
  function ListMaintainer_init$lambda(a, b) {
    return get_CASE_INSENSITIVE_ORDER(kotlin_js_internal_StringCompanionObject).compare(toString(a), toString(b));
  }
  ListMaintainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListMaintainer',
    interfaces: []
  };
  function AbstractApplicationSettings() {
    AbstractApplicationSettings$Companion_getInstance();
    this.intermediate_0 = LinkedHashMap_init();
    if (!this.hasUserConsent) {
      this.loadIntermediateFromLocalStorage_0();
      localStorage.clear();
    }}
  function AbstractApplicationSettings$Companion() {
    AbstractApplicationSettings$Companion_instance = this;
    this.KEY_CONSENT_0 = 'consent';
  }
  AbstractApplicationSettings$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AbstractApplicationSettings$Companion_instance = null;
  function AbstractApplicationSettings$Companion_getInstance() {
    if (AbstractApplicationSettings$Companion_instance === null) {
      new AbstractApplicationSettings$Companion();
    }return AbstractApplicationSettings$Companion_instance;
  }
  AbstractApplicationSettings.prototype.persistIntermediate_0 = function () {
    var tmp$;
    tmp$ = this.intermediate_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.set_1(element.key, element.value);
    }
    this.intermediate_0.clear();
  };
  AbstractApplicationSettings.prototype.loadIntermediateFromLocalStorage_0 = function () {
    var tmp$, tmp$_0;
    tmp$ = localStorage.length;
    for (var i = 0; i < tmp$; i++) {
      if ((tmp$_0 = localStorage.key(i)) != null) {
        var tmp$_1;
        if ((tmp$_1 = localStorage.getItem(tmp$_0)) != null) {
          this.intermediate_0.put_xwzc9p$(tmp$_0, tmp$_1);
        }}}
  };
  AbstractApplicationSettings.prototype.get_0 = function (key) {
    var tmp$;
    return (tmp$ = this.intermediate_0.get_11rb$(key)) != null ? tmp$ : localStorage.getItem(key);
  };
  AbstractApplicationSettings.prototype.set_1 = function (key, value) {
    if (this.hasUserConsent) {
      localStorage.setItem(key, value);
    } else {
      this.intermediate_0.put_xwzc9p$(key, value);
    }
  };
  function AbstractApplicationSettings$listKeys$lambda(it) {
    return localStorage.key(it);
  }
  AbstractApplicationSettings.prototype.listKeys_0 = function () {
    if (this.hasUserConsent) {
      return mapNotNull(asSequence(downTo(localStorage.length, 0)), AbstractApplicationSettings$listKeys$lambda);
    } else {
      return asSequence(this.intermediate_0.keys);
    }
  };
  AbstractApplicationSettings.prototype.set_0 = function (key, value) {
    this.set_1(key, value.toString());
  };
  AbstractApplicationSettings.prototype.set_2 = function (key, value) {
    this.set_1(key, value.toString());
  };
  AbstractApplicationSettings.prototype.set_3 = function (key, value) {
    this.set_1(key, this.toJSON_0(value));
  };
  AbstractApplicationSettings.prototype.getAny_0 = function (key) {
    var tmp$;
    return (tmp$ = this.get_0(key)) != null ? this.toAny_0(tmp$) : null;
  };
  AbstractApplicationSettings.prototype.toJSON_0 = function ($receiver) {
    return JSON.stringify($receiver);
  };
  AbstractApplicationSettings.prototype.toAny_0 = function ($receiver) {
    return JSON.parse($receiver);
  };
  Object.defineProperty(AbstractApplicationSettings.prototype, 'hasUserConsent', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.get_0(AbstractApplicationSettings$Companion_getInstance().KEY_CONSENT_0)) != null ? toBoolean(tmp$) : null) != null ? tmp$_0 : false;
    },
    set: function (value) {
      this.set_2(AbstractApplicationSettings$Companion_getInstance().KEY_CONSENT_0, value);
      if (value) {
        this.persistIntermediate_0();
      } else {
        this.loadIntermediateFromLocalStorage_0();
      }
    }
  });
  AbstractApplicationSettings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractApplicationSettings',
    interfaces: []
  };
  function CookieBanner() {
    CookieBanner_instance = this;
    this.ID_DIV_COOKIE_0 = 'ck_container_cookie';
    this.ID_BTN_ACCEPT_0 = 'ck_btn_accept';
    this.ID_BTN_REJECT_0 = 'ck_btn_reject';
    var id = this.ID_DIV_COOKIE_0;
    var getElementById_359kph$result;
    var tmp$;
    try {
      getElementById_359kph$result = Kotlin.isType(tmp$ = document.getElementById(id), HTMLDivElement) ? tmp$ : throwCCE();
    } catch (e) {
      if (Kotlin.isType(e, ClassCastException)) {
        throw new RuntimeException_init_0("Unable to find element with id '" + id + "'.", e);
      } else
        throw e;
    }
    this.ctnCookie_0 = getElementById_359kph$result;
  }
  function CookieBanner$initialize$lambda(this$CookieBanner) {
    return function (it) {
      ApplicationSettings_getInstance().hasUserConsent = true;
      this$CookieBanner.hideBanner_0();
      return Unit;
    };
  }
  function CookieBanner$initialize$lambda_0(this$CookieBanner) {
    return function (it) {
      this$CookieBanner.hideBanner_0();
      return Unit;
    };
  }
  CookieBanner.prototype.initialize = function () {
    if (ApplicationSettings_getInstance().hasUserConsent) {
      this.hideBanner_0();
    } else {
      var id = this.ID_BTN_ACCEPT_0;
      var getElementById_359kph$result;
      var tmp$;
      try {
        getElementById_359kph$result = Kotlin.isType(tmp$ = document.getElementById(id), HTMLButtonElement) ? tmp$ : throwCCE();
      } catch (e) {
        if (Kotlin.isType(e, ClassCastException)) {
          throw new RuntimeException_init_0("Unable to find element with id '" + id + "'.", e);
        } else
          throw e;
      }
      var btnAccept = getElementById_359kph$result;
      var id_0 = this.ID_BTN_REJECT_0;
      var getElementById_359kph$result_0;
      var tmp$_0;
      try {
        getElementById_359kph$result_0 = Kotlin.isType(tmp$_0 = document.getElementById(id_0), HTMLButtonElement) ? tmp$_0 : throwCCE();
      } catch (e_0) {
        if (Kotlin.isType(e_0, ClassCastException)) {
          throw new RuntimeException_init_0("Unable to find element with id '" + id_0 + "'.", e_0);
        } else
          throw e_0;
      }
      var btnReject = getElementById_359kph$result_0;
      btnAccept.onclick = CookieBanner$initialize$lambda(this);
      btnReject.onclick = CookieBanner$initialize$lambda_0(this);
    }
  };
  CookieBanner.prototype.hideBanner_0 = function () {
    var tmp$;
    (tmp$ = this.ctnCookie_0.parentNode) != null ? tmp$.removeChild(this.ctnCookie_0) : null;
  };
  CookieBanner.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CookieBanner',
    interfaces: []
  };
  var CookieBanner_instance = null;
  function CookieBanner_getInstance() {
    if (CookieBanner_instance === null) {
      new CookieBanner();
    }return CookieBanner_instance;
  }
  function HtmlHelper() {
    HtmlHelper_instance = this;
  }
  HtmlHelper.prototype.getElementById_359kph$ = defineInlineFunction('error-codes-viewer.org.olafneumann.errorcodes.html.browser.HtmlHelper.getElementById_359kph$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    var RuntimeException_init = Kotlin.kotlin.RuntimeException;
    var ClassCastException = Kotlin.kotlin.ClassCastException;
    return function (T_0, isT, id) {
      var tmp$;
      try {
        return isT(tmp$ = document.getElementById(id)) ? tmp$ : throwCCE();
      } catch (e) {
        if (Kotlin.isType(e, ClassCastException)) {
          throw new RuntimeException_init("Unable to find element with id '" + id + "'.", e);
        } else
          throw e;
      }
    };
  }));
  HtmlHelper.prototype.getElementsByClassName_359kph$ = defineInlineFunction('error-codes-viewer.org.olafneumann.errorcodes.html.browser.HtmlHelper.getElementsByClassName_359kph$', wrapFunction(function () {
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
    var throwCCE = Kotlin.throwCCE;
    var RuntimeException_init = Kotlin.kotlin.RuntimeException;
    var ClassCastException = Kotlin.kotlin.ClassCastException;
    var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    return function (T_0, isT, className) {
      try {
        var collection = document.getElementsByClassName(className);
        var $receiver = until(0, collection.length);
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var item = tmp$.next();
          var tmp$_0;
          destination.add_11rb$(isT(tmp$_0 = collection[item]) ? tmp$_0 : throwCCE());
        }
        return destination;
      } catch (e) {
        if (Kotlin.isType(e, ClassCastException)) {
          throw new RuntimeException_init("Unable to find elements with class name '" + className + "'.", e);
        } else
          throw e;
      }
    };
  }));
  HtmlHelper.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlHelper',
    interfaces: []
  };
  var HtmlHelper_instance = null;
  function HtmlHelper_getInstance() {
    if (HtmlHelper_instance === null) {
      new HtmlHelper();
    }return HtmlHelper_instance;
  }
  function StateContainer(transformer, comparator) {
    StateContainer$Companion_getInstance();
    if (comparator === void 0)
      comparator = new Comparator(StateContainer_init$lambda);
    this.transformer_0 = transformer;
    this.comparator_0 = comparator;
    window.addEventListener(StateContainer$Companion_getInstance().EVENT_POPSTATE_0, StateContainer_init$lambda_0(this));
  }
  StateContainer.prototype.setState_etlf2c$ = function (state) {
    var tmp$;
    var hash = this.transformer_0.toHash_11rb$(state);
    if (((tmp$ = window.history.state) != null ? this.comparator_0.compare(tmp$, state) : null) !== 0) {
      window.history.pushState(state, hash.display, '#' + hash.hash);
    }};
  StateContainer.prototype.cleanState = function () {
    window.history.pushState(null, document.title, window.location.pathname);
  };
  StateContainer.prototype.getSelectedState = function () {
    var url = new URL(document.URL);
    if (url.hash.length > 1) {
      var hash = url.hash.substring(1);
      return this.transformer_0.fromHash_61zpoe$(hash);
    }return null;
  };
  StateContainer.prototype.handle_0 = function (event) {
    if (event.state == null) {
      console.log('State popped with no state attached.');
      return;
    }try {
      this.transformer_0.handle_za3rmp$(ensureNotNull(event.state));
    } catch (e) {
      if (Kotlin.isType(e, ClassCastException)) {
        console.log(e);
      } else
        throw e;
    }
  };
  function StateContainer$Companion() {
    StateContainer$Companion_instance = this;
    this.EVENT_POPSTATE_0 = 'popstate';
  }
  StateContainer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var StateContainer$Companion_instance = null;
  function StateContainer$Companion_getInstance() {
    if (StateContainer$Companion_instance === null) {
      new StateContainer$Companion();
    }return StateContainer$Companion_instance;
  }
  function StateContainer$State() {
  }
  StateContainer$State.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'State',
    interfaces: []
  };
  function StateContainer$StateHandler() {
  }
  StateContainer$StateHandler.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StateHandler',
    interfaces: []
  };
  function StateContainer$HashContainer(hash, display) {
    this.hash = hash;
    this.display = display;
  }
  StateContainer$HashContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HashContainer',
    interfaces: []
  };
  StateContainer$HashContainer.prototype.component1 = function () {
    return this.hash;
  };
  StateContainer$HashContainer.prototype.component2 = function () {
    return this.display;
  };
  StateContainer$HashContainer.prototype.copy_puj7f4$ = function (hash, display) {
    return new StateContainer$HashContainer(hash === void 0 ? this.hash : hash, display === void 0 ? this.display : display);
  };
  StateContainer$HashContainer.prototype.toString = function () {
    return 'HashContainer(hash=' + Kotlin.toString(this.hash) + (', display=' + Kotlin.toString(this.display)) + ')';
  };
  StateContainer$HashContainer.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.hash) | 0;
    result = result * 31 + Kotlin.hashCode(this.display) | 0;
    return result;
  };
  StateContainer$HashContainer.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.hash, other.hash) && Kotlin.equals(this.display, other.display)))));
  };
  function StateContainer_init$lambda(f, f_0) {
    return 1;
  }
  function StateContainer_init$lambda_0(this$StateContainer) {
    return function (it) {
      if (Kotlin.isType(it, PopStateEvent)) {
        this$StateContainer.handle_0(it);
      }return Unit;
    };
  }
  StateContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StateContainer',
    interfaces: []
  };
  function UiController(codeDescriptionProviders) {
    this.codeDescriptionProviders_0 = codeDescriptionProviders;
    this.view_0 = new HtmlView(this);
    this.selectedCodeDescriptionProvider_0 = first(this.codeDescriptionProviders_0);
    this.view_0.showCodeDescriptionProviders_up4njv$(this.codeDescriptionProviders_0);
    this.selectCodeDescriptionProvider_ecttm8$(this.selectedCodeDescriptionProvider_0);
    this.view_0.tryToSelectPreselectedErrorCode();
  }
  function UiController$selectCodeDescriptionProvider$lambda() {
    return Unit;
  }
  UiController.prototype.selectCodeDescriptionProvider_ecttm8$ = function (provider) {
    this.selectCodeDescriptionProvider_0(provider, UiController$selectCodeDescriptionProvider$lambda);
  };
  function Coroutine$UiController$selectCodeDescriptionProvider$lambda(this$UiController_0, closure$andThen_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$UiController = this$UiController_0;
    this.local$closure$andThen = closure$andThen_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$UiController$selectCodeDescriptionProvider$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$UiController$selectCodeDescriptionProvider$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$UiController$selectCodeDescriptionProvider$lambda.prototype.constructor = Coroutine$UiController$selectCodeDescriptionProvider$lambda;
  Coroutine$UiController$selectCodeDescriptionProvider$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$UiController.view_0;
            this.state_0 = 2;
            this.result_0 = this.local$this$UiController.selectedCodeDescriptionProvider_0.loadLocationList(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$.showCodeDescriptionLocations_koqndk$(this.result_0);
            return this.local$closure$andThen();
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function UiController$selectCodeDescriptionProvider$lambda_0(this$UiController_0, closure$andThen_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$UiController$selectCodeDescriptionProvider$lambda(this$UiController_0, closure$andThen_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  UiController.prototype.selectCodeDescriptionProvider_0 = function (provider, andThen) {
    this.selectedCodeDescriptionProvider_0 = provider;
    this.view_0.selectCodeDescriptionProvider_ecttm8$(this.selectedCodeDescriptionProvider_0);
    this.view_0.showCodeDescription_848m2z$(null);
    this.view_0.showCodeDescriptionLocations_koqndk$(null);
    launch(coroutines.GlobalScope, void 0, void 0, UiController$selectCodeDescriptionProvider$lambda_0(this, andThen));
  };
  function Coroutine$UiController$selectCodeDescriptionLocation$lambda(closure$location_0, this$UiController_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$location = closure$location_0;
    this.local$this$UiController = this$UiController_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$UiController$selectCodeDescriptionLocation$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$UiController$selectCodeDescriptionLocation$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$UiController$selectCodeDescriptionLocation$lambda.prototype.constructor = Coroutine$UiController$selectCodeDescriptionLocation$lambda;
  Coroutine$UiController$selectCodeDescriptionLocation$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$closure$location.forceLoad && this.local$closure$location.content == null) {
              this.local$tmp$ = this.local$closure$location;
              this.state_0 = 2;
              this.result_0 = this.local$closure$location.provider.loadCodeDescription_8witqk$(this.local$closure$location, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            } else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$.content = this.result_0;
            this.state_0 = 3;
            continue;
          case 3:
            return this.local$this$UiController.view_0.showCodeDescription_848m2z$(this.local$closure$location), Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function UiController$selectCodeDescriptionLocation$lambda(closure$location_0, this$UiController_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$UiController$selectCodeDescriptionLocation$lambda(closure$location_0, this$UiController_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  UiController.prototype.selectCodeDescriptionLocation_8witqk$ = function (location) {
    launch(coroutines.GlobalScope, void 0, void 0, UiController$selectCodeDescriptionLocation$lambda(location, this));
  };
  function UiController$selectCodeDescriptionLocation$lambda$lambda(closure$codeDescriptionProviderId, closure$code, this$UiController) {
    return function () {
      this$UiController.selectCodeDescriptionLocation_puj7f4$(closure$codeDescriptionProviderId, closure$code);
      return Unit;
    };
  }
  function Coroutine$UiController$selectCodeDescriptionLocation$lambda_0(this$UiController_0, closure$code_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$UiController = this$UiController_0;
    this.local$closure$code = closure$code_0;
  }
  Coroutine$UiController$selectCodeDescriptionLocation$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$UiController$selectCodeDescriptionLocation$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$UiController$selectCodeDescriptionLocation$lambda_0.prototype.constructor = Coroutine$UiController$selectCodeDescriptionLocation$lambda_0;
  Coroutine$UiController$selectCodeDescriptionLocation$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$this$UiController.selectedCodeDescriptionProvider_0.getLocationByCode_61zpoe$(this.local$closure$code, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            if ((tmp$ = this.result_0) != null) {
              this.local$this$UiController.selectCodeDescriptionLocation_8witqk$(tmp$);
              tmp$_0 = Unit;
            } else
              tmp$_0 = null;
            return tmp$_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function UiController$selectCodeDescriptionLocation$lambda_0(this$UiController_0, closure$code_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$UiController$selectCodeDescriptionLocation$lambda_0(this$UiController_0, closure$code_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  UiController.prototype.selectCodeDescriptionLocation_puj7f4$ = function (codeDescriptionProviderId, code) {
    var tmp$;
    if (!equals(this.selectedCodeDescriptionProvider_0.id, codeDescriptionProviderId)) {
      var $receiver = this.codeDescriptionProviders_0;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (equals(element.id, codeDescriptionProviderId)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      if ((tmp$ = firstOrNull$result) != null) {
        this.selectCodeDescriptionProvider_0(tmp$, UiController$selectCodeDescriptionLocation$lambda$lambda(codeDescriptionProviderId, code, this));
      }} else {
      launch(coroutines.GlobalScope, void 0, void 0, UiController$selectCodeDescriptionLocation$lambda_0(this, code));
    }
  };
  UiController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UiController',
    interfaces: [DisplayContract$Controller]
  };
  var package$org = _.org || (_.org = {});
  var package$olafneumann = package$org.olafneumann || (package$org.olafneumann = {});
  var package$errorcodes = package$olafneumann.errorcodes || (package$olafneumann.errorcodes = {});
  Object.defineProperty(package$errorcodes, 'ApplicationSettings', {
    get: ApplicationSettings_getInstance
  });
  DisplayContract.View = DisplayContract$View;
  DisplayContract.Controller = DisplayContract$Controller;
  package$errorcodes.DisplayContract = DisplayContract;
  package$errorcodes.main = main;
  Object.defineProperty(AbstractUrlCodeDescriptionProvider, 'Companion', {
    get: AbstractUrlCodeDescriptionProvider$Companion_getInstance
  });
  $$importsForInline$$['ktor-ktor-client-core-jsLegacy'] = $module$ktor_ktor_client_core_jsLegacy;
  var package$codes = package$errorcodes.codes || (package$errorcodes.codes = {});
  package$codes.AbstractUrlCodeDescriptionProvider = AbstractUrlCodeDescriptionProvider;
  package$codes.CodeDescription = CodeDescription;
  package$codes.CodeDescriptionLocation = CodeDescriptionLocation;
  CodeDescriptionProvider.Product = CodeDescriptionProvider$Product;
  package$codes.CodeDescriptionProvider = CodeDescriptionProvider;
  Object.defineProperty(package$codes, 'HtmlCleaner', {
    get: HtmlCleaner_getInstance
  });
  Object.defineProperty(AbstractIbmUrlCodeDescriptionProvider, 'Companion', {
    get: AbstractIbmUrlCodeDescriptionProvider$Companion_getInstance
  });
  package$codes.AbstractIbmUrlCodeDescriptionProvider = AbstractIbmUrlCodeDescriptionProvider;
  package$codes.SqlCodeDescriptionProvider = SqlCodeDescriptionProvider;
  package$codes.Db2Zos10CodeDescriptionProvider = Db2Zos10CodeDescriptionProvider;
  package$codes.Db2Zos11CodeDescriptionProvider = Db2Zos11CodeDescriptionProvider;
  package$codes.Db2Zos12CodeDescriptionProvider = Db2Zos12CodeDescriptionProvider;
  package$codes.MQ8CodeDescriptionProvider = MQ8CodeDescriptionProvider;
  package$codes.SinglePageCodeDescriptionProvider = SinglePageCodeDescriptionProvider;
  package$codes.HttpCodeDescriptionProvider = HttpCodeDescriptionProvider;
  package$codes.FtpCodeDescriptionProvider = FtpCodeDescriptionProvider;
  package$codes.SmtpCodeDescriptionProvider = SmtpCodeDescriptionProvider;
  package$codes.SipCodeDescriptionProvider = SipCodeDescriptionProvider;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  Object.defineProperty(HtmlView, 'Companion', {
    get: HtmlView$Companion_getInstance
  });
  $$importsForInline$$['error-codes-viewer'] = _;
  var package$html = package$errorcodes.html || (package$errorcodes.html = {});
  package$html.HtmlView = HtmlView;
  package$html.ListMaintainer = ListMaintainer;
  Object.defineProperty(AbstractApplicationSettings, 'Companion', {
    get: AbstractApplicationSettings$Companion_getInstance
  });
  var package$browser = package$html.browser || (package$html.browser = {});
  package$browser.AbstractApplicationSettings = AbstractApplicationSettings;
  Object.defineProperty(package$browser, 'CookieBanner', {
    get: CookieBanner_getInstance
  });
  Object.defineProperty(package$browser, 'HtmlHelper', {
    get: HtmlHelper_getInstance
  });
  StateContainer.State = StateContainer$State;
  StateContainer.StateHandler = StateContainer$StateHandler;
  StateContainer.HashContainer = StateContainer$HashContainer;
  package$browser.StateContainer = StateContainer;
  var package$ui = package$errorcodes.ui || (package$errorcodes.ui = {});
  package$ui.UiController = UiController;
  Object.defineProperty(AbstractUrlCodeDescriptionProvider.prototype, 'name', Object.getOwnPropertyDescriptor(CodeDescriptionProvider.prototype, 'name'));
  HtmlView$CodeLocationState$$serializer.prototype.patch_h7kg3r$ = GeneratedSerializer.prototype.patch_h7kg3r$;
  HtmlView$CodeLocationState$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  codeDescriptionProviders = listOf([new Db2Zos10CodeDescriptionProvider(), new Db2Zos11CodeDescriptionProvider(), new Db2Zos12CodeDescriptionProvider(), new MQ8CodeDescriptionProvider(), new HttpCodeDescriptionProvider(), new FtpCodeDescriptionProvider(), new SmtpCodeDescriptionProvider(), new SipCodeDescriptionProvider()]);
  main();
  Kotlin.defineModule('error-codes-viewer', _);
  return _;
}(typeof this['error-codes-viewer'] === 'undefined' ? {} : this['error-codes-viewer'], kotlin, this['ktor-ktor-client-core-jsLegacy'], this['ktor-ktor-http-jsLegacy'], this['kotlinx-html-js'], this['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'], this['kotlinx-coroutines-core']);

//# sourceMappingURL=error-codes-viewer.js.map
