/**
 * �ύ������Ҫʹ����queryҳ��
 * @param formName
 * @param actionName
 */
function submitForm(formName, actionName) {
    document.getElementById(formName).action = actionName;
    document.getElementById(formName).method = "post";
    document.getElementById(formName).submit();
}

/**
 * ѡ�У�ȡ��ȫ��checkbox�ķ���
 * @param obj
 * @param fieldName
 */
function checkAll(obj, fieldName) {
    if (obj.checked) {
        $("input[name='" + fieldName + "']").each(function() {
            this.checked = true;
        });
    } else {
        $("input[name='" + fieldName + "']").each(function() {
            this.checked = false;
        });
    }
}
function selectAll(checkname, boo){
    var checks =$("input[name='" + checkname + "']");
    $(checks).each(function(){
        $(this).attr("checked", boo);
    })  ;
}
function selectedCheckbox(checkname, split){
    var result = "";
    var checks =$("input[name='" + checkname + "'][@checked]");
    $(checks).each(function(){
        if($(this).attr("checked")){
            result += $(this).val() + split;
        }
    });
    return result;
}
function allCheckbox(checkname, split){
    var result = "";
    var checks = $("input[name='" + checkname + "']");
    $(checks).each(function(){
        result += $(this).val() + split;
    });
    return result;
}
/**
 * �ж�����ѡ��1��
 * @param fieldName
 */
function count_sel(fieldName) {
    var checked_num = $("input[name='" + fieldName + "']:checked").length;

    if (checked_num == 0) {
        alert('������ѡ��һ�');
        return false;
    }
    return true;
}

function submitFormInit(formName, actionName) {
    document.getElementById(formName).action = actionName+"?initpage=1";
    document.getElementById(formName).method = "post";
    document.getElementById(formName).submit();
}


