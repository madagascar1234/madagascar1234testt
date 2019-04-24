gdjs.SelecionarClasseCode = {};
gdjs.SelecionarClasseCode.GDvidaObjects1= [];
gdjs.SelecionarClasseCode.GDvidaObjects2= [];
gdjs.SelecionarClasseCode.GDfundoObjects1= [];
gdjs.SelecionarClasseCode.GDfundoObjects2= [];
gdjs.SelecionarClasseCode.GDarvore_95secaObjects1= [];
gdjs.SelecionarClasseCode.GDarvore_95secaObjects2= [];
gdjs.SelecionarClasseCode.GDcriObjects1= [];
gdjs.SelecionarClasseCode.GDcriObjects2= [];
gdjs.SelecionarClasseCode.GDtile_952Objects1= [];
gdjs.SelecionarClasseCode.GDtile_952Objects2= [];
gdjs.SelecionarClasseCode.GDtile_951Objects1= [];
gdjs.SelecionarClasseCode.GDtile_951Objects2= [];
gdjs.SelecionarClasseCode.GDSeleArcoObjects1= [];
gdjs.SelecionarClasseCode.GDSeleArcoObjects2= [];
gdjs.SelecionarClasseCode.GDSeleGueObjects1= [];
gdjs.SelecionarClasseCode.GDSeleGueObjects2= [];
gdjs.SelecionarClasseCode.GDSeleMageObjects1= [];
gdjs.SelecionarClasseCode.GDSeleMageObjects2= [];
gdjs.SelecionarClasseCode.GDbolamageObjects1= [];
gdjs.SelecionarClasseCode.GDbolamageObjects2= [];
gdjs.SelecionarClasseCode.GDbolaarcObjects1= [];
gdjs.SelecionarClasseCode.GDbolaarcObjects2= [];
gdjs.SelecionarClasseCode.GDbolagueObjects1= [];
gdjs.SelecionarClasseCode.GDbolagueObjects2= [];
gdjs.SelecionarClasseCode.GDPlayObjects1= [];
gdjs.SelecionarClasseCode.GDPlayObjects2= [];

gdjs.SelecionarClasseCode.conditionTrue_0 = {val:false};
gdjs.SelecionarClasseCode.condition0IsTrue_0 = {val:false};
gdjs.SelecionarClasseCode.condition1IsTrue_0 = {val:false};
gdjs.SelecionarClasseCode.condition2IsTrue_0 = {val:false};
gdjs.SelecionarClasseCode.condition3IsTrue_0 = {val:false};


gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleArcoObjects1Objects = Hashtable.newFrom({"SeleArco": gdjs.SelecionarClasseCode.GDSeleArcoObjects1});gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleMageObjects1Objects = Hashtable.newFrom({"SeleMage": gdjs.SelecionarClasseCode.GDSeleMageObjects1});gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleGueObjects1Objects = Hashtable.newFrom({"SeleGue": gdjs.SelecionarClasseCode.GDSeleGueObjects1});gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleArcoObjects1Objects = Hashtable.newFrom({"SeleArco": gdjs.SelecionarClasseCode.GDSeleArcoObjects1});gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleMageObjects1Objects = Hashtable.newFrom({"SeleMage": gdjs.SelecionarClasseCode.GDSeleMageObjects1});gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleGueObjects1Objects = Hashtable.newFrom({"SeleGue": gdjs.SelecionarClasseCode.GDSeleGueObjects1});gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleArcoObjects1Objects = Hashtable.newFrom({"SeleArco": gdjs.SelecionarClasseCode.GDSeleArcoObjects1});gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleMageObjects1Objects = Hashtable.newFrom({"SeleMage": gdjs.SelecionarClasseCode.GDSeleMageObjects1});gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleGueObjects1Objects = Hashtable.newFrom({"SeleGue": gdjs.SelecionarClasseCode.GDSeleGueObjects1});gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.SelecionarClasseCode.GDPlayObjects1});gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.SelecionarClasseCode.GDPlayObjects1});gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.SelecionarClasseCode.GDPlayObjects1});gdjs.SelecionarClasseCode.eventsList0xb2a48 = function(runtimeScene) {

{



}


{


{
gdjs.SelecionarClasseCode.GDbolaarcObjects1.createFrom(runtimeScene.getObjects("bolaarc"));
gdjs.SelecionarClasseCode.GDbolagueObjects1.createFrom(runtimeScene.getObjects("bolague"));
gdjs.SelecionarClasseCode.GDbolamageObjects1.createFrom(runtimeScene.getObjects("bolamage"));
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolaarcObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolaarcObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolamageObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolamageObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolagueObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolagueObjects1[i].hide();
}
}}

}


{

gdjs.SelecionarClasseCode.GDSeleArcoObjects1.createFrom(runtimeScene.getObjects("SeleArco"));

gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleArcoObjects1Objects, runtimeScene, true, false);
}if (gdjs.SelecionarClasseCode.condition0IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDbolaarcObjects1.createFrom(runtimeScene.getObjects("bolaarc"));
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolaarcObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolaarcObjects1[i].hide(false);
}
}}

}


