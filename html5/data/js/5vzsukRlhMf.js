window.globalProvideData('slide', '{"title":"Fill-in-the-Blank","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":3,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide3","width":395,"height":702,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"5vzsukRlhMf","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"5oNzu34tI7l.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6gzC8JztOKo"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_63ZxHAE86u4.InvalidPromptSlide"}}]}]},"ReviewInt_5cSYihMJU0S":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5oNzu34tI7l"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6gzC8JztOKo.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5cSYihMJU0S_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5cSYihMJU0S_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5cSYihMJU0S","typea":"var","valueb":"6HGroVw9Vxh","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6HGroVw9Vxh.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5cSYihMJU0S"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6HGroVw9Vxh.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5cSYihMJU0S"}]}]}]},"ReviewIntCorrectIncorrect_5cSYihMJU0S":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5cSYihMJU0S_ReviewShape"}}]},"AnsweredInt_5cSYihMJU0S":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5cSYihMJU0S"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_5cSYihMJU0S":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5oNzu34tI7l"},"enabled":{"type":"boolean","value":false}}]},"5cSYihMJU0S_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6gzC8JztOKo.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6HGroVw9Vxh.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5cSYihMJU0S"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6gzC8JztOKo.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6gzC8JztOKo.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5cSYihMJU0S"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_5vzsukRlhMf":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5lJ651TwTVg"}}]},"NavigationRestrictionPreviousSlide_5vzsukRlhMf":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_63ZxHAE86u4","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_63ZxHAE86u4","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5cSYihMJU0S","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5cSYihMJU0S"}],"elseActions":[{"kind":"exe_actiongroup","id":"5cSYihMJU0S_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5cSYihMJU0S","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5cSYihMJU0S","typea":"var","valueb":"6HGroVw9Vxh","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6HGroVw9Vxh"},"completed_slide_ref":{"type":"string","value":"_player.5iedNjCqqKf.62gCKn6LQDj"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5cSYihMJU0S","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5cSYihMJU0S","typea":"var","valueb":"6HGroVw9Vxh","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6HGroVw9Vxh"},"completed_slide_ref":{"type":"string","value":"_player.5iedNjCqqKf.62gCKn6LQDj"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5vzsukRlhMf"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5vzsukRlhMf"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5zADtoN98A6"}},{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5cSYihMJU0S_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5oNzu34tI7l"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":57,"id":"01","url":"story_content/6AkhyTUIy4R_80_DX1406_DY1406.swf","type":"normal","altText":"UI MARKIBER _Post Test 3.png","width":791,"height":1406,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":197.5,"rotateYPos":351.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":395,"bottom":703,"altText":"UI MARKIBER _Post Test 3.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":395,"height":703,"strokewidth":0}},"width":395,"height":703,"resume":true,"useHandCursor":true,"id":"5zADtoN98A6"},{"kind":"textinput","bindto":"_player.TextEntry5","align":"center","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":0,"placeholder":"Ketik jawabanmu disini","fontsize":16,"textcolor":"0x000000","bold":false,"italic":false,"font":"Comic Sans MS Charset0_E741E03A","marginleft":2,"marginright":2,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":31,"yPos":521,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":170.5,"rotateYPos":24.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"5oNzu34tI7l","linkId":"","type":"vectortext","xPos":2,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":338,"height":49,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":253,"bottom":31,"pngfb":false,"pr":{"l":"Lib","i":132}}},"html5data":{"xPos":0,"yPos":0,"width":343,"height":50,"strokewidth":1}},"width":342,"height":50,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":344,"bottom":51,"altText":"Ketik jawabanmu disini","pngfb":false,"pr":{"l":"Lib","i":131}}},"id":"5oNzu34tI7l","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry5","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5cSYihMJU0S_CorrectReview","id":"01","linkId":"5cSYihMJU0S_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":239,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":7}}}],"shapemaskId":"","xPos":0,"yPos":662,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":197.5,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":395,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":1,"yPos":1,"width":392,"height":37,"strokewidth":2}},"width":395,"height":40,"resume":false,"useHandCursor":true,"id":"5cSYihMJU0S_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5cSYihMJU0S_IncorrectReview","id":"01","linkId":"5cSYihMJU0S_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":248,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":9}}}],"shapemaskId":"","xPos":0,"yPos":662,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":197.5,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":395,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":1,"yPos":1,"width":392,"height":37,"strokewidth":2}},"width":395,"height":40,"resume":false,"useHandCursor":true,"id":"5cSYihMJU0S_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_5cSYihMJU0S_ReviewShape","id":"01","linkId":"txt_5cSYihMJU0S_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":162,"bottom":638,"pngfb":false,"pr":{"l":"Lib","i":134}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":2,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":177.5,"rotateYPos":275.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":374,"bottom":643,"altText":"","pngfb":false,"pr":{"l":"Lib","i":133}},"html5data":{"xPos":1,"yPos":1,"width":372,"height":641,"strokewidth":1}},"width":355,"height":551,"resume":false,"useHandCursor":true,"id":"5cSYihMJU0S_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');