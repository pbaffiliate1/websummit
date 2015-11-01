/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if" id="1" inline="false" x="38" y="25"><value name="IF0"><block type="logic_compare" id="2" inline="true"><field name="OP">GT</field><value name="A"><block type="dict_get" id="3" inline="true"><field name="ITEM">temp</field><value name="DICT"><block type="scriptr_request" id="4"><field name="request">parameters</field></block></value></block></value><value name="B"><block type="math_number" id="5"><field name="NUM">80</field></block></value></block></value><statement name="DO0"><block type="scriptr_return" id="6" inline="false"><value name="return"><block type="scriptr_sendmail" id="7" inline="true"><value name="to"><block type="text" id="8"><field name="TEXT">caroline@scriptr.io</field></block></value><value name="from"><block type="text" id="9"><field name="TEXT">your house</field></block></value><value name="subject"><block type="text" id="10"><field name="TEXT">it's hot</field></block></value><value name="body"><block type="text" id="11"><field name="TEXT">do something!</field></block></value></block></value></block></statement></block></xml>*#*#*/
if ((request.parameters)["temp"] > 80) {
  return sendMail ('caroline@scriptr.io', 'your house', 'it\'s hot', 'do something!')}
			