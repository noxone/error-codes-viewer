if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'error-codes-viewer'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'error-codes-viewer'.");
}if (typeof this['ktor-ktor-client-core'] === 'undefined') {
  throw new Error("Error loading module 'error-codes-viewer'. Its dependency 'ktor-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-core' is loaded prior to 'error-codes-viewer'.");
}if (typeof this['ktor-ktor-http'] === 'undefined') {
  throw new Error("Error loading module 'error-codes-viewer'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'error-codes-viewer'.");
}if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'error-codes-viewer'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'error-codes-viewer'.");
}this['error-codes-viewer'] = function (_, Kotlin, $module$ktor_ktor_client_core, $module$ktor_ktor_http, $module$kotlinx_coroutines_core) {
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
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var createKType = Kotlin.createKType;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var js = $module$ktor_ktor_client_core.io.ktor.client.engine.js;
  var HttpClient = $module$ktor_ktor_client_core.io.ktor.client.HttpClient_744i18$;
  var kotlin_js_internal_StringCompanionObject = Kotlin.kotlin.js.internal.StringCompanionObject;
  var get_CASE_INSENSITIVE_ORDER = Kotlin.kotlin.text.get_CASE_INSENSITIVE_ORDER_6eet4j$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Url = $module$ktor_ktor_http.io.ktor.http.Url_61zpoe$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Comparator = Kotlin.kotlin.Comparator;
  var Unit = Kotlin.kotlin.Unit;
  var takeFrom = $module$ktor_ktor_client_core.$$importsForInline$$['ktor-ktor-http'].io.ktor.http.takeFrom_wol2ee$;
  var utils = $module$ktor_ktor_client_core.io.ktor.client.utils;
  var url = $module$ktor_ktor_client_core.io.ktor.client.request.url_3rzbk2$;
  var HttpMethod = $module$ktor_ktor_client_core.$$importsForInline$$['ktor-ktor-http'].io.ktor.http.HttpMethod;
  var HttpRequestBuilder_init = $module$ktor_ktor_client_core.io.ktor.client.request.HttpRequestBuilder;
  var HttpStatement_init = $module$ktor_ktor_client_core.io.ktor.client.statement.HttpStatement;
  var getKClass = Kotlin.getKClass;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var HttpResponse = $module$ktor_ktor_client_core.io.ktor.client.statement.HttpResponse;
  var complete = $module$ktor_ktor_client_core.io.ktor.client.statement.complete_abn2de$;
  var call = $module$ktor_ktor_client_core.io.ktor.client.call;
  var TypeInfo_init = $module$ktor_ktor_client_core.io.ktor.client.call.TypeInfo;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var mapNotNull = Kotlin.kotlin.sequences.mapNotNull_qpz9h9$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_pdl1vz$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException;
  var ClassCastException = Kotlin.kotlin.ClassCastException;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  ApplicationSettings.prototype = Object.create(AbstractApplicationSettings.prototype);
  ApplicationSettings.prototype.constructor = ApplicationSettings;
  Db2ZosCodeDescriptionProvider.prototype = Object.create(AbstractUrlCodeDescriptionProvider.prototype);
  Db2ZosCodeDescriptionProvider.prototype.constructor = Db2ZosCodeDescriptionProvider;
  MQCodeDescriptionProvider.prototype = Object.create(AbstractUrlCodeDescriptionProvider.prototype);
  MQCodeDescriptionProvider.prototype.constructor = MQCodeDescriptionProvider;
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
    get: function () {
      var tmp$;
      return (tmp$ = this.get_0(this.KEY_CURRENT_GROUP_NAME_0)) != null ? tmp$ : this.VAL_DEFAULT_GROUP_NAME_0;
    },
    set: function (value) {
      this.set_1(this.KEY_CURRENT_GROUP_NAME_0, value);
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'currentPrefix', {
    get: function () {
      var tmp$;
      return (tmp$ = this.get_0(this.KEY_CURRENT_PREFIX_0)) != null ? tmp$ : this.VAL_DEFAULT_PREFIX_8be2vx$;
    },
    set: function (value) {
      this.set_1(this.KEY_CURRENT_PREFIX_0, value);
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'currentSeparator', {
    get: function () {
      var tmp$;
      return (tmp$ = this.get_0(this.KEY_CURRENT_SEPARATOR_0)) != null ? tmp$ : this.VAL_DEFAULT_SEPARATOR_8be2vx$;
    },
    set: function (value) {
      this.set_1(this.KEY_CURRENT_SEPARATOR_0, value);
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'currentPostfix', {
    get: function () {
      var tmp$;
      return (tmp$ = this.get_0(this.KEY_CURRENT_POSTFIX_0)) != null ? tmp$ : this.VAL_DEFAULT_POSTFIX_8be2vx$;
    },
    set: function (value) {
      this.set_1(this.KEY_CURRENT_POSTFIX_0, value);
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'prefixes', {
    get: function () {
      return this.readConfigFromArray_0(this.KEY_LIST_PREFIXES_0, this.VAL_DEFAULT_LIST_PREFIXES_0);
    },
    set: function (value) {
      this.set_1(this.KEY_LIST_PREFIXES_0, JSON.stringify(value));
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'separators', {
    get: function () {
      return this.readConfigFromArray_0(this.KEY_LIST_SEPARATORS_0, this.VAL_DEFAULT_LIST_SEPARATOR_0);
    },
    set: function (value) {
      this.set_1(this.KEY_LIST_SEPARATORS_0, JSON.stringify(value));
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'postfixes', {
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
      initErroCodes();
    } catch (exception) {
      if (Kotlin.isType(exception, Exception)) {
        console.error(exception);
        window.alert('Unable to initialize ErrorCodesViewer: ' + toString(exception.message));
      } else
        throw exception;
    }
  }
  function initErroCodes() {
    new UiController();
    ApplicationSettings_getInstance().storeUserLastInfo();
    CodeDescriptionLoader_getInstance().getLocations();
  }
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function get$lambda($receiver) {
    return Unit;
  }
  function AbstractUrlCodeDescriptionProvider(name) {
    this.name_8wktks$_0 = name;
    this.client_mtzw78$_0 = HttpClient(js.Js);
    this.comparator_vztgfb$_0 = new Comparator$ObjectLiteral(AbstractUrlCodeDescriptionProvider$comparator$lambda);
  }
  Object.defineProperty(AbstractUrlCodeDescriptionProvider.prototype, 'name', {
    get: function () {
      return this.name_8wktks$_0;
    }
  });
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
            var $receiver_0 = this.$this.client_mtzw78$_0;
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
            return toList(map(this.$this.codeDescriptionRegex.findAll_905azu$(siteContent), AbstractUrlCodeDescriptionProvider$loadLocationList$lambda(this.$this)));
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
  Object.defineProperty(AbstractUrlCodeDescriptionProvider.prototype, 'comparator', {
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
  function Db2ZosCodeDescriptionProvider() {
    AbstractUrlCodeDescriptionProvider.call(this, 'IBM Db2 for z/OS 10.0.0');
    this.indexUrl_nqmyq3$_0 = Url('https://www.ibm.com/support/knowledgecenter/SSEPEK_10.0.0/codes/src/tpc/db2z_n.html?view=embed');
    this.codeDescriptionRegex_7bid7q$_0 = Regex_init('<span class="ulchildlinktext"><a [^>]*href="([^"]+)"[^>]*>(-[0-9]+)<\/a>');
    this.detailBaseUrlString_0 = 'https://www.ibm.com/support/knowledgecenter/SSEPEK_10.0.0/codes/src/tpc/';
    this.comparator_rvdiyk$_0 = new Comparator$ObjectLiteral(Db2ZosCodeDescriptionProvider$comparator$lambda);
  }
  Object.defineProperty(Db2ZosCodeDescriptionProvider.prototype, 'indexUrl', {
    get: function () {
      return this.indexUrl_nqmyq3$_0;
    }
  });
  Object.defineProperty(Db2ZosCodeDescriptionProvider.prototype, 'codeDescriptionRegex', {
    get: function () {
      return this.codeDescriptionRegex_7bid7q$_0;
    }
  });
  Db2ZosCodeDescriptionProvider.prototype.convertMatchToCodeDescriptionLocation_bl4kwi$ = function (matchResult) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var href = (tmp$_0 = (tmp$ = matchResult.groups.get_za3lpa$(1)) != null ? tmp$.value : null) != null ? tmp$_0 : 'NO HREF';
    var text = (tmp$_2 = (tmp$_1 = matchResult.groups.get_za3lpa$(2)) != null ? tmp$_1.value : null) != null ? tmp$_2 : 'NO TEXT';
    return new CodeDescriptionLocation(this, text, this.detailBaseUrlString_0 + href + '?view=embed');
  };
  Db2ZosCodeDescriptionProvider.prototype.loadCodeDescription_8witqk$ = function (location, continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  Object.defineProperty(Db2ZosCodeDescriptionProvider.prototype, 'comparator', {
    get: function () {
      return this.comparator_rvdiyk$_0;
    }
  });
  function Db2ZosCodeDescriptionProvider$comparator$lambda(a, b) {
    return Kotlin.primitiveCompareTo(abs(toInt(a.code)), abs(toInt(b.code)));
  }
  Db2ZosCodeDescriptionProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Db2ZosCodeDescriptionProvider',
    interfaces: [AbstractUrlCodeDescriptionProvider]
  };
  function MQCodeDescriptionProvider() {
    AbstractUrlCodeDescriptionProvider.call(this, 'IBM MQ 8.0.0');
    this.indexUrl_w8kb7p$_0 = Url('https://www.ibm.com/support/knowledgecenter/SSFKSJ_8.0.0/com.ibm.mq.tro.doc/q040710_.htm?view=embed');
    this.codeDescriptionRegex_qcdkps$_0 = Regex_init('<li class="ulchildlink".*?<a href="([^"]+)"[^>]*>([0-9]+)[^<]*<\/a');
    this.detailBaseUrlString_0 = 'https://www.ibm.com/support/knowledgecenter/SSFKSJ_8.0.0/com.ibm.mq.tro.doc/';
    this.comparator_tw5g02$_0 = new Comparator$ObjectLiteral(MQCodeDescriptionProvider$comparator$lambda);
  }
  Object.defineProperty(MQCodeDescriptionProvider.prototype, 'indexUrl', {
    get: function () {
      return this.indexUrl_w8kb7p$_0;
    }
  });
  Object.defineProperty(MQCodeDescriptionProvider.prototype, 'codeDescriptionRegex', {
    get: function () {
      return this.codeDescriptionRegex_qcdkps$_0;
    }
  });
  MQCodeDescriptionProvider.prototype.convertMatchToCodeDescriptionLocation_bl4kwi$ = function (matchResult) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var href = (tmp$_0 = (tmp$ = matchResult.groups.get_za3lpa$(1)) != null ? tmp$.value : null) != null ? tmp$_0 : 'NO HREF';
    var text = (tmp$_2 = (tmp$_1 = matchResult.groups.get_za3lpa$(2)) != null ? tmp$_1.value : null) != null ? tmp$_2 : 'NO TEXT';
    return new CodeDescriptionLocation(this, text, this.detailBaseUrlString_0 + href + '?view=embed');
  };
  MQCodeDescriptionProvider.prototype.loadCodeDescription_8witqk$ = function (location, continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  Object.defineProperty(MQCodeDescriptionProvider.prototype, 'comparator', {
    get: function () {
      return this.comparator_tw5g02$_0;
    }
  });
  function MQCodeDescriptionProvider$comparator$lambda(a, b) {
    return Kotlin.primitiveCompareTo(abs(toInt(a.code)), abs(toInt(b.code)));
  }
  MQCodeDescriptionProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MQCodeDescriptionProvider',
    interfaces: [AbstractUrlCodeDescriptionProvider]
  };
  function CodeDescription(content, dataOfLoading) {
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
  function CodeDescriptionLoader() {
    CodeDescriptionLoader_instance = this;
    this.codeDescriptionProviders_0 = listOf([new Db2ZosCodeDescriptionProvider(), new MQCodeDescriptionProvider()]);
    var $receiver = this.codeDescriptionProviders_0;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item.name, emptyList()));
    }
    this.codeDescriptionLocations_0 = toMap(destination);
    launch(coroutines.GlobalScope, void 0, void 0, CodeDescriptionLoader_init$lambda(this));
  }
  function Coroutine$loadCodes_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$item = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
  }
  Coroutine$loadCodes_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadCodes_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadCodes_0.prototype.constructor = Coroutine$loadCodes_0;
  Coroutine$loadCodes_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.codeDescriptionProviders_0;
            this.local$destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            this.local$tmp$ = $receiver.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }
            this.local$item = this.local$tmp$.next();
            this.local$tmp$_0 = this.local$destination.add_11rb$;
            this.local$tmp$_1 = this.local$item.name;
            this.state_0 = 3;
            this.result_0 = this.local$item.loadLocationList(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_0.call(this.local$destination, to(this.local$tmp$_1, sortedWith(this.result_0, this.local$item.comparator)));
            this.state_0 = 2;
            continue;
          case 4:
            this.$this.codeDescriptionLocations_0 = toMap(this.local$destination);
            console.log(this.$this.codeDescriptionLocations_0);
            return;
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
  CodeDescriptionLoader.prototype.loadCodes_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$loadCodes_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  CodeDescriptionLoader.prototype.getLocations = function () {
    return this.codeDescriptionLocations_0;
  };
  function Coroutine$CodeDescriptionLoader_init$lambda(this$CodeDescriptionLoader_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$CodeDescriptionLoader = this$CodeDescriptionLoader_0;
  }
  Coroutine$CodeDescriptionLoader_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CodeDescriptionLoader_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CodeDescriptionLoader_init$lambda.prototype.constructor = Coroutine$CodeDescriptionLoader_init$lambda;
  Coroutine$CodeDescriptionLoader_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$CodeDescriptionLoader.loadCodes_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
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
  function CodeDescriptionLoader_init$lambda(this$CodeDescriptionLoader_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CodeDescriptionLoader_init$lambda(this$CodeDescriptionLoader_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  CodeDescriptionLoader.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CodeDescriptionLoader',
    interfaces: []
  };
  var CodeDescriptionLoader_instance = null;
  function CodeDescriptionLoader_getInstance() {
    if (CodeDescriptionLoader_instance === null) {
      new CodeDescriptionLoader();
    }return CodeDescriptionLoader_instance;
  }
  function CodeDescriptionLocation(provider, code, url) {
    this.provider = provider;
    this.code = code;
    this.url = url;
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
    return this.url;
  };
  CodeDescriptionLocation.prototype.copy_z0ot9o$ = function (provider, code, url) {
    return new CodeDescriptionLocation(provider === void 0 ? this.provider : provider, code === void 0 ? this.code : code, url === void 0 ? this.url : url);
  };
  CodeDescriptionLocation.prototype.toString = function () {
    return 'CodeDescriptionLocation(provider=' + Kotlin.toString(this.provider) + (', code=' + Kotlin.toString(this.code)) + (', url=' + Kotlin.toString(this.url)) + ')';
  };
  CodeDescriptionLocation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.provider) | 0;
    result = result * 31 + Kotlin.hashCode(this.code) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  CodeDescriptionLocation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.provider, other.provider) && Kotlin.equals(this.code, other.code) && Kotlin.equals(this.url, other.url)))));
  };
  function CodeDescriptionProvider() {
  }
  CodeDescriptionProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CodeDescriptionProvider',
    interfaces: []
  };
  function HtmlView(controller) {
    this.controller_0 = controller;
  }
  HtmlView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlView',
    interfaces: [DisplayContract$View]
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
        throw new RuntimeException_init("Unable to find element with id '" + id + "'.", e);
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
          throw new RuntimeException_init("Unable to find element with id '" + id + "'.", e);
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
          throw new RuntimeException_init("Unable to find element with id '" + id_0 + "'.", e_0);
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
  function UiController() {
    this.view_0 = new HtmlView(this);
  }
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
  $$importsForInline$$['ktor-ktor-client-core'] = $module$ktor_ktor_client_core;
  var package$codes = package$errorcodes.codes || (package$errorcodes.codes = {});
  package$codes.AbstractUrlCodeDescriptionProvider = AbstractUrlCodeDescriptionProvider;
  package$codes.Db2ZosCodeDescriptionProvider = Db2ZosCodeDescriptionProvider;
  package$codes.MQCodeDescriptionProvider = MQCodeDescriptionProvider;
  package$codes.CodeDescription = CodeDescription;
  Object.defineProperty(package$codes, 'CodeDescriptionLoader', {
    get: CodeDescriptionLoader_getInstance
  });
  package$codes.CodeDescriptionLocation = CodeDescriptionLocation;
  package$codes.CodeDescriptionProvider = CodeDescriptionProvider;
  var package$html = package$errorcodes.html || (package$errorcodes.html = {});
  package$html.HtmlView = HtmlView;
  Object.defineProperty(AbstractApplicationSettings, 'Companion', {
    get: AbstractApplicationSettings$Companion_getInstance
  });
  var package$browser = package$html.browser || (package$html.browser = {});
  package$browser.AbstractApplicationSettings = AbstractApplicationSettings;
  $$importsForInline$$['error-codes-viewer'] = _;
  Object.defineProperty(package$browser, 'CookieBanner', {
    get: CookieBanner_getInstance
  });
  Object.defineProperty(package$browser, 'HtmlHelper', {
    get: HtmlHelper_getInstance
  });
  var package$ui = package$errorcodes.ui || (package$errorcodes.ui = {});
  package$ui.UiController = UiController;
  main();
  Kotlin.defineModule('error-codes-viewer', _);
  return _;
}(typeof this['error-codes-viewer'] === 'undefined' ? {} : this['error-codes-viewer'], kotlin, this['ktor-ktor-client-core'], this['ktor-ktor-http'], this['kotlinx-coroutines-core']);

//# sourceMappingURL=error-codes-viewer.js.map
