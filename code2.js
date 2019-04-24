gdjs.CemiterioCode = {};
gdjs.CemiterioCode.GDvidaObjects1= [];
gdjs.CemiterioCode.GDvidaObjects2= [];
gdjs.CemiterioCode.GDvidaObjects3= [];
gdjs.CemiterioCode.GDfundoObjects1= [];
gdjs.CemiterioCode.GDfundoObjects2= [];
gdjs.CemiterioCode.GDfundoObjects3= [];
gdjs.CemiterioCode.GDarvore_95secaObjects1= [];
gdjs.CemiterioCode.GDarvore_95secaObjects2= [];
gdjs.CemiterioCode.GDarvore_95secaObjects3= [];
gdjs.CemiterioCode.GDcriObjects1= [];
gdjs.CemiterioCode.GDcriObjects2= [];
gdjs.CemiterioCode.GDcriObjects3= [];
gdjs.CemiterioCode.GDtile_952Objects1= [];
gdjs.CemiterioCode.GDtile_952Objects2= [];
gdjs.CemiterioCode.GDtile_952Objects3= [];
gdjs.CemiterioCode.GDtile_951Objects1= [];
gdjs.CemiterioCode.GDtile_951Objects2= [];
gdjs.CemiterioCode.GDtile_951Objects3= [];
gdjs.CemiterioCode.GDskin_95playerObjects1= [];
gdjs.CemiterioCode.GDskin_95playerObjects2= [];
gdjs.CemiterioCode.GDskin_95playerObjects3= [];
gdjs.CemiterioCode.GDinimigo_951Objects1= [];
gdjs.CemiterioCode.GDinimigo_951Objects2= [];
gdjs.CemiterioCode.GDinimigo_951Objects3= [];
gdjs.CemiterioCode.GDplayer_95boxObjects1= [];
gdjs.CemiterioCode.GDplayer_95boxObjects2= [];
gdjs.CemiterioCode.GDplayer_95boxObjects3= [];
gdjs.CemiterioCode.GDIcoVidaObjects1= [];
gdjs.CemiterioCode.GDIcoVidaObjects2= [];
gdjs.CemiterioCode.GDIcoVidaObjects3= [];
gdjs.CemiterioCode.GDBau_951Objects1= [];
gdjs.CemiterioCode.GDBau_951Objects2= [];
gdjs.CemiterioCode.GDBau_951Objects3= [];
gdjs.CemiterioCode.GDIconGoldObjects1= [];
gdjs.CemiterioCode.GDIconGoldObjects2= [];
gdjs.CemiterioCode.GDIconGoldObjects3= [];

gdjs.CemiterioCode.conditionTrue_0 = {val:false};
gdjs.CemiterioCode.condition0IsTrue_0 = {val:false};
gdjs.CemiterioCode.condition1IsTrue_0 = {val:false};
gdjs.CemiterioCode.condition2IsTrue_0 = {val:false};


gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDplayer_9595boxObjects1Objects = Hashtable.newFrom({"player_box": gdjs.CemiterioCode.GDplayer_95boxObjects1});gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDinimigo_95951Objects1Objects = Hashtable.newFrom({"inimigo_1": gdjs.CemiterioCode.GDinimigo_951Objects1});gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDinimigo_95951Objects2Objects = Hashtable.newFrom({"inimigo_1": gdjs.CemiterioCode.GDinimigo_951Objects2});gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDplayer_9595boxObjects2Objects = Hashtable.newFrom({"player_box": gdjs.CemiterioCode.GDplayer_95boxObjects2});gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDplayer_9595boxObjects2Objects = Hashtable.newFrom({"player_box": gdjs.CemiterioCode.GDplayer_95boxObjects2});gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDinimigo_95951Objects2Objects = Hashtable.newFrom({"inimigo_1": gdjs.CemiterioCode.GDinimigo_951Objects2});gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDinimigo_95951Objects1Objects = Hashtable.newFrom({"inimigo_1": gdjs.CemiterioCode.GDinimigo_951Objects1});gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDplayer_9595boxObjects1Objects = Hashtable.newFrom({"player_box": gdjs.CemiterioCode.GDplayer_95boxObjects1});gdjs.CemiterioCode.eventsList0x7b4ea8 = function(runtimeScene) {

{

gdjs.CemiterioCode.GDinimigo_951Objects2.createFrom(gdjs.CemiterioCode.GDinimigo_951Objects1);

gdjs.CemiterioCode.GDplayer_95boxObjects2.createFrom(gdjs.CemiterioCode.GDplayer_95boxObjects1);


gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.object.turnedTowardTest(gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDinimigo_95951Objects2Objects, gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDplayer_9595boxObjects2Objects, 4, false);
}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CemiterioCode.GDinimigo_951Objects2 */
{for(var i = 0, len = gdjs.CemiterioCode.GDinimigo_951Objects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDinimigo_951Objects2[i].returnVariable(gdjs.CemiterioCode.GDinimigo_951Objects2[i].getVariables().get("direcao")).setNumber(0);
}
}}

}


