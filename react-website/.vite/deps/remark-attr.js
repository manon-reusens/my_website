import {
  __commonJS
} from "./chunk-G3PMV62Z.js";

// ../node_modules/md-attr-parser/dist/index.js
var require_dist = __commonJS({
  "../node_modules/md-attr-parser/dist/index.js"(exports, module) {
    "use strict";
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(source, true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var nothingHappend = {
      prop: {},
      eaten: ""
    };
    var defaultConfig = {
      defaultValue: function defaultValue() {
        return void 0;
      }
      // Its a function
    };
    function parse(value, indexNext, userConfig) {
      var letsEat = "";
      var stopOnBrace = false;
      var errorDetected = false;
      var config = _objectSpread({}, defaultConfig, {}, userConfig);
      if (typeof config.defaultValue !== "function") {
        var defaultValue = config.defaultValue;
        config.defaultValue = function() {
          return defaultValue;
        };
      }
      var prop = {};
      var labelFirst = "";
      var labelSecond;
      if (indexNext === void 0) {
        indexNext = 0;
      }
      var type;
      var forbidenCharacters = "\n\r{}";
      var shouldStop = function shouldStop2() {
        if (indexNext >= value.length || forbidenCharacters.indexOf(value[indexNext]) > -1) {
          if (stopOnBrace && value[indexNext] !== "}") {
            errorDetected = true;
          }
          return true;
        }
        return value[indexNext] === "}" && stopOnBrace;
      };
      var eaten = "";
      var eat = function eat2(chars) {
        eaten = "";
        while (indexNext < value.length && forbidenCharacters.indexOf(value.charAt(indexNext)) < 0 && chars.indexOf(value.charAt(indexNext)) >= 0) {
          letsEat += value.charAt(indexNext);
          eaten += value.charAt(indexNext);
          indexNext++;
        }
        return shouldStop();
      };
      var eatUntil = function eatUntil2(chars) {
        eaten = "";
        while (indexNext < value.length && forbidenCharacters.indexOf(value.charAt(indexNext)) < 0 && chars.indexOf(value.charAt(indexNext)) < 0) {
          letsEat += value.charAt(indexNext);
          eaten += value.charAt(indexNext);
          indexNext++;
        }
        if (labelFirst) {
          labelSecond = eaten;
        } else {
          labelFirst = eaten;
        }
        return shouldStop();
      };
      var eatInQuote = function eatInQuote2(quote) {
        eaten = "";
        if (value[indexNext] === quote) {
          return;
        }
        while (indexNext < value.length && !(quote === value[indexNext] && value[indexNext - 1] !== "\\") && value[indexNext] !== "\n" && value[indexNext] !== "\r") {
          letsEat += value.charAt(indexNext);
          eaten += value.charAt(indexNext);
          indexNext++;
        }
        if (value[indexNext] === "\n" || value[indexNext] === "\r" || indexNext >= value.length) {
          errorDetected = true;
          return true;
        }
        if (labelFirst) {
          labelSecond = eaten.replace(/\\"/g, '"');
        } else {
          labelFirst = eaten.replace(/\\"/g, '"');
        }
        return shouldStop();
      };
      var eatOne = function eatOne2(c, skipStopCheck) {
        letsEat += c;
        indexNext++;
        return skipStopCheck ? false : shouldStop();
      };
      var eatQuote = function eatQuote2(q) {
        eatOne(q, true);
        eatInQuote(q, true);
        if (value.charAt(indexNext) !== q) {
          return nothingHappend;
        }
        if (eatOne(q)) {
          return -1;
        }
      };
      var idSetByKey = false;
      var addAttribute = function addAttribute2() {
        switch (type) {
          case "id":
            if (idSetByKey) {
              prop.id = labelFirst;
              idSetByKey = false;
            } else {
              prop.id = prop.id || labelFirst;
            }
            break;
          case "class":
            if (!prop["class"]) {
              prop["class"] = [];
            }
            if (prop["class"].indexOf(labelFirst) < 0) {
              prop["class"].push(labelFirst);
            }
            break;
          case "key":
            if (!labelFirst) {
              return nothingHappend;
            }
            if (!(labelFirst in prop)) {
              if (labelSecond === void 0) {
                prop[labelFirst] = config.defaultValue(labelFirst);
              } else {
                prop[labelFirst] = labelFirst === "class" ? [labelSecond] : labelSecond;
              }
              if (labelFirst === "id") {
                idSetByKey = true;
              }
            } else if (labelFirst === "class" && Boolean(labelSecond)) {
              prop["class"].push(labelSecond);
            }
            break;
          default:
        }
        type = void 0;
        labelFirst = "";
        labelSecond = void 0;
      };
      eat(" 	\v");
      if (value[indexNext] === "{") {
        eatOne("{");
        stopOnBrace = true;
      }
      while (!shouldStop()) {
        if (eat(" 	\v")) {
          break;
        }
        if (value.charAt(indexNext) === ".") {
          type = "class";
          if (eatOne(".")) {
            errorDetected = true;
            break;
          }
        } else if (value.charAt(indexNext) === "#") {
          type = "id";
          if (eatOne("#")) {
            errorDetected = true;
            break;
          }
        } else {
          type = "key";
        }
        if (eatUntil("=	\b\v  ") || !labelFirst) {
          break;
        }
        if (value.charAt(indexNext) === "=" && type === "key") {
          if (eatOne("=")) {
            break;
          }
          if (value.charAt(indexNext) === '"') {
            var ret = eatQuote('"');
            if (ret === -1) {
              break;
            } else if (ret === nothingHappend) {
              return nothingHappend;
            }
          } else if (value.charAt(indexNext) === "'") {
            var _ret = eatQuote("'");
            if (_ret === -1) {
              break;
            } else if (_ret === nothingHappend) {
              return nothingHappend;
            }
          } else if (eatUntil(" 	\n\r\v=}")) {
            break;
          }
        }
        addAttribute();
      }
      addAttribute();
      if (stopOnBrace) {
        if (indexNext < value.length && value[indexNext] === "}") {
          stopOnBrace = false;
          eatOne("}");
        } else {
          return nothingHappend;
        }
      }
      return errorDetected ? nothingHappend : {
        prop,
        eaten: letsEat
      };
    }
    module.exports = parse;
  }
});

// ../node_modules/html-element-attributes/index.json
var require_html_element_attributes = __commonJS({
  "../node_modules/html-element-attributes/index.json"(exports, module) {
    module.exports = {
      "*": [
        "accesskey",
        "autocapitalize",
        "autofocus",
        "class",
        "contenteditable",
        "dir",
        "draggable",
        "enterkeyhint",
        "hidden",
        "id",
        "inputmode",
        "is",
        "itemid",
        "itemprop",
        "itemref",
        "itemscope",
        "itemtype",
        "lang",
        "nonce",
        "slot",
        "spellcheck",
        "style",
        "tabindex",
        "title",
        "translate"
      ],
      a: [
        "accesskey",
        "charset",
        "coords",
        "download",
        "href",
        "hreflang",
        "name",
        "ping",
        "referrerpolicy",
        "rel",
        "rev",
        "shape",
        "tabindex",
        "target",
        "type"
      ],
      abbr: [
        "title"
      ],
      applet: [
        "align",
        "alt",
        "archive",
        "code",
        "codebase",
        "height",
        "hspace",
        "name",
        "object",
        "vspace",
        "width"
      ],
      area: [
        "accesskey",
        "alt",
        "coords",
        "download",
        "href",
        "hreflang",
        "nohref",
        "ping",
        "referrerpolicy",
        "rel",
        "shape",
        "tabindex",
        "target",
        "type"
      ],
      audio: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "preload",
        "src"
      ],
      base: [
        "href",
        "target"
      ],
      basefont: [
        "color",
        "face",
        "size"
      ],
      bdo: [
        "dir"
      ],
      blockquote: [
        "cite"
      ],
      body: [
        "alink",
        "background",
        "bgcolor",
        "link",
        "text",
        "vlink"
      ],
      br: [
        "clear"
      ],
      button: [
        "accesskey",
        "autofocus",
        "disabled",
        "form",
        "formaction",
        "formenctype",
        "formmethod",
        "formnovalidate",
        "formtarget",
        "name",
        "tabindex",
        "type",
        "value"
      ],
      canvas: [
        "height",
        "width"
      ],
      caption: [
        "align"
      ],
      col: [
        "align",
        "char",
        "charoff",
        "span",
        "valign",
        "width"
      ],
      colgroup: [
        "align",
        "char",
        "charoff",
        "span",
        "valign",
        "width"
      ],
      data: [
        "value"
      ],
      del: [
        "cite",
        "datetime"
      ],
      details: [
        "open"
      ],
      dfn: [
        "title"
      ],
      dialog: [
        "open"
      ],
      dir: [
        "compact"
      ],
      div: [
        "align"
      ],
      dl: [
        "compact"
      ],
      embed: [
        "height",
        "src",
        "type",
        "width"
      ],
      fieldset: [
        "disabled",
        "form",
        "name"
      ],
      font: [
        "color",
        "face",
        "size"
      ],
      form: [
        "accept",
        "accept-charset",
        "action",
        "autocomplete",
        "enctype",
        "method",
        "name",
        "novalidate",
        "target"
      ],
      frame: [
        "frameborder",
        "longdesc",
        "marginheight",
        "marginwidth",
        "name",
        "noresize",
        "scrolling",
        "src"
      ],
      frameset: [
        "cols",
        "rows"
      ],
      h1: [
        "align"
      ],
      h2: [
        "align"
      ],
      h3: [
        "align"
      ],
      h4: [
        "align"
      ],
      h5: [
        "align"
      ],
      h6: [
        "align"
      ],
      head: [
        "profile"
      ],
      hr: [
        "align",
        "noshade",
        "size",
        "width"
      ],
      html: [
        "manifest",
        "version"
      ],
      iframe: [
        "align",
        "allow",
        "allowfullscreen",
        "allowpaymentrequest",
        "allowusermedia",
        "frameborder",
        "height",
        "loading",
        "longdesc",
        "marginheight",
        "marginwidth",
        "name",
        "referrerpolicy",
        "sandbox",
        "scrolling",
        "src",
        "srcdoc",
        "width"
      ],
      img: [
        "align",
        "alt",
        "border",
        "crossorigin",
        "decoding",
        "height",
        "hspace",
        "ismap",
        "loading",
        "longdesc",
        "name",
        "referrerpolicy",
        "sizes",
        "src",
        "srcset",
        "usemap",
        "vspace",
        "width"
      ],
      input: [
        "accept",
        "accesskey",
        "align",
        "alt",
        "autocomplete",
        "autofocus",
        "checked",
        "dirname",
        "disabled",
        "form",
        "formaction",
        "formenctype",
        "formmethod",
        "formnovalidate",
        "formtarget",
        "height",
        "ismap",
        "list",
        "max",
        "maxlength",
        "min",
        "minlength",
        "multiple",
        "name",
        "pattern",
        "placeholder",
        "readonly",
        "required",
        "size",
        "src",
        "step",
        "tabindex",
        "title",
        "type",
        "usemap",
        "value",
        "width"
      ],
      ins: [
        "cite",
        "datetime"
      ],
      isindex: [
        "prompt"
      ],
      label: [
        "accesskey",
        "for",
        "form"
      ],
      legend: [
        "accesskey",
        "align"
      ],
      li: [
        "type",
        "value"
      ],
      link: [
        "as",
        "charset",
        "color",
        "crossorigin",
        "disabled",
        "href",
        "hreflang",
        "imagesizes",
        "imagesrcset",
        "integrity",
        "media",
        "nonce",
        "referrerpolicy",
        "rel",
        "rev",
        "sizes",
        "target",
        "title",
        "type"
      ],
      map: [
        "name"
      ],
      menu: [
        "compact"
      ],
      meta: [
        "charset",
        "content",
        "http-equiv",
        "name",
        "scheme"
      ],
      meter: [
        "high",
        "low",
        "max",
        "min",
        "optimum",
        "value"
      ],
      object: [
        "align",
        "archive",
        "border",
        "classid",
        "codebase",
        "codetype",
        "data",
        "declare",
        "form",
        "height",
        "hspace",
        "name",
        "standby",
        "tabindex",
        "type",
        "typemustmatch",
        "usemap",
        "vspace",
        "width"
      ],
      ol: [
        "compact",
        "reversed",
        "start",
        "type"
      ],
      optgroup: [
        "disabled",
        "label"
      ],
      option: [
        "disabled",
        "label",
        "selected",
        "value"
      ],
      output: [
        "for",
        "form",
        "name"
      ],
      p: [
        "align"
      ],
      param: [
        "name",
        "type",
        "value",
        "valuetype"
      ],
      pre: [
        "width"
      ],
      progress: [
        "max",
        "value"
      ],
      q: [
        "cite"
      ],
      script: [
        "async",
        "charset",
        "crossorigin",
        "defer",
        "integrity",
        "language",
        "nomodule",
        "nonce",
        "referrerpolicy",
        "src",
        "type"
      ],
      select: [
        "autocomplete",
        "autofocus",
        "disabled",
        "form",
        "multiple",
        "name",
        "required",
        "size",
        "tabindex"
      ],
      slot: [
        "name"
      ],
      source: [
        "media",
        "sizes",
        "src",
        "srcset",
        "type"
      ],
      style: [
        "media",
        "nonce",
        "title",
        "type"
      ],
      table: [
        "align",
        "bgcolor",
        "border",
        "cellpadding",
        "cellspacing",
        "frame",
        "rules",
        "summary",
        "width"
      ],
      tbody: [
        "align",
        "char",
        "charoff",
        "valign"
      ],
      td: [
        "abbr",
        "align",
        "axis",
        "bgcolor",
        "char",
        "charoff",
        "colspan",
        "headers",
        "height",
        "nowrap",
        "rowspan",
        "scope",
        "valign",
        "width"
      ],
      textarea: [
        "accesskey",
        "autocomplete",
        "autofocus",
        "cols",
        "dirname",
        "disabled",
        "form",
        "maxlength",
        "minlength",
        "name",
        "placeholder",
        "readonly",
        "required",
        "rows",
        "tabindex",
        "wrap"
      ],
      tfoot: [
        "align",
        "char",
        "charoff",
        "valign"
      ],
      th: [
        "abbr",
        "align",
        "axis",
        "bgcolor",
        "char",
        "charoff",
        "colspan",
        "headers",
        "height",
        "nowrap",
        "rowspan",
        "scope",
        "valign",
        "width"
      ],
      thead: [
        "align",
        "char",
        "charoff",
        "valign"
      ],
      time: [
        "datetime"
      ],
      tr: [
        "align",
        "bgcolor",
        "char",
        "charoff",
        "valign"
      ],
      track: [
        "default",
        "kind",
        "label",
        "src",
        "srclang"
      ],
      ul: [
        "compact",
        "type"
      ],
      video: [
        "autoplay",
        "controls",
        "crossorigin",
        "height",
        "loop",
        "muted",
        "playsinline",
        "poster",
        "preload",
        "src",
        "width"
      ]
    };
  }
});

// ../node_modules/is-whitespace-character/index.js
var require_is_whitespace_character = __commonJS({
  "../node_modules/is-whitespace-character/index.js"(exports, module) {
    "use strict";
    module.exports = whitespace;
    var fromCode = String.fromCharCode;
    var re = /\s/;
    function whitespace(character) {
      return re.test(
        typeof character === "number" ? fromCode(character) : character.charAt(0)
      );
    }
  }
});

// ../node_modules/remark-attr/dist/dom-event-handler.js
var require_dom_event_handler = __commonJS({
  "../node_modules/remark-attr/dist/dom-event-handler.js"(exports, module) {
    "use strict";
    module.exports = ["onabort", "onautocomplete", "onautocompleteerror", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextmenu", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragexit", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onseeked", "onseeking", "onselect", "onshow", "onsort", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting"];
  }
});

// ../node_modules/remark-attr/dist/index.js
var require_dist2 = __commonJS({
  "../node_modules/remark-attr/dist/index.js"(exports, module) {
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var parseAttr = require_dist();
    var htmlElemAttr = require_html_element_attributes();
    var isWhiteSpace = require_is_whitespace_character();
    var supportedElements = /* @__PURE__ */ new Set(["link", "atxHeading", "strong", "emphasis", "deletion", "code", "setextHeading", "fencedCode", "reference", "footnoteCall", "autoLink"]);
    var blockElements = /* @__PURE__ */ new Set(["atxHeading", "setextHeading"]);
    var particularElements = /* @__PURE__ */ new Set(["fencedCode"]);
    var particularTokenize = {};
    var DOMEventHandler = require_dom_event_handler();
    var convTypeTag = {
      image: "img",
      link: "a",
      heading: "h1",
      strong: "strong",
      emphasis: "em",
      "delete": "s",
      inlineCode: "code",
      code: "code",
      linkReference: "a",
      "*": "*"
    };
    function tokenizeGenerator(prefix, oldParser, config) {
      function token(eat, value, silent) {
        var self = this;
        var eaten = oldParser.call(self, eat, value, silent);
        var index = 0;
        var parsedAttr;
        var length = value.length;
        if (!eaten || !eaten.position) {
          return void 0;
        }
        var type = convTypeTag[eaten.type];
        index = eaten.position.end.offset - eaten.position.start.offset;
        if (index + prefix.length < length && value.charAt(index + prefix.length) === "{") {
          parsedAttr = parseAttr(value, index + prefix.length, config.mdAttrConfig);
        }
        if (parsedAttr) {
          if (config.scope && config.scope !== "none") {
            var filtredProp = filterAttributes(parsedAttr.prop, config, type);
            if (filtredProp !== {}) {
              if (eaten.data) {
                eaten.data.hProperties = filtredProp;
              } else {
                eaten.data = {
                  hProperties: filtredProp
                };
              }
            }
          }
          eaten = eat(prefix + parsedAttr.eaten)(eaten);
        }
        return eaten;
      }
      return token;
    }
    function tokenizeModifierGenerator(oldParser, config) {
      function token(eat, value, silent) {
        var self = this;
        var eaten = oldParser.call(self, eat, value, silent);
        var index = 0;
        if (!eaten || !eaten.position || !eaten.children || eaten.children.length <= 0) {
          return eaten;
        }
        var type = convTypeTag[eaten.type];
        var lastChild = eaten.children[eaten.children.length - 1];
        if (!lastChild.value || lastChild.value.length <= 0 || lastChild.value[lastChild.value.length - 1] !== "}") {
          return eaten;
        }
        index = lastChild.value.lastIndexOf("{");
        if (index <= 0) {
          return eaten;
        }
        var parsedAttr = parseAttr(lastChild.value, index, config.mdAttrConfig);
        if (parsedAttr.eaten.length !== lastChild.value.length - index) {
          return eaten;
        }
        index -= 1;
        while (index >= 0 && isWhiteSpace(lastChild.value[index])) {
          index -= 1;
        }
        if (index < 0) {
          return eaten;
        }
        if (parsedAttr) {
          if (config.scope && config.scope !== "none") {
            var filtredProp = filterAttributes(parsedAttr.prop, config, type);
            if (filtredProp !== {}) {
              if (eaten.data) {
                eaten.data.hProperties = filtredProp;
              } else {
                eaten.data = {
                  hProperties: filtredProp
                };
              }
            }
          }
          lastChild.value = lastChild.value.slice(0, index + 1);
        }
        return eaten;
      }
      return token;
    }
    function filterAttributes(prop, config, type) {
      var scope = config.scope;
      var extend = config.extend;
      var allowDangerousDOMEventHandlers = config.allowDangerousDOMEventHandlers;
      var specific = htmlElemAttr;
      var extendTag = (function(extend2) {
        var t = {};
        Object.getOwnPropertyNames(extend2).forEach(function(p) {
          t[convTypeTag[p]] = extend2[p];
        });
        return t;
      })(extend);
      Object.getOwnPropertyNames(prop).forEach(function(p) {
        if (p !== "key" && p !== "class" && p !== "id") {
          prop[p] = prop[p] || "";
        }
      });
      var isDangerous = function isDangerous2(p) {
        return DOMEventHandler.includes(p);
      };
      var isSpecific = function isSpecific2(p) {
        return type in specific && specific[type].includes(p);
      };
      var isGlobal = function isGlobal2(p) {
        return htmlElemAttr["*"].includes(p) || p.match(/^aria-[a-z][a-z.-_\d]*$/) || p.match(/^data-[a-z][a-z_.-0-9]*$/);
      };
      var inScope = function inScope2() {
        return false;
      };
      var orFunc = function orFunc2(fun, fun2) {
        return function(x) {
          return fun(x) || fun2(x);
        };
      };
      switch (scope) {
        case "none":
          break;
        case "permissive":
        case "every":
          if (allowDangerousDOMEventHandlers) {
            inScope = function inScope2() {
              return true;
            };
          } else {
            inScope = function inScope2(x) {
              return !isDangerous(x);
            };
          }
          break;
        case "extended":
        default:
          inScope = function inScope2(p) {
            return extendTag && type in extendTag && extendTag[type].includes(p);
          };
          inScope = orFunc(inScope, function(p) {
            return "*" in extendTag && extendTag["*"].includes(p);
          });
        // Or if it in the specific scope, fallthrough
        case "specific":
          inScope = orFunc(inScope, isSpecific);
        // Or if it in the global scope fallthrough
        case "global":
          inScope = orFunc(inScope, isGlobal);
          if (allowDangerousDOMEventHandlers) {
            inScope = orFunc(inScope, isDangerous);
          }
      }
      Object.getOwnPropertyNames(prop).forEach(function(p) {
        if (!inScope(p)) {
          delete prop[p];
        }
      });
      return prop;
    }
    function tokenizeFencedCode(oldParser, config) {
      var prefix = "\n";
      function token(eat, value, silent) {
        var self = this;
        var eaten = oldParser.call(self, eat, value, silent);
        var parsedAttr;
        var parsedByCustomAttr = false;
        if (!eaten || !eaten.position) {
          return void 0;
        }
        var type = convTypeTag[eaten.type];
        if (eaten.lang) {
          if (eaten.meta) {
            parsedAttr = parseAttr(eaten.meta);
          } else {
            parsedAttr = parseAttr(value, value.indexOf(" "));
          }
        }
        if (parsedAttr) {
          if (config.scope && config.scope !== "none") {
            var filtredProp = filterAttributes(parsedAttr.prop, config, type);
            if (filtredProp !== {}) {
              if (eaten.data) {
                eaten.data.hProperties = _objectSpread(_objectSpread({}, eaten.data.hProperties), filtredProp);
              } else {
                eaten.data = {
                  hProperties: filtredProp
                };
              }
            }
          }
          if (parsedByCustomAttr) {
            eaten = eat(prefix + parsedAttr.eaten)(eaten);
          }
        }
        return eaten;
      }
      return token;
    }
    particularTokenize.fencedCode = tokenizeFencedCode;
    remarkAttr.SUPPORTED_ELEMENTS = supportedElements;
    module.exports = remarkAttr;
    function remarkAttr(userConfig) {
      var parser = this.Parser;
      var defaultConfig = {
        allowDangerousDOMEventHandlers: false,
        elements: supportedElements,
        extend: {},
        scope: "extended",
        mdAttrConfig: void 0,
        enableAtxHeaderInline: true,
        disableBlockElements: false
      };
      var config = _objectSpread(_objectSpread({}, defaultConfig), userConfig);
      if (!isRemarkParser(parser)) {
        throw new Error("Missing parser to attach `remark-attr` [link] (to)");
      }
      var tokenizers = parser.prototype.inlineTokenizers;
      var tokenizersBlock = parser.prototype.blockTokenizers;
      config.elements.forEach(function(element) {
        if ((element in tokenizersBlock || element in tokenizers) && supportedElements.has(element)) {
          if (!config.disableBlockElements && blockElements.has(element)) {
            var oldElement = tokenizersBlock[element];
            tokenizersBlock[element] = tokenizeGenerator("\n", oldElement, config);
          } else if (particularElements.has(element)) {
            var _oldElement = tokenizersBlock[element];
            tokenizersBlock[element] = particularTokenize[element](_oldElement, config);
          } else {
            var _oldElement2 = tokenizers[element];
            var elementTokenize = tokenizeGenerator("", _oldElement2, config);
            elementTokenize.locator = tokenizers[element].locator;
            tokenizers[element] = elementTokenize;
          }
          if (config.enableAtxHeaderInline && element === "atxHeading") {
            var _oldElement3 = tokenizersBlock[element];
            tokenizersBlock[element] = tokenizeModifierGenerator(_oldElement3, config);
          }
        }
      });
    }
    function isRemarkParser(parser) {
      return Boolean(parser && parser.prototype && parser.prototype.inlineTokenizers && parser.prototype.inlineTokenizers.link && parser.prototype.inlineTokenizers.link.locator);
    }
  }
});
export default require_dist2();
//# sourceMappingURL=remark-attr.js.map
