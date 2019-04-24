gdjs.MenuCode = {};
gdjs.MenuCode.GDvidaObjects1= [];
gdjs.MenuCode.GDvidaObjects2= [];
gdjs.MenuCode.GDvidaObjects3= [];
gdjs.MenuCode.GDfundoObjects1= [];
gdjs.MenuCode.GDfundoObjects2= [];
gdjs.MenuCode.GDfundoObjects3= [];
gdjs.MenuCode.GDarvore_95secaObjects1= [];
gdjs.MenuCode.GDarvore_95secaObjects2= [];
gdjs.MenuCode.GDarvore_95secaObjects3= [];
gdjs.MenuCode.GDcriObjects1= [];
gdjs.MenuCode.GDcriObjects2= [];
gdjs.MenuCode.GDcriObjects3= [];
gdjs.MenuCode.GDtile_952Objects1= [];
gdjs.MenuCode.GDtile_952Objects2= [];
gdjs.MenuCode.GDtile_952Objects3= [];
gdjs.MenuCode.GDtile_951Objects1= [];
gdjs.MenuCode.GDtile_951Objects2= [];
gdjs.MenuCode.GDtile_951Objects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.eventsList0x7ba390 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
if (gdjs.MenuCode.condition0IsTrue_0.val) {
{}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
if (gdjs.MenuCode.condition0IsTrue_0.val) {
{}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
if (gdjs.MenuCode.condition0IsTrue_0.val) {
{}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
if (gdjs.MenuCode.condition0IsTrue_0.val) {
{}}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{}}

}


}; //End of gdjs.MenuCode.eventsList0x7ba390
gdjs.MenuCode.eventsList0xb2a48 = function(runtimeScene) {

{



}


{



}


{


{
gdjs.MenuCode.GDvidaObjects1.createFrom(runtimeScene.getObjects("vida"));
{for(var i = 0, len = gdjs.MenuCode.GDvidaObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDvidaObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 3;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0x7ba390(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "t");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cemiterio", false);
}}

}


}; //End of gdjs.MenuCode.eventsList0xb2a48


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.MenuCode.GDvidaObjects1.length = 0;
gdjs.MenuCode.GDvidaObjects2.length = 0;
gdjs.MenuCode.GDvidaObjects3.length = 0;
gdjs.MenuCode.GDfundoObjects1.length = 0;
gdjs.MenuCode.GDfundoObjects2.length = 0;
gdjs.MenuCode.GDfundoObjects3.length = 0;
gdjs.MenuCode.GDarvore_95secaObjects1.length = 0;
gdjs.MenuCode.GDarvore_95secaObjects2.length = 0;
gdjs.MenuCode.GDarvore_95secaObjects3.length = 0;
gdjs.MenuCode.GDcriObjects1.length = 0;
gdjs.MenuCode.GDcriObjects2.length = 0;
gdjs.MenuCode.GDcriObjects3.length = 0;
gdjs.MenuCode.GDtile_952Objects1.length = 0;
gdjs.MenuCode.GDtile_952Objects2.length = 0;
gdjs.MenuCode.GDtile_952Objects3.length = 0;
gdjs.MenuCode.GDtile_951Objects1.length = 0;
gdjs.MenuCode.GDtile_951Objects2.length = 0;
gdjs.MenuCode.GDtile_951Objects3.length = 0;

gdjs.MenuCode.eventsList0xb2a48(runtimeScene);
return;
}
gdjs['MenuCode'] = gdjs.MenuCode;
