(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/homunculus/index.js":
/*!******************************************!*\
  !*** ./node_modules/homunculus/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
    module.exports = __webpack_require__(/*! ./web/homunculus */ "./node_modules/homunculus/web/homunculus.js");
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

/***/ }),

/***/ "./node_modules/homunculus/web/homunculus.js":
/*!***************************************************!*\
  !*** ./node_modules/homunculus/web/homunculus.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Lexer = __webpack_require__(/*! ./lexer/Lexer */ "./node_modules/homunculus/web/lexer/Lexer.js");

  var CssLexer = __webpack_require__(/*! ./lexer/CssLexer */ "./node_modules/homunculus/web/lexer/CssLexer.js");

  var HtmlLexer = __webpack_require__(/*! ./lexer/HtmlLexer */ "./node_modules/homunculus/web/lexer/HtmlLexer.js");

  var EcmascriptLexer = __webpack_require__(/*! ./lexer/EcmascriptLexer */ "./node_modules/homunculus/web/lexer/EcmascriptLexer.js");

  var JSXLexer = __webpack_require__(/*! ./lexer/JSXLexer */ "./node_modules/homunculus/web/lexer/JSXLexer.js");

  var EcmascriptRule = __webpack_require__(/*! ./lexer/rule/EcmascriptRule */ "./node_modules/homunculus/web/lexer/rule/EcmascriptRule.js");

  var CssRule = __webpack_require__(/*! ./lexer/rule/CssRule */ "./node_modules/homunculus/web/lexer/rule/CssRule.js");

  var JavaRule = __webpack_require__(/*! ./lexer/rule/JavaRule */ "./node_modules/homunculus/web/lexer/rule/JavaRule.js");

  var CRule = __webpack_require__(/*! ./lexer/rule/CRule */ "./node_modules/homunculus/web/lexer/rule/CRule.js");

  var HtmlRule = __webpack_require__(/*! ./lexer/rule/HtmlRule */ "./node_modules/homunculus/web/lexer/rule/HtmlRule.js");

  var Token = __webpack_require__(/*! ./lexer/Token */ "./node_modules/homunculus/web/lexer/Token.js");

  var CssToken = __webpack_require__(/*! ./lexer/CssToken */ "./node_modules/homunculus/web/lexer/CssToken.js");

  var HtmlToken = __webpack_require__(/*! ./lexer/HtmlToken */ "./node_modules/homunculus/web/lexer/HtmlToken.js");

  var JSXToken = __webpack_require__(/*! ./lexer/JSXToken */ "./node_modules/homunculus/web/lexer/JSXToken.js");

  var JsParser = __webpack_require__(/*! ./parser/js/Parser */ "./node_modules/homunculus/web/parser/js/Parser.js");

  var Es6Parser = __webpack_require__(/*! ./parser/es6/Parser */ "./node_modules/homunculus/web/parser/es6/Parser.js");

  var CssParser = __webpack_require__(/*! ./parser/css/Parser */ "./node_modules/homunculus/web/parser/css/Parser.js");

  var HtmlParser = __webpack_require__(/*! ./parser/html/Parser */ "./node_modules/homunculus/web/parser/html/Parser.js");

  var JSXParser = __webpack_require__(/*! ./parser/jsx/Parser */ "./node_modules/homunculus/web/parser/jsx/Parser.js");

  var JsNode = __webpack_require__(/*! ./parser/js/Node */ "./node_modules/homunculus/web/parser/js/Node.js");

  var Es6Node = __webpack_require__(/*! ./parser/es6/Node */ "./node_modules/homunculus/web/parser/es6/Node.js");

  var CssNode = __webpack_require__(/*! ./parser/css/Node */ "./node_modules/homunculus/web/parser/css/Node.js");

  var HtmlNode = __webpack_require__(/*! ./parser/html/Node */ "./node_modules/homunculus/web/parser/html/Node.js");

  var JSXNode = __webpack_require__(/*! ./parser/jsx/Node */ "./node_modules/homunculus/web/parser/jsx/Node.js");

  var JsContext = __webpack_require__(/*! ./parser/js/Context */ "./node_modules/homunculus/web/parser/js/Context.js");

  var walk = __webpack_require__(/*! ./util/walk */ "./node_modules/homunculus/web/util/walk.js");

  exports.getClass = function (type, lan) {
    type = (type || '').toLowerCase();
    lan = (lan || '').toLowerCase();

    switch (type) {
      case 'lexer':
        switch (lan) {
          case 'js':
          case 'javascript':
          case 'es':
          case 'es5':
          case 'es6':
          case 'es7':
          case 'es2015':
          case 'es2016':
          case 'ecmascript':
          case 'as':
          case 'actionscript':
            return EcmascriptLexer;

          case 'css':
            return CssLexer;

          case 'html':
          case 'htm':
            return HtmlLexer;

          case 'jsx':
            return JSXLexer;

          default:
            throw new Error('Unsupport Language Lexer: ' + lan);
        }

        break;

      case 'parser':
        switch (lan) {
          case 'js':
          case 'javascript':
          case 'es':
          case 'es5':
          case 'ecmascript':
            return JsParser;

          case 'es6':
          case 'es7':
          case 'es2015':
          case 'es2016':
            return Es6Parser;

          case 'css':
            return CssParser;

          case 'html':
          case 'htm':
            return HtmlParser;

          case 'jsx':
            return JSXParser;

          default:
            throw new Error('Unsupport Language Parser: ' + lan);
        }

        break;

      case 'node':
        switch (lan) {
          case 'js':
          case 'javascript':
          case 'es':
          case 'es5':
          case 'ecmascript':
            return JsNode;

          case 'es6':
          case 'es7':
          case 'es8':
          case 'es2015':
          case 'es2016':
            return Es6Node;

          case 'css':
            return CssNode;

          case 'html':
          case 'htm':
            return HtmlNode;

          case 'jsx':
            return JSXNode;

          default:
            throw new Error('Unsupport Language Node: ' + lan);
        }

        break;

      case 'context':
        switch (lan) {
          case 'js':
          case 'javascript':
          case 'es':
          case 'es5':
          case 'ecmascript':
          case 'es6':
          case 'es7':
          case 'es8':
          case 'es2015':
          case 'es2016':
            return JsContext;

          default:
            throw new Error('Unsupport Language Context: ' + lan);
        }

        break;

      case 'token':
        switch (lan) {
          case 'css':
            return CssToken;

          case 'htm':
          case 'html':
            return HtmlToken;

          case 'jsx':
            return JSXToken;

          default:
            return Token;
        }

      case 'rule':
        switch (lan) {
          case 'js':
          case 'javascript':
          case 'es':
          case 'es5':
          case 'es6':
          case 'es7':
          case 'es8':
          case 'es2015':
          case 'es2016':
          case 'ecmascript':
            return EcmascriptRule;

          case 'css':
            return CssRule;

          case 'htm':
          case 'html':
            return HtmlRule;

          case 'jsx':
            return EcmascriptRule;

          default:
            throw new Error('Unsupport Language Context: ' + lan);
        }

      case 'walk':
        return walk;

      default:
        throw new Error('Unsupport Class Type: ' + type);
    }
  };

  exports.getLexer = function (lan) {
    lan = lan.toLowerCase();

    switch (lan) {
      case 'js':
      case 'javascript':
      case 'es':
      case 'es5':
      case 'ecmascript':
      case 'es6':
      case 'es7':
      case 'es8':
      case 'es2015':
      case 'es2016':
      case 'as':
      case 'actionscript':
        return new EcmascriptLexer(new EcmascriptRule());

      case 'css':
        return new CssLexer(new CssRule());

      case "java":
        return new Lexer(new JavaRule());

      case "c":
      case "c++":
      case "cpp":
      case "cplusplus":
        return new Lexer(new CRule());

      case 'html':
      case 'htm':
        return new HtmlLexer(new HtmlRule());

      case 'jsx':
        return new JSXLexer(new EcmascriptRule());

      default:
        throw new Error('Unsupport Language Lexer: ' + lan);
    }
  };

  exports.getParser = function (lan) {
    lan = lan.toLowerCase();

    switch (lan) {
      case 'js':
      case 'javascript':
      case 'es':
      case 'es5':
      case 'ecmascript':
        return new JsParser(exports.getLexer(lan));

      case 'es6':
      case 'es7':
      case 'es8':
      case 'es2015':
      case 'es2016':
        return new Es6Parser(exports.getLexer(lan));

      case 'css':
        return new CssParser(exports.getLexer(lan));

      case 'html':
      case 'htm':
        return new HtmlParser(exports.getLexer(lan));

      case 'jsx':
        return new JSXParser(exports.getLexer(lan));

      default:
        throw new Error('Unsupport Language Parser: ' + lan);
    }
  };

  exports.getContext = function (lan) {
    lan = lan.toLowerCase();

    switch (lan) {
      case 'js':
      case 'javascript':
      case 'es':
      case 'es5':
      case 'ecmascript':
      case 'es6':
      case 'es7':
      case 'es8':
      case 'es2015':
      case 'es2016':
        return new JsContext();

      default:
        throw new Error('Unsupport Language Context: ' + lan);
    }
  };

  exports.reset = function () {
    Token.reset();
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/CssLexer.js":
/*!*******************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/CssLexer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Lexer = __webpack_require__(/*! ./Lexer */ "./node_modules/homunculus/web/lexer/Lexer.js");

  var Token = __webpack_require__(/*! ./CssToken */ "./node_modules/homunculus/web/lexer/CssToken.js");

  var character = __webpack_require__(/*! ../util/character */ "./node_modules/homunculus/web/util/character.js");

  var RegMatch = __webpack_require__(/*! ./match/RegMatch */ "./node_modules/homunculus/web/lexer/match/RegMatch.js");

  var S = {
    '\n': true,
    '\r': true,
    ' ': true,
    '\t': true
  };
  var ADD_VALUE = new RegMatch(Token.ID, /^[a-z][\w\-\+\.]*/i);
  var CssLexer = Lexer.extend(function (rule) {
    Lexer.call(this, rule);
    this.media = false;
    this.impt = false;
    this.value = false;
    this.parenthese = false;
    this.bracket = false;
    this.number = false;
    this.url = false;
    this.kw = false;
    this.sel = true;
    this.va = false;
    this.cvar = false;
    this.page = false;
    this.kf = false;
    this.ns = false;
    this.doc = false;
    this.supports = false;
    this.extend = false;
    this.param = false;
    this.depth = 0;
  }).methods({
    //@override
    scan: function (temp) {
      var length = this.code.length;
      var count = 0;
      this.colNum = length ? 1 : 0;

      outer: while (this.index < length) {
        if (this.cacheLine > 0 && count >= this.cacheLine) {
          break;
        }

        this.readch(); //(之后的字符串可省略"号

        if (this.parenthese && this.url) {
          if (!S.hasOwnProperty(this.peek) && !{
            "'": true,
            '"': true,
            ')': true,
            '$': true
          }.hasOwnProperty(this.peek)) {
            this.dealPt(temp);
            this.url = false;
            continue outer;
          } //url只能省略一次，即url()中第一个出现的非空白token，多个的话不能省略


          this.url = false;
        }

        for (var i = 0, matches = this.rule.matches(), len = matches.length; i < len; i++) {
          var match = matches[i];

          if (match.match(this.peek, this.code, this.index)) {
            var token = new Token(match.tokenType(), match.content(), match.val(), this.index - 1);
            var matchLen = match.content().length; //回调可自定义处理匹配的token

            if (match.callback) {
              match.callback(token);
            }

            var s = token.content().toLowerCase();

            switch (token.type()) {
              //单位必须紧跟数字，否则便不是单位
              case Token.BLANK:
              case Token.TAB:
              case Token.LINE:
                this.number = false;
                break;
              //@import和@media之后进入值状态

              case Token.HEAD:
                s = s.replace(/^@(-moz-|-o-|-ms-|-webkit-|-vx-|-hp-|-khtml-|mso-|-prince-|-rim-|-ro-|-tc-|-wap-|-apple-|-atsc-|-ah-)/, '@');
                this.sel = false;
                this.kw = false;
                this.value = true;
                this.number = false;
                this.va = false;

                switch (s) {
                  case '@import':
                    this.impt = true;
                    break;

                  case '@media':
                    this.media = true;
                    break;

                  case '@page':
                    this.page = true;
                    break;

                  case '@keyframes':
                    this.kf = true;
                    break;

                  case '@document':
                    this.doc = true;
                    break;

                  case '@supports':
                    this.supports = true;
                    break;

                  case '@extend':
                    this.extend = true;
                    this.value = false;
                    this.sel = true;
                    break;
                }

                break;
              //单位要跟在数字之后，否则便不是单位

              case Token.UNITS:
                if (!this.number) {
                  continue;
                }

                this.sel = false;
                this.kw = false;
                this.va = false;
                this.number = false;
                this.page = false;
                this.kf = false;
                this.ns = false;
                this.doc = false;
                break;

              case Token.KEYWORD:
                if (!this.value || this.supports) {
                  this.kw = true;
                  this.url = false;
                  this.va = false;
                  this.sel = false;
                  this.number = false;
                  this.page = false;
                  this.kf = false;
                  this.ns = false;
                  this.doc = false;
                  this.parenthese = false;
                }

                break;

              case Token.COLOR:
                if (!this.value && !this.param && !this.cvar) {
                  token.type(Token.SELECTOR);
                }

                break;
              //将id区分出属性名和属性值

              case Token.ID:
                if (this.bracket && this.sel) {
                  token.type(Token.ATTR);
                  this.url = false;
                  this.va = false;
                } else if (this.extend) {
                  token.type(Token.SELECTOR);
                } else if (this.number) {
                  token.type(Token.UNITS);
                  this.url = false;
                  this.kw = false;
                  this.va = false;
                } else if (this.page || this.kf || this.ns) {
                  this.sel = true;
                  this.url = false;
                  this.kw = false;
                  this.va = false;
                  this.value = false;
                } else if (this.va) {
                  token.type(Token.VARS);
                  this.url = false;
                  this.va = false;
                } else if (this.supports) {
                  if (this.rule.keyWords().hasOwnProperty(s)) {
                    token.type(Token.KEYWORD);
                  } else {
                    token.type(Token.PROPERTY);
                  }
                } else if (this.param || this.cvar) {
                  //value时id可以带+号，必须紧跟
                  if (this.code.charAt(this.index) == '+') {
                    ADD_VALUE.match(this.peek, this.code, this.index);
                    token = new Token(ADD_VALUE.tokenType(), ADD_VALUE.content(), ADD_VALUE.val(), this.index - 1);
                    matchLen = ADD_VALUE.content().length;
                  }

                  if (this.rule.keyWords().hasOwnProperty(s)) {
                    //前面是hack也作为关键字
                    if (this.tokenList[this.tokenList.length - 1].type() == Token.HACK) {
                      token.type(Token.KEYWORD);
                      this.kw = true;
                    } else {
                      //LL2确定后面如果是:说明是关键字（$var:keyword:）
                      for (var j = this.index + matchLen - 1; j < length; j++) {
                        var c = this.code.charAt(j);

                        if (!S.hasOwnProperty(c)) {
                          if (c == ':') {
                            token.type(Token.KEYWORD);
                            this.kw = true;
                          } else {
                            token.type(Token.PROPERTY);
                            this.value = true;
                          }

                          break;
                        }
                      }
                    }
                  } else if (this.rule.values().hasOwnProperty(s)) {
                    token.type(Token.PROPERTY);
                    this.url = ['url', 'format', 'url-prefix', 'domain', 'regexp'].indexOf(s) > -1;
                  }

                  this.sel = false;
                  this.cvar = false;
                } else if (this.value) {
                  //value时id可以带+号，必须紧跟
                  if (this.code.charAt(this.index) == '+') {
                    ADD_VALUE.match(this.peek, this.code, this.index);
                    token = new Token(ADD_VALUE.tokenType(), ADD_VALUE.content(), ADD_VALUE.val(), this.index - 1);
                    matchLen = ADD_VALUE.content().length;
                  }

                  if (this.rule.colors().hasOwnProperty(s)) {
                    token.type(Token.COLOR);
                    this.url = false;
                    this.va = false;
                  } else if (this.rule.keyWords().hasOwnProperty(s) || this.rule.values().hasOwnProperty(s)) {
                    token.type(Token.PROPERTY);
                    this.url = ['url', 'format', 'url-prefix', 'domain', 'regexp'].indexOf(s) > -1;
                    this.va = s == 'var';
                  }

                  this.kw = false;
                  this.sel = false;
                } else {
                  if (this.rule.keyWords().hasOwnProperty(s)) {
                    token.type(Token.KEYWORD);
                    this.kw = true;
                    this.sel = false;
                    this.parenthese = false;
                  } else {
                    var isFnCall = false;

                    for (var i = this.index + s.length - 1; i < length; i++) {
                      var c = this.code.charAt(i);

                      if (!S.hasOwnProperty(c)) {
                        isFnCall = c == '(';
                        break;
                      }
                    }

                    if (isFnCall) {
                      token.type(Token.VARS);
                      this.sel = false;
                    } else {
                      token.type(Token.SELECTOR);
                      this.sel = true;
                    }

                    this.kw = false;
                  }

                  this.url = false;
                  this.va = false;
                }

                this.number = false;
                this.page = false;
                this.kf = false;
                this.ns = false;
                this.doc = false;
                break;

              case Token.PSEUDO:
                if ((this.kw || this.value || this.cvar) && !this.page) {
                  token.cancel();
                  continue;
                }

                this.va = false;
                this.page = false;
                this.kf = false;
                this.ns = false;
                this.doc = false;
                break;

              case Token.SELECTOR:
                if (this.value) {
                  token.cancel();
                  continue;
                }

                this.sel = true;
                this.kw = false;
                this.number = false;
                this.va = false;
                this.page = false;
                this.kf = false;
                this.ns = false;
                this.doc = false;
                break;

              case Token.IMPORTANT:
                this.url = false;
                this.va = false;
                this.page = false;
                this.kf = false;
                this.ns = false;
                this.doc = false;
                break;

              case Token.SIGN:
                this.number = false;

                switch (s) {
                  case ':':
                    if (this.kw) {
                      this.value = true;
                    }

                    this.url = false;
                    this.sel = false;
                    this.va = false;
                    break;

                  case '(':
                    this.parenthese = true;

                    if (this.media || this.impt || this.doc) {
                      this.value = false;
                    } //fncall只会出现在block中
                    else if (this.depth > 0) {
                        //向前确定此(之后是fncall的param
                        for (var j = this.tokenList.length - 1; j >= 2; j--) {
                          var t = this.tokenList[j];

                          if ([Token.IGNORE, Token.BLANK, Token.LINE, Token.VIRTUAL, Token.COMMENT].indexOf(t.type()) == -1) {
                            if (t.type() == Token.VARS) {
                              this.param = true;
                              this.parenthese = false;
                            }

                            break;
                          }
                        }
                      }

                    break;

                  case ')':
                    if (this.media || this.impt || this.doc) {
                      this.value = true;
                    }

                    this.url = false;
                    this.parenthese = false;
                    this.va = false; //)之后可能跟单位，比如margin:(1+2)px

                    this.number = true;
                    this.param = false;
                    break;

                  case '[':
                    if (!this.value) {
                      //LL2确定是selector还是hack
                      for (var j = this.index; j < length; j++) {
                        var c = this.code.charAt(j);

                        if (!S.hasOwnProperty(c)) {
                          if (c == ';') {
                            token.type(Token.HACK);
                            this.sel = false;
                          }

                          break;
                        }
                      }
                    }

                    this.bracket = true;
                    this.url = false;
                    this.va = false;
                    break;

                  case ']':
                    if (!this.value && !this.sel) {
                      token.type(Token.HACK);
                    }

                    this.bracket = false;
                    this.url = false;
                    this.va = false;
                    break;

                  case ';':
                    if (this.bracket && !this.sel) {
                      token.type(Token.HACK);
                    }

                    this.value = false;
                    this.impt = false;
                    this.url = false;
                    this.sel = false;
                    this.va = false;
                    this.cvar = false;
                    this.extend = false;
                    this.param = false;
                    break;

                  case '{':
                    this.depth++;
                    this.value = false;
                    this.media = false;
                    this.impt = false;
                    this.url = false;
                    this.sel = true;
                    this.va = false;
                    this.supports = false;
                    this.cvar = false;
                    this.extend = false;
                    this.param = false;
                    break;

                  case '}':
                    this.value = false;
                    this.media = false;
                    this.impt = false;
                    this.url = false;
                    this.sel = true;
                    this.depth--;
                    this.va = false;
                    this.cvar = false;
                    this.extend = false;
                    this.param = false;
                    break;

                  case '*':
                    if (this.cvar && !this.value) {
                      token.type(Token.HACK);
                    } else if (this.param) {
                      //向前如果是(则为hack
                      for (var j = this.tokenList.length - 1; j >= 2; j--) {
                        var t = this.tokenList[j];

                        if ([Token.IGNORE, Token.BLANK, Token.LINE, Token.VIRTUAL, Token.COMMENT].indexOf(t.type()) == -1) {
                          if (t.content() == '(') {
                            token.type(Token.HACK);
                          }

                          break;
                        }
                      }
                    } else if (this.depth && !this.value) {
                      //LL2确定是selector还是hack
                      for (var j = this.index; j < length; j++) {
                        var c = this.code.charAt(j);

                        if (!S.hasOwnProperty(c)) {
                          if (':{,+([#>.'.indexOf(c) > -1) {
                            token.type(Token.SELECTOR);
                            this.sel = true;
                          } else {
                            token.type(Token.HACK);
                            this.sel = false;
                          }

                          break;
                        }
                      }
                    } else if (!this.value) {
                      token.type(Token.SELECTOR);
                      this.sel = true;
                    }

                    this.va = false;
                    break;

                  case '-':
                  case '/':
                    if (!this.value) {
                      token.type(Token.HACK);
                    }

                    this.url = false;
                    this.sel = false;
                    this.va = false;
                    break;

                  case '~':
                    if (this.sel && !this.param) {
                      var last = this.tokenList[this.tokenList.length - 1];

                      if (last) {
                        if (last.type() == Token.SIGN && ['{', '}'].indexOf(last.content()) > -1) {
                          token.type(Token.HACK);
                        }
                      }
                    } else if (!this.value && ['"', "'", '@', '$'].indexOf(this.code.charAt(this.index)) == -1) {
                      token.type(Token.HACK);
                    }

                  default:
                    this.url = false;
                    this.va = false;
                    break;
                }

                this.kw = false;
                this.page = false;
                this.kf = false;
                this.ns = false;
                this.doc = false;
                break;

              case Token.NUMBER:
                this.number = true;
                this.url = false;
                this.va = false;
                this.page = false;
                this.kf = false;
                this.ns = false;
                this.doc = false;

                if (this.cvar || this.param) {
                  this.value = true;
                }

                break;

              case Token.STRING:
                if (this.cvar || this.param) {
                  this.value = true;
                }

                break;

              case Token.VARS:
                this.sel = false;
                this.url = false;
                this.number = false;
                this.va = false;
                this.page = false;
                this.kf = false;
                this.ns = false;
                this.doc = false; //vardecl时作为值

                if (this.cvar) {
                  this.value = true;
                } //非值时的$是声明
                else if (!this.value) {
                    this.cvar = true;
                  }

                break;
            }

            if (this.last) {
              token.prev(this.last);
              this.last.next(token);
            }

            this.last = token;
            temp.push(token);
            this.tokenList.push(token);
            this.index += matchLen - 1;
            token.line(this.totalLine);
            token.col(this.colNum);
            var n = character.count(token.val(), character.LINE);
            count += n;
            this.totalLine += n;

            if (n) {
              var i = match.content().indexOf(character.LINE);
              var j = match.content().lastIndexOf(character.LINE);
              this.colMax = Math.max(this.colMax, this.colNum + i);
              this.colNum = match.content().length - j;
            } else {
              this.colNum += matchLen;
            }

            this.colMax = Math.max(this.colMax, this.colNum);
            continue outer;
          }
        } //如果有未匹配的，css默认忽略，查找下一个;


        var j = this.code.indexOf(';', this.index);

        if (j == -1) {
          j = this.code.indexOf('}', this.index);

          if (j == -1) {
            j = this.code.length;
          } else if (this.depth) {
            j--;
          }
        }

        var s = this.code.slice(this.index - 1, ++j);
        var token = new Token(Token.IGNORE, s, this.index - 1);

        if (this.last) {
          token.prev(this.last);
          this.last.next(token);
        }

        this.last = token;
        temp.push(token);
        this.tokenList.push(token);
        token.line(this.totalLine);
        token.col(this.colNum);
        this.index = j;
        this.colNum += this.index - s.length;
        this.colMax = Math.max(this.colMax, this.colNum);
      }

      return this;
    },
    dealPt: function (temp) {
      var k = this.code.indexOf(')', this.index); //()未结束直接跳出

      if (k == -1) {
        var token = new Token(Token.IGNORE, this.code.slice(this.index - 1, this.code.length), this.index - 1);
        temp.push(token);
        this.tokenList.push(token);
        token.line(this.totalLine);
        token.col(this.colNum);
        this.index = this.code.length;
        var n = character.count(token.val(), character.LINE);

        if (n > 0) {
          var i = token.content().indexOf(character.LINE);
          var j = token.content().lastIndexOf(character.LINE);
          this.colMax = Math.max(this.colMax, this.colNum + i);
          this.colNum = token.content().length - j;
        } else {
          this.colNum += token.content().length;
        }

        this.colMax = Math.max(this.colMax, this.colNum);
        return;
      }

      var s = this.code.slice(this.index - 1, k);
      var reg = /[\s\r\n]/.exec(s.trim());
      var token; //)之前的空白要判断

      if (reg) {
        token = new Token(Token.IGNORE, s, this.index - 1);
      } else {
        token = new Token(Token.STRING, s, this.index - 1);
      }

      if (this.last) {
        token.prev(this.last);
        this.last.next(token);
      }

      this.last = token;
      temp.push(token);
      this.tokenList.push(token);
      token.line(this.totalLine);
      token.col(this.colNum);
      this.index += s.length - 1;
      this.parenthese = false;
      this.url = false;
      var n = character.count(token.val(), character.LINE);

      if (n > 0) {
        var i = token.content().indexOf(character.LINE);
        var j = token.content().lastIndexOf(character.LINE);
        this.colMax = Math.max(this.colMax, this.colNum + i);
        this.colNum = token.content().length - j;
      } else {
        this.colNum += token.content().length;
      }

      this.colMax = Math.max(this.colMax, this.colNum);
    }
  });
  module.exports = CssLexer;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/CssToken.js":
/*!*******************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/CssToken.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Token = __webpack_require__(/*! ./Token */ "./node_modules/homunculus/web/lexer/Token.js");

  var CssToken = Token.extend(function (type, content, val, sIndex) {
    Token.call(this, type, content, val, sIndex);
  }).statics({
    HEAD: 12,
    PROPERTY: 15,
    VARS: 16,
    HACK: 17,
    IMPORTANT: 18,
    PSEUDO: 19,
    UNITS: 20,
    SELECTOR: 21,
    ATTR: 22,
    COLOR: 23
  });
  module.exports = CssToken;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/EcmascriptLexer.js":
/*!**************************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/EcmascriptLexer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var character = __webpack_require__(/*! ../util/character */ "./node_modules/homunculus/web/util/character.js");

  var Token = __webpack_require__(/*! ./Token */ "./node_modules/homunculus/web/lexer/Token.js");

  var Lexer = __webpack_require__(/*! ./Lexer */ "./node_modules/homunculus/web/lexer/Lexer.js");

  var EcmascriptRule = __webpack_require__(/*! ./rule/EcmascriptRule */ "./node_modules/homunculus/web/lexer/rule/EcmascriptRule.js");

  var EcmascriptLexer = Lexer.extend(function (rule, inTemplate) {
    Lexer.call(this, rule);
    this.inTemplate = inTemplate;
  }).methods({
    init: function () {
      Lexer.prototype.init.call(this);
    },
    scan: function (temp) {
      var perlReg = this.rule.perlReg();
      var length = this.code.length;
      var count = 0;
      this.colNum = length ? 1 : 0;

      outer: while (this.index < length) {
        if (this.cacheLine > 0 && count >= this.cacheLine) {
          break;
        }

        this.readch(); //perl风格正则

        if (perlReg && this.isReg == Lexer.IS_REG && this.peek == character.SLASH && !{
          '/': true,
          '*': true
        }[this.code.charAt(this.index)]) {
          this.dealReg(temp, length);
          this.isReg = Lexer.NOT_REG;
        } //template特殊语法
        else if (this.peek == character.GRAVE) {
            this.dealGrave(temp, length);
            this.isReg = Lexer.NOT_REG;
          } //递归解析template中的expr时结束跳出
          else if (this.inTemplate && this.peek == '}') {
              return this;
            } //依次遍历匹配规则，命中则继续
            else {
                for (var i = 0, matches = this.rule.matches(), len = matches.length; i < len; i++) {
                  var match = matches[i];

                  if (match.match(this.peek, this.code, this.index)) {
                    var token = new Token(match.tokenType(), match.content(), match.val(), this.index - 1);
                    var error = match.error();
                    var matchLen = match.content().length;

                    if (error) {
                      this.error(error, this.code.slice(this.index - matchLen, this.index));
                    }

                    if (token.type() == Token.ID && this.rule.keyWords().hasOwnProperty(token.content())) {
                      token.type(Token.KEYWORD);
                    } //回调可自定义处理匹配的token


                    if (match.callback) {
                      match.callback.call(match, token, this.tokenList);
                    } //回调特殊处理忽略掉此次匹配


                    if (match.cancel) {
                      token.cancel();
                      continue;
                    }

                    var n = character.count(token.val(), character.LINE);
                    count += n; //处理token

                    this.dealToken(token, matchLen, n, temp); //支持perl正则需判断关键字、圆括号对除号语义的影响

                    if (perlReg && match.perlReg() != Lexer.IGNORE) {
                      this.stateReg(match);
                    } //处理{


                    this.stateBrace(match.content(), token.type());
                    continue outer;
                  }
                } //如果有未匹配的，说明规则不完整，抛出错误


                this.error('unknow token');
              }
      }

      return this;
    },
    dealGrave: function (temp, length) {
      var lastIndex = this.index - 1;
      var res = false;
      var expr = false;
      var head = true;
      var tempIndex = lastIndex;

      do {
        this.readch();

        if (this.peek == character.BACK_SLASH) {
          this.index++;
        } else if (this.peek == character.DOLLAR) {
          this.readch();

          if (this.peek == character.LEFT_BRACE) {
            this.readch();
            expr = true;
            var token = new Token(head ? Token.TEMPLATE_HEAD : Token.TEMPLATE_MIDDLE, this.code.slice(tempIndex, --this.index), lastIndex);
            head = false;
            this.index = tempIndex + 1;
            var n = character.count(token.val(), character.LINE);
            this.dealToken(token, token.content().length, n, temp);
            var lexer = new EcmascriptLexer(new EcmascriptRule(), true);
            lexer.index = this.index;
            lexer.colNum = this.colNum;
            lexer.colMax = this.colMax;
            lexer.totalLine = this.totalLine;
            lexer.parse(this.code);
            var tokenList = lexer.tokenList;

            for (var i = 0, len = tokenList.length; i < len; i++) {
              var n = character.count(token.val(), character.LINE);
              this.dealToken(tokenList[i], token.content().length, n, temp);
            }

            tempIndex = this.index = lexer.index - 1;
          }
        } else if (this.peek == character.GRAVE) {
          res = true;
          break;
        }
      } while (this.index < length);

      if (!res) {
        this.error('SyntaxError: unterminated template literal', this.code.slice(lastIndex, this.index - 1));
      }

      var token = new Token(expr ? Token.TEMPLATE_TAIL : Token.TEMPLATE, this.code.slice(tempIndex, this.index), tempIndex);
      this.index = tempIndex + 1;
      var n = character.count(token.val(), character.LINE);
      this.dealToken(token, token.content().length, n, temp);
    }
  });
  module.exports = EcmascriptLexer;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/HtmlLexer.js":
/*!********************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/HtmlLexer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var character = __webpack_require__(/*! ../util/character */ "./node_modules/homunculus/web/util/character.js");

  var Token = __webpack_require__(/*! ./HtmlToken */ "./node_modules/homunculus/web/lexer/HtmlToken.js");

  var Lexer = __webpack_require__(/*! ./Lexer */ "./node_modules/homunculus/web/lexer/Lexer.js");

  var RegMatch = __webpack_require__(/*! ./match/RegMatch */ "./node_modules/homunculus/web/lexer/match/RegMatch.js");

  var ELEM = new RegMatch(Token.ELEM, /^[a-z]\w*(?:-\w+)*/i);
  var HtmlLexer = Lexer.extend(function (rule) {
    Lexer.call(this, rule);
  }).methods({
    init: function () {
      Lexer.prototype.init.call(this);
      this.state = false; //是否在<>状态中

      this.style = false; //style标签

      this.script = false; //script标签
    },
    scan: function (temp) {
      var length = this.code.length;
      var count = 0;
      this.colNum = length ? 1 : 0;

      outer: while (this.index < length) {
        if (this.cacheLine > 0 && count >= this.cacheLine) {
          break;
        }

        if (this.state) {
          this.readch(); // />

          if (this.peek == '/') {
            if (this.code.charAt(this.index) == '>') {
              this.state = false;
              var token = new Token(Token.MARK, this.peek + '>', this.peek + '>', this.index - 1);
              this.dealToken(token, 2, 0, temp);
            } else {
              this.error('unknow html token: / ');
            }
          } else if (this.peek == '>') {
            this.state = false;
            var token = new Token(Token.MARK, this.peek, this.peek, this.index - 1);
            this.dealToken(token, 1, 0, temp);
          } else {
            for (var i = 0, matches = this.rule.matches(), len = matches.length; i < len; i++) {
              var match = matches[i];

              if (match.match(this.peek, this.code, this.index)) {
                var token = new Token(match.tokenType(), match.content(), match.val(), this.index - 1);
                var error = match.error();
                var matchLen = match.content().length;

                if (error) {
                  this.error(error, this.code.slice(this.index - matchLen, this.index));
                }

                var n = character.count(token.val(), character.LINE);
                count += n;
                this.dealToken(token, matchLen, n, temp);
                continue outer;
              }
            } //如果有未匹配的，说明规则不完整，抛出错误


            this.error('unknow token');
          }
        } else if (this.style || this.script) {
          this.dealStSc(this.style ? 'style' : 'script', temp);
          this.style = this.script = false;
        } else {
          this.readch();
          var idx = this.code.indexOf('<', this.index - 1);

          if (idx == -1) {
            idx = length;

            if (this.index && idx > this.index - 1) {
              this.addText(this.code.slice(this.index - 1, idx), temp);
              this.index = length;
            }

            return this;
          }

          if (this.index && idx > this.index - 1) {
            this.addText(this.code.slice(this.index - 1, idx), temp);
            this.readch();
          }

          var s = this.code.slice(idx, idx + 4).toLowerCase();
          var c1 = this.code.charAt(idx + 1);
          var c2 = this.code.charAt(idx + 2);

          if (s == '<!--') {
            var end = this.code.indexOf('-->', this.index + 4);

            if (end == -1) {
              end = length;
            } else {
              end += 3;
            }

            s = this.code.slice(idx, end);
            var token = new Token(Token.COMMENT, s, s, this.index - 1);
            var n = character.count(s, character.LINE);
            this.dealToken(token, s.length, n, temp);
          } //</\w
          else if (c1 == '/' && character.isLetter(c2)) {
              this.state = true;
              var token = new Token(Token.MARK, '</', '</', this.index - 1);
              this.dealToken(token, 2, 0, temp);
              this.readch(); //\w elem

              this.dealTag(temp);
            } //<\w
            else if (character.isLetter(c1)) {
                this.state = true;
                var token = new Token(Token.MARK, '<', '<', this.index - 1);
                this.dealToken(token, 1, 0, temp);
                this.readch(); //\w elem

                this.dealTag(temp);
              } else if (c1 == '!') {
                this.state = true;
                var token = new Token(Token.MARK, '<', '<', this.index - 1);
                this.dealToken(token, 1, 0, temp);
              }
        }
      }

      return this;
    },
    dealStSc: function (s, temp) {
      var reg = new RegExp('^/' + s + '\\b');

      for (var i = this.index; i < this.code.length; i++) {
        if (this.code.charAt(i) == '<') {
          if (reg.test(this.code.slice(i + 1, i + 8))) {
            var s = this.code.slice(this.index, i);
            this.addText(s, temp);
            this.index = i;
            return;
          }
        }
      }

      var s = this.code.slice(this.index);
      this.index = this.code.length;
      this.addText(s, temp);
    },
    addText: function (s, temp) {
      var token = new Token(Token.TEXT, s, s, this.index - 1);
      var n = character.count(token.val(), character.LINE);
      this.dealToken(token, s.length, n, temp);
    },
    dealTag: function (temp) {
      ELEM.match(this.peek, this.code, this.index);
      var token = new Token(ELEM.tokenType(), ELEM.content(), ELEM.val(), this.index - 1);
      var matchLen = ELEM.content().length;
      this.dealToken(token, matchLen, 0, temp);
      var s = ELEM.content().toLowerCase();

      if (s == 'style') {
        this.style = true;
      } else if (s == 'script') {
        this.script = true;
      }
    }
  });
  module.exports = HtmlLexer;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/HtmlToken.js":
/*!********************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/HtmlToken.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Token = __webpack_require__(/*! ./Token */ "./node_modules/homunculus/web/lexer/Token.js");

  var HtmlToken = Token.extend(function (type, content, val, sIndex) {
    Token.call(this, type, content, val, sIndex);
  }).statics({
    DOC: 27,
    PROPERTY: 15,
    TEXT: 25,
    MARK: 26,
    ELEM: 24
  });
  module.exports = HtmlToken;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/JSXLexer.js":
/*!*******************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/JSXLexer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var character = __webpack_require__(/*! ../util/character */ "./node_modules/homunculus/web/util/character.js");

  var JSXToken = __webpack_require__(/*! ./JSXToken */ "./node_modules/homunculus/web/lexer/JSXToken.js");

  var EcmascriptLexer = __webpack_require__(/*! ./EcmascriptLexer */ "./node_modules/homunculus/web/lexer/EcmascriptLexer.js");

  var RegMatch = __webpack_require__(/*! ./match/RegMatch */ "./node_modules/homunculus/web/lexer/match/RegMatch.js");

  var CompleteEqual = __webpack_require__(/*! ./match/CompleteEqual */ "./node_modules/homunculus/web/lexer/match/CompleteEqual.js");

  var LineSearch = __webpack_require__(/*! ./match/LineSearch */ "./node_modules/homunculus/web/lexer/match/LineSearch.js");

  var CharacterSet = __webpack_require__(/*! ./match/CharacterSet */ "./node_modules/homunculus/web/lexer/match/CharacterSet.js");

  var ELEM = new RegMatch(JSXToken.ELEM, /^[a-z]\w*(?:-\w+)*/i);
  var JSXMatch = [new CompleteEqual(JSXToken.BLANK, character.BLANK), new CompleteEqual(JSXToken.TAB, character.TAB), new CompleteEqual(JSXToken.LINE, character.ENTER + character.LINE), new CompleteEqual(JSXToken.LINE, character.ENTER), new CompleteEqual(JSXToken.LINE, character.LINE), new CompleteEqual(JSXToken.SIGN, character.DECIMAL), new LineSearch(JSXToken.STRING, '"', '"', true), new LineSearch(JSXToken.STRING, "'", "'", true), new CharacterSet(JSXToken.SIGN, '=:'), new RegMatch(JSXToken.NUMBER, /^\d+(?:\.\d*)?/), new RegMatch(JSXToken.BIND_PROPERTY, /^@[a-z]\w*/i), new RegMatch(JSXToken.PROPERTY, /^[a-z]\w*(?:-\w+)*/i)];
  var SELF_CLOSE = {
    'img': true,
    'meta': true,
    'link': true,
    'br': true,
    'basefont': true,
    'base': true,
    'col': true,
    'embed': true,
    'frame': true,
    'hr': true,
    'input': true,
    'keygen': true,
    'area': true,
    'param': true,
    'source': true,
    'track': true
  };
  var JSXLexer = EcmascriptLexer.extend(function (rule) {
    EcmascriptLexer.call(this, rule);
  }).methods({
    init: function () {
      EcmascriptLexer.prototype.init.call(this);
      this.html = false; //目前是否为解析html状态

      this.state = false; //是否在<>中

      this.hStack = []; //当mark开始时++，减少时--，以此得知jsx部分结束回归js

      this.jStack = []; //当{开始时++，}减少时--，以此得知js部分结束回归jsx

      this.aStack = []; //html和js互相递归时，记录当前层是否在attr状态中

      this.cStack = []; //html和js互相递归时，记录当前jsx标签是否是自闭合

      this.selfClose = false; //当前jsx标签是否是自闭合
    },
    scan: function (temp) {
      var perlReg = this.rule.perlReg();
      var length = this.code.length;
      var count = 0;
      this.colNum = length ? 1 : 0;

      outer: while (this.index < length) {
        if (this.cacheLine > 0 && count >= this.cacheLine) {
          break;
        }

        this.readch(); //在解析html中

        if (this.html) {
          if (this.state) {
            // />
            if (this.peek == '/') {
              if (this.code.charAt(this.index) == '>') {
                this.state = false; // />结束时，html深度--，如到0，说明html状态结束

                this.hStack[this.hStack.length - 1]--;

                if (this.hStack[this.hStack.length - 1] == 0) {
                  this.hStack.pop();
                  this.html = false;
                  this.isReg = false;
                }

                var token = new JSXToken(JSXToken.MARK, this.peek + '>', this.peek + '>', this.index - 1);
                this.dealToken(token, 2, 0, temp);
              } else {
                this.error('unknow jsx token: / ');
              }
            } //>
            else if (this.peek == '>') {
                if (this.selfClose) {
                  this.error('self-close tag needs />');
                }

                this.state = false; //>结束时，html深度若为0，说明html状态结束，或者栈最后一个计数器为0，也结束

                if (!this.hStack.length || !this.hStack[this.hStack.length - 1]) {
                  this.html = false;
                  this.isReg = false;

                  if (this.hStack.length) {
                    this.hStack.pop();
                  }
                }

                var token = new JSXToken(JSXToken.MARK, this.peek, this.peek, this.index - 1);
                this.dealToken(token, 1, 0, temp);
              } //{递归进入js状态
              else if (this.peek == '{') {
                  this.html = false;
                  this.braceState = false;
                  this.jStack.push(1);
                  this.cStack.push(this.selfClose);
                  this.aStack.push(this.state);
                  var token = new JSXToken(JSXToken.SIGN, this.peek, this.peek);
                  this.dealToken(token, 1, 0, temp);
                  this.stateBrace(this.peek);
                } else {
                  for (var i = 0, len = JSXMatch.length; i < len; i++) {
                    var match = JSXMatch[i];

                    if (match.match(this.peek, this.code, this.index)) {
                      var token = new JSXToken(match.tokenType(), match.content(), match.val(), this.index - 1);
                      var error = match.error();

                      if (error) {
                        this.error(error, this.code.slice(this.index - matchLen, this.index));
                      }

                      var matchLen = match.content().length;
                      var n = character.count(token.val(), character.LINE);
                      count += n;
                      this.dealToken(token, matchLen, n, temp);
                      continue outer;
                    }
                  } //如果有未匹配的，说明规则不完整，抛出错误


                  this.error('unknow jsx token');
                }
          } //<>外面
          else {
              //<之前的text部分或{}js部分
              var idx = this.code.indexOf('<', this.index - 1);
              var idx2 = this.code.indexOf('{', this.index - 1); //找不到<和{

              if (idx == -1 && idx2 == -1) {
                idx = length;

                if (idx > this.index - 1) {
                  this.addText(this.code.slice(this.index - 1, idx), temp);
                  this.index = length;
                }

                return this;
              } //找到<


              if (idx2 == -1 || idx2 > idx) {
                var c1 = this.code.charAt(idx + 1);
                var c2 = this.code.charAt(idx + 2); //</\w

                if (c1 == '/' && character.isLetter(c2)) {
                  if (idx > this.index - 1) {
                    this.addText(this.code.slice(this.index - 1, idx), temp);
                    this.index = idx;
                  }

                  this.state = true;
                  this.hStack[this.hStack.length - 1]--; //</

                  var token = new JSXToken(JSXToken.MARK, '</', '</', this.index - 1);
                  this.dealToken(token, 2, 0, temp);
                  this.index = idx + 2;
                  this.readch(); //\w elem

                  this.dealTag(temp, true);
                } //<\w
                else if (character.isLetter(c1)) {
                    if (idx > this.index - 1) {
                      this.addText(this.code.slice(this.index - 1, idx), temp);
                      this.index = idx;
                    }

                    this.state = true;
                    this.hStack[this.hStack.length - 1]++; //<

                    var token = new JSXToken(JSXToken.MARK, '<', '<', this.index - 1);
                    this.dealToken(token, 1, 0, temp);
                    this.index = idx + 1;
                    this.readch(); //\w elem

                    this.dealTag(temp);
                  } else {
                    this.error();
                  }
              } //{block
              else {
                  if (idx2 > this.index - 1) {
                    this.addText(this.code.slice(this.index - 1, idx2), temp);
                    this.readch();
                  }

                  this.jStack.push(1);
                  this.html = false;
                  this.braceState = false;
                  var token = new JSXToken(JSXToken.SIGN, this.peek, this.peek, this.index - 1);
                  this.dealToken(token, 1, 0, temp);
                  this.stateBrace(this.peek);
                }
            }
        } //<\w开始则jsx，<作为mark开头和识别正则/开头上下文语意相同
        else if (this.isReg == JSXLexer.IS_REG && this.peek == '<' && character.isLetter(this.code.charAt(this.index))) {
            //新的jsx开始，html深度++，html状态开始，同时为非text状态
            this.hStack.push(1);
            this.html = true;
            this.state = true; //<

            var token = new JSXToken(JSXToken.MARK, this.peek, this.peek, this.index - 1);
            this.dealToken(token, 1, 0, temp);
            this.readch(); //\w elem

            this.dealTag(temp);
            this.braceState = false;
          } //perl风格正则
          else if (perlReg && this.isReg == JSXLexer.IS_REG && this.peek == character.SLASH && !{
              '/': true,
              '*': true
            }[this.code.charAt(this.index)]) {
              this.dealReg(temp, length);
              this.isReg = JSXLexer.NOT_REG;
            } //template特殊语法
            else if (this.peek == character.GRAVE) {
                this.dealGrave(temp, length);
                this.isReg = EcmascriptLexer.NOT_REG;
              } //递归解析template中的expr时结束跳出
              else if (this.inTemplate && this.peek == '}') {
                  return this;
                } //依次遍历匹配规则，命中则继续
                else {
                    for (var i = 0, matches = this.rule.matches(), len = matches.length; i < len; i++) {
                      var match = matches[i];

                      if (match.match(this.peek, this.code, this.index)) {
                        var token = new JSXToken(match.tokenType(), match.content(), match.val(), this.index - 1);
                        var error = match.error();
                        var matchLen = match.content().length;

                        if (error) {
                          this.error(error, this.code.slice(this.index - matchLen, this.index));
                        }

                        if (token.type() == JSXToken.ID && this.rule.keyWords().hasOwnProperty(token.content())) {
                          token.type(JSXToken.KEYWORD);
                        } //回调可自定义处理匹配的token


                        if (match.callback) {
                          match.callback.call(match, token, this.tokenList);
                        } //回调特殊处理忽略掉此次匹配


                        if (match.cancel) {
                          token.cancel();
                          continue;
                        }

                        var n = character.count(token.val(), character.LINE);
                        count += n; //处理token

                        this.dealToken(token, matchLen, n, temp); //支持perl正则需判断关键字、圆括号对除号语义的影响

                        if (perlReg && match.perlReg() != EcmascriptLexer.IGNORE) {
                          this.stateReg(match);
                        } //处理{


                        this.stateBrace(match.content(), token.type());
                        this.xBrace(match.content());
                        continue outer;
                      }
                    } //如果有未匹配的，说明规则不完整，抛出错误


                    this.error('unknow token');
                  }
      }

      return this;
    },
    addText: function (s, temp) {
      var token = new JSXToken(JSXToken.TEXT, s, s, this.index - 1);
      var n = character.count(token.val(), character.LINE);
      this.dealToken(token, s.length, n, temp);
    },
    dealTag: function (temp, end) {
      ELEM.match(this.peek, this.code, this.index);
      var token = new JSXToken(ELEM.tokenType(), ELEM.content(), ELEM.val(), this.index - 1);
      var matchLen = ELEM.content().length;
      this.dealToken(token, matchLen, 0, temp);

      if (!end) {
        //自闭合没有.和:
        if (SELF_CLOSE.hasOwnProperty(token.content().toLowerCase())) {
          this.selfClose = true;
          return;
        }

        this.selfClose = false;
      }

      this.selfClose = false;
      var c = this.code.charAt(this.index);

      if (c == '.') {
        while (true) {
          this.readch();
          token = new JSXToken(JSXToken.SIGN, this.peek, this.peek, this.index - 1);
          this.dealToken(token, 1, 0, temp);
          this.readch();

          if (!character.isLetter(this.peek)) {
            this.error('missing jsx identifier');
          }

          ELEM.match(this.peek, this.code, this.index);
          token = new JSXToken(ELEM.tokenType(), ELEM.content(), ELEM.val(), this.index - 1);
          matchLen = ELEM.content().length;
          this.dealToken(token, matchLen, 0, temp);
          c = this.code.charAt(this.index);

          if (c != '.') {
            break;
          }
        }
      } else if (c == ':') {
        while (true) {
          this.readch();
          token = new JSXToken(JSXToken.SIGN, this.peek, this.peek, this.index - 1);
          this.dealToken(token, 1, 0, temp);
          this.readch();

          if (!character.isLetter(this.peek)) {
            this.error('missing jsx identifier');
          }

          ELEM.match(this.peek, this.code, this.index);
          token = new JSXToken(ELEM.tokenType(), ELEM.content(), ELEM.val(), this.index - 1);
          matchLen = ELEM.content().length;
          this.dealToken(token, matchLen, 0, temp);
          c = this.code.charAt(this.index);

          if (c != ':') {
            break;
          }
        }
      }
    },
    xBrace: function (content) {
      if (content == '{') {
        if (this.jStack.length) {
          this.jStack[this.jStack.length - 1]++;
        }
      } else if (content == '}') {
        if (this.jStack.length) {
          this.jStack[this.jStack.length - 1]--;

          if (this.jStack[this.jStack.length - 1] == 0) {
            this.html = true;
            this.selfClose = this.cStack.pop();
            this.state = this.aStack.pop();
            this.jStack.pop();
          }
        }
      }
    }
  }).statics({
    SELF_CLOSE: SELF_CLOSE
  });
  module.exports = JSXLexer;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/JSXToken.js":
/*!*******************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/JSXToken.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Token = __webpack_require__(/*! ./Token */ "./node_modules/homunculus/web/lexer/Token.js");

  var JSXToken = Token.extend(function (type, content, val, sIndex) {
    Token.call(this, type, content, val, sIndex);
  }).statics({
    MARK: 26,
    ELEM: 24,
    PROPERTY: 15,
    TEXT: 25,
    BIND_PROPERTY: 28
  });
  module.exports = JSXToken;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/Lexer.js":
/*!****************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/Lexer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Class = __webpack_require__(/*! ../util/Class */ "./node_modules/homunculus/web/util/Class.js");

  var character = __webpack_require__(/*! ../util/character */ "./node_modules/homunculus/web/util/character.js");

  var Token = __webpack_require__(/*! ./Token */ "./node_modules/homunculus/web/lexer/Token.js");

  var walk = __webpack_require__(/*! ../util/walk */ "./node_modules/homunculus/web/util/walk.js");

  var Lexer = Class(function (rule) {
    this.rule = rule; //当前语法规则

    this.init();
  }).methods({
    init: function () {
      this.code = ''; //要解析的代码

      this.peek = ''; //向前看字符

      this.index = 0; //向前看字符字符索引

      this.isReg = Lexer.IS_REG; //当前/是否是perl风格正则表达式

      this.tokenList = []; //结果的token列表

      this.parentheseState = false; //(开始时标记之前终结符是否为if/for/while等关键字

      this.parentheseStack = []; //圆括号深度记录当前是否为if/for/while等语句内部

      this.braceState = false; //{是object还是block

      this.braceStack = []; //深度记录

      this.cacheLine = 0; //行缓存值

      this.totalLine = 1; //总行数

      this.colNum = 0; //列

      this.colMax = 0; //最大列数

      this.isReturn = false; //当出现return，后面有换行则自动插入;，影响{的语意

      this.last = null;
    },
    parse: function (code) {
      this.code = code || '';
      var temp = [];
      this.scan(temp);
      return temp;
    },
    parseOn: function () {
      var temp = [];
      this.scan(temp);
      return temp;
    },
    tokens: function (plainObject) {
      if (plainObject) {
        return walk.plainObject(this.tokenList);
      }

      return this.tokenList;
    },
    scan: function (temp) {
      var perlReg = this.rule.perlReg();
      var length = this.code.length;
      var count = 0;
      this.colNum = length ? 1 : 0;

      outer: while (this.index < length) {
        if (this.cacheLine > 0 && count >= this.cacheLine) {
          break;
        }

        this.readch(); //perl风格正则

        if (perlReg && this.isReg == Lexer.IS_REG && this.peek == character.SLASH && !{
          '/': true,
          '*': true
        }[this.code.charAt(this.index)]) {
          this.dealReg(temp, length);
          this.isReg = Lexer.NOT_REG;
        } //依次遍历匹配规则，命中则继续
        else {
            for (var i = 0, matches = this.rule.matches(), len = matches.length; i < len; i++) {
              var match = matches[i];

              if (match.match(this.peek, this.code, this.index)) {
                var token = new Token(match.tokenType(), match.content(), match.val(), this.index - 1);
                var error = match.error();
                var matchLen = match.content().length;

                if (error) {
                  this.error(error, this.code.slice(this.index - matchLen, this.index));
                }

                if (token.type() == Token.ID && this.rule.keyWords().hasOwnProperty(token.content())) {
                  token.type(Token.KEYWORD);
                } //回调可自定义处理匹配的token


                if (match.callback) {
                  match.callback.call(match, token, this.tokenList);
                } //回调特殊处理忽略掉此次匹配


                if (match.cancel) {
                  token.cancel();
                  continue;
                }

                var n = character.count(token.val(), character.LINE);
                count += n; //处理token

                this.dealToken(token, matchLen, n, temp); //支持perl正则需判断关键字、圆括号对除号语义的影响

                if (perlReg && match.perlReg() != Lexer.IGNORE) {
                  this.stateReg(match);
                } //处理{


                this.stateBrace(match.content(), token.type());
                continue outer;
              }
            } //如果有未匹配的，说明规则不完整，抛出错误


            this.error('unknow token');
          }
      }

      return this;
    },
    dealToken: function (token, matchLen, count, temp) {
      if (this.last) {
        token.prev(this.last);
        this.last.next(token);
      }

      this.last = token;
      temp.push(token);
      this.tokenList.push(token);
      this.index += matchLen - 1;
      token.line(this.totalLine);
      token.col(this.colNum);
      this.totalLine += count;

      if (count) {
        var j = token.content().indexOf(character.LINE);
        var k = token.content().lastIndexOf(character.LINE);
        this.colMax = Math.max(this.colMax, this.colNum + j);
        this.colNum = token.content().length - k;
      } else {
        this.colNum += matchLen;
      }

      this.colMax = Math.max(this.colMax, this.colNum);
    },
    stateReg: function (match) {
      if (match.perlReg() == Lexer.SPECIAL) {
        this.isReg = match.special();
      } else {
        this.isReg = match.perlReg();
      }

      if (this.peek == character.LEFT_PARENTHESE) {
        this.parentheseStack.push(this.parentheseState);
        this.parentheseState = false;
      } else if (this.peek == character.RIGHT_PARENTHESE) {
        this.isReg = this.parentheseStack.pop() ? Lexer.IS_REG : Lexer.NOT_REG;
      } else {
        this.parentheseState = match.parenthese();
      }
    },
    stateBrace: function (content, type) {
      if (content == '{') {
        if (this.isReturn) {
          this.braceState = true;
        }

        this.braceStack.push(this.braceState);
        this.isReturn = false;
      } else if (content == '}') {
        this.braceState = this.braceStack.pop();

        if (this.braceState) {
          this.isReg = false;
        }

        this.isReturn = false;
      } else if (type == Token.SIGN) {
        //反向设置，符号大多出现expr中，后跟{表示object；某些不能跟；以下（换行）跟表示block
        this.braceState = !{
          '--': true,
          '++': true,
          '=>': true,
          ';': true,
          ')': true
        }.hasOwnProperty(content);
        this.isReturn = false;
      } else if (type == Token.KEYWORD) {
        this.braceState = {
          'instanceof': true,
          'delete': true,
          'void': true,
          'typeof': true,
          'return': true
        }.hasOwnProperty(content);
        this.isReturn = content == 'return';
      } else if ([Token.BLANK, Token.TAB, Token.LINE, Token.COMMENT].indexOf(type) == -1) {
        this.braceState = false;
      } else if (type == Token.LINE || type == Token.COMMENT && content.indexOf('\n') > -1) {
        if (this.isReturn) {
          this.braceState = false;
          this.isReturn = false;
        }
      }
    },
    dealReg: function (temp, length) {
      var lastIndex = this.index - 1;
      var res = false;

      outer: do {
        this.readch();

        if (this.peek == character.LINE) {
          this.error('SyntaxError: unterminated regular expression literal ' + this.peek, this.code.slice(lastIndex, this.index));
          break;
        } else if (this.peek == character.BACK_SLASH) {
          this.index++;
        } else if (this.peek == character.LEFT_BRACKET) {
          do {
            this.readch();

            if (this.peek == character.LINE) {
              this.error('SyntaxError: unterminated regular expression literal ' + this.peek, this.code.slice(lastIndex, this.index));
              break outer;
            } else if (this.peek == character.BACK_SLASH) {
              this.index++;
            } else if (this.peek == character.RIGHT_BRACKET) {
              continue outer;
            }
          } while (this.index < length);
        } else if (this.peek == character.SLASH) {
          res = true;
          var hash = {};
          var flag = {
            'g': true,
            'i': true,
            'm': true,
            'u': true,
            'y': true
          }; //正则的flag中有gimuy5种，大小写敏感且不能重复

          do {
            this.readch();

            if (character.isLetter(this.peek)) {
              if (hash.hasOwnProperty(this.peek) || !flag.hasOwnProperty(this.peek)) {
                this.error('SyntaxError: invalid regular expression flag ' + this.peek, this.code.slice(lastIndex, this.index));
                break outer;
              }

              hash[this.peek] = true;
            } else {
              break outer;
            }
          } while (this.index <= length);
        }
      } while (this.index < length);

      if (!res) {
        this.error('SyntaxError: unterminated regular expression literal', this.code.slice(lastIndex, this.index - 1));
      }

      var token = new Token(Token.REG, this.code.slice(lastIndex, --this.index), lastIndex);
      this.index = lastIndex + 1;
      this.dealToken(token, token.content().length, 0, temp);
    },
    readch: function () {
      this.peek = this.code.charAt(this.index++);
    },
    cache: function (i) {
      if (!character.isUndefined(i) && i !== null) {
        this.cacheLine = i;
      }

      return this.cacheLine;
    },
    finish: function () {
      return this.index >= this.code.length;
    },
    line: function () {
      return this.totalLine;
    },
    col: function () {
      return this.colMax;
    },
    error: function (s, str) {
      console.log(arguments.callee.caller);

      if (character.isUndefined(str)) {
        str = this.code.substr(this.index - 1, 20);
      }

      if (Lexer.mode() === Lexer.STRICT) {
        throw new Error(s + ', line ' + this.line() + ' col ' + this.colNum + '\n' + str);
      } else if (Lexer.mode() === Lexer.LOOSE && typeof console !== void 0) {
        console.warn(s + ', line ' + this.line() + ' col ' + this.colNum + '\n' + str);
      }

      return this;
    }
  }).statics({
    IGNORE: 0,
    IS_REG: 1,
    NOT_REG: 2,
    SPECIAL: 3,
    STRICT: 0,
    LOOSE: 1,
    mode: function (i) {
      if (!character.isUndefined(i)) {
        cmode = i;
      }

      return cmode;
    }
  });
  var cmode = Lexer.STRICT;
  module.exports = Lexer;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/Token.js":
/*!****************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/Token.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Class = __webpack_require__(/*! ../util/Class */ "./node_modules/homunculus/web/util/Class.js");

  var character = __webpack_require__(/*! ../util/character */ "./node_modules/homunculus/web/util/character.js");

  var tid = 0;
  var types;
  var Token = Class(function (type, content, val, sIndex) {
    this.t = type; //token类型

    this.c = content; //token的字面内容，string包括头尾的引号

    this.pr = null;
    this.ne = null;
    this.li = -1;
    this.co = -1;

    if (character.isNumber(val)) {
      sIndex = val;
      val = content;
    } else if (character.isUndefined(val)) {
      val = content;
      sIndex = -1;
    }

    this.v = val; //token的值，一般情况下等于content，特殊如string情况下值是不加头尾的引号

    this.id = tid++; //token的索引

    this.si = sIndex; //token在源码字符串中的索引
  }).methods({
    type: function (t) {
      if (t !== void 0) {
        this.t = t;
      }

      return this.t;
    },
    content: function (c) {
      if (c !== void 0) {
        this.c = c;
      }

      return this.c;
    },
    val: function (v) {
      if (v !== void 0) {
        this.v = v;
      }

      return this.v;
    },
    tag: function (t) {
      if (t !== void 0) {
        this.t = t;
      }

      return Token.type(this.t);
    },
    tid: function (id) {
      if (id !== void 0) {
        this.id = id;
      }

      return this.id;
    },
    sIndex: function (si) {
      if (si !== void 0) {
        this.si = si;
      }

      return this.si;
    },
    prev: function (t) {
      if (t !== void 0) {
        this.pr = t;
      }

      return this.pr;
    },
    next: function (t) {
      if (t !== void 0) {
        this.ne = t;
      }

      return this.ne;
    },
    cancel: function () {
      tid--;
    },
    isVirtual: function () {
      return this.t == Token.VIRTUAL;
    },
    line: function (i) {
      if (i !== undefined) {
        this.li = i;
      }

      return this.li;
    },
    col: function (i) {
      if (i !== undefined) {
        this.co = i;
      }

      return this.co;
    }
  }).statics({
    //公用
    IGNORE: -2,
    VIRTUAL: -1,
    OTHER: 0,
    BLANK: 1,
    TAB: 2,
    LINE: 3,
    NUMBER: 4,
    ID: 5,
    COMMENT: 6,
    STRING: 7,
    SIGN: 8,
    KEYWORD: 10,
    //js部分
    REG: 9,
    //es6
    TEMPLATE: 13,
    //仅java
    ANNOT: 11,
    //基本无用
    ENTER: 14,
    TEMPLATE_HEAD: 29,
    TEMPLATE_MIDDLE: 30,
    TEMPLATE_TAIL: 31,
    type: function (tag) {
      var self = this;

      if (character.isUndefined(types)) {
        types = [];
        Object.keys(self).forEach(function (o) {
          if (typeof self[o] == 'number') {
            types[self[o]] = o;
          }
        });
      }

      return types[tag];
    },
    reset: function () {
      tid = 0;
    }
  });
  module.exports = Token;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/match/CharacterSet.js":
/*!*****************************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/match/CharacterSet.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Match = __webpack_require__(/*! ./Match */ "./node_modules/homunculus/web/lexer/match/Match.js");

  var character = __webpack_require__(/*! ../../util/character */ "./node_modules/homunculus/web/util/character.js");

  var CharacterSet = Match.extend(function (type, str, setPReg) {
    Match.call(this, type, setPReg);
    this.str = str;
  }).methods({
    match: function (c, code, index) {
      var isIn = this.str.indexOf(c) > -1;

      if (isIn) {
        this.result = c;
      }

      return isIn;
    }
  });
  module.exports = CharacterSet;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/match/CompleteEqual.js":
/*!******************************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/match/CompleteEqual.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Match = __webpack_require__(/*! ./Match */ "./node_modules/homunculus/web/lexer/match/Match.js");

  var character = __webpack_require__(/*! ../../util/character */ "./node_modules/homunculus/web/util/character.js");

  var CompleteEqual = Match.extend(function (type, result, setPReg, ignoreCase) {
    Match.call(this, type, setPReg);
    this.result = result;
    this.ignoreCase = ignoreCase;
    this.temp = null;
  }).methods({
    match: function (c, code, index) {
      this.temp = code.substr(--index, this.result.length);
      return this.ignoreCase ? this.temp.toLowerCase() == this.result.toLowerCase() : this.temp == this.result;
    },
    content: function () {
      return this.temp;
    }
  });
  module.exports = CompleteEqual;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/match/LineParse.js":
/*!**************************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/match/LineParse.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Match = __webpack_require__(/*! ./Match */ "./node_modules/homunculus/web/lexer/match/Match.js");

  var Token = __webpack_require__(/*! ../Token */ "./node_modules/homunculus/web/lexer/Token.js");

  var character = __webpack_require__(/*! ../../util/character */ "./node_modules/homunculus/web/util/character.js");

  var LineParse = Match.extend(function (type, begin, end, mutiline, setPReg) {
    if (character.isUndefined(mutiline)) {
      mutiline = false;
    }

    Match.call(this, type, setPReg);
    this.begin = begin;
    this.end = end;
    this.msg = null;
    this.mutiline = mutiline;
  }).methods({
    match: function (c, code, index) {
      this.msg = null;

      if (this.begin == code.charAt(index - 1)) {
        var len = code.length,
            lastIndex = index - 1,
            res = false;

        while (index < len) {
          var c = code.charAt(index++); //转义

          if (c == character.BACK_SLASH) {
            if (code.charAt(index++) == character.ENTER) {
              index++;
            }
          } else if (c == character.LINE && !this.mutiline) {
            break;
          } else if (c == this.end) {
            res = true;
            break;
          }
        }

        if (!res) {
          this.msg = 'SyntaxError: unterminated ' + Token.type(this.type).toLowerCase() + ' literal';
        }

        this.result = code.slice(lastIndex, index);
        return true;
      }

      return false;
    },
    error: function () {
      return this.msg;
    },
    val: function () {
      return this.content().slice(this.begin.length, -this.end.length);
    }
  });
  module.exports = LineParse;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/match/LineSearch.js":
/*!***************************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/match/LineSearch.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Match = __webpack_require__(/*! ./Match */ "./node_modules/homunculus/web/lexer/match/Match.js");

  var Token = __webpack_require__(/*! ../Token */ "./node_modules/homunculus/web/lexer/Token.js");

  var character = __webpack_require__(/*! ../../util/character */ "./node_modules/homunculus/web/util/character.js");

  var LineSearch = Match.extend(function (type, begin, end, contain, setPReg) {
    if (character.isUndefined(contain)) {
      contain = false;
    }

    Match.call(this, type, setPReg);
    this.begin = begin;
    this.end = end;
    this.contain = contain;
    this.msg = null;
  }).methods({
    match: function (c, code, index) {
      this.msg = null;

      if (this.begin == code.substr(--index, this.begin.length)) {
        //支持多个end匹配时不支持包含选项
        if (!this.contain && Array.isArray(this.end)) {
          for (var j = 0, len = this.end.length; j < len; j++) {
            var i = code.indexOf(this.end[j], index + this.begin.length);

            if (i != -1) {
              this.result = code.slice(index, i);
              return true;
            }
          } //都不匹配时到末尾


          this.result = code.slice(index);
          return true;
        } else {
          var i = code.indexOf(this.end, index + this.begin.length);

          if (i == -1) {
            if (this.contain) {
              this.msg = 'SyntaxError: unterminated ' + Token.type(this.type).toLowerCase();
            }

            i = code.length;
          } else if (this.contain) {
            i += this.end.length;
          }

          this.result = code.slice(index, i);
          return true;
        }
      }

      return false;
    },
    error: function () {
      return this.msg;
    }
  });
  module.exports = LineSearch;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/match/Match.js":
/*!**********************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/match/Match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Class = __webpack_require__(/*! ../../util/Class */ "./node_modules/homunculus/web/util/Class.js");

  var character = __webpack_require__(/*! ../../util/character */ "./node_modules/homunculus/web/util/character.js");

  var Lexer = __webpack_require__(/*! ../Lexer */ "./node_modules/homunculus/web/lexer/Lexer.js");

  module.exports = Class(function (type, setPReg, special, parenthese) {
    this.type = type;

    if (character.isUndefined(setPReg)) {
      setPReg = Lexer.IGNORE;
    }

    this.setPReg = setPReg;
    this.result = null; //忽略0，是1，否2，特殊3

    if (setPReg) {
      if (character.isUndefined(special)) {
        special = function () {
          return Lexer.IGNORE;
        };
      }

      if (character.isUndefined(parenthese)) {
        parenthese = function () {
          return false;
        };
      }
    }

    this.special = special;
    this.parenthese = parenthese;
  }).methods({
    tokenType: function () {
      return this.type;
    },
    perlReg: function () {
      return this.setPReg;
    },
    val: function () {
      return this.content();
    },
    content: function () {
      return this.result;
    },
    match: function (c, code, index) {
      //需被实现
      throw new Error('match needs to be implement');
    },
    error: function () {
      return false;
    }
  });
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/match/RegMatch.js":
/*!*************************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/match/RegMatch.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Match = __webpack_require__(/*! ./Match */ "./node_modules/homunculus/web/lexer/match/Match.js");

  var RegMatch = Match.extend(function (type, reg, valid, setPReg, special, parenthese) {
    if (typeof valid == 'number') {
      parenthese = special;
      special = setPReg;
      setPReg = valid;
      valid = null;
    }

    Match.call(this, type, setPReg, special, parenthese);
    this.reg = reg;
    this.valid = valid;
  }).methods({
    match: function (c, code, index) {
      var self = this,
          res = self.reg.exec(code.slice(index - 1));
      self.msg = null;

      if (res) {
        self.result = res[0];

        if (self.valid) {
          for (var i = 0, keys = Object.keys(self.valid), len = keys.length; i < len; i++) {
            if (self.valid[keys[i]].test(self.result)) {
              self.msg = keys[i];
              break;
            }
          }
        }

        return true;
      }

      return false;
    },
    error: function () {
      return this.msg;
    }
  });
  module.exports = RegMatch;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/rule/CRule.js":
/*!*********************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/rule/CRule.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Rule = __webpack_require__(/*! ./Rule */ "./node_modules/homunculus/web/lexer/rule/Rule.js");

  var LineSearch = __webpack_require__(/*! ../match/LineSearch */ "./node_modules/homunculus/web/lexer/match/LineSearch.js");

  var RegMatch = __webpack_require__(/*! ../match/RegMatch */ "./node_modules/homunculus/web/lexer/match/RegMatch.js");

  var LineParse = __webpack_require__(/*! ../match/LineParse */ "./node_modules/homunculus/web/lexer/match/LineParse.js");

  var CompleteEqual = __webpack_require__(/*! ../match/CompleteEqual */ "./node_modules/homunculus/web/lexer/match/CompleteEqual.js");

  var Token = __webpack_require__(/*! ../Token */ "./node_modules/homunculus/web/lexer/Token.js");

  var CRule = Rule.extend(function () {
    var self = this;
    Rule.call(self, CRule.KEYWORDS);
    self.addMatch(new LineSearch(Token.COMMENT, '//', '\n'));
    self.addMatch(new LineSearch(Token.COMMENT, '/*', '*/', true));
    self.addMatch(new LineParse(Token.STRING, '"', '"'));
    self.addMatch(new LineParse(Token.STRING, "'", "'"));
    self.addMatch(new RegMatch(Token.ID, /^[a-zA-Z_]\w*/));
    self.addMatch(new RegMatch(Token.HEAD, /^#\w+/));
    ['~', '!', '%', '^', '&&', '&', '*', '(', ')', '--', '-', '++', '+', '===', '==', '=', '!==', '!=', '[', ']', '{', '}', '||', '|', '\\', '<<<', '>>>', '<<', '>>', '<', '>', '>=', '<=', ',', '...', '.', '?:', '?', ':', ';', '/'].forEach(function (o) {
      self.addMatch(new CompleteEqual(Token.SIGN, o));
    });
  }).statics({
    KEYWORDS: 'if else for break case continue function true false switch default do while int float double long const_cast private short char return void static null whcar_t volatile  uuid explicit extern class const __finally __exception __try virtual using signed namespace new public protected __declspec delete unsigned friend goto inline mutable deprecated dllexport dllimport dynamic_cast enum union bool naked typeid noinline noreturn nothrow register this reinterpret_cast selectany sizeof static_cast struct template thread throw try typedef typename'.split(' ')
  });
  module.exports = CRule;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/rule/CssRule.js":
/*!***********************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/rule/CssRule.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Rule = __webpack_require__(/*! ./Rule */ "./node_modules/homunculus/web/lexer/rule/Rule.js");

  var LineSearch = __webpack_require__(/*! ../match/LineSearch */ "./node_modules/homunculus/web/lexer/match/LineSearch.js");

  var LineParse = __webpack_require__(/*! ../match/LineParse */ "./node_modules/homunculus/web/lexer/match/LineParse.js");

  var CompleteEqual = __webpack_require__(/*! ../match/CompleteEqual */ "./node_modules/homunculus/web/lexer/match/CompleteEqual.js");

  var CharacterSet = __webpack_require__(/*! ../match/CharacterSet */ "./node_modules/homunculus/web/lexer/match/CharacterSet.js");

  var RegMatch = __webpack_require__(/*! ../match/RegMatch */ "./node_modules/homunculus/web/lexer/match/RegMatch.js");

  var Token = __webpack_require__(/*! ../CssToken */ "./node_modules/homunculus/web/lexer/CssToken.js");

  var character = __webpack_require__(/*! ../../util/character */ "./node_modules/homunculus/web/util/character.js");

  var CssRule = Rule.extend(function () {
    var self = this;
    Rule.call(self, CssRule.KEYWORDS);
    self.vl = {};
    CssRule.VALUES.forEach(function (o) {
      self.vl[o] = true;
    });
    self.cl = {};
    CssRule.COLORS.forEach(function (o) {
      self.cl[o] = true;
    });
    self.addMatch(new CompleteEqual(Token.BLANK, character.BLANK));
    self.addMatch(new CompleteEqual(Token.TAB, character.TAB));
    self.addMatch(new CompleteEqual(Token.LINE, character.ENTER + character.LINE));
    self.addMatch(new CompleteEqual(Token.LINE, character.ENTER));
    self.addMatch(new CompleteEqual(Token.LINE, character.LINE));
    self.addMatch(new LineSearch(Token.COMMENT, '//', [character.ENTER + character.LINE, character.ENTER, character.LINE]));
    self.addMatch(new LineSearch(Token.COMMENT, '/*', '*/', true));
    self.addMatch(new LineParse(Token.STRING, '"', '"', false));
    self.addMatch(new LineParse(Token.STRING, "'", "'", false));
    self.addMatch(new RegMatch(Token.NUMBER, /^[+-]?\d+\.?\d*/i));
    self.addMatch(new RegMatch(Token.NUMBER, /^[+-]?\.\d+/i));
    self.addMatch(new CompleteEqual(Token.UNITS, '%', null, true));
    self.addMatch(new CompleteEqual(Token.HACK, '\\9\\0'));
    self.addMatch(new CompleteEqual(Token.HACK, '\\0/'));
    self.addMatch(new CompleteEqual(Token.HACK, '\\0'));
    self.addMatch(new CompleteEqual(Token.HACK, '\\9'));
    self.addMatch(new CompleteEqual(Token.HACK, '\\,'));
    self.addMatch(new CompleteEqual(Token.HACK, '-vx-'), null, true);
    self.addMatch(new CompleteEqual(Token.HACK, '-hp-'), null, true);
    self.addMatch(new CompleteEqual(Token.HACK, '-khtml-'), null, true);
    self.addMatch(new CompleteEqual(Token.HACK, 'mso-'), null, true);
    self.addMatch(new CompleteEqual(Token.HACK, '-prince-'), null, true);
    self.addMatch(new CompleteEqual(Token.HACK, '-rim-'), null, true);
    self.addMatch(new CompleteEqual(Token.HACK, '-ro-'), null, true);
    self.addMatch(new CompleteEqual(Token.HACK, '-tc-'), null, true);
    self.addMatch(new CompleteEqual(Token.HACK, '-wap-'), null, true);
    self.addMatch(new CompleteEqual(Token.HACK, '-apple-'), null, true);
    self.addMatch(new CompleteEqual(Token.HACK, '-atsc-'), null, true);
    self.addMatch(new CompleteEqual(Token.HACK, '-ah-'), null, true);
    self.addMatch(new CompleteEqual(Token.HACK, '-moz-'), null, true);
    self.addMatch(new CompleteEqual(Token.HACK, '-webkit-'), null, true);
    self.addMatch(new CompleteEqual(Token.HACK, '-ms-'), null, true);
    self.addMatch(new CompleteEqual(Token.HACK, '-o-'), null, true);
    self.addMatch(new RegMatch(Token.COLOR, /^#[\da-f]{3,6}/i));
    self.addMatch(new RegMatch(Token.SELECTOR, /^\.[a-z_][\w_\-]*/i));
    self.addMatch(new RegMatch(Token.SELECTOR, /^#\w[\w\-]*/i));
    self.addMatch(new CompleteEqual(Token.SELECTOR, '&'));
    self.addMatch(new RegMatch(Token.VARS, /^var-[\w\-]+/i));
    self.addMatch(new RegMatch(Token.VARS, /^--[\w\-]+/i));
    self.addMatch(new CompleteEqual(Token.KEYWORD, 'min--moz-device-pixel-ratio'));
    self.addMatch(new CompleteEqual(Token.KEYWORD, 'max--moz-device-pixel-ratio'));
    self.addMatch(new RegMatch(Token.ID, /^[a-z][\w\-]*/i));
    self.addMatch(new RegMatch(Token.STRING, /^(\\[a-z\d]{4})+/i));
    self.addMatch(new CompleteEqual(Token.IMPORTANT, '!important', null, true));
    self.addMatch(new RegMatch(Token.HACK, /^![a-z]+/i));
    self.addMatch(new RegMatch(Token.PSEUDO, /^::?(?:-(?:moz|webkit|ms|o)-)?[a-z]+(?:-[a-z]+)*/i));
    ['$=', '|=', '*=', '~=', '^=', '>=', '<=', '!=', '==', '++', '--'].forEach(function (o) {
      self.addMatch(new CompleteEqual(Token.SIGN, o));
    });
    var head = new RegMatch(Token.HEAD, /^@[\w-]+/);

    head.callback = function (token) {
      var s = token.content().toLowerCase();
      s = s.replace(/^@(-moz-|-o-|-ms-|-webkit-|-vx-|-hp-|-khtml-|mso-|-prince-|-rim-|-ro-|-tc-|-wap-|-apple-|-atsc-|-ah-)/, '@');

      if (!{
        '@page': true,
        '@import': true,
        '@charset': true,
        '@media': true,
        '@font-face': true,
        '@keyframes': true,
        '@namespace': true,
        '@document': true,
        '@counter-style': true,
        '@viewport': true,
        '@supports': true,
        '@region': true,
        '@navigation': true,
        '@footnote': true,
        '@layout': true,
        '@top': true,
        '@top-left': true,
        '@top-center': true,
        '@top-right': true,
        '@extend': true,
        '@if': true,
        '@elseif': true,
        '@else': true,
        '@for': true,
        '@dir': true,
        '@basename': true,
        '@extname': true,
        '@width': true,
        '@height': true
      }.hasOwnProperty(s)) {
        token.type(Token.VARS);
      }
    };

    self.addMatch(head);
    self.addMatch(new RegMatch(Token.VARS, /^@\{[\w\-\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376-\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u052f\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0-\u08b2\u08e4-\u0963\u0966-\u096f\u0971-\u0983\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7-\u09c8\u09cb-\u09ce\u09d7\u09dc-\u09dd\u09df-\u09e3\u09e6-\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57\u0b5c-\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82-\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c00-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c58-\u0c59\u0c60-\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1-\u0cf2\u0d01-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82-\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18-\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772-\u1773\u1780-\u17d3\u17d7\u17dc-\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19d9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1ab0-\u1abd\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1cf8-\u1cf9\u1d00-\u1df5\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200c-\u200d\u203f-\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099-\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua69d\ua69f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua7ad\ua7b0-\ua7b1\ua7f7-\ua827\ua840-\ua873\ua880-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua900-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\ua9e0-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab5f\uab64-\uab65\uabc0-\uabea\uabec-\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe2d\ufe33-\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7]+\}/));
    self.addMatch(new RegMatch(Token.VARS, /^\$[\w\-\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376-\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u052f\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0-\u08b2\u08e4-\u0963\u0966-\u096f\u0971-\u0983\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7-\u09c8\u09cb-\u09ce\u09d7\u09dc-\u09dd\u09df-\u09e3\u09e6-\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57\u0b5c-\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82-\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c00-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c58-\u0c59\u0c60-\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1-\u0cf2\u0d01-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82-\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18-\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772-\u1773\u1780-\u17d3\u17d7\u17dc-\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19d9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1ab0-\u1abd\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1cf8-\u1cf9\u1d00-\u1df5\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200c-\u200d\u203f-\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099-\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua69d\ua69f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua7ad\ua7b0-\ua7b1\ua7f7-\ua827\ua840-\ua873\ua880-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua900-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\ua9e0-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab5f\uab64-\uab65\uabc0-\uabea\uabec-\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe2d\ufe33-\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7]+/));
    self.addMatch(new RegMatch(Token.VARS, /^\$\{[\w\-\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376-\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u052f\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0-\u08b2\u08e4-\u0963\u0966-\u096f\u0971-\u0983\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7-\u09c8\u09cb-\u09ce\u09d7\u09dc-\u09dd\u09df-\u09e3\u09e6-\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57\u0b5c-\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82-\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c00-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c58-\u0c59\u0c60-\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1-\u0cf2\u0d01-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82-\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18-\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772-\u1773\u1780-\u17d3\u17d7\u17dc-\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19d9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1ab0-\u1abd\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1cf8-\u1cf9\u1d00-\u1df5\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200c-\u200d\u203f-\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099-\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua69d\ua69f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua7ad\ua7b0-\ua7b1\ua7f7-\ua827\ua840-\ua873\ua880-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua900-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\ua9e0-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab5f\uab64-\uab65\uabc0-\uabea\uabec-\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe2d\ufe33-\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7]+\}/));
    self.addMatch(new CharacterSet(Token.SIGN, '{},:();-{}><+/[]=*~.'));
    self.addMatch(new CharacterSet(Token.HACK, '_`?|%'));
  }).methods({
    values: function () {
      return this.vl;
    },
    colors: function () {
      return this.cl;
    },
    addValue: function (v) {
      this.vl[v] = true;
      return this.vl;
    },
    addColor: function (v) {
      this.cl[v] = true;
      return this.cl;
    }
  }).statics({
    KEYWORDS: 'handler-blocked transform-3d -replace -set-link-source -use-link-source accelerator additive-symbols align-content align-items align-self alignment-adjust alignment-baseline anchor-point animation animation-delay animation-duration animation-fill-mode animation-iteration-count animation-name animation-play-state animation-timing-function app-region appearance ascent aspect-ratio autohiding-scrollbar azimuth backface-visibility background background-attachment background-clip background-color background-image background-origin background-origin-x background-origin-y background-position background-position-x background-position-y background-repeat background-size baseline baseline-shift behavior binding blend-mode block-progression bookmark-label bookmark-level bookmark-state bookmark-target border border-after border-after-color border-after-style border-after-width border-before border-before-color border-before-style border-before-width border-bottom border-bottom-color border-bottom-colors border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-clip-bottom border-clip-left border-clip-right border-clip-top border-collapse border-color border-fit border-horizontal-spacing border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-left border-left-color border-left-colors border-left-style border-left-width border-radius border-radius-bottomleft border-radius-bottomright border-radius-topleft border-radius-topright border-right border-right-color border-right-colors border-right-style border-right-width border-spacing border-start border-start-color border-start-style border-start-width border-style border-top border-top-color border-top-colors border-top-left-radius border-top-right-radius border-top-style border-top-width border-vertical-spacing border-width bottom bottom-left-radius bottom-right-radius box box-align box-decoration-break box-direction box-flex box-flex-group box-lines box-ordinal-group box-orient box-pack box-reflect box-shadow box-sizing box-snap break-after break-before break-inside cap-height caption-side centerline chains clear clip clip-path clip-rule color color-correction color-index color-profile column-axis column-break-after column-break-before column-break-inside column-count column-fill column-gap column-progression column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns content content-zoom-chaining content-zoom-limit content-zoom-limit-max content-zoom-limit-min content-zoom-snap content-zoom-snap-points content-zoom-snap-type content-zooming counter-increment counter-reset cue cue-after cue-before cursor dashboard-region definition-src descent device-aspect-ratio device-height device-pixel-ratio device-width direction display display-box display-extras display-inside display-outside dominant-baseline drop-initial-after-adjust drop-initial-after-align drop-initial-before-adjust drop-initial-before-align drop-initial-size drop-initial-value elevation empty-cells fallback fill fill-opacity fill-rule filter fit fit-position flavor flex flex-basis flex-direction flex-flow flex-grow flex-pack flex-shrink flex-wrap float float-edge float-offset flood-color flood-opacity flow-from flow-into focus-ring-color font font-color font-emphasize font-emphasize-position font-emphasize-style font-family font-feature-settings font-kerning font-language-override font-size font-size-adjust font-size-delta font-smooth font-smoothing font-stretch font-style font-synthesis font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-ligatures font-variant-numeric font-variant-position font-weight footnote force-broken-image-icon glyph-orientation-horizontal glyph-orientation-vertical grid grid-area grid-auto-columns grid-auto-flow grid-auto-rows grid-column grid-column-align grid-column-position grid-column-span grid-columns grid-definition-columns grid-definition-rows grid-position grid-row grid-row-align grid-row-position grid-row-span grid-rows grid-span grid-template hanging-punctuation height high-contrast high-contrast-adjust highlight horiz-align hyphenate-character hyphenate-limit-after hyphenate-limit-before hyphenate-limit-chars hyphenate-limit-last hyphenate-limit-lines hyphenate-limit-zone hyphenate-resource hyphens icon image-orientation image-rendering image-resolution images-in-menus ime-mode include-source inherit initial inline-box-align inline-flex inline-table input-format input-required interpolation-mode interpret-as justify-content justify-items justify-self kerning languages layer-background-color layer-background-image layout-flow layout-grid layout-grid-char layout-grid-char-spacing layout-grid-line layout-grid-mode layout-grid-type left letter-spacing lighting-color line-align line-box-contain line-break line-clamp line-grid line-height line-slack line-snap line-stacking line-stacking-ruby line-stacking-shift line-stacking-strategy linear-gradient link link-source list-image-1 list-image-2 list-image-3 list-style list-style-image list-style-position list-style-type locale logical-height logical-width mac-graphite-theme maemo-classic margin margin-after margin-after-collapse margin-before margin-before-collapse margin-bottom margin-bottom-collapse margin-collapse margin-end margin-left margin-right margin-start margin-top margin-top-collapse marker marker-end marker-mid marker-offset marker-start marks marquee marquee-dir marquee-direction marquee-increment marquee-loop marquee-play-count marquee-repetition marquee-speed marquee-style mask mask-attachment mask-box-image mask-box-image-outset mask-box-image-repeat mask-box-image-slice mask-box-image-source mask-box-image-width mask-clip mask-composite mask-image mask-origin mask-position mask-position-x mask-position-y mask-repeat mask-repeat-x mask-repeat-y mask-size mask-type match-nearest-mail-blockquote-color mathline max-aspect-ratio max-color max-color-index max-device-aspect-ratio max-device-height max-device-pixel-ratio max-device-width max-height max-logical-height max-logical-width max-monochrome max-resolution max-width max-zoom min-aspect-ratio min-color min-color-index min-device-aspect-ratio min-device-height min-device-pixel-ratio min-device-width min-height min-logical-height min-logical-width min-monochrome min-resolution min-width min-zoom mini-fold monochrome move-to nav-banner-image nav-bottom nav-down nav-down-shift nav-index nav-left nav-left-shift nav-right nav-right-shift nav-up nav-up-shift navbutton-* nbsp-mode negative none normal object-fit object-position oeb-column-number oeb-page-foot oeb-page-head opacity order orient orientation orphans osx-font-smoothing outline outline-color outline-offset outline-radius outline-radius-bottomleft outline-radius-bottomright outline-radius-topleft outline-radius-topright outline-style outline-width overflow overflow-scrolling overflow-style overflow-x overflow-y pad padding padding-bottom padding-left padding-right padding-top page page-break-after page-break-before page-break-inside page-policy panose-1 pause pause-after pause-before perspective perspective-origin perspective-origin-x perspective-origin-y phonemes pitch pitch-range play-during pointer-events position prefix presentation-level print-color-adjust progress-appearance property-name punctuation-trim punctuation-wrap quotes radial-gradient range region-break-after region-break-before region-break-inside region-overflow rendering-intent replace resize resolution rest rest-after rest-before richness right rotation-point row-span rtl-ordering ruby-align ruby-overhang ruby-position ruby-span scan script-level script-min-size script-size-multiplier scroll-chaining scroll-limit scroll-limit-x-max scroll-limit-x-min scroll-limit-y-max scroll-limit-y-min scroll-rails scroll-snap-points-x scroll-snap-points-y scroll-snap-type scroll-snap-x scroll-snap-y scroll-translation scrollbar-3d-light-color scrollbar-3dlight-color scrollbar-arrow-color scrollbar-base-color scrollbar-dark-shadow-color scrollbar-darkshadow-color scrollbar-end-backward scrollbar-end-forward scrollbar-face-color scrollbar-highlight-color scrollbar-shadow-color scrollbar-start-backward scrollbar-start-forward scrollbar-thumb-proportional scrollbar-track-color separator-image set-link-source shape-image-threshold shape-inside shape-margin shape-outside shape-padding shape-rendering size slope speak speak-as speak-header speak-numeral speak-punctuation speech-rate src stack-sizing stemh stemv stop-color stop-opacity stress string-set stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width suffix svg-shadow symbols system tab-size tab-stops table-baseline table-border-color-dark table-border-color-light table-layout tap-highlight-color target target-name target-new target-position text-align text-align-last text-anchor text-autospace text-blink text-combine text-combine-horizontal text-decoration text-decoration-color text-decoration-line text-decoration-skip text-decoration-style text-decorations-in-effect text-effect text-emphasis text-emphasis-color text-emphasis-position text-emphasis-skip text-emphasis-style text-fill-color text-fit text-height text-indent text-justify text-justify-trim text-kashida text-kashida-space text-line-through text-orientation text-outline text-overflow text-rendering text-security text-shadow text-size-adjust text-space-collapse text-spacing text-stroke text-stroke-color text-stroke-width text-transform text-trim text-underline text-underline-color text-underline-position text-underline-style text-wrap top top-bar-button top-left-radius top-right-radius touch-action touch-callout touch-enabled transform transform-origin transform-origin-x transform-origin-y transform-origin-z transform-style transition transition-delay transition-duration transition-property transition-repeat-count transition-timing-function unicode-bidi unicode-range units-per-em use-link-source user-drag user-focus user-input user-modify user-select user-zoom vector-effect version vertical-align viewport visibility voice-balance voice-duration voice-family voice-pitch voice-pitch-range voice-range voice-rate voice-stress voice-volume volume white-space widows width widths will-change window-shadow windows-classic windows-compositor windows-default-theme word-break word-spacing word-wrap wrap wrap-flow wrap-margin wrap-padding wrap-through writing-mode x-height z-index zoom'.split(' '),
    VALUES: 'domain regexp farthest-corner closest-side closest-corner farthest-side above absolute additive all alpha alphabetic always and antialiased aqua armenian attr aural auto avoid background baseline behind below bicubic bidi-override black blink block blue bold bolder border-box both bottom braille break-all break-word calc canvas capitalize caption center center-left center-right circle cjk-decimal cjk-ideographic close-quote code collapse color compact condensed contain content-box continuous counter counters cover crop cross cross-fade crosshair cubic-bezier cursive cycle cyclic dashed decimal decimal-leading-zero default device-cmyk digits disabled disc disclosure-closed disclosure-open dotted double e-resize ease ease-in ease-in-out ease-out element embed embossed enabled expanded extra-condensed extra-expanded false fantasy far-left far-right fast faster fixed flipouttobottom flipouttoleft flipouttoright flipouttotop format fuchsia georgian gray grayscale green groove handheld hebrew help hidden hide high higher hiragana hiragana-iroha hsl hsla icon image image-rect image-region infinite inherit inline inline-block inline-table inset inside inter-ideograph invert italic japanese-formal japanese-informal justify katakana katakana-iroha korean-hangul-formal korean-hanja-formal korean-hanja-informal landscape large larger leader left-side leftwards level lighter lime line-through linear linear-gradient list-item local loud low lower lower-alpha lower-greek lower-latin lower-roman lowercase ltr marker maroon medium message-box middle min max mix move n-resize narrower navy ne-resize no-close-quote no-open-quote no-repeat none normal not nowrap numeric nw-resize oblique olive once only opacity open-quote outset outside overline padding-box pending perspective pointer portrait pre print projection purple rebeccapurple rect red relative repeat repeat-x repeat-y repeating-linear-gradient repeating-radial-gradient rgb rgba ridge right right-side rightwards rotate rotate3d rotate3D rotateX rotateY rotateZ round rounddown roundup rtl run-in running s-resize scale scale3D scale3d scaleX scaleY scaleZ screen scroll se-resize semi-condensed semi-expanded separate show silent silver simp-chinese-formal simp-chinese-informal skew skew3D skewX skewY skewZ slow slower small small-caps small-caption smaller soft solid space speech spell-out square static status-bar steps string sub super sw-resize symbolic symbols table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group target-counter target-counters target-pull target-text teal text text-bottom text-top thick thin toggle top trad-chinese-formal trad-chinese-informal translate translate3d translate3D translateX translateY translateZ true tty tv ultra-condensed ultra-expanded underline upper-alpha upper-latin upper-roman uppercase url url-prefix var visible w-resize wait white wider width x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow'.split(' '),
    COLORS: 'transparent activeborder aliceblue antiquewhite appworkspace aqua aqua aquamarine azure beige bisque black black blanchedalmond blue blue blueviolet brown burlywood buttonface buttonshadow cadetblue captiontext chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkgrey darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkslategrey darkturquoise darkviolet deeppink deepskyblue dimgray dimgrey dodgerblue firebrick floralwhite forestgreen fuchsia fuchsia gainsboro ghostwhite gold goldenrod gray gray green green greenyellow grey highlight honeydew hotpink inactiveborder inactivecaptiontext indianred indigo infotext ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgray lightgreen lightgrey lightpink lightsalmon lightseagreen lightskyblue lightslategray lightslategrey lightsteelblue lightyellow lime lime limegreen linen magenta maroon maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred menutext midnightblue mintcream mistyrose moccasin navajowhite navy navy oldlace olive olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple purple red red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver silver skyblue slateblue slategray slategrey snow springgreen steelblue tan teal teal thistle threeddarkshadow threedhighlight threedshadow tomato turquoise violet wheat white white whitesmoke windowframe yellow yellow yellowgreen'.split(' '),
    addKeyWord: function (kw) {
      if (Array.isArray(kw)) {
        CssRule.KEYWORDS = CssRule.KEYWORDS.concat(kw);
      } else {
        CssRule.KEYWORDS.push(kw.trim());
      }
    },
    addValue: function (v) {
      if (Array.isArray(v)) {
        CssRule.VALUES = CssRule.VALUES.concat(v);
      } else {
        CssRule.VALUES.push(v.trim());
      }
    },
    addColor: function (v) {
      if (Array.isArray(v)) {
        CssRule.COLORS = CssRule.COLORS.concat(v);
      } else {
        CssRule.COLORS.push(v.trim());
      }
    }
  });
  module.exports = CssRule;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/rule/EcmascriptRule.js":
/*!******************************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/rule/EcmascriptRule.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Rule = __webpack_require__(/*! ./Rule */ "./node_modules/homunculus/web/lexer/rule/Rule.js");

  var LineSearch = __webpack_require__(/*! ../match/LineSearch */ "./node_modules/homunculus/web/lexer/match/LineSearch.js");

  var LineParse = __webpack_require__(/*! ../match/LineParse */ "./node_modules/homunculus/web/lexer/match/LineParse.js");

  var CompleteEqual = __webpack_require__(/*! ../match/CompleteEqual */ "./node_modules/homunculus/web/lexer/match/CompleteEqual.js");

  var RegMatch = __webpack_require__(/*! ../match/RegMatch */ "./node_modules/homunculus/web/lexer/match/RegMatch.js");

  var CharacterSet = __webpack_require__(/*! ../match/CharacterSet */ "./node_modules/homunculus/web/lexer/match/CharacterSet.js");

  var Token = __webpack_require__(/*! ../Token */ "./node_modules/homunculus/web/lexer/Token.js");

  var Lexer = __webpack_require__(/*! ../Lexer */ "./node_modules/homunculus/web/lexer/Lexer.js");

  var character = __webpack_require__(/*! ../../util/character */ "./node_modules/homunculus/web/util/character.js");

  var isProperty = false;
  var EcmascriptRule = Rule.extend(function () {
    var self = this;
    Rule.call(self, EcmascriptRule.KEYWORDS, true);
    self.addMatch(new CompleteEqual(Token.BLANK, character.BLANK));
    self.addMatch(new CompleteEqual(Token.TAB, character.TAB));
    self.addMatch(new CompleteEqual(Token.LINE, character.ENTER + character.LINE));
    self.addMatch(new CompleteEqual(Token.LINE, character.ENTER));
    self.addMatch(new CompleteEqual(Token.LINE, character.LINE));
    self.addMatch(new LineSearch(Token.COMMENT, '//', [character.ENTER + character.LINE, character.ENTER, character.LINE]));
    self.addMatch(new LineSearch(Token.COMMENT, '<!--', [character.ENTER + character.LINE, character.ENTER, character.LINE]));
    var htmlEndComment = new LineSearch(Token.COMMENT, '-->', [character.ENTER + character.LINE, character.ENTER, character.LINE]);

    htmlEndComment.callback = function (token, tokenList) {
      for (var i = tokenList.length - 1; i >= 0; i--) {
        var t = tokenList[i];

        if ([Token.LINE, Token.ENTER].indexOf(t.type()) > -1) {
          return;
        } else if ([Token.COMMENT, Token.BLANK, Token.TAB].indexOf(t.type()) == -1) {
          this.cancel = true;
          return;
        }
      }
    };

    self.addMatch(htmlEndComment);
    self.addMatch(new LineSearch(Token.COMMENT, '/*', '*/', true));
    self.addMatch(new LineParse(Token.STRING, '"', '"', false, Lexer.NOT_REG));
    self.addMatch(new LineParse(Token.STRING, "'", "'", false, Lexer.NOT_REG));
    var id = new RegMatch(Token.ID, /^[$a-zA-Z_\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376-\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4-\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0-\u08b2\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09f0-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c59\u0c60-\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0cf1-\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae-\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5-\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a-\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua7ad\ua7b0-\ua7b1\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5-\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab5f\uab64-\uab65\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7][$\w\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376-\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u052f\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0-\u08b2\u08e4-\u0963\u0966-\u096f\u0971-\u0983\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7-\u09c8\u09cb-\u09ce\u09d7\u09dc-\u09dd\u09df-\u09e3\u09e6-\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57\u0b5c-\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82-\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c00-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c58-\u0c59\u0c60-\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1-\u0cf2\u0d01-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82-\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18-\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772-\u1773\u1780-\u17d3\u17d7\u17dc-\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19d9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1ab0-\u1abd\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1cf8-\u1cf9\u1d00-\u1df5\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200c-\u200d\u203f-\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099-\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua69d\ua69f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua7ad\ua7b0-\ua7b1\ua7f7-\ua827\ua840-\ua873\ua880-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua900-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\ua9e0-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab5f\uab64-\uab65\uabc0-\uabea\uabec-\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe2d\ufe33-\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7]*/, Lexer.SPECIAL, function () {
      return !!self.keyWords().hasOwnProperty(this.content());
    }, function () {
      return ['if', 'for', 'while'].indexOf(this.content()) != -1;
    });

    id.callback = function (token) {
      var s = token.content();

      if (isProperty) {
        token.type(Token.ID);
      }

      isProperty = false;
    };

    self.addMatch(id);
    self.addMatch(new RegMatch(Token.NUMBER, /^\.\d+(?:E[+-]?\d*)?/i, {
      'SyntaxError: missing exponent': /E[+-]?$/i
    }, Lexer.NOT_REG));
    self.addMatch(new CompleteEqual(Token.SIGN, ']', Lexer.NOT_REG));
    ['*=', '/=', '+=', '-=', '%=', '^=', '&=', '|=', '&&', '--', '++', '===', '==', '!==', '!=', '||', '>>>=', '>>>', '>>=', '<<=', '<<', '>>', '>=', '<=', '...', '=>', '**'].forEach(function (o) {
      self.addMatch(new CompleteEqual(Token.SIGN, o, Lexer.IS_REG));
    });
    var sign = new CharacterSet(Token.SIGN, ':;/?.,[{}~!^|%=-+*()~><&', Lexer.IS_REG);

    sign.callback = function (token) {
      var s = token.content();
      isProperty = s == '.';
    };

    self.addMatch(sign);
    self.addMatch(new RegMatch(Token.NUMBER, /^0x[\da-f]*/i, {
      "SyntaxError: missing hexadecimal digits after '0x'": /^0x$/i
    }, Lexer.NOT_REG));
    self.addMatch(new RegMatch(Token.NUMBER, /^0b[01]*/i, {
      "SyntaxError: missing binary digits after '0b'": /^0b$/i
    }, Lexer.NOT_REG));
    self.addMatch(new RegMatch(Token.NUMBER, /^0o[01234567]*/i, {
      "SyntaxError: missing octal digits after '0b'": /^0o$/i
    }, Lexer.NOT_REG));
    self.addMatch(new RegMatch(Token.NUMBER, /^\d+\.?\d*(?:E[+-]?\d*)?/i, {
      'SyntaxError: missing exponent': /E[+-]?$/i
    }, Lexer.NOT_REG));
    self.addMatch(new CharacterSet(Token.LINE, '\u2028\u2029'));
    self.addMatch(new CharacterSet(Token.BLANK, '\f\u000b\u00A0\uFEFF\u200b\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000'));
    self.addMatch(new RegMatch(Token.ANNOT, /^@[$a-zA-Z_\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376-\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4-\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0-\u08b2\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09f0-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c59\u0c60-\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0cf1-\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae-\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5-\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a-\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua7ad\ua7b0-\ua7b1\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5-\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab5f\uab64-\uab65\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7][$\w\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376-\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u052f\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0-\u08b2\u08e4-\u0963\u0966-\u096f\u0971-\u0983\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7-\u09c8\u09cb-\u09ce\u09d7\u09dc-\u09dd\u09df-\u09e3\u09e6-\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a3c\u0a3e-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47-\u0b48\u0b4b-\u0b4d\u0b56-\u0b57\u0b5c-\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82-\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c00-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c58-\u0c59\u0c60-\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5-\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1-\u0cf2\u0d01-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82-\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18-\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772-\u1773\u1780-\u17d3\u17d7\u17dc-\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19d9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1ab0-\u1abd\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1cf8-\u1cf9\u1d00-\u1df5\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200c-\u200d\u203f-\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099-\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua69d\ua69f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua7ad\ua7b0-\ua7b1\ua7f7-\ua827\ua840-\ua873\ua880-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua900-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\ua9e0-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab5f\uab64-\uab65\uabc0-\uabea\uabec-\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe2d\ufe33-\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7]*/));
  }).statics({
    KEYWORDS: 'await async break case catch class const continue debugger default delete do else enum export extends false finally for function if implements import in instanceof interface let new null package private protected public return static super switch this throw true try typeof var void while with yield'.split(' ')
  });
  module.exports = EcmascriptRule;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/rule/HtmlRule.js":
/*!************************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/rule/HtmlRule.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Rule = __webpack_require__(/*! ./Rule */ "./node_modules/homunculus/web/lexer/rule/Rule.js");

  var LineSearch = __webpack_require__(/*! ../match/LineSearch */ "./node_modules/homunculus/web/lexer/match/LineSearch.js");

  var CompleteEqual = __webpack_require__(/*! ../match/CompleteEqual */ "./node_modules/homunculus/web/lexer/match/CompleteEqual.js");

  var RegMatch = __webpack_require__(/*! ../match/RegMatch */ "./node_modules/homunculus/web/lexer/match/RegMatch.js");

  var character = __webpack_require__(/*! ../../util/character */ "./node_modules/homunculus/web/util/character.js");

  var Token = __webpack_require__(/*! ../HtmlToken */ "./node_modules/homunculus/web/lexer/HtmlToken.js");

  var HtmlRule = Rule.extend(function () {
    var self = this;
    Rule.call(self, HtmlRule.KEYWORDS);
    self.addMatch(new CompleteEqual(Token.BLANK, character.BLANK));
    self.addMatch(new CompleteEqual(Token.TAB, character.TAB));
    self.addMatch(new CompleteEqual(Token.LINE, character.ENTER + character.LINE));
    self.addMatch(new CompleteEqual(Token.LINE, character.ENTER));
    self.addMatch(new CompleteEqual(Token.LINE, character.LINE));
    self.addMatch(new CompleteEqual(Token.DOC, '!DOCTYPE', null, true));
    self.addMatch(new LineSearch(Token.STRING, '"', '"', true));
    self.addMatch(new LineSearch(Token.STRING, "'", "'", true));
    self.addMatch(new CompleteEqual(Token.SIGN, '=', null, true));
    self.addMatch(new RegMatch(Token.NUMBER, /^\d+/));
    self.addMatch(new RegMatch(Token.PROPERTY, /^[a-z]+(-\w+)*/i));
  }).statics({
    KEYWORDS: 'doctype a abbr acronym address applet area article aside audio b base basefont bdi bdo big blockquote body br button canvas caption center cite code col colgroup command datalist dd del details dfn dialog dir div dl dt em embed fieldset figcaption figure font footer form frame frameset h1 h2 h3 h4 h5 h6 head header hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noframes noscript object ol optgroup option output p param pre progress q rp rt ruby s samp script section select small source span strike strong style sub summary sup table tbody td textarea tfoot th thead time title tr track tt u ul var video wbr'.split(' ')
  });
  module.exports = HtmlRule;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/rule/JavaRule.js":
/*!************************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/rule/JavaRule.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Rule = __webpack_require__(/*! ./Rule */ "./node_modules/homunculus/web/lexer/rule/Rule.js");

  var LineSearch = __webpack_require__(/*! ../match/LineSearch */ "./node_modules/homunculus/web/lexer/match/LineSearch.js");

  var LineParse = __webpack_require__(/*! ../match/LineParse */ "./node_modules/homunculus/web/lexer/match/LineParse.js");

  var CompleteEqual = __webpack_require__(/*! ../match/CompleteEqual */ "./node_modules/homunculus/web/lexer/match/CompleteEqual.js");

  var RegMatch = __webpack_require__(/*! ../match/RegMatch */ "./node_modules/homunculus/web/lexer/match/RegMatch.js");

  var Token = __webpack_require__(/*! ../Token */ "./node_modules/homunculus/web/lexer/Token.js");

  var JavaRule = Rule.extend(function () {
    var self = this;
    Rule.call(self, JavaRule.KEYWORDS);
    self.addMatch(new LineSearch(Token.COMMENT, '//', '\n'));
    self.addMatch(new LineSearch(Token.COMMENT, '/*', '*/', true));
    self.addMatch(new LineParse(Token.STRING, '"', '"'));
    self.addMatch(new LineParse(Token.STRING, "'", "'"));
    self.addMatch(new RegMatch(Token.ID, /^[a-zA-Z_]\w*/));
    self.addMatch(new RegMatch(Token.ANNOT, /^@\w+/));
    ['~', '!', '%', '^', '&&', '&', '*', '(', ')', '--', '-', '++', '+', '===', '==', '=', '!==', '!=', '[', ']', '{', '}', '||', '|', '\\', '<<<', '>>>', '<<', '>>', '<', '>', '>=', '<=', ',', '...', '.', '?:', '?', ':', ';', '/'].forEach(function (o) {
      self.addMatch(new CompleteEqual(Token.SIGN, o));
    });
  }).statics({
    KEYWORDS: 'if else for break case continue function true false switch default do while int float double long throws transient abstract assert boolean byte class const enum instanceof try volatilechar extends final finally goto implements import protected return void char interface native new package private protected throw short public return strictfp super synchronized this static null String'.split(' ')
  });
  module.exports = JavaRule;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/lexer/rule/Rule.js":
/*!********************************************************!*\
  !*** ./node_modules/homunculus/web/lexer/rule/Rule.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Class = __webpack_require__(/*! ../../util/Class */ "./node_modules/homunculus/web/util/Class.js");

  var Rule = Class(function (words, pReg) {
    var self = this;
    self.kw = {};
    words.forEach(function (o) {
      self.kw[o] = true;
    });
    self.pReg = pReg || false;
    self.matchList = [];
  }).methods({
    perlReg: function () {
      return this.pReg;
    },
    addMatch: function (match) {
      this.matchList.push(match);
      return this;
    },
    matches: function () {
      return this.matchList;
    },
    keyWords: function () {
      return this.kw;
    },
    addKeyWord: function (v) {
      this.kw[v] = true;
      return this.kw;
    }
  });
  module.exports = Rule;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/parser/Node.js":
/*!****************************************************!*\
  !*** ./node_modules/homunculus/web/parser/Node.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Class = __webpack_require__(/*! ../util/Class */ "./node_modules/homunculus/web/util/Class.js");

  var character = __webpack_require__(/*! ../util/character */ "./node_modules/homunculus/web/util/character.js");

  var nid = 0;
  var Node = Class(function (type, children) {
    this.type = type;

    if (type == Node.TOKEN) {
      this.children = children;
    } else if (Array.isArray(children)) {
      this.children = children;
    } else {
      this.children = children ? [children] : [];
    }

    this.p = null;
    this.pr = null;
    this.ne = null;
    this.id = nid++;
    return this;
  }).methods({
    nid: function () {
      return this.id;
    },
    name: function (t) {
      if (!character.isUndefined(t)) {
        this.type = t;
      }

      return this.type;
    },
    leaves: function () {
      return this.children;
    },
    leaf: function (i) {
      return this.children[i];
    },
    size: function () {
      return this.children.length;
    },
    first: function () {
      return this.leaf(0);
    },
    last: function () {
      return this.leaf(this.size() - 1);
    },
    isEmpty: function () {
      return this.size() === 0;
    },
    add: function () {
      var self = this;
      var args = Array.prototype.slice.call(arguments, 0);
      args.forEach(function (node) {
        if (Array.isArray(node)) {
          node.forEach(function (node2) {
            node2.parent(self);
            var last = self.children[self.children.length - 1];

            if (last) {
              last.next(node2);
              node2.prev(last);
            }

            self.children.push(node2);
          });
        } else {
          node.parent(self);
          var last = self.children[self.children.length - 1];

          if (last) {
            last.next(node);
            node.prev(last);
          }

          self.children.push(node);
        }
      });
      return self;
    },
    addFirst: function () {
      var self = this;
      var args = Array.prototype.slice.call(arguments, 0);
      args.forEach(function (node) {
        if (Array.isArray(node)) {
          node.forEach(function (node2) {
            node2.parent(self);
            var last = self.children[0];

            if (last) {
              last.next(node2);
              node2.prev(last);
            }

            self.children.unshift(node2);
          });
        } else {
          node.parent(self);
          var last = self.children[0];

          if (last) {
            last.next(node);
            node.prev(last);
          }

          self.children.unshift(node);
        }
      });
      return self;
    },
    token: function () {
      return this.children;
    },
    parent: function (p) {
      if (p) {
        this.p = p;
      }

      return this.p;
    },
    prev: function (pr) {
      if (pr) {
        this.pr = pr;
      }

      return this.pr;
    },
    next: function (ne) {
      if (ne) {
        this.ne = ne;
      }

      return this.ne;
    },
    isToken: function () {
      return this.type == Node.TOKEN;
    },
    toString: function () {
      return this.name();
    }
  }).statics({
    TOKEN: 'token'
  });
  module.exports = Node;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/parser/Parser.js":
/*!******************************************************!*\
  !*** ./node_modules/homunculus/web/parser/Parser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Class = __webpack_require__(/*! ../util/Class */ "./node_modules/homunculus/web/util/Class.js");

  var walk = __webpack_require__(/*! ../util/walk */ "./node_modules/homunculus/web/util/walk.js");

  var Parser = Class(function (lexer) {
    this.lexer = lexer;
    this.tree = {};
    this.ignores = {};
    return this;
  }).methods({
    parse: function (code) {
      return this.tree;
    },
    ast: function (plainObject) {
      if (plainObject) {
        return walk.plainObject(this.tree);
      }

      return this.tree;
    },
    ignore: function () {
      return this.ignores;
    }
  });
  module.exports = Parser;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/parser/css/Node.js":
/*!********************************************************!*\
  !*** ./node_modules/homunculus/web/parser/css/Node.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var INode = __webpack_require__(/*! ../Node */ "./node_modules/homunculus/web/parser/Node.js");

  var Node = INode.extend(function (type, children) {
    INode.call(this, type, children);
    return this;
  }).statics({
    SHEET: 'sheet',
    ELEMENT: 'element',
    IMPORT: 'import',
    MEDIA: 'media',
    CHARSET: 'charset',
    MEDIAQLIST: 'mediaqlist',
    MEDIAQUERY: 'mediaquer',
    MEDIATYPE: 'mediatype',
    NAMESPACE: 'namespace',
    DOC: 'doc',
    EXPR: 'expression',
    BLOCK: 'block',
    STYLESET: 'styleset',
    STYLE: 'style',
    SELECTORS: 'selectors',
    SELECTOR: 'selector',
    KEY: 'key',
    VALUE: 'value',
    FONTFACE: 'fontface',
    KEYFRAMES: 'kframes',
    PAGE: 'page',
    URL: 'url',
    LINEARGRADIENT: 'lineargradient',
    POINT: 'point',
    COLORSTOP: 'colorstop',
    RADIOGRADIENT: 'radiogradient',
    POS: 'pos',
    LEN: 'len',
    LENGTH: 'length',
    RGB: 'rgb',
    RGBA: 'rgba',
    HSL: 'hsl',
    HSLA: 'hsla',
    MAX: 'max',
    MIN: 'min',
    VARDECL: 'vardecl',
    EXTEND: 'extend',
    FORMAT: 'format',
    FN: 'function',
    PARAMS: 'params',
    FNC: 'fncall',
    CPARAMS: 'cparams',
    CTSTYLE: 'ctstyle',
    VIEWPORT: 'viewport',
    SUPPORTS: 'supports',
    CNDT: 'cndt',
    ADDEXPR: 'addexpr',
    MTPLEXPR: 'mtplexpr',
    PRMREXPR: 'prmrexpr',
    PARAM: 'param',
    COUNTER: 'counter',
    CALC: 'calc',
    TOGGLE: 'toggle',
    ATTR: 'attr',
    FILTER: 'filter',
    TRANSLATE: 'translate',
    "TRANSLATE3D": 'translate3d',
    TRANSLATEX: 'translatex',
    TRANSLATEY: 'translatey',
    TRANSLATEZ: 'translatez',
    ROTATE: 'rotate',
    "ROTATE3D": 'rotate3d',
    ROTATEX: 'rotatex',
    ROTATEY: 'rotatey',
    ROTATEZ: 'rotatez',
    SCALE: 'scale',
    "SCALE3D": 'scale3d',
    SCALEX: 'scalex',
    SCALEY: 'scaley',
    SCALEZ: 'scalez',
    VARS: 'vars',
    BRACKET: 'bracket',
    URLPREFIX: 'ulrprefix',
    DOMAIN: 'domain',
    REGEXP: 'regexp',
    IFSTMT: 'ifstmt',
    FORSTMT: 'forstmt',
    VARSTMT: 'varstmt',
    EQSTMT: 'eqstmt',
    RELSTMT: 'relstmt',
    ADDSTMT: 'addstmt',
    MTPLSTMT: 'mtplstmt',
    POSTFIXSTMT: 'postfixstmt',
    MMBSTMT: 'mmbstmt',
    PRMRSTMT: 'prmrstmt',
    ARRLTR: 'arrltr',
    DIR: 'dir',
    UNBOX: 'unbox',
    BASENAME: 'basename',
    EXTNAME: 'extname',
    WIDTH: 'width',
    HEIGHT: 'height',
    getKey: function (s) {
      if (!s) {
        throw new Error('empty value');
      }

      if (!keys) {
        var self = this;
        keys = {};
        Object.keys(this).forEach(function (k) {
          var v = self[k];
          keys[v] = k;
        });
      }

      return keys[s];
    }
  });
  var keys;
  module.exports = Node;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/parser/css/Parser.js":
/*!**********************************************************!*\
  !*** ./node_modules/homunculus/web/parser/css/Parser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var IParser = __webpack_require__(/*! ../Parser */ "./node_modules/homunculus/web/parser/Parser.js");

  var character = __webpack_require__(/*! ../../util/character */ "./node_modules/homunculus/web/util/character.js");

  var Lexer = __webpack_require__(/*! ../../lexer/Lexer */ "./node_modules/homunculus/web/lexer/Lexer.js");

  var Rule = __webpack_require__(/*! ../../lexer/rule/CssRule */ "./node_modules/homunculus/web/lexer/rule/CssRule.js");

  var Token = __webpack_require__(/*! ../../lexer/CssToken */ "./node_modules/homunculus/web/lexer/CssToken.js");

  var Node = __webpack_require__(/*! ./Node */ "./node_modules/homunculus/web/parser/css/Node.js");

  var S = {};
  S[Token.BLANK] = S[Token.TAB] = S[Token.COMMENT] = S[Token.LINE] = true;
  var MQL = {
    'only': true,
    'not': true,
    'all': true,
    'aural': true,
    'braille': true,
    'handheld': true,
    'print': true,
    'projection': true,
    'screen': true,
    'tty': true,
    'embossed': true,
    'tv': true,
    '(': true
  };
  var MT = {
    'all': true,
    'aural': true,
    'braille': true,
    'handheld': true,
    'print': true,
    'projection': true,
    'screen': true,
    'tty': true,
    'embossed': true,
    'tv': true
  };
  var NO_MTPL = {
    'font': true,
    'border-image': true,
    'device-aspect-ratio': true,
    'device-pixel-ratio': true,
    'min-device-pixel-ratio': true,
    'max-device-pixel-ratio': true,
    'min--moz-device-pixel-ratio': true,
    'max--moz-device-pixel-ratio': true
  };
  var Parser = IParser.extend(function (lexer) {
    IParser.call(this, lexer);
    this.init(lexer);
    return this;
  }).methods({
    init: function (lexer) {
      if (lexer) {
        this.lexer = lexer;
      } else if (this.lexer) {
        this.lexer.init();
      } else {
        this.lexer = new Lexer(new Rule());
      }

      this.look = null;
      this.tokens = null;
      this.lastLine = 1;
      this.lastCol = 1;
      this.line = 1;
      this.col = 1;
      this.index = 0;
      this.length = 0;
      this.ignores = {};
      this.tree = {};
    },
    parse: function (code) {
      this.lexer.parse(code);
      this.tree = this.sheet();
      return this.tree;
    },
    ast: function () {
      return this.tree;
    },
    sheet: function () {
      this.tokens = this.lexer.tokens();
      this.length = this.tokens.length;

      if (this.tokens.length) {
        this.move();
      }

      var node = new Node(Node.SHEET);

      while (this.look) {
        var element = this.element();

        if (element) {
          node.add(element);
        }
      }

      return node;
    },
    element: function () {
      switch (this.look.type()) {
        case Token.HEAD:
          return this.head();

        case Token.VARS:
          var isFn = false;

          for (var i = this.index; i < this.length; i++) {
            var t = this.tokens[i];

            if (!S.hasOwnProperty(t.type())) {
              isFn = t.content() == '(';
              break;
            }
          }

          return isFn ? this.fn() : this.varstmt();

        case Token.SELECTOR:
        case Token.PSEUDO:
          return this.styleset();

        default:
          if (this.look.content() == '[' && this.look.type() != Token.HACK) {
            return this.styleset();
          }

          if (['{', '}'].indexOf(this.look.content()) > -1) {
            this.error();
          }

          return this.match();
      }
    },
    head: function () {
      var s = this.look.content().toLowerCase();
      s = s.replace(/^@(-moz-|-o-|-ms-|-webkit-)/, '@');

      switch (s) {
        case '@import':
          return this.impt();

        case '@media':
          return this.media();

        case '@charset':
          return this.charset();

        case '@font-face':
          return this.fontface();

        case '@keyframes':
          return this.kframes();

        case '@page':
          return this.page();

        case '@namespace':
          return this.namespace();

        case '@document':
          return this.doc();

        case '@counter-style':
          return this.ctstyle();

        case '@viewport':
          return this.viewport();

        case '@supports':
          return this.supports();

        case '@extend':
          return this.extend();

        case '@if':
          return this.ifstmt();

        case '@for':
          return this.forstmt();

        default:
          this.error('unknow head');
      }
    },
    extend: function () {
      var node = new Node(Node.EXTEND);
      node.add(this.match());

      if (!this.look) {
        this.error();
      }

      node.add(this.selectors());
      node.add(this.match(';'));
      return node;
    },
    supports: function () {
      var node = new Node(Node.SUPPORTS);
      node.add(this.match());

      while (this.look && this.look.content() != '{') {
        node.add(this.cndt());
      }

      node.add(this.block());
      return node;
    },
    cndt: function () {
      var node = new Node(Node.CNDT);

      if (!this.look) {
        this.error();
      }

      switch (this.look.content().toLowerCase()) {
        case 'and':
        case 'not':
        case 'or':
          node.add(this.match());
          node.add(this.cndt());
          break;

        case '(':
          node.add(this.match(), this.cndt(), this.match(')'));
          break;

        default:
          node.add(this.style(null, true));
          break;
      }

      return node;
    },
    viewport: function () {
      var node = new Node(Node.VIEWPORT);
      node.add(this.match());
      node.add(this.block());
      return node;
    },
    ctstyle: function () {
      var node = new Node(Node.CTSTYLE);
      node.add(this.match());
      node.add(this.match(Token.ID));
      node.add(this.block());
      return node;
    },
    impt: function () {
      var node = new Node(Node.IMPORT);
      node.add(this.match());
      node.add(this.url(true));

      if (this.look && MQL.hasOwnProperty(this.look.content().toLowerCase())) {
        node.add(this.mediaQList());
      }

      node.add(this.match(';'));
      return node;
    },
    media: function () {
      var node = new Node(Node.MEDIA);
      node.add(this.match());

      if (!this.look) {
        this.error();
      }

      if (MQL.hasOwnProperty(this.look.content().toLowerCase()) || this.look.type() == Token.HACK) {
        node.add(this.mediaQList());
      }

      if (this.look && this.look.content() == '{') {
        node.add(this.block());
      }

      return node;
    },
    mediaQList: function () {
      var node = new Node(Node.MEDIAQLIST);
      node.add(this.mediaQuery());

      while (this.look && this.look.content() == ',') {
        node.add(this.match(), this.mediaQuery());
      }

      return node;
    },
    mediaQuery: function () {
      var node = new Node(Node.MEDIAQUERY);

      if (this.look && ['only', 'not'].indexOf(this.look.content().toLowerCase()) > -1) {
        node.add(this.match());
      }

      if (!this.look) {
        this.error();
      }

      if (this.look.content() == '(') {
        node.add(this.expr());
      } else {
        node.add(this.mediaType());
      }

      while (this.look && this.look.content().toLowerCase() == 'and') {
        node.add(this.match(), this.expr());
      }

      return node;
    },
    mediaType: function () {
      var node = new Node(Node.MEDIATYPE);

      if (this.look && this.look.type() == Token.HACK) {
        node.add(this.match());
      }

      if (this.look && MT.hasOwnProperty(this.look.content().toLowerCase())) {
        node.add(this.match());
      } else {
        while (this.look && [Token.ID, Token.NUMBER, Token.UNITS, Token.PROPERTY].indexOf(this.look.type()) > -1 && !MT.hasOwnProperty(this.look.content().toLowerCase())) {
          node.add(this.match());
        }
      }

      while (this.look && this.look.type() == Token.HACK) {
        node.add(this.match());

        if (this.look && MT.hasOwnProperty(this.look.content().toLowerCase())) {
          node.add(this.match());
        } else {
          while (this.look && [Token.ID, Token.NUMBER, Token.UNITS, Token.PROPERTY].indexOf(this.look.type()) > -1 && !MT.hasOwnProperty(this.look.content().toLowerCase())) {
            node.add(this.match());
          }
        }
      }

      return node;
    },
    expr: function () {
      var node = new Node(Node.EXPR);
      node.add(this.match('('));
      var k = this.key();
      node.add(k);
      var first = k.first();

      if (first.token().type() == Token.HACK) {
        first = first.next();
      }

      var name = first.token().content().toLowerCase(); //有可能整个变量作为一个键值，无需再有:value部分

      if (this.look && this.look.content() == ':') {
        node.add(this.match(':'));
        node.add(this.value(name));
      }

      node.add(this.match(')'));
      return node;
    },
    charset: function () {
      var node = new Node(Node.CHARSET);
      node.add(this.match());
      node.add(this.addexpr(Token.STRING));
      node.add(this.match(';'));
      return node;
    },
    fontface: function () {
      var node = new Node(Node.FONTFACE);
      node.add(this.match());
      var node2 = new Node(Node.BLOCK);
      node2.add(this.match('{'));

      outer: while (this.look) {
        if (this.look.type() == Token.VARS) {
          var isFnCall = false;

          for (var i = this.index; i < this.length; i++) {
            var t = this.tokens[i];

            if (!S.hasOwnProperty(t.type())) {
              isFnCall = t.content() == '(';
              break;
            }
          }

          if (isFnCall) {
            node2.add(this.fnc());
          } else {
            node2.add(this.addexpr());

            if (this.look && this.look.content() == ':') {
              node2.add(this.match(), this.value());
            } else {
              node2.add(this.match(';'));
            }
          }

          break;
        }

        switch (this.look.content().toLowerCase()) {
          case 'font-family':
          case 'src':
          case 'font-weight':
          case 'font-style':
            node2.add(this.style(this.look.content()));
            break;

          default:
            break outer;
        }
      }

      while (this.look && this.look.content() != '}') {
        node2.add(this.style());
      }

      node2.add(this.match('}'));
      node.add(node2);
      return node;
    },
    kframes: function () {
      var node = new Node(Node.KEYFRAMES);
      node.add(this.match());
      node.add(this.match(Token.ID));

      while (this.look && [Token.ID, Token.VARS].indexOf(this.look.type()) > -1) {
        node.add(this.match());
      }

      node.add(this.block(true));
      return node;
    },
    page: function () {
      var node = new Node(Node.PAGE);
      node.add(this.match());

      if (this.look && this.look.type() == Token.ID) {
        node.add(this.match());
      }

      if (this.look && this.look.type() == Token.PSEUDO) {
        node.add(this.match());
      }

      node.add(this.block());
      return node;
    },
    fn: function () {
      var node = new Node(Node.FN);
      node.add(this.match(Token.VARS), this.params(), this.block());
      return node;
    },
    params: function () {
      var node = new Node(Node.PARAMS);
      node.add(this.match('('));

      while (this.look && this.look.content() != ')') {
        node.add(this.match(Token.VARS));

        if (this.look && this.look.content() == ',') {
          node.add(this.match());
        }
      }

      node.add(this.match(')'));
      return node;
    },
    fnc: function () {
      var node = new Node(Node.FNC);
      node.add(this.match(), this.cparams());
      return node;
    },
    cparams: function () {
      var node = new Node(Node.CPARAMS);
      node.add(this.match('('));

      while (this.look && this.look.content() != ')') {
        if (this.look.content() == '~' && this.tokens[this.index] && [Token.VARS, Token.STRING].indexOf(this.tokens[this.index].type()) > -1) {
          node.add(this.unbox());
        } else if (this.look.content() == '[') {
          node.add(this.arrltr());
        } else if (this.look.content() == '@dir') {
          node.add(this.dir());
        } else if (this.look.type() == Token.KEYWORD || this.look.type() == Token.HACK) {
          node.add(this.style(null, true, true));
        } else {
          node.add(this.value(null, true));
        }

        if (this.look && this.look.content() == ',') {
          node.add(this.match());
        }
      }

      node.add(this.match(')'));
      return node;
    },
    namespace: function () {
      var node = new Node(Node.NAMESPACE);
      node.add(this.match());

      if (this.look && this.look.type() == Token.ID) {
        node.add(this.match());
      }

      node.add(this.addexpr(Token.STRING));
      node.add(this.match(';'));
      return node;
    },
    doc: function () {
      var node = new Node(Node.DOC);
      node.add(this.match());

      if (!this.look) {
        this.error();
      }

      switch (this.look.content().toLowerCase()) {
        case 'url-prefix':
        case 'domain':
        case 'regexp':
          node.add(this.urlPrefix(this.look.content().toUpperCase().replace('-', '')));
          break;

        case 'url':
          node.add(this.url());
          break;

        default:
          this.error();
      }

      while (this.look && this.look.content() == ',') {
        node.add(this.match());

        if (!this.look) {
          this.error();
        }

        switch (this.look.content().toLowerCase()) {
          case 'url-prefix':
          case 'domain':
          case 'regexp':
            node.add(this.urlPrefix(this.look.content().toUpperCase().replace('-', '')));
            break;

          case 'url':
            node.add(this.url());
            break;

          default:
            this.error();
        }
      }

      if (this.look && this.look.content() == '{') {
        node.add(this.block());
      }

      return node;
    },
    urlPrefix: function (name) {
      var node = new Node(Node[name]);
      node.add(this.match(), this.match('('));

      if (this.look && this.look.content() != ')') {
        node.add(this.addexpr(Token.STRING));
      }

      node.add(this.match(')'));
      return node;
    },
    vardecl: function () {
      var node = new Node(Node.VARDECL);
      node.add(this.match());

      if (!this.look) {
        this.error();
      }

      if ([':', '='].indexOf(this.look.content()) > -1) {
        node.add(this.match());
      } else {
        this.error();
      }

      if (!this.look) {
        this.error();
      }

      if (this.look.content() == '[') {
        node.add(this.arrltr());
      } else if (this.look.content() == '@dir') {
        node.add(this.dir());
      } else if (this.look.type() == Token.KEYWORD || this.look.type() == Token.HACK) {
        node.add(this.style(null, true, true));
      } else {
        node.add(this.value(null, true));
      }

      return node;
    },
    styleset: function (kf) {
      var node = new Node(Node.STYLESET);
      node.add(this.selectors(kf)); //兼容less的继承写法，即只写一个选择器

      if (this.look && [';', '}'].indexOf(this.look.content()) > -1) {
        node.name(Node.EXTEND);
        var extend = new Token(Token.VIRTUAL, '@extend');
        extend = new Node(Node.TOKEN, extend);
        node.addFirst(extend);
        return node;
      }

      node.add(this.block());
      return node;
    },
    selectors: function (kf) {
      var node = new Node(Node.SELECTORS);
      node.add(this.selector(kf));

      while (this.look && this.look.content() == ',') {
        node.add(this.match());
        node.add(this.selector(kf));
      }

      return node;
    },
    selector: function (kf) {
      var node = new Node(Node.SELECTOR);

      if (!this.look) {
        this.error();
      }

      if (kf && this.look.type() == Token.NUMBER) {
        node.add(this.match());
        node.add(this.match('%'));
      } else {
        var s = this.look.content().toLowerCase();

        if (s == '[' && this.look.type() != Token.HACK) {
          this.bracket1(node);
        } else {
          node.add(this.match([Token.SELECTOR, Token.PSEUDO, Token.HACK, Token.VARS]));
        }

        while (this.look && [',', ';', '{', '}'].indexOf(this.look.content()) == -1) {
          if (this.look.content() == '[' && this.look.type() != Token.HACK) {
            this.bracket1(node);
          } else if (this.look.content() == '(') {
            this.bracket2(node);
          } else {
            node.add(this.match([Token.SELECTOR, Token.PSEUDO, Token.SIGN, Token.HACK, Token.VARS]));
          }
        }
      }

      return node;
    },
    bracket1: function (node) {
      node.add(this.match());

      while (this.look && [']', '(', ')'].indexOf(this.look.content()) == -1) {
        node.add(this.match([Token.ATTR, Token.SIGN, Token.VARS, Token.NUMBER, Token.UNITS, Token.STRING]));
      }

      node.add(this.match(']'));
    },
    bracket2: function (node) {
      node.add(this.match());

      while (this.look && this.look.content() != ')') {
        if (this.look.content() == '[') {
          this.bracket1(node);
        }

        if (this.look && this.look.content() == ')') {
          break;
        }

        node.add(this.match([Token.SELECTOR, Token.PSEUDO, Token.VARS, Token.NUMBER, Token.UNITS]));
      }
    },
    block: function (kf) {
      var node = new Node(Node.BLOCK);
      node.add(this.match('{'));

      while (this.look && this.look.content() != '}') {
        if (this.look.type() == Token.SELECTOR || this.look.content() == '[' && this.look.type() != Token.HACK) {
          node.add(this.styleset());
        } else if (kf && this.look.type() == Token.NUMBER) {
          node.add(this.styleset(kf));
        } else if (this.look.type() == Token.HEAD) {
          node.add(this.head());
        } else if (this.look.type() == Token.VARS) {
          var isFnCall = false;
          var isDecl = false;

          for (var i = this.index; i < this.length; i++) {
            var t = this.tokens[i];

            if (!S.hasOwnProperty(t.type())) {
              isFnCall = t.content() == '(';
              isDecl = [':', '='].indexOf(t.content()) > -1;
              break;
            }
          }

          if (isFnCall) {
            node.add(this.fnc());
          } else if (isDecl) {
            node.add(this.varstmt());
          } else {
            node.add(this.addexpr());

            if (this.look && this.look.content() == ':') {
              node.add(this.match(), this.value());
            } else {
              node.add(this.match(';'));
            }
          }
        } else if (this.look.content() == ';') {
          node.add(this.match());
        } else {
          node.add(this.style());
        }
      }

      node.add(this.match('}'));
      return node;
    },
    style: function (name, noS, noC) {
      var node = new Node(Node.STYLE);
      var k = this.key(name);
      node.add(k);
      var first = k.first();

      if (first.token().type() == Token.HACK) {
        first = first.next();
      }

      name = first.token().content().toLowerCase();
      node.add(this.match(':'));
      node.add(this.value(name, noC));

      while (this.look && this.look.type() == Token.HACK) {
        node.add(this.match());
      }

      if (!noS) {
        node.add(this.match(';'));
      }

      return node;
    },
    key: function (name) {
      var node = new Node(Node.KEY);

      while (this.look && this.look.type() == Token.HACK) {
        node.add(this.match());
      }

      if (!this.look) {
        this.error();
      }

      if (name) {
        if (this.look.type() == Token.VARS) {
          node.add(this.match());
        } else {
          node.add(this.match(name));
        }
      } else {
        node.add(this.addexpr([Token.STRING, Token.KEYWORD]));
      }

      return node;
    },
    value: function (name, noComma) {
      var node = new Node(Node.VALUE);

      if (!this.look) {
        this.error();
      }

      var s = this.look.content().toLowerCase();

      if (s == '~' && this.tokens[this.index] && [Token.VARS, Token.STRING].indexOf(this.tokens[this.index].type()) > -1) {
        node.add(this.unbox());
        return node;
      }

      var pCount = 0;
      var bCount = 0;

      if ([Token.COLOR, Token.HACK, Token.VARS, Token.ID, Token.PROPERTY, Token.NUMBER, Token.STRING, Token.HEAD, Token.SIGN, Token.UNITS, Token.KEYWORD].indexOf(this.look.type()) > -1 && [';', '}'].indexOf(s) == -1) {
        //内置函数必须后跟(
        var next = this.tokens[this.index] && this.tokens[this.index].content() == '(';

        switch (s) {
          case 'var':
            node.add(next ? this.vars() : this.match());
            break;

          case 'url':
            node.add(next ? this.url() : this.match());
            break;

          case 'format':
            node.add(next ? this.format() : this.match());
            break;

          case 'rgb':
            node.add(next ? this.rgb() : this.match());
            break;

          case 'rgba':
            node.add(next ? this.rgb(true) : this.match());
            break;

          case 'hsl':
            node.add(next ? this.hsl() : this.match());
            break;

          case 'hsla':
            node.add(next ? this.hsl(true) : this.match());
            break;

          case 'max':
            node.add(next ? this.minmax(true) : this.match());
            break;

          case 'min':
            node.add(next ? this.minmax() : this.match());
            break;

          case 'calc':
            node.add(next ? this.calc() : this.match());
            break;
          //这几个语法完全一样
          //cycle是toggle的老版本写法

          case 'cycle':
          case 'toggle':
          case 'counter':
          case 'attr':
          case 'translate':
          case 'rect':
          case 'translate3d':
          case 'translatex':
          case 'translatey':
          case 'translatez':
          case 'rotate':
          case 'rotate3d':
          case 'rotatex':
          case 'rotatey':
          case 'rotatez':
          case 'scale':
          case 'scale3d':
          case 'scalex':
          case 'scaley':
          case 'scalez':
            node.add(next ? this.counter(s) : this.match());
            break;

          case 'linear-gradient':
          case 'repeating-linear-gradient':
            node.add(next ? this.lg() : this.match());
            break;

          case 'radial-gradient':
          case 'repeating-radial-gradient':
            node.add(next ? this.rg() : this.match());
            break;

          case 'alpha':
          case 'blur':
          case 'chroma':
          case 'dropshadow':
          case 'fliph':
          case 'flipv':
          case 'glow':
          case 'gray':
          case 'invert':
          case 'light':
          case 'mask':
          case 'shadow':
          case 'wave':
          case 'xray':
          case 'dximagetransform.microsoft.gradient':
            node.add(next ? this.filter() : this.match());
            break;

          default:
            if (s == '(') {
              pCount++;
            } else if (s == ')') {
              this.error();
            } else if (noComma && s == ',') {
              this.error();
            } else if (s == '[') {
              bCount++;
            } else if (s == ']') {
              if (bCount == 0) {
                return node;
              }

              bCount--;
            } //LL2确定是否是fncall


            var fncall = false;

            if (this.look.type() == Token.VARS) {
              for (var i = this.index; i < this.length; i++) {
                var t = this.tokens[i];

                if (!S.hasOwnProperty(t.type())) {
                  if (t.content() == '(') {
                    fncall = true;
                  }

                  break;
                }
              }
            }

            if (fncall) {
              node.add(this.fnc());
            } else if (NO_MTPL.hasOwnProperty(name)) {
              node.add(this.addexpr(undefined, null, true));
            } else {
              node.add(this.addexpr());
            }

            break;
        }
      } else {
        this.error();
      }

      outer: while (this.look) {
        s = this.look.content().toLowerCase();

        if ([Token.COLOR, Token.HACK, Token.VARS, Token.ID, Token.PROPERTY, Token.NUMBER, Token.STRING, Token.HEAD, Token.KEYWORD, Token.SIGN, Token.UNITS, Token.KEYWORD].indexOf(this.look.type()) > -1 && [';', '}'].indexOf(this.look.content()) == -1) {
          //内置函数必须后跟(
          var next = this.tokens[this.index] && this.tokens[this.index].content() == '(';

          switch (s) {
            case 'var':
              node.add(next ? this.vars() : this.match());
              break;

            case 'url':
              node.add(next ? this.url() : this.match());
              break;

            case 'format':
              node.add(next ? this.format() : this.match());
              break;

            case 'rgb':
              node.add(next ? this.rgb() : this.match());
              break;

            case 'rgba':
              node.add(next ? this.rgb(true) : this.match());
              break;

            case 'hsl':
              node.add(next ? this.hsl() : this.match());
              break;

            case 'hsla':
              node.add(next ? this.hsl(true) : this.match());
              break;

            case 'min':
              node.add(next ? this.minmax() : this.match());
              break;

            case 'max':
              node.add(next ? this.minmax(true) : this.match());
              break;

            case 'calc':
              node.add(next ? this.calc() : this.match());
              break;
            //这几个语法完全一样
            //cycle是toggle的老版本写法

            case 'cycle':
            case 'toggle':
            case 'counter':
            case 'attr':
            case 'translate':
            case 'rect':
            case 'translate3d':
            case 'translatex':
            case 'translatey':
            case 'translatez':
            case 'rotate':
            case 'rotate3d':
            case 'rotatex':
            case 'rotatey':
            case 'rotatez':
            case 'scale':
            case 'scale3d':
            case 'scalex':
            case 'scaley':
            case 'scalez':
              node.add(next ? this.counter(s) : this.match());
              break;

            case 'linear-gradient':
            case 'repeating-linear-gradient':
              node.add(next ? this.lg() : this.match());
              break;

            case 'radial-gradient':
            case 'repeating-radial-gradient':
              node.add(next ? this.rg() : this.match());
              break;

            case 'alpha':
            case 'blur':
            case 'chroma':
            case 'dropshadow':
            case 'fliph':
            case 'flipv':
            case 'glow':
            case 'gray':
            case 'invert':
            case 'light':
            case 'mask':
            case 'shadow':
            case 'wave':
            case 'xray':
            case 'dximagetransform.microsoft.gradient':
              node.add(next ? this.filter() : this.match());
              break;

            default:
              if (s == '(') {
                pCount++;
              } else if (s == ')') {
                pCount--;

                if (pCount < 0) {
                  break outer;
                }
              } else if (noComma && s == ',') {
                break outer;
              } else if (s == '[') {
                bCount++;
              } else if (s == ']') {
                if (bCount == 0) {
                  return node;
                }

                bCount--;
              } else if (s == '~' && this.tokens[this.index] && [Token.VARS, Token.STRING].indexOf(this.tokens[this.index].type()) > -1) {
                node.add(this.unbox());
                break;
              } //LL2确定是否是fncall


              var fncall = false;

              if (this.look.type() == Token.VARS) {
                for (var i = this.index; i < this.length; i++) {
                  var t = this.tokens[i];

                  if (!S.hasOwnProperty(t.type())) {
                    if (t.content() == '(') {
                      fncall = true;
                    }

                    break;
                  }
                }
              }

              if (fncall) {
                node.add(this.fnc());
              } else if (NO_MTPL.hasOwnProperty(name)) {
                node.add(this.addexpr(undefined, null, true));
              } else {
                node.add(this.addexpr());
              }

              break;
          }
        } else {
          break;
        }
      }

      if (this.look && this.look.type() == Token.IMPORTANT) {
        node.add(this.match());
      }

      return node;
    },
    rg: function () {
      var node = new Node(Node.RADIOGRADIENT);
      node.add(this.match(), this.match('('));

      if (!this.look) {
        this.error();
      }

      if (this.look.type() == Token.NUMBER || ['left', 'center', 'right'].indexOf(this.look.content().toLowerCase()) > -1) {
        node.add(this.pos());
        node.add(this.match(','));
      }

      if (!this.look) {
        this.error();
      }

      if (this.look.type() == Token.NUMBER) {
        node.add(this.len());
        node.add(this.len());
      } else {
        node.add(this.match(['circle', 'ellipse', 'closest-side', 'closest-corner', 'farthest-side', 'farthest-corner', 'contain', 'cover']));
      }

      node.add(this.match(','), this.colorstop());

      while (this.look && this.look.content() == ',') {
        node.add(this.match(), this.colorstop());
      }

      node.add(this.match(')'));
      return node;
    },
    pos: function () {
      var node = new Node(Node.POS);

      if (this.look.type() == Token.NUMBER) {
        node.add(this.len());
      } else {
        node.add(this.match(['left', 'center', 'right']));
      }

      if (this.look) {
        if (this.look.type() == Token.NUMBER) {
          node.add(this.len());
        } else if (['top', 'center', 'bottom'].indexOf(this.look.content().toLowerCase()) > -1) {
          node.add(this.match());
        }
      }

      return node;
    },
    len: function () {
      var node = new Node(Node.LEN);
      var isZeror = this.look.content() == '0';
      node.add(this.match(Token.NUMBER));

      if (this.look && this.look.type() == Token.UNITS) {
        node.add(this.match());
      } else if (!isZeror) {
        this.error();
      }

      return node;
    },
    lg: function () {
      var node = new Node(Node.LINEARGRADIENT);
      node.add(this.match(), this.match('('));

      if (!this.look) {
        this.error();
      }

      switch (this.look.type()) {
        case Token.NUMBER:
        case Token.PROPERTY:
        case Token.ID:
          node.add(this.point());
          node.add(this.match(','));
          break;
      }

      node.add(this.colorstop(), this.match(','), this.colorstop());

      while (this.look && this.look.content() == ',') {
        node.add(this.match(), this.colorstop());
      }

      node.add(this.match(')'));
      return node;
    },
    point: function () {
      var node = new Node(Node.POINT);

      if (this.look.type() == Token.NUMBER) {
        node.add(this.match(), this.match('deg'));
      } else {
        if (this.look && this.look.content().toLowerCase() == 'to') {
          node.add(this.match());
        }

        node.add(this.match(['left', 'right', 'top', 'bottom', 'center']));

        if (this.look && this.look.content().toLowerCase() == 'to') {
          node.add(this.match());
        }

        if (this.look && this.look.type() == Token.PROPERTY) {
          node.add(this.match(['left', 'right', 'top', 'bottom', 'center']));
        }
      }

      return node;
    },
    colorstop: function () {
      var node = new Node(Node.COLORSTOP);

      if (!this.look) {
        this.error();
      }

      if (this.look.type() == Token.COLOR) {
        node.add(this.match(Token.COLOR));
      } else {
        switch (this.look.content()) {
          case 'rgb':
            node.add(this.rgb());
            break;

          case 'rgba':
            node.add(this.rgb(true));
            break;

          case 'hsl':
            node.add(this.hsl());
            break;

          case 'hsla':
            node.add(this.hsl(true));
            break;

          default:
            this.error();
        }
      }

      if (this.look && this.look.type() == Token.NUMBER) {
        var isZero = this.look.content() == '0';
        node.add(this.match());

        if (this.look && this.look.type() == Token.UNITS) {
          node.add(this.match());
        } else if (!isZero) {
          this.error();
        }
      }

      return node;
    },
    minmax: function (max) {
      var node = new Node(max ? Node.MAX : Node.MIN);
      node.add(this.match(), this.match('('));
      node.add(this.param());

      while (this.look && this.look.content() == ',') {
        node.add(this.match());
        node.add(this.param());
      }

      node.add(this.match(')'));
      return node;
    },
    param: function (expr) {
      var node = new Node(Node.PARAM);
      var s = this.look.content().toLowerCase();

      if ([Token.COLOR, Token.HACK, Token.VARS, Token.ID, Token.PROPERTY, Token.NUMBER, Token.STRING, Token.HEAD, Token.SIGN, Token.UNITS, Token.KEYWORD].indexOf(this.look.type()) > -1 && [';', '}', ')', ','].indexOf(s) == -1) {
        node.add(expr ? this.addexpr() : this.match());
      } else {
        this.error();
      }

      while (this.look) {
        s = this.look.content().toLowerCase();

        if ([Token.COLOR, Token.HACK, Token.VARS, Token.ID, Token.PROPERTY, Token.NUMBER, Token.STRING, Token.HEAD, Token.KEYWORD, Token.SIGN, Token.UNITS, Token.KEYWORD].indexOf(this.look.type()) > -1 && [';', '}', ')', ','].indexOf(this.look.content()) == -1) {
          node.add(expr ? this.addexpr() : this.match());
        } else {
          break;
        }
      }

      return node;
    },
    vars: function () {
      var node = new Node(Node.VARS);
      node.add(this.match(), this.match('('), this.addexpr(), this.match(')'));
      return node;
    },
    calc: function () {
      var node = new Node(Node.CALC);
      node.add(this.match(), this.match('('));
      var count = 0;

      while (this.look) {
        var s = this.look.content();

        if ([';', '}'].indexOf(s) > -1) {
          this.error();
        } else if (s == '(') {
          count++;
        } else if (s == ')') {
          if (count-- == 0) {
            break;
          }
        }

        node.add(this.match());
      }

      node.add(this.match(')'));
      return node;
    },
    counter: function (name) {
      var node = new Node(Node[name.toUpperCase()]);
      node.add(this.match(), this.match('('), this.param(true));

      while (this.look && this.look.content() == ',') {
        node.add(this.match(), this.param(true));
      }

      node.add(this.match(')'));
      return node;
    },
    filter: function () {
      var node = new Node(Node.FILTER);
      var isFn = false;

      for (var i = this.index; i < this.length; i++) {
        var t = this.tokens[i];

        if (!S.hasOwnProperty(t.type())) {
          isFn = t.content() == '(';
          break;
        }
      }

      if (!isFn) {
        return this.match();
      }

      node.add(this.match(), this.match('('));
      node.add(this.param(true));

      while (this.look && this.look.content() == ',') {
        node.add(this.match(), this.param(true));
      }

      node.add(this.match(')'));
      return node;
    },
    rgb: function (alpha) {
      var node = new Node(alpha ? Node.RGBA : Node.RGB);
      node.add(this.match(), this.match('('), this.addexpr(Token.NUMBER), this.match(','), this.addexpr(Token.NUMBER), this.match(','), this.addexpr(Token.NUMBER));

      if (alpha) {
        node.add(this.match(','), this.addexpr(Token.NUMBER));
      }

      node.add(this.match(')'));
      return node;
    },
    hsl: function (alpha) {
      var node = new Node(alpha ? Node.HSLA : Node.HSL);
      node.add(this.match(), this.match('('), this.addexpr(Token.NUMBER), this.match(','));
      var isZero = this.look && this.look.content() == '0';
      var isVar = this.look && this.look.type() == Token.VARS;
      node.add(this.addexpr(Token.NUMBER, true));

      if (this.look && this.look.content() == '%') {
        node.add(this.match());
      } else if (!isZero && !isVar) {
        this.error();
      }

      node.add(this.match(','));
      var isZero = this.look && this.look.content() == '0';
      var isVar = this.look && this.look.type() == Token.VARS;
      node.add(this.addexpr(Token.NUMBER, true));

      if (this.look && this.look.content() == '%') {
        node.add(this.match());
      } else if (!isZero && !isVar) {
        this.error();
      }

      if (alpha) {
        node.add(this.match(','), this.addexpr(Token.NUMBER));
      }

      node.add(this.match(')'));
      return node;
    },
    url: function (ellipsis) {
      if (!this.look) {
        this.error();
      }

      var node = new Node(Node.URL);

      if (ellipsis && this.look.type() == Token.STRING) {
        if (this.look.content().charAt(0) == '"') {
          node.add(this.match());
        } else {
          this.error('missing quotation');
        }
      } else {
        node.add(this.match('url'), this.match('('));

        if (this.look && this.look.content() != ')') {
          node.add(this.addexpr(Token.STRING));
        }

        node.add(this.match(')'));
      }

      return node;
    },
    format: function () {
      var node = new Node(Node.FORMAT);
      node.add(this.match());
      node.add(this.match('('));
      node.add(this.addexpr(Token.STRING));
      node.add(this.match(')'));
      return node;
    },
    addexpr: function (accepts, noUnit, noMtpl) {
      if (accepts && !Array.isArray(accepts)) {
        accepts = [accepts];
      }

      if (accepts && accepts.indexOf(Token.VARS) == -1) {
        accepts = accepts.concat([Token.VARS]);
      }

      if (accepts && accepts.indexOf(Token.NUMBER) == -1) {
        accepts = accepts.concat([Token.NUMBER]);
      }

      var node = new Node(Node.ADDEXPR);
      var mtplexpr = this.mtplexpr(accepts, noUnit, noMtpl);

      if (this.look && ['+', '-'].indexOf(this.look.content()) != -1) {
        node.add(mtplexpr);

        while (this.look && ['+', '-'].indexOf(this.look.content()) != -1) {
          node.add(this.match(), this.mtplexpr(accepts, noUnit, noMtpl));

          if (!noUnit && this.look && this.look.type() == Token.UNITS) {
            node.add(this.match());
          }
        }
      } else {
        return mtplexpr;
      }

      return node;
    },
    mtplexpr: function (accepts, noUnit, noMtpl) {
      var node = new Node(Node.MTPLEXPR);
      var prmrexpr = this.prmrexpr(accepts, noUnit);

      if (!noMtpl && this.look && ['*', '/'].indexOf(this.look.content()) != -1) {
        node.add(prmrexpr);

        while (this.look && ['*', '/'].indexOf(this.look.content()) != -1) {
          node.add(this.match(), this.prmrexpr(accepts));

          if (!noUnit && this.look && this.look.type() == Token.UNITS) {
            node.add(this.match());
          }
        }
      } else {
        return prmrexpr;
      }

      return node;
    },
    prmrexpr: function (accepts, noUnit) {
      var node = new Node(Node.PRMREXPR);

      if (this.look && this.look.content() == '(') {
        node.add(this.match('('), this.addexpr(accepts, noUnit), this.match(')'));
        return node;
      }

      if (this.look.content() == '@basename') {
        return this.basename();
      } else if (this.look.content() == '@extname') {
        return this.extname();
      } else if (this.look.content() == '@width') {
        return this.width();
      } else if (this.look.content() == '@height') {
        return this.height();
      } //紧接着的(说明这是个未知的css内置id()


      var next = this.tokens[this.index];

      if (next && next.content() == '(' && [Token.PROPERTY, Token.ID].indexOf(this.look.type()) > -1) {
        return this.bracket();
      }

      var temp = this.match(accepts);

      if (!noUnit && this.look && this.look.type() == Token.UNITS) {
        temp = [temp, this.match()];
      }

      return temp;
    },
    bracket: function () {
      var node = new Node(Node.BRACKET);
      node.add(this.match([Token.ID, Token.PROPERTY]), this.match('('));

      while (this.look && this.look.content() != ')') {
        node.add(this.addexpr());
      }

      node.add(this.match(')'));
      return node;
    },
    ifstmt: function () {
      var node = new Node(Node.IFSTMT);
      node.add(this.match(), this.match('('), this.eqstmt(), this.match(')'), this.block());

      if (this.look) {
        if (this.look.content() == '@elseif') {
          node.add(this.ifstmt());
        } else if (this.look.content() == '@else') {
          node.add(this.match(), this.block());
        }
      }

      return node;
    },
    forstmt: function () {
      var node = new Node(Node.FORSTMT);
      node.add(this.match(), this.match('('));
      var type = 0; //0为普通，1为in，2为of
      //in和of和普通语句三种区分
      //debugger

      for (var i = this.index; i < this.length; i++) {
        var token = this.tokens[i];

        if (!S[token.type()]) {
          if (token.content() == 'in') {
            type = 1;
          } else if (token.content() == 'of') {
            type = 2;
          }

          break;
        }
      }

      if (type == 0) {
        //@for(varstmt ; expr ; epxr)
        if (this.look.content() != ';') {
          node.add(this.varstmt());
        } else {
          node.add(this.match(';'));
        }

        node.add(this.eqstmt());
        node.add(this.match(';'));
        node.add(this.eqstmt());
      } else if (type == 1) {
        //@for($var in expr)
        node.add(this.match(Token.VARS), this.match('in'), this.exprstmt());
      } else if (type == 2) {
        //@for($var of expr)
        node.add(this.match(Token.VARS), this.match('of'), this.exprstmt());
      }

      node.add(this.match(')'));
      node.add(this.block());
      return node;
    },
    varstmt: function () {
      var node = new Node(Node.VARSTMT);
      node.add(this.vardecl());

      while (this.look && this.look.content() == ',') {
        node.add(this.match(), this.vardecl());
      }

      node.add(this.match(';'));
      return node;
    },
    exprstmt: function () {
      if (!this.look) {
        this.error();
      }

      if (this.look.content() == '@dir') {
        return this.dir();
      }

      return this.eqstmt();
    },
    eqstmt: function () {
      var node = new Node(Node.EQSTMT);
      var relstmt = this.relstmt();

      if (this.look && {
        '==': true,
        '!=': true
      }.hasOwnProperty(this.look.content())) {
        node.add(relstmt, this.match(), this.relstmt());
      } else {
        return relstmt;
      }

      return node;
    },
    relstmt: function () {
      var node = new Node(Node.RELSTMT);
      var addstmt = this.addstmt();

      if (this.look && {
        '>': true,
        '<': true,
        '>=': true,
        '<=': true
      }.hasOwnProperty(this.look.content())) {
        node.add(addstmt, this.match(), this.addstmt());
      } else {
        return addstmt;
      }

      return node;
    },
    addstmt: function () {
      if (this.look.content() == '@basename') {
        return this.basename();
      } else if (this.look.content() == '@extname') {
        return this.extname();
      }

      var node = new Node(Node.ADDSTMT);
      var mtplstmt = this.mtplstmt();

      if (this.look && {
        '+': true,
        '-': true
      }.hasOwnProperty(this.look.content())) {
        node.add(mtplstmt, this.match(), this.mtplstmt());

        while (this.look && {
          '+': true,
          '-': true
        }.hasOwnProperty(this.look.content())) {
          node.add(mtplstmt, this.match(), this.mtplstmt());
        }
      } else {
        return mtplstmt;
      }

      return node;
    },
    mtplstmt: function () {
      var node = new Node(Node.MTPLSTMT);
      var postfixstmt = this.postfixstmt();

      if (this.look && {
        '*': true,
        '/': true
      }.hasOwnProperty(this.look.content())) {
        node.add(postfixstmt, this.match(), this.postfixstmt());

        while (this.look && {
          '*': true,
          '/': true
        }.hasOwnProperty(this.look.content())) {
          node.add(postfixstmt, this.match(), this.postfixstmt());
        }
      } else {
        return postfixstmt;
      }

      return node;
    },
    postfixstmt: function () {
      if (this.look.content() == '@width') {
        return this.width();
      } else if (this.look.content() == '@height') {
        return this.height();
      }

      var node = new Node(Node.POSTFIXSTMT);
      var prmrstmt = this.prmrstmt();

      if (this.look && {
        '++': true,
        '--': true
      }.hasOwnProperty(this.look.content())) {
        node.add(prmrstmt, this.match());
      } else {
        return prmrstmt;
      }

      return node;
    },
    prmrstmt: function () {
      var node = new Node(Node.PRMRSTMT);

      switch (this.look.type()) {
        case Token.VARS:
        case Token.NUMBER:
        case Token.STRING:
          node.add(this.match());
          break;

        default:
          switch (this.look.content()) {
            case '(':
              node.add(this.match(), this.eqstmt(), this.match(')'));
              break;

            case '[':
              return this.arrltr();

            default:
              this.error();
          }

      }

      return node;
    },
    arrltr: function () {
      var node = new Node(Node.ARRLTR);
      node.add(this.match('['));

      while (this.look && this.look.content() != ']') {
        if (this.look.content() == ',') {
          node.add(this.match());
        }

        if (!this.look) {
          this.error();
        }

        if (this.look.type() == Token.KEYWORD || this.look.type() == Token.HACK) {
          node.add(this.style(null, true, true));
        } else {
          node.add(this.value(null, true));
        }
      }

      node.add(this.match(']'));
      return node;
    },
    dir: function () {
      var node = new Node(Node.DIR);
      node.add(this.match(), this.cparams());
      return node;
    },
    basename: function () {
      var node = new Node(Node.BASENAME);
      node.add(this.match(), this.cparams());
      return node;
    },
    extname: function () {
      var node = new Node(Node.EXTNAME);
      node.add(this.match(), this.cparams());
      return node;
    },
    width: function () {
      var node = new Node(Node.WIDTH);
      node.add(this.match(), this.cparams());
      return node;
    },
    height: function () {
      var node = new Node(Node.HEIGHT);
      node.add(this.match(), this.cparams());
      return node;
    },
    unbox: function () {
      var node = new Node(Node.UNBOX);
      node.add(this.match('~'), this.match([Token.VARS, Token.STRING]));
      return node;
    },
    match: function (type, msg) {
      //未定义为所有
      if (character.isUndefined(type)) {
        if (this.look) {
          var l = this.look;
          this.move();
          return new Node(Node.TOKEN, l);
        } else {
          this.error('syntax error' + (msg || ''));
        }
      } //数组为其中一个即可
      else if (Array.isArray(type)) {
          if (this.look) {
            for (var i = 0, len = type.length; i < len; i++) {
              var t = type[i];

              if (typeof t == 'string' && this.look.content() == t) {
                var l = this.look;
                this.move();
                return new Node(Node.TOKEN, l);
              } else if (typeof t == 'number' && this.look.type() == t) {
                var l = this.look;
                this.move();
                return new Node(Node.TOKEN, l);
              }
            }
          }

          this.error('missing ' + type.join('|') + (msg || ''));
        } //或者根据token的type或者content匹配
        else if (typeof type == 'string') {
            if (this.look && this.look.content().toLowerCase() == type) {
              var l = this.look;
              this.move();
              return new Node(Node.TOKEN, l);
            } else if (type == ';' && this.look && this.look.content() == '}') {
              var l = new Token(Token.VIRTUAL, ';');
              return new Node(Node.TOKEN, l);
            } else {
              this.error('missing ' + type + (msg || ''));
            }
          } else if (typeof type == 'number') {
            if (this.look && this.look.type() == type) {
              var l = this.look;
              this.move();
              return new Node(Node.TOKEN, l);
            } else {
              this.error('missing ' + Token.type(type) + (msg || ''));
            }
          }
    },
    error: function (msg) {
      msg = 'SyntaxError: ' + (msg || ' syntax error');
      throw new Error(msg + ' line ' + this.lastLine + ' col ' + this.lastCol + ' look ' + (this.look && this.look.content()));
    },
    move: function () {
      this.lastLine = this.line;
      this.lastCol = this.col;

      do {
        this.look = this.tokens[this.index++];

        if (!this.look) {
          return;
        } //存下忽略的token


        if ([Token.BLANK, Token.TAB, Token.ENTER, Token.LINE, Token.COMMENT, Token.IGNORE].indexOf(this.look.type()) != -1) {
          this.ignores[this.index - 1] = this.look;
        }

        if (this.look.type() == Token.LINE) {
          this.line++;
          this.col = 1;
        } else if (this.look.type() == Token.COMMENT) {
          var s = this.look.content(),
              n = character.count(s, character.LINE);

          if (n > 0) {
            this.line += n;
            var i = s.lastIndexOf(character.LINE);
            this.col += s.length - i - 1;
          }
        } else if (this.look.type() == Token.IGNORE) {
          var s = this.look.content(),
              n = character.count(s, character.LINE);

          if (n > 0) {
            this.line += n;
            var i = s.lastIndexOf(character.LINE);
            this.col += s.length - i - 1;
          }
        } else {
          this.col += this.look.content().length;

          if ([Token.BLANK, Token.TAB, Token.ENTER].indexOf(this.look.type()) == -1) {
            break;
          }
        }
      } while (this.index <= this.length);
    },
    ignore: function () {
      return this.ignores;
    }
  });
  module.exports = Parser;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/parser/es6/Node.js":
/*!********************************************************!*\
  !*** ./node_modules/homunculus/web/parser/es6/Node.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var INode = __webpack_require__(/*! ../Node */ "./node_modules/homunculus/web/parser/Node.js");

  var Node = INode.extend(function (type, children) {
    INode.call(this, type, children);
    return this;
  }).statics({
    SCRIPT: 'script',
    SCRIPTBODY: 'scriptbody',
    VARSTMT: 'varstmt',
    VARDECL: 'vardecl',
    FNBODY: 'fnbody',
    BLOCKSTMT: 'blockstmt',
    BLOCK: 'block',
    ITERSTMT: 'iterstmt',
    FNPARAMS: 'fnparams',
    RESTPARAM: 'restparam',
    EXPR: 'expr',
    STMT: 'stmt',
    ASSIGN: 'assign',
    EMPTSTMT: 'emptstmt',
    IFSTMT: 'ifstmt',
    CNTNSTMT: 'cntnstmt',
    BRKSTMT: 'brkstmt',
    RETSTMT: 'retstmt',
    WITHSTMT: 'withstmt',
    SWCHSTMT: 'swchstmt',
    CASEBLOCK: 'caseblock',
    CASECLAUSE: 'caseclause',
    DFTCLAUSE: 'dftclause',
    LABSTMT: 'labstmt',
    THRSTMT: 'thrstmt',
    TRYSTMT: 'trystmt',
    DEBSTMT: 'debstmt',
    EXPRSTMT: 'exprstmt',
    CACH: 'cach',
    CACHPARAM: 'cachparam',
    FINL: 'finl',
    FNDECL: 'fndecl',
    FNEXPR: 'fnexpr',
    ASSIGNEXPR: 'assignexpr',
    CNDTEXPR: 'cndtexpr',
    LOGOREXPR: 'logorexpr',
    LOGANDEXPR: 'logandexpr',
    BITOREXPR: 'bitorexpr',
    BITANDEXPR: 'bitandexpr',
    BITXOREXPR: 'bitxorexpr',
    EQEXPR: 'eqexpr',
    RELTEXPR: 'reltexpr',
    SHIFTEXPR: 'shiftexpr',
    ADDEXPR: 'addexpr',
    MTPLEXPR: 'mtplexpr',
    UNARYEXPR: 'unaryexpr',
    MMBEXPR: 'mmbexpr',
    PRMREXPR: 'prmrexpr',
    ARRLTR: 'arrltr',
    OBJLTR: 'objltr',
    PROPTDEF: 'proptdef',
    ARGS: 'args',
    ARGLIST: 'arglist',
    IMPTSTMT: 'imptstmt',
    POSTFIXEXPR: 'postfixexpr',
    NEWEXPR: 'newexpr',
    CALLEXPR: 'callexpr',
    SPREAD: 'spread',
    ARRCMPH: 'arrcmph',
    CMPHFOR: 'cmphfor',
    INITLZ: 'initlz',
    BINDID: 'bindid',
    ARRBINDPAT: 'arrbindpat',
    OBJBINDPAT: 'objbindpat',
    BINDELEM: 'bindelem',
    BINDREST: 'bindrest',
    PROPTNAME: 'proptname',
    SINGLENAME: 'singlename',
    BINDPROPT: 'bindpropt',
    LTRPROPT: 'ltrpropt',
    CMPTPROPT: 'cmptpropt',
    LEXDECL: 'lexdecl',
    LEXBIND: 'lexbind',
    FMPARAMS: 'fmparams',
    CMPHIF: 'cmphif',
    YIELDEXPR: 'yieldexpr',
    ARROWFN: 'arrowfn',
    ARROWPARAMS: 'arrowparams',
    CPEAPL: 'cpeapl',
    CLASSEXPR: 'classexpr',
    GENEXPR: 'genexpr',
    GENDECL: 'gendecl',
    GENCMPH: 'gencmph',
    CMPH: 'cmph',
    CNCSBODY: 'cncsbody',
    CLASSDECL: 'classdecl',
    HERITAGE: 'heritage',
    CLASSBODY: 'classbody',
    CLASSELEM: 'classelem',
    METHOD: 'method',
    GENMETHOD: 'genmethod',
    MODULEBODY: 'moduelbody',
    IMPORT: 'import',
    EXPORT: 'export',
    IMPORTDECL: 'importdecl',
    MODULEIMPORT: 'moduleimport',
    FROMCAULSE: 'formcaulse',
    IMPORTCAULSE: 'importcaulse',
    NAMEIMPORT: 'nameimport',
    IMPORTSPEC: 'importspec',
    EXPORTDECL: 'exportdecl',
    EXPORTCAULSE: 'exportcaulse',
    EXPORTSPEC: 'exportspec',
    ANNOT: 'annot',
    TEMPLATE: 'template',
    ASYNCDECL: 'asyncdecl',
    ASYNCARROWFN: 'asyncarrowfn',
    ASYNCEXPR: 'asyncexpr',
    ASYNCMETHOD: 'asyncmethod',
    getKey: function (s) {
      if (!s) {
        throw new Error('empty value');
      }

      if (!keys) {
        var self = this;
        keys = {};
        Object.keys(this).forEach(function (k) {
          var v = self[k];
          keys[v] = k;
        });
      }

      return keys[s];
    }
  });
  var keys;
  module.exports = Node;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/parser/es6/Parser.js":
/*!**********************************************************!*\
  !*** ./node_modules/homunculus/web/parser/es6/Parser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var IParser = __webpack_require__(/*! ../Parser */ "./node_modules/homunculus/web/parser/Parser.js");

  var character = __webpack_require__(/*! ../../util/character */ "./node_modules/homunculus/web/util/character.js");

  var Lexer = __webpack_require__(/*! ../../lexer/EcmascriptLexer */ "./node_modules/homunculus/web/lexer/EcmascriptLexer.js");

  var Rule = __webpack_require__(/*! ../../lexer/rule/EcmascriptRule */ "./node_modules/homunculus/web/lexer/rule/EcmascriptRule.js");

  var Token = __webpack_require__(/*! ../../lexer/Token */ "./node_modules/homunculus/web/lexer/Token.js");

  var Node = __webpack_require__(/*! ./Node */ "./node_modules/homunculus/web/parser/es6/Node.js");

  var S = {};
  S[Token.BLANK] = S[Token.TAB] = S[Token.COMMENT] = S[Token.LINE] = S[Token.ENTER] = true;
  var NOASSIGN = {};
  NOASSIGN[Node.CNDTEXPR] = NOASSIGN[Node.LOGOREXPR] = NOASSIGN[Node.LOGANDEXPR] = NOASSIGN[Node.BITOREXPR] = NOASSIGN[Node.BITXOREXPR] = NOASSIGN[Node.BITANDEXPR] = NOASSIGN[Node.EQEXPR] = NOASSIGN[Node.RELTEXPR] = NOASSIGN[Node.SHIFTEXPR] = NOASSIGN[Node.ADDEXPR] = NOASSIGN[Node.MTPLEXPR] = NOASSIGN[Node.UNARYEXPR] = NOASSIGN[Node.POSTFIXEXPR] = true;
  var Parser = IParser.extend(function (lexer) {
    IParser.call(this, lexer);
    this.init(lexer);
    return this;
  }).methods({
    parse: function (code) {
      this.lexer.parse(code);
      this.tree = this.script();
      return this.tree;
    },
    init: function (lexer) {
      this.look = null;
      this.tokens = null;
      this.lastLine = 1;
      this.lastCol = 1;
      this.line = 1;
      this.col = 1;
      this.index = 0;
      this.length = 0;
      this.ignores = {};
      this.hasMoveLine = false;
      this.module = false;
      this.tree = {};

      if (lexer) {
        this.lexer = lexer;
      } else if (this.lexer) {
        this.lexer.init();
      } else {
        this.lexer = new Lexer(new Rule());
      }
    },
    script: function () {
      this.tokens = this.lexer.tokens();
      this.length = this.tokens.length;

      if (this.tokens.length) {
        this.move();
      }

      var node = new Node(Node.SCRIPT);

      if (this.look) {
        node.add(this.modulebody()); //未出现module,import,export时，此script不是一个模块

        if (!this.module) {
          node.leaf(0).name(Node.SCRIPTBODY);
        }
      }

      return node;
    },
    modulebody: function () {
      var node = new Node(Node.MODULEBODY);

      while (this.look) {
        node.add(this.moduleitem());
      }

      return node;
    },
    moduleitem: function () {
      if (this.look.content() == 'module') {
        //根据LL2分辨是es6 module语法还是module.exports等语法
        for (var i = this.index; i < this.length; i++) {
          var next = this.tokens[i];

          if (!S[next.type()]) {
            if (next.type() == Token.ID) {
              this.module = true;
              return this.moduleimport();
            }

            break;
          }
        }
      } else if (this.look.content() == 'import') {
        this.module = true;
        return this.importdecl();
      } else if (this.look.content() == 'export') {
        this.module = true;
        return this.exportdecl();
      }

      return this.stmtlitem();
    },
    importdecl: function () {
      var node = new Node(Node.IMPORTDECL);
      node.add(this.match('import'));

      if (!this.look) {
        this.error();
      }

      if (this.look.type() == Token.STRING) {
        node.add(this.match());
      } else {
        node.add(this.importcaulse(), this.fromcaulse());
      }

      node.add(this.match(';'));
      return node;
    },
    moduleimport: function () {
      var node = new Node(Node.MODULEIMPORT);
      node.add(this.match('module', true), this.bindid(), this.fromcaulse(), this.match(';'));
      return node;
    },
    fromcaulse: function () {
      var node = new Node(Node.FROMCAULSE);
      node.add(this.match('from'), this.match(Token.STRING));
      return node;
    },
    importcaulse: function () {
      var node = new Node(Node.IMPORTCAULSE);

      while (this.look) {
        if (this.look.type() == Token.ID) {
          node.add(this.match());

          if (this.look && this.look.content() == ',') {
            node.add(this.match());
          } else {
            break;
          }
        } else if (this.look.content() == '{') {
          node.add(this.nameimport());
          break;
        } else {
          break;
        }
      }

      return node;
    },
    nameimport: function () {
      var node = new Node(Node.NAMEIMPORT);
      node.add(this.match('{'));

      while (this.look && this.look.content() != '}') {
        node.add(this.importspec());

        if (this.look && this.look.content() == ',') {
          node.add(this.match());
        }
      }

      node.add(this.match('}'));
      return node;
    },
    importspec: function () {
      var node = new Node(Node.IMPORTSPEC);

      if (!this.look || this.look.type() != Token.ID) {
        this.error();
      } //LL2确定是否有as


      for (var i = this.index; i < this.length; i++) {
        var token = this.tokens[i];

        if (!S[token.type()]) {
          if (token.content() == 'as') {
            node.add(this.match(), this.match(), this.bindid());
            return node;
          } else {
            break;
          }
        }
      }

      node.add(this.idref());
      return node;
    },
    exportdecl: function () {
      var node = new Node(Node.EXPORTDECL);
      node.add(this.match('export'));

      if (!this.look) {
        this.error();
      }

      if (this.look.content() == '*') {
        node.add(this.match(), this.fromcaulse(), this.match(';'));
      } else if (this.look.content() == '{') {
        node.add(this.exportcaulse());

        if (this.look && this.look.content() == 'from') {
          node.add(this.fromcaulse());
        }

        node.add(this.match(';'));
      } else if (this.look.content() == 'default') {
        node.add(this.match(), this.assignexpr(), this.match(';'));
      } else if (this.look.content() == 'var') {
        node.add(this.varstmt());
      } else {
        node.add(this.decl());
      }

      return node;
    },
    exportcaulse: function () {
      var node = new Node(Node.EXPORTCAULSE);

      while (this.look && this.look.content() != '}') {
        node.add(this.match('{'));
        node.add(this.exportspec());

        if (this.look && this.look.content() == ',') {
          node.add(this.match());
        }
      }

      node.add(this.match('}'));
      return node;
    },
    exportspec: function () {
      var node = new Node(Node.EXPORTSPEC);
      node.add(this.idref());

      if (this.look && this.look.content() == 'as') {
        node.add(this.match('as'), this.match(Token.ID));
      }

      return node;
    },
    stmtlitem: function (yYield, isConstructor) {
      if (['function', 'class', 'let', 'const', 'async'].indexOf(this.look.content()) > -1) {
        return this.decl(yYield);
      } else if (this.look.type() == Token.ANNOT) {
        return this.annot();
      } else {
        return this.stmt(yYield, isConstructor);
      }
    },
    decl: function (yYield) {
      if (!this.look) {
        this.error();
      }

      switch (this.look.content()) {
        case 'let':
        case 'const':
          return this.lexdecl(yYield);

        case 'function':
          for (var i = this.index; i < this.length; i++) {
            var token = this.tokens[i];

            if (!S[token.type()]) {
              if (token.content() == '*') {
                return this.gendecl();
              } else {
                return this.fndecl();
              }
            }
          }

          return this.fndecl();

        case 'async':
          return this.asyncdecl();

        case 'class':
          return this.classdecl();

        default:
          this.error();
      }
    },
    stmt: function (yYield, isConstructor) {
      if (!this.look) {
        this.error();
      }

      switch (this.look.content()) {
        case 'var':
          return this.varstmt(null, yYield);

        case '{':
          return this.blockstmt(yYield);

        case ';':
          return this.emptstmt();

        case 'if':
          return this.ifstmt(yYield);

        case 'do':
        case 'while':
        case 'for':
          return this.iterstmt(yYield);

        case 'continue':
          return this.cntnstmt();

        case 'break':
          return this.brkstmt();

        case 'return':
          return this.retstmt();

        case 'with':
          return this.withstmt(yYield);

        case 'switch':
          return this.swchstmt(yYield, isConstructor);

        case 'throw':
          return this.thrstmt(yYield);

        case 'try':
          return this.trystmt(yYield);

        case 'debugger':
          return this.debstmt();

        default:
          if (this.look.type() == Token.ID) {
            for (var i = this.index; i < this.length; i++) {
              var token = this.tokens[i];

              if (!S[token.type()]) {
                if (token.content() == ':') {
                  return this.labstmt();
                } else {
                  return this.exprstmt(yYield, isConstructor);
                }
              }
            }
          }

          return this.exprstmt(yYield, isConstructor);
      }
    },
    exprstmt: function (yYield, isConstructor) {
      var node = new Node(Node.EXPRSTMT);
      node.add(this.expr(null, null, yYield, isConstructor), this.match(';'));
      return node;
    },
    lexdecl: function (yYield) {
      var node = new Node(Node.LEXDECL);

      if (this.look.content() == 'let') {
        node.add(this.match());
      } else if (this.look.content() == 'const') {
        node.add(this.match());
      } else {
        this.error();
      }

      node.add(this.lexbind(yYield));

      while (this.look && this.look.content() == ',') {
        node.add(this.match(), this.lexbind(yYield));
      }

      node.add(this.match(';'));
      return node;
    },
    lexbind: function (yYield) {
      var node = new Node(Node.LEXBIND);
      this.declnode(node, yYield);
      return node;
    },
    declnode: function (node, yYield) {
      if (!this.look) {
        this.error('missing variable name');
      }

      if (['[', '{'].indexOf(this.look.content()) > -1) {
        node.add(this.bindpat());

        if (!this.look || this.look.content() != '=') {
          this.error('missing = in destructuring declaration');
        }

        node.add(this.initlz(null, null, yYield));
      } else {
        node.add(this.bindid('missing variable name'));

        if (this.look && this.look.content() == '=') {
          node.add(this.initlz(null, null, yYield));
        }
      }
    },
    varstmt: function (noSem, yYield) {
      var node = new Node(Node.VARSTMT);
      node.add(this.match('var'), this.vardecl(yYield));

      while (this.look && this.look.content() == ',') {
        node.add(this.match(), this.vardecl(yYield));
      }

      if (!noSem) {
        node.add(this.match(';'));
      }

      return node;
    },
    vardecl: function (yYield) {
      var node = new Node(Node.VARDECL);
      this.declnode(node, yYield);
      return node;
    },
    bindid: function (msg, noIn, noOf, canKw) {
      var node = new Node(Node.BINDID);

      if (!this.look) {
        this.error(msg);
      }

      if (noIn && this.look.content() == 'in') {
        this.error();
      }

      if (noOf && this.look.content() == 'of') {
        this.error();
      }

      if (canKw && this.look.type() == Token.KEYWORD) {
        node.add(this.match(undefined, msg));
      } else {
        node.add(this.match(Token.ID, msg));
      }

      return node;
    },
    bindpat: function () {
      if (this.look.content() == '[') {
        return this.arrbindpat();
      } else if (this.look.content() == '{') {
        return this.objbindpat();
      } else {
        this.error();
      }
    },
    arrbindpat: function () {
      var node = new Node(Node.ARRBINDPAT);
      node.add(this.match('['));

      while (this.look && this.look.content() != ']') {
        if (this.look.content() == ',') {
          node.add(this.match());
        } else if (this.look.content() == '...') {
          break;
        } else {
          node.add(this.bindelem());
        }
      }

      if (this.look && this.look.content() == '...') {
        node.add(this.bindrest());
      }

      node.add(this.match(']', 'missing ] after element list'));
      return node;
    },
    bindelem: function () {
      var node = new Node(Node.BINDELEM);

      if (['[', '{'].indexOf(this.look.content()) > -1) {
        node.add(this.bindpat());

        if (this.look && this.look.content() == '=') {
          node.add(this.initlz());
        }
      } else {
        return this.singlename();
      }

      return node;
    },
    singlename: function (canKw) {
      var node = new Node(Node.SINGLENAME);
      node.add(this.bindid(null, null, null, canKw));

      if (this.look && this.look.content() == '=') {
        node.add(this.initlz());
      }

      return node;
    },
    bindrest: function () {
      var node = new Node(Node.BINDREST);
      node.add(this.match('...'), this.bindid('no parameter name after ...'));
      return node;
    },
    objbindpat: function () {
      var node = new Node(Node.OBJBINDPAT);
      node.add(this.match('{'));

      while (this.look && this.look.content() != '}') {
        node.add(this.bindpropt());

        if (this.look && this.look.content() == ',') {
          node.add(this.match());
        }
      }

      node.add(this.match('}', 'missing } after property list'));
      return node;
    },
    bindpropt: function () {
      var node = new Node(Node.BINDPROPT); //只能是singlename或者properyname

      switch (this.look.type()) {
        case Token.ID:
        case Token.STRING:
        case Token.NUMBER:
        case Token.KEYWORD:
          break;

        default:
          if (this.look.content() != '[') {
            this.error('invalid property id');
          }

      } //[为PropertyName左推导


      if (this.look.content() == '[') {
        node.add(this.proptname(), this.match(':'), this.bindelem());
        return node;
      } //根据LL2分辨是PropertyName[?Yield, ?GeneratorParameter] : BindingElement[?Yield, ?GeneratorParameter]
      //还是SingleNameBinding[?Yield, ?GeneratorParameter]


      for (var i = this.index; i < this.length; i++) {
        var next = this.tokens[i];

        if (!S[next.type()]) {
          if (next.content() == ':') {
            node.add(this.proptname(), this.match(':'), this.bindelem());
          } else {
            node.add(this.singlename(true));
          }

          return node;
        }
      }

      this.error('missing : after property id');
    },
    blockstmt: function (yYield) {
      var node = new Node(Node.BLOCKSTMT);
      node.add(this.block(null, yYield));
      return node;
    },
    block: function (msg, yYield) {
      var node = new Node(Node.BLOCK);
      node.add(this.match('{', msg));

      while (this.look && this.look.content() != '}') {
        node.add(this.stmtlitem(yYield));
      }

      node.add(this.match('}', 'missing } in compound statement'));
      return node;
    },
    emptstmt: function () {
      var node = new Node(Node.EMPTSTMT);
      node.add(this.match(';'));
      return node;
    },
    ifstmt: function (yYield) {
      var node = new Node(Node.IFSTMT);
      node.add(this.match('if'), this.match('('), this.expr(), this.match(')'), this.stmt(yYield));

      if (this.look && this.look.content() == 'else') {
        node.add(this.match('else'), this.stmt(yYield));
      }

      return node;
    },
    iterstmt: function (yYield) {
      var node = new Node(Node.ITERSTMT);

      switch (this.look.content()) {
        case 'do':
          node.add(this.match(), this.stmt(yYield), this.match('while'), this.match('('), this.expr(), this.match(')'), this.match(';'));
          break;

        case 'while':
          node.add(this.match(), this.match('('), this.expr(), this.match(')'), this.stmt(yYield));
          break;

        case 'for':
          node.add(this.match(), this.match('('));

          if (!this.look) {
            this.error();
          } //当前是var的话，LL2确定是for(var forbind;或for(var vardecllist


          if (this.look.content() == 'var') {
            var end = false;

            outer: for (var i = this.index; i < this.length; i++) {
              var token = this.tokens[i];

              if (!S[token.type()]) {
                //直接指向forbind
                if (['{', '['].indexOf(token.content()) > -1) {
                  node.add(this.match(), this.forbind());
                } //仅一个id之后跟着of或in就是forbind
                else if (token.type() == Token.ID) {
                    var end2 = false;

                    for (var j = i + 1; j < this.length; j++) {
                      var next = this.tokens[j];

                      if (!S[next.type()]) {
                        if (['in', 'of'].indexOf(next.content()) > -1) {
                          node.add(this.match(), this.forbind());
                        } else {
                          node.add(this.varstmt(true));
                        }

                        end = end2 = true;
                        break outer;
                      }
                    }
                  } else {
                    this.error();
                  }

                end = true;
                break;
              }
            }

            if (!end || !this.look) {
              this.error('missing ; after for-loop initializer');
            } //in/of前只能是一个vardecl，不能出现vardecllist


            if (['in', 'of'].indexOf(this.look.content()) > -1) {
              if (node.leaf(2).name() == Node.VARSTMT && node.leaf(2).size() > 2) {
                this.error('invalid for/in left-hand side');
              }

              var isOf = this.look.content() == 'of';
              node.add(this.match(), isOf ? this.assignexpr() : this.expr());
            } else {
              node.add(this.match(';'));

              if (this.look.content() != ';') {
                node.add(this.expr());
              }

              node.add(this.match(';'));

              if (!this.look) {
                this.error();
              }

              if (this.look.content() != ')') {
                node.add(this.expr());
              }
            }
          } else if (['let', 'const'].indexOf(this.look.content()) > -1) {
            outer: for (var i = this.index; i < this.length; i++) {
              var token = this.tokens[i];

              if (!S[token.type()]) {
                //直接指向LexicalDeclaration
                if (['{', '['].indexOf(token.content()) > -1) {
                  node.add(this.lexdecl(yYield));

                  if (this.look && this.look.content() != ';') {
                    node.add(this.expr());
                  }

                  node.add(this.match(';'));

                  if (this.look && this.look.content() != ')') {
                    node.add(this.expr());
                  }

                  break;
                } //仅一个id之后跟着of或in也是LexicalDeclaration
                else if (token.type() == Token.ID) {
                    for (var j = i + 1; j < this.length; j++) {
                      var next = this.tokens[j];

                      if (!S[next.type()]) {
                        if (['in', 'of'].indexOf(next.content()) > -1) {
                          node.add(this.match(), this.forbind());
                          var isOf = next.content() == 'of';
                          node.add(this.match(), isOf ? this.assignexpr() : this.expr());
                        } else {
                          node.add(this.lexdecl(yYield));

                          if (this.look && this.look.content() != ';') {
                            node.add(this.expr());
                          }

                          node.add(this.match(';'));

                          if (this.look && this.look.content() != ')') {
                            node.add(this.expr());
                          }
                        }

                        break outer;
                      }
                    }
                  } else {
                    this.error();
                  }
              }
            }
          } else {
            if (['in', 'of'].indexOf(this.look.content()) > -1) {
              this.error();
            } //for(EXPRnoin;) or for(leftexpr in


            var expr;

            if (this.look.content() != ';') {
              expr = this.expr(true, true);
              node.add(expr);
            }

            if (!this.look) {
              this.error('missing ;');
            }

            if (this.look.content() == 'in') {
              if (expr.name() == Node.MMBEXPR || expr.name() == Node.PRMREXPR || expr.name() == Node.NEWEXPR) {
                node.add(this.match(), this.expr());
              } else {
                this.error('invalid for/in left-hand side');
              }
            } else if (this.look.content() == 'of') {
              if (expr.name() == Node.MMBEXPR || expr.name() == Node.PRMREXPR || expr.name() == Node.NEWEXPR) {
                node.add(this.match(), this.assignexpr());
              } else {
                this.error('invalid for/in left-hand side');
              }
            } else {
              //for的;不能省略，强制判断
              node.add(this.match(';', 'missing ;'));

              if (!this.look) {
                this.error();
              }

              if (this.look.content() != ';') {
                node.add(this.expr());
              }

              node.add(this.match(';', 'missing ;'));

              if (!this.look) {
                this.error();
              }

              if (this.look.content() != ')') {
                node.add(this.expr());
              }
            }
          }

          node.add(this.match(')'));
          node.add(this.stmt(yYield));
      }

      return node;
    },
    cntnstmt: function () {
      var node = new Node(Node.CNTNSTMT);
      node.add(this.match('continue', true));

      if (this.look && this.look.type() == Token.ID) {
        node.add(this.match());
      }

      node.add(this.match(';'));
      return node;
    },
    brkstmt: function () {
      var node = new Node(Node.BRKSTMT);
      node.add(this.match('break', true));

      if (this.look && this.look.type() == Token.ID) {
        node.add(this.match());
      }

      node.add(this.match(';'));
      return node;
    },
    retstmt: function () {
      var node = new Node(Node.RETSTMT);
      node.add(this.match('return', true)); //return后换行视作省略;，包括多行注释的换行

      if (this.look) {
        if (this.look.content() == ';' || this.look.content() == '}' || this.look.type() == Token.LINE || this.look.type() == Token.COMMENT) {
          node.add(this.match(';'));
        } else {
          node.add(this.expr(), this.match(';'));
        }
      } else {
        node.add(this.match(';'));
      }

      return node;
    },
    withstmt: function (yYield) {
      var node = new Node(Node.WITHSTMT);
      node.add(this.match('with', 'missing ( before with-statement object'), this.match('('), this.expr(), this.match(')', 'missing ) after with-statement object'), this.stmt(yYield));
      return node;
    },
    swchstmt: function (yYield, isConstructor) {
      var node = new Node(Node.SWCHSTMT);
      node.add(this.match('switch'), this.match('('), this.expr(), this.match(')'), this.caseblock(yYield, isConstructor));
      return node;
    },
    caseblock: function (yYield, isConstructor) {
      var node = new Node(Node.CASEBLOCK);
      node.add(this.match('{'));

      while (this.look && this.look.content() != '}') {
        if (this.look.content() == 'case') {
          node.add(this.caseclause(yYield, isConstructor));
        } else if (this.look.content() == 'default') {
          node.add(this.dftclause(yYield, isConstructor));
        } else {
          this.error('invalid switch statement');
        }
      }

      node.add(this.match('}'));
      return node;
    },
    caseclause: function (yYield, isConstructor) {
      var node = new Node(Node.CASECLAUSE);
      node.add(this.match('case'), this.expr(), this.match(':'));

      while (this.look && this.look.content() != 'case' && this.look.content() != 'default' && this.look.content() != '}') {
        node.add(this.stmtlitem(yYield, isConstructor));
      }

      return node;
    },
    dftclause: function (yYield, isConstructor) {
      var node = new Node(Node.DFTCLAUSE);
      node.add(this.match('default'), this.match(':'));

      while (this.look && this.look.content() == 'case') {
        node.add(this.match('case'), this.expr(), this.match(':'));
      }

      while (this.look && this.look.content() != '}') {
        node.add(this.stmtlitem(yYield, isConstructor));
      }

      return node;
    },
    labstmt: function () {
      var node = new Node(Node.LABSTMT);
      node.add(this.match(Token.ID), this.match(':'), this.stmt());
      return node;
    },
    thrstmt: function () {
      var node = new Node(Node.THRSTMT);
      node.add(this.match('throw', true), this.expr(), this.match(';'));
      return node;
    },
    trystmt: function (yYield) {
      var node = new Node(Node.TRYSTMT);
      node.add(this.match('try'), this.block('missing { before try block', yYield));

      if (this.look && this.look.content() == 'catch') {
        node.add(this.cach(yYield));

        if (this.look && this.look.content() == 'finally') {
          node.add(this.finl(yYield));
        }
      } else {
        node.add(this.finl(yYield));
      }

      return node;
    },
    debstmt: function () {
      var node = new Node(Node.DEBSTMT);
      node.add(this.match('debugger'), this.match(';'));
      return node;
    },
    cach: function (yYield) {
      var node = new Node(Node.CACH);
      node.add(this.match('catch', 'missing catch or finally after try'), this.match('(', 'missing ( before catch'), this.cachparam(), this.match(')', 'missing ) after catch'), this.block('missing { before catch block', yYield));
      return node;
    },
    cachparam: function () {
      var node = new Node(Node.CACHPARAM);

      if (['[', '{'].indexOf(this.look.content()) > -1) {
        node.add(this.bindpat());
      } else {
        node.add(this.bindid('missing identifier in catch'));
      }

      return node;
    },
    finl: function (yYield) {
      var node = new Node(Node.FINL);
      node.add(this.match('finally'), this.block('missing { before finally block', yYield));
      return node;
    },
    imptstmt: function () {
      var node = new Node(Node.IMPTSTMT);
      return node;
    },
    fndecl: function () {
      var node = new Node(Node.FNDECL);
      node.add(this.match('function'), this.bindid('function statement requires a name'), this.match('(', 'missing ( before formal parameters'), this.fmparams(), this.match(')', 'missing ) after formal parameters'), this.match('{'), this.fnbody(), this.match('}', 'missing } after function body'));
      return node;
    },
    fnexpr: function (noIn, noOf) {
      var node = new Node(Node.FNEXPR);
      node.add(this.match('function'));

      if (!this.look) {
        this.error('missing formal parameter');
      }

      if (this.look.type() == Token.ID) {
        node.add(this.bindid(null, noIn, noOf));
      }

      node.add(this.match('(', 'missing ( before formal parameters'), this.fmparams(), this.match(')', 'missing ) after formal parameters'), this.match('{'), this.fnbody(), this.match('}', 'missing } after function body'));
      return node;
    },
    genexpr: function (noIn, noOf) {
      var node = new Node(Node.GENEXPR);
      node.add(this.match('function'), this.match('*'));

      if (!this.look) {
        this.error('missing formal parameter');
      }

      if (this.look.type() == Token.ID) {
        node.add(this.bindid(null, noIn, noOf));
      }

      node.add(this.match('(', 'missing ( before formal parameters'), this.fmparams(), this.match(')', 'missing ) after formal parameters'), this.match('{'), this.fnbody(true), this.match('}', 'missing } after function body'));
      return node;
    },
    gendecl: function (noIn, noOf) {
      var node = new Node(Node.GENDECL);
      node.add(this.match('function'), this.match('*'));
      node.add(this.bindid('missing formal parameter', noIn, noOf));
      node.add(this.match('(', 'missing ( before formal parameters'), this.fmparams(), this.match(')', 'missing ) after formal parameters'), this.match('{'), this.fnbody(true), this.match('}', 'missing } after function body'));
      return node;
    },
    fmparams: function () {
      var node = new Node(Node.FMPARAMS);

      if (!this.look) {
        this.error('missing formal parameter');
      }

      if (this.look.content() != ')') {
        while (this.look) {
          if (this.look.content() == '...') {
            break;
          } else {
            node.add(this.bindelem(true));

            if (this.look && this.look.content() == ')') {
              break;
            }

            if (this.look && this.look.content() == ',') {
              node.add(this.match());
            }
          }
        }
      }

      if (!this.look) {
        this.error('missing ) after formal parameters');
      }

      if (this.look.content() == '...') {
        node.add(this.bindrest(true));
      }

      return node;
    },
    fnbody: function (yYield, isConstructor) {
      var node = new Node(Node.FNBODY);

      while (this.look && this.look.content() != '}') {
        node.add(this.stmtlitem(yYield, isConstructor));
      }

      return node;
    },
    asyncdecl: function () {
      var node = new Node(Node.ASYNCDECL); //LL2判断是否是async arrow fn

      for (var i = this.index + 1; i < this.length; i++) {
        var next = this.tokens[i];

        if (!S[next.type()] && next.content() != character.ENTER && next.content() != character.LINE) {
          if (next.content() == '(' || next.content() != 'function') {
            return this.asyncarrowfn();
          } else {
            break;
          }
        }
      }

      node.add(this.match('async', true), this.match('function'), this.bindid('async function statement requires a name'), this.match('(', 'missing ( before formal parameters'), this.fmparams(), this.match(')', 'missing ) after formal parameters'), this.match('{'), this.fnbody(), this.match('}', 'missing } after function body'));
      return node;
    },
    asyncexpr: function () {
      var node = new Node(Node.ASYNCEXPR);
      node.add(this.match('async', true), this.match('function'));

      if (this.look && this.look.content() == '(') {
        node.add(this.match('(', 'missing ( before formal parameters'), this.fmparams(), this.match(')', 'missing ) after formal parameters'), this.match('{'), this.fnbody(), this.match('}', 'missing } after function body'));
      } else {
        node.add(this.bindid(), this.match('{'), this.fnbody(), this.match('}', 'missing } after function body'));
      }

      return node;
    },
    asyncarrowfn: function (noIn, noOf, yYield) {
      var node = new Node(Node.ASYNCARROWFN);
      node.add(this.match('async', true));

      if (this.look && this.look.content() == '(') {
        node.add(this.match());

        if (this.look && this.look.content() != ')') {
          node.add(this.bindid());
        }

        node.add(this.match(')'), this.match('=>'));

        if (this.look && this.look.content() == '{') {
          node.add(this.match(), this.fnbody(), this.match('}'));
        } else {
          node.add(this.assignexpr());
        }
      } else {
        node.add(this.bindid('', noIn, noOf), this.match('=>'));

        if (this.look && this.look.content() == '{') {
          node.add(this.match(), this.fnbody(), this.match('}'));
        } else {
          node.add(this.assignexpr());
        }
      }

      return node;
    },
    classdecl: function () {
      var node = new Node(Node.CLASSDECL);
      node.add(this.match('class'), this.bindid());

      if (!this.look) {
        this.error();
      }

      if (this.look.content() == 'extends') {
        node.add(this.heratige());
      }

      node.add(this.match('{'), this.classbody(), this.match('}'));
      return node;
    },
    classexpr: function (noIn, noOf) {
      var node = new Node(Node.CLASSEXPR);
      node.add(this.match('class'));

      if (!this.look) {
        this.error();
      }

      if (this.look.type() == Token.ID) {
        node.add(this.bindid(null, noIn, noOf));
      }

      if (!this.look) {
        this.error();
      }

      if (this.look.content() == 'extends') {
        node.add(this.heratige(noIn, noOf));
      }

      node.add(this.match('{'), this.classbody(noIn, noOf), this.match('}'));
      return node;
    },
    heratige: function (noIn, noOf) {
      var node = new Node(Node.HERITAGE);
      node.add(this.match('extends'), this.leftexpr(noIn, noOf));
      return node;
    },
    classbody: function (noIn, noOf) {
      var node = new Node(Node.CLASSBODY);

      while (this.look && this.look.content() != '}') {
        node.add(this.classelem(noIn, noOf));
      }

      return node;
    },
    classelem: function (noIn, noOf) {
      var node = new Node(Node.CLASSELEM);

      if (this.look.content() == ';') {
        node.add(this.match());
      } else if (this.look.content() == 'static') {
        node.add(this.match(), this.method(noIn, noOf));
      } else if (this.look.type() == Token.ANNOT) {
        node.add(this.annot());
      } else if (['[', '{'].indexOf(this.look.content()) != -1) {
        node.add(this.lexbind());
      } else if (this.look.type() == Token.ID && ['get', 'set'].indexOf(this.look.content()) == -1) {
        //LL2区分新增语法classbody内赋值
        for (var i = this.index; i < this.length; i++) {
          var next = this.tokens[i];

          if (!S[next.type()]) {
            if (next.content() == '(') {
              node.add(this.method(noIn, noOf));
            } else {
              node.add(this.lexbind());
            }

            return node;
          }
        }
      } else if (this.look.content() == 'async') {
        node.add(this.asyncmethod(noIn, noOf));
      } else {
        node.add(this.method(noIn, noOf));
      }

      return node;
    },
    asyncmethod: function (noIn, noOf) {
      var node = new Node(Node.ASYNCMETHOD);
      node.add(this.match('async', true), this.proptname(), this.match('('), this.fmparams(), this.match(')'), this.match('{'), this.fnbody(), this.match('}'));
      return node;
    },
    annot: function () {
      var node = new Node(Node.ANNOT);
      node.add(this.match());

      if (this.look && this.look.content() == '(') {
        node.add(this.match('('), this.fmparams(), this.match(')'));
      }

      return node;
    },
    method: function (noIn, noOf) {
      var node = new Node(Node.METHOD);

      if (this.look.content() == 'get') {
        node.add(this.match(), this.proptname(noIn, noOf), this.match('('), this.fmparams(), this.match(')'), this.match('{'), this.fnbody(), this.match('}'));
      } else if (this.look.content() == 'set') {
        node.add(this.match(), this.proptname(noIn, noOf), this.match('('), this.fmparams(), this.match(')'), this.match('{'), this.fnbody(), this.match('}'));
      } else if (this.look.content() == '*') {
        return this.genmethod(noIn, noOf);
      } else if (this.look.content() == 'async') {
        return this.asyncmethod(noIn, noOf);
      } else {
        var isConstructor = this.look.type() == Token.ID && this.look.content() == 'constructor';
        node.add(this.proptname(noIn, noOf), this.match('('), this.fmparams(), this.match(')'), this.match('{'), this.fnbody(false, isConstructor), this.match('}'));
      }

      return node;
    },
    genmethod: function (noIn, noOf) {
      var node = new Node(Node.GENMETHOD);
      node.add(this.match('*'), this.proptname(noIn, noOf), this.match('('), this.fmparams(), this.match(')'), this.match('{'), this.fnbody(), this.match('}'));
      return node;
    },
    asyncmethod: function (noIn, noOf) {
      var node = new Node(Node.ASYNCMETHOD);
      node.add(this.match('async', true), this.proptname(noIn, noOf), this.match('('), this.fmparams(), this.match(')'), this.match('{'), this.fnbody(), this.match('}'));
      return node;
    },
    expr: function (noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.EXPR),
          assignexpr = this.assignexpr(noIn, noOf, yYield, isConstructor); //LL2区分,后的...是否为cpeapl

      if (this.look && this.look.content() == ',') {
        for (var i = this.index; i < this.length; i++) {
          var next = this.tokens[i];

          if (!S[next.type()]) {
            if (next.content() == '...') {
              return assignexpr;
            }

            break;
          }
        }

        node.add(assignexpr);

        outer: while (this.look && this.look.content() == ',') {
          for (var i = this.index; i < this.length; i++) {
            var next = this.tokens[i];

            if (!S[next.type()]) {
              if (next.content() == '...') {
                break outer;
              }

              break;
            }
          }

          node.add(this.match(), this.assignexpr(noIn, noOf, yYield, isConstructor));
        }
      } else {
        return assignexpr;
      }

      return node;
    },
    initlz: function (noIn, noOf, yYield) {
      var node = new Node(Node.INITLZ);
      node.add(this.match('='), this.assignexpr(noIn, noOf, yYield));
      return node;
    },
    assignexpr: function (noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.ASSIGNEXPR);

      if (!this.look) {
        this.error();
      }

      if (this.look.content() == 'yield') {
        if (!yYield) {
          this.error('yield not in generator function');
        }

        return this.yieldexpr(noIn, noOf, yYield);
      } //LL2判断async arrow fn提前


      if (this.look.content() == 'async') {
        for (var i = this.index; i < this.length; i++) {
          var next = this.tokens[i];

          if (!S[next.type()]) {
            if (next.content() == '(' || next.type() == Token.ID) {
              node.add(this.asyncarrowfn(noIn, noOf, yYield));
              return node;
            }

            break;
          }
        }
      }

      var cndt = this.cndtexpr(noIn, noOf, yYield, isConstructor);

      if (this.look && this.look.content() == '=>' && this.hasMoveLine == false && cndt.name() == Node.PRMREXPR && cndt.size() == 1 && (cndt.first().name() == Node.CPEAPL || cndt.first().name() == Node.TOKEN && cndt.first().token().type() == Token.ID)) {
        node = new Node(Node.ARROWFN);
        var arrowparams = new Node(Node.ARROWPARAMS);
        arrowparams.add(cndt.first());
        node.add(arrowparams, this.match(), this.cncsbody(noIn, noOf, yYield));
      } else if (this.look && {
        '*=': true,
        '/=': true,
        '%=': true,
        '+=': true,
        '-=': true,
        '<<=': true,
        '>>=': true,
        '>>>=': true,
        '&=': true,
        '^=': true,
        '|=': true,
        '=': true,
        '**': true
      }.hasOwnProperty(this.look.content()) && !NOASSIGN.hasOwnProperty(cndt.name())) {
        node.add(cndt, this.match(), this.assignexpr(noIn, noOf, yYield, isConstructor));
      } else {
        return cndt;
      }

      return node;
    },
    yieldexpr: function (noIn, noOf, yYield) {
      var node = new Node(Node.YIELDEXPR);
      node.add(this.match('yield'));

      if (this.look && this.look.content() == '*') {
        node.add(this.match());
      }

      if (!this.look) {
        this.error();
      }

      if ([';', '}'].indexOf(this.look.content()) == -1 && this.look.type() != Token.KEYWORD) {
        node.add(this.assignexpr(noIn, noOf, yYield));
      }

      return node;
    },
    cpeapl: function () {
      var node = new Node(Node.CPEAPL);
      node.add(this.match('('));

      if (!this.look) {
        this.error();
      }

      if (this.look.content() == '...') {
        node.add(this.match(), this.bindid(), this.match(')'));
        return node;
      }

      if (this.look.content() != ')') {
        node.add(this.expr());
      }

      if (this.look.content() == ',') {
        node.add(this.match(), this.match('...'), this.bindid());
      }

      node.add(this.match(')'));
      return node;
    },
    cncsbody: function (noIn, noOf) {
      var node = new Node(Node.CNCSBODY);

      if (!this.look) {
        this.error();
      }

      if (this.look.content() == '{') {
        node.add(this.match(), this.fnbody(), this.match('}'));
      } else {
        node.add(this.assignexpr(noIn, noOf));
      }

      return node;
    },
    cndtexpr: function (noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.CNDTEXPR),
          logorexpr = this.logorexpr(noIn, noOf, yYield, isConstructor);

      if (this.look && this.look.content() == '?') {
        node.add(logorexpr, this.match(), this.assignexpr(noIn, noOf, yYield, isConstructor), this.match(':'), this.assignexpr(noIn, noOf, yYield, isConstructor));
      } else {
        return logorexpr;
      }

      return node;
    },
    logorexpr: function (noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.LOGOREXPR),
          logandexpr = this.logandexpr(noIn, noOf, yYield, isConstructor);

      if (this.look && this.look.content() == '||') {
        node.add(logandexpr);

        while (this.look && this.look.content() == '||') {
          node.add(this.match(), this.logandexpr(noIn, noOf, yYield, isConstructor));
        }
      } else {
        return logandexpr;
      }

      return node;
    },
    logandexpr: function (noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.LOGANDEXPR),
          bitorexpr = this.bitorexpr(noIn, noOf, yYield, isConstructor);

      if (this.look && this.look.content() == '&&') {
        node.add(bitorexpr);

        while (this.look && this.look.content() == '&&') {
          node.add(this.match(), this.bitorexpr(noIn, noOf, yYield, isConstructor));
        }
      } else {
        return bitorexpr;
      }

      return node;
    },
    bitorexpr: function (noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.BITOREXPR),
          bitxorexpr = this.bitxorexpr(noIn, noOf, yYield, isConstructor);

      if (this.look && this.look.content() == '|') {
        node.add(bitxorexpr);

        while (this.look && this.look.content() == '|') {
          node.add(this.match(), this.bitxorexpr(noIn, noOf, yYield, isConstructor));
        }
      } else {
        return bitxorexpr;
      }

      return node;
    },
    bitxorexpr: function (noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.BITXOREXPR),
          bitandexpr = this.bitandexpr(noIn, noOf, yYield, isConstructor);

      if (this.look && this.look.content() == '^') {
        node.add(bitandexpr);

        while (this.look && this.look.content() == '^') {
          node.add(this.match(), this.bitandexpr(noIn, noOf, yYield, isConstructor));
        }
      } else {
        return bitandexpr;
      }

      return node;
    },
    bitandexpr: function (noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.BITANDEXPR),
          eqexpr = this.eqexpr(noIn, noOf, yYield, isConstructor);

      if (this.look && this.look.content() == '&') {
        node.add(eqexpr);

        while (this.look && this.look.content() == '&') {
          node.add(this.match(), this.eqexpr(noIn, noOf, yYield, isConstructor));
        }
      } else {
        return eqexpr;
      }

      return node;
    },
    eqexpr: function (noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.EQEXPR),
          reltexpr = this.reltexpr(noIn, noOf, yYield, isConstructor);

      if (this.look && {
        '==': true,
        '===': true,
        '!==': true,
        '!=': true
      }.hasOwnProperty(this.look.content())) {
        node.add(reltexpr);

        while (this.look && {
          '==': true,
          '===': true,
          '!==': true,
          '!=': true
        }.hasOwnProperty(this.look.content())) {
          node.add(this.match(), this.reltexpr(noIn, noOf, yYield, isConstructor));
        }
      } else {
        return reltexpr;
      }

      return node;
    },
    reltexpr: function (noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.RELTEXPR),
          shiftexpr = this.shiftexpr(noIn, noOf, yYield, isConstructor);

      if (this.look && ({
        '<': true,
        '>': true,
        '>=': true,
        '<=': true,
        'instanceof': true
      }.hasOwnProperty(this.look.content()) || !noIn && this.look.content() == 'in')) {
        node.add(shiftexpr);

        while (this.look && ({
          '<': true,
          '>': true,
          '>=': true,
          '<=': true,
          'instanceof': true
        }.hasOwnProperty(this.look.content()) || !noIn && this.look.content() == 'in')) {
          node.add(this.match(), this.shiftexpr(noIn, noOf, yYield, isConstructor));
        }
      } else {
        return shiftexpr;
      }

      return node;
    },
    shiftexpr: function (noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.SHIFTEXPR),
          addexpr = this.addexpr(noIn, noOf, yYield, isConstructor);

      if (this.look && ['<<', '>>', '>>>'].indexOf(this.look.content()) != -1) {
        node.add(addexpr);

        while (this.look && ['<<', '>>', '>>>'].indexOf(this.look.content()) != -1) {
          node.add(this.match(), this.addexpr(noIn, noOf, yYield, isConstructor));
        }
      } else {
        return addexpr;
      }

      return node;
    },
    addexpr: function (noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.ADDEXPR),
          mtplexpr = this.mtplexpr(noIn, noOf, yYield, isConstructor);

      if (this.look && ['+', '-'].indexOf(this.look.content()) != -1) {
        node.add(mtplexpr);

        while (this.look && ['+', '-'].indexOf(this.look.content()) != -1) {
          node.add(this.match(), this.mtplexpr(noIn, noOf, yYield, isConstructor));
        }
      } else {
        return mtplexpr;
      }

      return node;
    },
    mtplexpr: function (noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.MTPLEXPR),
          unaryexpr = this.unaryexpr(noIn, noOf, yYield, isConstructor);

      if (this.look && ['*', '/', '%'].indexOf(this.look.content()) != -1) {
        node.add(unaryexpr);

        while (this.look && ['*', '/', '%'].indexOf(this.look.content()) != -1) {
          node.add(this.match(), this.unaryexpr(noIn, noOf, yYield, isConstructor));
        }
      } else {
        return unaryexpr;
      }

      return node;
    },
    unaryexpr: function (noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.UNARYEXPR);

      if (!this.look) {
        this.error();
      }

      switch (this.look.content()) {
        case '++':
        case '--':
          node.add(this.match(), this.leftexpr(noIn, noOf, yYield, isConstructor));
          break;

        case 'delete':
        case 'void':
        case 'typeof':
        case '+':
        case '-':
        case '~':
        case '!':
        case 'await':
          node.add(this.match(), this.unaryexpr(noIn, noOf, yYield, isConstructor));
          break;

        default:
          return this.postfixexpr(noIn, noOf, yYield, isConstructor);
      }

      return node;
    },
    postfixexpr: function (noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.POSTFIXEXPR);
      var leftexpr = this.leftexpr(noIn, noOf, yYield, isConstructor);

      if (this.look && ['++', '--'].indexOf(this.look.content()) > -1 && !this.hasMoveLine) {
        node.add(leftexpr, this.match());
      } else {
        return leftexpr;
      }

      return node;
    },
    leftexpr: function (noIn, noOf, yYield, isConstructor) {
      if (this.look.content() == 'new') {
        return this.newexpr(0, noIn, noOf, yYield);
      } else {
        return this.callexpr(null, noIn, noOf, yYield, isConstructor);
      }
    },
    newexpr: function (depth, noIn, noOf, yYield) {
      depth = depth || 0;
      var node = new Node(Node.NEWEXPR);
      node.add(this.match('new'));

      if (!this.look) {
        this.error();
      }

      if (this.look.content() == 'new') {
        node.add(this.newexpr(depth + 1, noIn, noOf, yYield));
      } //LL2分辨super后是否为.[至mmbexpr
      else if (this.look.content() == 'super') {
          var end = false;

          for (var i = this.index; i < this.length; i++) {
            var next = this.tokens[i];

            if (!S[next.type()]) {
              if (['.', '['].indexOf(next.content()) > -1) {
                node.add(this.mmbexpr(noIn, noOf, yYield));
              } else {
                node.add(this.match());
              }

              end = true;
              break;
            }
          }

          if (!end) {
            node.add(this.match());
          }
        } else {
          node.add(this.mmbexpr(noIn, noOf, yYield));
        }

      if (this.look && this.look.content() == '(') {
        node.add(this.args());
      }

      if (this.look && ['.', '['].indexOf(this.look.content()) > -1) {
        var mmb = new Node(Node.MMBEXPR);
        mmb.add(node);

        while (this.look) {
          if (this.look.content() == '.') {
            mmb.add(this.match(), this.match(Token.ID, 'missing name after . operator'));
          } else if (this.look.content() == '[') {
            mmb.add(this.match(), this.expr(noIn, noOf, yYield), this.match(']'));
          } else {
            break;
          }
        }

        if (depth == 0 && this.look && this.look.content() == '(') {
          var callexpr = this.callexpr(mmb, noIn, noOf, yYield);
          return callexpr;
        }

        return mmb;
      }

      return node;
    },
    callexpr: function (mmb, noIn, noOf, yYield, isConstructor) {
      var node = new Node(Node.CALLEXPR);

      if (!mmb) {
        //根据LL2分辨是super()还是mmbexpr
        if (this.look.content() == 'super') {
          for (var i = this.index; i < this.length; i++) {
            var next = this.tokens[i];

            if (!S[next.type()]) {
              if (next.content() == '(') {
                if (!isConstructor) {
                  node.add(this.match());
                  this.error('super call is only allowed in derived constructor');
                }

                node.add(this.match(), this.args());
                mmb = node;
                node = new Node(Node.CALLEXPR);
              } else {
                mmb = this.mmbexpr(noIn, noOf, yYield);
              }

              break;
            }
          }
        } else {
          mmb = this.mmbexpr(noIn, noOf, yYield);
        }
      }

      if (this.look && this.look.content() == '(') {
        node.add(mmb, this.args());

        while (this.look) {
          var temp;

          if (this.look.content() == '.') {
            temp = new Node(Node.MMBEXPR);
            temp.add(node, this.match(), this.match(Token.ID, 'missing name after . operator'));
            node = temp;
          } else if (this.look.content() == '[') {
            temp = new Node(Node.MMBEXPR);
            temp.add(node, this.match(), this.expr(noIn, noOf, yYield), this.match(']'));
            node = temp;
          } else if (this.look.content() == '(') {
            temp = new Node(Node.CALLEXPR);
            temp.add(node, this.args());
            node = temp;
          } else if (this.look.type() == Token.TEMPLATE) {
            temp = new Node(Node.CALLEXPR);
            temp.add(node, this.match());
            node = temp;
          } else {
            break;
          }
        }
      } else {
        return mmb;
      }

      return node;
    },
    mmbexpr: function (noIn, noOf, yYield) {
      var node = new Node(Node.MMBEXPR);
      var mmb;

      if (this.look.content() == 'super') {
        mmb = this.match();

        if (!this.look || ['.', '['].indexOf(this.look.content()) == -1) {
          this.error();
        }
      } else {
        mmb = this.prmrexpr(noIn, noOf, yYield);
      }

      if (this.look && (['.', '['].indexOf(this.look.content()) > -1 || this.look.type() == Token.TEMPLATE)) {
        node.add(mmb);

        if (this.look.content() == '.') {
          node.add(this.match(), this.match(Token.ID, 'missing name after . operator'));
        } else if (this.look.content() == '[') {
          node.add(this.match(), this.expr(noIn, noOf, yYield), this.match(']'));
        } else {
          node.add(this.match());
        }

        while (this.look) {
          var temp;

          if (this.look.content() == '.') {
            temp = new Node(Node.MMBEXPR);
            temp.add(node, this.match(), this.match(Token.ID, 'missing name after . operator'));
            node = temp;
          } else if (this.look.content() == '[') {
            temp = new Node(Node.MMBEXPR);
            temp.add(node, this.match(), this.expr(noIn, noOf, yYield), this.match(']'));
            node = temp;
          } else if (this.look.type() == Token.TEMPLATE) {
            temp = new Node(Node.MMBEXPR);
            temp.add(node, this.match());
            node = temp;
          } else {
            break;
          }
        }
      } else {
        return mmb;
      }

      return node;
    },
    prmrexpr: function (noIn, noOf, yYield) {
      var node = new Node(Node.PRMREXPR);

      switch (this.look.type()) {
        case Token.ID:
          if (noIn && this.look.content() == 'in') {
            this.error();
          }

          if (noOf && this.look.content() == 'of') {
            this.error();
          }

          node.add(this.idref(noIn, noOf));
          break;

        case Token.NUMBER:
        case Token.STRING:
        case Token.REG:
        case Token.TEMPLATE:
          node.add(this.match());
          break;

        case Token.TEMPLATE_HEAD:
          return this.template(noIn, noOf, yYield);

        default:
          switch (this.look.content()) {
            //LL2是否为*区分fnexpr和genexpr
            case 'function':
              for (var i = this.index; i < this.length; i++) {
                var next = this.tokens[i];

                if (!S[next.type()]) {
                  if (next.content() == '*') {
                    node.add(this.genexpr(noIn, noOf));
                  } else {
                    node.add(this.fnexpr(noIn, noOf));
                  }

                  break;
                }
              }

              break;

            case 'async':
              return this.asyncexpr();

            case 'class':
              node.add(this.classexpr(noIn, noOf));
              break;

            case 'this':
            case 'null':
            case 'true':
            case 'false':
              node.add(this.match());
              break;
            //LL2区分for是否为gencmph

            case '(':
              for (var i = this.index; i < this.length; i++) {
                var next = this.tokens[i];

                if (!S[next.type()]) {
                  if (next.content() == 'for') {
                    node.add(this.gencmph(noIn, noOf, yYield));
                  } else {
                    node.add(this.cpeapl(noIn, noOf, yYield));
                  }

                  break;
                }
              }

              break;

            case '[':
              node.add(this.arrinit(noIn, noOf));
              break;

            case '{':
              node.add(this.objltr(noIn, noOf));
              break;

            default:
              this.error();
          }

      }

      return node;
    },
    template: function (noIn, noOf, yYield) {
      var node = new Node(Node.TEMPLATE);
      node.add(this.match());

      while (this.look && this.look.type() != Token.TEMPLATE_TAIL) {
        node.add(this.expr(noIn, noOf, yYield));

        if (this.look && this.look.type() == Token.TEMPLATE_TAIL) {
          break;
        }

        node.add(this.match(Token.TEMPLATE_MIDDLE));
      }

      node.add(this.match());
      return node;
    },
    arrinit: function (noIn, noOf) {
      //根据LL2分辨是arrltr还是arrcmph
      //[assignexpr or [for
      for (var i = this.index; i < this.length; i++) {
        var next = this.tokens[i];

        if (!S[next.type()]) {
          if (next.content() == 'for') {
            return this.arrcmph(noIn, noOf);
          } else {
            return this.arrltr(noIn, noOf);
          }
        }
      }

      this.error();
    },
    gencmph: function (noIn, noOf, yYield) {
      var node = new Node(Node.GENCMPH);
      node.add(this.match('('), this.cmph(noIn, noOf, yYield), this.match(')'));
      return node;
    },
    arrcmph: function (noIn, noOf) {
      var node = new Node(Node.ARRCMPH);
      node.add(this.match('['), this.cmph(noIn, noOf), this.match(']', 'missing ] after element list'));
      return node;
    },
    cmph: function (noIn, noOf, yYield) {
      var node = new Node(Node.CMPH);
      node.add(this.cmphfor());

      while (this.look && this.look.content() != ']') {
        if (this.look.content() == 'for') {
          node.add(this.cmphfor(noIn, noOf, yYield));
        } else if (this.look.content() == 'if') {
          node.add(this.cmphif(noIn, noOf, yYield));
        } else {
          node.add(this.assignexpr(noIn, noOf, yYield));
          break;
        }
      }

      return node;
    },
    cmphfor: function (noIn, noOf) {
      var node = new Node(Node.CMPHFOR);
      node.add(this.match('for'), this.match('('), this.forbind(noIn, noOf), this.match('of'), this.assignexpr(noIn, noOf), this.match(')'));
      return node;
    },
    forbind: function (noIn, noOf) {
      if (!this.look) {
        this.error();
      }

      if (['[', '{'].indexOf(this.look.content()) > -1) {
        return this.bindpat();
      } else {
        return this.bindid(noIn, noOf);
      }
    },
    cmphif: function (noIn, noOf) {
      var node = new Node(Node.CMPHIF);
      node.add(this.match('if'), this.match('('), this.assignexpr(noIn, noOf), this.match(')'));
      return node;
    },
    arrltr: function (noIn, noOf) {
      var node = new Node(Node.ARRLTR);
      node.add(this.match('['));

      while (this.look && this.look.content() != ']') {
        if (this.look.content() == ',') {
          node.add(this.match());
        } else if (this.look.content() == '...') {
          node.add(this.spread(noIn, noOf));
        } else {
          node.add(this.assignexpr(noIn, noOf));

          if (this.look && this.look.content() == ',') {
            node.add(this.match());
          }
        }
      }

      node.add(this.match(']', 'missing ] after element list'));
      return node;
    },
    spread: function (noIn, noOf) {
      var node = new Node(Node.SPREAD);
      node.add(this.match('...'), this.assignexpr(noIn, noOf));
      return node;
    },
    objltr: function (noIn, noOf) {
      var node = new Node(Node.OBJLTR);
      node.add(this.match('{'));

      while (this.look && this.look.content() != '}') {
        node.add(this.proptdef(noIn, noOf));

        if (this.look && this.look.content() == ',') {
          node.add(this.match());
        }
      }

      node.add(this.match('}', 'missing } after property list'));
      return node;
    },
    proptdef: function (noIn, noOf) {
      var node = new Node(Node.PROPTDEF);

      if (!this.look) {
        this.error();
      }

      if (this.look.content() == '[') {
        var cmpt = this.cmptpropt(noIn, noOf);

        if (!this.look) {
          this.error();
        }

        if (this.look.content() == ':') {
          node.add(this.proptname(cmpt, noIn, noOf), this.match(), this.assignexpr(noIn, noOf));
        } else {
          node.add(cmpt);
        }
      } else {
        switch (this.look.type()) {
          case Token.ID:
            //LL2区分 (为method :为propt: assginment
            var end = false;

            for (var i = this.index; i < this.length; i++) {
              var next = this.tokens[i];

              if (!S[next.type()]) {
                if ([Token.KEYWORD, Token.ID].indexOf(next.type()) > -1 || next.content() == '(') {
                  node.add(this.method(noIn, noOf));
                  end = true;
                } else if (next.content() == '=') {
                  node.add(this.match(), this.initlz(noIn, noOf));
                  end = true;
                } else if ([',', '}'].indexOf(next.content()) > -1) {
                  node.add(this.idref(noIn, noOf));
                  end = true;
                }

                break;
              }
            }

            if (end) {
              break;
            }

          case Token.STRING:
          case Token.NUMBER:
          case Token.KEYWORD:
            node.add(this.proptname(cmpt, noIn, noOf), this.match(':', 'missing : after property id'), this.assignexpr(noIn, noOf));
            break;

          default:
            this.error('invalid property id');
        }
      }

      return node;
    },
    idref: function (noIn, noOf) {
      if (!this.look) {
        this.error('invalid property id');
      }

      if (noIn && this.look.content() == 'in') {
        this.error();
      }

      if (noOf && this.look.content() == 'of') {
        this.error();
      }

      return this.match(Token.ID, 'invalid property id');
    },
    proptname: function (cmpt, noIn, noOf) {
      var node = new Node(Node.PROPTNAME);

      if (!this.look) {
        this.error('invalid property id');
      }

      if (cmpt) {
        node.add(cmpt);
      } else if (this.look.content() == '[') {
        node.add(this.cmptpropt(noIn, noOf));
      } else {
        node.add(this.ltrpropt(noIn, noOf));
      }

      return node;
    },
    ltrpropt: function (noIn, noOf) {
      var node = new Node(Node.LTRPROPT);

      switch (this.look.type()) {
        case Token.ID:
          if (noIn && this.look.content() == 'in') {
            this.error();
          }

          if (noOf && this.look.content() == 'of') {
            this.error();
          }

        case Token.NUMBER:
        case Token.STRING:
        case Token.KEYWORD:
          node.add(this.match());
          return node;

        default:
          this.error('invalid property id');
      }
    },
    cmptpropt: function (noIn, noOf) {
      var node = new Node(Node.CMPTPROPT);
      node.add(this.match('['), this.assignexpr(noIn, noOf), this.match(']'));
      return node;
    },
    args: function () {
      var node = new Node(Node.ARGS);
      node.add(this.match('('));

      if (!this.look) {
        this.error();
      }

      node.add(this.arglist());
      node.add(this.match(')'));
      return node;
    },
    arglist: function () {
      var node = new Node(Node.ARGLIST);

      if (this.look && this.look.content() == '...') {
        node.add(this.match(), this.assignexpr());
      } else if (this.look && this.look.content() != ')') {
        while (this.look) {
          node.add(this.assignexpr());

          if (this.look) {
            if (this.look.content() == ',') {
              node.add(this.match());

              if (this.look && this.look.content() == '...') {
                node.add(this.match(), this.assignexpr());
                break;
              }
            } else if (this.look.content() == ')') {
              break;
            }
          }
        }
      }

      return node;
    },
    virtual: function (s) {
      return new Node(Node.TOKEN, new Token(Token.VIRTUAL, s));
    },
    match: function (type, line, msg) {
      if (typeof type == 'boolean') {
        msg = line;
        line = type;
        type = undefined;
      }

      if (typeof line != 'boolean') {
        line = false;
        msg = line;
      } //未定义为所有非空白token


      if (character.isUndefined(type)) {
        if (this.look) {
          var l = this.look;
          this.move(line);
          return new Node(Node.TOKEN, l);
        } else {
          this.error('syntax error' + (msg || ''));
        }
      } //或者根据token的type或者content匹配
      else if (typeof type == 'string') {
          //特殊处理;，不匹配但有换行或者末尾时自动补全，还有受限行
          if (type == ';' && (!this.look || this.look.content() != type && this.hasMoveLine || this.look.content() == '}')) {
            if (this.look && S[this.look.type()]) {
              this.move();
            }

            return this.virtual(';');
          } else if (this.look && this.look.content() == type) {
            var l = this.look;
            this.move(line);
            return new Node(Node.TOKEN, l);
          } else {
            this.error('missing ' + type + (msg || ''));
          }
        } else if (typeof type == 'number') {
          if (this.look && this.look.type() == type) {
            var l = this.look;
            this.move(line);
            return new Node(Node.TOKEN, l);
          } else {
            this.error('missing ' + Token.type(type) + (msg || ''));
          }
        }
    },
    move: function (line) {
      this.lastLine = this.line;
      this.lastCol = this.col; //遗留下来的换行符

      this.hasMoveLine = false;

      do {
        this.look = this.tokens[this.index++];

        if (!this.look) {
          return;
        } //存下忽略的token


        if (S[this.look.type()]) {
          this.ignores[this.index - 1] = this.look;
        } //包括line的情况下要跳出


        if (this.look.type() == Token.LINE) {
          this.line++;
          this.col = 1;
          this.hasMoveLine = true;

          if (line) {
            break;
          }
        } else if (this.look.type() == Token.COMMENT) {
          var s = this.look.content();
          var n = character.count(this.look.content(), character.LINE);

          if (n > 0) {
            this.line += n;
            var i = s.lastIndexOf(character.LINE);
            this.col += s.length - i - 1;
            this.hasMoveLine = true;

            if (line) {
              break;
            }
          }
        } else {
          this.col += this.look.content().length;

          if (!S[this.look.type()]) {
            break;
          }
        }
      } while (this.index <= this.length);
    },
    error: function (msg) {
      msg = 'SyntaxError: ' + (msg || ' syntax error');
      throw new Error(msg + ' line ' + this.lastLine + ' col ' + this.lastCol);
    }
  }).statics({
    S: S
  });
  module.exports = Parser;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/parser/html/Node.js":
/*!*********************************************************!*\
  !*** ./node_modules/homunculus/web/parser/html/Node.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var INode = __webpack_require__(/*! ../Node */ "./node_modules/homunculus/web/parser/Node.js");

  var Node = INode.extend(function (type, children) {
    INode.call(this, type, children);
    return this;
  }).statics({
    DOCUMENT: 'document',
    ELEMENT: 'element',
    SelfClosingElement: 'SelfClosingElement',
    OpeningElement: 'OpeningElement',
    ClosingElement: 'ClosingElement',
    Attribute: 'Attribute',
    getKey: function (s) {
      if (!s) {
        throw new Error('empty value');
      }

      if (!keys) {
        var self = this;
        keys = {};
        Object.keys(this).forEach(function (k) {
          var v = self[k];
          keys[v] = k;
        });
      }

      return keys[s];
    }
  });
  var keys;
  module.exports = Node;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/parser/html/Parser.js":
/*!***********************************************************!*\
  !*** ./node_modules/homunculus/web/parser/html/Parser.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var IParser = __webpack_require__(/*! ../Parser */ "./node_modules/homunculus/web/parser/Parser.js");

  var character = __webpack_require__(/*! ../../util/character */ "./node_modules/homunculus/web/util/character.js");

  var Lexer = __webpack_require__(/*! ../../lexer/HtmlLexer */ "./node_modules/homunculus/web/lexer/HtmlLexer.js");

  var Rule = __webpack_require__(/*! ../../lexer/rule/HtmlRule */ "./node_modules/homunculus/web/lexer/rule/HtmlRule.js");

  var Token = __webpack_require__(/*! ../../lexer/HtmlToken */ "./node_modules/homunculus/web/lexer/HtmlToken.js");

  var Node = __webpack_require__(/*! ./Node */ "./node_modules/homunculus/web/parser/html/Node.js");

  var S = {};
  S[Token.BLANK] = S[Token.TAB] = S[Token.COMMENT] = S[Token.LINE] = S[Token.ENTER] = true;
  var SINGLE = {
    'img': true,
    'meta': true,
    'link': true,
    '!doctype': true,
    'br': true,
    'basefont': true,
    'base': true,
    'col': true,
    'embed': true,
    'frame': true,
    'hr': true,
    'input': true,
    'keygen': true,
    'area': true,
    'param': true,
    'source': true,
    'track': true
  };
  var Parser = IParser.extend(function (lexer) {
    IParser.call(this, lexer);
    this.init(lexer);
    return this;
  }).methods({
    parse: function (code) {
      this.lexer.parse(code);
      this.tree = this.document();
      return this.tree;
    },
    init: function (lexer) {
      this.look = null;
      this.tokens = null;
      this.lastLine = 1;
      this.lastCol = 1;
      this.line = 1;
      this.col = 1;
      this.index = 0;
      this.length = 0;
      this.ignores = {};
      this.hasMoveLine = false;
      this.tree = {};

      if (lexer) {
        this.lexer = lexer;
      } else if (this.lexer) {
        this.lexer.init();
      } else {
        this.lexer = new Lexer(new Rule());
      }
    },
    document: function () {
      this.tokens = this.lexer.tokens();
      this.length = this.tokens.length;

      if (this.tokens.length) {
        this.move();
      }

      var node = new Node(Node.DOCUMENT);
      var first = true;

      while (this.look) {
        node.add(this.element(first));
        first = false;
      }

      return node;
    },
    element: function (first) {
      if (this.look.type() == Token.TEXT) {
        return this.match();
      } else {
        var node = new Node(Node.OpeningElement);
        node.add(this.match('<'), this.elemname(first));
        var name = node.last().token().content();

        while (this.look && this.look.type() == Token.PROPERTY) {
          node.add(this.attr());
        }

        if (!this.look) {
          this.error();
        }

        if (this.look.content() == '/>') {
          node.add(this.match());
          node.name(Node.SelfClosingElement);
          return node;
        }

        node.add(this.match('>'));

        if (SINGLE.hasOwnProperty(name.toLowerCase())) {
          node.name(Node.SelfClosingElement);
          return node;
        }

        var n = new Node(Node.ELEMENT);
        n.add(node);

        while (this.look && this.look.content() != '</') {
          n.add(this.element());
        }

        n.add(this.close(name));
        return n;
      }
    },
    elemname: function (first) {
      if (!this.look) {
        this.error();
      }

      if (first && this.look.type() == Token.DOC) {
        return this.match();
      }

      return this.match(Token.ELEM);
    },
    attr: function () {
      var node = new Node(Node.Attribute);
      node.add(this.match(Token.PROPERTY));

      if (this.look && this.look.content() == '=') {
        node.add(this.match());

        if (!this.look) {
          this.error();
        }

        switch (this.look.type()) {
          case Token.STRING:
          case Token.NUMBER:
          case Token.PROPERTY:
            node.add(this.match());
            break;

          default:
            this.error();
        }
      }

      return node;
    },
    close: function (name) {
      var node = new Node(Node.ClosingElement);
      node.add(this.match('</'), this.match(name), this.match('>'));
      return node;
    },
    match: function (type, line, msg) {
      if (typeof type == 'boolean') {
        msg = line;
        line = type;
        type = undefined;
      }

      if (typeof line != 'boolean') {
        line = false;
        msg = line;
      } //未定义为所有非空白token


      if (character.isUndefined(type)) {
        if (this.look) {
          var l = this.look;
          this.move(line);
          return new Node(Node.TOKEN, l);
        } else {
          this.error('syntax error' + (msg || ''));
        }
      } //或者根据token的type或者content匹配
      else if (typeof type == 'string') {
          //特殊处理;，不匹配但有换行或者末尾时自动补全，还有受限行
          if (type == ';' && (!this.look || this.look.content() != type && this.hasMoveLine || this.look.content() == '}')) {
            if (this.look && S[this.look.type()]) {
              this.move();
            }

            return this.virtual(';');
          } else if (this.look && this.look.content() == type) {
            var l = this.look;
            this.move(line);
            return new Node(Node.TOKEN, l);
          } else {
            this.error('missing ' + type + (msg || ''));
          }
        } else if (typeof type == 'number') {
          if (this.look && this.look.type() == type) {
            var l = this.look;
            this.move(line);
            return new Node(Node.TOKEN, l);
          } else {
            this.error('missing ' + Token.type(type) + (msg || ''));
          }
        }
    },
    move: function (line) {
      this.lastLine = this.line;
      this.lastCol = this.col; //遗留下来的换行符

      this.hasMoveLine = false;

      do {
        this.look = this.tokens[this.index++];

        if (!this.look) {
          return;
        } //存下忽略的token


        if (S[this.look.type()]) {
          this.ignores[this.index - 1] = this.look;
        } //包括line的情况下要跳出


        if (this.look.type() == Token.LINE) {
          this.line++;
          this.col = 1;
          this.hasMoveLine = true;

          if (line) {
            break;
          }
        } else if (this.look.type() == Token.COMMENT) {
          var s = this.look.content();
          var n = character.count(this.look.content(), character.LINE);

          if (n > 0) {
            this.line += n;
            var i = s.lastIndexOf(character.LINE);
            this.col += s.length - i - 1;
            this.hasMoveLine = true;

            if (line) {
              break;
            }
          }
        } else {
          this.col += this.look.content().length;

          if (!S[this.look.type()]) {
            break;
          }
        }
      } while (this.index <= this.length);
    },
    error: function (msg) {
      msg = 'SyntaxError: ' + (msg || ' syntax error');
      throw new Error(msg + ' line ' + this.lastLine + ' col ' + this.lastCol);
    }
  });
  module.exports = Parser;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/parser/js/Context.js":
/*!**********************************************************!*\
  !*** ./node_modules/homunculus/web/parser/js/Context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Class = __webpack_require__(/*! ../../util/Class */ "./node_modules/homunculus/web/util/Class.js");

  var JsNode = __webpack_require__(/*! ./Node */ "./node_modules/homunculus/web/parser/js/Node.js");

  var Token = __webpack_require__(/*! ../../lexer/Token */ "./node_modules/homunculus/web/lexer/Token.js");

  var Parser = __webpack_require__(/*! ./Parser */ "./node_modules/homunculus/web/parser/js/Parser.js");

  var id = 0;
  var Context = Class(function (parent, name) {
    this.id = id++;
    this.parser = new Parser();
    this.parent = parent || null; //父上下文，如果是全局则为空

    this.name = name || null; //上下文名称，即函数名，函数表达式为空，全局也为空

    this.children = []; //函数声明或函数表达式所产生的上下文

    this.childrenMap = Object.create(null); //键是函数名，值是上下文，匿名函数表达式键为cid

    this.vars = []; //变量var声明

    this.varsMap = Object.create(null); //键为id字面量，值是它的token的节点

    this.vardeclMap = Object.create(null); //var赋值记录，优先级vardecl > fndecl > varnodecl

    this.params = []; //形参，函数上下文才有，即全局无

    this.paramsMap = Object.create(null); //键为id字面量，值是它的token的节点

    this.aParams = []; //实参，函数表达式才有

    this.vids = []; //上下文环境里用到的变量id

    this.vidsMap = Object.create(null); //键为id字面量，值是它的token的节点

    this.returns = []; //上下文环境里return语句

    this.node = null; //对应的ast的节点

    this.thisIs = null; //this指向，仅函数表达式call或apply执行时有用

    if (!this.isTop()) {
      this.parent.addChild(this);
    }
  }).methods({
    parse: function (code) {
      var ast;

      if (code instanceof JsNode) {
        ast = code;
      } else {
        ast = this.parser.parse(code);
      }

      recursion(ast, this);
      return this;
    },
    getId: function () {
      return this.id;
    },
    getName: function () {
      return this.name;
    },
    getParent: function () {
      return this.parent;
    },
    isTop: function () {
      return !this.parent;
    },
    isFnexpr: function () {
      return !this.isTop() && !this.name;
    },
    hasParam: function (p) {
      return p in this.paramsMap;
    },
    getParams: function () {
      return this.params;
    },
    addParam: function (p) {
      //形参不可能重复，无需判断
      this.paramsMap[p] = this.params.length;
      this.params.push(p);
      return this;
    },
    getAParams: function () {
      return this.aParams;
    },
    addAParam: function (ap) {
      this.aParams.push(ap);
      return this;
    },
    getChild: function (name) {
      return this.childrenMap[name];
    },
    getChildren: function () {
      return this.children;
    },
    //通过name查找函数声明，id查找表达式
    hasChild: function (name) {
      return name in this.childrenMap;
    },
    addChild: function (child) {
      var name = child.getName(); //函数表达式名字为空用id删除

      if (name) {
        if (name in this.vardeclMap) {
          return this;
        }

        this.delVar(name);
        this.delChild(name);
      } else {
        this.delChild(child.getId());
      }

      name = name || child.getId();
      this.childrenMap[name] = child;
      this.children.push(child);
      return this;
    },
    //name函数声明，id表达式
    delChild: function (name) {
      if (this.hasChild(name)) {
        var i = this.children.indexOf(this.childrenMap[name]);
        this.children.splice(i, 1);
        delete this.childrenMap[name];
      }

      return this;
    },
    hasVar: function (v) {
      return v in this.varsMap;
    },
    addVar: function (node, assign) {
      var v = node.leaves()[0].token().content(); //赋值拥有最高优先级，会覆盖掉之前的函数声明和var

      if (assign) {
        this.delVar(v);
        this.delChild(v);
        this.vardeclMap[v] = true;
      } //仅仅是var声明无赋值，且已有过声明或函数，忽略之
      else if (this.hasVar(v) || this.hasChild(v)) {
          return this;
        }

      this.varsMap[v] = node;
      this.vars.push(node);
      return this;
    },
    delVar: function (v) {
      if (this.hasVar(v)) {
        var i = this.vars.indexOf(this.varsMap[v]);
        this.vars.splice(i, 1);
        delete this.varsMap[v];
      }

      return this;
    },
    getVars: function () {
      return this.vars;
    },
    addReturn: function (node) {
      this.returns.push(node);
      return this;
    },
    getReturns: function () {
      return this.returns;
    },
    hasVid: function (v) {
      return v in this.vidsMap;
    },
    getVid: function (v) {
      return this.vidsMap[v];
    },
    addVid: function (node) {
      var v = node.token().content();
      this.vids.push(node);
      this.vidsMap[v] = this.vidsMap[v] || [];
      this.vidsMap[v].push(node);
      return this;
    },
    getVids: function () {
      return this.vids;
    },
    getNode: function () {
      return this.node;
    },
    setNode: function (n) {
      this.node = n;
      return this;
    },
    setThis: function (t) {
      this.thisIs = t;
      return this;
    },
    getThis: function () {
      return this.thisIs;
    }
  });

  function recursion(node, context) {
    var isToken = node.name() == JsNode.TOKEN;
    var isVirtual = isToken && node.token().type() == Token.VIRTUAL;

    if (isToken) {
      if (!isVirtual) {
        var token = node.token();
        var s = token.content();

        if (s == 'return') {
          context.addReturn(node);
        }
      }
    } else {
      if (node.name() == JsNode.VARDECL) {
        vardecl(node, context);
      } else if (node.name() == JsNode.FNDECL) {
        context = fndecl(node, context);
      } else if (node.name() == JsNode.FNEXPR) {
        context = fnexpr(node, context);
      } else if (node.name() == JsNode.PRMREXPR) {
        prmrexpr(node, context);
      }

      node.leaves().forEach(function (leaf, i) {
        recursion(leaf, context);
      });
    }
  }

  function vardecl(node, context) {
    var leaves = node.leaves();
    var assign = !!leaves[1];
    context.addVar(node, assign);
  }

  function fndecl(node, context) {
    var v = node.leaves()[1].leaves().content();
    var child = new Context(context, v);
    child.setNode(node);
    var params = node.leaves()[3];

    if (params.name() == JsNode.FNPARAMS) {
      addParam(params, child);
    }

    return child;
  }

  function fnexpr(node, context) {
    //函数表达式name为空
    var child = new Context(context);
    child.setNode(node); //记录形参

    var params;
    var v = node.leaves()[1];

    if (v.token().content() != '(') {
      params = node.leaves()[3];
    } else {
      params = node.leaves()[2];
    }

    if (params.name() == JsNode.FNPARAMS) {
      addParam(params, child);
    } //匿名函数检查实参传入情况，包括call和apply设置this


    var next = node.next(); //!function(){}()形式

    if (next && next.name() == JsNode.ARGS) {
      var leaves = next.leaves(); //长度2为()空参数，长度3有参数，第2个节点

      if (leaves.length == 3) {
        addAParam(leaves[1], child);
      }
    } //call或applay
    else if (next && next.name() == JsNode.TOKEN && next.token().content() == '.' && next.next() && next.next().name() == JsNode.TOKEN && ['call', 'apply'].indexOf(next.next().token().content()) > -1) {
        var mmb = node.parent();

        if (mmb.name() == JsNode.MMBEXPR) {
          var callexpr = mmb.parent();

          if (callexpr.name() == JsNode.CALLEXPR) {
            var isApply = next.next().token().content() == 'apply';
            next = mmb.next();

            if (next && next.name() == JsNode.ARGS) {
              var leaves = next.leaves(); //长度2为()空参数，长度3有参数，第2个节点

              if (leaves.length == 3) {
                isApply ? addApplyAParam(leaves[1], child) : addCallAParam(leaves[1], child);
              }
            }
          }
        }
      } //(function(){})()形式
      else {
          var prmr = node.parent();
          var prev = node.prev();

          if (prmr.name() == JsNode.PRMREXPR && prev && prev.name() == JsNode.TOKEN && prev.token().content() == '(') {
            next = prmr.next();

            if (next && next.name() == JsNode.ARGS) {
              var leaves = next.leaves(); //长度2为()空参数，长度3有参数，第2个节点

              if (leaves.length == 3) {
                addAParam(leaves[1], child);
              }
            } //(function(){}).call()形式
            else if (next && next.name() == JsNode.TOKEN && next.token().content() == '.' && next.next() && next.next().name() == JsNode.TOKEN && ['call', 'apply'].indexOf(next.next().token().content()) > -1) {
                var mmb = prmr.parent();

                if (mmb.name() == JsNode.MMBEXPR) {
                  var callexpr = mmb.parent();

                  if (callexpr.name() == JsNode.CALLEXPR) {
                    var isApply = next.next().token().content() == 'apply';
                    next = mmb.next();

                    if (next && next.name() == JsNode.ARGS) {
                      var leaves = next.leaves(); //长度2为()空参数，长度3有参数，第2个节点

                      if (leaves.length == 3) {
                        isApply ? addApplyAParam(leaves[1], child) : addCallAParam(leaves[1], child);
                      } else {
                        child.setThis(undefined);
                      }
                    }
                  }
                }
              }
          }
        }

    return child;
  }

  function addParam(params, child) {
    params.leaves().forEach(function (leaf, i) {
      if (leaf.name() == JsNode.TOKEN && leaf.token().content() != ',') {
        child.addParam(leaf.token().content());
      }
    });
  }

  function addAParam(params, child) {
    params.leaves().forEach(function (leaf, i) {
      if (i % 2 == 0) {
        child.addAParam(leaf);
      }
    });
  }

  function addCallAParam(params, child) {
    params.leaves().forEach(function (leaf, i) {
      if (i == 0) {
        child.setThis(leaf);
      } else if (i % 2 == 1) {
        child.addAParam(leaf);
      }
    });
  }

  function addApplyAParam(params, child) {
    child.setThis(params.leaves()[0]);

    if (params.leaves()[2]) {
      params.leaves()[2].leaves()[0].leaves().forEach(function (leaf, i) {
        if (i % 2 == 1) {
          child.addAParam(leaf);
        }
      });
    }
  }

  function prmrexpr(node, context) {
    var first = node.leaves()[0];

    if (first.name() == JsNode.TOKEN) {
      var token = first.token();

      if (token.type() == Token.ID || token.content() == 'this') {
        context.addVid(first);
      }
    }
  }

  module.exports = Context;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/parser/js/Node.js":
/*!*******************************************************!*\
  !*** ./node_modules/homunculus/web/parser/js/Node.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var INode = __webpack_require__(/*! ../Node */ "./node_modules/homunculus/web/parser/Node.js");

  var Node = INode.extend(function (type, children) {
    INode.call(this, type, children);
    return this;
  }).statics({
    PROGRAM: 'program',
    ELEM: 'elem',
    VARSTMT: 'varstmt',
    VARDECL: 'vardecl',
    FNBODY: 'fnbody',
    BLOCK: 'block',
    ITERSTMT: 'iterstmt',
    FNPARAMS: 'fnparams',
    EXPR: 'expr',
    PROGRAM: 'program',
    STMT: 'stmt',
    ASSIGN: 'assign',
    EMPTSTMT: 'emptstmt',
    IFSTMT: 'ifstmt',
    CNTNSTMT: 'cntnstmt',
    BRKSTMT: 'brkstmt',
    RETSTMT: 'retstmt',
    WITHSTMT: 'withstmt',
    SWCHSTMT: 'swchstmt',
    CASEBLOCK: 'caseblock',
    CASECLAUSE: 'caseclause',
    DFTCLAUSE: 'dftclause',
    LABSTMT: 'labstmt',
    THRSTMT: 'thrstmt',
    TRYSTMT: 'trystmt',
    DEBSTMT: 'debstmt',
    EXPRSTMT: 'exprstmt',
    CACH: 'cach',
    FINL: 'finl',
    FNDECL: 'fndecl',
    FNEXPR: 'fnexpr',
    ASSIGNEXPR: 'assignexpr',
    CNDTEXPR: 'cndtexpr',
    LOGOREXPR: 'logorexpr',
    LOGANDEXPR: 'logandexpr',
    BITOREXPR: 'bitorexpr',
    BITANDEXPR: 'bitandexpr',
    BITXOREXPR: 'bitxorexpr',
    EQEXPR: 'eqexpr',
    RELTEXPR: 'reltexpr',
    SHIFTEXPR: 'shiftexpr',
    ADDEXPR: 'addexpr',
    MTPLEXPR: 'mtplexpr',
    UNARYEXPR: 'unaryexpr',
    MMBEXPR: 'mmbexpr',
    PRMREXPR: 'prmrexpr',
    ARRLTR: 'arrltr',
    OBJLTR: 'objltr',
    PROPTASSIGN: 'proptassign',
    ARGS: 'args',
    ARGLIST: 'arglist',
    POSTFIXEXPR: 'postfixexpr',
    NEWEXPR: 'newexpr',
    CALLEXPR: 'callexpr',
    getKey: function (s) {
      if (!s) {
        throw new Error('empty value');
      }

      if (!keys) {
        var self = this;
        keys = {};
        Object.keys(this).forEach(function (k) {
          var v = self[k];
          keys[v] = k;
        });
      }

      return keys[s];
    }
  });
  var keys;
  module.exports = Node;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/parser/js/Parser.js":
/*!*********************************************************!*\
  !*** ./node_modules/homunculus/web/parser/js/Parser.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var IParser = __webpack_require__(/*! ../Parser */ "./node_modules/homunculus/web/parser/Parser.js");

  var character = __webpack_require__(/*! ../../util/character */ "./node_modules/homunculus/web/util/character.js");

  var Lexer = __webpack_require__(/*! ../../lexer/Lexer */ "./node_modules/homunculus/web/lexer/Lexer.js");

  var Rule = __webpack_require__(/*! ../../lexer/rule/EcmascriptRule */ "./node_modules/homunculus/web/lexer/rule/EcmascriptRule.js");

  var Token = __webpack_require__(/*! ../../lexer/Token */ "./node_modules/homunculus/web/lexer/Token.js");

  var Node = __webpack_require__(/*! ./Node */ "./node_modules/homunculus/web/parser/js/Node.js");

  var S = {};
  S[Token.BLANK] = S[Token.TAB] = S[Token.COMMENT] = S[Token.LINE] = S[Token.ENTER] = true;
  var NOASSIGN = {};
  NOASSIGN[Node.CNDTEXPR] = NOASSIGN[Node.LOGOREXPR] = NOASSIGN[Node.LOGANDEXPR] = NOASSIGN[Node.BITOREXPR] = NOASSIGN[Node.BITXOREXPR] = NOASSIGN[Node.BITANDEXPR] = NOASSIGN[Node.EQEXPR] = NOASSIGN[Node.RELTEXPR] = NOASSIGN[Node.SHIFTEXPR] = NOASSIGN[Node.ADDEXPR] = NOASSIGN[Node.MTPLEXPR] = NOASSIGN[Node.UNARYEXPR] = NOASSIGN[Node.POSTFIXEXPR] = true;
  var Parser = IParser.extend(function (lexer) {
    IParser.call(this, lexer);
    this.init(lexer);
    return this;
  }).methods({
    parse: function (code) {
      this.lexer.parse(code);
      this.tree = this.program();
      return this.tree;
    },
    init: function (lexer) {
      this.look = null;
      this.tokens = null;
      this.lastLine = 1;
      this.lastCol = 1;
      this.line = 1;
      this.col = 1;
      this.index = 0;
      this.length = 0;
      this.ignores = {};
      this.hasMoveLine = false;
      this.tree = {};

      if (lexer) {
        this.lexer = lexer;
      } else if (this.lexer) {
        this.lexer.init();
      } else {
        this.lexer = new Lexer(new Rule());
      }
    },
    program: function () {
      this.tokens = this.lexer.tokens();
      this.length = this.tokens.length;

      if (this.tokens.length) {
        this.move();
      }

      var node = new Node(Node.PROGRAM);

      while (this.look) {
        node.add(this.element());
      }

      return node;
    },
    element: function () {
      if (this.look.content() == 'function') {
        return this.fndecl();
      } else {
        return this.stmt();
      }
    },
    stmt: function () {
      if (!this.look) {
        this.error();
      }

      switch (this.look.content()) {
        case 'var':
          return this.varstmt();

        case '{':
          return this.block();

        case ';':
          return this.emptstmt();

        case 'if':
          return this.ifstmt();

        case 'do':
        case 'while':
        case 'for':
          return this.iterstmt();

        case 'continue':
          return this.cntnstmt();

        case 'break':
          return this.brkstmt();

        case 'return':
          return this.retstmt();

        case 'with':
          return this.withstmt();

        case 'switch':
          return this.swchstmt();

        case 'throw':
          return this.thrstmt();

        case 'try':
          return this.trystmt();

        case 'debugger':
          return this.debstmt();

        default:
          if (this.look.type() == Token.ID) {
            for (var i = this.index; i < this.length; i++) {
              var token = this.tokens[i];

              if (!S[token.type()]) {
                if (token.content() == ':') {
                  return this.labstmt();
                } else {
                  return this.exprstmt();
                }
              }
            }
          }

          return this.exprstmt();
      }
    },
    exprstmt: function () {
      var node = new Node(Node.EXPRSTMT);
      node.add(this.expr(), this.match(';'));
      return node;
    },
    varstmt: function (noSem) {
      var node = new Node(Node.VARSTMT);
      node.add(this.match('var'), this.vardecl());

      while (this.look && this.look.content() == ',') {
        node.add(this.match(), this.vardecl());
      }

      if (!noSem) {
        node.add(this.match(';'));
      }

      return node;
    },
    vardecl: function () {
      var node = new Node(Node.VARDECL);

      if (!this.look) {
        this.error('missing variable name');
      }

      node.add(this.match(Token.ID, 'missing variable name'));

      if (this.look && this.look.content() == '=') {
        node.add(this.assign());
      }

      return node;
    },
    assign: function () {
      var node = new Node(Node.ASSIGN);
      node.add(this.match('='));

      if (!this.look) {
        this.error();
      }

      node.add(this.assignexpr());
      return node;
    },
    block: function () {
      var node = new Node(Node.BLOCK);
      node.add(this.match('{'));

      while (this.look && this.look.content() != '}') {
        node.add(this.stmt());
      }

      node.add(this.match('}', 'missing } in compound statement'));
      return node;
    },
    emptstmt: function () {
      var node = new Node(Node.EMPTSTMT);
      node.add(this.match(';'));
      return node;
    },
    ifstmt: function () {
      var node = new Node(Node.IFSTMT);
      node.add(this.match('if'), this.match('('), this.expr(), this.match(')'), this.stmt());

      if (this.look && this.look.content() == 'else') {
        node.add(this.match('else'), this.stmt());
      }

      return node;
    },
    iterstmt: function () {
      var node = new Node(Node.ITERSTMT);

      switch (this.look.content()) {
        case 'do':
          node.add(this.match(), this.stmt(), this.match('while'), this.match('('), this.expr(), this.match(')'), this.match(';'));
          break;

        case 'while':
          node.add(this.match(), this.match('('), this.expr(), this.match(')'), this.stmt());
          break;

        case 'for':
          node.add(this.match(), this.match('('));

          if (!this.look) {
            this.error();
          } //当前是var/let/const的话，LL3确定是for(var vardecllist;或for(var vardecl in


          if (this.look.content() == 'var') {
            var node2 = this.varstmt(true);

            if (!this.look) {
              this.error('missing ; after for-loop initializer');
            }

            if (this.look.content() == 'in') {
              if (node2.size() > 2) {
                this.error('invalid for/in left-hand side');
              }

              node.add(node2);
              node.add(this.match(), this.expr());
            } else {
              node.add(node2);
              node.add(this.match(';'));

              if (this.look.content() != ';') {
                node.add(this.expr());
              }

              node.add(this.match(';'));

              if (!this.look) {
                this.error();
              }

              if (this.look.content() != ')') {
                node.add(this.expr());
              }
            }
          } else {
            if (this.look.content() == 'in') {
              this.error();
            } //for(EXPRnoin;) or for(leftexpr in


            var expr;

            if (this.look.content() != ';') {
              expr = this.expr(true);
              node.add(expr);
            }

            if (!this.look) {
              this.error('missing ;');
            }

            if (this.look.content() == 'in') {
              if (expr.name() == Node.MMBEXPR || expr.name() == Node.PRMREXPR || expr.name() == Node.NEWEXPR) {
                node.add(this.match(), this.expr());
              } else {
                this.error('invalid for/in left-hand side');
              }
            } else {
              //for的;不能省略，强制判断
              node.add(this.match(';', 'missing ;'));

              if (!this.look) {
                this.error();
              }

              if (this.look.content() != ';') {
                node.add(this.expr());
              }

              node.add(this.match(';', 'missing ;'));

              if (!this.look) {
                this.error();
              }

              if (this.look.content() != ')') {
                node.add(this.expr());
              }
            }
          }

          node.add(this.match(')'));
          node.add(this.stmt());
      }

      return node;
    },
    cntnstmt: function () {
      var node = new Node(Node.CNTNSTMT);
      node.add(this.match('continue', true));

      if (this.look && this.look.type() == Token.ID) {
        node.add(this.match());
      }

      node.add(this.match(';'));
      return node;
    },
    brkstmt: function () {
      var node = new Node(Node.BRKSTMT);
      node.add(this.match('break', true));

      if (this.look && this.look.type() == Token.ID) {
        node.add(this.match());
      }

      node.add(this.match(';'));
      return node;
    },
    retstmt: function () {
      var node = new Node(Node.RETSTMT);
      node.add(this.match('return', true)); //return后换行视作省略;，包括多行注释的换行

      if (this.look) {
        if (this.look.content() == ';' || this.look.content() == '}' || this.look.type() == Token.LINE || this.look.type() == Token.COMMENT) {
          node.add(this.match(';'));
        } else {
          node.add(this.expr(), this.match(';'));
        }
      } else {
        node.add(this.match(';'));
      }

      return node;
    },
    withstmt: function () {
      var node = new Node(Node.WITHSTMT);
      node.add(this.match('with'), this.match('('), this.expr(), this.match(')'), this.stmt());
      return node;
    },
    swchstmt: function () {
      var node = new Node(Node.SWCHSTMT);
      node.add(this.match('switch'), this.match('('), this.expr(), this.match(')'), this.caseblock());
      return node;
    },
    caseblock: function () {
      var node = new Node(Node.CASEBLOCK);
      node.add(this.match('{'));

      while (this.look && this.look.content() != '}') {
        if (this.look.content() == 'case') {
          node.add(this.caseclause());
        } else if (this.look.content() == 'default') {
          node.add(this.dftclause());
        } else {
          this.error('invalid switch statement');
        }
      }

      node.add(this.match('}'));
      return node;
    },
    caseclause: function () {
      var node = new Node(Node.CASECLAUSE);
      node.add(this.match('case'), this.expr(), this.match(':'));

      while (this.look && this.look.content() != 'case' && this.look.content() != 'default' && this.look.content() != '}') {
        node.add(this.stmt());
      }

      return node;
    },
    dftclause: function () {
      var node = new Node(Node.DFTCLAUSE);
      node.add(this.match('default'), this.match(':'));

      while (this.look && this.look.content() == 'case') {
        node.add(this.match('case'), this.expr(), this.match(':'));
      }

      while (this.look && this.look.content() != '}') {
        node.add(this.stmt());
      }

      return node;
    },
    labstmt: function () {
      var node = new Node(Node.LABSTMT);
      node.add(this.match(Token.ID), this.match(':'), this.stmt());
      return node;
    },
    thrstmt: function () {
      var node = new Node(Node.THRSTMT);
      node.add(this.match('throw', true), this.expr(), this.match(';'));
      return node;
    },
    trystmt: function () {
      var node = new Node(Node.TRYSTMT);
      node.add(this.match('try'), this.block());

      if (this.look && this.look.content() == 'catch') {
        node.add(this.cach());

        if (this.look && this.look.content() == 'finally') {
          node.add(this.finl());
        }
      } else {
        node.add(this.finl());
      }

      return node;
    },
    debstmt: function () {
      var node = new Node(Node.DEBSTMT);
      node.add(this.match('debugger'), this.match(';'));
      return node;
    },
    cach: function () {
      var node = new Node(Node.CACH);
      node.add(this.match('catch'), this.match('('), this.match(Token.ID, 'missing identifier in catch'), this.match(')'), this.block());
      return node;
    },
    finl: function () {
      var node = new Node(Node.FINL);
      node.add(this.match('finally'), this.block());
      return node;
    },
    fndecl: function () {
      var node = new Node(Node.FNDECL);
      node.add(this.match('function'), this.match(Token.ID, 'function statement requires a name'), this.match('('));

      if (!this.look) {
        this.error('missing formal parameter');
      }

      if (this.look.content() != ')') {
        node.add(this.fnparams());
      }

      node.add(this.match(')'), this.match('{'), this.fnbody(), this.match('}'));
      return node;
    },
    fnexpr: function (noIn) {
      var node = new Node(Node.FNEXPR);
      node.add(this.match('function'));

      if (!this.look) {
        this.error('missing formal parameter');
      }

      if (this.look.type() == Token.ID) {
        if (noIn && this.look.content() == 'in') {
          this.error();
        }

        node.add(this.match());
      }

      node.add(this.match('('));

      if (!this.look) {
        this.error();
      }

      if (this.look.content() != ')') {
        node.add(this.fnparams());
      }

      node.add(this.match(')'), this.match('{'), this.fnbody(), this.match('}', 'missing } in compound statement'));
      return node;
    },
    fnparams: function () {
      var node = new Node(Node.FNPARAMS);

      while (this.look) {
        node.add(this.match(Token.ID, 'missing formal parameter'));

        if (this.look) {
          if (this.look.content() == ',') {
            node.add(this.match());
          } else if (this.look.content() == ')') {
            break;
          }
        }
      }

      return node;
    },
    fnbody: function () {
      var node = new Node(Node.FNBODY);

      while (this.look && this.look.content() != '}') {
        node.add(this.element());
      }

      return node;
    },
    expr: function (noIn) {
      var node = new Node(Node.EXPR),
          assignexpr = this.assignexpr(noIn);

      if (this.look && this.look.content() == ',') {
        node.add(assignexpr);

        while (this.look && this.look.content() == ',') {
          node.add(this.match(), this.assignexpr(noIn));
        }
      } else {
        return assignexpr;
      }

      return node;
    },
    assignexpr: function (noIn) {
      var node = new Node(Node.ASSIGNEXPR);
      var cndt = this.cndtexpr(noIn);

      if (this.look && {
        '*=': true,
        '/=': true,
        '%=': true,
        '+=': true,
        '-=': true,
        '<<=': true,
        '>>=': true,
        '>>>=': true,
        '&=': true,
        '^=': true,
        '|=': true,
        '=': true
      }.hasOwnProperty(this.look.content()) && !NOASSIGN.hasOwnProperty(cndt.name())) {
        node.add(cndt, this.match(), this.assignexpr(noIn));
      } else {
        return cndt;
      }

      return node;
    },
    cndtexpr: function (noIn) {
      var node = new Node(Node.CNDTEXPR),
          logorexpr = this.logorexpr(noIn);

      if (this.look && this.look.content() == '?') {
        node.add(logorexpr, this.match(), this.assignexpr(noIn), this.match(':'), this.assignexpr(noIn));
      } else {
        return logorexpr;
      }

      return node;
    },
    logorexpr: function (noIn) {
      var node = new Node(Node.LOGOREXPR),
          logandexpr = this.logandexpr(noIn);

      if (this.look && this.look.content() == '||') {
        node.add(logandexpr);

        while (this.look && this.look.content() == '||') {
          node.add(this.match(), this.logandexpr(noIn));
        }
      } else {
        return logandexpr;
      }

      return node;
    },
    logandexpr: function (noIn) {
      var node = new Node(Node.LOGANDEXPR),
          bitorexpr = this.bitorexpr(noIn);

      if (this.look && this.look.content() == '&&') {
        node.add(bitorexpr);

        while (this.look && this.look.content() == '&&') {
          node.add(this.match(), this.bitorexpr(noIn));
        }
      } else {
        return bitorexpr;
      }

      return node;
    },
    bitorexpr: function (noIn) {
      var node = new Node(Node.BITOREXPR),
          bitxorexpr = this.bitxorexpr(noIn);

      if (this.look && this.look.content() == '|') {
        node.add(bitxorexpr);

        while (this.look && this.look.content() == '|') {
          node.add(this.match(), this.bitxorexpr(noIn));
        }
      } else {
        return bitxorexpr;
      }

      return node;
    },
    bitxorexpr: function (noIn) {
      var node = new Node(Node.BITXOREXPR),
          bitandexpr = this.bitandexpr(noIn);

      if (this.look && this.look.content() == '^') {
        node.add(bitandexpr);

        while (this.look && this.look.content() == '^') {
          node.add(this.match(), this.bitandexpr(noIn));
        }
      } else {
        return bitandexpr;
      }

      return node;
    },
    bitandexpr: function (noIn) {
      var node = new Node(Node.BITANDEXPR),
          eqexpr = this.eqexpr(noIn);

      if (this.look && this.look.content() == '&') {
        node.add(eqexpr);

        while (this.look && this.look.content() == '&') {
          node.add(this.match(), this.eqexpr(noIn));
        }
      } else {
        return eqexpr;
      }

      return node;
    },
    eqexpr: function (noIn) {
      var node = new Node(Node.EQEXPR),
          reltexpr = this.reltexpr(noIn);

      if (this.look && {
        '==': true,
        '===': true,
        '!==': true,
        '!=': true
      }.hasOwnProperty(this.look.content())) {
        node.add(reltexpr);

        while (this.look && {
          '==': true,
          '===': true,
          '!==': true,
          '!=': true
        }.hasOwnProperty(this.look.content())) {
          node.add(this.match(), this.reltexpr(noIn));
        }
      } else {
        return reltexpr;
      }

      return node;
    },
    reltexpr: function (noIn) {
      var node = new Node(Node.RELTEXPR),
          shiftexpr = this.shiftexpr(noIn);

      if (this.look && ({
        '<': true,
        '>': true,
        '>=': true,
        '<=': true,
        'instanceof': true
      }.hasOwnProperty(this.look.content()) || !noIn && this.look.content() == 'in')) {
        node.add(shiftexpr);

        while (this.look && ({
          '<': true,
          '>': true,
          '>=': true,
          '<=': true,
          'instanceof': true
        }.hasOwnProperty(this.look.content()) || !noIn && this.look.content() == 'in')) {
          node.add(this.match(), this.shiftexpr(noIn));
        }
      } else {
        return shiftexpr;
      }

      return node;
    },
    shiftexpr: function (noIn) {
      var node = new Node(Node.SHIFTEXPR),
          addexpr = this.addexpr(noIn);

      if (this.look && ['<<', '>>', '>>>'].indexOf(this.look.content()) != -1) {
        node.add(addexpr);

        while (this.look && ['<<', '>>', '>>>'].indexOf(this.look.content()) != -1) {
          node.add(this.match(), this.addexpr(noIn));
        }
      } else {
        return addexpr;
      }

      return node;
    },
    addexpr: function (noIn) {
      var node = new Node(Node.ADDEXPR),
          mtplexpr = this.mtplexpr(noIn);

      if (this.look && ['+', '-'].indexOf(this.look.content()) != -1) {
        node.add(mtplexpr);

        while (this.look && ['+', '-'].indexOf(this.look.content()) != -1) {
          node.add(this.match(), this.mtplexpr(noIn));
        }
      } else {
        return mtplexpr;
      }

      return node;
    },
    mtplexpr: function (noIn) {
      var node = new Node(Node.MTPLEXPR),
          unaryexpr = this.unaryexpr(noIn);

      if (this.look && ['*', '/', '%'].indexOf(this.look.content()) != -1) {
        node.add(unaryexpr);

        while (this.look && ['*', '/', '%'].indexOf(this.look.content()) != -1) {
          node.add(this.match(), this.unaryexpr(noIn));
        }
      } else {
        return unaryexpr;
      }

      return node;
    },
    unaryexpr: function (noIn) {
      var node = new Node(Node.UNARYEXPR);

      if (!this.look) {
        this.error();
      }

      switch (this.look.content()) {
        case '++':
        case '--':
          node.add(this.match(), this.leftexpr(noIn));
          break;

        case 'delete':
        case 'void':
        case 'typeof':
        case '+':
        case '-':
        case '~':
        case '!':
          node.add(this.match(), this.unaryexpr(noIn));
          break;

        default:
          return this.postfixexpr(noIn);
      }

      return node;
    },
    postfixexpr: function (noIn) {
      var node = new Node(Node.POSTFIXEXPR);
      var leftexpr = this.leftexpr(noIn);

      if (this.look && ['++', '--'].indexOf(this.look.content()) > -1 && !this.hasMoveLine) {
        node.add(leftexpr, this.match());
      } else {
        return leftexpr;
      }

      return node;
    },
    leftexpr: function (noIn) {
      if (this.look.content() == 'new') {
        return this.newexpr(0, noIn);
      } else {
        return this.callexpr(null, noIn);
      }
    },
    newexpr: function (depth, noIn) {
      depth = depth || 0;
      var node = new Node(Node.NEWEXPR);
      node.add(this.match('new'));

      if (!this.look) {
        this.error();
      }

      if (this.look.content() == 'new') {
        node.add(this.newexpr(depth + 1, noIn));
      } else {
        node.add(this.mmbexpr(noIn));
      }

      if (this.look && this.look.content() == '(') {
        node.add(this.args());
      }

      if (this.look && ['.', '['].indexOf(this.look.content()) > -1) {
        var mmb = new Node(Node.MMBEXPR);
        mmb.add(node);

        while (this.look) {
          if (this.look.content() == '.') {
            mmb.add(this.match(), this.match(Token.ID, 'missing name after . operator'));
          } else if (this.look.content() == '[') {
            mmb.add(this.match(), this.expr(noIn), this.match(']'));
          } else {
            break;
          }
        }

        if (depth == 0 && this.look && this.look.content() == '(') {
          var callexpr = this.callexpr(mmb, noIn);
          return callexpr;
        }

        return mmb;
      }

      return node;
    },
    callexpr: function (mmb, noIn) {
      var node = new Node(Node.CALLEXPR);
      mmb = mmb || this.mmbexpr(noIn);

      if (this.look && this.look.content() == '(') {
        node.add(mmb, this.args());

        while (this.look) {
          var temp;

          if (this.look.content() == '.') {
            temp = new Node(Node.MMBEXPR);
            temp.add(node, this.match(), this.match(Token.ID, 'missing name after . operator'));
            node = temp;
          } else if (this.look.content() == '[') {
            temp = new Node(Node.MMBEXPR);
            temp.add(node, this.match(), this.expr(noIn), this.match(']'));
            node = temp;
          } else if (this.look.content() == '(') {
            temp = new Node(Node.CALLEXPR);
            temp.add(node, this.args());
            node = temp;
          } else {
            break;
          }
        }
      } else {
        return mmb;
      }

      return node;
    },
    mmbexpr: function (noIn) {
      var node = new Node(Node.MMBEXPR);
      var mmb;

      if (this.look.content() == 'function') {
        mmb = this.fnexpr(noIn);
      } else {
        mmb = this.prmrexpr(noIn);
      }

      if (this.look && ['.', '['].indexOf(this.look.content()) > -1) {
        node.add(mmb);

        if (this.look.content() == '.') {
          node.add(this.match(), this.match(Token.ID, 'missing name after . operator'));
        } else {
          node.add(this.match(), this.expr(noIn), this.match(']'));
        }

        while (this.look) {
          var temp;

          if (this.look.content() == '.') {
            temp = new Node(Node.MMBEXPR);
            temp.add(node, this.match(), this.match(Token.ID, 'missing name after . operator'));
            node = temp;
          } else if (this.look.content() == '[') {
            temp = new Node(Node.MMBEXPR);
            temp.add(node, this.match(), this.expr(noIn), this.match(']'));
            node = temp;
          } else {
            break;
          }
        }
      } else {
        return mmb;
      }

      return node;
    },
    prmrexpr: function (noIn) {
      var node = new Node(Node.PRMREXPR);

      switch (this.look.type()) {
        case Token.ID:
          if (noIn && this.look.content() == 'in') {
            this.error();
          }

        case Token.NUMBER:
        case Token.STRING:
        case Token.REG:
        case Token.TEMPLATE:
          node.add(this.match());
          break;

        default:
          switch (this.look.content()) {
            case 'this':
            case 'null':
            case 'true':
            case 'false':
              node.add(this.match());
              break;

            case '(':
              node.add(this.match(), this.expr(), this.match(')'));
              break;

            case '[':
              node.add(this.arrltr());
              break;

            case '{':
              node.add(this.objltr());
              break;

            default:
              this.error();
          }

      }

      return node;
    },
    arrltr: function () {
      var node = new Node(Node.ARRLTR);
      node.add(this.match('['));

      while (this.look && this.look.content() != ']') {
        if (this.look.content() == ',') {
          node.add(this.match());
        } else {
          node.add(this.assignexpr());
        }
      }

      node.add(this.match(']', 'missing ] after element list'));
      return node;
    },
    objltr: function () {
      var node = new Node(Node.OBJLTR);
      node.add(this.match('{'));

      while (this.look && this.look.content() != '}') {
        node.add(this.proptassign());

        if (this.look && this.look.content() == ',') {
          node.add(this.match());
        }
      }

      node.add(this.match('}', 'missing } after property list'));
      return node;
    },
    proptassign: function () {
      var node = new Node(Node.PROPTASSIGN);

      switch (this.look.type()) {
        case Token.ID:
          if (this.look.content() == 'get') {
            node.add(this.match());

            if (!this.look) {
              this.error('missing : after property id');
            }

            if (this.look.type() == Token.ID || this.look.type() == Token.KEYWORD) {
              node.add(this.match(), this.match('(', 'missing ( before formal parameters'), this.match(')', 'missing ) after formal parameters'), this.match('{'), this.fnbody(), this.match('}', 'missing } after function body'));
            } else {
              node.add(this.match(':', 'missing : after property id'), this.assignexpr());
            }

            break;
          } else if (this.look.content() == 'set') {
            node.add(this.match());

            if (!this.look) {
              this.error('missing : after property id');
            }

            if (this.look.type() == Token.ID || this.look.type() == Token.KEYWORD) {
              node.add(this.match(), this.match('(', 'missing ( before formal parameters'), this.match(Token.ID, 'setter functions must have one argument'), this.match(')', 'missing ) after formal parameters'), this.match('{'), this.fnbody(), this.match('}', 'missing } after function body'));
            } else {
              node.add(this.match(':', 'missing : after property id'), this.assignexpr());
            }

            break;
          }

        case Token.STRING:
        case Token.NUMBER:
        case Token.KEYWORD:
          node.add(this.match(), this.match(':', 'missing : after property id'), this.assignexpr());
          break;

        default:
          this.error('invalid property id');
      }

      return node;
    },
    args: function () {
      var node = new Node(Node.ARGS);
      node.add(this.match('('));

      if (!this.look) {
        this.error();
      }

      if (this.look.content() != ')') {
        node.add(this.arglist());
      }

      node.add(this.match(')'));
      return node;
    },
    arglist: function () {
      var node = new Node(Node.ARGLIST);

      while (this.look) {
        node.add(this.assignexpr());

        if (this.look) {
          if (this.look.content() == ',') {
            node.add(this.match());
          } else if (this.look.content() == ')') {
            break;
          }
        }
      }

      return node;
    },
    virtual: function (s) {
      return new Node(Node.TOKEN, new Token(Token.VIRTUAL, s));
    },
    match: function (type, line, msg) {
      if (typeof type == 'boolean') {
        msg = line;
        line = type;
        type = undefined;
      }

      if (typeof line != 'boolean') {
        line = false;
        msg = line;
      } //未定义为所有非空白token


      if (character.isUndefined(type)) {
        if (this.look) {
          var l = this.look;
          this.move(line);
          return new Node(Node.TOKEN, l);
        } else {
          this.error('syntax error' + (msg || ''));
        }
      } //或者根据token的type或者content匹配
      else if (typeof type == 'string') {
          //特殊处理;，不匹配但有换行或者末尾时自动补全，还有受限行
          if (type == ';' && (!this.look || this.look.content() != type && this.hasMoveLine || this.look.content() == '}')) {
            if (this.look && S[this.look.type()]) {
              this.move();
            }

            return this.virtual(';');
          } else if (this.look && this.look.content() == type) {
            var l = this.look;
            this.move(line);
            return new Node(Node.TOKEN, l);
          } else {
            this.error('missing ' + type + (msg || ''));
          }
        } else if (typeof type == 'number') {
          if (this.look && this.look.type() == type) {
            var l = this.look;
            this.move(line);
            return new Node(Node.TOKEN, l);
          } else {
            this.error('missing ' + Token.type(type) + (msg || ''));
          }
        }
    },
    move: function (line) {
      this.lastLine = this.line;
      this.lastCol = this.col; //遗留下来的换行符

      this.hasMoveLine = false;

      do {
        this.look = this.tokens[this.index++];

        if (!this.look) {
          return;
        } //存下忽略的token


        if (S[this.look.type()]) {
          this.ignores[this.index - 1] = this.look;
        } //包括line的情况下要跳出


        if (this.look.type() == Token.LINE) {
          this.line++;
          this.col = 1;
          this.hasMoveLine = true;

          if (line) {
            break;
          }
        } else if (this.look.type() == Token.COMMENT) {
          var s = this.look.content();
          var n = character.count(this.look.content(), character.LINE);

          if (n > 0) {
            this.line += n;
            var i = s.lastIndexOf(character.LINE);
            this.col += s.length - i - 1;
            this.hasMoveLine = true;

            if (line) {
              break;
            }
          }
        } else {
          this.col += this.look.content().length;

          if (!S[this.look.type()]) {
            break;
          }
        }
      } while (this.index <= this.length);
    },
    error: function (msg) {
      msg = 'SyntaxError: ' + (msg || ' syntax error');
      throw new Error(msg + ' line ' + this.lastLine + ' col ' + this.lastCol);
    }
  });
  module.exports = Parser;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/parser/jsx/Node.js":
/*!********************************************************!*\
  !*** ./node_modules/homunculus/web/parser/jsx/Node.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Es6Node = __webpack_require__(/*! ../es6/Node */ "./node_modules/homunculus/web/parser/es6/Node.js");

  var Node = Es6Node.extend(function (type, children) {
    Es6Node.call(this, type, children);
    return this;
  }).statics({
    JSXElement: 'JSXElement',
    JSXSelfClosingElement: 'JSXSelfClosingElement',
    JSXOpeningElement: 'JSXOpeningElement',
    JSXClosingElement: 'JSXClosingElement',
    JSXChild: 'JSXChild',
    JSXSpreadAttribute: 'JSXSpreadAttribute',
    JSXAttribute: 'JSXAttribute',
    JSXBindAttribute: 'JSXBindAttribute',
    JSXNamespacedName: 'JSXNamespacedName',
    JSXMemberExpression: 'JSXMemberExpression',
    JSXAttributes: 'JSXAttributes',
    JSXAttributeValue: 'JSXAttributeValue',
    getKey: function (s) {
      if (!s) {
        throw new Error('empty value');
      }

      if (!keys) {
        var self = this;
        keys = {};
        Object.keys(this).forEach(function (k) {
          var v = self[k];
          keys[v] = k;
        });
      }

      return keys[s];
    }
  });
  var keys;
  module.exports = Node;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/parser/jsx/Parser.js":
/*!**********************************************************!*\
  !*** ./node_modules/homunculus/web/parser/jsx/Parser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var Es6Parser = __webpack_require__(/*! ../es6/Parser */ "./node_modules/homunculus/web/parser/es6/Parser.js");

  var Node = __webpack_require__(/*! ./Node */ "./node_modules/homunculus/web/parser/jsx/Node.js");

  var Token = __webpack_require__(/*! ../../lexer/JSXToken */ "./node_modules/homunculus/web/lexer/JSXToken.js");

  var character = __webpack_require__(/*! ../../util/character */ "./node_modules/homunculus/web/util/character.js");

  var Lexer = __webpack_require__(/*! ../../lexer/JSXLexer */ "./node_modules/homunculus/web/lexer/JSXLexer.js");

  var Parser = Es6Parser.extend(function (lexer) {
    Es6Parser.call(this, lexer);
    this.init(lexer);
    return this;
  }).methods({
    prmrexpr: function () {
      if (this.look.type() == Token.MARK) {
        return this.jsxelem();
      } else {
        return Es6Parser.prototype.prmrexpr.call(this);
      }
    },
    jsxelem: function () {
      var node = new Node(Node.JSXOpeningElement);
      node.add(this.match(), this.jsxelemname()); //id只有1个，member和namespace有多个

      var type = node.last().size() > 1 ? node.last().name() : null;
      var name;

      if (type) {
        name = [];
        node.last().leaves().forEach(function (leaf) {
          name.push(leaf.token().content());
        });
      } else {
        name = node.last().token().content();
      }

      while (this.look) {
        if (this.look.type() == Token.BIND_PROPERTY) {
          node.add(this.bindAttr());
        } else if (this.look.type() == Token.PROPERTY) {
          node.add(this.attr());
        } else if (this.look.content() == '{') {
          node.add(this.spreadattr());
        } else {
          break;
        }
      }

      if (!this.look) {
        this.error();
      }

      if (this.look.content() == '/>') {
        node.add(this.match());
        node.name(Node.JSXSelfClosingElement);
        return node;
      }

      node.add(this.match('>'));
      var n = new Node(Node.JSXElement);
      n.add(node);

      while (this.look && this.look.content() != '</') {
        n.add(this.jsxchild());
      }

      n.add(this.close(name, type));
      return n;
    },
    jsxelemname: function (name, type) {
      if (name) {
        if (type) {
          var node = new Node(type);
          var self = this;
          name.forEach(function (na) {
            node.add(self.match(na));
          });
          return node;
        } else {
          return this.match(name);
        }
      } else {
        var node = new Node(Node.JSXMemberExpression);
        node.add(this.match());

        if (!this.look) {
          this.error();
        }

        if (this.look.content() == '.') {
          while (this.look && this.look.content() == '.') {
            node.add(this.match(), this.match(Token.ELEM));
          }
        } else if (this.look.content() == ':') {
          while (this.look && this.look.content() == ':') {
            node.add(this.match(), this.match(Token.ELEM));
          }
        } else {
          return node.first();
        }

        return node;
      }
    },
    jsxmember: function (names) {
      var node = new Node(Node.JSXMemberExpression);
      names.forEach(function (name) {
        node.add(this.match(name));
      });
      return node;
    },
    bindAttr: function () {
      var node = new Node(Node.JSXBindAttribute);
      node.add(this.match(Token.BIND_PROPERTY), this.match('='), this.attrval());
      return node;
    },
    attr: function () {
      var node = new Node(Node.JSXAttribute);
      node.add(this.attrname(), this.match('='), this.attrval());
      return node;
    },
    spreadattr: function () {
      var node = new Node(Node.JSXSpreadAttribute);
      node.add(this.match(), this.match('...'), this.assignexpr(), this.match('}'));
      return node;
    },
    attrname: function () {
      var id = this.match(Token.PROPERTY);

      if (this.look && this.look.content() == ':') {
        var node = new Node(Node.JSXNamespacedName);
        node.add(id, this.match(), this.match(Token.PROPERTY));
        return node;
      }

      return id;
    },
    attrval: function () {
      if (!this.look) {
        this.error();
      }

      if (this.look.content() == '{') {
        var node = new Node(Node.JSXAttributeValue);
        node.add(this.match());

        if (this.look && this.look.content() != '}') {
          node.add(this.assignexpr());
        }

        node.add(this.match('}'));
        return node;
      } else if (this.look.content() == '[') {
        var node = new Node(Node.JSXAttributeValue);
        node.add(this.match());

        while (this.look && this.look.content() != ']') {
          node.add(this.assignexpr());

          if (this.look && this.look.content() == ',') {
            node.add(this.match());
          }
        }

        node.add(this.match(']'));
        return node;
      } else if ([Token.STRING, Token.NUMBER].indexOf(this.look.type()) > -1) {
        return this.match();
      }

      return this.jsxelem();
    },
    jsxchild: function () {
      switch (this.look.type()) {
        case Token.TEXT:
          return this.match();

        case Token.MARK:
          return this.jsxelem();

        default:
          var node = new Node(Node.JSXChild);
          node.add(this.match('{'));

          if (this.look && this.look.content() != '}') {
            node.add(this.assignexpr());
          }

          node.add(this.match('}'));
          return node;
      }
    },
    close: function (name, type) {
      var node = new Node(Node.JSXClosingElement);
      node.add(this.match('</'), this.jsxelemname(name, type), this.match('>'));
      return node;
    },
    match: function (type, line, msg) {
      if (typeof type == 'boolean') {
        msg = line;
        line = type;
        type = undefined;
      }

      if (typeof line != 'boolean') {
        line = false;
        msg = line;
      } //未定义为所有非空白token


      if (character.isUndefined(type)) {
        if (this.look) {
          var l = this.look;
          this.move(line);
          return new Node(Node.TOKEN, l);
        } else {
          this.error('syntax error' + (msg || ''));
        }
      } //数组为其中一个即可
      else if (Array.isArray(type)) {
          if (this.look) {
            for (var i = 0, len = type.length; i < len; i++) {
              var t = type[i];

              if (typeof t == 'string' && this.look.content() == t) {
                var l = this.look;
                this.move();
                return new Node(Node.TOKEN, l);
              } else if (typeof t == 'number' && this.look.type() == t) {
                var l = this.look;
                this.move();
                return new Node(Node.TOKEN, l);
              }
            }
          }

          this.error('missing ' + type.join('|') + (msg || ''));
        } //或者根据token的type或者content匹配
        else if (typeof type == 'string') {
            //特殊处理;，不匹配但有换行或者末尾时自动补全，还有受限行
            if (type == ';' && (!this.look || this.look.content() != type && this.hasMoveLine || this.look.content() == '}')) {
              if (this.look && Es6Parser.S[this.look.type()]) {
                this.move();
              }

              return this.virtual(';');
            } else if (this.look && this.look.content() == type) {
              var l = this.look;
              this.move(line);
              return new Node(Node.TOKEN, l);
            } else {
              this.error('missing ' + type + (msg || ''));
            }
          } else if (typeof type == 'number') {
            if (this.look && this.look.type() == type) {
              var l = this.look;
              this.move(line);
              return new Node(Node.TOKEN, l);
            } else {
              this.error('missing ' + Token.type(type) + (msg || ''));
            }
          }
    }
  }).statics({
    SELF_CLOSE: Lexer.SELF_CLOSE
  });
  module.exports = Parser;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/util/Class.js":
/*!***************************************************!*\
  !*** ./node_modules/homunculus/web/util/Class.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  function inheritPrototype(subType, superType) {
    var prototype = Object.create(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype; //继承static变量

    Object.keys(superType).forEach(function (k) {
      subType[k] = superType[k];
    });
    return subType;
  }

  function wrap(fn) {
    fn.extend = function (sub) {
      inheritPrototype(sub, fn);
      return wrap(sub);
    };

    fn.methods = function (o) {
      Object.keys(o).forEach(function (k) {
        fn.prototype[k] = o[k];
      });
      return fn;
    };

    fn.statics = function (o) {
      Object.keys(o).forEach(function (k) {
        fn[k] = o[k];
      });
      return fn;
    };

    return fn;
  }

  function klass(cons) {
    return wrap(cons || function () {});
  }

  klass.extend = inheritPrototype;
  module.exports = klass;
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/util/character.js":
/*!*******************************************************!*\
  !*** ./node_modules/homunculus/web/util/character.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  exports.LINE = '\n';
  exports.ENTER = '\r';
  exports.BLANK = ' ';
  exports.TAB = '\t';
  exports.UNDERLINE = '_';
  exports.DOLLAR = '$';
  exports.SHARP = '#';
  exports.MINUS = '-';
  exports.AT = '@';
  exports.SLASH = '/';
  exports.BACK_SLASH = '\\';
  exports.DECIMAL = '.';
  exports.LEFT_BRACKET = '[';
  exports.RIGHT_BRACKET = ']';
  exports.LEFT_BRACE = '{';
  exports.RIGHT_BRACE = '}';
  exports.STAR = '*';
  exports.LEFT_PARENTHESE = '(';
  exports.RIGHT_PARENTHESE = ')';
  exports.COMMA = ',';
  exports.SEMICOLON = ';';
  exports.EQUAL = '=';
  exports.GRAVE = '`';

  exports.isDigit = function (c) {
    return c >= '0' && c <= '9';
  };

  exports.isDigit16 = function (c) {
    return exports.isDigit(c) || c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F';
  };

  exports.isDigit2 = function (c) {
    return c == '0' || c == '1';
  };

  exports.isDigit8 = function (c) {
    return c >= '0' && c <= '7';
  };

  exports.isLetter = function (c) {
    return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';
  };

  exports.count = function (s, c) {
    var count = 0,
        i = -1;

    while ((i = s.indexOf(c, i + 1)) != -1) {
      count++;
    }

    return count;
  };

  exports.isUndefined = function (s) {
    return typeof s == 'undefined';
  };

  exports.isString = function (s) {
    return Object.prototype.toString.call(s) == "[object String]";
  };

  exports.isNumber = function (s) {
    return Object.prototype.toString.call(s) == "[object Number]";
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/homunculus/web/util/walk.js":
/*!**************************************************!*\
  !*** ./node_modules/homunculus/web/util/walk.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, module) {
  var index;

  function recursion(node, ignore, nodeVisitors, tokenVisitors) {
    var isToken = node.isToken();

    if (isToken) {
      var token = node.token();
      var isVirtual = token.isVirtual();

      if (!isVirtual) {
        var ignores = [];

        while (ignore[++index]) {
          ignores.push(ignore[index]);
        }

        if (tokenVisitors.hasOwnProperty(token.type())) {
          tokenVisitors[token.type()](token, ignores);
        }
      }
    } else {
      if (nodeVisitors.hasOwnProperty(node.name())) {
        nodeVisitors[node.name()](node);
      }

      node.leaves().forEach(function (leaf) {
        recursion(leaf, ignore, nodeVisitors, tokenVisitors);
      });
    }
  }

  exports.simple = function (node, nodeVisitors, tokenVisitors) {
    exports.simpleIgnore(node, {}, nodeVisitors, tokenVisitors);
  };

  exports.simpleIgnore = function (node, ignore, nodeVisitors, tokenVisitors) {
    index = 0;

    while (ignore[index]) {
      ignore[index++];
    }

    nodeVisitors = nodeVisitors || {};
    tokenVisitors = tokenVisitors || {};
    recursion(node, ignore, nodeVisitors, tokenVisitors);
  };

  function rcs(node, callback) {
    var isToken = node.isToken();

    if (isToken) {
      var token = node.token();
      var isVirtual = token.isVirtual();

      if (!isVirtual) {
        callback(token, true);
      }
    } else {
      callback(node);
      node.leaves().forEach(function (leaf) {
        rcs(leaf, callback);
      });
    }
  }

  exports.recursion = function (node, callback) {
    rcs(node, callback);
  };

  function toPlainObject(node, res) {
    var isToken = node.isToken();

    if (isToken) {
      var token = node.token();
      var isVirtual = token.isVirtual();

      if (!isVirtual) {
        res.push(token.content());
      }
    } else {
      res.push(node.name().toUpperCase());
      var childs = [];
      res.push(childs);
      node.leaves().forEach(function (leaf) {
        toPlainObject(leaf, childs);
      });
    }

    return res;
  }

  exports.plainObject = function (obj) {
    //token
    if (Array.isArray(obj)) {
      var res = [];
      obj.forEach(function (token) {
        res.push(token.content());
      });
      return res;
    } //ast
    else {
        return toPlainObject(obj, []);
      }
  };
}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/jaw/build/jaw.js":
/*!***************************************!*\
  !*** ./node_modules/jaw/build/jaw.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _homunculus = __webpack_require__(/*! homunculus */ "./node_modules/homunculus/index.js");

var _homunculus2 = _interopRequireDefault(_homunculus);

var _serialize = __webpack_require__(/*! ./serialize */ "./node_modules/jaw/build/serialize.js");

var _serialize2 = _interopRequireDefault(_serialize);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Token = _homunculus2.default.getClass('token', 'css');

var Node = _homunculus2.default.getClass('node', 'css');

var Jaw = function () {
  function Jaw() {
    _classCallCheck(this, Jaw);

    this.parser = null;
    this.node = null;
  }

  _createClass(Jaw, [{
    key: 'parse',
    value: function parse(code) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.parser = _homunculus2.default.getParser('css');
      this.node = this.parser.parse(code);
      return (0, _serialize2.default)(this.node, option);
    }
  }, {
    key: 'tokens',
    value: function tokens() {
      return this.ast ? this.parser.lexer.tokens() : null;
    }
  }, {
    key: 'ast',
    value: function ast() {
      return this.node;
    }
  }]);

  return Jaw;
}();

exports.default = new Jaw();

/***/ }),

/***/ "./node_modules/jaw/build/join.js":
/*!****************************************!*\
  !*** ./node_modules/jaw/build/join.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (node, excludeLine) {
  res = '';
  recursion(node, excludeLine);
  return res;
};

var _homunculus = __webpack_require__(/*! homunculus */ "./node_modules/homunculus/index.js");

var _homunculus2 = _interopRequireDefault(_homunculus);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var Token = _homunculus2.default.getClass('token', 'jsx');

var S = {};
S[Token.LINE] = S[Token.COMMENT] = S[Token.BLANK] = true;
var index;
var res;

function recursion(node, excludeLine) {
  if (node.isToken()) {
    var token = node.token();

    if (!token.isVirtual()) {
      res += token.content();

      while (token.next()) {
        token = token.next();

        if (token.isVirtual() || !S.hasOwnProperty(token.type())) {
          break;
        }

        var s = token.content();

        if (!excludeLine || s != '\n') {
          res += token.content();
        }
      }
    }
  } else {
    node.leaves().forEach(function (leaf) {
      recursion(leaf, excludeLine);
    });
  }
}

/***/ }),

/***/ "./node_modules/jaw/build/serialize.js":
/*!*********************************************!*\
  !*** ./node_modules/jaw/build/serialize.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _homunculus = __webpack_require__(/*! homunculus */ "./node_modules/homunculus/index.js");

var _homunculus2 = _interopRequireDefault(_homunculus);

var _join = __webpack_require__(/*! ./join */ "./node_modules/jaw/build/join.js");

var _join2 = _interopRequireDefault(_join);

var _sort = __webpack_require__(/*! ./sort */ "./node_modules/jaw/build/sort.js");

var _sort2 = _interopRequireDefault(_sort);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var Token = _homunculus2.default.getClass('token', 'css');

var Node = _homunculus2.default.getClass('node', 'css');

var idx;

function parse(node, option) {
  idx = 0;
  var res = option.noMedia ? {} : {
    default: {}
  };
  node.leaves().forEach(function (leaf, i) {
    if (leaf.name() == Node.STYLESET) {
      styleset(leaf, option.noMedia ? res : res.default, option);
    } else if (leaf.name() == Node.MEDIA) {
      res.media = res.media || [];
      var item = {};
      var qlist = leaf.leaf(1);
      qlist.leaves().forEach(function (leaf) {
        if (leaf.name() == Node.MEDIAQUERY) {
          query(leaf, item);
        }
      });
      var block = leaf.last();
      var leaves = block.leaves();

      if (leaves.length > 2) {
        var style = {};

        for (var i = 1, len = leaves.length - 1; i < len; i++) {
          styleset(leaves[i], style, option);
        }

        item.style = style;
      }

      if (item.style) {
        res.media.push(item);
      }
    }
  });
  return res;
}

function query(node, item) {
  var leaves = node.leaves();
  var query = [];
  leaves.forEach(function (leaf) {
    if (leaf.name() == Node.EXPR) {
      var expr = [];
      leaf.leaves().forEach(function (item) {
        if (item.name() == Node.KEY || item.name() == Node.VALUE) {
          expr.push((0, _join2.default)(item, true));
        }
      }); //可能只有key或者k/v都有，以String/Array格式区分

      if (expr.length) {
        query.push(expr.length > 1 ? expr : expr[0]);
      }
    }
  });
  item.query = item.query || [];
  item.query.push(query);
}

function styleset(node, res, option) {
  var sels = selectors(node.first());
  var styles = block(node.last());
  var i = idx++;
  sels.forEach(function (sel) {
    record(sel, i, styles, res, option);
  });
}

function selectors(node) {
  var res = [];
  node.leaves().forEach(function (leaf) {
    if (leaf.name() == Node.SELECTOR) {
      res.push(selector(leaf));
    }
  });
  return res;
}

function selector(node) {
  return node.leaves().map(function (leaf) {
    return leaf.token();
  });
}

function block(node) {
  var res = [];
  node.leaves().forEach(function (leaf) {
    if (leaf.name() == Node.STYLE) {
      res.push(style(leaf));
    }
  });
  return res;
}

function style(node) {
  var s = (0, _join2.default)(node, true).trim();
  s = s.replace(/;$/, '');
  return s;
}

function record(sel, idx, styles, res, option) {
  var _p = [0, 0, 0];

  for (var i = sel.length - 1; i >= 0; i--) {
    var temp = {
      s: [],
      a: [],
      p: []
    };
    var t = sel[i];
    var s = t.content();
    priority(t, s, _p);

    switch (t.type()) {
      case Token.SELECTOR:
        temp.s.push(s);
        break;

      case Token.PSEUDO:
        var s2 = s.replace(/^:+/, '');

        if (sel[i].content() == '(') {
          s2 += '(';

          for (var j = i + 1; j < sel.length; j++) {
            if (sel[j].content() == ')') {
              s2 += ')';
              break;
            }

            s2 += sel[j].content();
          }
        }

        temp.p.push(s2);
        break;

      case Token.SIGN:
        switch (s) {
          case ']':
            var item = [];
            i--;
            t = t.prev();

            while (t) {
              s = t.content();

              if (s == '[') {
                break;
              }

              i--;
              t = t.prev();
              s = s.replace(/^(['"])(.*)\1$/, '$2');
              item.unshift(s);
            }

            temp.a.push({
              v: item,
              s: item.join('')
            });
            break;

          case '+':
          case '>':
          case '~':
            s = '_' + s;
            res[s] = res[s] || {};
            res = res[s];
            continue;
          //忽略掉()，因为其出现在:nth-child(n)中

          case ')':
            i--;
            t = t.prev();

            while (t) {
              s = t.content();

              if (s == '(') {
                break;
              }

              i--;
              t = t.prev();
            }

            break;
        }

        break;
    }

    t = t.prev();

    while (t && !isSplit(t)) {
      s = t.content();
      priority(t, s, _p);

      switch (t.type()) {
        case Token.SELECTOR:
          temp.s.push(s);
          break;

        case Token.PSEUDO:
          var s2 = s.replace(/^:+/, '');

          if (sel[i].content() == '(') {
            s2 += '(';

            for (var j = i + 1; j < sel.length; j++) {
              if (sel[j].content() == ')') {
                s2 += ')';
                break;
              }

              s2 += sel[j].content();
            }
          }

          temp.p.push(s2);
          break;

        case Token.SIGN:
          switch (s) {
            case ']':
              var item = [];
              i--;
              t = t.prev();

              while (t) {
                s = t.content();

                if (s == '[') {
                  break;
                }

                i--;
                t = t.prev();
                s = s.replace(/^(['"])(.*)\1$/, '$2');
                item.unshift(s);
              }

              temp.a.push({
                v: item,
                s: item.join('')
              });
              break;

            case '+':
            case '>':
            case '~':
              s = '_' + s;
              res[s] = res[s] || {};
              res = res[s];
              continue;
            //忽略掉()，因为其出现在:nth-child(n)中

            case ')':
              i--;
              t = t.prev();

              while (t) {
                s = t.content();

                if (s == '(') {
                  break;
                }

                i--;
                t = t.prev();
              }

              break;
          }

          break;
      }

      t = t.prev();
      i--;
    }

    res = save(temp, res);
  }

  if (option.noValue) {
    res._v = true;
  } else {
    res._v = res._v || [];
    styles.forEach(function (style) {
      res._v.push([idx, style]);
    });
  }

  if (!option.noPriority) {
    res._p = _p;
  }
}

function priority(token, s, p) {
  switch (token.type()) {
    case Token.SELECTOR:
      if (s.charAt(0) == '#') {
        p[0]++;
      } else if (s.charAt(0) == '.') {
        p[1]++;
      } else {
        p[2]++;
      }

      break;

    case Token.PSEUDO:
      p[2]++;
      break;

    case Token.SIGN:
      if (s == ']') {
        p[1]++;
      }

      break;
  }
}

function isSplit(token) {
  if (token.type() == Token.BLANK) {
    return true;
  }

  if (token.type() == Token.LINE) {
    return true;
  }

  if (token.type() == Token.SIGN) {
    return ['>', '+', '~', '{', '}', ','].indexOf(token.content()) > -1;
  }

  return false;
}

function save(temp, res) {
  if (!temp.s.length) {
    temp.s.push('*');
  } //selector按name/class/id排序


  (0, _sort2.default)(temp.s, function (a, b) {
    return a != '*' && a < b || b == '*';
  });
  var star = temp.s[0] == '*'; //*开头有几种组合，记录之

  if (star) {
    res['_*'] = true;

    if (temp.s.length > 1) {
      if (temp.s.length > 2) {
        res['_*.#'] = true;
      } else if (temp.s[1][0] == '.') {
        res['_*.'] = true;
      } else {
        res['_*#'] = true;
      }
    }
  }

  var s = temp.s.join('');
  res[s] = res[s] || {};
  res = res[s]; //伪类

  if (temp.p.length) {
    res['_:'] = res['_:'] || [];
    var pseudos = res['_:'];
    var pseudo = [];
    temp.p.forEach(function (item) {
      //防止多次重复
      if (pseudo.indexOf(item) == -1) {
        pseudo.push(item);
      }
    }); //排序后比对，可能重复，合并之如a:hover{...}a:hover{...}会生成2个hover数组

    (0, _sort2.default)(pseudo, function (a, b) {
      return a < b;
    });
    var isExist = -1;

    for (var j = 0, len = pseudos.length; j < len; j++) {
      if (pseudos[j][0].join(',') == pseudo.join(',')) {
        isExist = j;
        break;
      }
    }

    if (isExist > -1) {
      res = pseudos[isExist][1];
    } else {
      var arr = [];
      arr.push(pseudo);
      res = {};
      arr.push(res);
      pseudos.push(arr);
    }
  } //属性


  if (temp.a.length) {
    res['_['] = res['_['] || [];
    var attrs = res['_['];
    var attr = []; //去重并排序

    (0, _sort2.default)(temp.a, function (a, b) {
      return a.s < b.s;
    });
    var hash = {};
    temp.a.forEach(function (item) {
      if (!hash.hasOwnProperty(item.s)) {
        attr.push(item.v);
      }
    });
    var isExist = -1;
    var join = '';
    join += attr.map(function (item) {
      return item.join('');
    });

    for (var j = 0, len = attrs.length; j < len; j++) {
      var s1 = '';
      s1 += attrs[j][0].map(function (item) {
        return item.join('');
      });

      if (s1 == join) {
        isExist = j;
        break;
      }
    }

    if (isExist > -1) {
      res = attrs[isExist][1];
    } else {
      var arr = [];
      arr.push(attr);
      res = {};
      arr.push(res);
      attrs.push(arr);
    }
  }

  return res;
}

exports.default = parse;

/***/ }),

/***/ "./node_modules/jaw/build/sort.js":
/*!****************************************!*\
  !*** ./node_modules/jaw/build/sort.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function quickSort(arr, begin, end, compare) {
  if (begin >= end) {
    return;
  }

  var i = begin,
      j = end,
      p = i,
      n = arr[p],
      seq = true;

  outer: while (i < j) {
    if (seq) {
      for (; i < j; j--) {
        if (compare && compare.call(arr, n, arr[j]) || !compare && n > arr[j]) {
          swap(arr, p, j);
          p = j;
          seq = !seq;
          continue outer;
        }
      }
    } else {
      for (; i < j; i++) {
        if (compare && compare.call(arr, arr[i], n) || !compare && n < arr[i]) {
          swap(arr, p, i);
          p = i;
          seq = !seq;
          continue outer;
        }
      }
    }
  }

  quickSort(arr, begin, p, compare);
  quickSort(arr, p + 1, end, compare);
}

function swap(arr, a, b) {
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

module.exports = function (arr, compare) {
  if (!Array.isArray(arr)) {
    throw new Error('quick sort need an array');
  }

  if (arr.length < 2) {
    return arr;
  }

  quickSort(arr, 0, arr.length - 1, compare);
  return arr;
};

/***/ }),

/***/ "./node_modules/jaw/index.js":
/*!***********************************!*\
  !*** ./node_modules/jaw/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./build/jaw */ "./node_modules/jaw/build/jaw.js")['default'];

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/InnerTree.js":
/*!**************************!*\
  !*** ./src/InnerTree.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! homunculus */ "./node_modules/homunculus/index.js");
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(homunculus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsx */ "./src/jsx.js");
/* harmony import */ var _ignore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ignore */ "./src/ignore.js");
/* harmony import */ var _linkage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linkage */ "./src/linkage.js");
/* harmony import */ var _join2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./join2 */ "./src/join2.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Token = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('token', 'jsx');
var Node = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('node', 'jsx');

var InnerTree =
/*#__PURE__*/
function () {
  function InnerTree() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, InnerTree);

    this.res = '';
    this.opt = opt;
    this.param = param;
  }

  _createClass(InnerTree, [{
    key: "parse",
    value: function parse(node) {
      this.recursion(node);
      return this.res;
    }
  }, {
    key: "recursion",
    value: function recursion(node) {
      var self = this;
      var isToken = node.isToken();

      if (isToken) {
        var token = node.token();

        if (token.isVirtual()) {
          return;
        }

        if (!token.ignore) {
          this.res += token.content();
        }

        while (token.next()) {
          token = token.next();

          if (token.isVirtual() || !_ignore__WEBPACK_IMPORTED_MODULE_2__["default"].S.hasOwnProperty(token.type())) {
            break;
          }

          if (!token.ignore) {
            this.res += token.content();
          }
        }
      } else {
        switch (node.name()) {
          case Node.JSXElement:
          case Node.JSXSelfClosingElement:
            this.res += Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(node, {
              isInBind: self.opt.isInBind || self.opt.isBind,
              arrowFn: self.opt.arrowFn
            }, self.param);
            return;

          case Node.RETSTMT:
            if (self.opt.isBind || self.opt.isInBind) {
              var allReturn = true;
              self.opt.arrowFn = self.opt.arrowFn || [];

              for (var i = 0, len = self.opt.arrowFn.length; i < len; i++) {
                if (!self.opt.arrowFn[i]) {
                  allReturn = false;
                  break;
                }
              }

              if (allReturn) {
                var temp = Object(_linkage__WEBPACK_IMPORTED_MODULE_3__["default"])(node.leaf(1), self.param, {
                  arrowFn: self.opt.arrowFn
                });
                var list = temp.arr;
                var listener = list.length === 1 ? '"' + list[0] + '"' : JSON.stringify(list);

                if (list.length) {
                  return this.res += Object(_join2__WEBPACK_IMPORTED_MODULE_4__["default"])(node.first()) + 'new yurine.Obj(' + listener + ',()=>{return(' + new InnerTree(self.opt, self.param).parse(node.leaf(1)).replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1') + ')})';
                }
              }
            }

            break;

          case Node.ARROWFN:
            self.opt.arrowFn = self.opt.arrowFn || [];

            if (self.opt.arrowFn.length === 0) {
              self.opt.arrowFn.push(true);
            } else {
              var is = false;

              var _temp = node.parent();

              if (_temp && _temp.name() === Node.ARGLIST) {
                _temp = _temp.parent();

                if (_temp && _temp.name() === Node.ARGS) {
                  var callexpr = _temp.parent();

                  _temp = _temp.prev();

                  if (_temp && _temp.name() === Node.MMBEXPR) {
                    _temp = _temp.leaf(2);

                    if (_temp.isToken() && _temp.token().content() === 'map') {
                      is = callexpr.parent().name() === Node.RETSTMT;
                    }
                  }
                }
              }

              self.opt.arrowFn.push(is);
            }

            break;
        }

        node.leaves().forEach(function (leaf) {
          self.recursion(leaf);
        });

        switch (node.name()) {
          case Node.ARROWFN:
            self.opt.arrowFn.pop();
            break;
        }
      }
    }
  }]);

  return InnerTree;
}();

/* harmony default export */ __webpack_exports__["default"] = (InnerTree);

/***/ }),

/***/ "./src/Tree.js":
/*!*********************!*\
  !*** ./src/Tree.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! homunculus */ "./node_modules/homunculus/index.js");
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(homunculus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsx */ "./src/jsx.js");
/* harmony import */ var _ignore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ignore */ "./src/ignore.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _join2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./join2 */ "./src/join2.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Node = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('node', 'jsx');

var Tree =
/*#__PURE__*/
function () {
  function Tree() {
    _classCallCheck(this, Tree);

    this.res = '';
  }

  _createClass(Tree, [{
    key: "parse",
    value: function parse(node) {
      this.recursion(node, false);
      return this.res;
    }
  }, {
    key: "recursion",
    value: function recursion(node, inClass) {
      var self = this;
      var isToken = node.isToken();

      if (isToken) {
        var token = node.token();

        if (token.isVirtual()) {
          return;
        }

        if (!token.ignore) {
          this.res += token.content();
        }

        while (token.next()) {
          token = token.next();

          if (token.isVirtual() || !_ignore__WEBPACK_IMPORTED_MODULE_2__["default"].S.hasOwnProperty(token.type())) {
            break;
          }

          if (!token.ignore) {
            this.res += token.content();
          }
        }
      } else {
        switch (node.name()) {
          case Node.JSXElement:
          case Node.JSXSelfClosingElement:
            this.res += Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(node, {}, this.param);
            return;

          case Node.CLASSDECL:
            inClass = this.klass(node);
            break;

          case Node.CLASSEXPR:
            inClass = this.klass(node);
            break;

          case Node.CLASSBODY:
            if (inClass) {
              this.param = {
                getHash: {},
                setHash: {},
                evalHash: {},
                bindHash: {},
                linkHash: {},
                linkedHash: {}
              };
              this.list(node);
            }

            break;

          case Node.METHOD:
            var isRender = this.method(node);

            if (isRender) {
              this.res += Object(_render__WEBPACK_IMPORTED_MODULE_3__["default"])(node, this.param || {});
              return;
            }

            break;

          case Node.ANNOT:
            if (['@bind', '@eval', '@link'].indexOf(node.first().token().content()) > -1) {
              this.res += Object(_ignore__WEBPACK_IMPORTED_MODULE_2__["default"])(node, true).res;
            } else {
              this.res += Object(_join2__WEBPACK_IMPORTED_MODULE_4__["default"])(node);
            }

            return;

          case Node.LEXBIND:
            if (inClass && node.parent().name() === Node.CLASSELEM) {
              this.res += this.bindLex(node);
              return;
            }

            break;
        }

        node.leaves().forEach(function (leaf) {
          self.recursion(leaf, inClass);
        });

        switch (node.name()) {
          case Node.FNBODY:
            this.fnbody(node, inClass);
            break;

          case Node.CLASSDECL:
            inClass = false;
            break;

          case Node.CLASSEXPR:
            inClass = false;
            break;
        }
      }
    }
  }, {
    key: "klass",
    value: function klass(node) {
      var heritage = node.leaf(2);

      if (heritage && heritage.name() === Node.HERITAGE) {
        var body = node.last().prev();
        var leaves = body.leaves();

        for (var i = 0, len = leaves.length; i < len; i++) {
          var leaf = leaves[i];
          var method = leaf.first();

          if (method.name() === Node.METHOD) {
            var first = method.first();

            if (first.name() === Node.PROPTNAME) {
              var id = first.first();

              if (id.name() === Node.LTRPROPT) {
                id = id.first();

                if (id.isToken()) {
                  id = id.token().content();

                  if (id === 'constructor') {
                    return true;
                  }
                }
              }
            }
          }
        }
      }

      return false;
    }
  }, {
    key: "method",
    value: function method(node) {
      var first = node.first();

      if (first.name() === Node.PROPTNAME) {
        first = first.first();

        if (first.name() === Node.LTRPROPT) {
          first = first.first();

          if (first.isToken() && first.token().content() === 'render') {
            return true;
          }
        }
      }
    }
  }, {
    key: "fnbody",
    value: function fnbody(node, inClass) {
      if (!inClass) {
        return;
      }

      var parent = node.parent();

      if (parent.name() === Node.METHOD) {
        var setV;
        var first = parent.first();

        if (first.isToken() && first.token().content() === 'set') {
          var fmparams = parent.leaf(3);

          if (fmparams && fmparams.name() === Node.FMPARAMS) {
            var single = fmparams.first();

            if (single && single.name() === Node.SINGLENAME) {
              var bindid = single.first();

              if (bindid && bindid.name() === Node.BINDID) {
                setV = bindid.first().token().content();
              }
            }
          }

          var name = parent.leaf(1).first().first().token().content();
          var prev = parent.parent().prev();
          var ids = [];

          if (prev) {
            prev = prev.first();

            if (prev.name() === Node.ANNOT && ['@bind', '@eval'].indexOf(prev.first().token().content()) > -1) {
              ids.push(name);
            }
          }

          ids = ids.concat(this.param.linkedHash[name] || []);

          if (ids.length) {
            if (setV) {
              if (ids.length === 1) {
                this.res += ';this.__array("';
                this.res += ids[0] + '",';
                this.res += setV;
                this.res += ')';
              } else {
                this.res += ';this.__array(["';
                this.res += ids.join('","') + '"],';
                this.res += setV;
                this.res += ')';
              }
            }

            if (ids.length === 1) {
              this.res += ';this.__data("';
              this.res += ids[0];
              this.res += '")';
            } else {
              this.res += ';this.__data(["';
              this.res += ids.join('","');
              this.res += '"])';
            }
          }
        }
      }
    }
  }, {
    key: "list",
    value: function list(node) {
      var _this = this;

      var leaves = node.leaves();
      var length = leaves.length;

      for (var i = 0; i < length; i++) {
        var item = leaves[i].first();

        if (item.name() === Node.ANNOT) {
          var annot = item.first().token().content();
          var method = leaves[i + 1] ? leaves[i + 1].first() : null;

          if (method && method.name() === Node.METHOD) {
            var first = method.first();

            if (first.isToken()) {
              var token = first.token().content();

              if (token === 'set' && annot === '@bind') {
                var name = first.next().first().first().token().content();
                this.param.bindHash[name] = true;
              } else if (token === 'set' && annot === '@eval') {
                var _name = first.next().first().first().token().content();

                this.param.evalHash[_name] = true;
              } else if (token === 'get' && annot === '@link') {
                (function () {
                  var name = first.next().first().first().token().content();
                  _this.param.linkHash[name] = _this.param.linkHash[name] || [];
                  var params = item.leaf(2);

                  if (params && params.name() === Node.FMPARAMS) {
                    params.leaves().forEach(function (param) {
                      if (param.name() === Node.SINGLENAME) {
                        param = param.first();

                        if (param.name() === Node.BINDID) {
                          param = param.first();

                          if (param.isToken()) {
                            param = param.token().content();
                            this.param.linkHash[name].push(param);
                            this.param.linkedHash[param] = this.param.linkedHash[param] || [];
                            this.param.linkedHash[param].push(name);
                          }
                        }
                      }
                    }.bind(_this));
                  }
                })();
              }
            }
          } else if (method && method.name() === Node.LEXBIND) {
            var _first = method.first();

            if (_first.name() === Node.BINDID) {
              var _name2 = _first.first().token().content();

              parseLex(this.param, _name2, item, annot);
            }
          } //连续2个
          else if (method && method.name() === Node.ANNOT) {
              var item2 = method;
              var annot2 = method.first().token().content();
              method = leaves[i + 2] ? leaves[i + 2].first() : null;

              if (method && method.name() === Node.LEXBIND) {
                var _first2 = method.first();

                if (_first2.name() === Node.BINDID) {
                  var _name3 = _first2.first().token().content();

                  parseLex(this.param, _name3, item, annot);
                  parseLex(this.param, _name3, item2, annot2);
                }
              }
            }
        } else if (item.name() === Node.METHOD) {
          var _first3 = item.first();

          if (_first3.isToken()) {
            var _token = _first3.token().content();

            var _name4 = _first3.next().first().first().token().content();

            if (_token === 'get') {
              this.param.getHash[_name4] = true;
            } else if (_token === 'set') {
              this.param.setHash[_name4] = true;
            }
          }
        } else if (item.name() === Node.LEXBIND) {
          var _first4 = item.first();

          if (_first4.name() === Node.BINDID) {
            var _name5 = _first4.first().token().content();

            this.param.getHash[_name5] = true;
            this.param.setHash[_name5] = true;
          }
        }
      }
    }
  }, {
    key: "bindLex",
    value: function bindLex(node) {
      var parent = node.parent();
      var bindid = node.first();

      if (bindid.name() === Node.BINDID) {
        var token = bindid.first();
        var name = token.token().content();
        var init = node.leaf(1);
        var ids = [];
        var prev = parent.prev();

        if (prev) {
          prev = prev.first();

          if (prev.name() === Node.ANNOT && ['@bind', '@eval'].indexOf(prev.first().token().content()) > -1) {
            ids.push(name);
          }
        }

        ids = ids.concat(this.param.linkedHash[name] || []);
        var s = '';
        s += 'set ' + name + '(v){';
        s += 'this.__setBind("' + name + '",v)';

        if (ids.length) {
          if (ids.length === 1) {
            s += ';this.__data("';
            s += ids[0];
            s += '")';
          } else {
            s += ';this.__data(["';
            s += ids.join('","');
            s += '"])';
          }
        }

        s += '}get ' + name + '(){';
        s += Object(_ignore__WEBPACK_IMPORTED_MODULE_2__["default"])(token).res;

        if (init) {
          s += 'if(this.__initBind("' + name + '"))';
          s += 'this.__setBind("' + name + '",';
          s += Object(_ignore__WEBPACK_IMPORTED_MODULE_2__["default"])(init.first()).res;
          s += Object(_join2__WEBPACK_IMPORTED_MODULE_4__["default"])(init.last());
          s += ');';
        }

        s += 'return this.__getBind("' + name + '")}';
        return s;
      }
    }
  }]);

  return Tree;
}();

function parseLex(param, name, item, annot) {
  if (annot === '@bind') {
    param.bindHash[name] = true;
  } else if (annot === '@eval') {
    param.evalHash[name] = true;
  } else if (annot === '@link') {
    param.linkHash[name] = param.linkHash[name] || [];
    var params = item.leaf(2);

    if (params && params.name() === Node.FMPARAMS) {
      params.leaves().forEach(function (item) {
        if (item.name() === Node.SINGLENAME) {
          item = item.first();

          if (item.name() === Node.BINDID) {
            item = item.first();

            if (item.isToken()) {
              item = item.token().content();
              param.linkHash[name].push(item);
              param.linkedHash[item] = param.linkedHash[item] || [];
              param.linkedHash[item].push(name);
            }
          }
        }
      });
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Tree);

/***/ }),

/***/ "./src/Yurine.js":
/*!***********************!*\
  !*** ./src/Yurine.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! homunculus */ "./node_modules/homunculus/index.js");
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(homunculus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tree */ "./src/Tree.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Yurine =
/*#__PURE__*/
function () {
  function Yurine() {
    _classCallCheck(this, Yurine);

    this.parser = null;
    this.node = null;
  }

  _createClass(Yurine, [{
    key: "parse",
    value: function parse(code) {
      this.parser = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getParser('jsx');
      this.node = this.parser.parse(code);
      var tree = new _Tree__WEBPACK_IMPORTED_MODULE_1__["default"]();
      return tree.parse(this.node);
    }
  }, {
    key: "tokens",
    value: function tokens() {
      return this.ast ? this.parser.lexer.tokens() : null;
    }
  }, {
    key: "ast",
    value: function ast() {
      return this.node;
    }
  }], [{
    key: "parse",
    value: function parse(code) {
      return new Yurine().parse(code);
    }
  }]);

  return Yurine;
}();

/* harmony default export */ __webpack_exports__["default"] = (Yurine);

/***/ }),

/***/ "./src/arrowfn.js":
/*!************************!*\
  !*** ./src/arrowfn.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! homunculus */ "./node_modules/homunculus/index.js");
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(homunculus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _linkage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linkage */ "./src/linkage.js");


var Token = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('token', 'jsx');
var Node = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('node', 'jsx');

function parse(node, res, param, opt) {
  switch (node.name()) {
    case Node.EXPRSTMT:
      Object(_linkage__WEBPACK_IMPORTED_MODULE_1__["default"])(node.first(), param, opt).arr.forEach(function (item) {
        res[item] = true;
      });
      break;

    case Node.VARSTMT:
      node.leaves().forEach(function (leaf, i) {
        if (i % 2 === 1) {
          var initlz = leaf.leaf(1);
          var temp = Object(_linkage__WEBPACK_IMPORTED_MODULE_1__["default"])(initlz.leaf(1), param, opt);
          temp.arr.forEach(function (item) {
            res[item] = true;
          });
        }
      });
      break;

    case Node.BLOCKSTMT:
      var block = node.first();

      for (var i = 1, _leaves = block.leaves(); i < _leaves.length - 1; i++) {
        parse(_leaves[i], res, param, opt);
      }

      break;

    case Node.IFSTMT:
      var condition = node.leaf(2);
      Object(_linkage__WEBPACK_IMPORTED_MODULE_1__["default"])(condition, param, opt).arr.forEach(function (item) {
        res[item] = true;
      });
      parse(node.last(), res, param, opt);
      break;

    case Node.ITERSTMT:
      var peek = node.first().token().content();

      if (peek === 'for') {
        var first = node.leaf(2); // for(;...

        if (first.isToken()) {} else {
          if (first.name() === Node.LEXDECL) {
            parse(first, res, param, opt);
          } else if (first.name() === Node.VARSTMT) {
            parse(first, res, param, opt);
          }
        }

        var second = node.leaf(3); // for(;;...

        if (second.isToken()) {} else {
          var temp = Object(_linkage__WEBPACK_IMPORTED_MODULE_1__["default"])(second, param, opt);
          temp.arr.forEach(function (item) {
            res[item] = true;
          });
        }

        var third = node.leaf(4);

        if (third.isToken()) {
          third = node.leaf(5);

          if (third.isToken()) {} else {
            var _temp = Object(_linkage__WEBPACK_IMPORTED_MODULE_1__["default"])(third, param, opt);

            _temp.arr.forEach(function (item) {
              res[item] = true;
            });
          }
        } else {
          var _temp2 = Object(_linkage__WEBPACK_IMPORTED_MODULE_1__["default"])(third, param, opt);

          _temp2.arr.forEach(function (item) {
            res[item] = true;
          });
        }
      } else if (peek === 'do') {
        var _blockstmt = node.leaf(1);

        parse(_blockstmt, res, param, opt);

        var _temp3 = Object(_linkage__WEBPACK_IMPORTED_MODULE_1__["default"])(node.leaf(4), param, opt);

        _temp3.arr.forEach(function (item) {
          res[item] = true;
        });
      } else if (peek === 'while') {
        var _temp4 = Object(_linkage__WEBPACK_IMPORTED_MODULE_1__["default"])(node.leaf(2), param, opt);

        _temp4.arr.forEach(function (item) {
          res[item] = true;
        });

        var stmt = node.last();
        parse(stmt, res, param, opt);
      }

      break;

    case Node.LEXDECL:
      node.leaves().forEach(function (leaf, i) {
        if (i % 2 === 1) {
          var initlz = leaf.leaf(1);

          var _temp5 = Object(_linkage__WEBPACK_IMPORTED_MODULE_1__["default"])(initlz.leaf(1), param, opt);

          _temp5.arr.forEach(function (item) {
            res[item] = true;
          });
        }
      });
      break;

    case Node.RETSTMT:
      // 第一层arrowFn的return语句不包含在linkage中，还有递归return的arrowFn也是
      if (opt.arrowFn.length > 0) {
        var allReturn = true;

        for (var _i = 0, len = opt.arrowFn.length; _i < len; _i++) {
          if (!opt.arrowFn[_i]) {
            allReturn = false;
            break;
          }
        }

        if (!allReturn) {
          Object(_linkage__WEBPACK_IMPORTED_MODULE_1__["default"])(node.leaf(1), param, opt).arr.forEach(function (item) {
            res[item] = true;
          });
        }
      }

      break;

    case Node.WITHSTMT:
      Object(_linkage__WEBPACK_IMPORTED_MODULE_1__["default"])(node.leaf(2), param, opt).arr.forEach(function (item) {
        res[item] = true;
      });
      var blockstmt = node.last();
      parse(blockstmt, res, param, opt);
      break;

    case Node.SWCHSTMT:
      Object(_linkage__WEBPACK_IMPORTED_MODULE_1__["default"])(node.leaf(2), param, opt).arr.forEach(function (item) {
        res[item] = true;
      });
      var caseblock = node.last();
      parse(caseblock, res, param, opt);
      break;

    case Node.CASEBLOCK:
      var leaves = node.leaves();

      for (var _i2 = 1; _i2 < leaves.length - 1; _i2++) {
        var leaf = leaves[_i2];

        if (leaf.name() === Node.CASECLAUSE) {
          var expr = leaf.leaf(1);

          var _temp6 = Object(_linkage__WEBPACK_IMPORTED_MODULE_1__["default"])(expr, param, opt);

          _temp6.arr.forEach(function (item) {
            res[item] = true;
          });

          parse(leaf.last(), res, param, opt);
        } else if (leaf.name() === Node.DFTCLAUSE) {
          parse(leaf.last(), res, param, opt);
        }
      }

      break;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (node, res, param, opt) {
  node.leaves().forEach(function (leaf) {
    parse(leaf, res, param, opt);
  });
});
;

/***/ }),

/***/ "./src/delegate.js":
/*!*************************!*\
  !*** ./src/delegate.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! homunculus */ "./node_modules/homunculus/index.js");
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(homunculus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ignore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ignore */ "./src/ignore.js");
/* harmony import */ var _InnerTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InnerTree */ "./src/InnerTree.js");
/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./join */ "./src/join.js");
/* harmony import */ var _join2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./join2 */ "./src/join2.js");
/* harmony import */ var jaw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jaw */ "./node_modules/jaw/index.js");
/* harmony import */ var jaw__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jaw__WEBPACK_IMPORTED_MODULE_5__);






var Token = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('token', 'jsx');
var Node = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('node', 'jsx');
var S = {};
S[Token.LINE] = S[Token.COMMENT] = S[Token.BLANK] = true;
var res = '';

function parse(node) {
  var prmr = node.leaf(1);

  if (prmr && prmr.name() === Node.PRMREXPR) {
    var objltr = prmr.first();

    if (objltr && objltr.name() === Node.OBJLTR) {
      res = Object(_ignore__WEBPACK_IMPORTED_MODULE_1__["default"])(node.first(), true).res + '[';
      recursion(objltr);
      res += Object(_ignore__WEBPACK_IMPORTED_MODULE_1__["default"])(node.last(), true).res + ']';
    } else {
      var tree = new _InnerTree__WEBPACK_IMPORTED_MODULE_2__["default"]();
      res = tree.parse(node);
      res = res.replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1');
      res = filter(res);
    }
  } else {
    var _tree = new _InnerTree__WEBPACK_IMPORTED_MODULE_2__["default"]();

    res = _tree.parse(node);
    res = res.replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1');
    res = filter(res);
  }

  return res;
}

function recursion(objltr) {
  res += Object(_ignore__WEBPACK_IMPORTED_MODULE_1__["default"])(objltr.first(), true).res;

  for (var i = 1, len = objltr.size(); i < len - 1; i++) {
    var leaf = objltr.leaf(i);

    if (leaf.isToken()) {
      var s = Object(_join2__WEBPACK_IMPORTED_MODULE_4__["default"])(leaf);
      res += s;
    } else if (leaf.name() === Node.PROPTDEF) {
      res += '[';
      var proptname = leaf.first();

      var _s = Object(_join__WEBPACK_IMPORTED_MODULE_3__["default"])(proptname).replace(/^(["'])(.+)\1$/, '$2') + '{}';

      _s = jaw__WEBPACK_IMPORTED_MODULE_5___default.a.parse(_s, {
        noPriority: true,
        noValue: true,
        noMedia: true
      });
      res += JSON.stringify(_s);
      res += ',';
      res += filter(Object(_join__WEBPACK_IMPORTED_MODULE_3__["default"])(leaf.last()));
      res += ']';
      res += Object(_ignore__WEBPACK_IMPORTED_MODULE_1__["default"])(leaf, true).res;
    }
  }

  res += Object(_ignore__WEBPACK_IMPORTED_MODULE_1__["default"])(objltr.last(), true).res;
}

function filter(s) {
  if (/^\s*this\b/.test(s) || /^\s*function\b/.test(s)) {
    if (/^\s*this\s*\.\s*model\s*\./.test(s)) {
      return 'new yurine.Cb(this.model,' + s + ')';
    }

    return 'new yurine.Cb(this,' + s + ')';
  }

  return s;
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "./src/ignore.js":
/*!***********************!*\
  !*** ./src/ignore.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! homunculus */ "./node_modules/homunculus/index.js");
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(homunculus__WEBPACK_IMPORTED_MODULE_0__);

var ES6Token = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('token', 'js');
var Token = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('token', 'jsx');
var Node = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('node', 'jsx');
var S = {};
S[Token.LINE] = S[Token.COMMENT] = S[Token.BLANK] = true;
var res;
var append;

function ignore(node, includeLine) {
  if (node instanceof Token || node instanceof ES6Token) {
    if (node.isVirtual()) {
      return;
    }

    node.ignore = true;
    append = '';

    while (node = node.next()) {
      if (node.isVirtual() || !S.hasOwnProperty(node.type())) {
        break;
      }

      var s = node.content();
      res += s;
      append += s;

      if (includeLine || s != '\n') {
        node.ignore = true;
      }
    }
  } else if (node.isToken()) {
    ignore(node.token(), includeLine);
  } else {
    node.leaves().forEach(function (leaf) {
      ignore(leaf, includeLine);
    });
  }
}

function parse(node, includeLine) {
  res = '';
  append = '';
  ignore(node, includeLine);
  return {
    res: res,
    append: append
  };
}

parse.S = S;
/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Yurine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Yurine */ "./src/Yurine.js");



module.exports = _Yurine__WEBPACK_IMPORTED_MODULE_0__["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/join.js":
/*!*********************!*\
  !*** ./src/join.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! homunculus */ "./node_modules/homunculus/index.js");
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(homunculus__WEBPACK_IMPORTED_MODULE_0__);

var JsNode = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('Node', 'es6');
var Token = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('Token');
/* harmony default export */ __webpack_exports__["default"] = (function (node, word) {
  var res = recursion(node, {
    's': '',
    'word': word
  });
  return res.s;
});
;

function recursion(node, res) {
  var isToken = node.name() === JsNode.TOKEN;
  var isVirtual = isToken && node.token().type() === Token.VIRTUAL;

  if (isToken) {
    var token = node.token();

    if (!isVirtual) {
      if (res.word && [Token.ID, Token.NUMBER, Token.KEYWORD].indexOf(token.type()) > -1) {
        res.s += ' ';
      }

      if (token.content() === '}' && res.s.charAt(res.s.length - 1) === ';') {
        res.s = res.s.replace(/;$/, '');
      }

      res.s += token.content();
      res.word = [Token.ID, Token.NUMBER, Token.KEYWORD].indexOf(token.type()) > -1;
    } else if (token.content() === ';') {
      res.s += ';';
      res.word = false;
    }
  } else {
    node.leaves().forEach(function (leaf) {
      recursion(leaf, res);
    });
  }

  return res;
}

/***/ }),

/***/ "./src/join2.js":
/*!**********************!*\
  !*** ./src/join2.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! homunculus */ "./node_modules/homunculus/index.js");
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(homunculus__WEBPACK_IMPORTED_MODULE_0__);

var Token = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('token', 'jsx');
var S = {};
S[Token.LINE] = S[Token.COMMENT] = S[Token.BLANK] = true;
var res;

function recursion(node, excludeLine) {
  if (node.isToken()) {
    var token = node.token();

    if (!token.isVirtual()) {
      res += token.content();

      while (token.next()) {
        token = token.next();

        if (token.isVirtual() || !S.hasOwnProperty(token.type())) {
          break;
        }

        var s = token.content();

        if (!excludeLine || s != '\n') {
          res += token.content();
        }
      }
    }
  } else {
    node.leaves().forEach(function (leaf) {
      recursion(leaf, excludeLine);
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (node, excludeLine) {
  res = '';
  recursion(node, excludeLine);
  return res;
});

/***/ }),

/***/ "./src/jsx.js":
/*!********************!*\
  !*** ./src/jsx.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! homunculus */ "./node_modules/homunculus/index.js");
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(homunculus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InnerTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InnerTree */ "./src/InnerTree.js");
/* harmony import */ var _linkage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linkage */ "./src/linkage.js");
/* harmony import */ var _ignore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ignore */ "./src/ignore.js");
/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./join */ "./src/join.js");
/* harmony import */ var _join2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./join2 */ "./src/join2.js");
/* harmony import */ var _delegate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delegate */ "./src/delegate.js");







var Token = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('token', 'jsx');
var Node = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('node', 'jsx');

function elem(node, opt, param) {
  var res = ''; //open和selfClose逻辑复用

  res += selfClose(node.first(), opt, param);
  res += ',[';
  var comma = false;

  for (var i = 1, len = node.size(); i < len - 1; i++) {
    var leaf = node.leaf(i);

    switch (leaf.name()) {
      case Node.JSXChild:
        if (comma) {
          res += ',';
          comma = false;
        }

        res += child(leaf, opt, param);
        comma = true;
        break;

      case Node.TOKEN:
        var s = leaf.token().content(); //open和close之间的空白不能忽略

        if (/^\s+$/.test(s)) {
          if (leaf.prev().name() === Node.JSXOpeningElement && leaf.next().name() === Node.JSXClosingElement) {
            res += '"' + s.replace(/"/g, '\\"').replace(/\n/g, '\\n\\\n') + '"';
          } else {
            res += s;
          }
        } else {
          if (comma) {
            res += ',';
            comma = false;
          }

          res += '"' + s.replace(/"/g, '\\"').replace(/\n/g, '\\n\\\n') + '"';
          comma = true;
        }

        break;

      default:
        if (comma) {
          res += ',';
          comma = false;
        }

        res += parse(leaf, opt, param);
        comma = true;
    }
  }

  res += '])';

  if (node.last().name() === Node.JSXClosingElement) {
    res += Object(_ignore__WEBPACK_IMPORTED_MODULE_3__["default"])(node.last(), true).res;
  }

  return res;
}

function selfClose(node, opt, param) {
  var res = '';
  var name;
  var first = node.leaf(1);

  if (first.isToken()) {
    name = first.token().content();
  } else if (first.name() === Node.JSXMemberExpression) {
    name = first.first().token().content();

    for (var i = 1, len = first.size(); i < len; i++) {
      name += first.leaf(i).token().content();
    }
  }

  if (/-/.test(name)) {
    res += 'karas.createCp(';
    res += name.replace(/-([A-Za-z])/g, '$1');
  } else if (/^[A-Z]/.test(name)) {
    res += 'karas.createGeom(';
    res += '"' + name + '"';
  } else {
    res += 'karas.createDom(';
    res += '"' + name + '"';
  }

  res += ',[';

  for (var _i = 2, _len = node.size(); _i < _len - 1; _i++) {
    var leaf = node.leaf(_i);

    if (_i !== 2) {
      res += ',';
    }

    switch (leaf.name()) {
      case Node.JSXBindAttribute:
        res += attr(leaf, opt, param);
        break;

      case Node.JSXAttribute:
        res += attr(leaf, opt, param);
        break;

      case Node.JSXSpreadAttribute:
        res += spread(leaf);
        break;
    }
  }

  res += ']';
  return res;
}

function attr(node, opt, param) {
  var res = '';
  var key = node.first().token().content();
  var name = node.parent().leaf(1).token().content();
  var isCp = /^[A-Z]/.test(name);

  if (key.charAt(0) === '@') {
    key = key.slice(1);
  } // 组件属性非@申明均不bind
  else if (isCp && opt.isBind) {
      opt.isBind = false;
    }

  var k = '["' + key + '"';
  res += k + ',';
  var v = node.last();

  if (v.isToken()) {
    v = v.token().content();
    res += v;
  } else if (/^on-?[a-zA-Z]/.test(key)) {
    res += onEvent(v, opt, param);
  } else {
    res += child(v, opt, param, true);
  }

  res += ']';
  return res;
}

function onEvent(node, opt, param) {
  return Object(_delegate__WEBPACK_IMPORTED_MODULE_6__["default"])(node, param);
}

function spread(node) {
  return Object(_join__WEBPACK_IMPORTED_MODULE_4__["default"])(node.leaf(2));
}

function child(node, opt, param, isAttr) {
  var callexpr = node.leaf(1);

  if (opt.isBind) {
    var temp = Object(_linkage__WEBPACK_IMPORTED_MODULE_2__["default"])(callexpr, param, {
      arrowFn: opt.arrowFn
    });
    var list = temp.arr;
    var single = temp.single;
    var bind = temp.bind;

    if (list.length) {
      var listener = list.length === 1 ? '"' + list[0] + '"' : JSON.stringify(list);

      if (isAttr) {
        var key = node.prev().prev().token().content();

        if (key === 'value' || key === 'checked' || key === 'selected') {
          var tag = node.parent().parent().leaf(1).token().content();

          if (tag === 'input' || tag === 'select' || tag === 'option') {
            var value = node.leaf(1); // 单独值mmbexpr非运算符双向绑定，其余单向

            if (value.name() === Node.MMBEXPR) {
              var v = Object(_join2__WEBPACK_IMPORTED_MODULE_5__["default"])(value);
              return 'new yurine.Obj(' + listener + ',()=>{return(' + new _InnerTree__WEBPACK_IMPORTED_MODULE_1__["default"](opt, param).parse(node).replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1') + ')}' + (single ? ',true' : ',false') + (bind ? ',(v)=>{v!==' + v + '&&(' + v + '=v)})' : ')');
            }

            return 'new yurine.Obj(' + listener + ',()=>{return(' + new _InnerTree__WEBPACK_IMPORTED_MODULE_1__["default"](opt, param).parse(node).replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1') + ')}' + (single ? ',true' : '') + ')';
          }
        }
      } else if (node.prev() && node.prev().name() === Node.JSXOpeningElement) {
        var _key = node.prev().leaf(1).token().content();

        if (_key === 'textarea') {
          var _value = node.leaf(1);

          if (_value.name() === Node.MMBEXPR) {
            var _v = Object(_join2__WEBPACK_IMPORTED_MODULE_5__["default"])(_value);

            return 'new yurine.Obj(' + listener + ',()=>{return(' + new _InnerTree__WEBPACK_IMPORTED_MODULE_1__["default"](opt, param).parse(node).replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1') + ')}' + (single ? ',true' : ',false') + (bind ? ',(v)=>{v!==' + _v + '&&(' + _v + '=v)})' : ')');
          }
        }
      }

      return 'new yurine.Obj(' + listener + ',()=>{return(' + new _InnerTree__WEBPACK_IMPORTED_MODULE_1__["default"](opt, param).parse(node).replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1') + ')}' + (single ? ',true' : '') + ')';
    }
  } // Obj中再次出现的:input的value还需要添加Obj
  else if (opt.isInBind) {
      if (isAttr) {
        var _key2 = node.prev().prev().token().content();

        if (_key2 === 'value') {
          var _tag = node.parent().parent().leaf(1).token().content();

          if (_tag === 'input' || _tag === 'select') {
            var _temp = Object(_linkage__WEBPACK_IMPORTED_MODULE_2__["default"])(callexpr, param, {
              arrowFn: opt.arrowFn
            });

            var _list = _temp.arr;
            var _bind = _temp.bind;

            if (_list.length) {
              var _value2 = node.leaf(1);

              var _listener = _list.length === 1 ? '"' + _list[0] + '"' : JSON.stringify(_list);

              if (_value2.name() === Node.MMBEXPR) {
                var _v2 = Object(_join2__WEBPACK_IMPORTED_MODULE_5__["default"])(_value2);

                return 'new yurine.Obj(' + _listener + ',()=>{return(' + new _InnerTree__WEBPACK_IMPORTED_MODULE_1__["default"](opt, param).parse(node).replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1') + ')}' + ',false' + (_bind ? ',(v)=>{v!==' + _v2 + '&&(' + _v2 + '=v)})' : ')');
              }

              return 'new yurine.Obj(' + _listener + ',()=>{return(' + new _InnerTree__WEBPACK_IMPORTED_MODULE_1__["default"](opt, param).parse(node).replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1') + ')})';
            }
          }
        }
      } else if (node.prev() && node.prev().name() === Node.JSXOpeningElement) {
        var _key3 = node.prev().leaf(1).token().content();

        if (_key3 === 'textarea') {
          var _temp2 = Object(_linkage__WEBPACK_IMPORTED_MODULE_2__["default"])(callexpr, param, {
            arrowFn: opt.arrowFn
          });

          var _list2 = _temp2.arr;
          var _bind2 = _temp2.bind;

          if (_list2.length) {
            var _value3 = node.leaf(1);

            var _listener2 = _list2.length === 1 ? '"' + _list2[0] + '"' : JSON.stringify(_list2);

            if (_value3.name() === Node.MMBEXPR) {
              var _v3 = Object(_join2__WEBPACK_IMPORTED_MODULE_5__["default"])(_value3);

              return 'new yurine.Obj(' + _listener2 + ',()=>{return(' + new _InnerTree__WEBPACK_IMPORTED_MODULE_1__["default"](opt, param).parse(node).replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1') + ')}' + ',false' + (_bind2 ? ',(v)=>{v!==' + _v3 + '&&(' + _v3 + '=v)})' : ')');
            }

            return 'new yurine.Obj(' + _listener2 + ',()=>{return(' + new _InnerTree__WEBPACK_IMPORTED_MODULE_1__["default"](opt, param).parse(node).replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1') + ')})';
          }
        }
      }
    }

  return new _InnerTree__WEBPACK_IMPORTED_MODULE_1__["default"](opt, param).parse(node).replace(/^(\s*){/, '$1').replace(/}(\s*)$/, '$1');
}

function parse(node, opt, param) {
  var res = '';

  switch (node.name()) {
    case Node.JSXElement:
      res += elem(node, opt, param);
      break;

    case Node.JSXSelfClosingElement:
      res += selfClose(node, opt, param);
      res += ')';
      break;
  }

  return res;
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "./src/linkage.js":
/*!************************!*\
  !*** ./src/linkage.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! homunculus */ "./node_modules/homunculus/index.js");
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(homunculus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _arrowfn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrowfn */ "./src/arrowfn.js");


var Token = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('token', 'jsx');
var Node = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('node', 'jsx');

function parse(node, res, param, opt) {
  if (node.isToken()) {} else {
    switch (node.name()) {
      case Node.EXPR:
        parse(node.first(), res, param, opt); //可能有连续多个表达式

        for (var i = 2, leaves = node.leaves(), len = leaves.length; i < len; i += 2) {
          parse(node.leaf(i), res, param, opt);
        }

        break;

      case Node.PRMREXPR:
        parse(node.first(), res, param, opt);
        break;

      case Node.MMBEXPR:
        mmbexpr(node, res, param, opt);
        break;

      case Node.CNDTEXPR:
        parse(node.first(), res, param, opt);
        parse(node.leaf(2), res, param, opt);
        parse(node.last(), res, param, opt);
        break;

      case Node.LOGOREXPR:
      case Node.LOGANDEXPR:
      case Node.BITANDEXPR:
      case Node.BITOREXPR:
      case Node.BITXOREXPR:
      case Node.EQEXPR:
      case Node.RELTEXPR:
      case Node.SHIFTEXPR:
      case Node.ADDEXPR:
      case Node.MTPLEXPR:
        parse(node.first(), res, param, opt); //可能有连续多个表达式

        for (var _i = 2, _leaves = node.leaves(), _len = _leaves.length; _i < _len; _i += 2) {
          parse(node.leaf(_i), res, param, opt);
        }

        break;

      case Node.UNARYEXPR:
      case Node.NEWEXPR:
        parse(node.last(), res, param, opt);
        break;

      case Node.POSTFIXEXPR:
        parse(node.first(), res, param, opt);
        break;

      case Node.CALLEXPR:
        callexpr(node, res, param, opt);
        break;

      case Node.ARRLTR:
        arrltr(node, res, param, opt);
        break;

      case Node.CPEAPL:
        cpeapl(node, res, param, opt);
        break;

      case Node.ARGS:
        parse(node.leaf(1), res, param, opt);
        break;

      case Node.ARGLIST:
      case Node.TEMPLATE:
        for (var _i2 = 0, _leaves2 = node.leaves(), _len2 = _leaves2.length; _i2 < _len2; _i2++) {
          var leaf = node.leaf(_i2);

          if (!leaf.isToken()) {
            parse(leaf, res, param, opt);
          }
        }

        break;

      case Node.ARROWFN:
        opt.arrowFn = opt.arrowFn || [];
        var temp = node.parent();

        if (temp && temp.name() === Node.ARGLIST) {
          temp = temp.parent();

          if (temp && temp.name() === Node.ARGS) {
            temp = temp.prev();

            if (temp && temp.name() === Node.MMBEXPR) {
              var _callexpr = temp.parent();

              temp = temp.leaf(2);

              if (temp.isToken() && temp.token().content() === 'map') {
                var body = node.last().leaf(1);

                if (opt.arrowFn.length === 0) {
                  opt.arrowFn.push(true);
                } else {
                  opt.arrowFn.push(_callexpr.parent().name() === Node.RETSTMT);
                }

                Object(_arrowfn__WEBPACK_IMPORTED_MODULE_1__["default"])(body, res, param, opt);
                opt.arrowFn.pop();
              }
            }
          }
        }

        break;

      case Node.JSXElement:
        parse(node.first(), res, param, opt);

        for (var _i3 = 1, _leaves3 = node.leaves(); _i3 < _leaves3.length - 1; _i3++) {
          parse(_leaves3[_i3], res, param, opt);
        }

        break;

      case Node.JSXSelfClosingElement:
      case Node.JSXOpeningElement:
        for (var _i4 = 1, _leaves4 = node.leaves(); _i4 < _leaves4.length - 1; _i4++) {
          parse(_leaves4[_i4], res, param, opt);
        }

        break;

      case Node.JSXAttribute:
        var value = node.last();

        if (value.name() === Node.JSXAttributeValue) {
          var first = value.first();

          if (first.isToken() && first.token().content() === '{') {
            parse(value.leaf(1), res, param, opt);
          }
        }

        break;

      case Node.JSXChild:
        node.leaves().forEach(function (leaf) {
          parse(leaf, res, param, opt);
        });
        break;
    }
  }
}

function mmbexpr(node, res, param, opt) {
  var prmr = node.first();

  if (prmr.name() === Node.PRMREXPR) {
    var first = prmr.first();

    if (first.isToken()) {
      var me = first.token().content();

      if (me === 'this') {
        var dot = node.leaf(1);

        if (dot.isToken()) {
          if (dot.token().content() === '.') {
            var token = dot.next();
            var id = token.token().content();

            if (id === 'model') {
              if (node.name() === Node.MMBEXPR) {
                var next = node.next();

                if (next.isToken()) {
                  if (next.token().content() === '.') {
                    next = next.next();

                    if (next.isToken()) {
                      var _token = next.token();

                      res['model.' + _token.content()] = true;
                    }
                  } else if (next.token().content() === '[') {
                    var expr = next.next();

                    if (expr.name() === Node.PRMREXPR) {
                      var s = expr.first();

                      if (s.isToken()) {
                        s = s.token();

                        if (s.type() === Token.STRING) {
                          res['model.' + s.val()] = true;
                        }
                      }
                    }
                  }
                }
              }
            } else {
              res[id] = true;
            }
          } else if (dot.token().content() === '[') {
            var _expr = dot.next();

            if (_expr.name() === Node.EXPR) {
              parse(_expr.last(), res, param, opt);
            } else if (_expr.name() === Node.PRMREXPR) {
              var _s = _expr.first();

              if (_s.isToken()) {
                _s = _s.token();

                if (_s.type() === Token.STRING) {
                  res[_s.val()] = true;
                }
              }
            } else {
              parse(_expr, res, param, opt);
            }
          }
        }
      } else {
        var bracket = node.leaf(1);

        if (bracket.isToken()) {
          if (bracket.token().content() === '[') {
            var _expr2 = bracket.next();

            if (_expr2.name() === Node.EXPR) {
              parse(_expr2.last(), res, param, opt);
            } else {
              parse(_expr2, res, param, opt);
            }
          }
        }
      }
    } else {
      parse(first, res, param, opt);
    }
  } else if (prmr.name() === Node.MMBEXPR) {
    mmbexpr(prmr, res, param, opt);

    var _dot = prmr.next();

    if (_dot.isToken() && _dot.token().content() === '[') {
      var _expr3 = _dot.next();

      if (_expr3.name() === Node.EXPR) {
        parse(_expr3.last(), res, param, opt);
      } else if (_expr3.name() === Node.PRMREXPR) {
        var _s2 = _expr3.first();

        if (_s2.isToken()) {
          _s2 = _s2.token();

          if (_s2.type() === Token.STRING) {
            res[_s2.val()] = true;
          }
        }
      } else {
        parse(_expr3, res, param, opt);
      }
    }
  } else {
    parse(prmr, res, param, opt);
  }
}

function callexpr(node, res, param, opt) {
  parse(node.first(), res, param, opt);
  var args = node.last();

  if (args.name() === Node.ARGS) {
    args.leaf(1).leaves().forEach(function (leaf, i) {
      if (i % 2 === 0) {
        parse(leaf, res, param, opt);
      }
    });
  }
}

function arrltr(node, res, param, opt) {
  node.leaves().forEach(function (leaf, i) {
    if (i % 2 === 1) {
      if (!leaf.isToken()) {
        parse(leaf, res, param, opt);
      }
    }
  });
}

function cpeapl(node, res, param, opt) {
  if (node.size() > 2) {
    var leaf = node.leaf(1);

    if (!leaf.isToken()) {
      parse(leaf, res, param, opt);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (node, param, opt) {
  var res = {}; // 取得全部this.xxx

  parse(node, res, param, opt);
  var arr = Object.keys(res);
  var bind = false;
  arr = arr.filter(function (item) {
    //model.xxx全部通过
    if (item.indexOf('model.') === 0) {
      bind = true;
      return true;
    } //没get不通过


    if (!(param.getHash || {}).hasOwnProperty(item)) {
      return false;
    } //有get需要有bind或link


    return (param.bindHash || {}).hasOwnProperty(item) || (param.evalHash || {}).hasOwnProperty(item) || (param.linkHash || {}).hasOwnProperty(item);
  }); // 只要有一个是双向绑定就是双向

  arr.forEach(function (item) {
    if ((param.bindHash || {}).hasOwnProperty(item)) {
      bind = true;
    }
  }); // 因特殊Array优化需要，this.v或者(..., this.v)形式的侦听变量
  // see https://github.com/migijs/migi/issues/29

  var single = false;

  if (node.name() === Node.MMBEXPR && node.leaves().length === 3 && node.first().name() === Node.PRMREXPR) {
    single = arr.length === 1 && node.first().first().isToken() && node.first().first().token().content() === 'this' && node.last().isToken() && node.last().token().content() === arr[0];
  } else if (node.name() === Node.MMBEXPR && node.leaves().length === 3 && node.first().name() === Node.MMBEXPR && node.first().leaves().length === 3 && node.first().first().name() === Node.PRMREXPR) {
    single = arr.length === 1 && node.first().first().first().isToken() && node.first().first().first().token().content() === 'this' && node.first().last().isToken() && node.first().last().token().content() === 'model' && node.last().isToken() && node.last().token().content() === arr[0].slice(6);
  } else if (node.name() === Node.PRMREXPR && node.first().name() === Node.CPEAPL) {
    var _cpeapl = node.first();

    if (_cpeapl.leaves().length === 3 && _cpeapl.leaf(1).name() === Node.EXPR) {
      var expr = _cpeapl.leaf(1);

      if (expr.last().name() === Node.MMBEXPR) {
        var _mmbexpr = expr.last();

        if (_mmbexpr.leaves().length === 3 && _mmbexpr.first().name() === Node.PRMREXPR && _mmbexpr.last().isToken()) {
          single = arr.length && _mmbexpr.first().first().isToken() && _mmbexpr.first().first().token().content() === 'this' && _mmbexpr.last().token().content() === arr[arr.length - 1];
        }
      }
    } else if (_cpeapl.leaves().length === 3 && _cpeapl.leaf(1).name() === Node.MMBEXPR && _cpeapl.first().isToken() && _cpeapl.first().token().content() === '(') {
      var _mmbexpr2 = _cpeapl.leaf(1);

      if (_mmbexpr2.leaves().length === 3 && _mmbexpr2.first().name() === Node.PRMREXPR && _mmbexpr2.last().isToken()) {
        single = arr.length && _mmbexpr2.first().first().isToken() && _mmbexpr2.first().first().token().content() === 'this' && _mmbexpr2.last().token().content() === arr[arr.length - 1];
      }
    }
  }

  return {
    arr: arr,
    single: single,
    bind: bind
  };
});
;

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! homunculus */ "./node_modules/homunculus/index.js");
/* harmony import */ var homunculus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(homunculus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ignore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ignore */ "./src/ignore.js");
/* harmony import */ var _InnerTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InnerTree */ "./src/InnerTree.js");
/* harmony import */ var _jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsx */ "./src/jsx.js");
/* harmony import */ var _join2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./join2 */ "./src/join2.js");





var Token = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('token', 'jsx');
var Node = homunculus__WEBPACK_IMPORTED_MODULE_0___default.a.getClass('node', 'jsx');
var res;

function stmt(node, param) {
  recursion(node, param);
}

function recursion(node, param) {
  if (node.isToken()) {
    var token = node.token();

    if (token.isVirtual()) {
      return;
    }

    if (!token.ignore) {
      res += token.content();
    }

    while (token.next()) {
      token = token.next();

      if (token.isVirtual() || !_ignore__WEBPACK_IMPORTED_MODULE_1__["default"].S.hasOwnProperty(token.type())) {
        break;
      }

      if (!token.ignore) {
        res += token.content();
      }
    }
  } else {
    switch (node.name()) {
      case Node.JSXElement:
      case Node.JSXSelfClosingElement:
        res += Object(_jsx__WEBPACK_IMPORTED_MODULE_3__["default"])(node, {
          isBind: true
        }, param);
        return;

      case Node.FNEXPR:
      case Node.FNDECL:
      case Node.CLASSEXPR:
        var tree = new _InnerTree__WEBPACK_IMPORTED_MODULE_2__["default"]();
        res += tree.parse(node);
        return;
    }

    node.leaves().forEach(function (leaf) {
      recursion(leaf, param);
    });
  }
}

function parse(node, param) {
  res = '';
  var len = node.size();
  node.leaves().forEach(function (leaf, i) {
    //fnbody
    if (i === len - 2) {
      leaf.leaves().forEach(function (item) {
        stmt(item, param);
      });
    } else {
      res += Object(_join2__WEBPACK_IMPORTED_MODULE_4__["default"])(leaf);
    }
  });
  return res;
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ })

/******/ })));
//# sourceMappingURL=index.js.map