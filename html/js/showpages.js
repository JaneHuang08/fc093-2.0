var ShowPages = function (Parmes, RecordCount, PageCount, PageSize, CurrentPage) {
    var strPage = "";

    if (RecordCount > 0) {
        if (Parmes != "")
            Parmes += "&";

        strPage = "<div style=\"float:inline-block; padding:5px; height:23px;\" class=\"datagrid-pager\"><ul class=\"page\">";

        if (RecordCount > PageSize) {
            if (CurrentPage != 1) {
                strPage += "<li><a href='?" + Parmes + "p=" + (CurrentPage - 1) + "' target=\"_self\">上页</a></li>";

                if (CurrentPage > 5 && PageCount > 9)
                    strPage += "<li><a href='?" + Parmes + "p=1' target=\"_self\">1...</a></li>";
            }
            else {
                strPage += "<li><div>上页</div></li>";
            }

            var m = 0;

            if (CurrentPage > 5 && PageCount > 9) {
                if (PageCount - CurrentPage < 5) {
                    m = PageCount - 9;
                }
                else {
                    m = CurrentPage - 5;
                }
            }

            for (var i = m; i < PageCount; i++) {
                if (i == m + 9) {
                    break;
                }

                if (CurrentPage == (i + 1)) {
                    strPage += "<li class='currentpage'>" + (i + 1) + "</li>";
                    continue;
                }

                strPage += "<li><a href='?" + Parmes + "p=" + (i + 1) + "' target=\"_self\">" + (i + 1) + "</a></li>";
            }

            if (CurrentPage != PageCount) {
                if (CurrentPage + 5 <= PageCount && PageCount > 9) {
                    strPage += "<li><a href='?" + Parmes + "p=" + PageCount + "' target=\"_self\">..." + PageCount + "</a></li>";
                }

                strPage += "<li class='nextpages'><a href='?" + Parmes + "p=" + (CurrentPage + 1) + "' target=\"_self\">下页</a></li>";
            }
            else {
                strPage += "<li><div>下页</div></li>";
            }
        }

        strPage += "</ul><div style=\"float:right; line-height:21px; color:#666;\">共 <b>" + RecordCount + "</b> 条数据, 当前显示第 <b>" + CurrentPage + "</b>/<b>" + PageCount + "</b> 页, 每页显示 <b>" + PageSize + "</b> 条数据</div></div>";
    }
    else {
        strPage = "<div style=\"line-height:28px; margin-left:5px;\">Nothing Data！</div>";
    }

    var strCss = "\r\n\r\n<style type=\"text/css\">\r\n";
    strCss += ".page{display:inline-block; *display:inline; zoom:1; float:left;}\r\n";
    strCss += ".page li{list-style:none; float:left; margin-right:2px;}\r\n";
    strCss += ".page .currentpage{display:block; padding-left:7px; padding-right:7px; height:20px; line-height:20px; font-family:verdana; font-size:12px; color:white; font-weight:bold; background-color:#2393D5; border:solid 1px #2393D5;}\r\n";
    strCss += ".page a{display:block; padding-left:7px; padding-right:7px; height:20px; line-height:20px; font-family:verdana; font-size:12px;}";
    strCss += ".page a:link, .page a:visited{border:solid 1px #E0E0E0; color:#666; text-decoration:none; background-color:White;}\r\n";
    strCss += ".page a:hover{border:solid 1px #C0C0C0; color:#333; text-decoration:none;}\r\n";
    strCss += ".page div{display:block; padding-left:7px; padding-right:7px; height:20px; font-family:verdana; font-size:12px; line-height:21px; border:solid 1px #C8C8C4; color:#BBB; text-decoration:none; background-color:White;}\r\n";
    strCss += "</style>";

    return strPage + strCss;
}