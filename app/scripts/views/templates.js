angular.module('getAgileApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/addNewColumn.html',
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\" ng-click=\"cancel()\" aria-hidden=\"true\">&times;</button>\n" +
    "    <h4 class=\"modal-title\" id=\"addColumnLabel\">Add New Column</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <form class=\"form-horizontal\" role=\"form\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-3\" for=\"columnName\">Name</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"columnName\" ng-model=\"newColumn.name\" focus ui-keypress=\"{13:'add()'}\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"add()\">Add</button>\n" +
    "</div>"
  );


  $templateCache.put('views/addNewStory.html',
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\" ng-click=\"cancel()\" aria-hidden=\"true\">&times;</button>\n" +
    "    <h4 class=\"modal-title\" id=\"addStoryLabel\">Add New Story</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <form class=\"form-horizontal\" role=\"form\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-3\" for=\"storySummary\">Summary</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"storySummary\" ng-model=\"newStory.summary\" focus ui-keypress=\"{13:'add()'}\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-3\" for=\"storyEstimate\">Estimate</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"storyEstimate\" ng-model=\"newStory.estimate\" ui-keypress=\"{13:'add()'}\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-3\" for=\"storyDescription\">Description</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <textarea class=\"form-control\" id=\"storyDescription\" ng-model=\"newStory.description\" rows=\"6\"></textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-3\">Attachments</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <div class=\"drag-and-drop-file-upload\" on-file-drop=\"changeFile()\" ng-model=\"temporary.attachmentFiles\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"add()\">Add</button>\n" +
    "</div>"
  );


  $templateCache.put('views/addNewStoryboard.html',
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\" ng-click=\"cancel()\" aria-hidden=\"true\">&times;</button>\n" +
    "    <h4 class=\"modal-title\">Add New Storyboard</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <form class=\"form-horizontal\" role=\"form\" name=\"AddStoryboardForm\">\n" +
    "        <div class=\"form-group\" ng-class=\"{ 'has-error' : AddStoryboardForm.storyboardName.$invalid }\">\n" +
    "            <label class=\"control-label col-sm-3\" for=\"storyboardName\">Name</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"storyboardName\" name=\"storyboardName\" ng-model=\"newStoryboard.name\" required focus ui-keypress=\"{13:'add()'}\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-3\" for=\"storyboardSlug\">URL</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"storyboardSlug\" name=\"storyboardSlug\" ng-model=\"newStoryboard.slug\" required ui-keypress=\"{13:'add()'}\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"add(newStoryboard, auth.user.uid)\">Add</button>\n" +
    "</div>"
  );


  $templateCache.put('views/attachment.html',
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\" ng-click=\"cancel()\" aria-hidden=\"true\">&times;</button>\n" +
    "    <h4 class=\"modal-title\">Attachment</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body text-center\">\n" +
    "    <img ng-src=\"{{attachment}}\" />\n" +
    "</div>"
  );


  $templateCache.put('views/board.html',
    "<div style=\"padding:0 15px;\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-sm-12\">\n" +
    "            <div class=\"container-fluid\">\n" +
    "                <div class=\"row\" style=\"margin-bottom:10px\">\n" +
    "                    <div class=\"col-md-6\" ng-controller=\"TeamCtrl\">\n" +
    "                        <form class=\"form-inline pull-left\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <input type=\"text\" class=\"form-control input-sm\" ng-model=\"newTeamMemberUserId\" typeahead-on-select=\"addPersonToTeam(newTeamMemberUserId)\" typeahead=\"person.$id as person.name for person in userList | orderByPriority | filter:$viewValue\" placeholder=\"Add Team Member\" />\n" +
    "                            </div>\n" +
    "                            <div class=\"btn-group btn-group-sm\">\n" +
    "                                <button ng-repeat=\"person in team\" class=\"btn btn-default\" ng-click=\"removePersonFromTeam(person.$id)\">{{person.name}} <span class=\"glyphicon glyphicon-remove\"></span></button>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-md-6\">\n" +
    "                        <form class=\"form-inline pull-right\">\n" +
    "                            <div class=\"form-group has-feedback\" ng-show=\"(stories | orderByPriority).length > 2\">\n" +
    "                                <input ng-model=\"searchFilter\" class=\"form-control input-sm\" placeholder=\"Filter\" />\n" +
    "                                <span class=\"glyphicon glyphicon-remove form-control-feedback\" ng-show=\"searchFilter\" ng-click=\"searchFilter=''\"></span>\n" +
    "                            </div>\n" +
    "                            <div class=\"btn-group btn-group-sm\">\n" +
    "                                <button ng-show=\"selectedBoard\" class=\"btn btn-default\" ng-click=\"showNewColumnUI()\"><span class=\"glyphicon glyphicon-plus\"></span> Add Column</button>\n" +
    "                                <button ng-show=\"selectedBoard\" class=\"btn btn-primary\" ng-click=\"showNewStoryUI()\"><span class=\"glyphicon glyphicon-plus\"></span> Add Story</button>\n" +
    "                            </div>\n" +
    "                        </form>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"row\" id=\"boardColumns\">\n" +
    "                    <div class=\"col-md-{{columnWidth}}\" ng-repeat=\"(columnKey, column) in columns\">\n" +
    "                        <div class=\"well well-sm\">\n" +
    "                            <div class=\"row\" style=\"padding-bottom:10px;\">\n" +
    "                                <div class=\"col-sm-12\">\n" +
    "                                    <p ng-model=\"column.name\"><strong>{{column.name}}</strong> <small ng-click=\"deleteColumn(columnKey)\"><a href=\"\" class=\"glyphicon glyphicon-trash\"></a></small></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"bs-callout\" ng-show=\"(stories | orderByPriority | filter : { columnId:columnKey }).length == 0\" class=\"visible-xs\">\n" +
    "                                <p class=\"text-muted\">There are currently no stories in <strong>\"{{column.name}}\"</strong></p>\n" +
    "                            </div>\n" +
    "                            <ul class=\"list-group\" ng-model=\"stories\"><!-- ui-sortable=\"sortableOptions\" -->\n" +
    "                                <li href=\"\" class=\"list-group-item clearfix\" ng-repeat=\"(storyKey, story) in stories | orderByPriority | filter : { columnId:columnKey } | filter : searchFilter\" ng-mouseover=\"story.isCurrentFocus = true\" ng-mouseout=\"story.isCurrentFocus = false\">\n" +
    "                                    <span class=\"badge\">{{story.estimate}}</span>\n" +
    "                                    <p class=\"list-group-item-heading\"><strong ng-bind-html=\"highlight(story.summary, searchFilter)\"></strong></p>\n" +
    "                                    <p class=\"list-group-item-text\" ng-bind-html=\"highlight(story.description, searchFilter)\"></p>\n" +
    "                                    <div class=\"row\" ng-show=\"story.attachments\">\n" +
    "                                        <div class=\"col-md-12\">\n" +
    "                                            <div class=\"btn-group\">\n" +
    "                                                <button type=\"button\" ng-repeat=\"attachment in story.attachments\" class=\"btn btn-default\" style=\"background:url(https://s3.amazonaws.com/getagile/{{attachment.name}}) no-repeat center; background-size:100%;\" ng-click=\"showAttachment('https://s3.amazonaws.com/getagile/' + attachment.name)\">&nbsp;</button>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div ng-class=\"{ 'invisible' : !story.isCurrentFocus }\" class=\"pull-left\">\n" +
    "                                        <a href=\"\" ng-click=\"regressStory(columnKey, story.$id)\"><span class=\"glyphicon glyphicon-arrow-left\"></span></a>\n" +
    "                                        <a href=\"\" ng-click=\"progressStory(columnKey, story.$id)\"><span class=\"glyphicon glyphicon-arrow-right\"></span></a>\n" +
    "                                        <a href=\"\" ng-click=\"showEditStoryUI(story)\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\n" +
    "                                    </div>\n" +
    "                                    <div ng-class=\"{ 'invisible' : !story.isCurrentFocus }\" class=\"pull-right\">\n" +
    "\n" +
    "                                        <a href=\"\" ng-click=\"deleteStory(story.$id)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\n" +
    "                                    </div>\n" +
    "                                </li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('views/boardSelector.html',
    "<select ng-model=\"selectedBoardName\" class=\"form-control input-sm\">\n" +
    "    <option ng-repeat=\"(key, board) in boards\" value=\"{{key}}\">{{board.name}}</option>\n" +
    "</select>"
  );


  $templateCache.put('views/boards.html',
    "<ul>\n" +
    "    <li ng-repeat=\"board in boards\"><a ng-href=\"#/boards/{{$index}}\">{{board.name}}</a></li>\n" +
    "</ul>\n" +
    "\n"
  );


  $templateCache.put('views/dashboard.html',
    "<p>This is the dashboard view.</p>\n"
  );


  $templateCache.put('views/dragAndDropFileUpload.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <div class=\"dropZone\" style=\"border:4px dashed #ccc; color:#ccc; width:100%; height:58px; text-align:center; line-height:50px; margin-bottom:10px;\">\n" +
    "            Drop files here\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-md-2\" ng-repeat=\"attachment in attachments\">\n" +
    "        <a href=\"\" class=\"thumbnail\">\n" +
    "            <img ng-src=\"{{attachment}}\" />\n" +
    "        </a>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('views/editStory.html',
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\" ng-click=\"cancel()\" aria-hidden=\"true\">&times;</button>\n" +
    "    <h4 class=\"modal-title\" id=\"addStoryLabel\">Edit Story</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <form class=\"form-horizontal\" role=\"form\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-3\" for=\"storySummary\">Summary</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"storySummary\" ng-model=\"story.summary\" focus ui-keypress=\"{13:'save()'}\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-3\" for=\"storyEstimate\">Estimate</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"storyEstimate\" ng-model=\"story.estimate\" ui-keypress=\"{13:'save()'}\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-3\" for=\"storyDescription\">Description</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <textarea class=\"form-control\" id=\"storyDescription\" ng-model=\"story.description\" rows=\"6\"></textarea>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"save()\">Save</button>\n" +
    "</div>"
  );


  $templateCache.put('views/home.html',
    "<p>This is the home views.</p>"
  );


  $templateCache.put('views/login.html',
    "<div class=\"container\">\n" +
    "    <div class=\"well well-lg col-sm-6 col-sm-offset-3\">\n" +
    "        <!--<div class=\"panel-body\">-->\n" +
    "            <form class=\"form-horizontal\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"control-label sr-only\">Email Address</label>\n" +
    "                    <div class=\"col-sm-12\">\n" +
    "                        <input type=\"text\" ng-model=\"email\" class=\"form-control input-lg\" placeholder=\"Email Address\" />\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"control-label sr-only\">Password</label>\n" +
    "                    <div class=\"col-sm-12\">\n" +
    "                        <input type=\"password\" ng-model=\"pass\" class=\"form-control input-lg\" placeholder=\"Password\" />\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <div class=\"col-sm-12\">\n" +
    "                        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" ng-click=\"login()\">Login</button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "        <!--</div>-->\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('views/loginForm.html',
    "<div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\" ng-click=\"cancel()\" aria-hidden=\"true\">&times;</button>\n" +
    "    <h4 class=\"modal-title\" id=\"addColumnLabel\">Login</h4>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <form class=\"form-horizontal\" role=\"form\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-3\" for=\"emailAddress\">Username</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"emailAddress\" ng-model=\"credentials.emailAddress\" focus />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-3\" for=\"password\">Password</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"password\" class=\"form-control\" id=\"password\" ng-model=\"credentials.password\" ui-keypress=\"{13:'login()'}\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"login()\">Login</button>\n" +
    "</div>"
  );


  $templateCache.put('views/profile.html',
    "<div class=\"container\">\n" +
    "    <h1>My Profile</h1>\n" +
    "    <form class=\"form-horizontal\" role=\"form\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-3\" for=\"userName\">Name</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"userName\" ng-model=\"user.name\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-3\" for=\"userEmail\">Email</label>\n" +
    "            <div class=\"col-sm-9\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"userEmail\" ng-model=\"user.email\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-offset-3 col-sm-9\">\n" +
    "                <button type=\"submit\" class=\"btn btn-default\" ng-click=\"save()\">Save</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n"
  );


  $templateCache.put('views/release-notes.html',
    "<div class=\"container\">\n" +
    "    <h1>Release Notes</h1>\n" +
    "    <h2>Planned Features &amp; Enhancements</h2>\n" +
    "    <ul>\n" +
    "        <li>Ability to schedule sprints.</li>\n" +
    "        <li>Burndown reporting.</li>\n" +
    "    </ul>\n" +
    "    <h2>What's Available in 0.1a</h2>\n" +
    "    <ul>\n" +
    "        <li>Login via Facebook.</li>\n" +
    "        <li>Ability to add storyboards.</li>\n" +
    "        <li>Ability to add and delete stories.</li>\n" +
    "        <li>Ability to add and delete columns.</li>\n" +
    "        <li>Drag and drop prioritisation of user stories.</li>\n" +
    "    </ul>\n" +
    "    <h3>Known Issues</h3>\n" +
    "    <p>There are no known issues at this time.</p>\n" +
    "</div>\n"
  );

}]);
