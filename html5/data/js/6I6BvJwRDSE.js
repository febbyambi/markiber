window.globalProvideData('slide', '{"title":"Fill-in-the-Blank","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":4,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide4","width":395,"height":702,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6I6BvJwRDSE","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"6ger3Rw3SeX.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6a4PwIZ2JHw"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_63ZxHAE86u4.InvalidPromptSlide"}}]}]},"ReviewInt_633XQ8xDvO0":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6ger3Rw3SeX"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6a4PwIZ2JHw.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"633XQ8xDvO0_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"633XQ8xDvO0_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_633XQ8xDvO0","typea":"var","valueb":"5vfygBkcpkn","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5vfygBkcpkn.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_633XQ8xDvO0"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5vfygBkcpkn.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_633XQ8xDvO0"}]}]}]},"ReviewIntCorrectIncorrect_633XQ8xDvO0":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"633XQ8xDvO0_ReviewShape"}}]},"AnsweredInt_633XQ8xDvO0":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_633XQ8xDvO0"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_633XQ8xDvO0":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6ger3Rw3SeX"},"enabled":{"type":"boolean","value":false}}]},"633XQ8xDvO0_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6a4PwIZ2JHw.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5vfygBkcpkn.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_633XQ8xDvO0"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6a4PwIZ2JHw.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6a4PwIZ2JHw.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_633XQ8xDvO0"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_6I6BvJwRDSE":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6BI9No1XVbE"}}]},"NavigationRestrictionPreviousSlide_6I6BvJwRDSE":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_63ZxHAE86u4","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_63ZxHAE86u4","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_633XQ8xDvO0","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_633XQ8xDvO0"}],"elseActions":[{"kind":"exe_actiongroup","id":"633XQ8xDvO0_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_633XQ8xDvO0","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_633XQ8xDvO0","typea":"var","valueb":"5vfygBkcpkn","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5vfygBkcpkn"},"completed_slide_ref":{"type":"string","value":"_player.5jeKC8HZX3p.6O51BPaoUjc"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_633XQ8xDvO0","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_633XQ8xDvO0","typea":"var","valueb":"5vfygBkcpkn","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5vfygBkcpkn"},"completed_slide_ref":{"type":"string","value":"_player.5jeKC8HZX3p.6O51BPaoUjc"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6I6BvJwRDSE"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6I6BvJwRDSE"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5rXwuZkm9f5"}},{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"633XQ8xDvO0_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ger3Rw3SeX"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":4,"id":"01","url":"story_content/6TGyWMB1DcH_80_DX1406_DY1406.swf","type":"normal","altText":"UI MARKIBER _Pre Test 3.png","width":791,"height":1406,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":197.5,"rotateYPos":351.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":395,"bottom":703,"altText":"UI MARKIBER _Pre Test 3.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":395,"height":703,"strokewidth":0}},"width":395,"height":703,"resume":true,"useHandCursor":true,"id":"5rXwuZkm9f5"},{"kind":"textinput","bindto":"_player.TextEntry","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":0,"placeholder":"Ketik jawabanmu disini","fontsize":15,"textcolor":"0x000000","bold":false,"italic":false,"font":"Comic Sans MS Charset0_E741E03A","marginleft":2,"marginright":2,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":66,"yPos":500,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":128,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6ger3Rw3SeX","linkId":"","type":"vectortext","xPos":2,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":253,"height":46,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":158,"bottom":21,"pngfb":false,"pr":{"l":"Lib","i":24}}},"html5data":{"xPos":0,"yPos":0,"width":258,"height":47,"strokewidth":1}},"width":257,"height":47,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":259,"bottom":48,"altText":"Ketik jawabanmu disini","pngfb":false,"pr":{"l":"Lib","i":23}}},"id":"6ger3Rw3SeX","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"633XQ8xDvO0_CorrectReview","id":"01","linkId":"633XQ8xDvO0_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":239,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":7}}}],"shapemaskId":"","xPos":0,"yPos":662,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":197.5,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":395,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":6}},"html5data":{"xPos":1,"yPos":1,"width":392,"height":37,"strokewidth":2}},"width":395,"height":40,"resume":false,"useHandCursor":true,"id":"633XQ8xDvO0_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"633XQ8xDvO0_IncorrectReview","id":"01","linkId":"633XQ8xDvO0_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":248,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":9}}}],"shapemaskId":"","xPos":0,"yPos":662,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":197.5,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":395,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":8}},"html5data":{"xPos":1,"yPos":1,"width":392,"height":37,"strokewidth":2}},"width":395,"height":40,"resume":false,"useHandCursor":true,"id":"633XQ8xDvO0_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_633XQ8xDvO0_ReviewShape","id":"01","linkId":"txt_633XQ8xDvO0_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":197,"bottom":614,"pngfb":false,"pr":{"l":"Lib","i":26}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":2,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":177.5,"rotateYPos":275.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":374,"bottom":619,"altText":"","pngfb":false,"pr":{"l":"Lib","i":25}},"html5data":{"xPos":1,"yPos":1,"width":372,"height":617,"strokewidth":1}},"width":355,"height":551,"resume":false,"useHandCursor":true,"id":"633XQ8xDvO0_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');