window.globalProvideData('slide', '{"title":"Numeric","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":5,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide5","width":395,"height":702,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6VhrzdoSJtL","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"5krdx7zyu7i.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.5rCW9aphI29"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_63ZxHAE86u4.InvalidPromptSlide"}}]}]},"ReviewInt_5cTBoFOY8na":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5krdx7zyu7i"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5rCW9aphI29.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5cTBoFOY8na_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5cTBoFOY8na_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5cTBoFOY8na","typea":"var","valueb":"6HGroVw9Vxh","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6HGroVw9Vxh.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5cTBoFOY8na"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6HGroVw9Vxh.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5cTBoFOY8na"}]}]}]},"ReviewIntCorrectIncorrect_5cTBoFOY8na":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5cTBoFOY8na_ReviewShape"}}]},"AnsweredInt_5cTBoFOY8na":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5cTBoFOY8na"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_5cTBoFOY8na":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5krdx7zyu7i"},"enabled":{"type":"boolean","value":false}}]},"5cTBoFOY8na_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5rCW9aphI29.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6HGroVw9Vxh.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5cTBoFOY8na"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5rCW9aphI29.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5rCW9aphI29.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5cTBoFOY8na"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_6VhrzdoSJtL":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6KIugk62aJa"}}]},"NavigationRestrictionPreviousSlide_6VhrzdoSJtL":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_63ZxHAE86u4","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_63ZxHAE86u4","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5cTBoFOY8na","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5cTBoFOY8na"}],"elseActions":[{"kind":"exe_actiongroup","id":"5cTBoFOY8na_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5cTBoFOY8na","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5cTBoFOY8na","typea":"var","valueb":"6HGroVw9Vxh","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6HGroVw9Vxh"},"completed_slide_ref":{"type":"string","value":"_player.5iedNjCqqKf.62gCKn6LQDj"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5cTBoFOY8na","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5cTBoFOY8na","typea":"var","valueb":"6HGroVw9Vxh","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6HGroVw9Vxh"},"completed_slide_ref":{"type":"string","value":"_player.5iedNjCqqKf.62gCKn6LQDj"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6VhrzdoSJtL"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6VhrzdoSJtL"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5c4zq6BkfwU"}},{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5cTBoFOY8na_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5krdx7zyu7i"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":59,"id":"01","url":"story_content/6iG3V71ByVs_80_DX1406_DY1406.swf","type":"normal","altText":"UI MARKIBER _Post Test 5.png","width":791,"height":1406,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":197.5,"rotateYPos":351.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":395,"bottom":703,"altText":"UI MARKIBER _Post Test 5.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":395,"height":703,"strokewidth":0}},"width":395,"height":703,"resume":true,"useHandCursor":true,"id":"5c4zq6BkfwU"},{"kind":"textinput","bindto":"_player.NumericEntry3","align":"left","verticalAlign":"top","rtl":false,"numeric":true,"multiline":false,"maxchars":0,"placeholder":"","fontsize":16,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":2,"marginright":2,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":127,"yPos":524,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":61,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"5krdx7zyu7i","linkId":"","type":"vectortext","xPos":2,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":118,"height":49,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":5}}},"html5data":{"xPos":0,"yPos":0,"width":123,"height":50,"strokewidth":1}},"width":123,"height":49,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":124,"bottom":51,"altText":"Numeric Entry","pngfb":false,"pr":{"l":"Lib","i":139}}},"id":"5krdx7zyu7i","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.NumericEntry3","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5cTBoFOY8na_CorrectReview","id":"01","linkId":"5cTBoFOY8na_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":239,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":7}}}],"shapemaskId":"","xPos":0,"yPos":662,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":197.5,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":395,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":1,"yPos":1,"width":392,"height":37,"strokewidth":2}},"width":395,"height":40,"resume":false,"useHandCursor":true,"id":"5cTBoFOY8na_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5cTBoFOY8na_IncorrectReview","id":"01","linkId":"5cTBoFOY8na_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":248,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":9}}}],"shapemaskId":"","xPos":0,"yPos":662,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":197.5,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":395,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":1,"yPos":1,"width":392,"height":37,"strokewidth":2}},"width":395,"height":40,"resume":false,"useHandCursor":true,"id":"5cTBoFOY8na_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_5cTBoFOY8na_ReviewShape","id":"01","linkId":"txt_5cTBoFOY8na_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":263,"bottom":640,"pngfb":false,"pr":{"l":"Lib","i":141}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":2,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":177.5,"rotateYPos":275.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":374,"bottom":645,"altText":"","pngfb":false,"pr":{"l":"Lib","i":140}},"html5data":{"xPos":1,"yPos":1,"width":372,"height":643,"strokewidth":1}},"width":355,"height":551,"resume":false,"useHandCursor":true,"id":"5cTBoFOY8na_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');