{

gdjs.CemiterioCode.GDinimigo_951Objects2.createFrom(gdjs.CemiterioCode.GDinimigo_951Objects1);

gdjs.CemiterioCode.GDplayer_95boxObjects2.createFrom(gdjs.CemiterioCode.GDplayer_95boxObjects1);


gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDplayer_9595boxObjects2Objects, gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDinimigo_95951Objects2Objects, 300, true);
}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CemiterioCode.GDinimigo_951Objects2 */
{for(var i = 0, len = gdjs.CemiterioCode.GDinimigo_951Objects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDinimigo_951Objects2[i].returnVariable(gdjs.CemiterioCode.GDinimigo_951Objects2[i].getVariables().get("direcao")).setNumber(3);
}
}}

}


{

/* Reuse gdjs.CemiterioCode.GDinimigo_951Objects1 */
/* Reuse gdjs.CemiterioCode.GDplayer_95boxObjects1 */

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.object.turnedTowardTest(gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDinimigo_95951Objects1Objects, gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDplayer_9595boxObjects1Objects, 5, true);
}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CemiterioCode.GDinimigo_951Objects1 */
{for(var i = 0, len = gdjs.CemiterioCode.GDinimigo_951Objects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDinimigo_951Objects1[i].returnVariable(gdjs.CemiterioCode.GDinimigo_951Objects1[i].getVariables().get("direcao")).setNumber(1);
}
}}

}


}; //End of gdjs.CemiterioCode.eventsList0x7b4ea8
gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDplayer_9595boxObjects1Objects = Hashtable.newFrom({"player_box": gdjs.CemiterioCode.GDplayer_95boxObjects1});gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDinimigo_95951Objects1Objects = Hashtable.newFrom({"inimigo_1": gdjs.CemiterioCode.GDinimigo_951Objects1});gdjs.CemiterioCode.eventsList0x7bcbf0 = function(runtimeScene) {

{


{
/* Reuse gdjs.CemiterioCode.GDinimigo_951Objects1 */
{for(var i = 0, len = gdjs.CemiterioCode.GDinimigo_951Objects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDinimigo_951Objects1[i].returnVariable(gdjs.CemiterioCode.GDinimigo_951Objects1[i].getVariables().get("direcao")).setNumber(4);
}
}}

}


}; //End of gdjs.CemiterioCode.eventsList0x7bcbf0
gdjs.CemiterioCode.eventsList0x7be288 = function(runtimeScene) {

{

gdjs.CemiterioCode.GDplayer_95boxObjects2.createFrom(runtimeScene.getObjects("player_box"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDplayer_95boxObjects2.length;i<l;++i) {
    if ( !(gdjs.CemiterioCode.GDplayer_95boxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDplayer_95boxObjects2[k] = gdjs.CemiterioCode.GDplayer_95boxObjects2[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDplayer_95boxObjects2.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects2.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects2[i].setAnimationName("animaarc1");
}
}}

}


{

gdjs.CemiterioCode.GDplayer_95boxObjects2.createFrom(runtimeScene.getObjects("player_box"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDplayer_95boxObjects2.length;i<l;++i) {
    if ( gdjs.CemiterioCode.GDplayer_95boxObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDplayer_95boxObjects2[k] = gdjs.CemiterioCode.GDplayer_95boxObjects2[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDplayer_95boxObjects2.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects2.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects2[i].setAnimationName("animaarc2");
}
}}

}


{

gdjs.CemiterioCode.GDplayer_95boxObjects2.createFrom(runtimeScene.getObjects("player_box"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDplayer_95boxObjects2.length;i<l;++i) {
    if ( gdjs.CemiterioCode.GDplayer_95boxObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDplayer_95boxObjects2[k] = gdjs.CemiterioCode.GDplayer_95boxObjects2[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDplayer_95boxObjects2.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects2.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects2[i].setAnimationName("animaarc4");
}
}}

}


{

gdjs.CemiterioCode.GDplayer_95boxObjects2.createFrom(runtimeScene.getObjects("player_box"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDplayer_95boxObjects2.length;i<l;++i) {
    if ( gdjs.CemiterioCode.GDplayer_95boxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDplayer_95boxObjects2[k] = gdjs.CemiterioCode.GDplayer_95boxObjects2[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDplayer_95boxObjects2.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects2.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects2[i].setAnimationName("animaarc5");
}
}}

}


{



}


{


gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects2.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects2[i].flipX(false);
}
}}

}


{


gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects1.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects1[i].flipX(true);
}
}}

}


}; //End of gdjs.CemiterioCode.eventsList0x7be288
gdjs.CemiterioCode.eventsList0x7bf280 = function(runtimeScene) {

{

gdjs.CemiterioCode.GDplayer_95boxObjects2.createFrom(runtimeScene.getObjects("player_box"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDplayer_95boxObjects2.length;i<l;++i) {
    if ( !(gdjs.CemiterioCode.GDplayer_95boxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDplayer_95boxObjects2[k] = gdjs.CemiterioCode.GDplayer_95boxObjects2[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDplayer_95boxObjects2.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects2.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects2[i].setAnimationName("animamage1");
}
}}

}


{

gdjs.CemiterioCode.GDplayer_95boxObjects2.createFrom(runtimeScene.getObjects("player_box"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDplayer_95boxObjects2.length;i<l;++i) {
    if ( gdjs.CemiterioCode.GDplayer_95boxObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDplayer_95boxObjects2[k] = gdjs.CemiterioCode.GDplayer_95boxObjects2[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDplayer_95boxObjects2.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects2.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects2[i].setAnimationName("animamage2");
}
}}

}


{

gdjs.CemiterioCode.GDplayer_95boxObjects2.createFrom(runtimeScene.getObjects("player_box"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDplayer_95boxObjects2.length;i<l;++i) {
    if ( gdjs.CemiterioCode.GDplayer_95boxObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDplayer_95boxObjects2[k] = gdjs.CemiterioCode.GDplayer_95boxObjects2[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDplayer_95boxObjects2.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects2.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects2[i].setAnimationName("animamage4");
}
}}

}


{

gdjs.CemiterioCode.GDplayer_95boxObjects2.createFrom(runtimeScene.getObjects("player_box"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDplayer_95boxObjects2.length;i<l;++i) {
    if ( gdjs.CemiterioCode.GDplayer_95boxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDplayer_95boxObjects2[k] = gdjs.CemiterioCode.GDplayer_95boxObjects2[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDplayer_95boxObjects2.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects2.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects2[i].setAnimationName("animamage5");
}
}}

}


{



}


{


gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects2.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects2[i].flipX(false);
}
}}

}


{


gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects1.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects1[i].flipX(true);
}
}}

}


}; //End of gdjs.CemiterioCode.eventsList0x7bf280
gdjs.CemiterioCode.eventsList0x7c0530 = function(runtimeScene) {

{

gdjs.CemiterioCode.GDplayer_95boxObjects2.createFrom(runtimeScene.getObjects("player_box"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDplayer_95boxObjects2.length;i<l;++i) {
    if ( !(gdjs.CemiterioCode.GDplayer_95boxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDplayer_95boxObjects2[k] = gdjs.CemiterioCode.GDplayer_95boxObjects2[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDplayer_95boxObjects2.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects2.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects2[i].setAnimationName("animague1");
}
}}

}


{

gdjs.CemiterioCode.GDplayer_95boxObjects2.createFrom(runtimeScene.getObjects("player_box"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDplayer_95boxObjects2.length;i<l;++i) {
    if ( gdjs.CemiterioCode.GDplayer_95boxObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDplayer_95boxObjects2[k] = gdjs.CemiterioCode.GDplayer_95boxObjects2[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDplayer_95boxObjects2.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects2.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects2[i].setAnimationName("animague2");
}
}}

}


{

gdjs.CemiterioCode.GDplayer_95boxObjects2.createFrom(runtimeScene.getObjects("player_box"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDplayer_95boxObjects2.length;i<l;++i) {
    if ( gdjs.CemiterioCode.GDplayer_95boxObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDplayer_95boxObjects2[k] = gdjs.CemiterioCode.GDplayer_95boxObjects2[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDplayer_95boxObjects2.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects2.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects2[i].setAnimationName("animague4");
}
}}

}


{

gdjs.CemiterioCode.GDplayer_95boxObjects2.createFrom(runtimeScene.getObjects("player_box"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDplayer_95boxObjects2.length;i<l;++i) {
    if ( gdjs.CemiterioCode.GDplayer_95boxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDplayer_95boxObjects2[k] = gdjs.CemiterioCode.GDplayer_95boxObjects2[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDplayer_95boxObjects2.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects2.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects2[i].setAnimationName("animague5");
}
}}

}


{



}


{


gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects2.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects2.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects2[i].flipX(false);
}
}}

}


{


gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDskin_95playerObjects1.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects1[i].flipX(true);
}
}}

}


}; //End of gdjs.CemiterioCode.eventsList0x7c0530
gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDBau_95951Objects1Objects = Hashtable.newFrom({"Bau_1": gdjs.CemiterioCode.GDBau_951Objects1});gdjs.CemiterioCode.eventsList0xb2a48 = function(runtimeScene) {

{

gdjs.CemiterioCode.GDinimigo_951Objects1.createFrom(runtimeScene.getObjects("inimigo_1"));
gdjs.CemiterioCode.GDplayer_95boxObjects1.createFrom(runtimeScene.getObjects("player_box"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDplayer_9595boxObjects1Objects, gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDinimigo_95951Objects1Objects, 100, true);
}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CemiterioCode.eventsList0x7b4ea8(runtimeScene);} //End of subevents
}

}


