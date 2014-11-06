Validator = {
    Require : /.+/,
    IP : /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/,
    Email : /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    Phone : /^(^(0\d{2})-(\d{8})$)|(^(0\d{3})-(\d{7})$)|(^(0\d{2})-(\d{8})-(\d{1,4})$)|(^(0\d{3})-(\d{7})-(\d{1,4})$)/,
    Mobile : /((\(\d{3}\))|(\d{3}\-))?1\d{10}$/,
    Url : /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
    IdCard : /^\d{15}(\d{2}[A-Za-z0-9])?$/,
    Currency : /^\d+(\.\d+)?$/,
    Number : /^\d+$/,
    Zip : /^[1-9]\d{5}$/,
    QQ : /^[1-9]\d{4,8}$/,
    PIN: /^[0-9]\d{3,8}$/,
    Integer : /^[-\+]?\d+$/,
    English : /^[A-Za-z]+$/,
    NumberOrEnglish : /^([A-Za-z]|[0-9])+$/,
    UserID :  /^([A-Za-z]|[0-9])+([_]*([A-Za-z]|[0-9])+)*$/,
    ChineseOrEnglish:/^[a-zA-Z\u4E00-\u9FA5]+$/,
    Chinese : /^[\u0391-\uFFE5]+$/,
    NoChinese : /^[^\u0391-\uFFE5]+$/,
    UnSafe : /^(([A-Z]*|[a-z]*|\d*|[-_\~!@#\$%\^&\*\.\(\)\[\]\{\}<>\?\\\/\'\"]*)|.{0,5})$|\s/,
    IsSafe : function(str) {
        return !this.UnSafe.test(str);
    },
    IsSafeName : /^([0-9]|[a-zA-Z\u4E00-\u9FA5]|[_])+$/,
    PositiveNumber : /^([1-9](\.\d{1,2})*$)|(0\.(?!0\.0$|0\.00$)(\d{1,2}?)$)/ ,
    SafeString : "this.IsSafe(value)",
    Limit : "this.limit(value.length,getAttribute('min'),  getAttribute('max'))",
    LimitB : "this.limit(this.LenB(value), getAttribute('min'), getAttribute('max'))",
    Double : "this.isDouble(value, getAttribute('max'), getAttribute('min'))",
    LimitLength : "this.limitLength(value.length,getAttribute('min'))",
    LimitLengthB : "this.limitLengthB(value.match(/[^ -~]/g) == null ? value.length : value.length + value.match(/[^ -~]/g).length,getAttribute('max'))",
    NotExists : "this.notExists(value,form,name)",
    Date : "this.IsDate(value, getAttribute('min'), getAttribute('format'))",
    DateTime : "this.IsDateTime(value)",
    DateTime_Minute : "this.IsDateTime_Minute(value)",
    DateTime_Hour : "this.IsDateTime_Hour(value)",
    Repeat : "value == document.getElementsByName(getAttribute('to'))[0].value",
    Range : "Number(getAttribute('min')) < Number(value) && Number(value) < Number(getAttribute('max'))",
    Compare : "this.compare(value,getAttribute('operator'),getAttribute('to'))",
    CompareDate : "this.compareDate(value,getAttribute('operator'),getAttribute('to'))",
    CompareDateTime : "this.compareDateTime(value,getAttribute('operator'),getAttribute('to'))",
    CompareDateTime_Minute : "this.compareDateTime_Minute(value,getAttribute('operator'),getAttribute('to'))",
    CompareInteger : "this.compareInteger(value,getAttribute('operator'),getAttribute('to'))",
    Fzjg : "this.IsFzjg(value)",
    SFZH : "this.isSFZH(value)",
    Custom : "this.Exec(value, getAttribute('regexp'))",
    Group : "this.MustChecked(getAttribute('name'), getAttribute('min'), getAttribute('max'))",
    NotIncludeSpe : "this.chkName(value)",

    // message

    RequireStr : "不能为空",
    IPStr : "s1不是有效的IP地址",
    EmailStr : "s1不是有效的EMail地址",
    PhoneStr : "s1不是有效的电话号码",
    MobileStr : "s1不是有效的移动电话号码",
    UrlStr : "s1不是有效的URL地址",
    IdCardStr : "s1不是有效的身份证号",
    CurrencyStr : "s1不是有效的金额数据",
    NumberStr : "s1不是有效的数字",
    ZipStr : "s1不是有效的邮政编码",
    QQStr : "s1不是有效的QQ号码",
    PINStr: "您输入的不是有效的PIN码",
    IntegerStr : "s1不是有效的整数",
    EnglishStr : "s1不是有效的英文字母",
    NumberOrEnglishStr : "只能包含字母和数字",
    UserIDStr : "只能包含字母、数字和“_”(不能以“_”开始或结束)",
    ChineseOrEnglishStr :"只能为英文字母或汉字",
    ChineseStr : "s1不是有效的汉字",
    NoChineseStr : "s1中包含汉字",
    LimitStr : "长度必须在s1-s2之间",
    LimitBStr : "字节长度必须在s1-s2之间",
    DoubleStr : "输入的数字[s1]不正确,请按s2位整数s3位小数的形式填写",
    LimitLengthStr : "长度必须是s1位",
    LimitLengthBStr : "最多能输入s1个字符",
    NotExistsStr : "s1已经存在",
    DateStr : "s1不是有效的日期",
    DateTimeStr : "s1不是有效的日期",
    DateTime_MinuteStr : "s1不是有效的日期",
    DateTime_HourStr : "s1不是有效的日期",
    RepeatStr : "两次输入不一致",
    RangeStr : "必须在s1-s2之间",
    CompareStr : "必须s1 [s2]",
    CompareDateStr : "必须s2[s3]",
    CompareDateTimeStr : "必须s2[s3]",
    CompareDateTime_MinuteStr : "必须s2[s3]",
    CompareIntegerStr : "必须s2[s3]",
    CustomStr : "this.Exec(value, getAttribute('regexp'))",
    FzjgStr : "s1不是有效的发证机关",
    SFZHStr : "s1不是有效的身份证号",
    GroupStr : "必须选定一个选项",
    CompareOp : "",
    IsSafeNameStr : "s1不是有效的名称，只允许包含字母，汉字，数字和下划线",
    PositiveNumberStr :"只能为正数",
    foundError : false,
    ErrorItem : [document.forms[0]],
    ErrorMessage : ["输入的数据不能通过校验，原因如下：\t\t"],
    NotIncludeSpeStr : "不能包含&+*（）这些字符",

    chkName : function(value) {
        value = value + "";
        if (value.indexOf("&") == -1) {
            if (value.indexOf("*") == -1) {
                if (value.indexOf("+") == -1) {
                    if (value.indexOf(")") == -1) {
                        if (value.indexOf("(") == -1) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    },
    validateForm : function(theForm, mode, checkall) {

        var validateAll = checkall || false;
        var obj = theForm || event.srcElement;
        var count = obj.elements.length;
        this.ErrorMessage.length = 1;
        this.ErrorItem.length = 1;
        this.ErrorItem[0] = obj;
        for (var i = 0; i < count; i++) {
            if ((!validateAll) && (obj.elements[i].disabled == true || obj.elements[i].readOnly == true)) continue;
            if (typeof(obj.elements[i].type) == "undefined") continue;
            if (obj.elements[i].name.indexOf("wygrid_edit_") >= 0)    continue;
            this.validateSingle(obj.elements[i]);
        }

        return this.processMsg(mode);
    },
    validateDiv : function(theDiv, mode, checkall) {
        var validateAll = checkall || false;
        var parentObj = theDiv || event.srcElement;
        var obj = new Array();
        this.getAllChild(obj, parentObj);
        var count = obj.length;
        this.ErrorMessage.length = 1;
        this.ErrorItem.length = 1;
        this.ErrorItem[0] = obj;
        for (var i = 0; i < count; i++) {
            if ((!validateAll) && (obj[i].disabled == true || obj[i].readOnly == true)) continue;
            if (obj[i].disabled) {
                continue;
            }
            if (typeof(obj[i].type) == "undefined") continue;
            if (obj[i].name.indexOf("wygrid_edit_") >= 0)    continue;
            this.validateSingle(obj[i]);
        }

        return this.processMsg(mode);
    },
    getAllChild : function(arr, element) {
        var childs = element.children;
        if (childs == null || childs == undefined || childs.length == 0) {
            return;
        }
        for (var i = 0; i < childs.length; i++) {
            if (childs[i] == null || childs[i] == undefined) {
                continue;
            }
            arr[arr.length] = childs[i];
            this.getAllChild(arr, childs[i]);
        }
    },
    validateCtrl : function(theCtrl, mode) {
        var obj = theCtrl || event.srcElement;
        this.ErrorMessage.length = 1;
        this.ErrorItem.length = 1;
        this.ErrorItem[0] = obj;

        this.validateSingle(obj, 1);

        return this.processMsg(mode);
    },
    validateSingle : function(theCtrl) {
        with (theCtrl) {
            var _dataType = getAttribute("dataType");
            if (typeof(_dataType) == "object")    return;
            this.ClearState(theCtrl);
            if (getAttribute("Require") == "false" && value == "") return;
            if (_dataType == "") return;

            value = value.replace(/[\r\n]/g, '');
            //value = value.replace(/\s/g, "");
            value = jQuery.trim(value);

            var dataTypes = _dataType.split(",");
            this.foundError = false;

            for (var j = 0; j < dataTypes.length; j++) {
                switch (dataTypes[j]) {
                    case "Date" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "[" + getAttribute("labelText") + "] " + this.getMessage1(this[dataTypes[j] + "Str"], value));
                            this.foundError = true;
                        }
                        break;
                    case "DateTime" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage1(
                                    this[dataTypes[j] + "Str"],
                                    value));
                            this.foundError = true;
                        }
                        break;
                    case "DateTime_Minute" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage1(
                                    this[dataTypes[j] + "Str"],
                                    value));
                            this.foundError = true;
                        }
                        break;
                    case "Repeat" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText") + "] "
                                    + this[dataTypes[j] + "Str"]);
                            this.foundError = true;
                        }
                        break;

                    case "Range" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage2(
                                    this[dataTypes[j] + "Str"],
                                    getAttribute("min"),
                                    getAttribute("max")));
                            this.foundError = true;
                        }
                        break;

                    case "Compare" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage2(
                                    this[dataTypes[j] + "Str"],
                                    this.CompareOp,
                                    getAttribute("to")));
                            this.foundError = true;
                        }
                        break;

                    case "CompareDate" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage3(
                                    this[dataTypes[j] + "Str"],
                                    getAttribute("labelText"),
                                    this.CompareOp,
                                    getAttribute("to")));
                            this.foundError = true;
                        }
                        break;

                    case "CompareDateTime" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage3(
                                    this[dataTypes[j] + "Str"],
                                    getAttribute("labelText"),
                                    this.CompareOp,
                                    getAttribute("to")));
                            this.foundError = true;
                        }
                        break;

                    case "CompareDateTime_Minute" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage3(
                                    this[dataTypes[j] + "Str"],
                                    getAttribute("labelText"),
                                    this.CompareOp,
                                    getAttribute("to")));
                            this.foundError = true;
                        }
                        break;

                    case "DateTime_Hour" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage1(
                                    this[dataTypes[j] + "Str"],
                                    value));
                            this.foundError = true;
                        }
                        break;

                    case "CompareInteger" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage3(
                                    this[dataTypes[j] + "Str"],
                                    getAttribute("labelText"),
                                    this.CompareOp,
                                    getAttribute("to")));
                            this.foundError = true;
                        }
                        break;

                    case "Fzjg" :
                    case "SFZH" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage1(
                                    this[dataTypes[j] + "Str"],
                                    value));
                            this.foundError = true;
                        }
                        break;

                    case "Custom" :
                        if (!eval(this[dataTypes[j]]) && !value == "") {

                            this.AddError(theCtrl, "[" + getAttribute("labelText") + "]" + getAttribute("errormessage"));
                            this.foundError = true;
                        }
                        break;

                    case "Group" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText") + "] "
                                    + this[dataTypes[j] + "Str"]);
                            this.foundError = true;
                        }
                        break;

                    case "Limit" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage2(
                                    this[dataTypes[j] + "Str"],
                                    getAttribute("min"),
                                    getAttribute("max")));
                            this.foundError = true;
                        }
                        break;

                    case "LimitB" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage2(
                                    this[dataTypes[j] + "Str"],
                                    getAttribute("min"),
                                    getAttribute("max")));
                            this.foundError = true;
                        }
                        break;
                    case "Double" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage3(
                                    this[dataTypes[j] + "Str"],
                                    value, getAttribute("max"),
                                    getAttribute("min")));
                            this.foundError = true;
                        }
                        break;
                    case "LimitLength" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage1(
                                    this[dataTypes[j] + "Str"],
                                    getAttribute("min")));
                            this.foundError = true;
                        }
                        break;
                    case "LimitLengthB" :
                        if (!eval(this[dataTypes[j]])) {
                            this
                                    .AddError(
                                    theCtrl,
                                    "["
                                            + getAttribute("labelText")
                                            + "] "
                                            + this
                                            .getMessage1(
                                            this[dataTypes[j]
                                                    + "Str"],
                                            Math
                                                    .floor(parseInt(getAttribute("max")))));
                            this.foundError = true;
                        }
                        break;

                    case "NotExists" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage1(
                                    this[dataTypes[j] + "Str"],
                                    value));
                            this.foundError = true;
                        }
                        break;

                    case "SafeString" :
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText") + "] "
                                    + this[dataTypes[j] + "Str"]);
                            this.foundError = true;
                        }
                        break;
                    case "NotIncludeSpe":
                        if (!eval(this[dataTypes[j]])) {
                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText") + "] "
                                    + this[dataTypes[j] + "Str"]);
                            this.foundError = true;
                        }
                        break;
                    default :
                        if (this[dataTypes[j]] == null) {
                            alert("不支持的校验类型:" + dataTypes[j]);
                            break;
                        }
                        if (!this[dataTypes[j]].test(value)) {
                            if (!(dataTypes[j] == "Require") && value == "") break;

                            this.AddError(theCtrl, "["
                                    + getAttribute("labelText")
                                    + "] "
                                    + this.getMessage1(
                                    this[dataTypes[j] + "Str"],
                                    value));
                            this.foundError = true;
                        }
                        break;
                }

                if (this.foundError)
                    break;
            }
        }
    },
    processMsg : function(mode) {
        var bResult = true;
        //alert('哥来了！');
        if (this.ErrorMessage.length > 1) {
            bResult = false;
            mode = mode || 1;
            var tab;
            var tabNum;
            var errCount = this.ErrorItem.length;
            switch (mode) {
                case 2 :
                    for (var i = 1; i < errCount; i++)
                        this.ErrorItem[i].style.color = "red";
                case 1 :
                    //alert(this.ErrorMessage.join("\n"));
                    var msg = document.getElementById('msg');
                    msg.innerHTML = this.ErrorMessage.join("  ");
                    this.ErrorItem[1].style.color = "red";
                    if (this.ErrorItem[1] != null) {
                        tabNum = this.ErrorItem[1].getAttribute("tabNum");
                        if (typeof(tabNum) != "object") {
                            tab = "tabit(tabt" + tabNum + ",tab" + tabNum + ")";
                            eval(tab);
                        }
                        this.ErrorItem[1].focus();
                        if (this.ErrorItem[1].type.toUpperCase() == "TEXT")
                            this.ErrorItem[1].select();
                    }
                    break;
                case 3 :
                    for (var i = 1; i < errCount; i++) {
                        try {
                            var span = document.createElement("SPAN");
                            span.id = "__ErrorMessagePanel";
                            span.style.color = "red";
                            this.ErrorItem[i].parentNode.appendChild(span);
                            span.innerHTML = this.ErrorMessage[i].replace(
                                    /\d+:/, "*");
                        } catch (e) {
                            alert(e.description);
                        }
                    }

                    this.ErrorItem[1].focus();
                    break;
                default :

                    //alert(this.ErrorMessage.join("\n"));
                    var msg = document.getElementById('msg');
                    msg.innerHTML = this.ErrorMessage.join("\n");
                    break;
            }

        }
        return bResult;
    },
    limit : function(len, min, max) {
        min = min || 0;
        max = max || Number.MAX_VALUE;
        return min <= len && len <= max;
    },
    limitLength : function(len, min) {
        min = min || 0;
        return min == len;
    },
    limitLengthB : function(len, max) {
        max = max || 20;
        return len <= max;
    },
    notExists : function(value1, form1, name1) {
        var obj = form1;
        var count = obj.elements.length;
        var foundCnt = 0;

        for (var i = 0; i < count; i++) {
            if (obj.elements[i].name != name1
                    || obj.elements[i].value != value1) {
                continue;
            }

            foundCnt++;

            if (foundCnt > 1)
                break;
        }

        return (foundCnt <= 1);

    },
    getMessage1 : function(str, repstr1) {
        return str.replace(/s1/g, repstr1);
    },
    getMessage2 : function(str, repstr1, repstr2) {
        retStr = str.replace(/s1/g, repstr1);
        retStr = retStr.replace(/s2/g, repstr2);

        return retStr;
    },
    getMessage3 : function(str, repstr1, repstr2, repstr3) {
        var dataobj = document.getElementsByName(repstr3)[0];

        if (typeof(dataobj) == "object")
            repstr3 = dataobj.getAttribute("labelText");
        retStr = str.replace(/s1/g, repstr1);
        retStr = retStr.replace(/s2/g, repstr2);
        retStr = retStr.replace(/s3/g, repstr3);

        return retStr;
    },
    LenB : function(str) {
        return str.replace(/[^\x00-\xff]/g, "**").length;
    },
    ClearState : function(elem) {
        with (elem) {
            if (style.color == "red")
                style.color = "";
            var lastNode = parentNode.childNodes[parentNode.childNodes.length
                    - 1];
            if (lastNode.id == "__ErrorMessagePanel")
                parentNode.removeChild(lastNode);
        }
    },
    AddError : function(ctrl, str) {

        this.ErrorItem[this.ErrorItem.length] = ctrl;
        this.ErrorMessage[this.ErrorMessage.length] = this.ErrorMessage.length
                + ":" + str;
    },
    Exec : function(op, reg) {

//		return new RegExp(reg, "g").test(op);
        alert(reg);
        alert(op);
        return eval(reg).test(op);
    },
    compare : function(op1, operator, op2) {
        switch (operator) {
            case "NotEqual" :
                this.CompareOp = "不等于";
                return (op1 != op2);
            case "GreaterThan" :
                this.CompareOp = "大于";
                return (op1 > op2);
            case "GreaterThanEqual" :
                this.CompareOp = "大于等于";
                return (op1 >= op2);
            case "LessThan" :
                this.CompareOp = "小于";
                return (op1 < op2);
            case "LessThanEqual" :
                this.CompareOp = "小于等于";
                return (op1 <= op2);
            default :
                this.CompareOp = "等于";
                return (op1 == op2);
        }
    },
    compareDate : function(op1, operator, op2) {
        var dateStr1 = op1;
        var dataStr2;
        var bOp2Null = false;

        var dataobj = document.getElementsByName(op2)[0];

        if (typeof(dataobj) == "object")
            dateStr2 = dataobj.value;
        else
            dateStr2 = op2;

        if (dateStr2 == "") {
            dataStr2 = "19000101";
            bOp2Null = true;
        }

        dateStr1 = dateStr1.replace(/[-.: ]/g, "");
        dateStr2 = dateStr2.replace(/[-.: ]/g, "");

        dateStr1 = dateStr1.substr(0, 8);
        dateStr2 = dateStr2.substr(0, 8);

        var mResult1, mResult2;
        var year1, month1, day1;
        var year2, month2, day2;

        mResult1 = dateStr1
                .match(new RegExp("^(\\d{4})[-./]?(\\d{2})[-./]?(\\d{2})$"));
        mResult2 = dateStr2
                .match(new RegExp("^(\\d{4})[-./]?(\\d{2})[-./]?(\\d{2})$"));

        if (mResult1 == null)
            return false;
        if (mResult2 == null)
            return false;

        year1 = parseInt(mResult1[1], 10);
        month1 = parseInt(mResult1[2], 10);
        day1 = parseInt(mResult1[3], 10);
        year2 = parseInt(mResult2[1], 10);
        month2 = parseInt(mResult2[2], 10);
        day2 = parseInt(mResult2[3], 10);

        var date1 = new Date(year1, month1, day1);
        var date2 = new Date(year2, month2, day2);

        switch (operator) {
            case "NotEqual" :
                this.CompareOp = "不等于";
                if (bOp2Null)
                    return true;
                return (date1 != date2);
            case "GreaterThan" :
                this.CompareOp = "大于";
                if (bOp2Null)
                    return true;
                return (date1 > date2);
            case "GreaterThanEqual" :
                this.CompareOp = "大于等于";
                if (bOp2Null)
                    return true;
                return (date1 >= date2);
            case "LessThan" :
                this.CompareOp = "小于";
                if (bOp2Null)
                    return false;
                return (date1 < date2);
            case "LessThanEqual" :
                this.CompareOp = "小于等于";
                if (bOp2Null)
                    return false;
                return (date1 <= date2);
            default :
                this.CompareOp = "等于";
                if (bOp2Null)
                    return false;
                return (date1 == date2);
        }
    },
    compareDateTime : function(op1, operator, op2) {
        var dateStr1 = op1;
        var dataStr2;
        var bOp2Null = false;
        var dataobj = document.getElementsByName(op2)[0];

        if (typeof(dataobj) == "object")
            dateStr2 = dataobj.value;
        else
            dateStr2 = op2;

        if (dataStr2 == "") {
            dataStr2 = "1900/01/01 00:00:00";
            bOp2Null = true;
        }

        dateStr1 = dateStr1.replace(/[-.: ]/g, "");
        dateStr2 = dateStr2.replace(/[-.: ]/g, "");
        dateStr1 = dateStr1.substr(0, 12);
        dateStr2 = dateStr2.substr(0, 12);

        var mResult1, mResult2;
        var year1, month1, day1, hour1, minute1, second1;
        var year2, month2, day2, hour2, minute3, second4;

        mResult1 = dateStr1
                .match(new RegExp("^(\\d{4})[-./]?(\\d{2})[-./]?(\\d{2})[\\s]?(\\d{2})[:]?(\\d{2})[:]?(\\d{2})$"));
        mResult2 = dateStr2
                .match(new RegExp("^(\\d{4})[-./]?(\\d{2})[-./]?(\\d{2})[\\s]?(\\d{2})[:]?(\\d{2})[:]?(\\d{2})$"));
        if (mResult1 == null)
            return false;
        if (mResult2 == null)
            return false;

        year1 = parseInt(mResult1[1], 10);
        month1 = parseInt(mResult1[2], 10);
        day1 = parseInt(mResult1[3], 10);
        hour1 = parseInt(mResult1[4], 10);
        minute1 = parseInt(mResult1[5], 10);
        second1 = parseInt(mResult1[6], 10);

        year2 = parseInt(mResult2[1], 10);
        month2 = parseInt(mResult2[2], 10);
        day2 = parseInt(mResult2[3], 10);
        hour2 = parseInt(mResult2[4], 10);
        minute2 = parseInt(mResult2[5], 10);
        second2 = parseInt(mResult2[6], 10);

        var date1 = new Date(year1, month1, day1, hour1, minute1, second1);
        var date2 = new Date(year2, month2, day2, hour2, minute2, second2);

        switch (operator) {
            case "NotEqual" :
                this.CompareOp = "不等于";
                if (bOp2Null)
                    return true;
                return (date1 != date2);
            case "GreaterThan" :
                this.CompareOp = "大于";
                if (bOp2Null)
                    return true;
                return (date1 > date2);
            case "GreaterThanEqual" :
                this.CompareOp = "大于等于";
                if (bOp2Null)
                    return true;
                return (date1 >= date2);
            case "LessThan" :
                this.CompareOp = "小于";
                if (bOp2Null)
                    return false;
                return (date1 < date2);
            case "LessThanEqual" :
                this.CompareOp = "小于等于";
                if (bOp2Null)
                    return false;
                return (date1 <= date2);
            default :
                this.CompareOp = "等于";
                if (bOp2Null)
                    return false;
                return (date1 == date2);
        }
    },

    compareDateTime_Minute : function(op1, operator, op2) {
        var dateStr1 = op1;
        var dataStr2;
        var bOp2Null = false;

        var dataobj = document.getElementsByName(op2)[0];

        if (typeof(dataobj) == "object")
            dateStr2 = dataobj.value;
        else
            dateStr2 = op2;

        if (dataStr2 == "") {
            dataStr2 = "1900/01/01 00:00";
            bOp2Null = true;
        }

        dateStr1 = dateStr1.replace(/[-.: ]/g, "");
        dateStr2 = dateStr2.replace(/[-.: ]/g, "");
        dateStr1 = dateStr1.substr(0, 12);
        dateStr2 = dateStr2.substr(0, 12);
        var mResult1, mResult2;
        var year1, month1, day1, hour1, minute1, second1;
        var year2, month2, day2, hour2, minute3, second4;

        mResult1 = dateStr1
                .match(new RegExp("^(\\d{4})[-./]?(\\d{2})[-./]?(\\d{2})[\\s]?(\\d{2})[:]?(\\d{2})$"));
        mResult2 = dateStr2
                .match(new RegExp("^(\\d{4})[-./]?(\\d{2})[-./]?(\\d{2})[\\s]?(\\d{2})[:]?(\\d{2})$"));

        if (mResult1 == null)
            return false;
        if (mResult2 == null)
            return false;

        year1 = parseInt(mResult1[1], 10);
        month1 = parseInt(mResult1[2], 10);
        day1 = parseInt(mResult1[3], 10);
        hour1 = parseInt(mResult1[4], 10);
        minute1 = parseInt(mResult1[5], 10);
        second1 = 0;

        year2 = parseInt(mResult2[1], 10);
        month2 = parseInt(mResult2[2], 10);
        day2 = parseInt(mResult2[3], 10);
        hour2 = parseInt(mResult2[4], 10);
        minute2 = parseInt(mResult2[5], 10);
        second2 = 0;

        var date1 = new Date(year1, month1, day1, hour1, minute1, second1);
        var date2 = new Date(year2, month2, day2, hour2, minute2, second2);

        switch (operator) {
            case "NotEqual" :
                this.CompareOp = "不等于";
                if (bOp2Null)
                    return true;
                return (date1 != date2);
            case "GreaterThan" :
                this.CompareOp = "大于";
                if (bOp2Null)
                    return true;
                return (date1 > date2);
            case "GreaterThanEqual" :
                this.CompareOp = "大于等于";
                if (bOp2Null)
                    return true;
                return (date1 >= date2);
            case "LessThan" :
                this.CompareOp = "小于";
                if (bOp2Null)
                    return false;
                return (date1 < date2);
            case "LessThanEqual" :
                this.CompareOp = "小于等于";
                if (bOp2Null)
                    return false;
                return (date1 <= date2);
            default :
                this.CompareOp = "等于";
                if (bOp2Null)
                    return false;
                return (date1 == date2);
        }
    },
    isDouble : function(op, max, min) {
        var reg = new RegExp("^([0-9]{1," + max + "}[.]{1}[0-9]{1," + min
                + "})$");
        var reg2 = new RegExp("^[0-9]{1," + max + "}$");

        return reg.test(op) || reg2.test(op);
    },
    compareInteger : function(op1, operator, op2) {
        var intStr1 = op1;
        var intStr2;
        var bOp2Null = false;

        var dataobj = document.getElementsByName(op2)[0];

        if (typeof(dataobj) == "object")
            intStr2 = dataobj.value;
        else
            intStr2 = op2;

        if (intStr2 == "") {
            intStr2 = "0";
            bOp2Null = true;
        }

        var int1 = parseInt(intStr1, 10);
        var int2 = parseInt(intStr2, 10);

        switch (operator) {
            case "NotEqual" :
                this.CompareOp = "不等于";
                if (bOp2Null)
                    return true;
                return (int1 != int2);
            case "GreaterThan" :
                this.CompareOp = "大于";
                if (bOp2Null)
                    return (int1 > 0);
                return (int1 > int2);
            case "GreaterThanEqual" :
                this.CompareOp = "大于等于";
                if (bOp2Null)
                    return (int1 >= 0);
                return (int1 >= int2);
            case "LessThan" :
                this.CompareOp = "小于";
                if (bOp2Null)
                    return false;
                return (int1 < int2);
            case "LessThanEqual" :
                this.CompareOp = "小于等于";
                if (bOp2Null)
                    return false;
                return (int1 <= int2);
            default :
                this.CompareOp = "等于";
                if (bOp2Null)
                    return false;
                return (int1 == int2);
        }
    },
    MustChecked : function(name, min, max) {
        var groups = document.getElementsByName(name);
        var hasChecked = 0;
        min = min || 1;
        max = max || groups.length;
        for (var i = groups.length - 1; i >= 0; i--)
            if (groups[i].checked)
                hasChecked++;
        return min <= hasChecked && hasChecked <= max;
    },
    IsDate : function(op, formatString) {
        formatString = formatString || "ymd";
        var m, year, month, day;
        switch (formatString) {
            case "ymd" :
                m = op
                        .match(new RegExp("^(\\d{4})[-./]?([0]{1}[1-9]{1}||[1]{1}[0-2]{1})[-./]?([0]{1}[1-9]{1}||[1]{1}[0-9]{1}||[2]{1}[0-9]{1}||[3]{1}[0-1]{1})$"));
                if (m == null)
                    return false;
                break;
            case "dmy" :
                m = op
                        .match(new RegExp("^(\\d{1,2})([-./])(\\d{1,2})\\2((\\d{4})|(\\d{2}))$"));
                if (m == null)
                    return false;

                break;
            default :
                break;
        }

        return true;
    },
    IsDateTime : function(op) {
        var m;
        // m = op.match(new
        // RegExp("^(\\d{4})[-./]?(\\d{2})[-./]?(\\d{2})[\\s]?(\\d{2})[:]?(\\d{2})[:]?(\\d{2})$"));
        m = op
                .match(new RegExp("^(\\d{4})[-./]?([0]{1}[1-9]{1}||[1]{1}[0-2]{1})[-./]?([0]{1}[1-9]{1}||[1]{1}[0-9]{1}||[2]{1}[0-9]{1}||[3]{1}[0-1]{1})[\\s]?([0-1]{1}[0-9]{1}||[2]{1}[0-3]{1})[:]?([0-5]{1}[0-9]{1})[:]?([0-5]{1}[0-9]{1})$"));
        if (m == null)
            return false;
        return true;
    },
    IsFzjg : function(op) {
        var m;
        m = op
                .match(new RegExp("[无]{1}$|^[藏川鄂甘赣桂贵黑沪吉冀津晋京辽鲁蒙闽宁青琼陕苏皖湘新渝豫粤云浙][A-Z0-9]{1}$"));
        if (m == null)
            return false;
        return true;
    },

    IsDateTime_Minute : function(op) {
        var m;
        m = op
                .match(new RegExp("^(\\d{4})[-./]?([0]{1}[1-9]{1}||[1]{1}[0-2]{1})[-./]?([0]{1}[1-9]{1}||[1]{1}[0-9]{1}||[2]{1}[0-9]{1}||[3]{1}[0-1]{1})[\\s]?([0-1]{1}[0-9]{1}||[2]{1}[0-3]{1})[:]?([0-5]{1}[0-9]{1})$"));
        if (m == null)
            return false;
        return true;
    },

    IsDateTime_Hour : function(op) {
        var m;
        m = op
                .match(new RegExp("^(\\d{4})[-./]?([0]{1}[1-9]{1}||[1]{1}[0-2]{1})[-./]?([0]{1}[1-9]{1}||[1]{1}[0-9]{1}||[2]{1}[0-9]{1}||[3]{1}[0-1]{1})[\\s]?([0-1]{1}[0-9]{1}||[2]{1}[0-3]{1})[:]?$"));
        if (m == null)
            return false;
        return true;
    },
    CheckTheEighteenth : function(SFZH) {
        var CheckCode; // 保存最后一位


        var OtherCode; // 保存其余位


        var Sum = 0; // 保存计数和


        var TempCode;
        var S = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
        var N = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2,
                1);

        OtherCode = SFZH.substring(0, 17);

        CheckCode = SFZH.substring(17, 18);

        for (var i = 0; i < 17; i++) {
            TempCode = OtherCode.substring(i, i + 1);

            Sum += parseInt(TempCode) * N[i];
        }
        if (S[Sum % 11] == CheckCode) {
            return true;
        } else {
            return false;
        }
    },
    isSFZH : function(id) {
        if (id == null || id == "") {
            return true;
        }

        if (id.length == 15) {
            if (isNaN(id)) {
                return false;
            }
            if (id.substring(8, 10) > 12 || id.substring(10, 12) > 31) {
                return false;
            }
        } else if (id.length == 18) {
            if (isNaN(id.substring(0, 17))
                    || (isNaN(id.substring(17, 18)) && id.substring(17, 18)
                    .toLowerCase() != "x")) {
                return false;
            }

            if (id.substring(10, 12) > 12 || id.substring(12, 14) > 31) {
                return false;
            }
            // 校验最后一位校验位
            if (!this.CheckTheEighteenth(id)) {
                return false;
            }
        } else {
            return false;
        }
        return true;
    }

}