{

gdjs.SelecionarClasseCode.GDSeleMageObjects1.createFrom(runtimeScene.getObjects("SeleMage"));

gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleMageObjects1Objects, runtimeScene, true, false);
}if (gdjs.SelecionarClasseCode.condition0IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDbolamageObjects1.createFrom(runtimeScene.getObjects("bolamage"));
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolamageObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolamageObjects1[i].hide(false);
}
}}

}


{

gdjs.SelecionarClasseCode.GDSeleGueObjects1.createFrom(runtimeScene.getObjects("SeleGue"));

gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleGueObjects1Objects, runtimeScene, true, false);
}if (gdjs.SelecionarClasseCode.condition0IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDbolagueObjects1.createFrom(runtimeScene.getObjects("bolague"));
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolagueObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolagueObjects1[i].hide(false);
}
}}

}


{



}


{


gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.SelecionarClasseCode.condition0IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDbolaarcObjects1.createFrom(runtimeScene.getObjects("bolaarc"));
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolaarcObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolaarcObjects1[i].hide(false);
}
}}

}


{


gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 2;
}if (gdjs.SelecionarClasseCode.condition0IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDbolamageObjects1.createFrom(runtimeScene.getObjects("bolamage"));
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolamageObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolamageObjects1[i].hide(false);
}
}}

}


{


gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 3;
}if (gdjs.SelecionarClasseCode.condition0IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDbolagueObjects1.createFrom(runtimeScene.getObjects("bolague"));
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolagueObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolagueObjects1[i].hide(false);
}
}}

}


{



}


{

gdjs.SelecionarClasseCode.GDSeleArcoObjects1.createFrom(runtimeScene.getObjects("SeleArco"));

gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1);
}if ( gdjs.SelecionarClasseCode.condition0IsTrue_0.val ) {
{
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleArcoObjects1Objects, runtimeScene, true, true);
}}
if (gdjs.SelecionarClasseCode.condition1IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDbolaarcObjects1.createFrom(runtimeScene.getObjects("bolaarc"));
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolaarcObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolaarcObjects1[i].hide();
}
}}

}


{

gdjs.SelecionarClasseCode.GDSeleMageObjects1.createFrom(runtimeScene.getObjects("SeleMage"));

gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 2);
}if ( gdjs.SelecionarClasseCode.condition0IsTrue_0.val ) {
{
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleMageObjects1Objects, runtimeScene, true, true);
}}
if (gdjs.SelecionarClasseCode.condition1IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDbolamageObjects1.createFrom(runtimeScene.getObjects("bolamage"));
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolamageObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolamageObjects1[i].hide();
}
}}

}


{

gdjs.SelecionarClasseCode.GDSeleGueObjects1.createFrom(runtimeScene.getObjects("SeleGue"));

gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 3);
}if ( gdjs.SelecionarClasseCode.condition0IsTrue_0.val ) {
{
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleGueObjects1Objects, runtimeScene, true, true);
}}
if (gdjs.SelecionarClasseCode.condition1IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDbolagueObjects1.createFrom(runtimeScene.getObjects("bolague"));
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolagueObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolagueObjects1[i].hide();
}
}}

}


{



}


{


gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1);
}if (gdjs.SelecionarClasseCode.condition0IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDbolaarcObjects1.createFrom(runtimeScene.getObjects("bolaarc"));
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolaarcObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolaarcObjects1[i].setAnimationName("b1");
}
}}

}


{


gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 2);
}if (gdjs.SelecionarClasseCode.condition0IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDbolamageObjects1.createFrom(runtimeScene.getObjects("bolamage"));
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolamageObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolamageObjects1[i].setAnimationName("b1");
}
}}

}


{


gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 3);
}if (gdjs.SelecionarClasseCode.condition0IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDbolagueObjects1.createFrom(runtimeScene.getObjects("bolague"));
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolagueObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolagueObjects1[i].setAnimationName("b1");
}
}}

}


{



}


{

gdjs.SelecionarClasseCode.GDSeleArcoObjects1.createFrom(runtimeScene.getObjects("SeleArco"));

gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SelecionarClasseCode.condition0IsTrue_0.val ) {
{
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleArcoObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.SelecionarClasseCode.condition1IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDbolaarcObjects1.createFrom(runtimeScene.getObjects("bolaarc"));
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolaarcObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolaarcObjects1[i].setAnimationName("b2");
}
}}

}


{

gdjs.SelecionarClasseCode.GDSeleMageObjects1.createFrom(runtimeScene.getObjects("SeleMage"));

gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SelecionarClasseCode.condition0IsTrue_0.val ) {
{
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleMageObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.SelecionarClasseCode.condition1IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDbolamageObjects1.createFrom(runtimeScene.getObjects("bolamage"));
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(2);
}{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolamageObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolamageObjects1[i].setAnimationName("b2");
}
}}

}