{

gdjs.CemiterioCode.GDinimigo_951Objects1.createFrom(runtimeScene.getObjects("inimigo_1"));
gdjs.CemiterioCode.GDplayer_95boxObjects1.createFrom(runtimeScene.getObjects("player_box"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDplayer_9595boxObjects1Objects, gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDinimigo_95951Objects1Objects, 40, false);
}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CemiterioCode.eventsList0x7bcbf0(runtimeScene);} //End of subevents
}

}


{

gdjs.CemiterioCode.GDinimigo_951Objects1.createFrom(runtimeScene.getObjects("inimigo_1"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDinimigo_951Objects1.length;i<l;++i) {
    if ( gdjs.CemiterioCode.GDinimigo_951Objects1[i].getVariableNumber(gdjs.CemiterioCode.GDinimigo_951Objects1[i].getVariables().get("direcao")) == 4 ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDinimigo_951Objects1[k] = gdjs.CemiterioCode.GDinimigo_951Objects1[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDinimigo_951Objects1.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CemiterioCode.GDinimigo_951Objects1 */
{for(var i = 0, len = gdjs.CemiterioCode.GDinimigo_951Objects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDinimigo_951Objects1[i].setAnimationName("ini1_atack");
}
}}

}


{

gdjs.CemiterioCode.GDinimigo_951Objects1.createFrom(runtimeScene.getObjects("inimigo_1"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDinimigo_951Objects1.length;i<l;++i) {
    if ( gdjs.CemiterioCode.GDinimigo_951Objects1[i].getVariableNumber(gdjs.CemiterioCode.GDinimigo_951Objects1[i].getVariables().get("direcao")) == 3 ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDinimigo_951Objects1[k] = gdjs.CemiterioCode.GDinimigo_951Objects1[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDinimigo_951Objects1.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CemiterioCode.GDinimigo_951Objects1 */
{for(var i = 0, len = gdjs.CemiterioCode.GDinimigo_951Objects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDinimigo_951Objects1[i].setAnimationName("ini1_parado");
}
}}

}


{

gdjs.CemiterioCode.GDinimigo_951Objects1.createFrom(runtimeScene.getObjects("inimigo_1"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDinimigo_951Objects1.length;i<l;++i) {
    if ( gdjs.CemiterioCode.GDinimigo_951Objects1[i].getVariableNumber(gdjs.CemiterioCode.GDinimigo_951Objects1[i].getVariables().get("direcao")) == 1 ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDinimigo_951Objects1[k] = gdjs.CemiterioCode.GDinimigo_951Objects1[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDinimigo_951Objects1.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CemiterioCode.GDinimigo_951Objects1 */
{for(var i = 0, len = gdjs.CemiterioCode.GDinimigo_951Objects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDinimigo_951Objects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.CemiterioCode.GDinimigo_951Objects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDinimigo_951Objects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.CemiterioCode.GDinimigo_951Objects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDinimigo_951Objects1[i].setAnimationName("ini1_andando");
}
}}

}


{

gdjs.CemiterioCode.GDinimigo_951Objects1.createFrom(runtimeScene.getObjects("inimigo_1"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CemiterioCode.GDinimigo_951Objects1.length;i<l;++i) {
    if ( gdjs.CemiterioCode.GDinimigo_951Objects1[i].getVariableNumber(gdjs.CemiterioCode.GDinimigo_951Objects1[i].getVariables().get("direcao")) == 0 ) {
        gdjs.CemiterioCode.condition0IsTrue_0.val = true;
        gdjs.CemiterioCode.GDinimigo_951Objects1[k] = gdjs.CemiterioCode.GDinimigo_951Objects1[i];
        ++k;
    }
}
gdjs.CemiterioCode.GDinimigo_951Objects1.length = k;}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CemiterioCode.GDinimigo_951Objects1 */
{for(var i = 0, len = gdjs.CemiterioCode.GDinimigo_951Objects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDinimigo_951Objects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.CemiterioCode.GDinimigo_951Objects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDinimigo_951Objects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.CemiterioCode.GDinimigo_951Objects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDinimigo_951Objects1[i].setAnimationName("ini1_andando");
}
}}

}


{



}


{



}


{


gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {
gdjs.CemiterioCode.GDplayer_95boxObjects1.createFrom(runtimeScene.getObjects("player_box"));
{for(var i = 0, len = gdjs.CemiterioCode.GDplayer_95boxObjects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDplayer_95boxObjects1[i].hide();
}
}}

}


{


{
gdjs.CemiterioCode.GDplayer_95boxObjects1.createFrom(runtimeScene.getObjects("player_box"));
gdjs.CemiterioCode.GDskin_95playerObjects1.createFrom(runtimeScene.getObjects("skin_player"));
{for(var i = 0, len = gdjs.CemiterioCode.GDskin_95playerObjects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDskin_95playerObjects1[i].setPosition((( gdjs.CemiterioCode.GDplayer_95boxObjects1.length === 0 ) ? 0 :gdjs.CemiterioCode.GDplayer_95boxObjects1[0].getPointX("")) - 16,(( gdjs.CemiterioCode.GDplayer_95boxObjects1.length === 0 ) ? 0 :gdjs.CemiterioCode.GDplayer_95boxObjects1[0].getPointY("")) - 13);
}
}}

}


{



}


{


gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CemiterioCode.eventsList0x7be288(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 2;
}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CemiterioCode.eventsList0x7bf280(runtimeScene);} //End of subevents
}

}


{



}


{



}


{


{
gdjs.CemiterioCode.GDvidaObjects1.createFrom(runtimeScene.getObjects("vida"));
{for(var i = 0, len = gdjs.CemiterioCode.GDvidaObjects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDvidaObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.CemiterioCode.condition0IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 3;
}if (gdjs.CemiterioCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CemiterioCode.eventsList0x7c0530(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.CemiterioCode.GDBau_951Objects1.createFrom(runtimeScene.getObjects("Bau_1"));

gdjs.CemiterioCode.condition0IsTrue_0.val = false;
gdjs.CemiterioCode.condition1IsTrue_0.val = false;
{
gdjs.CemiterioCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CemiterioCode.mapOfGDgdjs_46CemiterioCode_46GDBau_95951Objects1Objects, runtimeScene, true, false);
}if ( gdjs.CemiterioCode.condition0IsTrue_0.val ) {
{
gdjs.CemiterioCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.CemiterioCode.condition1IsTrue_0.val) {
/* Reuse gdjs.CemiterioCode.GDBau_951Objects1 */
{for(var i = 0, len = gdjs.CemiterioCode.GDBau_951Objects1.length ;i < len;++i) {
    gdjs.CemiterioCode.GDBau_951Objects1[i].setAnimationName("anibau2");
}
}}

}


}; //End of gdjs.CemiterioCode.eventsList0xb2a48


gdjs.CemiterioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.CemiterioCode.GDvidaObjects1.length = 0;
gdjs.CemiterioCode.GDvidaObjects2.length = 0;
gdjs.CemiterioCode.GDvidaObjects3.length = 0;
gdjs.CemiterioCode.GDfundoObjects1.length = 0;
gdjs.CemiterioCode.GDfundoObjects2.length = 0;
gdjs.CemiterioCode.GDfundoObjects3.length = 0;
gdjs.CemiterioCode.GDarvore_95secaObjects1.length = 0;
gdjs.CemiterioCode.GDarvore_95secaObjects2.length = 0;
gdjs.CemiterioCode.GDarvore_95secaObjects3.length = 0;
gdjs.CemiterioCode.GDcriObjects1.length = 0;
gdjs.CemiterioCode.GDcriObjects2.length = 0;
gdjs.CemiterioCode.GDcriObjects3.length = 0;
gdjs.CemiterioCode.GDtile_952Objects1.length = 0;
gdjs.CemiterioCode.GDtile_952Objects2.length = 0;
gdjs.CemiterioCode.GDtile_952Objects3.length = 0;
gdjs.CemiterioCode.GDtile_951Objects1.length = 0;
gdjs.CemiterioCode.GDtile_951Objects2.length = 0;
gdjs.CemiterioCode.GDtile_951Objects3.length = 0;
gdjs.CemiterioCode.GDskin_95playerObjects1.length = 0;
gdjs.CemiterioCode.GDskin_95playerObjects2.length = 0;
gdjs.CemiterioCode.GDskin_95playerObjects3.length = 0;
gdjs.CemiterioCode.GDinimigo_951Objects1.length = 0;
gdjs.CemiterioCode.GDinimigo_951Objects2.length = 0;
gdjs.CemiterioCode.GDinimigo_951Objects3.length = 0;
gdjs.CemiterioCode.GDplayer_95boxObjects1.length = 0;
gdjs.CemiterioCode.GDplayer_95boxObjects2.length = 0;
gdjs.CemiterioCode.GDplayer_95boxObjects3.length = 0;
gdjs.CemiterioCode.GDIcoVidaObjects1.length = 0;
gdjs.CemiterioCode.GDIcoVidaObjects2.length = 0;
gdjs.CemiterioCode.GDIcoVidaObjects3.length = 0;
gdjs.CemiterioCode.GDBau_951Objects1.length = 0;
gdjs.CemiterioCode.GDBau_951Objects2.length = 0;
gdjs.CemiterioCode.GDBau_951Objects3.length = 0;
gdjs.CemiterioCode.GDIconGoldObjects1.length = 0;
gdjs.CemiterioCode.GDIconGoldObjects2.length = 0;
gdjs.CemiterioCode.GDIconGoldObjects3.length = 0;

gdjs.CemiterioCode.eventsList0xb2a48(runtimeScene);
return;
}
gdjs['CemiterioCode'] = gdjs.CemiterioCode;