function setReadOnlyByID(obj) {
    var objInput = obj.getElementsByTagName("INPUT");
    if (objInput != null) {
        for (i = 0; i < objInput.length; i++) {
            if (objInput[i].getAttribute("setunable") == "0")
                continue;
            if (objInput[i].getAttribute("type") == "text") {
                objInput[i].readOnly = true;
                objInput[i]["ondblclick"] = null;
            } else
                objInput[i].disabled = true;
        }
    }

    var objInput = obj.getElementsByTagName("SELECT");
    if (objInput != null) {
        for (i = 0; i < objInput.length; i++) {
            if (objInput[i].getAttribute("setunable") == "0")
                continue;
            objInput[i].disabled = true;
        }
    }

    var objInput = obj.getElementsByTagName("U");
    if (objInput != null) {
        for (i = 0; i < objInput.length; i++) {
            if (objInput[i].getAttribute("setunable") == "0")
                continue;
            objInput[i].style.display = "none";
        }
    }

    var objInput = obj.getElementsByTagName("BUTTON");
    if (objInput != null) {
        for (i = 0; i < objInput.length; i++) {
            if (objInput[i].getAttribute("setunable") == "0")
                continue;
            objInput[i].style.display = "none";
        }
    }

    var objInput = obj.getElementsByTagName("IMG");
    if (objInput != null) {
        for (i = 0; i < objInput.length; i++) {
            if (objInput[i].getAttribute("setunable") == "0")
                continue;
            objInput[i]["ondblclick"] = null;
        }
    }

    var objInput = obj.getElementsByTagName("TEXTAREA");
    if (objInput != null) {
        for (i = 0; i < objInput.length; i++) {
            if (objInput[i].getAttribute("setunable") == "0")
                continue;
            objInput[i].readOnly = true;
        }
    }
}