{

gdjs.SelecionarClasseCode.GDSeleGueObjects1.createFrom(runtimeScene.getObjects("SeleGue"));

gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SelecionarClasseCode.condition0IsTrue_0.val ) {
{
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDSeleGueObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.SelecionarClasseCode.condition1IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDbolagueObjects1.createFrom(runtimeScene.getObjects("bolague"));
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(3);
}{for(var i = 0, len = gdjs.SelecionarClasseCode.GDbolagueObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDbolagueObjects1[i].setAnimationName("b2");
}
}}

}


{



}


{


gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if (gdjs.SelecionarClasseCode.condition0IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDPlayObjects1.createFrom(runtimeScene.getObjects("Play"));
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDPlayObjects1[i].setAnimationName("boto1");
}
}}

}


{


gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if (gdjs.SelecionarClasseCode.condition0IsTrue_0.val) {
gdjs.SelecionarClasseCode.GDPlayObjects1.createFrom(runtimeScene.getObjects("Play"));
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDPlayObjects1[i].setAnimationName("boto1");
}
}}

}


{

gdjs.SelecionarClasseCode.GDPlayObjects1.createFrom(runtimeScene.getObjects("Play"));

gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 0;
}if ( gdjs.SelecionarClasseCode.condition0IsTrue_0.val ) {
{
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.SelecionarClasseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SelecionarClasseCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDPlayObjects1[i].setAnimationName("boto3");
}
}}

}


{

gdjs.SelecionarClasseCode.GDPlayObjects1.createFrom(runtimeScene.getObjects("Play"));

gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 0;
}if ( gdjs.SelecionarClasseCode.condition0IsTrue_0.val ) {
{
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDPlayObjects1Objects, runtimeScene, true, true);
}}
if (gdjs.SelecionarClasseCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SelecionarClasseCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.SelecionarClasseCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.SelecionarClasseCode.GDPlayObjects1[i].setAnimationName("boto2");
}
}}

}


{

gdjs.SelecionarClasseCode.GDPlayObjects1.createFrom(runtimeScene.getObjects("Play"));

gdjs.SelecionarClasseCode.condition0IsTrue_0.val = false;
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = false;
gdjs.SelecionarClasseCode.condition2IsTrue_0.val = false;
{
gdjs.SelecionarClasseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 0;
}if ( gdjs.SelecionarClasseCode.condition0IsTrue_0.val ) {
{
gdjs.SelecionarClasseCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SelecionarClasseCode.condition1IsTrue_0.val ) {
{
gdjs.SelecionarClasseCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SelecionarClasseCode.mapOfGDgdjs_46SelecionarClasseCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}}
}
if (gdjs.SelecionarClasseCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cemiterio", false);
}}

}


}; //End of gdjs.SelecionarClasseCode.eventsList0xb2a48


gdjs.SelecionarClasseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.SelecionarClasseCode.GDvidaObjects1.length = 0;
gdjs.SelecionarClasseCode.GDvidaObjects2.length = 0;
gdjs.SelecionarClasseCode.GDfundoObjects1.length = 0;
gdjs.SelecionarClasseCode.GDfundoObjects2.length = 0;
gdjs.SelecionarClasseCode.GDarvore_95secaObjects1.length = 0;
gdjs.SelecionarClasseCode.GDarvore_95secaObjects2.length = 0;
gdjs.SelecionarClasseCode.GDcriObjects1.length = 0;
gdjs.SelecionarClasseCode.GDcriObjects2.length = 0;
gdjs.SelecionarClasseCode.GDtile_952Objects1.length = 0;
gdjs.SelecionarClasseCode.GDtile_952Objects2.length = 0;
gdjs.SelecionarClasseCode.GDtile_951Objects1.length = 0;
gdjs.SelecionarClasseCode.GDtile_951Objects2.length = 0;
gdjs.SelecionarClasseCode.GDSeleArcoObjects1.length = 0;
gdjs.SelecionarClasseCode.GDSeleArcoObjects2.length = 0;
gdjs.SelecionarClasseCode.GDSeleGueObjects1.length = 0;
gdjs.SelecionarClasseCode.GDSeleGueObjects2.length = 0;
gdjs.SelecionarClasseCode.GDSeleMageObjects1.length = 0;
gdjs.SelecionarClasseCode.GDSeleMageObjects2.length = 0;
gdjs.SelecionarClasseCode.GDbolamageObjects1.length = 0;
gdjs.SelecionarClasseCode.GDbolamageObjects2.length = 0;
gdjs.SelecionarClasseCode.GDbolaarcObjects1.length = 0;
gdjs.SelecionarClasseCode.GDbolaarcObjects2.length = 0;
gdjs.SelecionarClasseCode.GDbolagueObjects1.length = 0;
gdjs.SelecionarClasseCode.GDbolagueObjects2.length = 0;
gdjs.SelecionarClasseCode.GDPlayObjects1.length = 0;
gdjs.SelecionarClasseCode.GDPlayObjects2.length = 0;

gdjs.SelecionarClasseCode.eventsList0xb2a48(runtimeScene);
return;
}
gdjs['SelecionarClasseCode'] = gdjs.SelecionarClasseCode;
