var options = "";
function customize() {
  // Get input values
	var blogurl = document.getElementsByName("iblogurl")[0].value;
	var numcomments = document.getElementsByName("inumcomments")[0].value;
        var showdate = document.getElementsByName("ishowdate")[0].checked;
        var showposttitle = document.getElementsByName("ishowtitle")[0].checked;
        var numchars = document.getElementsByName("inumchars")[0].value;
  // Generate widgetcode
        var txtarea = document.getElementsByTagName("textarea")[0];
        txtarea.value = "\<script style='text/javascript' src='http://wachidrahmanscript.googlecode.com/files/beatiful-beta-recent-comments.js'\>\</script\>";
        txtarea.value = txtarea.value + "\<script style='text/javascript'\>";
        txtarea.value = txtarea.value + "var numcomments = " + numcomments + ";";
        if (showdate) { txtarea.value = txtarea.value + "var showcommentdate = true;"; }
            else { txtarea.value = txtarea.value + "var showcommentdate = false;"; };
        if (showposttitle) { txtarea.value = txtarea.value + "var showposttitle = true;"; }
            else { txtarea.value = txtarea.value + "var showposttitle = false;"; };
        txtarea.value = txtarea.value + "var numchars = " + numchars + ";";
        txtarea.value = txtarea.value + "\</script\>";
        txtarea.value = txtarea.value + "\<script src='http://" + blogurl + ".blogspot.com/feeds/comments/default?alt=json-in-script&callback=showrecentcomments'\>\</script\>";
  // Submit form
        var form = document.getElementsByName("cust")[0];
        form.submit();
}

function defaultvalues() {
	document.getElementsByName("widget.title")[0].value = "Recent Posts";
        document.getElementsByName("iblogurl")[0].value = "new-page-tutorial";
	document.getElementsByName("inumcomments")[0].value = "5";
        document.getElementsByName("ishowdate")[0].checked = true;
        document.getElementsByName("ishowtitle")[0].checked = true;
        document.getElementsByName("inumchars")[0].value = "100";
}